document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglesainz = document.getElementById("menuTogglesainz");
const menusainz = document.getElementById("sideMenusainz");
const overlaysainz = document.getElementById("overlaysainz");
const closesainz = document.getElementById("closeMenusainz");

const linksMenusainz = document.querySelectorAll(".side-menu-sainz a");

function fecharMenusainz() {
  if (menusainz) menusainz.classList.remove("active");
  if (overlaysainz) overlaysainz.classList.remove("active");
}

if (togglesainz) {
  togglesainz.addEventListener("click", () => {
    menusainz?.classList.add("active");
    overlaysainz?.classList.add("active");
  });
}

if (closesainz) {
  closesainz.addEventListener("click", fecharMenusainz);
}

if (overlaysainz) {
  overlaysainz.addEventListener("click", fecharMenusainz);
}

linksMenusainz.forEach(link => {
  link.addEventListener("click", fecharMenusainz);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkssainz() {

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

const sainzBanner = document.querySelector(".sainz-banner-bg");

if(sainzBanner){

  sainzBanner.addEventListener("mousemove", (e)=>{

    const rect = sainzBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sainzBanner.style.setProperty("--mouse-x", x + "px");
    sainzBanner.style.setProperty("--mouse-y", y + "px");

  });

}

/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-sainz-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-sainz");

  const dotsContainer =
    document.querySelector(".dots-sainz");

  const bg =
    document.querySelector(".bg-slider-sainz");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-sainz");

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
    document.querySelectorAll(".dot-sainz");

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

  const secao = document.querySelector(".numeros-carlos");
  const bg = document.querySelector(".bg-numeros-carlos");

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

const cards = document.querySelectorAll(".animar-carlos");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-carlos");

        const barra =
          card.querySelector(".barra-velocidade-carlos");

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
    document.querySelector(".titulo-animar-carlos");

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

const carlosTemporadas = {
     
   "2015": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],  
     
   "2016": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P18", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Europe", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Germany", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Malaysia", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P17", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],  
     
  "2017": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Malaysia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },

  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P19", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2018": [
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Bahrain", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"China", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"France", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Austria", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Great Britain", pos:"P17", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Germany", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Russia", pos:"P17", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Mexico", pos:"P19", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Renault", logo:"alpine/reno.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Renault", logo:"alpine/reno.png" }
],

"2019": [
  { gp:"Australia", pos:"P20", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P19", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P14", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"P5", pontos:"10", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P19", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P20", pontos:"0", tipo:"sainz-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P12", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"sainz-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"sainz-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"sainz-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2020": [
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Styria", pos:"P9", pontos:"3", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"70th Anniversary", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Tuscany", pos:"P18", pontos:"0", tipo:"carlos-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P19", pontos:"0", tipo:"carlos-dnf", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Eifel", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Portugal", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Sakhir", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"McLaren", logo:"icons/mclaren.png" }
],

"2021": [
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Portugal", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Styria", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P10", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
  
 "2022": [
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P2", pontos:"19", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P5", pontos:"11", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],    
   
   "2023": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
   
 "2024": [
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P16", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P18", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"carlos-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P16", pontos:"0", tipo:"carlos-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P6", pontos:"8", tipo:"carlos-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"carlos-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],

"2025": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P9", pontos:"2", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia-Romagna", pos:"P8", pontos:"4", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"DNS", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P18", pontos:"3", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"carlos-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P5", pontos:"10", tipo:"carlos-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P3", pontos:"15", tipo:"carlos-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"carlos-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
]
   
     
};
const carlosCampeonato = {
     
  "2015": {
  posicao: "18º",
  pontos: 18
},   
   "2016": {
  posicao: "12º",
  pontos: 46
},  
     
"2017": {
  posicao: "9º",
  pontos: 54
},

"2018": {
  posicao: "10º",
  pontos: 53
},

"2019": {
  posicao: "6º",
  pontos: 96
},

"2020": {
  posicao: "6º",
  pontos: 105
},

"2021": {
  posicao: "5º",
  pontos: 164.5
},

"2022": {
  posicao: "5º",
  pontos: 246
},

   "2023": {
     posicao: "7°",
     pontos: 2020
},

"2024": {
  posicao: "5º",
  pontos: 290
},
   
 "2025": {
  posicao: "9º",
  pontos: 64
}    
     
};


const carlosContainer =
document.querySelector(".carlos-corridas-container");

const carlosSummary =
document.querySelector(".carlos-season-summary");

const carlosBtns =
document.querySelectorAll(".carlos-ano-btn");



if (carlosContainer && carlosBtns.length > 0) {

  function carregarTemporada(ano) {

    carlosContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = carlosTemporadas[ano];

const anos = Object.keys(carlosTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  carlosTemporadas[anoAnterior]
  [carlosTemporadas[anoAnterior].length - 1];

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
      `carlos-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("carlos-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-carlos">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="carlos-gp">
    ${corrida.gp} GP
  </span>

  <div class="carlos-team">
    <img src="${corrida.logo}" class="carlos-team-logo">
  </div>

  <span class="carlos-resultado">
    ${corrida.pos}
  </span>

  <span class="carlos-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      carlosContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = carlosCampeonato[ano];

    if (carlosSummary) {

      carlosSummary.innerHTML = `
        <div class="carlos-summary-card show">

          <h3 class="carlos-summary-title">
            Season ${ano}
          </h3>

          <div class="carlos-summary-stats">

            <div class="carlos-summary-box">

              <span class="carlos-summary-label">
                Position
              </span>

              <span class="carlos-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="carlos-summary-box">

              <span class="carlos-summary-label">
                Points
              </span>

              <span class="carlos-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  carlosBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      carlosBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2015");

}


/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-sainz");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-sainz div");

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

  const grafico = document.querySelector(".linha-sainz");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-sainz");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-sainz");

const fraseEng = '"P1 sainz, amazing race!"';
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

const spans = document.querySelectorAll(".wave-sainz span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-sainz");
const lightbox = document.querySelector(".lightbox-sainz");
const imgLightbox = document.querySelector(".img-lightbox-sainz");
const fechar = document.querySelector(".fechar-sainz");

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


const sainzData=[

{

first:"MAX",

last:"VERSTAPPEN",

img:"carlos/max.png",

years:"2015 — 2016",

stats:{

quali:[11,12],

races:[9,12],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[64,62]

}

},

{

first:"NICO",

last:"HULKENBERG",

img:"carlos/hulkenberg.png",

years:"2017 — 2018",

stats:{

quali:[11,13],

races:[10,13],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[69,69]

}

},

{

first:"LANDO",

last:"NORRIS",

img:"carlos/norris.png",

years:"2019 — 2020",

stats:{

quali:[18,20],

races:[21,17],

podiums:[2,1],

wins:[0,0],

pole:[0,0],

points:[201,146]

}

},

{

first:"CHARLES",

last:"LECLERC",

img:"carlos/leclerc.png",

years:"2021 — 2024",

stats:{

quali:[30,58],

races:[41,43],

podiums:[25,43],

wins:[4,8],

pole:[5,20],

points:[847,932]

}

},

{

first:"ALEX",

last:"ALBON",

img:"carlos/albon.png",

years:"2025",

stats:{

quali:[11,13],

races:[8,12],

podiums:[2,0],

wins:[0,0],

pole:[0,0],

points:[109,91]

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
"sainzYears"
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
"sainzQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"sainzQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"sainzRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"sainzRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"sainzPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"sainzPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"sainzWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"sainzWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"sainzPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"sainzPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"sainzPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"sainzPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"sainzBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"sainzBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"sainzBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"sainzBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"sainzBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"sainzBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"sainzBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"sainzBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"sainzBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"sainzBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"sainzBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"sainzBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
sainzData[
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
".sainz-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.sainz-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".sainz-tab"
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
".sainz-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

sainzData
.length-1



render(
current
)

}



document
.querySelector(
".sainz-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
sainzData.length

)

current=0



render(
current
)

}



render(0) 