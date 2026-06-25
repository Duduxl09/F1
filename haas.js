document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-haas");

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
const secao = document.querySelector(".numeros-haas");
const bg = document.querySelector(".bg-numeros-haas");

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
const cards = document.querySelectorAll(".animar-haas");

function animarCards(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100 && !card.classList.contains("ativo")){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador = card.querySelector(".contador-haas");
        const barra = card.querySelector(".barra-velocidade-haas");

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
const titulo = document.querySelector(".titulo-animar-haas");

window.addEventListener("scroll", ()=>{

  if(!titulo) return;

  const pos = titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){
    titulo.classList.add("show");
  }

});

});


/* =========================
   ERAS HAAS
========================= */

const erashaas = [

{
titulo: "Capítulo I – Estreia na Fórmula 1 (2016-2018)",
texto: "A Haas F1 Team entrou na Fórmula 1 em 2016 como a primeira equipe americana em décadas. Logo em sua estreia, surpreendeu ao pontuar já na primeira corrida. Com uma parceria técnica forte com a Ferrari, a equipe evoluiu rapidamente e atingiu seu auge em 2018, terminando em 5º no campeonato de construtores.",
timeline: [
{ano:"2016", imagem:"haas/2016.jpg", descricao:"Estreia com pontos na Austrália"},
{ano:"2017", imagem:"haas/2017.jpg", descricao:"Evolução consistente"},
{ano:"2018", imagem:"haas/2018.jpeg", descricao:"Melhor temporada da equipe"}
]
},

{
titulo: "Capítulo II – Queda de desempenho (2019-2020)",
texto: "Após o bom desempenho em 2018, a Haas enfrentou uma queda significativa. Problemas com pneus e desenvolvimento afetaram o carro, levando a equipe para o fundo do grid. Esse período marcou o início de uma fase difícil.",
timeline: [
{ano:"2019", imagem:"haas/2019.jpg", descricao:"Problemas com pneus"},
{ano:"2020", imagem:"haas/2020.jpg", descricao:"Queda no desempenho"}
]
},

{
titulo: "Capítulo III – Reconstrução (2021)",
texto: "Em 2021, a Haas decidiu focar totalmente no novo regulamento de 2022. A equipe praticamente não desenvolveu o carro daquele ano, utilizando a temporada como preparação para o futuro.",
timeline: [
{ano:"2021", imagem:"haas/2021.jpeg", descricao:"Foco total em 2022"}
]
},

{
titulo: "Capítulo IV – Nova Era e Surpresas (2022-2023)",
texto: "Com o novo regulamento, a Haas voltou mais competitiva em 2022. Conquistou uma pole position histórica com Kevin Magnussen no Brasil e voltou a marcar pontos. Em 2023, continuou brigando no meio do pelotão.",
timeline: [
{ano:"2022", imagem:"haas/2022.webp", descricao:"Pole histórica no Brasil"},
{ano:"2023", imagem:"haas/2023.jpeg", descricao:"Briga no meio do grid"}
]
},

{
titulo: "Capítulo V – Nova Gestão (2024-2026)",
texto: "Com mudanças internas e a chegada de Ayao Komatsu como chefe de equipe, a Haas iniciou uma nova fase focada em crescimento e estabilidade. A equipe busca evoluir e se tornar mais competitiva nos próximos anos.",
timeline: [
{ano:"2024", imagem:"haas/2024.jpg", descricao:"Nova fase da equipe"},
{ano:"2025", imagem:"haas/2025.jpeg", descricao:"Evolução gradual"}

]
}

];


function mostrarEra(index) {
    document.getElementById("tituloEra-haas").innerText = erashaas[index].titulo;
    document.getElementById("textoEra-haas").innerText = erashaas[index].texto;

    const timelineContainer = document.getElementById("haas-timeline");
    timelineContainer.innerHTML = "";

    erashaas[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="haas-timeline-item">
                <div class="haas-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });

    // botão ativo
    const botoes = document.querySelectorAll(".botoes-eras-haas button");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botoes[index].classList.add("ativo");
}
// inicia automático
mostrarEra(0);



const toggleHaas = document.getElementById("menuToggleHaas");
const menuHaas = document.getElementById("sideMenuHaas");
const overlayHaas = document.getElementById("overlayHaas");
const closeHaas = document.getElementById("closeMenuHaas");

const linksMenuHaas = document.querySelectorAll(".side-menu-Haas a");

function fecharMenuHaas() {
  if (menuHaas) menuHaas.classList.remove("active");
  if (overlayHaas) overlayHaas.classList.remove("active");
}

if (toggleHaas) {
  toggleHaas.addEventListener("click", () => {
    menuHaas?.classList.add("active");
    overlayHaas?.classList.add("active");
  });
}

if (closeHaas) {
  closeHaas.addEventListener("click", fecharMenuHaas);
}

if (overlayHaas) {
  overlayHaas.addEventListener("click", fecharMenuHaas);
}

linksMenuHaas.forEach(link => {
  link.addEventListener("click", fecharMenuHaas);
});

(function scrollLinksHaas() {

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

  const imgOcon =
  document.getElementById("img-Ocon");

  const imgBearman =
  document.getElementById("img-Bearman");

  /* ===================================
     DADOS DOS PILOTOS
  =================================== */
  const data = {

    Ocon: {

      2016: 0,
      2017: 87,
      2018: 49,
      2020: 62,
      2021: 74,
      2022: 92,
      2023: 58,
      2024: 23,
      2025: 14

    },

    Bearman: {

      2024: 7,
      2025: 11

    }

  };


  const chart =
  document.getElementById("chart-haas");

  const select =
  document.getElementById("pilotEvoSelect-haas");

  if(!chart || !select) return;


  /* ===================================
     TEMPORADAS EM COMUM
  =================================== */
  function getCommonSeasons(){

    return Object.keys(data.Ocon).filter(y =>

      Object.keys(data.Bearman).includes(y)

    );

  }


  /* ===================================
     RENDER
  =================================== */
  function render(seasons, mode){

    chart.innerHTML = "";

    const oValues =
    seasons.map(y => data.Ocon[y] || 0);

    const bValues =
    seasons.map(y => data.Bearman[y] || 0);

    const max =
    Math.max(...oValues, ...bValues, 1);


    seasons.forEach((year, i) => {

      const ocon = oValues[i];
      const bearman = bValues[i];

      const group =
      document.createElement("div");

      group.className =
      "bar-group-haas";


      group.innerHTML = `

        <span class="label-haas">
          ${year}
        </span>

        <div class="bars-row-haas">

          <div class="bar-wrap-haas">

            <span class="bar-value ocon-val">
              0
            </span>

            <div class="bar-haas Ocon"></div>

          </div>

          <div class="bar-wrap-haas">

            <span class="bar-value bearman-val">
              0
            </span>

            <div class="bar-haas Bearman"></div>

          </div>

        </div>

        <div class="diff-haas"></div>

      `;


      chart.appendChild(group);


      const oconBar =
      group.querySelector(".Ocon");

      const bearmanBar =
      group.querySelector(".Bearman");


      const oconVal =
      group.querySelector(".ocon-val");

      const bearmanVal =
      group.querySelector(".bearman-val");


      const diffEl =
      group.querySelector(".diff-haas");


      setTimeout(() => {

        /* ALTURA */
        if(mode === "both"){

          oconBar.style.height =
          (ocon / max * 100) + "%";

          bearmanBar.style.height =
          (bearman / max * 100) + "%";

        }

        if(mode === "ocon"){

          oconBar.style.height =
          (ocon / max * 100) + "%";

        }

        if(mode === "bearman"){

          bearmanBar.style.height =
          (bearman / max * 100) + "%";

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


        /* RESET */
        oconVal.style.opacity = "1";
        bearmanVal.style.opacity = "1";


        /* ESCONDER */
        if(mode === "ocon"){

          bearmanVal.style.opacity = "0";

        }

        if(mode === "bearman"){

          oconVal.style.opacity = "0";

        }


        /* ANIMAR */
        if(mode !== "bearman"){

          animateValue(oconVal, ocon);

        }

        if(mode !== "ocon"){

          animateValue(bearmanVal, bearman);

        }


        /* COMPARAÇÃO */
        if(mode === "both"){

          const diff =
          Math.abs(ocon - bearman);

          if(ocon > bearman){

            oconBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Ocon`;

          }

          if(bearman > ocon){

            bearmanBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Bearman`;

          }

          if(ocon === bearman){

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


    /* GRÁFICO */
    if(mode === "both"){

      render(
        getCommonSeasons(),
        "both"
      );

    }

    if(mode === "ocon"){

      render(
        Object.keys(data.Ocon),
        "ocon"
      );

    }

    if(mode === "bearman"){

      render(
        Object.keys(data.Bearman),
        "bearman"
      );

    }


    /* IMAGENS */
    if(mode === "both"){

      imgOcon.style.opacity = "1";
      imgBearman.style.opacity = "1";

    }

    if(mode === "ocon"){

      imgOcon.style.opacity = "1";
      imgBearman.style.opacity = "0";

    }

    if(mode === "bearman"){

      imgOcon.style.opacity = "0";
      imgBearman.style.opacity = "1";

    }

  }


  select.addEventListener(
    "change",
    update
  );

  update();

});


// =====================================================
// ⚪ HALL DA FAMA HAAS
// =====================================================

const bg1Haas =
document.querySelector(".bg1-haas");

const bg2Haas =
document.querySelector(".bg2-haas");

const cardsHaas =
document.querySelectorAll(".hall-card-haas");

const hallHaas =
document.querySelector(".hall-haas");

const gridHaas =
document.querySelector(".hall-grid-haas");

if(
  bg1Haas &&
  bg2Haas &&
  cardsHaas.length > 0
){

  let currentHaas = bg1Haas;
  let nextHaas = bg2Haas;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundHaas(img){

    if(!img) return;

    nextHaas.style.backgroundImage =
    `url('${img}')`;

    nextHaas.classList.add("active");

    currentHaas.classList.remove("active");

    let temp = currentHaas;

    currentHaas = nextHaas;
    nextHaas = temp;

  }

  // inicia com primeiro card
  changeBackgroundHaas(
    cardsHaas[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsHaas.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallHaas.classList.add(
          "showcase"
        );

        changeBackgroundHaas(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridHaas.classList.add(
          "active"
        );

        cardsHaas.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

        card.classList.add(
          "active"
        );

        hallHaas.classList.add(
          "showcase"
        );

        changeBackgroundHaas(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallHaas.addEventListener(
    "mouseleave",
    () => {

      hallHaas.classList.remove(
        "showcase"
      );

      gridHaas.classList.remove(
        "active"
      );

      cardsHaas.forEach(c => {

        c.classList.remove(
          "active"
        );

      });

    }
  );

}



// =====================================================
// ⚪ EVOLUÇÃO HAAS
// =====================================================

const carsDataHaas = {

  "2010": {

    image:"hallhaas/vf16.png",

    name:"Haas VF-16",

    engine:"Ferrari 059/4 V6 Turbo",

    power:"~900 HP",

    year:"2016",

    driver:"Grosjean <br> Gutiérrez"

  },


  "2020": {

    image:"hallhaas/vf25.png",

    name:"Haas VF-25",

    engine:"Ferrari V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Ocon <br> Bearman"

  }

};

function changeEraHaas(era){

  const section =
  document.getElementById("haasEvolution");

  const img =
  document.getElementById("carImage-haas");

  img.style.opacity = 0;

  img.style.transform =
  "scale(.85)";

  section.classList.remove(
    "bg-2010",
    "bg-2025"
  );

  section.classList.add(`bg-${era}`);

  setTimeout(() => {

    const data =
    carsDataHaas[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-haas"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-haas"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-haas"
    ).innerText = data.power;

    document.getElementById(
      "carYear-haas"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-haas"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
    "scale(1)";

  },250);

}

window.changeEraHaas =
changeEraHaas;