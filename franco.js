document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglefranco = document.getElementById("menuTogglefranco");
const menufranco = document.getElementById("sideMenufranco");
const overlayfranco = document.getElementById("overlayfranco");
const closefranco = document.getElementById("closeMenufranco");

const linksMenufranco = document.querySelectorAll(".side-menu-franco a");

function fecharMenufranco() {
  if (menufranco) menufranco.classList.remove("active");
  if (overlayfranco) overlayfranco.classList.remove("active");
}

if (togglefranco) {
  togglefranco.addEventListener("click", () => {
    menufranco?.classList.add("active");
    overlayfranco?.classList.add("active");
  });
}

if (closefranco) {
  closefranco.addEventListener("click", fecharMenufranco);
}

if (overlayfranco) {
  overlayfranco.addEventListener("click", fecharMenufranco);
}

linksMenufranco.forEach(link => {
  link.addEventListener("click", fecharMenufranco);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksfranco() {

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

const francoBanner = document.querySelector(".franco-banner-bg");

if(francoBanner){

  francoBanner.addEventListener("mousemove", (e)=>{

    const rect = francoBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    francoBanner.style.setProperty("--mouse-x", x + "px");
    francoBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-franco-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-franco");

  const dotsContainer =
    document.querySelector(".dots-franco");

  const bg =
    document.querySelector(".bg-slider-franco");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-franco");

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
    document.querySelectorAll(".dot-franco");

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

  const secao = document.querySelector(".numeros-franco");
  const bg = document.querySelector(".bg-numeros-franco");

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

const cards = document.querySelectorAll(".animar-franco");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-franco");

        const barra =
          card.querySelector(".barra-velocidade-franco");

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
    document.querySelector(".titulo-animar-franco");

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

const francoTemporadas = {
"2024": [
  { gp:"Italy", pos:"P12", pontos:"0", tipo:"franco-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"4", tipo:"franco-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"franco-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"franco-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P12", pontos:"0", tipo:"franco-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"franco-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P14", pontos:"0", tipo:"franco-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P19", pontos:"0", tipo:"franco-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P19", pontos:"0", tipo:"franco-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],

"2025": [
  { gp:"Emilia Romagna", pos:"P16", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Spain", pos:"P15", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Austria", pos:"P15", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Great Britain", pos:"DNS", pontos:"0", tipo:"franco-dnf", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Belgium", pos:"P19", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Hungary", pos:"P18", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Netherlands", pos:"P11", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Italy", pos:"P17", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Azerbaijan", pos:"P19", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Singapore", pos:"P16", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"United States", pos:"P17", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Las Vegas", pos:"P15", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Qatar", pos:"P14", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" },
  { gp:"Abu Dhabi", pos:"P20", pontos:"0", tipo:"franco-sem-pontos", equipe:"Alpine", logo:"icons/AlpineF1.png" }
],




};
const francoCampeonato = {
  "2024": {
  posicao: "19º",
  pontos: 5
},   

 "2025": {
  posicao: "20º",
  pontos: 0
} 
     
};
     
     const francoContainer =
document.querySelector(".franco-corridas-container");

const francoSummary =
document.querySelector(".franco-season-summary");

const francoBtns =
document.querySelectorAll(".franco-ano-btn");



if (francoContainer && francoBtns.length > 0) {

  function carregarTemporada(ano) {

    francoContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = francoTemporadas[ano];

const anos = Object.keys(francoTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  francoTemporadas[anoAnterior]
  [francoTemporadas[anoAnterior].length - 1];

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
      `franco-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("franco-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-franco">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="franco-gp">
    ${corrida.gp} GP
  </span>

  <div class="franco-team">
    <img src="${corrida.logo}" class="franco-team-logo">
  </div>

  <span class="franco-resultado">
    ${corrida.pos}
  </span>

  <span class="franco-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      francoContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = francoCampeonato[ano];

    if (francoSummary) {

      francoSummary.innerHTML = `
        <div class="franco-summary-card show">

          <h3 class="franco-summary-title">
            Season ${ano}
          </h3>

          <div class="franco-summary-stats">

            <div class="franco-summary-box">

              <span class="franco-summary-label">
                Position
              </span>

              <span class="franco-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="franco-summary-box">

              <span class="franco-summary-label">
                Points
              </span>

              <span class="franco-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  francoBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      francoBtns.forEach(b => {
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


const elementos = document.querySelectorAll(".reveal-franco");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-franco div");

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

  const grafico = document.querySelector(".linha-franco");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-franco");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-franco");

const fraseEng = '"P1 franco, amazing race!"';
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

const spans = document.querySelectorAll(".wave-franco span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-franco");
const lightbox = document.querySelector(".lightbox-franco");
const imgLightbox = document.querySelector(".img-lightbox-franco");
const fechar = document.querySelector(".fechar-franco");

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

const colapintoData=[

{

first:"ALEX",

last:"ALBON",

img:"franco/albon.png",

years:"2024",

stats:{

quali:[3,6],

races:[2,6],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[5,12]

}

},

{

first:"PIERRE",

last:"GASLY",

img:"franco/gasly.webp",

years:"2025",

stats:{

quali:[8,13],

races:[8,11],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[21,41]

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
"colapintoYears"
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
"colapintoQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"colapintoQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"colapintoRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"colapintoRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"colapintoPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"colapintoPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"colapintoWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"colapintoWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"colapintoPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"colapintoPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"colapintoPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"colapintoPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"colapintoBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"colapintoBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"colapintoBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"colapintoBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"colapintoBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"colapintoBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"colapintoBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"colapintoBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"colapintoBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"colapintoBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"colapintoBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"colapintoBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
colapintoData[
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
".colapinto-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.colapinto-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".colapinto-tab"
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
".colapinto-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

colapintoData
.length-1



render(
current
)

}



document
.querySelector(
".colapinto-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
colapintoData.length

)

current=0



render(
current
)

}



render(0) 