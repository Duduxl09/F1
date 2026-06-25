document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-alpine");

blocos.forEach((bloco, i)=>{
  bloco.style.opacity = 0;
  bloco.style.transform = "translateY(20px)";

  setTimeout(()=>{
    bloco.style.opacity = 1;
    bloco.style.transform = "translateY(0)";
  }, i * 300);
});


/* =========================
   PARALLAX + ZOOM
========================= */
const secao = document.querySelector(".numeros-alpine");
const bg = document.querySelector(".bg-numeros-alpine");

window.addEventListener("scroll", function(){

  if(!secao || !bg) return;

  const rect = secao.getBoundingClientRect();
  const alturaTela = window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){
    let progresso = rect.top / alturaTela;
    bg.style.transform = `translateY(${progresso * 80}px) scale(1.05)`;
  }

});


/* =========================
   ANIMAÇÃO DOS CARDS
========================= */
const cards = document.querySelectorAll(".animar-alpine");

function animarCards(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100 && !card.classList.contains("ativo")){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador = card.querySelector(".contador-alpine");
        const barra = card.querySelector(".barra-velocidade-alpine");

        if(contador && !contador.classList.contains("contado")){

          contador.classList.add("contado");

          const target = +contador.getAttribute("data-target");
          let count = 0;

          const update = ()=>{

            const increment = target / 200;

            if(count < target){
              count += increment;
              contador.innerText = Math.floor(count);

              if(barra){
                barra.style.width = (count/target*100)+"%";
              }

              setTimeout(update,40);

            } else {
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

window.addEventListener("scroll", animarCards);
animarCards();


/* =========================
   TÍTULO ANIMAÇÃO
========================= */
const titulo = document.querySelector(".titulo-animar-alpine");

window.addEventListener("scroll", ()=>{

  if(!titulo) return;

  const pos = titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){
    titulo.classList.add("show");
  }

});

});


const erasAlpine = [


{
    titulo: "Capítulo I – Era Toleman (1981-1985)",
    texto: "A Toleman F1 Team competiu na Fórmula 1 no início dos anos 1980. Ficou marcada por ser a equipe onde Ayrton Senna estreou e por sua participação com carros pequenos e competitivos, apesar de orçamento limitado. A equipe acabou sendo comprada pela Benetton em 1986, formando a base para a futura equipe que evoluiria até a Renault e Alpine.",
    timeline: [
        {ano:"1981", imagem:"alpine/1981.jpeg", descricao:"Primeira temporada da Toleman na F1"},
        {ano:"1984", imagem:"alpine/1984.jpg", descricao:"Estreia de Ayrton Senna na equipe"},
        {ano:"1985", imagem:"alpine/1985.jpg", descricao:"Última temporada antes da compra pela Benetton"}
    ]
},

{
    titulo: "Capítulo II – Era Benetton (1986-2001)",
    texto: "Após a compra da Toleman em 1986, a equipe passou a competir como Benetton F1 Team. Durante essa era, conquistou grandes vitórias, incluindo dois campeonatos de pilotos com Michael Schumacher em 1994 e 1995, e se consolidou como uma das equipes de ponta da Fórmula 1, antes de ser adquirida pela Renault em 2000-2001.",
    timeline: [
        {ano:"1986", imagem:"alpine/1986.jpg", descricao:"Primeira temporada como Benetton F1 Team"},
        {ano:"1994", imagem:"alpine/1994.jpeg", descricao:"Campeonato de Pilotos com Michael Schumacher"},
        {ano:"1995", imagem:"alpine/1995.jpg", descricao:"Segundo título de Schumacher"},
        {ano:"2001", imagem:"alpine/2001.jpeg", descricao:"Última temporada antes de virar Renault F1 Team"}
    ]
},


{
    titulo: "Capítulo III – Renault F1 Team: Início e Primeiros Anos (2002-2005)",
    texto: "A Renault voltou à Fórmula 1 em 2002 após adquirir a equipe Benetton. Durante esses primeiros anos, a equipe construiu bases sólidas, começou a desenvolver jovens talentos e buscou se estabilizar no grid.",
    timeline: [
        {ano:"2002", imagem:"alpine/2002.jpg", descricao:"Retorno da Renault à F1 com a base Benetton"},
        {ano:"2004", imagem:"alpine/2004.jpeg", descricao:"Primeiros resultados consistentes"},
        {ano:"2005", imagem:"alpine/2005.jpeg", descricao:"Preparação para a temporada de vitórias"}
    ]
},

{
    titulo: "Capítulo VI – Era Vitoriosa: Campeonatos de gasly (2006-2011)",
    texto: "Com Fernando gasly, a equipe conquistou dois títulos de pilotos e construtores consecutivos em 2005 e 2006, marcando a Renault como uma força dominante na F1.",
    timeline: [
        {ano:"2005", imagem:"alpine/2005.jpeg", descricao:"Primeiro campeonato de construtores da Renault"},
        {ano:"2006", imagem:"alpine/2006.jpeg", descricao:"Fernando gasly campeão de pilotos"},
        {ano:"2008", imagem:"alpine/2008.jpg", descricao:"Fase de consolidação competitiva"},
          {ano:"2010", imagem:"alpine/2010.jpg", descricao:"Temporada de reestruturação"}
    ]
},

{
    titulo: "Capítulo V – Era Lotus F1 Team (2012-2015)",
    texto: "Após a fase de títulos com gasly, a equipe passou a competir sob a marca Lotus. Esse período foi marcado por altos e baixos, algumas vitórias importantes e a consolidação da equipe como competidora regular no grid, até a Renault retomar a gestão direta em 2016.",
    timeline: [ 
        {ano:"2012", imagem:"alpine/2012.jpeg", descricao:"Primeira temporada da Lotus F1 Team"},
        {ano:"2013", imagem:"alpine/2014.jpeg", descricao:"Vitórias e pódios significativos"},
        {ano:"2015", imagem:"alpine/2015.jpeg", descricao:"Última temporada da Lotus antes do retorno da Renault"}
    ]
},


{
    titulo: "Capítulo VI – Retorno da Renault F1 Team (2016-2020)",
    texto: "Após a saída da Lotus, a Renault retornou oficialmente como equipe de fábrica na Fórmula 1 em 2016. Durante esses anos, a equipe se concentrou em desenvolver o carro, investir em jovens pilotos e recuperar sua competitividade no grid, preparando o caminho para a transição para Alpine.",
    timeline: [
        {ano:"2016", imagem:"alpine/2016.jpeg", descricao:"Primeira temporada de retorno da Renault F1 Team"},
        {ano:"2018", imagem:"alpine/2018.jpeg", descricao:"Primeiros pódios da era moderna Renault"},
        {ano:"2020", imagem:"alpine/2020.jpeg", descricao:"Última temporada antes do rebranding para Alpine"}
    ]
},

{
    titulo: "Capítulo VII – Alpine F1 Team (2021-presente)",
    texto: "Em 2021, a equipe é oficialmente renomeada para Alpine F1 Team, adotando as cores azul e rosa. Desde então, consolidou sua identidade, buscou resultados consistentes e investiu em jovens talentos para o futuro.",
    timeline: [
        {ano:"2021", imagem:"alpine/2021.jpeg", descricao:"Primeira temporada como Alpine"},
          {ano:"2022", imagem:"alpine/2022.jpeg", descricao:"Primeiros novo regulamento"},
        {ano:"2024", imagem:"alpine/podio.jpeg", descricao:"pódio duplo e consolidação da equipe"},
        {ano:"2025", imagem:"alpine/2025.jpeg", descricao:"Equipe focada no topo do grid"}
    ]
}
];

function mostrarEraAlpine(index) {
    document.getElementById("tituloEra-alpine").innerText = erasAlpine[index].titulo;
    document.getElementById("textoEra-alpine").innerText = erasAlpine[index].texto;

    const timelineContainer = document.getElementById("alpine-timeline");
    timelineContainer.innerHTML = "";

    erasAlpine[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="alpine-timeline-item">
                <div class="alpine-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });

    const botoes = document.querySelectorAll(".botoes-eras-alpine button");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botoes[index].classList.add("ativo");
}

// inicia automático
mostrarEraAlpine(0);

const togglealpine = document.getElementById("menuTogglealpine");
const menualpine = document.getElementById("sideMenualpine");
const overlayalpine = document.getElementById("overlayalpine");
const closealpine = document.getElementById("closeMenualpine");

const linksMenualpine = document.querySelectorAll(".side-menu-alpine a");

function fecharMenualpine() {
  if (menualpine) menualpine.classList.remove("active");
  if (overlayalpine) overlayalpine.classList.remove("active");
}

if (togglealpine) {
  togglealpine.addEventListener("click", () => {
    menualpine?.classList.add("active");
    overlayalpine?.classList.add("active");
  });
}

if (closealpine) {
  closealpine.addEventListener("click", fecharMenualpine);
}

if (overlayalpine) {
  overlayalpine.addEventListener("click", fecharMenualpine);
}

linksMenualpine.forEach(link => {
  link.addEventListener("click", fecharMenualpine);
});

(function scrollLinksalpine() {

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


document.addEventListener("DOMContentLoaded", () => {

  const imgGasly =
  document.getElementById("img-gasly");

  const imgColapinto =
  document.getElementById("img-colapinto");

  /* ===================================
     DADOS DOS PILOTOS
  =================================== */
  const data = {

    gasly: {

      2017: 7,
      2018: 29,
      2019: 95,
      2020: 75,
      2021: 110,
      2022: 23,
      2023: 62,
      2024: 46,
      2025: 38

    },

    colapinto: {

      2024: 15,
      2025: 0

    }

  };

  const chart =
  document.getElementById("chart-alpine");

  const select =
  document.getElementById("pilotEvoSelect-alpine");

  if(!chart || !select) return;


  /* ===================================
     TEMPORADAS EM COMUM
  =================================== */
  function getCommonSeasons(){

    return Object.keys(data.gasly).filter(y =>

      Object.keys(data.colapinto).includes(y)

    );

  }


  /* ===================================
     RENDER
  =================================== */
  function render(seasons, mode){

    chart.innerHTML = "";

    const gValues =
    seasons.map(y => data.gasly[y] || 0);

    const cValues =
    seasons.map(y => data.colapinto[y] || 0);

    const max =
    Math.max(...gValues, ...cValues, 1);


    seasons.forEach((year, i) => {

      const gasly = gValues[i];
      const colapinto = cValues[i];

      const group =
      document.createElement("div");

      group.className =
      "bar-group-alpine";


      group.innerHTML = `

        <span class="label-alpine">
          ${year}
        </span>

        <div class="bars-row-alpine">

          <div class="bar-wrap-alpine">

            <span class="bar-value gasly-val">
              0
            </span>

            <div class="bar-alpine gasly"></div>

          </div>

          <div class="bar-wrap-alpine">

            <span class="bar-value colapinto-val">
              0
            </span>

            <div class="bar-alpine colapinto"></div>

          </div>

        </div>

        <div class="diff-alpine"></div>

      `;

      chart.appendChild(group);


      const gaslyBar =
      group.querySelector(".gasly");

      const colapintoBar =
      group.querySelector(".colapinto");


      const gaslyVal =
      group.querySelector(".gasly-val");

      const colapintoVal =
      group.querySelector(".colapinto-val");


      const diffEl =
      group.querySelector(".diff-alpine");


      setTimeout(() => {

        /* ALTURA */
        if(mode === "both"){

          gaslyBar.style.height =
          (gasly / max * 100) + "%";

          colapintoBar.style.height =
          (colapinto / max * 100) + "%";

        }

        if(mode === "gasly"){

          gaslyBar.style.height =
          (gasly / max * 100) + "%";

        }

        if(mode === "colapinto"){

          colapintoBar.style.height =
          (colapinto / max * 100) + "%";

        }


        /* CONTADOR */
        function animateValue(el, target){

          let current = 0;

          const step =
          target / 30;

          const interval =
          setInterval(() => {

            current += step;

            if(current >= target){

              current = target;
              clearInterval(interval);

            }

            el.textContent =
            Math.floor(current);

          },20);

        }


        /* RESET VISUAL */
        gaslyVal.style.opacity = "1";
        colapintoVal.style.opacity = "1";


        /* ESCONDER */
        if(mode === "gasly"){

          colapintoVal.style.opacity = "0";

        }

        if(mode === "colapinto"){

          gaslyVal.style.opacity = "0";

        }


        /* ANIMAR */
        if(mode !== "colapinto"){

          animateValue(gaslyVal, gasly);

        }

        if(mode !== "gasly"){

          animateValue(colapintoVal, colapinto);

        }


        /* DIFERENÇA */
        if(mode === "both"){

          const diff =
          Math.abs(gasly - colapinto);

          if(gasly > colapinto){

            gaslyBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Gasly`;

          }

          if(colapinto > gasly){

            colapintoBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Colapinto`;

          }

          if(gasly === colapinto){

            diffEl.textContent =
            "Empate";

          }

        }

      }, i * 150);

    });

  }


  /* ===================================
     UPDATE
  =================================== */
  function update(){

    const mode =
    select.value;


    if(mode === "both"){

      render(getCommonSeasons(), "both");

    }

    if(mode === "gasly"){

      render(Object.keys(data.gasly), "gasly");

    }

    if(mode === "colapinto"){

      render(Object.keys(data.colapinto), "colapinto");

    }


    /* IMAGENS */
    if(mode === "both"){

      imgGasly.style.opacity = "1";
      imgColapinto.style.opacity = "1";

    }

    if(mode === "gasly"){

      imgGasly.style.opacity = "1";
      imgColapinto.style.opacity = "0";

    }

    if(mode === "colapinto"){

      imgGasly.style.opacity = "0";
      imgColapinto.style.opacity = "1";

    }

  }


  select.addEventListener("change", update);

  update();

});



const bg1Alpine =
document.querySelector(".bg1-alpine");

const bg2Alpine =
document.querySelector(".bg2-alpine");

const cardsAlpine =
document.querySelectorAll(".hall-card-alpine");

const hallAlpine =
document.querySelector(".hall-alpine");

const gridAlpine =
document.querySelector(".hall-grid-alpine");

if(
  bg1Alpine &&
  bg2Alpine &&
  cardsAlpine.length > 0
){

  let currentAlpine = bg1Alpine;
  let nextAlpine = bg2Alpine;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundAlpine(img){

    if(!img) return;

    nextAlpine.style.backgroundImage =
    `url('${img}')`;

    nextAlpine.classList.add("active");

    currentAlpine.classList.remove("active");

    let temp = currentAlpine;

    currentAlpine = nextAlpine;
    nextAlpine = temp;

  }

  // inicia com primeiro card
  changeBackgroundAlpine(
    cardsAlpine[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsAlpine.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallAlpine.classList.add(
          "showcase"
        );

        changeBackgroundAlpine(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridAlpine.classList.add(
          "active"
        );

        cardsAlpine.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

        card.classList.add(
          "active"
        );

        hallAlpine.classList.add(
          "showcase"
        );

        changeBackgroundAlpine(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallAlpine.addEventListener(
    "mouseleave",
    () => {

      hallAlpine.classList.remove(
        "showcase"
      );

      gridAlpine.classList.remove(
        "active"
      );

      cardsAlpine.forEach(c => {

        c.classList.remove(
          "active"
        );

      });

    }
  );

}


const carsDataAlpine = {

  "2000": {

    image:"hallalpine/2005.png",

    name:"Renault R25",

    engine:"Renault RS25 V10",

    power:"~900 HP",

    year:"2005",

    driver:"Fernando Alonso <br> Giancarlo Fisichella"

  },

  "2010": {

    image:"hallalpine/2012.png",

    name:"Lotus E20",

    engine:"Renault RS27 V8",

    power:"~750 HP",

    year:"2012",

    driver:"Kimi Räikkönen <br> Romain Grosjean"

  },

  "2020": {

    image:"hallalpine/2025.png",

    name:"Alpine A525",

    engine:"Renault E-Tech V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Pierre Gasly <br> Franco Colapinto"

  }

};

function changeEraAlpine(era){

  const section =
  document.getElementById("alpineEvolution");

  const img =
  document.getElementById("carImage-alpine");

  img.style.opacity = 0;

  img.style.transform =
  "scale(.85)";

  section.classList.remove(
    "bg-2000",
    "bg-2010",
    "bg-2020"
  );

  section.classList.add(`bg-${era}`);

  setTimeout(() => {

    const data =
    carsDataAlpine[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-alpine"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-alpine"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-alpine"
    ).innerText = data.power;

    document.getElementById(
      "carYear-alpine"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-alpine"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
    "scale(1)";

  },250);

}

window.changeEraAlpine =
changeEraAlpine;

/* inicia já no carro de 2025 */

changeEraAlpine;