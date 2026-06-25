document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const toggleperez = document.getElementById("menuToggleperez");
const menuperez = document.getElementById("sideMenuperez");
const overlayperez = document.getElementById("overlayperez");
const closeperez = document.getElementById("closeMenuperez");

const linksMenuperez = document.querySelectorAll(".side-menu-perez a");

function fecharMenuperez() {
  if (menuperez) menuperez.classList.remove("active");
  if (overlayperez) overlayperez.classList.remove("active");
}

if (toggleperez) {
  toggleperez.addEventListener("click", () => {
    menuperez?.classList.add("active");
    overlayperez?.classList.add("active");
  });
}

if (closeperez) {
  closeperez.addEventListener("click", fecharMenuperez);
}

if (overlayperez) {
  overlayperez.addEventListener("click", fecharMenuperez);
}

linksMenuperez.forEach(link => {
  link.addEventListener("click", fecharMenuperez);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksperez() {

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

const perezBanner = document.querySelector(".perez-banner-bg");

if(perezBanner){

  perezBanner.addEventListener("mousemove", (e)=>{

    const rect = perezBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    perezBanner.style.setProperty("--mouse-x", x + "px");
    perezBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-perez-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-perez");

  const dotsContainer =
    document.querySelector(".dots-perez");

  const bg =
    document.querySelector(".bg-slider-perez");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-perez");

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
    document.querySelectorAll(".dot-perez");

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

  const secao = document.querySelector(".numeros-perez");
  const bg = document.querySelector(".bg-numeros-perez");

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

const cards = document.querySelectorAll(".animar-perez");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-perez");

        const barra =
          card.querySelector(".barra-velocidade-perez");

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
    document.querySelector(".titulo-animar-perez");

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

const perezTemporadas = {

"2011": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Malaysia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Turkey", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"DNS", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Europe", pos:"DNS", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United Kingdom", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Korea", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"India", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
],
"2012": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Malaysia", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Bahrain", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Europe", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United Kingdom", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Korea", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"India", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
],
"2013": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Malaysia", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Korea", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"India", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],
 
 "2014": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"DNS", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"DNF", pontos:"1", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
], 
  "2015": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
], 
 "2016": [
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P18", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Europe", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
],  
 "2017": [
  { gp:"Australia", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Malaysia", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" }
],  
 "2018": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"ForceIndia", logo:"aston/force.svg" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Canada", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"United Kingdom", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Germany", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"perez-sem-pontos", equipe:"Force India", logo:"aston/force.svg" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Singapore", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point Force India", logo:"icons/rp.svg" }
],    
 "2019": [
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Canada", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"France", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United Kingdom", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Germany", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P19", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United States", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],    
"2020": [
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Styria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"70th Anniversary", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Tuscany", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Russia", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Eifel", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Portugal", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Emilia Romagna", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Turkey", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Sakhir", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Racing Point", logo:"icons/rp.svg" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Racing Point", logo:"icons/rp.svg" }
],   
 "2021": [
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Emilia Romagna", pos:"P12", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Portugal", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"France", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Styria", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P20", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Russia", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Turkey", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Qatar", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" }
],  
"2022": [
  { gp:"Bahrain", pos:"P18", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Australia", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"France", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" }
],   
 "2023": [
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"perez-vitoria", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Miami", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"P16", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Canada", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Qatar", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" }
],  
     
 "2024": [
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"China", pos:"P3", pontos:"15", tipo:"perez-podio", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Emilia Romagna", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Canada", pos:"P18", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United Kingdom", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Belgium", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"perez-dnf", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Mexico", pos:"P17", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"perez-sem-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Las Vegas", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Qatar", pos:"P9", pontos:"2", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"perez-pontos", equipe:"Red Bull", logo:"icons/RedBull.png" }
]    
     
     

};
const perezCampeonato = {
 "2011": {
  posicao: "16º",
  pontos: 14
},
 "2012": {
  posicao: "10º",
  pontos: 66
},
 "2013": {
  posicao: "11º",
  pontos: 49
},
 "2014": {
  posicao: "10º",
  pontos: 59
},
"2015": {
  posicao: "9º",
  pontos: 78
}, 
  "2016": {
  posicao: "7º",
  pontos: 101
},
 "2017": {
  posicao: "7º",
  pontos: 100
}, 
 "2018": {
  posicao: "8º",
  pontos: 62
}, 
 "2019": {
  posicao: "10º",
  pontos: 52
}, 
"2020": {
  posicao: "4º",
  pontos: 125
},
"2021": {
  posicao: "4º",
  pontos: 190
},
"2022": {
  posicao: "3º",
  pontos: 305
},
"2023": {
  posicao: "2º",
  pontos: 285
},
 "2024": {
  posicao: "8º",
  pontos: 152
} 
  
};
     
     const perezContainer =
document.querySelector(".perez-corridas-container");

const perezSummary =
document.querySelector(".perez-season-summary");

const perezBtns =
document.querySelectorAll(".perez-ano-btn");



if (perezContainer && perezBtns.length > 0) {

  function carregarTemporada(ano) {

    perezContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = perezTemporadas[ano];

const anos = Object.keys(perezTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  perezTemporadas[anoAnterior]
  [perezTemporadas[anoAnterior].length - 1];

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
      `perez-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("perez-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-perez">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="perez-gp">
    ${corrida.gp} GP
  </span>

  <div class="perez-team">
    <img src="${corrida.logo}" class="perez-team-logo">
  </div>

  <span class="perez-resultado">
    ${corrida.pos}
  </span>

  <span class="perez-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      perezContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = perezCampeonato[ano];

    if (perezSummary) {

      perezSummary.innerHTML = `
        <div class="perez-summary-card show">

          <h3 class="perez-summary-title">
            Season ${ano}
          </h3>

          <div class="perez-summary-stats">

            <div class="perez-summary-box">

              <span class="perez-summary-label">
                Position
              </span>

              <span class="perez-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="perez-summary-box">

              <span class="perez-summary-label">
                Points
              </span>

              <span class="perez-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  perezBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      perezBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2011");

}
     

/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-perez");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-perez div");

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

  const grafico = document.querySelector(".linha-perez");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-perez");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-perez");

const fraseEng = '"P1 perez, amazing race!"';
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

const spans = document.querySelectorAll(".wave-perez span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-perez");
const lightbox = document.querySelector(".lightbox-perez");
const imgLightbox = document.querySelector(".img-lightbox-perez");
const fechar = document.querySelector(".fechar-perez");

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


const checoData=[

{

first:"KAMUI",

last:"KOBAYASHI",

img:"perez/kobayashi.png",

years:"2011 — 2012",

stats:{

quali:[10,25],

races:[19,15],

podiums:[3,1],

wins:[0,0],

pole:[0,0],

points:[146,122]

}

},

{

first:"JENSON",

last:"BUTTON",

img:"perez/button.png",

years:"2013",

stats:{

quali:[6,13],

races:[8,11],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[49,73]

}

},

	
{

first:"NICO",

last:"HULKENBERG",

img:"perez/hulkenberg.png",

years:"2014 — 2016",

stats:{

quali:[23,35],

races:[25,29],

podiums:[4,0],

wins:[0,0],

pole:[0,0],

points:[309,286]

}

},

{

first:"ESTEBAN",

last:"OCON",

img:"perez/ocon.png",

years:"2017 — 2018",

stats:{

quali:[25,16],

races:[19,18],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[155,136]

}

},

{

first:"LANCE",

last:"STROLL",

img:"perez/stroll.png",

years:"2019 — 2020",

stats:{

quali:[24,9],

races:[19,13],

podiums:[2,2],

wins:[1,0],

pole:[0,1],

points:[199,149]

}

},

{

first:"MAX",

last:"VERSTAPPEN",

img:"perez/verstappen.png",

years:"2021 — 2024",

stats:{

quali:[24,79],

races:[29,71],

podiums:[39,62],

wins:[5,47],

pole:[3,32],

points:[932,1918]

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
"checoYears"
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
"checoQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"checoQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"checoRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"checoRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"checoPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"checoPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"checoWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"checoWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"checoPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"checoPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"checoPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"checoPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"checoBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"checoBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"checoBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"checoBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"checoBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"checoBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"checoBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"checoBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"checoBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"checoBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"checoBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"checoBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
checoData[
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
".checo-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.checo-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".checo-tab"
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
".checo-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

checoData
.length-1



render(
current
)

}



document
.querySelector(
".checo-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
checoData.length

)

current=0



render(
current
)

}



render(0) 