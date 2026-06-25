document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglefernando = document.getElementById("menuTogglefernando");
const menufernando = document.getElementById("sideMenufernando");
const overlayfernando = document.getElementById("overlayfernando");
const closefernando = document.getElementById("closeMenufernando");

const linksMenufernando = document.querySelectorAll(".side-menu-fernando a");

function fecharMenufernando() {
  if (menufernando) menufernando.classList.remove("active");
  if (overlayfernando) overlayfernando.classList.remove("active");
}

if (togglefernando) {
  togglefernando.addEventListener("click", () => {
    menufernando?.classList.add("active");
    overlayfernando?.classList.add("active");
  });
}

if (closefernando) {
  closefernando.addEventListener("click", fecharMenufernando);
}

if (overlayfernando) {
  overlayfernando.addEventListener("click", fecharMenufernando);
}

linksMenufernando.forEach(link => {
  link.addEventListener("click", fecharMenufernando);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksfernando() {

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

const fernandoBanner = document.querySelector(".fernando-banner-bg");

if(fernandoBanner){

  fernandoBanner.addEventListener("mousemove", (e)=>{

    const rect = fernandoBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    fernandoBanner.style.setProperty("--mouse-x", x + "px");
    fernandoBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-fernando-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-fernando");

  const dotsContainer =
    document.querySelector(".dots-fernando");

  const bg =
    document.querySelector(".bg-slider-fernando");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-fernando");

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
    document.querySelectorAll(".dot-fernando");

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

  const secao = document.querySelector(".numeros-fernando");
  const bg = document.querySelector(".bg-numeros-fernando");

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

const cards = document.querySelectorAll(".animar-fernando");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-fernando");

        const barra =
          card.querySelector(".barra-velocidade-fernando");

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
    document.querySelector(".titulo-animar-fernando");

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

const fernandoTemporadas = {
     
  "2001": [
  { gp:"Australia", pos:"P12", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Malaysia", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"San Marino", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Spain", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Europe", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"France", pos:"P17", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"United Kingdom", pos:"P16", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Germany", pos:"P10", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Minardi", logo:"RB/minardi.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Minardi", logo:"RB/minardi.png" }
],

"2003": [
  { gp:"Australia", pos:"P7", pontos:"2", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Malaysia", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Brazil", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"San Marino", pos:"P6", pontos:"3", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Spain", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Monaco", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Canada", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Europe", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"France", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"United Kingdom", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Germany", pos:"P4", pontos:"5", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Hungary", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Italy", pos:"P8", pontos:"1", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Japan", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" }
],

 "2004": [
  { gp:"Australia", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Malaysia", pos:"P7", pontos:"2", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Bahrein", pos:"P6", pontos:"2", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"San Marino", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Spain", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Europe", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"France", pos:"P2", pontos:"8", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"United Kingdom", pos:"P10", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Germany", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Hungary", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Chine", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
  { gp:"Japan", pos:"P5", pontos:"4", tipo:"fernando--pontos", equipe:"Renault", logo:"alpine/renault.png" },
  
    { gp:"Brazil", pos:"P4", pontos:"5", tipo:"fernando--pontos", equipe:"Renault", logo:"alpine/renault.png" }
  
],

"2005": [
  { gp:"Australia", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Malaysia", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Bahrain", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"San Marino", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Spain", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Monaco", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Europe", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"United States", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"France", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Great Britain", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Germany", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Turkey", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Italy", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Belgium", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Brazil", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Japan", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"China", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" }
],

"2006": [
  { gp:"Bahrain", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Malaysia", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Australia", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"San Marino", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Europe", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Spain", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Monaco", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Canada", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"United States", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"France", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Germany", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Hungary", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Turkey", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"China", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Japan", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Brazil", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" }
],

"2007": [
  { gp:"Australia", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United Kingdom", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P7", pontos:"2", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"PDNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2008": [
  { gp:"Australia", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Malaysia", pos:"P8", pontos:"1", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Bahrain", pos:"P10", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Spain", pos:"P12", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Turkey", pos:"P6", pontos:"3", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Monaco", pos:"P10", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Canada", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"France", pos:"P8", pontos:"1", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Great Britain", pos:"P6", pontos:"3", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Germany", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Hungary", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Europe", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Belgium", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Italy", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Singapore", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Japan", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"China", pos:"P4", pontos:"5", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Brazil", pos:"P2", pontos:"8", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" }
],

"2009": [
  { gp:"Australia", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Malaysia", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"China", pos:"P9", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Bahrain", pos:"P8", pontos:"1", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Spain", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Monaco", pos:"P7", pontos:"2", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Turkey", pos:"P10", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Germany", pos:"P7", pontos:"2", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Hungary", pos:"P6", pontos:"3", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Europe", pos:"P1", pontos:"10", tipo:"fernando-vitoria", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Belgium", pos:"P3", pontos:"6", tipo:"fernando-podio", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Italy", pos:"P5", pontos:"4", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Singapore", pos:"P18", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Japan", pos:"P10", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Brazil", pos:"P8", pontos:"1", tipo:"fernando-pontos", equipe:"Renault", logo:"alpine/renault.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Renault", logo:"alpine/renault.png" }
],

"2010": [
  { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Malaysia", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Europe", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"South Korea", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],

"2011": [
  { gp:"Australia", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Malaysia", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Europe", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"South Korea", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"India", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],

"2012": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Malaysia", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Europe", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Germany", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"South Korea", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"India", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],

"2013": [
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"fernando-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Germany", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"South Korea", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"India", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],

"2014": [
  { gp:"Australia", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Malaysia", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Germany", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"4", tipo:"fernando-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],

"2015": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"DNS", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P16", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P17", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2016": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"DNS", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"DNS", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Europe", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P12", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P16", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2017": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P12", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"DNS", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P18", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2018": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P16", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P17", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2021": [
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Emilia Romagna", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Portugal", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Spain", pos:"P17", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"France", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Styria", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Turkey", pos:"P16", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Qatar", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Saudi Arabia", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" }
],

"2022": [
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Saudi Arabia", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Emilia Romagna", pos:"P17", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Miami", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Great Britain", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"France", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Alpine", logo:"icons/Alpinef1.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Alpine", logo:"icons/Alpinef1.png" }
],

"2023": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P2", pontos:"18", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P15", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],

"2024": [
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P19", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P12", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P18", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P13", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"P18", pontos:"0", tipo:"fernando-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P14", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],

"2025": [
  { gp:"Australia", pos:"P17", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Miami", pos:"P15", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Emilia Romagna", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Belgium", pos:"P17", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"fernando-podio", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Italy", pos:"P19", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Azerbaijan", pos:"P15", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"fernando-dnf", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Las Vegas", pos:"P11", pontos:"0", tipo:"fernando-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Qatar", pos:"P8", pontos:"4", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"fernando-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
]

};
const fernandoCampeonato = {
"2001":{
    posicao: "23°",
     pontos: 0
},

"2003":{
     posicao: "6°",
     pontos: 55
},

"2004":{
     posicao: "4°",
     pontos: 59
},

"2005": {
  posicao: "1º",
  pontos: 133
},

"2006":{
  posicao: "1º",
  pontos: 134
},

"2007": {
  posicao: "3º",
  pontos: 109
},

"2008": {
  posicao: "5º",
  pontos: 61
},

"2009": {
  posicao: "9º",
  pontos: 26
},

"2010": {
  posicao: "2º",
  pontos: 252
},

"2011": {
  posicao: "4º",
  pontos: 257
},

"2012": {
  posicao: "2º",
  pontos: 278
},

"2013": {
  posicao: "2º",
  pontos: 242
},

"2014": {
  posicao: "6º",
  pontos: 161
},

"2015": {
  posicao: "17º",
  pontos: 11
},

"2016": {
  posicao: "10º",
  pontos: 54
}, 

"2017": {
  posicao: "15º",
  pontos: 17
}, 

"2018": {
  posicao: "11º",
  pontos: 50
},

"2021": {
  posicao: "10º",
  pontos: 81
},

"2022": {
  posicao: "9º",
  pontos: 81
}, 

"2023": {
  posicao: "4º",
  pontos: 206
}, 

"2024": {
  posicao: "9º",
  pontos: 70
},

"2025": {
  posicao: "10º",
  pontos: 56
}

};
     
     const fernandoContainer =
document.querySelector(".fernando-corridas-container");

const fernandoSummary =
document.querySelector(".fernando-season-summary");

const fernandoBtns =
document.querySelectorAll(".fernando-ano-btn");



if (fernandoContainer && fernandoBtns.length > 0) {

  function carregarTemporada(ano) {

    fernandoContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = fernandoTemporadas[ano];

const anos = Object.keys(fernandoTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  fernandoTemporadas[anoAnterior]
  [fernandoTemporadas[anoAnterior].length - 1];

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
      `fernando-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("fernando-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-fernando">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="fernando-gp">
    ${corrida.gp} GP
  </span>

  <div class="fernando-team">
    <img src="${corrida.logo}" class="fernando-team-logo">
  </div>

  <span class="fernando-resultado">
    ${corrida.pos}
  </span>

  <span class="fernando-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      fernandoContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = fernandoCampeonato[ano];

    if (fernandoSummary) {

      fernandoSummary.innerHTML = `
        <div class="fernando-summary-card show">

          <h3 class="fernando-summary-title">
            Season ${ano}
          </h3>

          <div class="fernando-summary-stats">

            <div class="fernando-summary-box">

              <span class="fernando-summary-label">
                Position
              </span>

              <span class="fernando-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="fernando-summary-box">

              <span class="fernando-summary-label">
                Points
              </span>

              <span class="fernando-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  fernandoBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      fernandoBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2001");

}

/*//////////////////////////////////////////
        TITULOS
/*//////////////////////////////////////////

const fernandoTitles = {
2005: {
  piloto: "fernando",
  sobrenome: "alonso",
  ano: "2005",
  subtitulo: "CAMPEÃO MUNDIAL DE FÓRMULA 1",
  descricao: "Fernando Alonso encerrou a era de domínio da Ferrari e de Michael Schumacher ao conquistar o Campeonato Mundial de 2005 pela Renault. Aos 24 anos, tornou-se o campeão mais jovem da história da Fórmula 1 naquele momento.",
  imagem: "fernando/2005.png",
  quote: "This is a dream come true.",
  stats: {
    vitorias: 7,
    podios: 15,
    pontos: 133,
    poles: 6,
    corridas: 19
  },
  timeline: [
    {
      tipo: "positive",
      titulo: "COMEÇO AVASSALADOR",
      texto: "Alonso vence na Malásia e assume a liderança do campeonato logo nas primeiras corridas.",
      resultado: "MALÁSIA • P1"
    },

    {
      tipo: "positive",
      titulo: "DOMÍNIO DA RENAULT",
      texto: "A combinação entre Alonso e a Renault se mostra extremamente forte durante toda a primeira metade da temporada.",
      resultado: "5 VITÓRIAS NAS 10 PRIMEIRAS CORRIDAS"
    },

    {
      tipo: "warning",
      titulo: "PRESSÃO DA FERRARI",
      texto: "Schumacher reage na segunda metade do campeonato e reduz a vantagem do espanhol.",
      resultado: "EUROPA • DISPUTA PELO TÍTULO"
    },

    {
      tipo: "positive",
      titulo: "VITÓRIA DECISIVA",
      texto: "Alonso vence o GP do Brasil e chega muito próximo da conquista mundial.",
      resultado: "BRASIL • P1"
    },

    {
      tipo: "climax",
      titulo: "CAMPEÃO MUNDIAL",
      texto: "Com três corridas de antecedência, Alonso garante matematicamente seu primeiro título mundial e entra para a história da Fórmula 1.",
      resultado: "CAMPEÃO MUNDIAL 2005"
    }
  ]
},

2006: {
  piloto: "fernando",
  sobrenome: "alonso",
  ano: "2006",
  subtitulo: "BICAMPEÃO MUNDIAL DE FÓRMULA 1",
  descricao: "Fernando Alonso confirmou seu lugar entre os grandes da Fórmula 1 ao conquistar seu segundo título consecutivo em 2006. Em uma temporada marcada pelo retorno da Ferrari à disputa e pela intensa rivalidade com Michael Schumacher, o espanhol manteve a calma nos momentos decisivos e levou a Renault ao bicampeonato mundial.",
  imagem: "fernando/2006.png",
  quote: "It's fantastic. We did it again.",
  stats: {
    vitorias: 7,
    podios: 14,
    pontos: 134,
    poles: 6,
    corridas: 18
  },
  timeline: [
    {
      tipo: "positive",
      titulo: "INÍCIO DOMINANTE",
      texto: "Alonso vence quatro das seis primeiras corridas e abre vantagem significativa na liderança do campeonato.",
      resultado: "ESPANHA • P1"
    },

    {
      tipo: "positive",
      titulo: "BATALHA COM SCHUMACHER",
      texto: "A Ferrari evolui ao longo da temporada e Schumacher passa a desafiar Alonso diretamente pelo título.",
      resultado: "MEIO DA TEMPORADA"
    },

    {
      tipo: "warning",
      titulo: "PRESSÃO TOTAL",
      texto: "Problemas mecânicos e a recuperação da Ferrari reduzem drasticamente a vantagem do espanhol.",
      resultado: "ITÁLIA • DNF"
    },

    {
      tipo: "positive",
      titulo: "VITÓRIA DECISIVA",
      texto: "Alonso responde à pressão vencendo no Japão, enquanto Schumacher abandona por quebra de motor.",
      resultado: "JAPÃO • P1"
    },

    {
      tipo: "climax",
      titulo: "BICAMPEÃO MUNDIAL",
      texto: "Com uma corrida sólida em Interlagos, Alonso garante seu segundo título consecutivo e encerra a era Schumacher como campeão mundial.",
      resultado: "BICAMPEÃO MUNDIAL 2006"
    }
  ]
}


};

const fernandoTitleContainer =
document.querySelector(".fernando-title-content");

function carregarTitulofernando(ano){

  const data = fernandoTitles[ano];
  if (!data) return;

  fernandoTitleContainer.innerHTML = `
    <section class="fernando-season-card">

      <div class="fernando-title-buttons">
        ${Object.keys(fernandoTitles).map(y => `
          <button class="fernando-title-btn ${y == ano ? "active" : ""}"
          data-title="${y}">
            ${y}
          </button>
        `).join("")}
      </div>

      <div class="fernando-hero">

        <div class="fernando-hero-left">
          <img src="${data.imagem}" class="fernando-hero-art">
        </div>

        <div class="fernando-hero-right">

          <span class="fernando-year">${data.ano}</span>

          <h1 class="fernando-name">
            ${data.piloto}
            <span>${data.sobrenome}</span>
          </h1>

          <h2 class="fernando-subtitle">${data.subtitulo}</h2>

          <div class="fernando-description">${data.descricao}</div>

          <div class="fernando-stats">
            <div class="fernando-stat-box"><h3>${data.stats.vitorias}</h3><p>Vitórias</p></div>
            <div class="fernando-stat-box"><h3>${data.stats.podios}</h3><p>Pódios</p></div>
            <div class="fernando-stat-box"><h3>${data.stats.pontos}</h3><p>Pontos</p></div>
            <div class="fernando-stat-box"><h3>${data.stats.poles}</h3><p>Poles</p></div>
            <div class="fernando-stat-box"><h3>${data.stats.corridas}</h3><p>Corridas</p></div>
          </div>

        </div>

      </div>

      <div class="fernando-timeline-section">

        <h2 class="fernando-section-title">
          TEMPORADA ${data.ano}
        </h2>

        <div class="fernando-timeline-grid">

          ${data.timeline.map(e => `
            <div class="fernando-race-card ${e.tipo}">
              <h3>${e.titulo}</h3>
              <p>${e.texto}</p>
              <div class="fernando-race-result">${e.resultado}</div>
            </div>
          `).join("")}

        </div>

      </div>

    </section>
  `;

  // botão click (sem duplicar listener)
  document.querySelectorAll(".fernando-title-btn").forEach(btn => {
    btn.onclick = () => carregarTitulofernando(btn.dataset.title);
  });

}

if (fernandoTitleContainer){
  carregarTitulofernando(2005);
}


/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-fernando");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-fernando div");

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

  const grafico = document.querySelector(".linha-fernando");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-fernando");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-fernando");

const fraseEng = '"P1 fernando, amazing race!"';
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

const spans = document.querySelectorAll(".wave-fernando span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-fernando");
const lightbox = document.querySelector(".lightbox-fernando");
const imgLightbox = document.querySelector(".img-lightbox-fernando");
const fechar = document.querySelector(".fechar-fernando");

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
















const alonsoData=[

{

first:"TARSO",

last:"MARQUES",

img:"fernando/tarson.png",

years:"2001",

stats:{

quali:[11,1],

races:[10,2],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[0,0]

}

},



{

first:"ALEX",

last:"YOONG",

img:"fernando/yoong.webp",

years:"2001",

stats:{

quali:[3,0],

races:[2,1],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[0,0]

}

},

	
{

first:"JARNO",

last:"TRULLI",

img:"fernando/trulli.png",

years:"2003 — 2004",

stats:{

quali:[15,16],

races:[10,13],

podiums:[2,1],

wins:[1,0],

pole:[0,0],

points:[100,79]

}

},

{

first:"GIANCARLO",

last:"FISICHELLA",

img:"fernando/fisichela.png",

years:"2005 — 2006",

stats:{

quali:[27,10],

races:[22,2],

podiums:[22,8],

wins:[14,3],

pole:[6,2],

points:[267,130]

}

},

{

first:"LEWIS",

last:"HAMILTON",

img:"fernando/hamilton.png",

years:"2007",

stats:{

quali:[8,9],

races:[6,5],

podiums:[12,12],

wins:[4,4],

pole:[2,6],

points:[109,109]

}

},

{

first:"NELSON",

last:"PIQUET JR",

img:"fernando/nelson.png",

years:"2008 — 2009",

stats:{

quali:[27,1],

races:[20,2],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[74,19]

}

},

{

first:"ROMAIN",

last:"GROSJEAN",

img:"fernando/grosjean.png",

years:"2009",

stats:{

quali:[7,0],

races:[4,0],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[26,0]

}

},

{

first:"FELIPE",

last:"MASSA",

img:"fernando/massa.png",

years:"2010 — 2013",

stats:{

quali:[58,19],

races:[56,8],

podiums:[44,15],

wins:[11,0],

pole:[4,1],

points:[1029,496]

}

},

{

first:"KIMI",

last:"RAIKKONEN",

img:"fernando/raikonnen.png",

years:"2014",

stats:{

quali:[16,3],

races:[14,1],

podiums:[2,0],

wins:[0,0],

pole:[0,0],

points:[161,55]

}

},

{

first:"JENSON",

last:"BUTTON",

img:"fernando/button.png",

years:"2015 — 2016",

stats:{

quali:[25,13],

races:[15,11],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[65,32]

}

},

{

first:"STOFFEL",

last:"VANDOORNE",

img:"fernando/vandoorne.webp",

years:"2017 — 2018",

stats:{

quali:[37,3],

races:[29,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[76,25]

}

},

{

first:"ESTEBAN",

last:"OCON",

img:"fernando/ocon.png",

years:"2021 — 2022",

stats:{

quali:[23,21],

races:[20,16],

podiums:[1,1],

wins:[0,1],

pole:[0,0],

points:[162,166]

}

},

{

first:"LANCE",

last:"STROLL",

img:"fernando/stroll.png",

years:"2023 — 2025",

stats:{

quali:[61,8],

races:[54,19],

podiums:[8,0],

wins:[0,0],

pole:[0,0],

points:[456,195]

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
"alonsoYears"
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
"alonsoQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"alonsoQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"alonsoRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"alonsoRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"alonsoPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"alonsoPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"alonsoWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"alonsoWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"alonsoPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"alonsoPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"alonsoPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"alonsoPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"alonsoBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"alonsoBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"alonsoBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"alonsoBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"alonsoBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"alonsoBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"alonsoBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"alonsoBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"alonsoBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"alonsoBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"alonsoBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"alonsoBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
alonsoData[
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
".alonso-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.alonso-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".alonso-tab"
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
".alonso-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

alonsoData
.length-1



render(
current
)

}



document
.querySelector(
".alonso-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
alonsoData.length

)

current=0



render(
current
)

}



render(0) 