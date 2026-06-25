document.addEventListener("DOMContentLoaded", function(){

const togglekimi= document.getElementById("menuTogglekimi");
const menukimi= document.getElementById("sideMenukimi");
const overlaykimi= document.getElementById("overlaykimi");
const closekimi= document.getElementById("closeMenukimi");

const linksMenukimi= document.querySelectorAll(".side-menu-kimi");

function fecharMenukimi() {
  if (menukimi) menukimi.classList.remove("active");
  if (overlaykimi) overlaykimi.classList.remove("active");
}

if (togglekimi) {
  togglekimi.addEventListener("click", () => {
    menukimi?.classList.add("active");
    overlaykimi?.classList.add("active");
  });
}

if (closekimi) {
  closekimi.addEventListener("click", fecharMenukimi);
}

if (overlaykimi) {
  overlaykimi.addEventListener("click", fecharMenukimi);
}

linksMenukimi.forEach(link => {
  link.addEventListener("click", fecharMenukimi);
});

(function scrollLinkskimi() {

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

const kimiBanner = document.querySelector(".kimi-banner-bg");

if(kimiBanner){

  kimiBanner.addEventListener("mousemove", (e)=>{

    const rect = kimiBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    kimiBanner.style.setProperty("--mouse-x", x + "px");
    kimiBanner.style.setProperty("--mouse-y", y + "px");

  });

}

const track =
  document.querySelector(".slider-kimi-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-kimi");

  const dotsContainer =
    document.querySelector(".dots-kimi");

  const bg =
    document.querySelector(".bg-slider-kimi");

  let index = 0;

  /* =========================
     CRIAR DOTS
  ========================= */

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-kimi");

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
    document.querySelectorAll(".dot-kimi");

  /* =========================
     UPDATE SLIDE
  ========================= */

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

  /* =========================
     BOTÃO NEXT
  ========================= */

  const nextBtn =
    document.querySelector(".btn-kimi.next");

  if(nextBtn){

    nextBtn.onclick = ()=>{

      index++;

      if(index >= slides.length){
        index = 0;
      }

      updateSlide();

    };

  }

  /* =========================
     BOTÃO PREV
  ========================= */

  const prevBtn =
    document.querySelector(".btn-kimi.prev");

  if(prevBtn){

    prevBtn.onclick = ()=>{

      index--;

      if(index < 0){
        index = slides.length - 1;
      }

      updateSlide();

    };

  }

  /* =========================
     SWIPE MOBILE
  ========================= */

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

    if(diff > 50){
      index++;
    }

    if(diff < -50){
      index--;
    }

    if(index >= slides.length){
      index = 0;
    }

    if(index < 0){
      index = slides.length - 1;
    }

    updateSlide();

  });

  /* =========================
     INICIAR
  ========================= */

  updateSlide();

}

window.addEventListener("scroll", function(){

const secao =
    document.querySelector(".numeros-kimi");

  const bg =
    document.querySelector(".bg-numeros-kimi");

  if(!secao || !bg) return;

  const rect =
    secao.getBoundingClientRect();

  const alturaTela =
    window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){

    let progresso =
      rect.top / alturaTela;

    bg.style.transform =
      "translateY(" + progresso * 80 + "px) scale(1.05)";
  }

});


/* =========================
   CONTADORES
========================= */

const cards =
  document.querySelectorAll(".animar-kimi");

function animarkimi(){

  const topoTela =
    window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao =
      card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-kimi");

        const barra =
          card.querySelector(".barra-velocidade-kimi");

        if(!contador.classList.contains("contado")){

          contador.classList.add("contado");

          const target =
            +contador.getAttribute("data-target");

          let count = 0;

          const update = ()=>{

            const increment =
              target / 200;

            if(count < target){

              count += increment;

              contador.innerText =
                Math.floor(count);

              if(barra){

                barra.style.width =
                  (count / target * 100) + "%";
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

window.addEventListener("scroll", animarkimi);

animarkimi();


/* =========================
   TITULO ANIMADO
========================= */

window.addEventListener("scroll", ()=>{

  const titulo =
    document.querySelector(".titulo-animar-kimi");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});

const kimiTemporadas = {


"2025": [

  { gp:"Australia", pos:"P4", pontos:"12", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"China", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Japan", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Bahrain", pos:"P11", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Miami", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"kimi-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Monaco", pos:"P18", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"kimi-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Canada", pos:"P3", pontos:"15", tipo:"kimi-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"kimi-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Great Britain", pos:"P16", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Belgium", pos:"P16", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Netherlands", pos:"P16", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Italy", pos:"P9", pontos:"2", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"United States", pos:"P13", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"kimi-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Las Vegas", pos:"P3", pontos:"15", tipo:"kimi-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Qatar", pos:"P5", pontos:"10", tipo:"kimi-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"kimi-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },

]

};



const kimiCampeonato = {
     
  "2025": {
    posicao: "8º",
    pontos: 62
  }

};



const kimiContainer =
document.querySelector(".kimi-corridas-container");

const kimiSummary =
document.querySelector(".kimi-season-summary");

const kimiBtns =
document.querySelectorAll(".kimi-ano-btn");



if (kimiContainer && kimiBtns.length > 0) {

  function carregarTemporada(ano) {

    kimiContainer.innerHTML = "";

let equipeAnterior = null;

    const temporada = kimiTemporadas[ano];

    temporada.forEach((corrida, index) => {

      const card = document.createElement("div");
      
      const mudouEquipe = equipeAnterior && equipeAnterior !== corrida.equipe;

      card.className =
      `kimi-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("kimi-team-change");
}

if (mudouEquipe) {
  const tag = document.createElement("div");
  tag.className = "transfer-tag-kimi";
  tag.textContent = `TRANSFER → ${corrida.equipe}`;

  card.appendChild(tag);
}


      card.innerHTML = `
  <span class="kimi-gp">
    ${corrida.gp} GP
  </span>

  <div class="kimi-team">
    <img src="${corrida.logo}" class="kimi-team-logo">
  </div>

  <span class="kimi-resultado">
    ${corrida.pos}
  </span>

  <span class="kimi-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;

      kimiContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);

equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = kimiCampeonato[ano];

    if (kimiSummary) {

      kimiSummary.innerHTML = `
        <div class="kimi-summary-card show">

          <h3 class="kimi-summary-title">
            Season ${ano}
          </h3>

          <div class="kimi-summary-stats">

            <div class="kimi-summary-box">

              <span class="kimi-summary-label">
                Position
              </span>

              <span class="kimi-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="kimi-summary-box">

              <span class="kimi-summary-label">
                Points
              </span>

              <span class="kimi-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  kimiBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      kimiBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2025");

}

const elementoskimi =
document.querySelectorAll(".reveal-kimi");

function animarPilotagemkimi(){

  const alturaTela = window.innerHeight;

  elementoskimi.forEach(el => {

    const topo =
    el.getBoundingClientRect().top;

    if(topo < alturaTela - 100){

      el.classList.add("active");

      /* ===== BARRAS ===== */
      const barra =
      el.querySelector(".barra-kimi div");

      if(barra && !barra.classList.contains("ativo")){

        barra.classList.add("ativo");

        const width =
        barra.getAttribute("data-width");

        barra.style.width = width;

      }

    }

  });

}

window.addEventListener(
  "scroll",
  animarPilotagemkimi
);

animarPilotagemkimi();



/* ===== GRÁFICO ===== */

function animarGraficokimi(){

  const grafico =
  document.querySelector(".linha-kimi");

  if(!grafico) return;

  const pos =
  grafico.getBoundingClientRect().top;

  if(pos < window.innerHeight - 100){

    grafico.style.strokeDashoffset = "0";

  }

}

window.addEventListener(
  "scroll",
  animarGraficokimi
);

animarGraficokimi();

const sectionkimi =
document.querySelector(".radio-f1-kimi");

const cardkimi =
document.getElementById("radioCardkimi");

const audiokimi =
document.getElementById("radio-audio-kimi");

const engTextkimi =
document.getElementById("eng-text-kimi");

const pilTextkimi =
document.getElementById("pil-text-kimi");

const contentkimi =
document.querySelector(".content-kimi");

const fraseEngkimi =
'"George, that was absolutely brilliant!"';

const frasePilkimi =
'"Amazing job guys, the car was unbelievable!"';

let ikimi = 0;
let jkimi = 0;

let timeoutskimi = [];

/* RESET */
function resetarRadiokimi(){

  if(audiokimi){

    audiokimi.pause();

    audiokimi.currentTime = 0;

  }

  if(engTextkimi){
    engTextkimi.innerHTML = "";
  }

  if(pilTextkimi){
    pilTextkimi.innerHTML = "";
  }

  ikimi = 0;
  jkimi = 0;

  if(cardkimi){

    cardkimi.classList.remove(
      "ativo",
      "falando",
      "saindo",
      "mostrar-texto"
    );

  }

  if(contentkimi){
    contentkimi.style.height = "0px";
  }

  timeoutskimi.forEach(t =>
    clearTimeout(t)
  );

  timeoutskimi = [];

}

/* ESCREVER ENGENHEIRO */
function escreverEngkimi(){

  if(!engTextkimi) return;

  if(ikimi < fraseEngkimi.length){

    engTextkimi.innerHTML +=
    fraseEngkimi[ikimi++];

    timeoutskimi.push(

      setTimeout(
        escreverEngkimi,
        20
      )

    );

  }

}

/* ESCREVER PILOTO */
function escreverPilkimi(){

  if(!pilTextkimi) return;

  if(jkimi < frasePilkimi.length){

    pilTextkimi.innerHTML +=
    frasePilkimi[jkimi++];

    timeoutskimi.push(

      setTimeout(
        escreverPilkimi,
        20
      )

    );

  }

}

/* INICIAR */
function iniciarRadiokimi(){

  resetarRadiokimi();

  if(audiokimi){

    audiokimi.currentTime = 0;

    audiokimi.play().catch(() => {});

  }

  if(cardkimi){
    cardkimi.classList.add("ativo");
  }

  if(contentkimi){

    contentkimi.style.height = "0px";

    contentkimi.offsetHeight;

  }

  /* WAVE */
  timeoutskimi.push(

    setTimeout(() => {

      if(cardkimi){
        cardkimi.classList.add("falando");
      }

    }, 300)

  );

  /* TEXTO ENGENHEIRO */
  timeoutskimi.push(

    setTimeout(() => {

      if(contentkimi){
        contentkimi.style.height = "120px";
      }

      if(cardkimi){
        cardkimi.classList.add("mostrar-texto");
      }

      escreverEngkimi();

    }, 800)

  );

  /* EXPANDE */
  timeoutskimi.push(

    setTimeout(() => {

      if(contentkimi){
        contentkimi.style.height = "220px";
      }

    }, 2000)

  );

  /* TEXTO PILOTO */
  timeoutskimi.push(

    setTimeout(() => {

      escreverPilkimi();

    }, 2100)

  );

  /* PARA ONDA */
  timeoutskimi.push(

    setTimeout(() => {

      if(cardkimi){
        cardkimi.classList.remove("falando");
      }

    }, 3000)

  );

  /* SOME */
  timeoutskimi.push(

    setTimeout(() => {

      if(cardkimi){
        cardkimi.classList.add("saindo");
      }

    }, 3500)

  );

}

/* CLIQUE */
if(sectionkimi){

  sectionkimi.addEventListener(
    "click",
    iniciarRadiokimi
  );

}

/* WAVES */
const spanskimi =
document.querySelectorAll(
  ".wave-kimi span"
);

spanskimi.forEach((span, index) => {

  span.style.setProperty("--i", index);

});

const itenskimi =
document.querySelectorAll(".item-galeria-kimi");

const lightboxkimi =
document.querySelector(".lightbox-kimi");

const imgLightboxkimi =
document.querySelector(".img-lightbox-kimi");

const fecharkimi =
document.querySelector(".fechar-kimi");

/* ABRIR LIGHTBOX */
itenskimi.forEach(item => {

  item.addEventListener("click", ()=>{

    const img =
    item.querySelector("img");

    if(img && lightboxkimi && imgLightboxkimi){

      imgLightboxkimi.src = img.src;

      lightboxkimi.style.display =
      "flex";

      document.body.style.overflow =
      "hidden";

    }

  });

});

/* FECHAR */
function fecharLightboxkimi(){

  if(lightboxkimi){

    lightboxkimi.style.display =
    "none";

  }

  document.body.style.overflow =
  "auto";

}

if(fecharkimi){

  fecharkimi.addEventListener(
    "click",
    fecharLightboxkimi
  );

}

/* FECHAR CLICANDO FORA */
if(lightboxkimi){

  lightboxkimi.addEventListener(
    "click",
    (e)=>{

      if(e.target === lightboxkimi){

        fecharLightboxkimi();

      }

    }
  );

}

/* ESC FECHA */
document.addEventListener(
  "keydown",
  (e)=>{

    if(e.key === "Escape"){

      fecharLightboxkimi();

    }

  }
);



const antonelliData = [


{

first:"GEORGE",

last:"RUSSELL",

img:"kimi/russell.webp",

years:"2025",

stats:{

quali:[2,22],

races:[2,22],

podiums:[3,9],

wins:[0,2],

pole:[3,9],

points:[150,318]

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
"antonelliYears"
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
"antonelliQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"antonelliQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"antonelliRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"antonelliRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"antonelliPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"antonelliPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"antonelliWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"antonelliWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"antonelliPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"antonelliPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"antonelliPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"antonelliPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"antonelliBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"antonelliBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"antonelliBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"antonelliBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"antonelliBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"antonelliBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"antonelliBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"antonelliBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"antonelliBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"antonelliBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"antonelliBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"antonelliBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
antonelliData[
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
".antonelli-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.antonelli-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".antonelli-tab"
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
".antonelli-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

antonelliData
.length-1



render(
current
)

}



document
.querySelector(
".antonelli-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
antonelliData.length

)

current=0



render(
current
)

}



render(0) 