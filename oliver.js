document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const toggleoliver = document.getElementById("menuToggleoliver");
const menuoliver = document.getElementById("sideMenuoliver");
const overlayoliver = document.getElementById("overlayoliver");
const closeoliver = document.getElementById("closeMenuoliver");

const linksMenuoliver = document.querySelectorAll(".side-menu-oliver a");

function fecharMenuoliver() {
  if (menuoliver) menuoliver.classList.remove("active");
  if (overlayoliver) overlayoliver.classList.remove("active");
}

if (toggleoliver) {
  toggleoliver.addEventListener("click", () => {
    menuoliver?.classList.add("active");
    overlayoliver?.classList.add("active");
  });
}

if (closeoliver) {
  closeoliver.addEventListener("click", fecharMenuoliver);
}

if (overlayoliver) {
  overlayoliver.addEventListener("click", fecharMenuoliver);
}

linksMenuoliver.forEach(link => {
  link.addEventListener("click", fecharMenuoliver);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksoliver() {

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

const oliverBanner = document.querySelector(".oliver-banner-bg");

if(oliverBanner){

  oliverBanner.addEventListener("mousemove", (e)=>{

    const rect = oliverBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    oliverBanner.style.setProperty("--mouse-x", x + "px");
    oliverBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-oliver-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-oliver");

  const dotsContainer =
    document.querySelector(".dots-oliver");

  const bg =
    document.querySelector(".bg-slider-oliver");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-oliver");

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
    document.querySelectorAll(".dot-oliver");

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

  const secao = document.querySelector(".numeros-oliver");
  const bg = document.querySelector(".bg-numeros-oliver");

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

const cards = document.querySelectorAll(".animar-oliver");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-oliver");

        const barra =
          card.querySelector(".barra-velocidade-oliver");

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
    document.querySelector(".titulo-animar-oliver");

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

const oliverTemporadas = {

"2024": [
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"oliver-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
],

"2025": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"China", pos:"P8", pontos:"4", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Japan", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Saudi Arabia", pos:"P13", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Miami", pos:"DNF", pontos:"0", tipo:"oliver-dnf", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Emilia Romagna", pos:"P17", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Spain", pos:"P17", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Canada", pos:"P11", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Great Britain", pos:"P11", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Belgium", pos:"P11", pontos:"2", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"oliver-dnf", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Netherlands", pos:"P6", pontos:"8", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Mexico", pos:"P4", pontos:"12", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Brazil", pos:"P6", pontos:"8", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Las Vegas", pos:"P10", pontos:"1", tipo:"oliver-pontos", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"oliver-dnf", equipe:"Haas", logo:"icons/HaasF1.png" },
  { gp:"Abu Dhabi", pos:"P12", pontos:"0", tipo:"oliver-sem-pontos", equipe:"Haas", logo:"icons/HaasF1.png" }
]


};
const oliverCampeonato = {
     
"2024": {
  posicao: "18º",
  pontos: 7
},

"2025": {
  posicao: "13º",
  pontos: 41
} 

};
     
     const oliverContainer =
document.querySelector(".oliver-corridas-container");

const oliverSummary =
document.querySelector(".oliver-season-summary");

const oliverBtns =
document.querySelectorAll(".oliver-ano-btn");



if (oliverContainer && oliverBtns.length > 0) {

  function carregarTemporada(ano) {

    oliverContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = oliverTemporadas[ano];

const anos = Object.keys(oliverTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  oliverTemporadas[anoAnterior]
  [oliverTemporadas[anoAnterior].length - 1];

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
      `oliver-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("oliver-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-oliver">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="oliver-gp">
    ${corrida.gp} GP
  </span>

  <div class="oliver-team">
    <img src="${corrida.logo}" class="oliver-team-logo">
  </div>

  <span class="oliver-resultado">
    ${corrida.pos}
  </span>

  <span class="oliver-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      oliverContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = oliverCampeonato[ano];

    if (oliverSummary) {

      oliverSummary.innerHTML = `
        <div class="oliver-summary-card show">

          <h3 class="oliver-summary-title">
            Season ${ano}
          </h3>

          <div class="oliver-summary-stats">

            <div class="oliver-summary-box">

              <span class="oliver-summary-label">
                Position
              </span>

              <span class="oliver-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="oliver-summary-box">

              <span class="oliver-summary-label">
                Points
              </span>

              <span class="oliver-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  oliverBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      oliverBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2024");

}

/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-oliver");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-oliver div");

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

  const grafico = document.querySelector(".linha-oliver");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-oliver");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-oliver");

const fraseEng = '"P1 oliver, amazing race!"';
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

const spans = document.querySelectorAll(".wave-oliver span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-oliver");
const lightbox = document.querySelector(".lightbox-oliver");
const imgLightbox = document.querySelector(".img-lightbox-oliver");
const fechar = document.querySelector(".fechar-oliver");

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



const bearmanData=[

{

first:"ESTEBAN",

last:"OCON",

img:"oliver/ocon.webp",

years:"2025",

stats:{

quali:[10,12],

races:[7,12],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[22,39]

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
"bearmanYears"
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
"bearmanQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"bearmanQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"bearmanRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"bearmanRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"bearmanPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"bearmanPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"bearmanWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"bearmanWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"bearmanPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"bearmanPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"bearmanPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"bearmanPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"bearmanBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"bearmanBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"bearmanBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"bearmanBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"bearmanBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"bearmanBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"bearmanBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"bearmanBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"bearmanBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"bearmanBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"bearmanBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"bearmanBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
bearmanData[
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
".bearman-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.bearman-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".bearman-tab"
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
".bearman-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

bearmanData
.length-1



render(
current
)

}



document
.querySelector(
".bearman-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
bearmanData.length

)

current=0



render(
current
)

}



render(0) 