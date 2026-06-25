document.addEventListener("DOMContentLoaded", function(){

// PARALLAX + ZOOM
window.addEventListener("scroll", function(){

const secao = document.querySelector(".numeros-ferrari");
const bg = document.querySelector(".bg-numeros-ferrari");

const rect = secao.getBoundingClientRect();

const alturaTela = window.innerHeight;

if(rect.top < alturaTela && rect.bottom > 0){

let progresso = rect.top / alturaTela;

bg.style.transform = "translateY(" + progresso * 80 + "px) scale(1.05)";

}

});

const cards = document.querySelectorAll(".animar-ferrari");

function animar(){

const topoTela = window.innerHeight;

cards.forEach((card,index)=>{

const posicao = card.getBoundingClientRect().top;

if(posicao < topoTela - 100){

setTimeout(()=>{

card.classList.add("ativo");

const contador = card.querySelector(".contador-ferrari");
const barra = card.querySelector(".barra-velocidade-ferrari");

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




window.addEventListener("scroll", ()=>{

const titulo = document.querySelector(".titulo-animar-ferrari");

const pos = titulo.getBoundingClientRect().top;

if(pos < window.innerHeight - 120){

titulo.classList.add("show");

}

});


window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-ferrari");
const linha = document.querySelector(".linha-centro-ferrari");
const secao = document.querySelector(".timeline-ferrari");

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

const pontos = document.querySelectorAll(".ponto-ferrari");
const progresso = document.querySelector(".linha-progresso-ferrari");
const luz = document.querySelector(".luz-ferrari");
const linha = document.querySelector(".linha-box-ferrari");

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


/* =========================
   TIMELINE CARROS
========================= */
window.addEventListener("load", ()=>{

const pontos = document.querySelectorAll(".timeline-ferrari-car .ponto-car-ferrari");
const progresso = document.querySelector(".timeline-ferrari-car .linha-progresso-car-ferrari");
const luz = document.querySelector(".timeline-ferrari-car .luz-car-ferrari");
const linha = document.querySelector(".timeline-ferrari-car .linha-box-car-ferrari");

if(!pontos.length || !progresso || !luz || !linha) return;

let i = 0;

function animarTimeline(){

if(i >= pontos.length) return;

const ponto = pontos[i];

const foto = ponto.querySelector(".foto-car-ferrari, .foto-car-ferrari");
const info = ponto.querySelector(".info-car-ferrari, .info-car-ferrari");

if(foto) foto.classList.add("ativo");

let larguraLinha = linha.clientWidth;
let leftPercent = parseFloat(ponto.style.left);
let posPx = (leftPercent/100) * larguraLinha;

setTimeout(()=>{

if(info) info.classList.add("ativo");

progresso.style.width = posPx + "px";
luz.style.left = (posPx - 30) + "px";

ponto.style.boxShadow = "0 0 15px #ff7a00";

i++;

setTimeout(animarTimeline,1300);

},900);

}

setTimeout(animarTimeline,800);

});

 // FECHAMENTO CERTO DO DOMContentLoaded


const erasFerrari = [

{
titulo: "Capítulo I – Primeiros passos (1950-1964) ",

texto: "A Scuderia Ferrari estreou na Fórmula 1 em 1950, sendo a única equipe que permanece até hoje desde a criação da categoria. Logo nos primeiros anos, a equipe italiana mostrou sua força e ambição dentro do automobilismo mundial Em 1951, a Ferrari conquistou sua primeira vitória na Fórmula 1, marcando o início de uma trajetória histórica. Pouco tempo depois, a equipe alcançou seu primeiro grande marco: o título mundial de pilotos em 1952 com Alberto Ascari, que repetiu o feito em 1953, consolidando a Ferrari como a principal força da época Durante essa fase inicial, a equipe construiu as bases de sua identidade na Fórmula 1, combinando desempenho, inovação e uma forte paixão pelas corridas. Ao longo dos anos seguintes, a Ferrari continuou competitiva, conquistando títulos importantes como o de construtores em 1961 e voltando ao topo em 1964, encerrando esse primeiro capítulo como uma das equipes mais vitoriosas do início da história da categoria.",
timeline: [

{ano:"1950", imagem:"titulosfer/1950.jpg", descricao:"Estreia na Formula 1"},
{ano:"1951", imagem:"titulosfer/1951.jpg", descricao:"1° Vitoria"},
{ano:"1952", imagem:"titulosfer/1952.jpeg", descricao:"1° Titulo"},
{ano:"1953", imagem:"titulosfer/1953.jpeg" ,
  descricao:"Bicampeonato"},
  {ano:"1961", imagem:"titulosfer/1961.jpg" ,
  descricao:"Titulo de construtores"}
]
},

{
titulo: "Capítulo II – Era de Ouro e Rivalidades (1965-1979)",
texto: "Após os sucessos iniciais, a Scuderia Ferrari entrou em um período de altos e baixos na Fórmula 1 durante o final dos anos 60. Mesmo assim, a equipe se reestruturou e voltou ao topo na década de 1970, iniciando uma das fases mais marcantes de sua história. O grande nome dessa era foi Niki Lauda, que liderou a Ferrari ao título mundial em 1975 e novamente em 1977. Seu talento, combinado com carros extremamente competitivos, recolocou a equipe italiana no centro da Fórmula 1. Essa fase também ficou marcada por uma das maiores rivalidades da história da categoria, entre Lauda e James Hunt. A disputa de 1976 entrou para a história não apenas pelo nível competitivo, mas também pelo drama vivido por Lauda, que retornou às pistas poucas semanas após um grave acidente, mostrando uma determinação que simboliza o espírito da Ferrari. No final da década, a equipe voltou a conquistar o título com Jody Scheckter em 1979, com o apoio de Gilles Villeneuve, encerrando o período com mais um momento histórico. Essa era consolidou a Ferrari como uma das maiores equipes da Fórmula 1, unindo desempenho, emoção e algumas das histórias mais icônicas do esporte.",
timeline: [
  {ano:"1975", imagem:"titulosfer/1975.jpeg", descricao:"Primeiro titulo do Lauda"},
{ano:"1976", imagem:"titulosfer/1976.webp", descricao:"Rivalidade historica Lauda x Hunt"},
{ano:"1977", imagem:"titulosfer/1977.jpg", descricao:"Bicampeonato do Lauda"},
{ano:"1979", imagem:"titulosfer/1979.jpg", descricao:"titulo do Scheckter"}

]
},

{
titulo: "Capítulo III – Crises e anos dificies (1980-1995)",
texto: "Após o sucesso da década de 1970, a Scuderia Ferrari entrou em um dos períodos mais instáveis de sua história na Fórmula 1. Durante os anos 80 e início dos anos 90, a equipe enfrentou dificuldades técnicas, mudanças internas e uma forte concorrência, o que impediu a continuidade do domínio visto anteriormente. Mesmo com carros competitivos em alguns momentos, a Ferrari frequentemente via vitórias escaparem por detalhes. Grandes nomes passaram pela equipe nesse período, como Alain Prost e Nigel Mansell, mas nem mesmo pilotos desse nível conseguiram levar a equipe de volta ao topo de forma consistente. A temporada de 1990 foi uma das mais marcantes dessa fase, quando Prost disputou o título até a última corrida, mostrando que a Ferrari ainda tinha potencial para lutar entre os melhores. No entanto, problemas de desempenho e organização continuaram a impedir conquistas maiores. Esse período ficou marcado como uma fase de reconstrução, onde a Ferrari buscava recuperar sua identidade vencedora. Apesar das dificuldades, esses anos foram fundamentais para preparar o caminho para uma das maiores reviravoltas da história da Fórmula 1.",
timeline: [
{ano:"1982", imagem:"titulosfer/1982.jpeg", descricao:"temporada boa mas sem titulo"},
{ano:"1985", imagem:"titulosfer/1985.jpg", descricao:"A ultima vitoria antes da queda"},
{ano:"1990", imagem:"titulosfer/1990.jpg", descricao:"Senna x Prost "},
{ano:"1995", imagem:"titulosfer/1995.jpeg", descricao:"Fim de uma era dificil"}
]
},

{
titulo: "Capítulo IV – Michael Schumacher (1996-2004)",
texto: "Após anos de dificuldades, a Scuderia Ferrari iniciou uma das maiores reconstruções da história da Fórmula 1 com a chegada de Michael Schumacher em 1996. Ao lado de uma equipe técnica extremamente forte, a Ferrari começou a se reorganizar e voltar ao topo. Os primeiros anos foram de evolução constante, com a equipe se tornando cada vez mais competitiva até finalmente conquistar o tão esperado título mundial em 2000, encerrando um jejum de 21 anos sem títulos de pilotos. A partir daí, a Ferrari dominou completamente a Fórmula 1. Schumacher conquistou cinco títulos consecutivos entre 2000 e 2004, enquanto a equipe acumulava vitórias, poles e recordes históricos. Ao seu lado, Rubens Barrichello teve papel fundamental, contribuindo para o domínio da equipe nos campeonatos de construtores. A temporada de 2004 se tornou um dos maiores exemplos de superioridade da história da categoria, com a Ferrari vencendo a grande maioria das corridas e estabelecendo um nível de desempenho raramente visto na Fórmula 1. Essa era não apenas devolveu a Ferrari ao topo, mas também consolidou o nome de Schumacher como um dos maiores pilotos de todos os tempos, marcando definitivamente a história do esporte.",
timeline: [
  {ano:"1996", imagem:"titulosfer/1996.jpeg", descricao:"Chegada do Schumacher"},
{ano:"1999", imagem:"titulosfer/1999.jpg", descricao:"De volta as glorias"},
{ano:"2000", imagem:"titulosfer/2000.jpeg", descricao:"Fim do Jejum"},
{ano:"2001-2003", imagem:"titulosfer/2001.jpeg", descricao:"Dominio absoluto"},
{ano:"2004", imagem:"titulosfer/2004.jpeg", descricao:"Historia feita"}
]
},

{
titulo: "Capitulo V - O Ultimo titulo e a nova queda (2005-2013)",
texto:"Após o domínio absoluto da era de Michael Schumacher, a Scuderia Ferrari entrou em uma nova fase na Fórmula 1. Com mudanças de regulamento e o crescimento de equipes rivais, manter o mesmo nível de desempenho se tornou um grande desafio. Mesmo assim, a Ferrari ainda mostrou sua força ao conquistar o título mundial de pilotos em 2007 com Kimi Räikkönen, em uma das disputas mais emocionantes da história da categoria. Nos anos seguintes, a equipe voltou a lutar pelo campeonato com Fernando Alonso, que esteve muito próximo do título em 2010 e 2012, levando a disputa até as últimas corridas. Apesar do alto nível competitivo, a Ferrari não conseguiu transformar essas campanhas em títulos. Durante esse período, a equipe enfrentou forte concorrência de outras grandes equipes e iniciou uma fase de instabilidade, alternando entre temporadas competitivas e outras abaixo das expectativas. Essa era marcou o último grande momento vencedor da Ferrari até hoje, mas também o início de uma nova fase de desafios na busca por retornar ao topo da Fórmula 1.",
timeline: [
  {ano:"2005", imagem:"titulosfer/2005.jpg", descricao:"Fim do dominio"},
{ano:"2007", imagem:"titulosfer/2007.jpeg", descricao:"Ultimo titulo de pilotos"},
{ano:"2008", imagem:"titulosfer/2008.jpg", descricao:"Ultimo titulo de construtores"},
{ano:"2010", imagem:"titulosfer/2010.jpeg", descricao:"Quase um titulo"},
{ano:"2012", imagem:"titulosfer/2012.jpg", descricao:"Nova disputa mesmo final"}
]
},

{
titulo: "Capitulo VI - Era Hibrida (2014-2021)",
texto:"Com a chegada da era híbrida em 2014, a Scuderia Ferrari enfrentou um dos maiores desafios de sua história na Fórmula 1. A equipe viu o domínio de seus rivais e precisou se adaptar rapidamente a um novo regulamento técnico. Após um início difícil, a Ferrari voltou a ser competitiva a partir de 2015, conquistando vitórias importantes e mostrando evolução constante. O grande destaque dessa fase foi Sebastian Vettel, que liderou a equipe em campanhas fortes, especialmente em 2017 e 2018, quando chegou a disputar o título mundial. Apesar do desempenho competitivo, erros estratégicos, falhas mecânicas e a consistência dos adversários impediram a conquista do campeonato. Ainda assim, a Ferrari se manteve como uma das principais forças do grid durante esses anos. Em 2019, a equipe iniciou uma nova fase com a ascensão de Charles Leclerc, que rapidamente se destacou com poles e vitórias, representando o futuro da equipe. No entanto, a partir de 2020, a Ferrari enfrentou uma queda significativa de desempenho, passando por uma de suas piores fases na era moderna. Em 2021, a equipe iniciou um processo de recuperação, voltando a mostrar sinais de evolução e preparando o terreno para um novo ciclo. Esse período ficou marcado como uma era de grandes oportunidades perdidas, mas também de transição e reconstrução rumo a um futuro mais competitivo.",
timeline: [
  {ano:"2014", imagem:"titulosfer/2014.jpg", descricao:"Inicio da era Hibrida"},
{ano:"2017", imagem:"titulosfer/2017.jpg", descricao:"Na briga pelo titulo"},
{ano:"2019", imagem:"titulosfer/2019.jpeg", descricao:"Chegada de Charles Lecrerc"},
{ano:"2020", imagem:"titulosfer/2020.jpg", descricao:"Queda de desempenho"}
]
},

{
titulo: "Capitulo VII - Efeito Solo (2022-2025)",
texto:"A partir de 2022, a Scuderia Ferrari iniciou um novo capítulo na Fórmula 1 com a chegada do novo regulamento técnico. A equipe começou forte, mostrando um carro competitivo e voltando a disputar vitórias com frequência. O principal destaque dessa fase foi Charles Leclerc, que assumiu o papel de líder dentro da equipe e chegou a disputar o campeonato em 2022. Ao seu lado, Carlos Sainz Jr. também contribuiu com desempenhos consistentes e vitórias importantes. Apesar do bom início, problemas estratégicos e falta de consistência impediram a Ferrari de manter a disputa pelo título ao longo das temporadas. Ainda assim, a equipe continuou evoluindo e se mantendo entre as principais forças do grid. Nos anos mais recentes, a Ferrari segue em processo de crescimento, buscando corrigir erros do passado e voltar definitivamente ao topo da Fórmula 1. Com uma base sólida, jovens talentos e um carro cada vez mais competitivo, a equipe mantém viva a expectativa de um novo ciclo vencedor.",
timeline: [
  {ano:"2022", imagem:"titulosfer/2022.jpeg", descricao:"Começo forte"},
{ano:"2023", imagem:"titulosfer/2023.jpeg", descricao:"Temporada inrregular"},
{ano:"2024", imagem:"titulosfer/2024.jpg", descricao:"Disputa pelo tituto de construtores"},
{ano:"2025", imagem:"titulosfer/2025.jpeg", descricao:"Lewis Hamilton é ferrari"}
]
}



];

function mostrarEra(index) {
    document.getElementById("tituloEra-ferrari").innerText = erasFerrari[index].titulo;
    document.getElementById("textoEra-ferrari").innerText = erasFerrari[index].texto;

    const timelineContainer = document.getElementById("ferrari-timeline");
    timelineContainer.innerHTML = "";

    erasFerrari[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="ferrari-timeline-item">
                <div class="ferrari-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });
}


// Mostra a primeira era automaticamente ao carregar

mostrarEra(0);



  // =====================================================
  // 🎯 SCROLL LINKS
  // =====================================================
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
  // 🍔 MENU
  // =====================================================
 const toggleFerrari = document.getElementById("menuToggleFerrari");
const menuFerrari = document.getElementById("sideMenuFerrari");
const overlayFerrari = document.getElementById("overlayFerrari");
const closeFerrari = document.getElementById("closeMenuFerrari");

// 🔥 pega todos os links do menu
const linksMenuFerrari = document.querySelectorAll(".side-menu-ferrari a");

// ABRIR
toggleFerrari.addEventListener("click", () => {
  menuFerrari.classList.add("active");
  overlayFerrari.classList.add("active");
});

// FECHAR NO X
closeFerrari.addEventListener("click", () => {
  fecharMenuFerrari();
});

// FECHAR CLICANDO FORA
overlayFerrari.addEventListener("click", () => {
  fecharMenuFerrari();
});

// 🔥 FECHAR AO CLICAR EM QUALQUER LINK
linksMenuFerrari.forEach(link => {
  link.addEventListener("click", () => {
    fecharMenuFerrari();
  });
});

// 🔥 FUNÇÃO PADRÃO
function fecharMenuFerrari(){
  menuFerrari.classList.remove("active");
  overlayFerrari.classList.remove("active");
}
 
 
  
  
  document.addEventListener("DOMContentLoaded", () => {

  const imgHamilton = document.getElementById("img-hamilton");
  const imgLecrerc = document.getElementById("img-lecrerc");

  const data = {

  hamilton: {
  2007: 109,
  2008: 98,
  2009: 49,
  2010: 240,
  2011: 227,
  2012: 190,
  2013: 189,
  2014: 384,
  2015: 381,
  2016: 380,
  2017: 363,
  2018: 408,
  2019: 413,
  2020: 347,
  2021: 385,
  2022: 233,
  2023: 217,
  2024: 207,
  2025: 260
},

lecrerc: {
  2018: 39,
  2019: 264,
  2020: 98,
  2021: 159,
  2022: 308,
  2023: 206,
  2024: 356,
  2025: 280
}

  };

  const chart = document.getElementById("chart-fer");
  const select = document.getElementById("pilotEvoSelect-fer");

  if (!chart || !select) return;

  function getCommonSeasons() {
    return Object.keys(data.hamilton).filter(y =>
      Object.keys(data.lecrerc).includes(y)
    );
  }

  function render(seasons, mode) {

    chart.innerHTML = "";

    const hValues = seasons.map(y => data.hamilton[y] || 0);
    const lValues = seasons.map(y => data.lecrerc[y] || 0);

    const max = Math.max(...hValues, ...lValues);

    seasons.forEach((year, i) => {

      const h = hValues[i];
      const l = lValues[i];

      const group = document.createElement("div");
      group.className = "bar-group-fer";

      group.innerHTML = `
        <span class="label-fer">${year}</span>

        <div class="bars-row-fer">

          <div class="bar-wrap-fer">
            <span class="bar-value hamilton-val">0</span>
            <div class="bar-fer hamilton"></div>
          </div>

          <div class="bar-wrap-fer">
            <span class="bar-value lecrerc-val">0</span>
            <div class="bar-fer lecrerc"></div>
          </div>

        </div>

        <div class="diff-fer"></div>
      `;

      chart.appendChild(group);

      const hBar = group.querySelector(".hamilton");
      const lBar = group.querySelector(".lecrerc");

      const hVal = group.querySelector(".hamilton-val");
      const lVal = group.querySelector(".lecrerc-val");

      const diffEl = group.querySelector(".diff-fer");

      setTimeout(() => {

        // ALTURA DAS BARRAS
        if (mode === "both") {
          hBar.style.height = (h / max * 100) + "%";
          lBar.style.height = (l / max * 100) + "%";
        }

        if (mode === "hamilton") {
          hBar.style.height = (h / max * 100) + "%";
        }

        if (mode === "lecrerc") {
          lBar.style.height = (l / max * 100) + "%";
        }

        // ANIMAÇÃO DOS VALORES
        function animateValue(el, target) {

          let current = 0;
          const step = target / 30;

          const interval = setInterval(() => {

            current += step;

            if (current >= target) {
              current = target;
              clearInterval(interval);
            }

            el.textContent = Math.floor(current);

          }, 20);

        }

        // RESET VISUAL
        hVal.style.opacity = "1";
        lVal.style.opacity = "1";

        // ESCONDER VALORES
        if (mode === "hamilton") {
          lVal.style.opacity = "0";
        }

        if (mode === "lecrerc") {
          hVal.style.opacity = "0";
        }

        // ANIMAÇÃO
        if (mode !== "lecrerc") animateValue(hVal, h);
        if (mode !== "hamilton") animateValue(lVal, l);

        // COMPARAÇÃO
        if (mode === "both") {

          const diff = Math.abs(h - l);

          if (h > l) {
            hBar.classList.add("winner");
            diffEl.textContent = `+${diff} Hamilton`;
          }

          if (l > h) {
            lBar.classList.add("winner");
            diffEl.textContent = `+${diff} Lecrerc`;
          }

        }

      }, i * 200);

    });

  }

  function update() {

    const mode = select.value;

    // ===== GRÁFICO =====
    if (mode === "both") {
      render(getCommonSeasons(), "both");
    }

    if (mode === "hamilton") {
      render(Object.keys(data.hamilton), "hamilton");
    }

    if (mode === "lecrerc") {
      render(Object.keys(data.lecrerc), "lecrerc");
    }

    // ===== IMAGENS =====
    if (mode === "both") {
      imgHamilton.style.opacity = "1";
      imgLecrerc.style.opacity = "1";
    }

    if (mode === "hamilton") {
      imgHamilton.style.opacity = "1";
      imgLecrerc.style.opacity = "0";
    }

    if (mode === "lecrerc") {
      imgHamilton.style.opacity = "0";
      imgLecrerc.style.opacity = "1";
    }

  }

  select.addEventListener("change", update);

  update();

});

// =====================================================
// 🏎️ HALL DA FAMA FERRARI
// =====================================================

const bg1Ferrari = document.querySelector(".bg1-ferrari");
const bg2Ferrari = document.querySelector(".bg2-ferrari");

const cardsFerrari = document.querySelectorAll(".hall-card-ferrari");

if(bg1Ferrari && bg2Ferrari && cardsFerrari.length > 0){

  let currentFerrari = bg1Ferrari;
  let nextFerrari = bg2Ferrari;

  function changeBackgroundFerrari(img){

    if(!img) return;

    nextFerrari.style.backgroundImage = `url('${img}')`;

    nextFerrari.classList.add("active");

    currentFerrari.classList.remove("active");

    let temp = currentFerrari;

    currentFerrari = nextFerrari;
    nextFerrari = temp;
  }

  changeBackgroundFerrari(cardsFerrari[0].dataset.bg);

  cardsFerrari.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("mouseenter", () => {
      changeBackgroundFerrari(img);
    });

    card.addEventListener("click", () => {

      cardsFerrari.forEach(c => {
        c.classList.remove("active");
      });

      card.classList.add("active");

      changeBackgroundFerrari(img);

    });

  });

}

// =====================================================
// 🔥 MODO SHOWCASE FERRARI
// =====================================================

const hallFerrari = document.querySelector(".hall-ferrari");
const bgFerrari = document.querySelector(".bg-hall-ferrari");

if(hallFerrari && bgFerrari){

  bgFerrari.addEventListener("click", ()=>{

    hallFerrari.classList.toggle("showcase");

  });

}


const carsDataFerrari = {

  "1950s": {
    image:"hallfer/500f2.png",
    name:"Ferrari 500 F2",
    engine:"Ferrari Tipo 500 2.0L",
    power:"~185 HP",
    year:"1952",
    driver:"Ascari <br> Villoresi"
  },

  "1970s": {
    image:"titulosfer/312t.png",
    name:"Ferrari 312T",
    engine:"Ferrari Flat-12",
    power:"~510 HP",
    year:"1975",
    driver:"Lauda <br> Regazzoni"
  },

  "2000s": {
    image:"titulosfer/2000.png",
    name:"Ferrari F1-2000",
    engine:"Ferrari Tipo 049 V10",
    power:"~805 HP",
    year:"2000",
    driver:"Schumacher <br> Barrichello"
  },

  "2007s": {
    image:"titulosfer/f2007 (1).png",
    name:"Ferrari F2007",
    engine:"Ferrari Tipo 056 V8",
    power:"~760 HP",
    year:"2007",
    driver:"Räikkönen <br> Massa"
  },

  "2025s": {
    image:"hallfer/sf25.png",
    name:"Ferrari SF-25",
    engine:"Ferrari 066/15 Hybrid",
    power:"~1050 HP",
    year:"2025",
    driver:"Leclerc <br> Hamilton"
  }

};

function changeDecadeFerrari(decade){

  const section = document.getElementById("ferrariEvolution");
  const img = document.getElementById("carImage-ferrari");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-1950s",
    "bg-1970s",
    "bg-2000s",
    "bg-2007s",
    "bg-2025s"
  );

  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataFerrari[decade];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-ferrari").innerText = data.name;
    document.getElementById("carEngine-ferrari").innerText = data.engine;
    document.getElementById("carPower-ferrari").innerText = data.power;
    document.getElementById("carYear-ferrari").innerText = data.year;
    document.getElementById("carDriver-ferrari").innerHTML = data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}

window.changeDecadeFerrari = changeDecadeFerrari;