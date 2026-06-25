document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const toggleocon = document.getElementById("menuToggleocon");
const menuocon = document.getElementById("sideMenuocon");
const overlayocon = document.getElementById("overlayocon");
const closeocon = document.getElementById("closeMenuocon");

const linksMenuocon = document.querySelectorAll(".side-menu-ocon a");

function fecharMenuocon() {
  if (menuocon) menuocon.classList.remove("active");
  if (overlayocon) overlayocon.classList.remove("active");
}

if (toggleocon) {
  toggleocon.addEventListener("click", () => {
    menuocon?.classList.add("active");
    overlayocon?.classList.add("active");
  });
}

if (closeocon) {
  closeocon.addEventListener("click", fecharMenuocon);
}

if (overlayocon) {
  overlayocon.addEventListener("click", fecharMenuocon);
}

linksMenuocon.forEach(link => {
  link.addEventListener("click", fecharMenuocon);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksocon() {

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

const oconBanner = document.querySelector(".ocon-banner-bg");

if(oconBanner){

  oconBanner.addEventListener("mousemove", (e)=>{

    const rect = oconBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    oconBanner.style.setProperty("--mouse-x", x + "px");
    oconBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-ocon-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-ocon");

  const dotsContainer =
    document.querySelector(".dots-ocon");

  const bg =
    document.querySelector(".bg-slider-ocon");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-ocon");

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
    document.querySelectorAll(".dot-ocon");

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

  const secao = document.querySelector(".numeros-ocon");
  const bg = document.querySelector(".bg-numeros-ocon");

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

const cards = document.querySelectorAll(".animar-ocon");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-ocon");

        const barra =
          card.querySelector(".barra-velocidade-ocon");

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
    document.querySelector(".titulo-animar-ocon");

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

const oconTemporadas = {

"2016": [
  { gp:"Belgium", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"Italy", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"Singapore", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"Malaysia", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"Japan", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"United States", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Manor Racing", logo:"icons/manor.png" }
],


"2017": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2018": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"France", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P11", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Racing Point Force India", logo:"aston/force.svg" }
],

"2020": [
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Styria", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"70th Anniversary", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Spain", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Tuscany", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Eifel", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Portugal", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Turkey", pos:"P11", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"ocon-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Sakhir", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Renault", logo:"alpine/renault.png" }
],

"2021": [
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Emilia Romagna", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Portugal", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"France", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Styria", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"ocon-vitoria", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Russia", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Turkey", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Qatar", pos:"P5", pontos:"10", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
],

"2022": [
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Emilia Romagna", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"France", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
],

"2023": [
  { gp:"Bahrain", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Saudi Arabia", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Australia", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"ocon-podio", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Qatar", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P17", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Las Vegas", pos:"P4", pontos:"12", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P12", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
],

"2024": [
  { gp:"Bahrain", pos:"P17", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Saudi Arabia", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Australia", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Japan", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Miami", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P21", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Singapore", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"ocon-podio", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Las Vegas", pos:"P17", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
],


"2025": [
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Japan", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Saudi Arabia", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Miami", pos:"P12", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"ocon-dnf", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Belgium", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Hungary", pos:"P16", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Netherlands", pos:"P10", pontos:"1", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Singapore", pos:"P18", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"United States", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Las Vegas", pos:"P9", pontos:"2", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Qatar", pos:"P15", pontos:"0", tipo:"ocon-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"ocon-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
] 


};
const oconCampeonato = {
     
"2016":{
     posicao: "23°",
     pontos: 0
},
 
"2017":{
     posicao: "8°",
     pontos: 87
},  
 
"2018":{
     posicao: "12°",
     pontos: 49
},  
 
"2020":{
     posicao: "12°",
     pontos: 62
},  
 
 "2021":{
     posicao: "11°",
     pontos: 74
}, 
 
"2022":{
     posicao: "8°",
     pontos: 92
}, 

"2023":{
     posicao: "12°",
     pontos: 58
}, 

"2024":{
     posicao: "14°",
     pontos: 23
}, 

"2025": {
  posicao: "15º",
  pontos: 34
}
     
};
     
     const oconContainer =
document.querySelector(".ocon-corridas-container");

const oconSummary =
document.querySelector(".ocon-season-summary");

const oconBtns =
document.querySelectorAll(".ocon-ano-btn");



if (oconContainer && oconBtns.length > 0) {

  function carregarTemporada(ano) {

    oconContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = oconTemporadas[ano];

const anos = Object.keys(oconTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  oconTemporadas[anoAnterior]
  [oconTemporadas[anoAnterior].length - 1];

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
      `ocon-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("ocon-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-ocon">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="ocon-gp">
    ${corrida.gp} GP
  </span>

  <div class="ocon-team">
    <img src="${corrida.logo}" class="ocon-team-logo">
  </div>

  <span class="ocon-resultado">
    ${corrida.pos}
  </span>

  <span class="ocon-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      oconContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = oconCampeonato[ano];

    if (oconSummary) {

      oconSummary.innerHTML = `
        <div class="ocon-summary-card show">

          <h3 class="ocon-summary-title">
            Season ${ano}
          </h3>

          <div class="ocon-summary-stats">

            <div class="ocon-summary-box">

              <span class="ocon-summary-label">
                Position
              </span>

              <span class="ocon-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="ocon-summary-box">

              <span class="ocon-summary-label">
                Points
              </span>

              <span class="ocon-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  oconBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      oconBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2016");

}
     
/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-ocon");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-ocon div");

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

  const grafico = document.querySelector(".linha-ocon");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-ocon");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-ocon");

const fraseEng = '"P1 ocon, amazing race!"';
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

const spans = document.querySelectorAll(".wave-ocon span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-ocon");
const lightbox = document.querySelector(".lightbox-ocon");
const imgLightbox = document.querySelector(".img-lightbox-ocon");
const fechar = document.querySelector(".fechar-ocon");

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



const estebanData=[
{

first:"PASCAL",

last:"WEHRLEIN",

img:"ocon/wehrlein.png",

years:"2016",

stats:{

quali:[4,5],

races:[4,5],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[0,1]

}

},

	
{

first:"SERGIO",

last:"PEREZ",

img:"ocon/perez.png",

years:"2017 — 2018",

stats:{

quali:[16,25],

races:[18,19],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[136,155]

}

},

{

first:"DANIEL",

last:"RICCIARDO",

img:"ocon/ricciardo.png",

years:"2020",

stats:{

quali:[7,10],

races:[9,8],

podiums:[1,2],

wins:[1,0],

pole:[0,0],

points:[62,119]

}

},

{

first:"FERNANDO",

last:"ALONSO",

img:"ocon/alonso.png",

years:"2021 — 2022",

stats:{

quali:[21,23],

races:[16,20],

podiums:[1,1],

wins:[1,0],

pole:[0,0],

points:[166,162]

}

},

{

first:"PIERRE",

last:"GASLY",

img:"ocon/gasly.png",

years:"2023 — 2024",

stats:{

quali:[23,21],

races:[20,18],

podiums:[1,1],

wins:[0,0],

pole:[0,0],

points:[70,68]

}

},

{

first:"OLIVER",

last:"BEARMAN",

img:"ocon/bearman.png",

years:"2025",

stats:{

quali:[12,10],

races:[12,7],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[39,22]

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
"estebanYears"
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
"estebanQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"estebanQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"estebanRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"estebanRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"estebanPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"estebanPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"estebanWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"estebanWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"estebanPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"estebanPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"estebanPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"estebanPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"estebanBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"estebanBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"estebanBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"estebanBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"estebanBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"estebanBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"estebanBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"estebanBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"estebanBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"estebanBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"estebanBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"estebanBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
estebanData[
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
".esteban-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.esteban-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".esteban-tab"
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
".esteban-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

estebanData
.length-1



render(
current
)

}



document
.querySelector(
".esteban-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
estebanData.length

)

current=0



render(
current
)

}



render(0) 