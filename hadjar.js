document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglehadjar = document.getElementById("menuTogglehadjar");
const menuhadjar = document.getElementById("sideMenuhadjar");
const overlayhadjar = document.getElementById("overlayhadjar");
const closehadjar = document.getElementById("closeMenuhadjar");

const linksMenuhadjar = document.querySelectorAll(".side-menu-hadjar a");

function fecharMenuhadjar() {
  if (menuhadjar) menuhadjar.classList.remove("active");
  if (overlayhadjar) overlayhadjar.classList.remove("active");
}

if (togglehadjar) {
  togglehadjar.addEventListener("click", () => {
    menuhadjar?.classList.add("active");
    overlayhadjar?.classList.add("active");
  });
}

if (closehadjar) {
  closehadjar.addEventListener("click", fecharMenuhadjar);
}

if (overlayhadjar) {
  overlayhadjar.addEventListener("click", fecharMenuhadjar);
}

linksMenuhadjar.forEach(link => {
  link.addEventListener("click", fecharMenuhadjar);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkshadjar() {

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


const hadjarBanner = document.querySelector(".hadjar-banner-bg");

if(hadjarBanner){

  hadjarBanner.addEventListener("mousemove", (e)=>{

    const rect = hadjarBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hadjarBanner.style.setProperty("--mouse-x", x + "px");
    hadjarBanner.style.setProperty("--mouse-y", y + "px");

  });

}


const track =
  document.querySelector(".slider-hadjar-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-hadjar");

  const dotsContainer =
    document.querySelector(".dots-hadjar");

  const bg =
    document.querySelector(".bg-slider-hadjar");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-hadjar");

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
    document.querySelectorAll(".dot-hadjar");

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


window.addEventListener("scroll", function(){

  const secao = document.querySelector(".numeros-hadjar");
  const bg = document.querySelector(".bg-numeros-hadjar");

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

const cards = document.querySelectorAll(".animar-hadjar");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-hadjar");

        const barra =
          card.querySelector(".barra-velocidade-hadjar");

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
    document.querySelector(".titulo-animar-hadjar");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});


const hadjarTemporadas = {
     
     "2025": [
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"hadjar-dnf" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"China", pos:"P11", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Saudi Arabia", pos:"P10", pontos:"1", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Miami", pos:"P11", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Emilia Romagna", pos:"P9", pontos:"2", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Spain", pos:"P7", pontos:"6", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Canada", pos:"P16", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Austria", pos:"12", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"hadjar-dnf" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Belgium", pos:"P20", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"hadjar-podio" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Azerbaijan", pos:"P10", pontos:"1", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Mexico", pos:"P13", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Las Vegas", pos:"P6", pontos:"8", tipo:"hadjar-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Qatar", pos:"P18", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg" },
  { gp:"Abu Dhabi", pos:"P17", pontos:"0", tipo:"hadjar-sem-pontos" , equipe:"Racing Bulls", logo:"icons/racingbulls.svg"}
]

};

const hadjarCampeonato = {
     "2025": {
  posicao: "11º",
  pontos: 51
}
};

const hadjarContainer =
document.querySelector(".hadjar-corridas-container");

const hadjarSummary =
document.querySelector(".hadjar-season-summary");

const hadjarBtns =
document.querySelectorAll(".hadjar-ano-btn");



if (hadjarContainer && hadjarBtns.length > 0) {

  function carregarTemporada(ano) {

    hadjarContainer.innerHTML = "";

   let equipeAnterior = null;

    const temporada = hadjarTemporadas[ano];

    temporada.forEach((corrida, index) => {

      const card = document.createElement("div");

      const mudouEquipe = equipeAnterior && equipeAnterior !== corrida.equipe;

let transferHTML = "";

      card.className =
      `hadjar-corrida-card ${corrida.tipo}`;

       if (mudouEquipe) {
  card.classList.add("hadjar-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-hadjar">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}



      card.innerHTML = `
      ${transferHTML}
      
  <span class="hadjar-gp">
    ${corrida.gp} GP
  </span>

  <div class="hadjar-team">
    <img src="${corrida.logo}" class="hadjar-team-logo">
  </div>

  <span class="hadjar-resultado">
    ${corrida.pos}
  </span>

  <span class="hadjar-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;

      hadjarContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);

     equipeAnterior = corrida.equipe;

    });
    

    /* ===== RESUMO ===== */

    const resumo = hadjarCampeonato[ano];

    if (hadjarSummary) {

      hadjarSummary.innerHTML = `
        <div class="hadjar-summary-card show">

          <h3 class="hadjar-summary-title">
            Season ${ano}
          </h3>

          <div class="hadjar-summary-stats">

            <div class="hadjar-summary-box">

              <span class="hadjar-summary-label">
                Position
              </span>

              <span class="hadjar-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="hadjar-summary-box">

              <span class="hadjar-summary-label">
                Points
              </span>

              <span class="hadjar-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  hadjarBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      hadjarBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2025");


}


const elementos = document.querySelectorAll(".reveal-hadjar");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-hadjar div");

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

  const grafico = document.querySelector(".linha-hadjar");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


const section = document.querySelector(".radio-f1-hadjar");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-hadjar");

const fraseEng = '"P1 hadjar, amazing race!"';
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

const spans = document.querySelectorAll(".wave-hadjar span");

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
 
 
 const itens = document.querySelectorAll(".item-galeria-hadjar");
const lightbox = document.querySelector(".lightbox-hadjar");
const imgLightbox = document.querySelector(".img-lightbox-hadjar");
const fechar = document.querySelector(".fechar-hadjar");

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





const isackData=[

{

first:"YUKI",

last:"TSUNODA",

img:"hadjar/tsunoda.png",

years:"2025",

stats:{

quali:[1,1],

races:[1,1],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[0,3]

}

},

{

first:"LIAM",

last:"LAWSON",

img:"hadjar/lawson.png",

years:"2025",

stats:{

quali:[13,5],

races:[12,6],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[39,30]

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
"isackYears"
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
"isackQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"isackQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"isackRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"isackRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"isackPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"isackPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"isackWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"isackWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"isackPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"isackPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"isackPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"isackPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"isackBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"isackBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"isackBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"isackBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"isackBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"isackBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"isackBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"isackBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"isackBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"isackBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"isackBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"isackBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
isackData[
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
".isack-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.isack-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".isack-tab"
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
".isack-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

isackData
.length-1



render(
current
)

}



document
.querySelector(
".isack-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
isackData.length

)

current=0



render(
current
)

}



render(0) 