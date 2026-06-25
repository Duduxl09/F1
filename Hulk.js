document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglenico = document.getElementById("menuTogglenico");
const menunico = document.getElementById("sideMenunico");
const overlaynico = document.getElementById("overlaynico");
const closenico = document.getElementById("closeMenunico");

const linksMenunico = document.querySelectorAll(".side-menu-nico a");

function fecharMenunico() {
  if (menunico) menunico.classList.remove("active");
  if (overlaynico) overlaynico.classList.remove("active");
}

if (togglenico) {
  togglenico.addEventListener("click", () => {
    menunico?.classList.add("active");
    overlaynico?.classList.add("active");
  });
}

if (closenico) {
  closenico.addEventListener("click", fecharMenunico);
}

if (overlaynico) {
  overlaynico.addEventListener("click", fecharMenunico);
}

linksMenunico.forEach(link => {
  link.addEventListener("click", fecharMenunico);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksnico() {

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

const nicoBanner = document.querySelector(".nico-banner-bg");

if(nicoBanner){

  nicoBanner.addEventListener("mousemove", (e)=>{

    const rect = nicoBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    nicoBanner.style.setProperty("--mouse-x", x + "px");
    nicoBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-nico-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-nico");

  const dotsContainer =
    document.querySelector(".dots-nico");

  const bg =
    document.querySelector(".bg-slider-nico");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-nico");

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
    document.querySelectorAll(".dot-nico");

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

  const secao = document.querySelector(".numeros-nico");
  const bg = document.querySelector(".bg-numeros-nico");

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

const cards = document.querySelectorAll(".animar-nico");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-nico");

        const barra =
          card.querySelector(".barra-velocidade-nico");

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
    document.querySelector(".titulo-animar-nico");

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

const nicoTemporadas = {
"2010": [
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Turkey", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Europe", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P18", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Korea", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],

"2011": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Turkey", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Korea", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"India", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
], 
 
"2012": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Korea", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"India", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2013": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Korea", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"India", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
], 
 
"2014": [
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2015": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2016": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Force India", logo:"aston/force.svg" }
],

"2017": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Malaysia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2018": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"France", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Germany", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" }
],

"2019": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"France", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"DSQ", pontos:"0", tipo:"nico-dnf", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2020": [
  { gp:"70th Anniversary", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Eifel", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],

"2022": [
  { gp:"Bahrain", pos:"P17", pontos:"0", tipo:"nico-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Aston Martin", logo:"icons/aston.png" }
],

"2023": [
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Azerbaijan", pos:"P17", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Miami", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Monaco", pos:"P17", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Canada", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Belgium", pos:"P18", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Qatar", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Mexico", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Las Vegas", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
],

"2024": [
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Saudi Arabia", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Miami", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Emilia Romagna", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Netherlands", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Las Vegas", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Qatar", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
],

"2025": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"China", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Japan", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Bahrain", pos:"DSQ", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Saudi Arabia", pos:"P15", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Miami", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Emilia Romagna", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Netherlands", pos:"P14", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Italy", pos:"DNS", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Azerbaijan", pos:"P16", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Singapore", pos:"P20", pontos:"0", tipo:"nico-sem-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Las Vegas", pos:"P7", pontos:"6", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"nico-dnf", equipe:"Kick", logo:"icons/kick.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"nico-pontos", equipe:"Kick", logo:"icons/kick.png" }
]


     
     
     
     
     
};
const nicoCampeonato = {
     
"2010": {
  posicao: "14º",
  pontos: 22
},
"2011": {
  posicao: "8º",
  pontos: 63
},

"2012": {
  posicao: "11º",
  pontos: 63
},     

"2013": {
  posicao: "10º",
  pontos: 51
},

"2014": {
  posicao: "9º",
  pontos: 96
},

"2015": {
  posicao: "10º",
  pontos: 58
},

"2016": {
  posicao: "9º",
  pontos: 72
},

"2017": {
  posicao: "10º",
  pontos: 43
},

"2018": {
  posicao: "7º",
  pontos: 69
},

"2019": {
  posicao: "14º",
  pontos: 37
},

"2020": {
  posicao: "17°",
  pontos: 10
},

"2022": {
  posicao: "21°",
  pontos: 0
},

"2023": {
  posicao: "16º",
  pontos: 35
},

"2025": {
  posicao: "11º",
  pontos: 51
}



     
     
     
};
     
     const nicoContainer =
document.querySelector(".nico-corridas-container");

const nicoSummary =
document.querySelector(".nico-season-summary");

const nicoBtns =
document.querySelectorAll(".nico-ano-btn");



if (nicoContainer && nicoBtns.length > 0) {

  function carregarTemporada(ano) {

    nicoContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = nicoTemporadas[ano];

const anos = Object.keys(nicoTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  nicoTemporadas[anoAnterior]
  [nicoTemporadas[anoAnterior].length - 1];

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
      `nico-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("nico-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-nico">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="nico-gp">
    ${corrida.gp} GP
  </span>

  <div class="nico-team">
    <img src="${corrida.logo}" class="nico-team-logo">
  </div>

  <span class="nico-resultado">
    ${corrida.pos}
  </span>

  <span class="nico-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      nicoContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = nicoCampeonato[ano];

    if (nicoSummary) {

      nicoSummary.innerHTML = `
        <div class="nico-summary-card show">

          <h3 class="nico-summary-title">
            Season ${ano}
          </h3>

          <div class="nico-summary-stats">

            <div class="nico-summary-box">

              <span class="nico-summary-label">
                Position
              </span>

              <span class="nico-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="nico-summary-box">

              <span class="nico-summary-label">
                Points
              </span>

              <span class="nico-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  nicoBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      nicoBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2010");

}

/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-nico");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-nico div");

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

  const grafico = document.querySelector(".linha-nico");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-nico");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-nico");

const fraseEng = '"P1 nico, amazing race!"';
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

const spans = document.querySelectorAll(".wave-nico span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-nico");
const lightbox = document.querySelector(".lightbox-nico");
const imgLightbox = document.querySelector(".img-lightbox-nico");
const fechar = document.querySelector(".fechar-nico");

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






const hulkenbergData=[

{

first:"RUBENS",

last:"BARRICHELLO",

img:"nico/barrichello.webp",

years:"2010",

stats:{

quali:[13,6],

races:[9,8],

podiums:[0,0],

wins:[0,0],

pole:[1,0],

points:[22,47]

}

},

{

first:"PAUL",

last:"DI RESTA",

img:"nico/diresta.webp",

years:"2012",

stats:{

quali:[10,10],

races:[9,9],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[63,46]

}

},

{

first:"ESTEBAN",

last:"GUTIERREZ",

img:"nico/gutierrez.png",

years:"2013",

stats:{

quali:[19,0],

races:[15,4],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[51,6]

}

},

{

first:"SERGIO",

last:"PEREZ",

img:"nico/perez.png",

years:"2014 — 2016",

stats:{

quali:[35,23],

races:[29,25],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[286,309]

}

},

{

first:"JOLYON",

last:"PALMER",

img:"nico/palmer.png",

years:"2017",

stats:{

quali:[16,3],

races:[12,5],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[43,8]

}

},

{

first:"CARLOS",

last:"SAINZ",

img:"nico/sainz.png",

years:"2018",

stats:{

quali:[12,9],

races:[10,7],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[69,53]

}

},

{

first:"DANIEL",

last:"RICCIARDO",

img:"nico/ricciardo.png",

years:"2019",

stats:{

quali:[7,14],

races:[10,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[37,54]

}

},

{

first:"KEVIN",

last:"MAGNUSSEN",

img:"nico/magnussem.png",

years:"2023 - 2024",

stats:{

quali:[36,10],

races:[28,17],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[50,19]

}

},


{

first:"GABRIEL",

last:"BORTOLETO",

img:"nico/bortoleto.png",

years:"2025",

stats:{

quali:[14,8],

races:[13,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[37,24]

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
"hulkenbergYears"
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
"hulkenbergQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"hulkenbergQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"hulkenbergRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"hulkenbergRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"hulkenbergPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"hulkenbergPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"hulkenbergWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"hulkenbergWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"hulkenbergPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"hulkenbergPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"hulkenbergPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"hulkenbergPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"hulkenbergBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"hulkenbergBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"hulkenbergBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"hulkenbergBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"hulkenbergBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"hulkenbergBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"hulkenbergBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"hulkenbergBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"hulkenbergBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"hulkenbergBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"hulkenbergBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"hulkenbergBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
hulkenbergData[
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
".hulkenberg-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.hulkenberg-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".hulkenberg-tab"
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
".hulkenberg-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

hulkenbergData
.length-1



render(
current
)

}



document
.querySelector(
".hulkenberg-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
hulkenbergData.length

)

current=0



render(
current
)

}



render(0) 




