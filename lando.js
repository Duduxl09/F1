document.addEventListener("DOMContentLoaded", function(){

// PARALLAX + ZOOM
window.addEventListener("scroll", function(){

const secao = document.querySelector(".numeros-lando");
const bg = document.querySelector(".bg-numeros-lando");

const rect = secao.getBoundingClientRect();

const alturaTela = window.innerHeight;

if(rect.top < alturaTela && rect.bottom > 0){

let progresso = rect.top / alturaTela;

bg.style.transform = "translateY(" + progresso * 80 + "px) scale(1.05)";

}

});

const cards = document.querySelectorAll(".animar-lando");

function animar(){

const topoTela = window.innerHeight;

cards.forEach((card,index)=>{

const posicao = card.getBoundingClientRect().top;

if(posicao < topoTela - 100){

setTimeout(()=>{

card.classList.add("ativo");

const contador = card.querySelector(".contador-lando");
const barra = card.querySelector(".barra-velocidade-lando");

if(!contador.classList.contains("contado")){

contador.classList.add("contado");

const target = +contador.getAttribute("data-target");
let count = 0;

const update = ()=>{

const increment = target / 200;

if(count < target){

count += increment;
contador.innerText = Math.floor(count);

barra.style.width = (count/target*100)+"%";

setTimeout(update,40);

}else{

contador.innerText = target;
barra.style.width = "100%";

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






window.addEventListener("scroll", ()=>{

const titulo = document.querySelector(".titulo-animar-lando");

const pos = titulo.getBoundingClientRect().top;

if(pos < window.innerHeight - 120){

titulo.classList.add("show");

}

});




const reveals = document.querySelectorAll(".reveal");

function revelar() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revelar);
revelar();


  /* ===== SLIDER ===== */
  const track = document.querySelector(".slider-lando-track");

if(track){
  const slides = document.querySelectorAll(".slide-lando");
  const dotsContainer = document.querySelector(".dots-lando");
  const bg = document.querySelector(".bg-slider-lando");

  let index = 0;

  /* ===== CRIAR DOTS ===== */
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot-lando");

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      updateSlide();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot-lando");

  /* ===== FUNÇÃO PRINCIPAL ===== */
  function updateSlide() {

    /* MOVE SLIDE */
    track.style.transform = `translateX(-${index * 100}%)`;

    /* ATUALIZA DOTS */
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    /* BACKGROUND DINÂMICO */
    const img = slides[index].querySelector("img");

    if (img && bg) {
      bg.style.backgroundImage = `url(${img.src})`;
    }

  }

  /* ===== BOTÕES ===== */
  document.querySelector(".next").onclick = () => {
    index++;
    if (index >= slides.length) index = 0;
    updateSlide();
  };

  document.querySelector(".prev").onclick = () => {
    index--;
    if (index < 0) index = slides.length - 1;
    updateSlide();
  };

  /* ===== SWIPE MOBILE ===== */
  let startX = 0;
  let endX = 0;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", () => {
    let diff = startX - endX;

    if (diff > 50) index++;
    if (diff < -50) index--;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    updateSlide();
  });

  /* ===== INICIAR ===== */
  updateSlide();
}







/* ANIMAÇÃO + BARRAS */
const elementos = document.querySelectorAll(".reveal-lando");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-lando div");

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

  const grafico = document.querySelector(".linha-lando");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);





const itens = document.querySelectorAll(".item-galeria-lando");
const lightbox = document.querySelector(".lightbox-lando");
const imgLightbox = document.querySelector(".img-lightbox-lando");
const fechar = document.querySelector(".fechar-lando");

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






const section = document.querySelector(".radio-f1-lando");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");




const content = document.querySelector(".content-lando");

const fraseEng = '"P1 Lando, amazing race!"';
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

const spans = document.querySelectorAll(".wave-lando span");

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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



const landoTemporadas = {

  "2019": [
  { gp:"Australia", pos:"P12", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P11", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"11", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],

"2020": [
  { gp:"Austria (2020)", pos:"P3", pontos:"16", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Styria (2020)", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary (2020)", pos:"P13", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain (2020)", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"70th Anniversary (2020)", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain (2020)", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium (2020)", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy (2020)", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Tuscany (2020)", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Russia (2020)", pos:"P15", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Eifel (2020)", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Portugal (2020)", pos:"P13", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna (2020)", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Turkey (2020)", pos:"P8", pontos:"5", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain (2020)", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Sakhir (2020)", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi (2020)", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2021": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Portugal", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Styria", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P15", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Turkey", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2022": [
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P6", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P15", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"France", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2023": [
  { gp:"Bahrain", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P17", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P7", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Las Vegas", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" }
],"2024": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"19", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"P1", pontos:"26", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P3", pontos:"16", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"13", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Las Vegas", pos:"P6", pontos:"9", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P10", pontos:"2", tipo:"lando-sem-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" }
],
"2025": [
  { gp:"Australia", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"China", pos:"P2", pontos:"19", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Miami", pos:"P2", pontos:"26", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Great Britain", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Belgium", pos:"P2", pontos:"24", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Hungary", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Netherlands", pos:"DNF", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"United States", pos:"P2", pontos:"18", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Mexico", pos:"P1", pontos:"25", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Brazil", pos:"P1", pontos:"33", tipo:"lando-vitoria", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Las Vegas", pos:"DSQ", pontos:"0", tipo:"lando-dnf", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Qatar", pos:"P4", pontos:"18", tipo:"lando-pontos", equipe:"Mclaren", logo:"icons/mclaren.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"lando-podio", equipe:"Mclaren", logo:"icons/mclaren.png" }
]
};
const landoCampeonato = {
  "2019": {
    posicao: "11º",
    pontos: 49
  },
    "2020": {
    posicao: "9º",
    pontos: 97
  },
  "2021": {
  posicao: "6º",
  pontos: 160
},
"2022": {
  posicao: "7º",
  pontos: 122
},
"2023": {
  posicao: "6º",
  pontos: 205
},
"2024": {
  posicao: "2º",
  pontos: 374
},
"2025": {
  posicao: "1º",
  pontos: 423
}

};

const landoContainer =
document.querySelector(".lando-corridas-container");

const landoSummary =
document.querySelector(".lando-season-summary");

const landoBtns =
document.querySelectorAll(".lando-ano-btn");

if (landoContainer && landoBtns.length > 0) {

  function carregarTemporada(ano) {

    landoContainer.innerHTML = "";

     let equipeAnterior = null;

    const temporada = landoTemporadas[ano];

    let totalPontos = 0;

    temporada.forEach((corrida, index) => {

      totalPontos += Number(corrida.pontos || 0);

      const card = document.createElement("div");

const mudouEquipe = equipeAnterior && equipeAnterior !== corrida.equipe;

      card.className = `lando-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("lando-team-change");
}

if (mudouEquipe) {
  const tag = document.createElement("div");
  tag.className = "transfer-tag-lando";
  tag.textContent = `TRANSFER → ${corrida.equipe}`;

  card.appendChild(tag);
}



      card.innerHTML = `
  <span class="lando-gp">
    ${corrida.gp} GP
  </span>

  <div class="lando-team">
    <img src="${corrida.logo}" class="lando-team-logo">
  </div>

  <span class="lando-resultado">
    ${corrida.pos}
  </span>

  <span class="lando-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      landoContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);

equipeAnterior = corrida.equipe;

    });

    // 🔥 RESUMO DA TEMPORADA
    const resumo = landoCampeonato?.[ano];

if (landoSummary) {

  landoSummary.innerHTML = `
    <div class="lando-summary-card show">

      <h3 class="lando-summary-title">
        Season ${ano}
      </h3>

      <div class="lando-summary-stats">

        <div class="lando-summary-box">
          <span class="lando-summary-label">Position</span>
          <span class="lando-summary-value">${resumo?.posicao || "?"}</span>
        </div>

        <div class="lando-summary-box">
          <span class="lando-summary-label">Points</span>
          <span class="lando-summary-value">${resumo?.pontos || "?"}</span>
        </div>

      </div>

    </div>
  `;
}
  }

  landoBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      landoBtns.forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });

  carregarTemporada("2019");

}

const togglelando = document.getElementById("menuTogglelando");
const menulando = document.getElementById("sideMenulando");
const overlaylando = document.getElementById("overlaylando");
const closelando = document.getElementById("closeMenulando");

const linksMenulando = document.querySelectorAll(".side-menu-lando a");

function fecharMenulando() {
  if (menulando) menulando.classList.remove("active");
  if (overlaylando) overlaylando.classList.remove("active");
}

if (togglelando) {
  togglelando.addEventListener("click", () => {
    menulando?.classList.add("active");
    overlaylando?.classList.add("active");
  });
}

if (closelando) {
  closelando.addEventListener("click", fecharMenulando);
}

if (overlaylando) {
  overlaylando.addEventListener("click", fecharMenulando);
}

linksMenulando.forEach(link => {
  link.addEventListener("click", fecharMenulando);
});

(function scrollLinkslando() {

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

const norrislBanner = document.querySelector(".norris-banner-bg");

if(norrislBanner){

  norrislBanner.addEventListener("mousemove", (e)=>{

    const rect = norrislBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    norrislBanner.style.setProperty("--mouse-x", x + "px");
    norrislBanner.style.setProperty("--mouse-y", y + "px");

  });

}

const norrisTitles = {

  2025: {

    piloto: "LANDO",
    sobrenome: "NORRIS",

    ano: "2025",

    subtitulo:
    "CAMPEÃO MUNDIAL DE FÓRMULA 1",

    descricao:
    "Depois de uma temporada marcada por altos e baixos, Lando Norris superou a pressão de Max Verstappen e a disputa interna com Oscar Piastri para conquistar seu primeiro título mundial na Fórmula 1.",

    imagem:
    "lando/title.png",

    quote:
    "Nunca foi fácil, mas eu nunca desisti. Trabalhei, mantive a cabeça no lugar e hoje realizo meu sonho: sou campeão do mundo.",

    stats: {

      vitorias: 7,
      podios: 18,
      pontos: 423,
      poles: 7,
      corridas: 24

    },

    timeline: [

      {
        tipo:"positive",

        titulo:"INÍCIO PROMISSOR",

        texto:
        "Norris vence na estreia e mostra velocidade, mas Piastri começa mais consistente.",

        resultado:
        "GP DA AUSTRÁLIA • P1"
      },

      {
        tipo:"warning",

        titulo:"REAÇÃO EM MÔNACO",

        texto:
        "Norris vence em Mônaco e reduz a diferença para o líder do campeonato.",

        resultado:
        "GP DE MÔNACO • P1"
      },

      {
        tipo:"danger",

        titulo:"CANADÁ: O ERRO",

        texto:
        "Batida faltando poucas voltas para o fim faz Norris perder pontos importantes.",

        resultado:
        "GP DO CANADÁ • DNF"
      },

      {
        tipo:"positive",

        titulo:"A VIRADA",

        texto:
        "Norris reage com vitórias seguidas e assume a liderança do campeonato.",

        resultado:
        "3 VITÓRIAS EM 4 CORRIDAS"
      },

      {
        tipo:"climax",

        titulo:"ABU DHABI: O TÍTULO",

        texto:
        "Precisando apenas chegar no top 3, Norris confirma o campeonato mundial.",

        resultado:
        "CAMPEÃO MUNDIAL 2025"
      }

    ]

  }

};
const landoTitleContainer =
document.querySelector("#lando-title-container");

function carregarTitulo(ano){

  const data = norrisTitles[ano];

  if (!data) return;

  landoTitleContainer.innerHTML = `

  <section class="lando-season-card">

    <div class="lando-hero">

      <div class="lando-hero-left">

        <img src="${data.imagem}"
        class="lando-hero-art">

      </div>

      <div class="lando-hero-right">

        <div class="lando-title-area">

          <span class="lando-year">
            ${data.ano}
          </span>

          <h1 class="lando-name">

            ${data.piloto}

            <span>
              ${data.sobrenome}
            </span>

          </h1>

          <h2 class="lando-subtitle">
            ${data.subtitulo}
          </h2>

        </div>

        <div class="lando-description">
          ${data.descricao}
        </div>

        <div class="lando-stats">

          <div class="lando-stat-box">
            <h3>${data.stats.vitorias}</h3>
            <p>Vitórias</p>
          </div>

          <div class="lando-stat-box">
            <h3>${data.stats.podios}</h3>
            <p>Pódios</p>
          </div>

          <div class="lando-stat-box">
            <h3>${data.stats.pontos}</h3>
            <p>Pontos</p>
          </div>

          <div class="lando-stat-box">
            <h3>${data.stats.poles}</h3>
            <p>Poles</p>
          </div>

          <div class="lando-stat-box">
            <h3>${data.stats.corridas}</h3>
            <p>Corridas</p>
          </div>

        </div>

        <div class="lando-quote">

          <p>
            "${data.quote}"
          </p>

          <span>
            — Lando Norris
          </span>

        </div>

      </div>

    </div>

    <div class="lando-timeline-section">

      <h2 class="lando-section-title">
        A JORNADA DA TEMPORADA ${data.ano}
      </h2>

      <div class="lando-timeline-grid">

        ${data.timeline.map(evento => `

          <div class="lando-race-card ${evento.tipo}">

            <h3>${evento.titulo}</h3>

            <p>${evento.texto}</p>

            <div class="lando-race-result">
              ${evento.resultado}
            </div>

          </div>

        `).join("")}

      </div>

    </div>

  </section>
  `;
}

const landotitleContainer =
document.querySelector("#lando-title-container");

if (landotitleContainer){

  carregarTitulo(2025);

}










const norrisData = [

{
first:"CARLOS",
last:"SAINZ",

img:"lando/sainz.png",

years:"2019 — 2020",

stats:{
quali:[20,18],
races:[17,21],
podiums:[1,2],
wins:[0,0],
pole:[0,0],
points:[146,201]
}
},

{
first:"DANIEL",
last:"RICCIARDO",

img:"lando/ricciardo.png",

years:"2021 — 2022",

stats:{
quali:[28,16],
races:[38,7],
podiums:[8,1],
wins:[0,1],
pole:[1,0],
points:[282,152]
}
},

{
first:"OSCAR",
last:"PIASTRI",

img:"lando/pia(1).png",

years:"2023 — 2025",

stats:{
quali:[42,34],
races:[68,57],
podiums:[31,18],
wins:[11,8],
pole:[10,7],
points:[994,799]
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
"norrisYears"
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
"norrisQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"norrisQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"norrisRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"norrisRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"norrisPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"norrisPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"norrisWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"norrisWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"norrisPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"norrisPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"norrisPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"norrisPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"norrisBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"norrisBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"norrisBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"norrisBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"norrisBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"norrisBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"norrisBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"norrisBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"norrisBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"norrisBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"norrisBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"norrisBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
norrisData[
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
".norris-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.norris-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".norris-tab"
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
".norris-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

norrisData
.length-1



render(
current
)

}



document
.querySelector(
".norris-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
norrisData.length

)

current=0



render(
current
)

}



render(0) 