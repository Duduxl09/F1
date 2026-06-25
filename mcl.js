document.addEventListener("DOMContentLoaded", () => {

  const $ = (q) => document.querySelector(q);
  const $$ = (q) => document.querySelectorAll(q);

  // =====================================================
  // 🌄 PARALLAX NÚMEROS
  // =====================================================
  (function parallaxNumeros(){

    const secao = $(".numeros-mclaren");
    const bg = $(".bg-numeros-mclaren");

    if(!secao || !bg) return;

    window.addEventListener("scroll", () => {

      const rect = secao.getBoundingClientRect();
      const alturaTela = window.innerHeight;

      if(rect.top < alturaTela && rect.bottom > 0){

        let progresso = rect.top / alturaTela;
        bg.style.transform = `translateY(${progresso * 80}px) scale(1.05)`;

      }

    });

  })();


  // =====================================================
  // 📊 CARDS ANIMADOS + CONTADOR
  // =====================================================
  (function animarCards(){

    const cards = $$(".animar-mclaren");
    if(!cards.length) return;

    function animar(){

      const topoTela = window.innerHeight;

      cards.forEach((card, index) => {

        const posicao = card.getBoundingClientRect().top;

        if(posicao < topoTela - 100){

          setTimeout(() => {

            card.classList.add("ativo");

            const contador = card.querySelector(".contador-mclaren");
            const barra = card.querySelector(".barra-velocidade-mclaren");

            if(contador && !contador.classList.contains("contado")){

              contador.classList.add("contado");

              const target = +contador.getAttribute("data-target");
              let count = 0;

              const update = () => {

                const increment = target / 200;

                if(count < target){

                  count += increment;
                  contador.innerText = Math.floor(count);

                  if(barra)
                    barra.style.width = (count / target * 100) + "%";

                  setTimeout(update, 40);

                } else {

                  contador.innerText = target;
                  if(barra) barra.style.width = "100%";

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

  })();


  // =====================================================
  // 🏁 TÍTULO ANIMADO
  // =====================================================
  (function tituloAnimado(){

    const titulo = $(".titulo-animar-mclaren");
    if(!titulo) return;

    window.addEventListener("scroll", () => {

      const pos = titulo.getBoundingClientRect().top;

      if(pos < window.innerHeight - 120){
        titulo.classList.add("show");
      }

    });

  })();


  // =====================================================
  // 🧱 TIMELINE PRINCIPAL
  // =====================================================
  (function timeline(){

    const itens = $$(".conteudo-timeline-mclaren");
    const linha = $(".linha-centro-mclaren");
    const secao = $(".timeline-mclaren");

    if(!secao || !linha || !itens.length) return;

    window.addEventListener("scroll", () => {

      const rect = secao.getBoundingClientRect();
      const alturaTela = window.innerHeight;

      if(rect.top < alturaTela && rect.bottom > 0){

        let progresso = (alturaTela - rect.top) / (rect.height + alturaTela);
        linha.style.height = progresso * rect.height + "px";

      }

      itens.forEach(item => {

        const pos = item.getBoundingClientRect().top;

        if(pos < alturaTela - 120){
          item.classList.add("ativo");
        }

      });

    });

  })();


  // =====================================================
  // 🧭 TIMELINE LINHA PROGRESSO
  // =====================================================
  (function linhaProgresso(){

    window.addEventListener("load", () => {

      const pontos = $$(".ponto");
      const progresso = $(".linha-progresso");
      const luz = $(".luz");
      const linha = $(".linha-box");

      if(!pontos.length || !progresso || !luz || !linha) return;

      let i = 0;

      function animar(){

        if(i < pontos.length){

          pontos[i].classList.add("ativo");

          let larguraLinha = linha.clientWidth;

          let left = pontos[i].getAttribute("style");
          left = left.replace("left:", "").replace("%", "").trim();

          let posPx = (parseFloat(left) / 100) * larguraLinha;

          progresso.style.width = posPx + "px";
          luz.style.left = (posPx - 30) + "px";

          i++;

          if(i == pontos.length){
            setTimeout(() => {
              progresso.style.width = "100%";
              luz.style.left = "100%";
            }, 1300);
          }

          setTimeout(animar, 1300);
        }

      }

      animar();

    });

  })();


  // =====================================================
  // 🏎️ TIMELINE CARROS
  // =====================================================
  (function timelineCar(){

    window.addEventListener("load", () => {

      const pontos = $$(".timeline-mclaren-car .ponto-car");
      const progresso = $(".timeline-mclaren-car .linha-progresso-car");
      const luz = $(".timeline-mclaren-car .luz-car");
      const linha = $(".timeline-mclaren-car .linha-box-car");

      if(!pontos.length || !progresso || !luz || !linha) return;

      let i = 0;

      function animar(){

        if(i >= pontos.length){

  // 🔥 FINAL DA LINHA
  progresso.style.width = "100%";
  luz.style.left = (linha.clientWidth - 30) + "px";

  return;
}

        const ponto = pontos[i];

        const foto = ponto.querySelector(".foto-car");
        const info = ponto.querySelector(".info-car");

        foto && foto.classList.add("ativo");

        let larguraLinha = linha.clientWidth;
        let leftPercent = parseFloat(ponto.style.left);
        let posPx = (leftPercent / 100) * larguraLinha;

        setTimeout(() => {

          info && info.classList.add("ativo");

          progresso.style.width = posPx + "px";
          luz.style.left = (posPx - 30) + "px";

          ponto.style.boxShadow = "0 0 15px #ff7a00";

          i++;

          setTimeout(animar, 1300);

        }, 900);

      }

      setTimeout(animar, 800);

    });

  })();


  // =====================================================
  // 🟠 BLOCO EQUIPES
  // =====================================================
  (function blocosEquipe(){

    const blocos = $$(".bloco-equipe-mclaren");
    if(!blocos.length) return;

    blocos.forEach((bloco, i) => {

      bloco.style.opacity = 0;
      bloco.style.transform = "translateY(20px)";

      setTimeout(() => {
        bloco.style.opacity = 1;
        bloco.style.transform = "translateY(0)";
      }, i * 300);

    });

  })();


  // =====================================================
  // 🏆 ERA SYSTEM (FUNÇÃO GLOBAL)
  // =====================================================
 (function(){

  const eras = [

    {
      titulo: "Capítulo I — Fundação (1966–1983)",
      texto: "A McLaren foi fundada em 1963 por Bruce McLaren e estreou na Fórmula 1 em 1966. Nos primeiros anos, a equipe cresceu rapidamente e se destacou pela inovação e competitividade. Em 1974, conquistou seus primeiros títulos mundiais com Emerson Fittipaldi, vencendo os campeonatos de pilotos e construtores. Em 1976, James Hunt deu à McLaren mais um título histórico em uma temporada marcada pela rivalidade com Niki Lauda. No início dos anos 1980, a chegada de Ron Dennis modernizou a equipe e trouxe avanços tecnológicos importantes, como o MP4/1, primeiro carro de Fórmula 1 com chassi de fibra de carbono. Até 1983, a McLaren já era uma das principais equipes da Fórmula 1.",
      timeline: [
        { ano:"1963", imagem:"mcleras/mclaren1963.png", descricao:"Logo 1963" },
        { ano:"1966", imagem:"mcleras/M2B.jpg", descricao:"M2B – Primeiro carro da McLaren na F1" },
        { ano:"1968", imagem:"mcleras/m7a.jpg", descricao:"M7A – Consolidação competitiva" },
        { ano:"1970", imagem:"mcleras/bruce.jpg", descricao:"Bruce McLaren" },
        { ano:"1973", imagem:"mcleras/m23.jpg", descricao:"M23 – Base para os primeiros sucessos" },
         { ano:"1974", imagem:"mcleras/fitchamp.jpeg", descricao:"Primeiro Titulo da Mclaren" },
          { ano:"1978", imagem:"mcleras/huntchamp.jpeg", descricao:"Titulo de James Hunt"}
      ]
    },

    {
      titulo: "Capítulo II — Era de Ouro (1984–1991)",
      texto: "McLaren dominou a Fórmula 1 entre 1984 e 1991, a McLaren viveu uma das maiores eras da Fórmula 1. Com pilotos como Niki Lauda, Alain Prost e Ayrton Senna, a equipe conquistou vários títulos mundiais de pilotos e construtores. A parceria com a Honda e o lendário MP4/4 marcaram a temporada de 1988, quando a McLaren dominou quase todas as corridas do campeonato. A rivalidade entre Senna e Prost também se tornou um dos momentos mais históricos do esporte. Até 1991, a McLaren se consolidou como a principal equipe da Fórmula 1. ",
      timeline: [
        { ano:"1984", imagem:"mcleras/mp4-4.jpg", descricao:"MP4/4 dominante" },
        { ano:"1988", imagem:"mcleras/senna.jpg", descricao:"Início do reinado de Senna" },
        { ano:"1989", imagem:"mcleras/prost.jpg", descricao:"Disputa histórica com Prost" },
        { ano:"1990", imagem:"mcleras/1990.jpg", descricao:"Senna campeão novamente" },
        { ano:"1991", imagem:"mcleras/1991.jpg", descricao:"Consistência no topo" }
      ]
    },

    {
      titulo: "Capítulo III — Motor Mercedes (1995–2014)",
      texto: "Entre 1995 e 2014, a McLaren passou por diferentes fases na Fórmula 1. Em 1998 e 1999, a equipe voltou ao topo com Mika Häkkinen e a parceria com a Mercedes, conquistando títulos mundiais e encerrando o domínio da Ferrari dos anos anteriores. Nos anos 2000, a McLaren continuou competitiva com pilotos como Kimi Räikkönen, Fernando Alonso e Lewis Hamilton. Em 2008, Hamilton conquistou o título mundial em uma das finais mais emocionantes da história da Fórmula 1. Após esse período, a equipe enfrentou temporadas mais difíceis, alternando bons resultados com problemas de desempenho e confiabilidade. Mesmo assim, a McLaren manteve sua importância histórica e continuou sendo uma das equipes mais tradicionais e respeitadas da categoria.",
      timeline: [
        { ano:"1998", imagem:"mcleras/1998.jpg", descricao:"Título de Häkkinen" },
        { ano:"2008", imagem:"mcleras/2008.jpg", descricao:"Título de Hamilton" },
        { ano:"2010", imagem:"mcleras/2010.jpg", descricao:"Competitividade alta" },
        { ano:"2012", imagem:"mcleras/2012.jpg", descricao:"Falta de constância" },
        { ano:"2013", imagem:"mcleras/2013.jpg", descricao:"Queda de performance" }
      ]
    },

    {
      titulo: "Capítulo IV — Honda (2015–2017)",
      texto: "Entre 2015 e 2017, a McLaren viveu um dos períodos mais difíceis de sua história ao retomar a parceria com a Honda. A expectativa era repetir o sucesso da era Ayrton Senna e Alain Prost, mas os motores japoneses sofreram com falta de potência e muitos problemas de confiabilidade. Mesmo contando com pilotos como Fernando Alonso e Jenson Button, a equipe teve dificuldades para disputar posições competitivas e acumulou abandonos e resultados abaixo do esperado. O período ficou marcado pelas críticas ao desempenho do motor Honda e pela frustração da McLaren em tentar voltar ao topo da Fórmula 1.",
      timeline: [
        { ano:"2015", imagem:"mcleras/2015.jpg", descricao:"GP2 engine meme" },
        { ano:"2016", imagem:"mcleras/2016.jpg", descricao:"Pouca competitividade" },
        { ano:"2017", imagem:"mcleras/2017.jpg", descricao:"Fim da parceria" }
      ]
    },

    {
      titulo: "Capítulo V — Renault (2018–2020)",
      texto: "Entre 2018 e 2020, a McLaren trocou os motores Honda pelos motores Renault em busca de melhores resultados. A mudança trouxe uma evolução importante no desempenho e ajudou a equipe a voltar gradualmente para a parte da frente do grid. Com pilotos como Carlos Sainz e Lando Norris, a McLaren passou por uma fase de reconstrução e voltou a conquistar pódios. Em 2020, a equipe terminou o campeonato de construtores na terceira posição, mostrando que estava novamente se tornando competitiva na Fórmula 1.",
      timeline: [
        { ano:"2018", imagem:"mcleras/2018.jpg", descricao:"Novo começo" },
        { ano:"2019", imagem:"mcleras/2019.jpg", descricao:"Pódios voltando" },
        { ano:"2020", imagem:"mcleras/2020.jpg", descricao:"Ressurgimento" }
      ]
    },

    {
      titulo: "Capítulo VI — Era atual (2021–atual)",
      texto: "Em 2021 a McLaren voltou a usar os motores mercedes e apresentou um grande passo para se consolidar como uma das principais equipes da Fórmula 1. Em 2021, a equipe conquistou sua primeira vitória em anos com Daniel Ricciardo no GP da Itália, marcando o início de uma nova fase competitiva. No meio da temporada de 2023, a McLaren protagonizou um dos maiores saltos de evolução da história recente da Fórmula 1. Após começar o ano longe das primeiras posições, a equipe trouxe atualizações que transformaram completamente o desempenho do carro, permitindo disputar pódios e vitórias regularmente. Com Lando Norris e Oscar Piastri, a McLaren voltou definitivamente ao topo da categoria. A equipe conquistou os títulos mundiais de construtores em 2024 e 2025, enquanto Norris venceu o campeonato de pilotos de 2025, encerrando um longo jejum e marcando o retorno da McLaren ao domínio da Fórmula 1.",
      timeline: [
        { ano:"2021", imagem:"mcleras/2021.jpg", descricao:"Crescimento" },
         { ano:"2021", imagem:"mcleras/ric.jpeg", descricao:"Vitoria de Daniel Ricciardo" },
        { ano:"2022", imagem:"mcleras/2022.jpg", descricao:"Adaptação ao regulamento" },
        { ano:"2023", imagem:"mcleras/2023.jpg", descricao:"Salto de performance" },
        { ano:"2024", imagem:"mcleras/2024.jpg", descricao:"Volta ao topo" },
        { ano:"2025", imagem:"mcleras/2025.jpg", descricao:"Bicampeã" },
        { ano:"2025", imagem:"mcleras/lando.jpeg", descricao:"Titulo de Lando Norris" },
         { ano:"2026", imagem:"mcleras/2026.jpg", descricao:"Em busca do tri" }
      ]
    }

  ];

  window.mostrarEra = function(index){

    const era = eras[index];
    if(!era) return;

    document.getElementById("tituloEra").innerText = era.titulo;
    document.getElementById("textoEra").innerText = era.texto;

    const container = document.getElementById("mclaren-timeline");
    container.innerHTML = "";

    era.timeline.forEach(item => {

      container.innerHTML += `
        <div class="mclaren-timeline-item">
          <div class="mclaren-timeline-year">${item.ano}</div>
          <img src="${item.imagem}">
          <p>${item.descricao}</p>
        </div>
      `;

    });

    // botões ativos
    const botoes = document.querySelectorAll(".botoes-eras button");

    botoes.forEach(b => b.classList.remove("ativo"));

    if(botoes[index]){
      botoes[index].classList.add("ativo");
    }

  };

  // inicial
  window.mostrarEra(0);

})();
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
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeMenu");

// 🔥 ABRIR MENU
openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
});

// 🔥 FECHAR NO X
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// 🔥 FECHAR CLICANDO FORA
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

document.querySelectorAll(".side-menu-mclaren a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});


  // =====================================================
  // 🏎️ CARD PILOTOS
  // =====================================================
  (function pilotos(){

    const cards = $$(".card-piloto-norris, .card-piloto-piastri");
    if(!cards.length) return;

    cards.forEach(card => {

      card.addEventListener("click", function(e) {

        if(this.classList.contains("active")) return;

        e.preventDefault();

        cards.forEach(c => c.classList.remove("active"));

        this.classList.add("active");

      });

    });

  })();

});



 

  // =========================
  // 📊 DADOS
  // =========================
  document.addEventListener("DOMContentLoaded", () => {
    
    const imgNorris = document.getElementById("img-norris");
const imgPiastri = document.getElementById("img-piastri");

  const data = {
    norris: {
      2019: 49,
      2020: 97,
      2021: 160,
      2022: 55,
      2023: 110,
      2024: 205,
      2025: 230
    },
    piastri: {
      2023: 95,
      2024: 180,
      2025: 210
    }
  };

  const chart = document.getElementById("chart-mcl");
  const select = document.getElementById("pilotEvoSelect-mcl");

  if (!chart || !select) return;

  function getCommonSeasons() {
    return Object.keys(data.norris).filter(y =>
      Object.keys(data.piastri).includes(y)
    );
  }

  function render(seasons, mode) {

    chart.innerHTML = "";

    const nValues = seasons.map(y => data.norris[y] || 0);
    const pValues = seasons.map(y => data.piastri[y] || 0);
    const max = Math.max(...nValues, ...pValues);

    seasons.forEach((year, i) => {

      const n = nValues[i];
      const p = pValues[i];

      const group = document.createElement("div");
      group.className = "bar-group-mcl";

      group.innerHTML = `
        <span class="label-mcl">${year}</span>

        <div class="bars-row-mcl">

          <div class="bar-wrap-mcl">
            <span class="bar-value norris-val">0</span>
            <div class="bar-mcl norris"></div>
          </div>

          <div class="bar-wrap-mcl">
            <span class="bar-value piastri-val">0</span>
            <div class="bar-mcl piastri"></div>
          </div>

        </div>

        <div class="diff-mcl"></div>
      `;

      chart.appendChild(group);

      const nBar = group.querySelector(".norris");
      const pBar = group.querySelector(".piastri");

      const nVal = group.querySelector(".norris-val");
      const pVal = group.querySelector(".piastri-val");

      const diffEl = group.querySelector(".diff-mcl");

      setTimeout(() => {

        // altura
        if (mode === "both") {
          nBar.style.height = (n / max * 100) + "%";
          pBar.style.height = (p / max * 100) + "%";
        }

        if (mode === "norris") {
          nBar.style.height = (n / max * 100) + "%";
        }

        if (mode === "piastri") {
          pBar.style.height = (p / max * 100) + "%";
        }

        // anima valores
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

 // reset visual
nVal.style.opacity = "1";
pVal.style.opacity = "1";

// MOSTRAR/ESCONDER valores corretamente
if (mode === "norris") {
  pVal.style.opacity = "0";
}

if (mode === "piastri") {
  nVal.style.opacity = "0";
}

// anima só o que precisa
if (mode !== "piastri") animateValue(nVal, n);
if (mode !== "norris") animateValue(pVal, p);

        // comparação
        if (mode === "both") {

          const diff = Math.abs(n - p);

          if (n > p) {
            nBar.classList.add("winner");
            diffEl.textContent = `+${diff} Norris`;
          }

          if (p > n) {
            pBar.classList.add("winner");
            diffEl.textContent = `+${diff} Piastri`;
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

  if (mode === "norris") {
    render(Object.keys(data.norris), "norris");
  }

  if (mode === "piastri") {
    render(Object.keys(data.piastri), "piastri");
  }

  // ===== IMAGENS =====
  if (mode === "both") {
    imgNorris.style.opacity = "1";
    imgPiastri.style.opacity = "1";
  }

  if (mode === "norris") {
    imgNorris.style.opacity = "1";
    imgPiastri.style.opacity = "0";
  }

  if (mode === "piastri") {
    imgNorris.style.opacity = "0";
    imgPiastri.style.opacity = "1";
  }

}

  select.addEventListener("change", update);

  update();

});

document.addEventListener("DOMContentLoaded", () => {

  const bg1 = document.querySelector(".bg1-mclaren");
  const bg2 = document.querySelector(".bg2-mclaren");
  const cards = document.querySelectorAll(".hall-card-mclaren");

  if (!bg1 || !bg2 || cards.length === 0) return;

  let current = bg1;
  let next = bg2;

  // 🔥 FUNÇÃO DE TROCA SEGURA
  function changeBackground(img){

    if(!img) return;

    // preload evita piscar e “não trocar”
    const pre = new Image();
    pre.src = img;

    next.style.backgroundImage = `url('${img}')`;

    requestAnimationFrame(() => {

      next.classList.add("active");
      current.classList.remove("active");

      const temp = current;
      current = next;
      next = temp;

    });

  }

  // 🔥 SETA FUNDO INICIAL
  changeBackground(cards[0].dataset.bg);

  // 🔥 IMPORTANTE: usa POINTERENTER (mais confiável que mouseenter)
  cards.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("pointerenter", () => {
      changeBackground(img);
    });

 card.addEventListener("click", () => {

  // 🔥 controla estado ativo
  const isActive = card.classList.contains("active");

  cards.forEach(c => c.classList.remove("active"));

  if(isActive){
    document.querySelector(".hall-grid-mclaren").classList.remove("active");
  } else {
    document.querySelector(".hall-grid-mclaren").classList.add("active");
    card.classList.add("active");
  }

  // 🔥 mantém troca de fundo
  changeBackground(img);

});

  });

});

const hallMclaren = document.querySelector(".hall-mclaren");
const bgMclaren = document.querySelector(".bg-hall-mclaren");

if(hallMclaren && bgMclaren){

bgMclaren.addEventListener("click", ()=>{

hallMclaren.classList.toggle("showcase");

});

}



const carsData = {

  "60s": {

    image:"hallmcl/m1a.png",

    name:"McLaren M1A",

    engine:"Oldsmobile V8 4.5L",

    power:"~310 HP",

    year:"1964",

    driver:"Bruce McLaren"
  },

  "70s": {

    image:"titulosmcl/mm23.png",

    name:"McLaren M23",

    engine:"Ford Cosworth DFV V8",

    power:"~490 HP",

    year:"1974",

    driver:"Fittipaldi <br> Hulme"
  },

  "80s": {

    image:"titulosmcl/MP4-4.png",

    name:"McLaren MP4/4",

    engine:"Honda RA168E 1.5L V6 Turbo",

    power:"~700 HP",

    year:"1988",

    driver:"Senna <br> Prost"
  },

  "90s": {

    image:"titulosmcl/MP4-5b.png",

    name:"McLaren MP4/5B",

    engine:"Honda RA109E 3.5L V10",

    power:"~690 HP",

    year:"1990",

    driver:"Senna <br> Berger"
  },

  "2000s": {

    image:"hallmcl/mp4-15.png",

    name:"McLaren MP4-15",

    engine:"Mercedes F0110J V10",

    power:"~810 HP",

    year:"2000",

    driver:"Häkkinen <br> Coulthard"
  },

  "2010s": {

    image:"hallmcl/mp4-25.png",

    name:"McLaren MP4-25",

    engine:"Mercedes-Benz F0108X V8",

    power:"~780 HP",

    year:"2010",

    driver:"Hamilton <br> Button"
  },

  "2020s": {

    image:"titulosmcl/MCL39-2.png",

    name:"McLaren MCL39",

    engine:"Mercedes-AMG F1 M15 E Performance",

    power:"~1000 HP",

    year:"2025",

    driver:"Norris <br> Piastri"
  }

};

function changeDecade(decade){

   const section =
document.getElementById("mclarenEvolution");

  const img =
  document.getElementById("carImage");

  img.style.opacity = 0;

  img.style.transform = "scale(.8)";
  
  /* REMOVE CLASSES */
section.classList.remove(
  "bg-60s",
  "bg-70s",
  "bg-80s",
  "bg-90s",
  "bg-2000s",
  "bg-2010s",
  "bg-2020s"
);

/* ADICIONA NOVA */
section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    img.src =
    carsData[decade].image;

    document.getElementById("carName")
    .innerText =
    carsData[decade].name;

    document.getElementById("carEngine")
    .innerText =
    carsData[decade].engine;

    document.getElementById("carPower")
    .innerText =
    carsData[decade].power;

    document.getElementById("carYear")
    .innerText =
    carsData[decade].year;

    document.getElementById("carDriver")
    .innerHTML =
    carsData[decade].driver;

    img.style.opacity = 1;

    img.style.transform = "scale(1)";

  },300);

}