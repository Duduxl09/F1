document.addEventListener("DOMContentLoaded", () => {

  // =====================================================
  // 🔧 UTIL
  // =====================================================
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);


  // =====================================================
  // 🍔 MENU REDBULL
  // =====================================================
  const toggleRedbull = $("#menuToggleRedbull");
  const menuRedbull = $("#sideMenuRedbull");
  const overlayRedbull = $("#overlayRedbull");
  const closeRedbull = $("#closeMenuRedbull");
  const linksRedbull = $$(".side-menu-redbull a");

  function fecharMenuRedbull(){
    menuRedbull.classList.remove("active");
    overlayRedbull.classList.remove("active");
  }

  if (toggleRedbull && menuRedbull && overlayRedbull && closeRedbull) {

    toggleRedbull.addEventListener("click", () => {
      menuRedbull.classList.add("active");
      overlayRedbull.classList.add("active");
    });

    closeRedbull.addEventListener("click", fecharMenuRedbull);
    overlayRedbull.addEventListener("click", fecharMenuRedbull);

    linksRedbull.forEach(link => {
      link.addEventListener("click", () => {
        setTimeout(fecharMenuRedbull, 150);
      });
    });

  }


  // =====================================================
  // 🌄 PARALLAX
  // =====================================================
  function initParallax() {
    const secao = $(".numeros-redbull");
    const bg = $(".bg-numeros-redbull");

    if (!secao || !bg) return;

    window.addEventListener("scroll", () => {
      const rect = secao.getBoundingClientRect();
      const h = window.innerHeight;

      if (rect.top < h && rect.bottom > 0) {
        const prog = rect.top / h;
        bg.style.transform = `translateY(${prog * 80}px) scale(1.05)`;
      }
    });
  }


  // =====================================================
  // 📊 CARDS + CONTADOR
  // =====================================================
  function animarCard(card, delay = 0) {
  const contador = card.querySelector(".contador-redbull");
  const barra = card.querySelector(".barra-velocidade-redbull");

  if (!contador) return;

  const target = +contador.dataset.target;

  setTimeout(() => {
    card.classList.add("ativo");

    let start = null;
    const duration = 2500;

    function run(now) {
      if (!start) start = now;

      const progress = Math.min((now - start) / duration, 1);

      const value = progress * target;

      // 🔥 sincronizado
      contador.innerText = Math.round(value);

      if (barra) {
        barra.style.width = (value / target) * 100 + "%";
      }

      if (progress < 1) {
        requestAnimationFrame(run);
      } else {
        contador.innerText = target;
        if (barra) barra.style.width = "100%";
      }
    }

    requestAnimationFrame(run);

  }, delay);
}
function initCards() {
  const cards = document.querySelectorAll(".animar-redbull");

  function check() {
    const h = window.innerHeight;

    cards.forEach((card, i) => {
      const pos = card.getBoundingClientRect().top;

      if (pos < h - 100 && !card.classList.contains("ativo")) {
        animarCard(card, i * 300); // 🔥 delay entre cards
      }
    });
  }

  window.addEventListener("scroll", check);
  check();
}


  // =====================================================
  // 📊 CHART (COMPARAÇÃO)
  // =====================================================
  function initChart() {
    const chart = $("#chart-red");
    const select = $("#pilotEvoSelect-red");
    const imgV = $("#img-verstappen");
    const imgH = $("#img-hadjar");

    if (!chart || !select) return;

    const data = {
      verstappen: {
        2015:49, 
        2016:204, 
        2017:168, 
        2018:249,
        2019:278, 
        2020:214, 
        2021:395,
        2022:454, 
        2023:575, 
        2024:437, 
        2025:421
      },
      hadjar: {
        2025:51
      }
    };

    function animateValue(el, target) {
  if (!el) return;

  target = Number(target); // 🔥 garante número de verdade

  if (isNaN(target)) {
    el.textContent = "0";
    return;
  }

  let start = 0;
  const duration = 600;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(progress * target);

    el.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target; // 🔥 garante valor final correto
    }
  }

  requestAnimationFrame(update);
}

    function getSeasons(mode) {
      const v = Object.keys(data.verstappen);
      const h = Object.keys(data.hadjar);

      if (mode === "verstappen") return v;
      if (mode === "hadjar") return h;

      return v.filter(y => h.includes(y));
    }

    function render(seasons, mode) {
      chart.innerHTML = "";

      const vVals = seasons.map(y => data.verstappen[y] ?? 0);
      const hVals = seasons.map(y => data.hadjar[y] ?? 0);

      const max = mode === "verstappen"
        ? Math.max(...vVals, 1)
        : mode === "hadjar"
        ? Math.max(...hVals, 1)
        : Math.max(...vVals, ...hVals, 1);

      seasons.forEach((year, i) => {

        const v = vVals[i];
        const h = hVals[i];

        const div = document.createElement("div");
        div.className = "bar-group-red";

        div.innerHTML = `
          <span class="label-red">${year}</span>

          <div class="bars-row-red">

            <div>
              <span class="bar-value verstappen-val">0</span>
              <div class="bar-red verstappen"></div>
            </div>

            <div>
              <span class="bar-value hadjar-val">0</span>
              <div class="bar-red hadjar"></div>
            </div>

          </div>

          <div class="diff-red"></div>
        `;

        chart.appendChild(div);

        const vBar = div.querySelector(".verstappen");
        const hBar = div.querySelector(".hadjar");
        const vVal = div.querySelector(".verstappen-val");
        const hVal = div.querySelector(".hadjar-val");

        setTimeout(() => {
// VERSTAPPEN
if (mode !== "hadjar") {
  vBar.style.height = (v / max * 100) + "%";
  vVal.style.opacity = "1";
  vVal.textContent = "0"; // reset visual
  animateValue(vVal, v);
} else {
  vBar.style.height = "0%";
  vVal.style.opacity = "0";
  vVal.textContent = ""; // remove o 0 fantasma
}

// HADJAR
if (mode !== "verstappen") {
  hBar.style.height = (h / max * 100) + "%";
  hVal.style.opacity = "1";
  hVal.textContent = "0";
  animateValue(hVal, h);
} else {
  hBar.style.height = "0%";
  hVal.style.opacity = "0";
  hVal.textContent = "";
}

        }, i * 100);
      });
    }

    function update() {
      const mode = select.value;

      render(getSeasons(mode), mode);

      if (imgV && imgH) {
        imgV.style.opacity = mode === "hadjar" ? "0" : "1";
        imgH.style.opacity = mode === "verstappen" ? "0" : "1";
      }
    }

    select.addEventListener("change", update);
    update();
  }


    

  // =====================================================
  // 🏆 ERAS
  // =====================================================
  const erasRedBull = [
 {
titulo: "Capítulo I – O Começo da Red Bull (2005)",

texto: "A Red Bull entrou na Fórmula 1 em 2005 após comprar a Jaguar. Nos primeiros anos, a equipe focou em construir sua base e crescer tecnicamente, preparando o terreno para o futuro sucesso.",
timeline: [

{ano:"2005", imagem:"titulosred/rb1.jpeg", descricao:"Primeiro carro da Red Bull"},
{ano:"2006", imagem:"titulosred/rb2.jpg", descricao:"Chegada de Adrian Newey"},
{ano:"2008", imagem:"titulosred/rb4.jpg", descricao:"Sinais de Evolução"}
]
},

{
titulo: "Capítulo II – O Domínio de Vettel (2009–2013)",
texto: "Com carros projetados por Adrian Newey e liderados por Sebastian Vettel, a Red Bull dominou a Fórmula 1, conquistando quatro títulos consecutivos de pilotos e construtores.",
timeline: [
  {ano:"2009", imagem:"titulosred/rb5.jpg", descricao:"Primeiro Podio"},
{ano:"2010", imagem:"titulosred/vettel10.jpg", descricao:"1° Titulo"},
{ano:"2011", imagem:"titulosred/vettel11.jpeg", descricao:"Dominio total"},
{ano:"2013", imagem:"titulosred/vettel13.jpeg", descricao:"Recorde de vitorias"}

]
},

{
titulo: "Capítulo III – Desafios e Reconstrução (2014–2020)",
texto: "Com a mudança para motores híbridos, a Red Bull perdeu competitividade e enfrentou dificuldades com a Renault, passando por anos de reconstrução.",
timeline: [
{ano:"2014", imagem:"titulosred/rbr14.jpeg", descricao:"Fim do domínio"},
{ano:"2016", imagem:"titulosred/max16.jpeg", descricao:"A chegada de um Prodigio"},
{ano:"2019", imagem:"titulosred/max19.jpeg", descricao:"Parceria com a Honda"},
{ano:"2020", imagem:"titulosred/rbr20.jpeg", descricao:"Evolução gradual"}
]
},

{
titulo: "Capítulo IV – O Novo Domínio (2021–2025)",
texto: "Com Max Verstappen e uma equipe técnica extremamente forte, a Red Bull voltou ao topo, iniciando uma nova era dominante na Fórmula 1.",
timeline: [
  {ano:"2021", imagem:"titulosred/max21.jpg", descricao:"Titulo histórico"},
{ano:"2022", imagem:"titulosred/max22.jpeg", descricao:"Domínio com o novo regulamento"},
{ano:"2023", imagem:"titulosred/rbr23.jpeg", descricao:"Temporada dominante 22 vitorias em 23 corridas "},
{ano:"2024", imagem:"titulosred/max24.jpeg", descricao:"Titula na Experiencia"},
{ano:"2025", imagem:"titulosred/max25.jpeg", descricao:"Quase a virada historica"}
]
}

];

function mostrarEra(index) {
  const era = erasRedBull[index];

  const titulo = document.getElementById("tituloEra-redbull");
  const texto = document.getElementById("textoEra-redbull");
  const box = document.getElementById("redbull-timeline");
  const botoes = document.querySelectorAll(".botoes-eras-redbull button");

  if (!era || !titulo || !texto || !box) return;

  titulo.innerText = era.titulo;
  texto.innerText = era.texto;

  box.innerHTML = "";

  era.timeline.forEach(item => {
    box.innerHTML += `
      <div class="redbull-timeline-item">
        <div class="redbull-timeline-year">${item.ano}</div>
        <img src="${item.imagem}">
        <p>${item.descricao}</p>
      </div>
    `;
  });

  botoes.forEach(b => b.classList.remove("ativo"));
  if (botoes[index]) botoes[index].classList.add("ativo");
}

window.mostrarEra = mostrarEra;

 (function scrollLinks(){

    document.querySelectorAll('a[href^="#"]').forEach(link => {

      link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      });

    });

  })();




// inicia corretamente
window.addEventListener("load", () => {
  mostrarEra(0);
});

  // =====================================================
  // 🔗 SCROLL SUAVE
  // =====================================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
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


  // =====================================================
  // 🏁 TIMELINE SIMPLES (scroll único)
  // =====================================================
window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-redbull");
const linha = document.querySelector(".linha-centro-redbull");
const secao = document.querySelector(".timeline-redbull");

const rect = secao.getBoundingClientRect();

let alturaTela = window.innerHeight;

if(rect.top < alturaTela && rect.bottom > 0){

let progresso = (alturaTela - rect.top) / (rect.height + alturaTela);

linha.style.height = progresso * rect.height + "px";

}

itens.forEach(item=>{

const pos = item.getBoundingClientRect().top;

if(pos < alturaTela - 120){

item.classList.add("ativo");

}

});

});

window.addEventListener("load", function(){

const pontos = document.querySelectorAll(".ponto-redbull");
const progresso = document.querySelector(".linha-progresso-redbull");
const luz = document.querySelector(".luz-redbull");
const linha = document.querySelector(".linha-box-redbull");

let i = 0;

function animar(){

if(i < pontos.length){

pontos[i].classList.add("ativo");

let larguraLinha = linha.clientWidth;

let left = pontos[i].getAttribute("style");
left = left.replace("left:", "").replace("%","").trim();

let posPx = (parseFloat(left) / 100) * larguraLinha;

progresso.style.width = posPx + "px";
luz.style.left = (posPx - 30) + "px";

i++;

if(i == pontos.length){
setTimeout(()=>{
progresso.style.width = "100%";
luz.style.left = "100%";
},1300);
}

setTimeout(animar,1300);


}

}

animar();

});







 // =====================================================
  // 🔗 CARROS
  // =====================================================

    function timelineCarros() {
  window.addEventListener("load", () => {

    const secao = document.querySelector(".timeline-redbull-car");
    const pontos = document.querySelectorAll(".timeline-redbull-car .ponto-car-redbull");
    const progresso = document.querySelector(".timeline-redbull-car .linha-progresso-car-redbull");
    const luz = document.querySelector(".timeline-redbull-car .luz-car-redbull");
    const linha = document.querySelector(".timeline-redbull-car .linha-box-car-redbull");

    if (!secao || !pontos.length || !progresso || !luz || !linha) return;

    let i = 0;

    function animar() {
      if (i >= pontos.length) {

  progresso.style.width = "100%";

  luz.style.left = "calc(100% - 35px)";

  return;
}

      const ponto = pontos[i];

      const foto = ponto.querySelector(".foto-car-redbull, .foto-car-redbull");
      const info = ponto.querySelector(".info-car-redbull, .info-car-redbull");

      if (foto) foto.classList.add("ativo");

      const left = parseFloat(ponto.style.left || "0");
      const largura = linha.clientWidth;
      const posPx = (left / 100) * largura;

      setTimeout(() => {

        if (info) info.classList.add("ativo");

        progresso.style.width = posPx + "px";
        luz.style.left = (posPx - 30) + "px";

        ponto.style.boxShadow = "0 0 15px #ff7a00";

        i++;
        setTimeout(animar, 1200);

      }, 800);
    }

    animar();

  });
}

timelineCarros();
    
    
    // =====================================================
// 🏁 HALL DA FAMA RED BULL
// =====================================================

const bg1 = document.querySelector(".bg1-redbull");
const bg2 = document.querySelector(".bg2-redbull");

const cards = document.querySelectorAll(".hall-card-redbull");

if(bg1 && bg2 && cards.length > 0){

  let current = bg1;
  let next = bg2;

  function changeBackground(img){

    if(!img) return;

    next.style.backgroundImage = `url('${img}')`;

    next.classList.add("active");

    current.classList.remove("active");

    let temp = current;

    current = next;
    next = temp;
  }

  changeBackground(cards[0].dataset.bg);

  cards.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("mouseenter", () => {
      changeBackground(img);
    });

    card.addEventListener("click", () => {

      cards.forEach(c => {
        c.classList.remove("active");
      });

      card.classList.add("active");

      changeBackground(img);

    });

  });

}
    const hall = document.querySelector(".hall-redbull");
const bg = document.querySelector(".bg-hall-redbull");

if(hall && bg){

bg.addEventListener("click", ()=>{

hall.classList.toggle("showcase");

});

}

const carsDataRedbull = {

  "2005s": {
    image:"hallred/rb1.png",
    name:"Red Bull RB1",
    engine:"Cosworth TJ2005 V10",
    power:"~900 HP",
    year:"2005",
    driver:"Coulthard <br> Klien"
  },

  "2010s": {
    image:"titulosred/rb6.png",
    name:"Red Bull RB6",
    engine:"Renault RS27 V8",
    power:"~750 HP",
    year:"2010",
    driver:"Vettel <br> Webber"
  },

  "2013s": {
    image:"titulosred/rb9.png",
    name:"Red Bull RB9",
    engine:"Renault RS27 V8",
    power:"~750 HP",
    year:"2013",
    driver:"Vettel <br> Webber"
  },

  "2021s": {
    image:"hallred/rb16b.png",
    name:"Red Bull RB16B",
    engine:"Honda RA621H",
    power:"~1000 HP",
    year:"2021",
    driver:"Verstappen <br> Pérez"
  },

  "2025s": {
    image:"hallred/rb21.png",
    name:"Red Bull RB21",
    engine:"Honda RBPT Hybrid",
    power:"~1050 HP",
    year:"2025",
    driver:"Verstappen <br> Tsunoda"
  }

};

function changeDecadeRedbull(decade){

  const section = document.getElementById("redbullEvolution");
  const img = document.getElementById("carImage-redbull");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-2005s",
    "bg-2010s",
    "bg-2013s",
    "bg-2021s",
    "bg-2025s"
  );

  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataRedbull[decade];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-redbull").innerText = data.name;
    document.getElementById("carEngine-redbull").innerText = data.engine;
    document.getElementById("carPower-redbull").innerText = data.power;
    document.getElementById("carYear-redbull").innerText = data.year;
    document.getElementById("carDriver-redbull").innerHTML = data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}

window.changeDecadeRedbull = changeDecadeRedbull;
    

  // =====================================================
  // 🚀 INIT
  // =====================================================
  initParallax();
  initCards();
  initChart();

  window.addEventListener("load", () => {
    mostrarEra(0);
  });

});