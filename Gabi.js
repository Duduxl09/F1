document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglegabi = document.getElementById("menuTogglegabi");
const menugabi = document.getElementById("sideMenugabi");
const overlaygabi = document.getElementById("overlaygabi");
const closegabi = document.getElementById("closeMenugabi");

const linksMenugabi = document.querySelectorAll(".side-menu-gabi a");

function fecharMenugabi() {
  if (menugabi) menugabi.classList.remove("active");
  if (overlaygabi) overlaygabi.classList.remove("active");
}

if (togglegabi) {
  togglegabi.addEventListener("click", () => {
    menugabi?.classList.add("active");
    overlaygabi?.classList.add("active");
  });
}

if (closegabi) {
  closegabi.addEventListener("click", fecharMenugabi);
}

if (overlaygabi) {
  overlaygabi.addEventListener("click", fecharMenugabi);
}

linksMenugabi.forEach(link => {
  link.addEventListener("click", fecharMenugabi);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksgabi() {

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

const gabiBanner = document.querySelector(".gabi-banner-bg");

if(gabiBanner){

  gabiBanner.addEventListener("mousemove", (e)=>{

    const rect = gabiBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gabiBanner.style.setProperty("--mouse-x", x + "px");
    gabiBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-gabi-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-gabi");

  const dotsContainer =
    document.querySelector(".dots-gabi");

  const bg =
    document.querySelector(".bg-slider-gabi");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-gabi");

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
    document.querySelectorAll(".dot-gabi");

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

  const secao = document.querySelector(".numeros-gabi");
  const bg = document.querySelector(".bg-numeros-gabi");

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

const cards = document.querySelectorAll(".animar-gabi");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-gabi");

        const barra =
          card.querySelector(".barra-velocidade-gabi");

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
    document.querySelector(".titulo-animar-gabi");

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

const gabiTemporadas = {

"2025": [
  { gp:"Australia", pos:"P9", pontos:"2", tipo:"bortoleto-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"China", pos:"DNF", pontos:"0", tipo:"bortoleto-dnf", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Spain", pos:"P12", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Canada", pos:"P14", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"bortoleto-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"bortoleto-dnf", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"bortoleto-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"bortoleto-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Netherlands", pos:"P15", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Italy", pos:"P8", pontos:"4", tipo:"bortoleto-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Singapore", pos:"P13", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"United States", pos:"P10", pontos:"1", tipo:"bortoleto-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"bortoleto-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"bortoleto-dnf", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Las Vegas", pos:"P17", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Qatar", pos:"P13", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"bortoleto-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" }
]
     
};
const gabiCampeonato = {

"2025":{
     posicao:"19°",
     pontos: 19
}
};
     
     const gabiContainer =
document.querySelector(".gabi-corridas-container");

const gabiSummary =
document.querySelector(".gabi-season-summary");

const gabiBtns =
document.querySelectorAll(".gabi-ano-btn");



if (gabiContainer && gabiBtns.length > 0) {

  function carregarTemporada(ano) {

    gabiContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = gabiTemporadas[ano];

const anos = Object.keys(gabiTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  gabiTemporadas[anoAnterior]
  [gabiTemporadas[anoAnterior].length - 1];

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
      `gabi-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("gabi-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-gabi">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="gabi-gp">
    ${corrida.gp} GP
  </span>

  <div class="gabi-team">
    <img src="${corrida.logo}" class="gabi-team-logo">
  </div>

  <span class="gabi-resultado">
    ${corrida.pos}
  </span>

  <span class="gabi-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      gabiContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = gabiCampeonato[ano];

    if (gabiSummary) {

      gabiSummary.innerHTML = `
        <div class="gabi-summary-card show">

          <h3 class="gabi-summary-title">
            Season ${ano}
          </h3>

          <div class="gabi-summary-stats">

            <div class="gabi-summary-box">

              <span class="gabi-summary-label">
                Position
              </span>

              <span class="gabi-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="gabi-summary-box">

              <span class="gabi-summary-label">
                Points
              </span>

              <span class="gabi-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  gabiBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      gabiBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2025");

}


/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-gabi");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-gabi div");

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

  const grafico = document.querySelector(".linha-gabi");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-gabi");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-gabi");

const fraseEng = '"P1 gabi, amazing race!"';
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

const spans = document.querySelectorAll(".wave-gabi span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-gabi");
const lightbox = document.querySelector(".lightbox-gabi");
const imgLightbox = document.querySelector(".img-lightbox-gabi");
const fechar = document.querySelector(".fechar-gabi");

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


const bortoletoData=[
	
{

first:"NICO",

last:"HILKENBERG",

img:"gabi/nico.png",

years:"2025",

stats:{

quali:[8,14],

races:[8,13],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[24,37]

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
"bortoletoYears"
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
"bortoletoQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"bortoletoQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"bortoletoRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"bortoletoRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"bortoletoPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"bortoletoPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"bortoletoWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"bortoletoWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"bortoletoPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"bortoletoPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"bortoletoPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"bortoletoPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"bortoletoBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"bortoletoBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"bortoletoBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"bortoletoBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"bortoletoBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"bortoletoBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"bortoletoBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"bortoletoBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"bortoletoBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"bortoletoBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"bortoletoBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"bortoletoBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
bortoletoData[
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
".bortoleto-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.bortoleto-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".bortoleto-tab"
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
".bortoleto-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

bortoletoData
.length-1



render(
current
)

}



document
.querySelector(
".bortoleto-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
bortoletoData.length

)

current=0



render(
current
)

}



render(0) 