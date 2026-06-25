document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglestroll = document.getElementById("menuTogglestroll");
const menustroll = document.getElementById("sideMenustroll");
const overlaystroll = document.getElementById("overlaystroll");
const closestroll = document.getElementById("closeMenustroll");

const linksMenustroll = document.querySelectorAll(".side-menu-stroll a");

function fecharMenustroll() {
  if (menustroll) menustroll.classList.remove("active");
  if (overlaystroll) overlaystroll.classList.remove("active");
}

if (togglestroll) {
  togglestroll.addEventListener("click", () => {
    menustroll?.classList.add("active");
    overlaystroll?.classList.add("active");
  });
}

if (closestroll) {
  closestroll.addEventListener("click", fecharMenustroll);
}

if (overlaystroll) {
  overlaystroll.addEventListener("click", fecharMenustroll);
}

linksMenustroll.forEach(link => {
  link.addEventListener("click", fecharMenustroll);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksstroll() {

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

})();


});


/*//////////*///////
//////BANNER///////////////
//////////////////

const strollBanner = document.querySelector(".stroll-banner-bg");

if(strollBanner){

  strollBanner.addEventListener("mousemove", (e)=>{

    const rect = strollBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    strollBanner.style.setProperty("--mouse-x", x + "px");
    strollBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-stroll-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-stroll");

  const dotsContainer =
    document.querySelector(".dots-stroll");

  const bg =
    document.querySelector(".bg-slider-stroll");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-stroll");

    if(i === 0){
      dot.classList.add("active");
    }

    dot.addEventListener("click", ()=>{

      index = i;

      updateSlide();

    });

    dotsContainer.appendChild(dot);

  });

  const dots =
    document.querySelectorAll(".dot-stroll");

  function updateSlide(){

    track.style.transform =
      `translateX(-${index * 100}%)`;

    dots.forEach(dot =>
      dot.classList.remove("active")
    );

    dots[index].classList.add("active");

    const img =
      slides[index].querySelector("img");

    if(img && bg){

      bg.style.backgroundImage =
        `url(${img.src})`;

    }

  }

  const nextBtn =
    document.querySelector(".next");

  const prevBtn =
    document.querySelector(".prev");

  if(nextBtn){

    nextBtn.onclick = ()=>{

      index++;

      if(index >= slides.length){
        index = 0;
      }

      updateSlide();

    };

  }

  if(prevBtn){

    prevBtn.onclick = ()=>{

      index--;

      if(index < 0){
        index = slides.length - 1;
      }

      updateSlide();

    };

  }

  let startX = 0;
  let endX = 0;

  track.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

  });

  track.addEventListener("touchmove",(e)=>{

    endX = e.touches[0].clientX;

  });

  track.addEventListener("touchend",()=>{

    let diff = startX - endX;

    if(diff > 50) index++;

    if(diff < -50) index--;

    if(index >= slides.length){
      index = 0;
    }

    if(index < 0){
      index = slides.length - 1;
    }

    updateSlide();

  });

  updateSlide();

}


/*//////////*///////
//////NUMEROS///////////////
//////////////////

window.addEventListener("scroll", function(){

  const secao = document.querySelector(".numeros-stroll");
  const bg = document.querySelector(".bg-numeros-stroll");

  if(!secao || !bg) return;

  const rect = secao.getBoundingClientRect();
  const alturaTela = window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){

    let progresso = rect.top / alturaTela;

    bg.style.transform =
      "translateY(" + progresso * 80 + "px) scale(1.05)";
  }

});


/* =========================
   CONTADORES
========================= */

const cards = document.querySelectorAll(".animar-stroll");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-stroll");

        const barra =
          card.querySelector(".barra-velocidade-stroll");

        if(!contador.classList.contains("contado")){

          contador.classList.add("contado");

          const target =
            +contador.getAttribute("data-target");

          let count = 0;

          const update = ()=>{

            const increment = target / 200;

            if(count < target){

              count += increment;

              contador.innerText =
                Math.floor(count);

              if(barra){
                barra.style.width =
                  (count/target*100)+"%";
              }

              setTimeout(update,40);

            }else{

              contador.innerText = target;

              if(barra){
                barra.style.width = "100%";
              }

            }

          };

          update();

        }

      }, index * 300);

    }

  });

}

window.addEventListener("scroll", animar);
animar();

/* =========================
   TITULO ANIMADO
========================= */

window.addEventListener("scroll", ()=>{

  const titulo =
    document.querySelector(".titulo-animar-stroll");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});


/*//////////*///////
//////TEMPORADAS///////////////
//////////////////

const strollTemporadas = {
     
"2017": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"stroll-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],


 "2018": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],

"2019": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Azerbaijan", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United States", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Brazil", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],

"2020": [
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Styria", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"70th Anniversary", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"stroll-podio", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Tuscany", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Eifel", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Portugal", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Emilia Romagna", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Turkey", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Sakhir", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],

"2021": [
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Portugal", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"France", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Styria", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Russia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Turkey", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],


"2022": [
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"France", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],

"2023": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"P5", pontos:"10", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],


"2024": [
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P19", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P11", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"DNS", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],


"2025": [
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P20", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Bahrain", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P16", pontos:"4", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P15", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P18", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P17", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P13", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P12", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P16", pontos:"0", tipo:"stroll-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"stroll-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"stroll-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
]

};
const strollCampeonato = {
     
"2017": {
  posicao: "12º",
  pontos: 40
},           
     
 "2018": {
  posicao: "18º",
  pontos: 6
},         
 
"2019": {
  posicao: "15º",
  pontos: 21
},  
 
"2020": {
  posicao: "11º",
  pontos: 75
}, 
     
 "2021": {
  posicao: "13º",
  pontos: 34
}, 
 
"2022": {
  posicao: "15º",
  pontos: 18
},       

"2023": {
  posicao: "10º",
  pontos: 74
}, 


"2024": {
  posicao: "13º",
  pontos: 24
},      

"2025": {
  posicao: "15º",
  pontos: 33
}
 
     
};
     
     const strollContainer =
document.querySelector(".stroll-corridas-container");

const strollSummary =
document.querySelector(".stroll-season-summary");

const strollBtns =
document.querySelectorAll(".stroll-ano-btn");



if (strollContainer && strollBtns.length > 0) {

  function carregarTemporada(ano) {

    strollContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = strollTemporadas[ano];

const anos = Object.keys(strollTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  strollTemporadas[anoAnterior]
  [strollTemporadas[anoAnterior].length - 1];

  equipeTemporadaAnterior = ultimaCorrida.equipe;
}


    temporada.forEach((corrida, index) => {

      const card = document.createElement("div");

const mudouEquipe =
(index === 0 &&
equipeTemporadaAnterior &&
equipeTemporadaAnterior !== corrida.equipe)
||
(equipeAnterior && equipeAnterior !== corrida.equipe);

let transferHTML = "";

      card.className =
      `stroll-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("stroll-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-stroll">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="stroll-gp">
    ${corrida.gp} GP
  </span>

  <div class="stroll-team">
    <img src="${corrida.logo}" class="stroll-team-logo">
  </div>

  <span class="stroll-resultado">
    ${corrida.pos}
  </span>

  <span class="stroll-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      strollContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = strollCampeonato[ano];

    if (strollSummary) {

      strollSummary.innerHTML = `
        <div class="stroll-summary-card show">

          <h3 class="stroll-summary-title">
            Season ${ano}
          </h3>

          <div class="stroll-summary-stats">

            <div class="stroll-summary-box">

              <span class="stroll-summary-label">
                Position
              </span>

              <span class="stroll-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="stroll-summary-box">

              <span class="stroll-summary-label">
                Points
              </span>

              <span class="stroll-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  strollBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      strollBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2017");

}
     

/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-stroll");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-stroll div");

      if (barra && !barra.classList.contains("ativo")) {
        barra.classList.add("ativo");

        const width = barra.getAttribute("data-width");
        barra.style.width = width;
      }
    }
  });
}

window.addEventListener("scroll", animarPilotagem);
animarPilotagem();

function animarGrafico() {

  const grafico = document.querySelector(".linha-stroll");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-stroll");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-stroll");

const fraseEng = '"P1 stroll, amazing race!"';
const frasePil = '"Thank you guys, car was perfect!"';

let i = 0;
let j = 0;
let timeouts = [];

/* RESET */
function resetar() {
  audio.pause();
  audio.currentTime = 0;

  engText.innerHTML = "";
  pilText.innerHTML = "";

  i = 0;
  j = 0;

  card.classList.remove("ativo", "falando", "saindo");

  /* 👇 fecha conteúdo */
  content.style.height = "0px";

  timeouts.forEach(t => clearTimeout(t));
  timeouts = [];
}

/* ESCREVER ENGENHEIRO */
function escreverEng() {
  if (i < fraseEng.length) {
    engText.innerHTML += fraseEng[i++];
    timeouts.push(setTimeout(escreverEng, 20));
  }
}

/* ESCREVER PILOTO */
function escreverPil() {
  if (j < frasePil.length) {
    pilText.innerHTML += frasePil[j++];
    timeouts.push(setTimeout(escreverPil, 20));
  }
}

/* INICIAR */
function iniciar() {
  resetar();

card.classList.remove("mostrar-texto");

  audio.currentTime = 0;
  audio.play().catch(()=>{});

  card.classList.add("ativo");

  content.style.height = "0px";
  content.offsetHeight;

  // wave liga
  timeouts.push(setTimeout(() => {
    card.classList.add("falando");
  }, 300));

  // 👇 cresce + sobe (engenheiro)
  timeouts.push(setTimeout(() => {
    content.style.height = "120px";
    card.classList.add("mostrar-texto");
    escreverEng();
  }, 800));

  // 👇 expande mais (piloto)
  timeouts.push(setTimeout(() => {
    content.style.height = "220px";
  }, 2000));

  // piloto
  timeouts.push(setTimeout(() => {
    escreverPil();
  }, 2100));

  // desliga rádio
  timeouts.push(setTimeout(() => {
    card.classList.remove("falando");
  }, 3000));

  // some
  timeouts.push(setTimeout(() => {
    card.classList.add("saindo");
  }, 3500));
}

/* CLIQUE */
section.addEventListener("click", iniciar);

const spans = document.querySelectorAll(".wave-stroll span");

spans.forEach((span, index) => {
  span.style.setProperty("--i", index);
});


const topBtn = document.querySelector('a[href="#top"]');

if(topBtn){
  topBtn.addEventListener("click", function(e){
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
  
  
      /*/////////////////////////////////////
  GALERIA
  ////////////////////////////////////*/
  
  
  
  const itens = document.querySelectorAll(".item-galeria-stroll");
const lightbox = document.querySelector(".lightbox-stroll");
const imgLightbox = document.querySelector(".img-lightbox-stroll");
const fechar = document.querySelector(".fechar-stroll");

/* ABRIR */
itens.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    imgLightbox.src = img;
    lightbox.style.display = "flex";
  });
});

/* FECHAR */
fechar.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target !== imgLightbox) {
    lightbox.style.display = "none";
  }
};


const lanceData=[

{

first:"FELIPE",

last:"MASSA",

img:"stroll/massa.png",

years:"2017",

stats:{

quali:[4,15],

races:[7,8],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[40,43]

}

},

{

first:"SERGEY",

last:"SIROTKIN",

img:"stroll/sirotkin.png",

years:"2018",

stats:{

quali:[6,15],

races:[10,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[6,1]

}

},

{

first:"SERGIO",

last:"PEREZ",

img:"stroll/perez.png",

years:"2019 — 2020",

stats:{

quali:[9,24],

races:[13,19],

podiums:[2,2],

wins:[0,1],

pole:[1,0],

points:[149,199]

}

},

{

first:"SEBASTIAN",

last:"VETTEL",

img:"stroll/vettel.png",

years:"2021 — 2022",

stats:{

quali:[14,30],

races:[18,20],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[92,129]

}

},

{

first:"FERNANDO",

last:"ALONSO",

img:"stroll/alonso.png",

years:"2023 — 2025",

stats:{

quali:[9,67],

races:[19,54],

podiums:[0,8],

wins:[0,0],

pole:[0,0],

points:[195,456]

}

}

]


let current=0



const mateImg=
document.getElementById(
"mateImg"
)

const mateFirst=
document.getElementById(
"mateFirst"
)

const mateLast=
document.getElementById(
"mateLast"
)

const years=
document.getElementById(
"lanceYears"
)



function setBar(
id,
value,
max
){

document
.getElementById(id)
.style.width=

(value/max*100)

+"%"

}



function animateNumber(
el,
target
){

let value=0

const speed=
target/30



const timer=
setInterval(()=>{

value+=speed



if(
value>=target
){

value=
target

clearInterval(
timer
)

}



el.textContent=

Math.floor(
value
)

},20)

}





function updateStats(
data
){

const maxQuali=
Math.max(
...data.stats.quali
)

const maxRace=
Math.max(
...data.stats.races
)

const maxPod=
Math.max(
...data.stats.podiums
)

const maxWin=
Math.max(
...data.stats.wins
)

const maxPole=
Math.max(
...data.stats.pole
)

const maxPoints=
Math.max(
...data.stats.points
)



animateNumber(

document.getElementById(
"lanceQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"lanceQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"lanceRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"lanceRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"lancePodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"lancePodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"lanceWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"lanceWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"lancePoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"lancePoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"lancePointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"lancePointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"lanceBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"lanceBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"lanceBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"lanceBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"lanceBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"lanceBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"lanceBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"lanceBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"lanceBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"lanceBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"lanceBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"lanceBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
lanceData[
index
]



mateImg.style.opacity=0



setTimeout(()=>{

mateImg.src=
d.img

mateImg.style.opacity=1

},250)



mateFirst.textContent=
d.first

mateLast.textContent=
d.last

years.textContent=
d.years



updateStats(
d
)



document
.querySelectorAll(
".lance-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.lance-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".lance-tab"
)

.forEach(

btn=>{

btn.onclick=()=>{

current=

Number(

btn.dataset.id

)



render(
current
)

}

}

)



document
.querySelector(
".lance-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

lanceData
.length-1



render(
current
)

}



document
.querySelector(
".lance-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
lanceData.length

)

current=0



render(
current
)

}



render(0) 