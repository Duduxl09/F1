
  // =====================================================
  // 🏁 COMPARAR
  // =====================================================


document.addEventListener("DOMContentLoaded", () => {

  const imgRussel = document.getElementById("img-russel");
  const imgAntonelli = document.getElementById("img-antonelli");
  const chart = document.getElementById("chart-mer");
  const select = document.getElementById("pilotEvoSelect-mer");

  if (!chart || !select) {
    console.error("Elemento não encontrado");
    return;
  }

  // ===== DADOS =====
  const data = {
    russel: {
      2019:0,
      2020:3,
      2021:16,
      2022: 275,
      2023: 175,
      2024: 210,
      2025: 240
    },
    antonelli: {
      2025: 180
    }
  };

  // ===== TEMPORADAS EM COMUM =====
  function getCommonSeasons() {
    return Object.keys(data.russel).filter(year =>
      data.antonelli[year] !== undefined
    );
  }

  // ===== ANIMA NÚMERO =====
  function animateValue(el, target) {
    let current = 0;
    const duration = 500;
    const steps = 30;
    const increment = target / steps;

    const interval = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      el.textContent = Math.floor(current);
    }, duration / steps);
  }

  // ===== RENDER =====
  function render(seasons, mode) {

    chart.innerHTML = "";

    if (!seasons.length) {
      chart.innerHTML = "<p style='color:white'>Sem dados</p>";
      return;
    }

    const rValues = seasons.map(y => data.russel[y] || 0);
    const aValues = seasons.map(y => data.antonelli[y] || 0);

    const max = Math.max(...rValues, ...aValues, 1);

    seasons.forEach((year, i) => {

      const r = rValues[i];
      const a = aValues[i];

      const group = document.createElement("div");
      group.className = "bar-group-mer";

      group.innerHTML = `
        <span class="label-mer">${year}</span>

        <div class="bars-row-mer">

          <div class="bar-wrap-mer">
            <span class="bar-value russel-val">0</span>
            <div class="bar-mer russel"></div>
          </div>

          <div class="bar-wrap-mer">
            <span class="bar-value antonelli-val">0</span>
            <div class="bar-mer antonelli"></div>
          </div>

        </div>

        <div class="diff-mer"></div>
      `;

      chart.appendChild(group);

      const rBar = group.querySelector(".russel");
      const aBar = group.querySelector(".antonelli");
      const rVal = group.querySelector(".russel-val");
      const aVal = group.querySelector(".antonelli-val");
      const diffEl = group.querySelector(".diff-mer");

      // reset
      rBar.style.height = "0%";
      aBar.style.height = "0%";
      rBar.classList.remove("winner");
      aBar.classList.remove("winner");

      setTimeout(() => {

        if (mode !== "antonelli") {
          rBar.style.height = (r / max * 100) + "%";
          animateValue(rVal, r);
        } else {
          rVal.style.opacity = "0";
        }

        if (mode !== "russel") {
          aBar.style.height = (a / max * 100) + "%";
          animateValue(aVal, a);
        } else {
          aVal.style.opacity = "0";
        }

        // comparação
        if (mode === "both") {
          const diff = Math.abs(r - a);

          if (r > a) {
            rBar.classList.add("winner");
            diffEl.textContent = `+${diff} Russel`;
          } else if (a > r) {
            aBar.classList.add("winner");
            diffEl.textContent = `+${diff} Antonelli`;
          } else {
            diffEl.textContent = "Empate";
          }
        }

      }, i * 200);

    });
  }

  // ===== UPDATE =====
  function update() {
    const mode = select.value;

    if (mode === "both") {
      render(getCommonSeasons(), "both");
    } else if (mode === "russel") {
      render(Object.keys(data.russel), "russel");
    } else if (mode === "antonelli") {
      render(Object.keys(data.antonelli), "antonelli");
    }

    // imagens
    imgRussel.style.opacity = (mode === "antonelli") ? "0" : "1";
    imgAntonelli.style.opacity = (mode === "russel") ? "0" : "1";
  }

  select.addEventListener("change", update);

  update();

});



  // =====================================================
  // 🏁 ESTASTITICAS
  // =====================================================

document.addEventListener("DOMContentLoaded", function(){

// PARALLAX + ZOOM
window.addEventListener("scroll", function(){

const secao = document.querySelector(".numeros-mercedes");
const bg = document.querySelector(".bg-numeros-mercedes");

const rect = secao.getBoundingClientRect();

const alturaTela = window.innerHeight;

if(rect.top < alturaTela && rect.bottom > 0){

let progresso = rect.top / alturaTela;

bg.style.transform = "translateY(" + progresso * 80 + "px) scale(1.05)";

}

});

const cards = document.querySelectorAll(".animar-mercedes");

function animar(){

const topoTela = window.innerHeight;

cards.forEach((card,index)=>{

const posicao = card.getBoundingClientRect().top;

if(posicao < topoTela - 100){

setTimeout(()=>{

card.classList.add("ativo");

const contador = card.querySelector(".contador-mercedes");
const barra = card.querySelector(".barra-velocidade-mercedes");

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

});



  // =====================================================
  // 🏁 TÍTULO ANIMADO
  // =====================================================

window.addEventListener("scroll", ()=>{

const titulo = document.querySelector(".titulo-animar-mercedes");

const pos = titulo.getBoundingClientRect().top;

if(pos < window.innerHeight - 120){

titulo.classList.add("show");

}

});






  // =====================================================TIMELINE MERCEDES
  // ====================================================================== */
window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-mercedes");
const linha = document.querySelector(".linha-centro-mercedes");
const secao = document.querySelector(".timeline-mercedes");

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

const pontos = document.querySelectorAll(".ponto-mercedes");
const progresso = document.querySelector(".linha-progresso-mercedes");
const luz = document.querySelector(".luz-mercedes");
const linha = document.querySelector(".linha-box-mercedes");

let i = 0;

function animar(){

if(i < pontos.length){

pontos[i].classList.add("ativo");

let larguraLinha = linha.clientWidth;

let left = pontos[i].getAttribute("style");
left = left.replace("left:", "").replace("%","").trim();

let posPx = (parseFloat(left) / 100) * larguraLinha;

progresso.style.width = posPx + "px";
luz.style.left = posPx + "px";

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



document.addEventListener("DOMContentLoaded", () => {
function animarConstrutoresMercedes(){

const linha = document.querySelector(".linha-progresso-const");
const pontos = document.querySelectorAll(".ponto-const");
const pista = document.querySelector(".pista-mercedes");

let delay = 0;
let posAnterior = "0%"; // início da linha

pontos.forEach((ponto, index)=>{

setTimeout(()=>{

let carro = document.createElement("div");
carro.classList.add("carro-animado-mercedes");

/* imagem do carro */
let img = ponto.getAttribute("data-carro");
carro.style.backgroundImage = `url(${img})`;

/* nasce da posição anterior */
carro.style.left = posAnterior;

pista.appendChild(carro);

/* anda até o ponto */
setTimeout(()=>{
carro.style.left = ponto.style.left;
linha.style.width = ponto.style.left;
},100);

/* ativa ano + chassi */
setTimeout(()=>{
ponto.classList.add("ativo");
},1200);

/* guarda posição pra próxima volta */
posAnterior = ponto.style.left;

},delay);

delay += 2200;

});

}


/* SCROLL */


});

 // =====================================================
  // 🏁 TÍMELINE CARROS
  // =====================================================
window.addEventListener("load", ()=>{

const pontos = document.querySelectorAll(".timeline-mercedes-car .ponto-car-mercedes");
const progresso = document.querySelector(".timeline-mercedes-car .linha-progresso-car-mercedes");
const luz = document.querySelector(".timeline-mercedes-car .luz-car-mercedes");
const linha = document.querySelector(".timeline-mercedes-car .linha-box-car-mercedes");

let i = 0;

function animar(){

if(i >= pontos.length){

  // 🔥 FINAL DA LINHA
  progresso.style.width = "100%";
  luz.style.left = (linha.clientWidth - 30) + "px";

  return;
}

const ponto = pontos[i];

const foto = ponto.querySelector(".foto-car-mercedes");
const info = ponto.querySelector(".info-car-mercedes");

let larguraLinha = linha.clientWidth;
let leftPercent = parseFloat(ponto.style.left);
let posPx = (leftPercent/100) * larguraLinha;

foto.classList.add("ativo");

setTimeout(()=>{

info.classList.add("ativo");

progresso.style.width = posPx + "px";
luz.style.left = (posPx - 30) + "px";

ponto.style.boxShadow = "0 0 15px #00a19c";

i++;

setTimeout(animar,1300);

},900);

}

setTimeout(animar,800);

});

const blocos = document.querySelectorAll(".bloco-equipe-mercedes");

blocos.forEach((bloco, i)=>{
  bloco.style.opacity = 0;
  bloco.style.transform = "translateY(20px)";

  setTimeout(()=>{
    bloco.style.opacity = 1;
    bloco.style.transform = "translateY(0)";
  }, i * 300);
});





/* =================================================
=============ERAS MERCEDES ================================================================================= */

const erasMercedes = [

{
titulo: "Capitulo I - Era Clássica(1954–1955)",

texto: "A era clássica da Mercedes em 1954–1955 marcou um dos retornos mais dominantes da história da Fórmula 1. Após anos afastada do automobilismo por causa do pós-guerra, a equipe voltou com tecnologia extremamente avançada para a época, especialmente com o icônico carro W196. Em 1954, a Mercedes já entrou vencendo, com Juan Manuel Fangio conquistando o campeonato mundial. O carro se destacava pelo design inovador (incluindo versões com carroceria fechada) e pela engenharia precisa, mostrando uma superioridade clara sobre os rivais. Em 1955, o domínio continuou com ainda mais força, novamente com Fangio no topo. Porém, esse período também ficou marcado por um dos momentos mais trágicos do automobilismo, o Desastre de Le Mans de 1955, que influenciou diretamente a decisão da Mercedes de se retirar das competições no fim daquele ano. Mesmo sendo curta, essa era consolidou a Mercedes como símbolo de excelência técnica e desempenho absoluto, deixando um legado que influenciaria gerações futuras no esporte.",
timeline: [

{ano:"1954", imagem:"titulosmer/fangio.jpeg", descricao:"Juan Manoel Fangio"},
{ano:"1954", imagem:"titulosmer/w196streamline.jpeg", descricao:"Versão futurista do Carro"},
{ano:"1955", imagem:"titulosmer/w196.jpg", descricao:"Carro do BiCampeonato do Fangio"},
{ano:"1955", imagem:"titulosmer/lemans.jpg", descricao:"Carro do acidente tragico que encerrou as atividades da mercedes"}
]
},

{
titulo: "Capitulo II - O Retorno (2010–2013)",
texto: "A fase de 2010 a 2013 marcou o retorno da Mercedes como equipe oficial na Fórmula 1 moderna, iniciando um projeto de reconstrução que mais tarde levaria ao domínio da categoria. A equipe surgiu a partir da compra da Brawn GP e trouxe de volta Michael Schumacher, ao lado de Nico Rosberg, formando uma dupla experiente e técnica. Nos primeiros anos, a Mercedes ainda enfrentava dificuldades para competir com as equipes do topo, como Red Bull Racing. Apesar disso, houve evolução constante: Rosberg conquistou a primeira vitória da nova era da equipe em 2012, mostrando que o projeto começava a dar resultados. Mais importante que os resultados imediatos foi a base construída nesse período. A Mercedes investiu fortemente em estrutura, engenharia e desenvolvimento do motor híbrido que seria introduzido em 2014. Essa preparação silenciosa foi essencial para transformar a equipe, que saiu de um desempenho mediano para se tornar a grande força dominante da Fórmula 1 nos anos seguintes.",
timeline: [
{ano:"2010", imagem:"titulosmer/mer10.jpeg", descricao:"Retorno à F1"},
{ano:"2012", imagem:"titulosmer/mer12.jpeg", descricao:"Primeira vitória moderna"},
{ano:"2013", imagem:"titulosmer/mer13.jpeg", descricao:"A chegado do Principe"}

]
},

{
titulo: "Capitulo III - Domínio Híbrido (2014–2021)",
texto: "A era de 2014 a 2021 foi o período mais dominante da história da Mercedes na Fórmula 1. Com a introdução da nova era híbrida em 2014, a equipe chegou extremamente preparada, graças ao trabalho iniciado anos antes, e rapidamente se tornou a referência técnica do grid. Logo no primeiro ano, a Mercedes estabeleceu uma vantagem enorme sobre os rivais, com a dupla Lewis Hamilton e Nico Rosberg protagonizando uma intensa disputa interna. Entre 2014 e 2016, os dois dominaram completamente a categoria, com títulos alternados até a aposentadoria de Rosberg após seu campeonato em 2016. A partir de 2017, Hamilton assumiu o papel de líder absoluto da equipe, acumulando títulos consecutivos e consolidando seu nome como um dos maiores da história. Ao lado dele, pilotos como Valtteri Bottas contribuíram para manter a consistência da equipe. Durante esse período, a Mercedes conquistou 8 títulos consecutivos de construtores (2014–2021), um recorde na Fórmula 1, destacando-se pela excelência em aerodinâmica, motor e estratégia. Mesmo com a crescente concorrência de equipes como Red Bull Racing, especialmente no final desse ciclo, a Mercedes manteve sua hegemonia até 2021. Essa era não apenas consolidou a equipe como uma das maiores da história, mas também redefiniu o padrão de desempenho e inovação na Fórmula 1 moderna.",
timeline: [
{ano:"2014", imagem:"titulosmer/mer14.jpeg", descricao:"Início do domínio"},
{ano:"2017", imagem:"titulosmer/mer17.jpeg", descricao:"Novo Regulamento,mesma dominancia"},
{ano:"2020", imagem:"titulosmer/mer20.jpg", descricao:"Carro mais dominante"}
]
},

{
titulo: "Capitulo IV - Nova Era (2022–Atual)",
texto: "A fase de 2022 em diante marca um período de transição e reconstrução para a Mercedes na Fórmula 1. Com a introdução do novo regulamento técnico em 2022 — focado em efeito solo — a equipe perdeu a vantagem dominante que tinha na era anterior e passou a enfrentar dificuldades inesperadas, especialmente com o conceito aerodinâmico ousado do carro. Mesmo assim, pilotos como Lewis Hamilton e George Russell mantiveram a competitividade da equipe, garantindo pódios e até vitórias pontuais, enquanto a Mercedes trabalhava intensamente para entender e corrigir seus problemas. Ao longo de 2023 e 2024, a equipe evoluiu gradualmente, abandonando conceitos que não funcionaram e se aproximando novamente do topo. Apesar de ainda enfrentar forte concorrência de equipes como Red Bull Racing, a Mercedes segue como uma das estruturas mais fortes da Fórmula 1. Esse período mostra uma equipe resiliente, capaz de se reinventar após anos de domínio, com foco em voltar à disputa direta por títulos nos próximos anos.",
timeline: [
{ano:"2022", imagem:"titulosmer/mer22.jpeg", descricao:"Novo regulamento,Novas dificuldades"},
{ano:"2023", imagem:"titulosmer/mer23.jpeg", descricao:"Dificuldades permanecem"},
{ano:"2024", imagem:"titulosmer/mer24.jpeg", descricao:"O Adeus de uma Lenda"},
{ano:"2025", imagem:"titulosmer/mer25.jpeg", descricao:"Novo Piloto,Novo desafio"}
]
}

];

function mostrarEra(index) {
    document.getElementById("tituloEra-mercedes").innerText = erasMercedes[index].titulo;
    document.getElementById("textoEra-mercedes").innerText = erasMercedes[index].texto;

    const timelineContainer = document.getElementById("mercedes-timeline");
    timelineContainer.innerHTML = "";

    erasMercedes[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="mercedes-timeline-item">
                <div class="mercedes-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });
}

let index = 0;

const botoes = document.querySelectorAll(".botoes-eras-mercedes button");

botoes.forEach(btn => btn.classList.remove("ativo"));

if (botoes[index]) {
  botoes[index].classList.add("ativo");
}

mostrarEra(0);

  
  const toggleMercedes = document.getElementById("menuToggleMercedes");
const menuMercedes = document.getElementById("sideMenuMercedes");
const overlayMercedes = document.getElementById("overlayMercedes");
const closeMercedes = document.getElementById("closeMenuMercedes");

// 🔥 pega todos os links do menu
const linksMenu = document.querySelectorAll(".side-menu-mercedes a");

// ABRIR
toggleMercedes.addEventListener("click", () => {
  menuMercedes.classList.add("active");
  overlayMercedes.classList.add("active");
});

// FECHAR NO X
closeMercedes.addEventListener("click", () => {
  fecharMenu();
});

// FECHAR CLICANDO FORA
overlayMercedes.addEventListener("click", () => {
  fecharMenu();
});

// 🔥 FECHAR AO CLICAR EM QUALQUER LINK
linksMenu.forEach(link => {
  link.addEventListener("click", () => {
    fecharMenu();
  });
});

// 🔥 FUNÇÃO PADRÃO (evita repetir código)
function fecharMenu(){
  menuMercedes.classList.remove("active");
  overlayMercedes.classList.remove("active");
}
  
  

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
  
  
   // =====================================================
  // 🏁 HALL DA FAMA
  // =====================================================
  
  document.addEventListener("DOMContentLoaded", () => {

  const bg1 = document.querySelector(".bg1-mercedes");
  const bg2 = document.querySelector(".bg2-mercedes");
  const cards = document.querySelectorAll(".hall-card-mercedes");
  const grid = document.querySelector(".hall-grid-mercedes");

  if (!bg1 || !bg2 || cards.length === 0 || !grid) return;

  let current = bg1;
  let next = bg2;

  // 🔥 TROCA DE FUNDO SUAVE
  function changeBackground(img){

    if(!img) return;

    const preload = new Image();
    preload.src = img;

    next.style.backgroundImage = `url('${img}')`;

    requestAnimationFrame(() => {
      next.classList.add("active");
      current.classList.remove("active");

      const temp = current;
      current = next;
      next = temp;
    });

  }

  // 🔥 FUNDO INICIAL
  changeBackground(cards[0].dataset.bg);

  // 🔥 EVENTOS
  cards.forEach(card => {

    const img = card.dataset.bg;

    // 🔥 HOVER (PC)
    card.addEventListener("pointerenter", () => {
      changeBackground(img);
    });

    // 🔥 CLICK (mobile + destaque)
    card.addEventListener("click", () => {

      const isActive = card.classList.contains("active");

      cards.forEach(c => c.classList.remove("active"));

      if(isActive){
        grid.classList.remove("active");
      } else {
        grid.classList.add("active");
        card.classList.add("active");
      }

      changeBackground(img);

    });

  });

});




  // =====================================================
  // 🏁 ECOLUCAO
  // =====================================================

const carsDataMercedes = {

  "50s": {
    image:"hallmer/1950.png",
    name:"Mercedes W196",
    engine:"Inline-8 2.5L",
    power:"~290 HP",
    year:"1954",
    driver:"Fangio"
  },

   "2010s": {
    image:"hallmer/w01.png", // usa essa imagem ou troca pela tua
    name:"Mercedes W01",
    engine:"Mercedes-Benz FO108X V8",
    power:"~750 HP",
    year:"2010",
    driver:"Schumacher <br> Rosberg"
  },  

  "2014s": {
     image:"titulosmer/mercedesw05.png",
    name:"Mercedes W05",
    engine:"V6 Turbo Hybrid",
    power:"~850 HP",
    year:"2014",
    driver:"Hamilton <br> Rosberg"
  },

  "2017s": {
    image:"titulosmer/mercedesw08.png",
    name:"Mercedes W08",
    engine:"V6 Hybrid",
    power:"~900 HP",
    year:"2017",
    driver:"Hamilton <br> Bottas"
  },

  "2020s": {
    image:"hallmer/w16.png",
    name:"Mercedes W16",
    engine:"Mercedes-AMG F1 M15 E Performance",
    power:"~1050 HP",
    year:"2025",
    driver:"Russell <br> Antonelli"
  }

};

function changeDecadeMercedes(decade){
  

  const section = document.getElementById("mercedesEvolution");
  const img = document.getElementById("carImage-mercedes");

  // animação saída
  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  // remove fundos antigos
  section.classList.remove(
    "bg-50s",
    "bg-2010s",
    "bg-2014s",
    "bg-2017s",
    "bg-2020s"
  );

  // adiciona novo fundo
  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataMercedes[decade];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-mercedes").innerText = data.name;
    document.getElementById("carEngine-mercedes").innerText = data.engine;
    document.getElementById("carPower-mercedes").innerText = data.power;
    document.getElementById("carYear-mercedes").innerText = data.year;
    document.getElementById("carDriver-mercedes").innerHTML = data.driver;

    // animação entrada
    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  }, 250);
}