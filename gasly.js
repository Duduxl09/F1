document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglegasly = document.getElementById("menuTogglegasly");
const menugasly = document.getElementById("sideMenugasly");
const overlaygasly = document.getElementById("overlaygasly");
const closegasly = document.getElementById("closeMenugasly");

const linksMenugasly = document.querySelectorAll(".side-menu-gasly a");

function fecharMenugasly() {
  if (menugasly) menugasly.classList.remove("active");
  if (overlaygasly) overlaygasly.classList.remove("active");
}

if (togglegasly) {
  togglegasly.addEventListener("click", () => {
    menugasly?.classList.add("active");
    overlaygasly?.classList.add("active");
  });
}

if (closegasly) {
  closegasly.addEventListener("click", fecharMenugasly);
}

if (overlaygasly) {
  overlaygasly.addEventListener("click", fecharMenugasly);
}

linksMenugasly.forEach(link => {
  link.addEventListener("click", fecharMenugasly);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksgasly() {

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

const gaslyBanner = document.querySelector(".gasly-banner-bg");

if(gaslyBanner){

  gaslyBanner.addEventListener("mousemove", (e)=>{

    const rect = gaslyBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gaslyBanner.style.setProperty("--mouse-x", x + "px");
    gaslyBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-gasly-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-gasly");

  const dotsContainer =
    document.querySelector(".dots-gasly");

  const bg =
    document.querySelector(".bg-slider-gasly");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-gasly");

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
    document.querySelectorAll(".dot-gasly");

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

  const secao = document.querySelector(".numeros-gasly");
  const bg = document.querySelector(".bg-numeros-gasly");

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

const cards = document.querySelectorAll(".animar-gasly");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-gasly");

        const barra =
          card.querySelector(".barra-velocidade-gasly");

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
    document.querySelector(".titulo-animar-gasly");

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

const gaslyTemporadas = {
     
  "2017": [
  { gp:"Malaysia", pos:"P14", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],

"2018": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P18", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"France", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Germany", pos:"P14", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],

"2019": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"France", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Germany", pos:"P14", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },

  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Singapore", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Russia", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"gasly-podio", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" }
],

"2020": [
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Styria", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Hungary", pos:"P15", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Great Britain", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"70th Anniversary", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Spain", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"gasly-vitoria", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Tuscany", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Russia", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Eifel", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Portugal", pos:"P5", pontos:"10", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Turkey", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Sakhir", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" }
],

"2021": [
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Portugal", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Spain", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"gasly-podio", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"France", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Styria", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Russia", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Turkey", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Mexico", pos:"P4", pontos:"12", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Qatar", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" }
],

"2022": [
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Emilia Romagna", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Spain", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Canada", pos:"P14", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"France", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Netherlands", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Singapore", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Japan", pos:"P18", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Mexico", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"gasly-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" }
],

"2023": [
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Saudi Arabia", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"P14", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Canada", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"gasly-podio", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"gasly-podio", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Qatar", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Las Vegas", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
],

"2024": [
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Saudi Arabia", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Japan", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"China", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Miami", pos:"P12", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Emilia Romagna", pos:"P16", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Canada", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P9", pontos:"2", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"gasly-podio", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Las Vegas", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Qatar", pos:"P5", pontos:"10", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
],

"2025": [
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"China", pos:"DSQ", pontos:"0", tipo:"gasly-dsq", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Japan", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Saudi Arabia", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Miami", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Emilia Romagna", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"gasly-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Canada", pos:"P15", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P19", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P17", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P16", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"P18", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Singapore", pos:"P19", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P19", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P15", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"gasly-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Las Vegas", pos:"P13", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Qatar", pos:"P16", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P19", pontos:"0", tipo:"gasly-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
]
      
};
const gaslyCampeonato = {
 
 "2017": {
  posicao: "21º",
  pontos: 7
},
"2018": {
  posicao: "15º",
  pontos: 29
},
"2019": {
  posicao: "7º",
  pontos: 95
},
"2020": {
  posicao: "10º",
  pontos: 75
},
 
"2021": {
  posicao: "9º",
  pontos: 110
},
"2022": {
  posicao: "14º",
  pontos: 23
},
"2023": {
  posicao: "11º",
  pontos: 62
}, 
"2024": {
  posicao: "10º",
  pontos: 42
}, 
"2025": {
  posicao: "18º",
  pontos: 20
}     

     
};
     
     const gaslyContainer =
document.querySelector(".gasly-corridas-container");

const gaslySummary =
document.querySelector(".gasly-season-summary");

const gaslyBtns =
document.querySelectorAll(".gasly-ano-btn");



if (gaslyContainer && gaslyBtns.length > 0) {

  function carregarTemporada(ano) {

    gaslyContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = gaslyTemporadas[ano];

const anos = Object.keys(gaslyTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  gaslyTemporadas[anoAnterior]
  [gaslyTemporadas[anoAnterior].length - 1];

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
      `gasly-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("gasly-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-gasly">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="gasly-gp">
    ${corrida.gp} GP
  </span>

  <div class="gasly-team">
    <img src="${corrida.logo}" class="gasly-team-logo">
  </div>

  <span class="gasly-resultado">
    ${corrida.pos}
  </span>

  <span class="gasly-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      gaslyContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = gaslyCampeonato[ano];

    if (gaslySummary) {

      gaslySummary.innerHTML = `
        <div class="gasly-summary-card show">

          <h3 class="gasly-summary-title">
            Season ${ano}
          </h3>

          <div class="gasly-summary-stats">

            <div class="gasly-summary-box">

              <span class="gasly-summary-label">
                Position
              </span>

              <span class="gasly-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="gasly-summary-box">

              <span class="gasly-summary-label">
                Points
              </span>

              <span class="gasly-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  gaslyBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      gaslyBtns.forEach(b => {
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


const elementos = document.querySelectorAll(".reveal-gasly");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-gasly div");

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

  const grafico = document.querySelector(".linha-gasly");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-gasly");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-gasly");

const fraseEng = '"P1 gasly, amazing race!"';
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

const spans = document.querySelectorAll(".wave-gasly span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-gasly");
const lightbox = document.querySelector(".lightbox-gasly");
const imgLightbox = document.querySelector(".img-lightbox-gasly");
const fechar = document.querySelector(".fechar-gasly");

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


const pierreData=[

{

first:"BRENDON",

last:"HARTLEY",

img:"gasly/hartley.webp",

years:"2017 — 2018",

stats:{

quali:[12,3],

races:[7,6],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[29,4]

}

},

{

first:"MAX",

last:"VERSTAPPEN",

img:"gasly/verstappen.png",

years:"2019",

stats:{

quali:[1,11],

races:[1,11],

podiums:[0,5],

wins:[0,2],

pole:[0,1],

points:[63,181]

}

},

{

first:"DANIIL",

last:"KVYAT",

img:"gasly/kvyat.png",

years:"2019 — 2020",

stats:{

quali:[20,7],

races:[17,9],

podiums:[2,1],

wins:[1,0],

pole:[0,0],

points:[138,69]

}

},

{

first:"YUKI",

last:"TSUNODA",

img:"gasly/tsunoda.png",

years:"2021 — 2022",

stats:{

quali:[34,10],

races:[24,15],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[133,44]

}

},

{

first:"ESTEBAN",

last:"OCON",

img:"gasly/ocon.png",

years:"2023 — 2024",

stats:{

quali:[21,23],

races:[18,20],

podiums:[1,1],

wins:[0,0],

pole:[0,0],

points:[68,70]

}

},

{

first:"FRANCO",

last:"COLAPINTO",

img:"gasly/colapinto.webp",

years:"2025",

stats:{

quali:[13,8],

races:[11,8],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[41,21]

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
"pierreYears"
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
"pierreQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"pierreQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"pierreRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"pierreRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"pierrePodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"pierrePodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"pierreWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"pierreWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"pierrePoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"pierrePoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"pierrePointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"pierrePointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"pierreBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"pierreBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"pierreBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"pierreBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"pierreBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"pierreBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"pierreBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"pierreBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"pierreBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"pierreBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"pierreBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"pierreBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
pierreData[
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
".pierre-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.pierre-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".pierre-tab"
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
".pierre-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

pierreData
.length-1



render(
current
)

}



document
.querySelector(
".pierre-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
pierreData.length

)

current=0



render(
current
)

}



render(0) 