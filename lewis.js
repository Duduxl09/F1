document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglelewis = document.getElementById("menuTogglelewis");
const menulewis = document.getElementById("sideMenulewis");
const overlaylewis = document.getElementById("overlaylewis");
const closelewis = document.getElementById("closeMenulewis");

const linksMenulewis = document.querySelectorAll(".side-menu-lewis a");

function fecharMenulewis() {
  if (menulewis) menulewis.classList.remove("active");
  if (overlaylewis) overlaylewis.classList.remove("active");
}

if (togglelewis) {
  togglelewis.addEventListener("click", () => {
    menulewis?.classList.add("active");
    overlaylewis?.classList.add("active");
  });
}

if (closelewis) {
  closelewis.addEventListener("click", fecharMenulewis);
}

if (overlaylewis) {
  overlaylewis.addEventListener("click", fecharMenulewis);
}

linksMenulewis.forEach(link => {
  link.addEventListener("click", fecharMenulewis);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkslewis() {

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

const lewisBanner = document.querySelector(".lewis-banner-bg");

if(lewisBanner){

  lewisBanner.addEventListener("mousemove", (e)=>{

    const rect = lewisBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lewisBanner.style.setProperty("--mouse-x", x + "px");
    lewisBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-lewis-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-lewis");

  const dotsContainer =
    document.querySelector(".dots-lewis");

  const bg =
    document.querySelector(".bg-slider-lewis");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-lewis");

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
    document.querySelectorAll(".dot-lewis");

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

  const secao = document.querySelector(".numeros-lewis");
  const bg = document.querySelector(".bg-numeros-lewis");

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

const cards = document.querySelectorAll(".animar-lewis");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-lewis");

        const barra =
          card.querySelector(".barra-velocidade-lewis");

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
    document.querySelector(".titulo-animar-lewis");

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

const lewisTemporadas = {
    "2007": [
  { gp:"Australia", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P9", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P4", pontos:"5", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P7", pontos:"2", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2008": [
  { gp:"Australia", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P10", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P7", pontos:"2", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P5", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2009": [
  { gp:"Australia", pos:"DSQ", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P7", pontos:"1", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P6", pontos:"3", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P4", pontos:"5", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P9", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P13", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P16", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P18", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P2", pontos:"8", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P1", pontos:"10", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P3", pontos:"6", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2010": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2011": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"hamilton-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P7", pontos:"6", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"hamilton-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P2", pontos:"18", tipo:"hamilton-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"India", pos:"P7", pontos:"6", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2012": [
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P10", pontos:"1", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"India", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2013": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P12", pontos:"0", tipo:"hamilton-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"hamilton-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"hamilton-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Korea", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"India", pos:"P6", pontos:"8", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"hamilton-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"hamilton-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2014": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"36", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"50", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2015": [
  { gp:"Australia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2016": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Europe", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2017": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Malaysia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2018": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],

"2019": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Germany", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"16", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P3", pontos:"16", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],


 "2020": [
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Styria", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"70th Anniversary", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P7", pontos:"7", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Tuscany", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Eifel", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Portugal", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Turkey", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],    
     
 "2021": [
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Portugal", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P7", pontos:"7", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P15", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Styria", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"7", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P17", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Turkey", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"19", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Qatar", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P1", pontos:"26", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
], 
  
 "2022": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P10", pontos:"1", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Australia", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P13", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Miami", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"France", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" }
], 
  
 "2023": [
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Miami", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"DSQ", pontos:"0", tipo:"lewis-dnf", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Las Vegas", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" }
], 
  
  "2024": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Miami", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lewis-vitoria", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Qatar", pos:"P2", pontos:"18", tipo:"lewis-podio", equipe:"Mercedes", logo:"icons/mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Mercedes", logo:"icons/mercedesa.png" }
],
  
"2025": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"DSQ", pontos:"0", tipo:"lewis-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"lewis-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P12", pontos:"0", tipo:"lewis-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"lewis-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
]

};
const lewisCampeonato = {
     
    "2007": {
  posicao: "2º",
  pontos: 109
}, 
     
  "2008": {
  posicao: "1º",
  pontos: 98
},

"2009": {
  posicao: "5º",
  pontos: 49
},

"2010": {
  posicao: "4º",
  pontos: 240
},

"2011": {
  posicao: "5º",
  pontos: 227
},

"2012": {
  posicao: "4º",
  pontos: 190
},

"2013": {
  posicao: "4º",
  pontos: 189
},

"2014": {
  posicao: "1º",
  pontos: 384
},

"2015": {
  posicao: "1º",
  pontos: 381
},
"2016": {
  posicao: "2º",
  pontos: 380
},

"2017": {
  posicao: "1º",
  pontos: 363
},

"2018": {
  posicao: "1º",
  pontos: 408
},

"2019": {
  posicao: "1º",
  pontos: 413
},

"2020": {
  posicao: "1º",
  pontos: 347
},

"2021": {
  posicao: "2º",
  pontos: 387.5
},

"2022": {
  posicao: "6º",
  pontos: 240
},

"2023": {
  posicao: "3º",
  pontos: 234
},

"2024": {
  posicao: "7º",
  pontos: 223
},
     
   "2025": {
  posicao: "6º",
  pontos: 249
}  
     
     
};


const lewisContainer =
document.querySelector(".lewis-corridas-container");

const lewisSummary =
document.querySelector(".lewis-season-summary");

const lewisBtns =
document.querySelectorAll(".lewis-ano-btn");



if (lewisContainer && lewisBtns.length > 0) {

  function carregarTemporada(ano) {

    lewisContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = lewisTemporadas[ano];

const anos = Object.keys(lewisTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  lewisTemporadas[anoAnterior]
  [lewisTemporadas[anoAnterior].length - 1];

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
      `lewis-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("lewis-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-lewis">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="lewis-gp">
    ${corrida.gp} GP
  </span>

  <div class="lewis-team">
    <img src="${corrida.logo}" class="lewis-team-logo">
  </div>

  <span class="lewis-resultado">
    ${corrida.pos}
  </span>

  <span class="lewis-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      lewisContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = lewisCampeonato[ano];

    if (lewisSummary) {

      lewisSummary.innerHTML = `
        <div class="lewis-summary-card show">

          <h3 class="lewis-summary-title">
            Season ${ano}
          </h3>

          <div class="lewis-summary-stats">

            <div class="lewis-summary-box">

              <span class="lewis-summary-label">
                Position
              </span>

              <span class="lewis-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="lewis-summary-box">

              <span class="lewis-summary-label">
                Points
              </span>

              <span class="lewis-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  lewisBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      lewisBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2007");

}


/*//////////////////////////////////////////
        TITULOS
/*//////////////////////////////////////////

const hamiltonTitles = {

  2008: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2008",
    subtitulo: "CAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Em sua segunda temporada na F1, Hamilton conquista o título mundial pela McLaren em uma das finais mais dramáticas da história em Interlagos.",
    imagem: "lewis/ham2008.png",
    quote: "This is for everyone back at the team.",
    stats: {
      vitorias: 5,
      podios: 10,
      pontos: 98,
      poles: 7,
      corridas: 18
    },
    timeline: [
      { tipo: "positive", titulo: "INÍCIO FORTE", texto: "Hamilton começa a temporada brigando pela liderança do campeonato.", resultado: "AUSTRÁLIA • P3" },
      { tipo: "positive", titulo: "CONSISTÊNCIA", texto: "Regularidade mantém Hamilton na disputa direta pelo título.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "ERROS SOB PRESSÃO", texto: "Algumas corridas complicadas deixam a disputa mais apertada.", resultado: "EUROPA • P5" },
      { tipo: "positive", titulo: "REAÇÃO FINAL", texto: "Hamilton recupera pontos importantes na reta final.", resultado: "CHINA • P1" },
      { tipo: "climax", titulo: "TÍTULO EM INTERLAGOS", texto: "Na última curva da última volta, Hamilton conquista o título mundial.", resultado: "CAMPEÃO MUNDIAL 2008" }
    ]
  },

  2014: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2014",
    subtitulo: "BICAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Com o início da era híbrida, Hamilton domina a temporada com a Mercedes e conquista seu segundo título.",
    imagem: "lewis/ham2014.png",
    quote: "We did it together.",
    stats: {
      vitorias: 11,
      podios: 16,
      pontos: 384,
      poles: 7,
      corridas: 19
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO INICIAL", texto: "Hamilton vence várias corridas no começo da temporada.", resultado: "BAHRAIN • P1" },
      { tipo: "positive", titulo: "BRIGA COM ROSBERG", texto: "Disputa interna intensa pelo campeonato.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "QUEBRA DE MOTOR", texto: "Abandono importante complica a disputa.", resultado: "MALÁSIA • DNF" },
      { tipo: "positive", titulo: "RECUPERAÇÃO", texto: "Sequência de vitórias recoloca Hamilton na liderança.", resultado: "USA • P1" },
      { tipo: "climax", titulo: "TÍTULO EM ABU DHABI", texto: "Vitória decisiva garante o segundo título mundial.", resultado: "CAMPEÃO MUNDIAL 2014" }
    ]
  },

  2015: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2015",
    subtitulo: "TRICAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Domínio absoluto da Mercedes com Hamilton consolidando sua posição como o melhor da era híbrida.",
    imagem: "lewis/ham2015.png",
    quote: "I'm just getting started.",
    stats: {
      vitorias: 10,
      podios: 17,
      pontos: 381,
      poles: 11,
      corridas: 19
    },
    timeline: [
      { tipo: "positive", titulo: "FORÇA INICIAL", texto: "Hamilton vence cedo e assume liderança do campeonato.", resultado: "AUSTRÁLIA • P1" },
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Mercedes domina praticamente todas as corridas.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "ERROS ISOLADOS", texto: "Pequenos erros não tiram a liderança.", resultado: "HUNGRIA • P6" },
      { tipo: "positive", titulo: "CONTROLE TOTAL", texto: "Hamilton administra vantagem confortável.", resultado: "USA • P2" },
      { tipo: "climax", titulo: "TRICAMPEÃO", texto: "Confirma o terceiro título com folga.", resultado: "CAMPEÃO MUNDIAL 2015" }
    ]
  },

  2017: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2017",
    subtitulo: "TETRACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Disputa intensa com Ferrari e Vettel, mas Hamilton leva a melhor no final.",
    imagem: "lewis/ham2017.png",
    quote: "Never give up.",
    stats: {
      vitorias: 9,
      podios: 13,
      pontos: 363,
      poles: 11,
      corridas: 20
    },
    timeline: [
      { tipo: "positive", titulo: "COMEÇO FORTE", texto: "Vitórias iniciais colocam Hamilton na liderança.", resultado: "CHINA • P1" },
      { tipo: "warning", titulo: "PRESSÃO FERRARI", texto: "Vettel pressiona durante toda a temporada.", resultado: "EUROPA • BATALHA" },
      { tipo: "danger", titulo: "COLISÕES", texto: "Acidentes aumentam a tensão no campeonato.", resultado: "AZERBAIJÃO • P5" },
      { tipo: "positive", titulo: "REAÇÃO", texto: "Hamilton retoma controle do campeonato.", resultado: "USA • P1" },
      { tipo: "climax", titulo: "TÍTULO", texto: "Consistência garante o tetracampeonato.", resultado: "CAMPEÃO MUNDIAL 2017" }
    ]
  },

  2018: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2018",
    subtitulo: "PENTACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Batalha intensa com Ferrari e Vettel até o fim da temporada.",
    imagem: "lewis/ham2018.png",
    quote: "Still we rise.",
    stats: {
      vitorias: 11,
      podios: 17,
      pontos: 408,
      poles: 11,
      corridas: 21
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Hamilton começa forte com vitórias seguidas.", resultado: "ESPANHA • P1" },
      { tipo: "warning", titulo: "FERRARI FORTE", texto: "Ferrari mantém campeonato apertado.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "danger", titulo: "ERROS VETTEL", texto: "Pressão gera erros decisivos do rival.", resultado: "JAPÃO • P6" },
      { tipo: "positive", titulo: "DECISÃO", texto: "Hamilton assume liderança definitiva.", resultado: "USA • P1" },
      { tipo: "climax", titulo: "TÍTULO", texto: "Confirma o quinto título mundial.", resultado: "CAMPEÃO MUNDIAL 2018" }
    ]
  },

  2019: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2019",
    subtitulo: "HEXACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Temporada dominante da Mercedes com Hamilton quase imbatível.",
    imagem: "lewis/ham2019.png",
    quote: "Hard work pays off.",
    stats: {
      vitorias: 11,
      podios: 17,
      pontos: 413,
      poles: 5,
      corridas: 21
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Vitórias consecutivas no início da temporada.", resultado: "BAHRAIN • P1" },
      { tipo: "positive", titulo: "CONSISTÊNCIA", texto: "Quase sempre no pódio.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "LEVE QUEDA", texto: "Algumas corridas abaixo do esperado.", resultado: "ALEMANHA • P9" },
      { tipo: "positive", titulo: "RETOMADA", texto: "Volta ao topo com vitórias importantes.", resultado: "USA • P2" },
      { tipo: "climax", titulo: "HEXACAMPEÃO", texto: "Mais um título dominante.", resultado: "CAMPEÃO MUNDIAL 2019" }
    ]
  },

  2020: {
    piloto: "Lewis",
    sobrenome: "Hamilton",
    ano: "2020",
    subtitulo: "HEPTACAMPEÃO MUNDIAL DE FÓRMULA 1",
    descricao: "Hamilton iguala Michael Schumacher com 7 títulos mundiais.",
    imagem: "lewis/ham2020.png",
    quote: "I’m just getting started.",
    stats: {
      vitorias: 11,
      podios: 14,
      pontos: 347,
      poles: 10,
      corridas: 17
    },
    timeline: [
      { tipo: "positive", titulo: "DOMÍNIO", texto: "Começa temporada vencendo com facilidade.", resultado: "STYRIA • P1" },
      { tipo: "positive", titulo: "CONSISTÊNCIA", texto: "Controle total do campeonato.", resultado: "MEIO DA TEMPORADA" },
      { tipo: "warning", titulo: "COVID SEASON", texto: "Calendário reduzido e imprevisível.", resultado: "2020" },
      { tipo: "positive", titulo: "RECORDES", texto: "Quebra recordes históricos.", resultado: "PORTUGAL • P1" },
      { tipo: "climax", titulo: "HEPTACAMPEÃO", texto: "Iguala Schumacher com 7 títulos mundiais.", resultado: "CAMPEÃO MUNDIAL 2020" }
    ]
  }

};

const hamiltonTitleContainer =
document.querySelector(".lewis-title-content");

function carregarTituloHamilton(ano){

  const data = hamiltonTitles[ano];
  if (!data) return;

  hamiltonTitleContainer.innerHTML = `
    <section class="lewis-season-card">

      <div class="lewis-title-buttons">
        ${Object.keys(hamiltonTitles).map(y => `
          <button class="lewis-title-btn ${y == ano ? "active" : ""}"
          data-title="${y}">
            ${y}
          </button>
        `).join("")}
      </div>

      <div class="lewis-hero">

        <div class="lewis-hero-left">
          <img src="${data.imagem}" class="lewis-hero-art">
        </div>

        <div class="lewis-hero-right">

          <span class="lewis-year">${data.ano}</span>

          <h1 class="lewis-name">
            ${data.piloto}
            <span>${data.sobrenome}</span>
          </h1>

          <h2 class="lewis-subtitle">${data.subtitulo}</h2>

          <div class="lewis-description">${data.descricao}</div>

          <div class="lewis-stats">
            <div class="lewis-stat-box"><h3>${data.stats.vitorias}</h3><p>Vitórias</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.podios}</h3><p>Pódios</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.pontos}</h3><p>Pontos</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.poles}</h3><p>Poles</p></div>
            <div class="lewis-stat-box"><h3>${data.stats.corridas}</h3><p>Corridas</p></div>
          </div>

        </div>

      </div>

      <div class="lewis-timeline-section">

        <h2 class="lewis-section-title">
          TEMPORADA ${data.ano}
        </h2>

        <div class="lewis-timeline-grid">

          ${data.timeline.map(e => `
            <div class="lewis-race-card ${e.tipo}">
              <h3>${e.titulo}</h3>
              <p>${e.texto}</p>
              <div class="lewis-race-result">${e.resultado}</div>
            </div>
          `).join("")}

        </div>

      </div>

    </section>
  `;

  // botão click (sem duplicar listener)
  document.querySelectorAll(".lewis-title-btn").forEach(btn => {
    btn.onclick = () => carregarTituloHamilton(btn.dataset.title);
  });

}

if (hamiltonTitleContainer){
  carregarTituloHamilton(2008);
}


/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-lewis");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-lewis div");

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

  const grafico = document.querySelector(".linha-lewis");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-lewis");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-lewis");

const fraseEng = '"P1 lewis, amazing race!"';
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

const spans = document.querySelectorAll(".wave-lewis span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-lewis");
const lightbox = document.querySelector(".lightbox-lewis");
const imgLightbox = document.querySelector(".img-lightbox-lewis");
const fechar = document.querySelector(".fechar-lewis");

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



/*///////////////////
 TEAM MATES
/////////////////////*/



const hamiltonData=[

{

first:"FERNANDO",

last:"ALONSO",

img:"lewis/alonso.png",

years:"2007",

stats:{

quali:[10,7],

races:[7,10],

podiums:[12,12],

wins:[4,4],

pole:[6,2],

points:[109,109]

}

},



{

first:"HEIKKI",

last:"KOVALAINEN",

img:"lewis/kovaleinen.png",

years:"2008 — 2009",

stats:{

quali:[26,9],

races:[23,11],

podiums:[18,7],

wins:[10,1],

pole:[8,1],

points:[147,105]

}

},



{

first:"JENSON",

last:"BUTTON",

img:"lewis/button.png",

years:"2010 — 2012",

stats:{

quali:[42,15],

races:[32,26],

podiums:[30,25],

wins:[10,8],

pole:[18,1],

points:[672,657]

}

},



{

first:"NICO",

last:"ROSBERG",

img:"lewis/rosberg.png",

years:"2013 — 2016",

stats:{

quali:[42,34],

races:[44,33],

podiums:[55,50],

wins:[32,22],

pole:[35,29],

points:[1334,1195]

}

},



{

first:"VALTTERI",

last:"BOTTAS",

img:"lewis/bottas.png",

years:"2017 — 2021",

stats:{

quali:[71,26],

races:[74,25],

podiums:[78,58],

wins:[50,10],

pole:[42,20],

points:[1413,1038]

}

},



{

first:"GEORGE",

last:"RUSSELL",

img:"lewis/russell.png",

years:"2022 — 2024",

stats:{

quali:[30,38],

races:[34,34],

podiums:[17,13],

wins:[2,3],

pole:[3,5],

points:[697,685]

}

},



{

first:"CHARLES",

last:"LECLERC",

img:"lewis/leclerc.png",

years:"2025",

stats:{

quali:[5,19],

races:[4,20],

podiums:[0,7],

wins:[0,0],

pole:[0,1],

points:[156,242]

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
"hamiltonYears"
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
"hamiltonQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"hamiltonQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"hamiltonRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"hamiltonRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"hamiltonPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"hamiltonPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"hamiltonWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"hamiltonWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"hamiltonPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"hamiltonPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"hamiltonPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"hamiltonPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"hamiltonBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"hamiltonBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"hamiltonBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"hamiltonBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"hamiltonBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"hamiltonBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"hamiltonBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"hamiltonBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"hamiltonBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"hamiltonBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"hamiltonBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"hamiltonBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
hamiltonData[
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
".hamilton-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.hamilton-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".hamilton-tab"
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
".hamilton-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

hamiltonData
.length-1



render(
current
)

}



document
.querySelector(
".hamilton-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
hamiltonData.length

)

current=0



render(
current
)

}



render(0) 








