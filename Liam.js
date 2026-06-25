document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglelawson = document.getElementById("menuTogglelawson");
const menulawson = document.getElementById("sideMenulawson");
const overlaylawson = document.getElementById("overlaylawson");
const closelawson = document.getElementById("closeMenulawson");

const linksMenulawson = document.querySelectorAll(".side-menu-lawson a");

function fecharMenulawson() {
  if (menulawson) menulawson.classList.remove("active");
  if (overlaylawson) overlaylawson.classList.remove("active");
}

if (togglelawson) {
  togglelawson.addEventListener("click", () => {
    menulawson?.classList.add("active");
    overlaylawson?.classList.add("active");
  });
}

if (closelawson) {
  closelawson.addEventListener("click", fecharMenulawson);
}

if (overlaylawson) {
  overlaylawson.addEventListener("click", fecharMenulawson);
}

linksMenulawson.forEach(link => {
  link.addEventListener("click", fecharMenulawson);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkslawson() {

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

const lawsonBanner = document.querySelector(".lawson-banner-bg");

if(lawsonBanner){

  lawsonBanner.addEventListener("mousemove", (e)=>{

    const rect = lawsonBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lawsonBanner.style.setProperty("--mouse-x", x + "px");
    lawsonBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-lawson-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-lawson");

  const dotsContainer =
    document.querySelector(".dots-lawson");

  const bg =
    document.querySelector(".bg-slider-lawson");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-lawson");

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
    document.querySelectorAll(".dot-lawson");

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

  const secao = document.querySelector(".numeros-lawson");
  const bg = document.querySelector(".bg-numeros-lawson");

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

const cards = document.querySelectorAll(".animar-lawson");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-lawson");

        const barra =
          card.querySelector(".barra-velocidade-lawson");

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
    document.querySelector(".titulo-animar-lawson");

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

const lawsonTemporadas = {
     
    "2023": [
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Japan", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Qatar", pos:"P17", pontos:"0", tipo:"lawson-dnf", equipe:"AlphaTauri", logo:"RB/tauri.png" },
  { gp:"Netherlands", pos:"P13", pontos:"0", tipo:"lawson-sem-pontos", equipe:"AlphaTauri", logo:"RB/tauri.png" }
], 
     
  "2024": [
  { gp:"United States", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"lawson-sem-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Brazil", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Las Vegas", pos:"P16", pontos:"0", tipo:"lawson-sem-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Qatar", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"RB", logo:"icons/racingbulls.svg" },
  { gp:"Abu Dhabi", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"RB", logo:"icons/racingbulls.svg" }
],   
     
    "2025": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },

  { gp:"Japan", pos:"P17", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Bahrain", pos:"P16", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Saudi Arabia", pos:"P12", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Miami", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Emilia Romagna", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Austria", pos:"P6", pontos:"8", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Belgium", pos:"P8", pontos:"4", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Netherlands", pos:"P12", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Azerbaijan", pos:"P5", pontos:"10", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Singapore", pos:"P15", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"United States", pos:"P11", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Mexico", pos:"DNF", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Las Vegas", pos:"P14", pontos:"0", tipo:"lawson-sem-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },

  { gp:"Qatar", pos:"P9", pontos:"2", tipo:"lawson-pontos", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"lawson-dnf", equipe:"Racing Bulls", logo:"icons/racingbulls.svg" }
]
     
     
};
const lawsonCampeonato = {
     
     "2023": {
  posicao: "20º",
  pontos: 2
},
     
 "2024": {
  posicao: "21º",
  pontos: 4
}, 
    
    "2025": {
  posicao: "14º",
  pontos: 38
} 
     
};
     
     
     const lawsonContainer =
document.querySelector(".lawson-corridas-container");

const lawsonSummary =
document.querySelector(".lawson-season-summary");

const lawsonBtns =
document.querySelectorAll(".lawson-ano-btn");



if (lawsonContainer && lawsonBtns.length > 0) {

  function carregarTemporada(ano) {

    lawsonContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = lawsonTemporadas[ano];

const anos = Object.keys(lawsonTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  lawsonTemporadas[anoAnterior]
  [lawsonTemporadas[anoAnterior].length - 1];

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
      `lawson-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("lawson-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-lawson">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="lawson-gp">
    ${corrida.gp} GP
  </span>

  <div class="lawson-team">
    <img src="${corrida.logo}" class="lawson-team-logo">
  </div>

  <span class="lawson-resultado">
    ${corrida.pos}
  </span>

  <span class="lawson-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      lawsonContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = lawsonCampeonato[ano];

    if (lawsonSummary) {

      lawsonSummary.innerHTML = `
        <div class="lawson-summary-card show">

          <h3 class="lawson-summary-title">
            Season ${ano}
          </h3>

          <div class="lawson-summary-stats">

            <div class="lawson-summary-box">

              <span class="lawson-summary-label">
                Position
              </span>

              <span class="lawson-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="lawson-summary-box">

              <span class="lawson-summary-label">
                Points
              </span>

              <span class="lawson-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  lawsonBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      lawsonBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2023");

}



/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-lawson");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-lawson div");

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

  const grafico = document.querySelector(".linha-lawson");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-lawson");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-lawson");

const fraseEng = '"P1 lawson, amazing race!"';
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

const spans = document.querySelectorAll(".wave-lawson span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-lawson");
const lightbox = document.querySelector(".lightbox-lawson");
const imgLightbox = document.querySelector(".img-lightbox-lawson");
const fechar = document.querySelector(".fechar-lawson");

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


const liamData=[

{

first:"YUKI",

last:"TSUNODA",

img:"lawson/tsunoda.png",

years:"2023 — 2024",

stats:{

quali:[1,6],

races:[2,5],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[4,17]

}

},

{

first:"MAX",

last:"VERSTAPPEN",

img:"lawson/verstappen.png",

years:"2025",

stats:{

quali:[0,2],

races:[0,2],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[0,36]

}

},

{

first:"ISACK",

last:"HADJAR",

img:"lawson/hadjar.png",

years:"2025",

stats:{

quali:[6,16],

races:[6,12],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[30,39]

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
"liamYears"
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
"liamQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"liamQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"liamRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"liamRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"liamPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"liamPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"liamWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"liamWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"liamPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"liamPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"liamPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"liamPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"liamBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"liamBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"liamBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"liamBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"liamBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"liamBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"liamBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"liamBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"liamBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"liamBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"liamBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"liamBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
liamData[
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
".liam-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.liam-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".liam-tab"
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
".liam-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

liamData
.length-1



render(
current
)

}



document
.querySelector(
".liam-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
liamData.length

)

current=0



render(
current
)

}



render(0) 