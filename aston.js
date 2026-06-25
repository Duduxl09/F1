document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-aston");

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
const secao = document.querySelector(".numeros-aston");
const bg = document.querySelector(".bg-numeros-aston");

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
const cards = document.querySelectorAll(".animar-aston");

function animarCards(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100 && !card.classList.contains("ativo")){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador = card.querySelector(".contador-aston");
        const barra = card.querySelector(".barra-velocidade-aston");

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
const titulo = document.querySelector(".titulo-animar-aston");

window.addEventListener("scroll", ()=>{

  if(!titulo) return;

  const pos = titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){
    titulo.classList.add("show");
  }

});

});


const erasaston = [

{
titulo: "Capítulo I – Origem como Jordan (1991-2005)",
texto: "A história da atual Aston Martin começa com a equipe Jordan Grand Prix, fundada por Eddie Jordan em 1991. Conhecida pelo seu espírito ousado e carros icônicos, a equipe rapidamente se tornou uma presença forte no meio do grid. O auge veio em 1999, quando brigou pelo campeonato. Além disso, a Jordan revelou grandes talentos ao longo dos anos.",


timeline: [
{ano:"1991", imagem:"aston/1991.jpeg", descricao:"Estreia da Jordan na F1"},
{ano:"1998", imagem:"aston/1998.jpg", descricao:"Primeira vitória na Bélgica"},
{ano:"1999", imagem:"aston/1999.jpg", descricao:"Disputa pelo título"},
{ano:"2005", imagem:"aston/2005.jpeg", descricao:"Fim da era Jordan"}
]
},

{
titulo: "Capítulo II – Midland e Spyker (2006-2007)",
texto: "Após a venda da Jordan, a equipe passou por uma fase instável, sendo renomeada para Midland em 2006 e depois Spyker em 2007. Durante esse período, enfrentou dificuldades financeiras e baixo desempenho, permanecendo no fundo do grid sem resultados expressivos.",
timeline: [
{ano:"2006", imagem:"aston/2006.jpg", descricao:"Era Midland"},
{ano:"2007", imagem:"aston/2007.jpeg", descricao:"Transição para Spyker"}
]
},

{
titulo: "Capítulo III – Force India (2008-2018)",
texto: "Em 2008, a equipe foi comprada por Vijay Mallya e renomeada para Force India. Essa fase marcou uma recuperação impressionante, com a equipe se tornando uma das mais eficientes do grid. Conquistou pódios importantes e frequentemente brigava no meio do pelotão com ótimo custo-benefício.",
timeline: [
{ano:"2008", imagem:"aston/2008.jpg", descricao:"Nascimento da Force India"},
{ano:"2009", imagem:"aston/2009.jpg", descricao:"Primeiro pódio e pole"},
{ano:"2016", imagem:"aston/2016.jpeg", descricao:"Melhor fase competitiva"},
{ano:"2018", imagem:"aston/2018.jpg", descricao:"Fim da Force India"}
]
},

{
titulo: "Capítulo IV – Racing Point (2019-2020)",
texto: "Após problemas financeiros, a equipe foi adquirida por um consórcio liderado por Lawrence Stroll, tornando-se Racing Point. Em 2020, ganhou destaque com um carro competitivo apelidado de 'Mercedes rosa', conquistando uma vitória marcante e vários pódios.",
timeline: [
{ano:"2019", imagem:"aston/2019.jpg", descricao:"Reestruturação da equipe"},
{ano:"2020", imagem:"aston/2020.jpeg", descricao:"Vitória e destaque no grid"}
]
},

{
titulo: "Capítulo V – Aston Martin (2021-atual)",
texto: "A partir de 2021, a equipe passou a competir como Aston Martin, trazendo de volta uma marca histórica à Fórmula 1. Com grandes investimentos e ambições de título, a equipe evoluiu rapidamente, conquistando pódios e se consolidando como uma força emergente no grid.",
timeline: [
{ano:"2021", imagem:"aston/2021.jpeg", descricao:"Retorno da Aston Martin"},
{ano:"2023", imagem:"aston/2023.jpeg", descricao:"Vários pódios na temporada"},
{ano:"2025", imagem:"aston/2025.jpeg", descricao:"Continuidade do projeto"}
]
}

];

function mostrarEra(index) {
    document.getElementById("tituloEra-aston").innerText = erasaston[index].titulo;
    document.getElementById("textoEra-aston").innerText = erasaston[index].texto;
    
 

    const timelineContainer = document.getElementById("aston-timeline");
    timelineContainer.innerHTML = "";

    erasaston[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="aston-timeline-item">
                <div class="aston-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });
}

const botoes = document.querySelectorAll(".botoes-eras-aston button");

botoes.forEach(btn => btn.classList.remove("ativo"));



mostrarEra(0);


const toggleAston = document.getElementById("menuToggleAston");
const menuAston = document.getElementById("sideMenuAston");
const overlayAston = document.getElementById("overlayAston");
const closeAston = document.getElementById("closeMenuAston");

const linksMenuAston = document.querySelectorAll(".side-menu-aston a");

function fecharMenuAston() {
  if (menuAston) menuAston.classList.remove("active");
  if (overlayAston) overlayAston.classList.remove("active");
}

if (toggleAston) {
  toggleAston.addEventListener("click", () => {
    menuAston?.classList.add("active");
    overlayAston?.classList.add("active");
  });
}

if (closeAston) {
  closeAston.addEventListener("click", fecharMenuAston);
}

if (overlayAston) {
  overlayAston.addEventListener("click", fecharMenuAston);
}

linksMenuAston.forEach(link => {
  link.addEventListener("click", fecharMenuAston);
});

(function scrollLinksAston() {

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

  const imgAlonso =
  document.getElementById("img-alonso");

  const imgStroll =
  document.getElementById("img-stroll");

  /* ===================================
     DADOS DOS PILOTOS
  =================================== */
  const data = {

    alonso: {

      2001: 0,
      2003: 55,
      2004: 59,
      2005:133,
      2006: 134,
      2007: 109,
      2008: 61,
      2009: 26,
      2010: 252,
      2011: 257,
      2012: 278,
      2013: 242,
      2014: 161,
      2015: 11,
      2016: 54,
      2017: 17,
      2018: 50,
      2021: 81,
      2022: 81,
      2023: 206,
      2024: 70,
      2025: 56

    },

    stroll: {

      2017: 40,
      2018: 6,
      2019: 21,
      2020: 75,
      2021: 34,
      2022: 18,
      2023: 74,
      2024: 24,
      2025: 33

    }

  };


  const chart =
  document.getElementById("chart-aston");

  const select =
  document.getElementById("pilotEvoSelect-aston");

  if(!chart || !select) return;


  /* ===================================
     TEMPORADAS EM COMUM
  =================================== */
  function getCommonSeasons(){

    return Object.keys(data.alonso).filter(y =>

      Object.keys(data.stroll).includes(y)

    );

  }


  /* ===================================
     RENDER
  =================================== */
  function render(seasons, mode){

    chart.innerHTML = "";

    const aValues =
    seasons.map(y => data.alonso[y] || 0);

    const sValues =
    seasons.map(y => data.stroll[y] || 0);

    const max =
    Math.max(...aValues, ...sValues, 1);


    seasons.forEach((year, i) => {

      const alonso = aValues[i];
      const stroll = sValues[i];

      const group =
      document.createElement("div");

      group.className =
      "bar-group-aston";


      group.innerHTML = `

        <span class="label-aston">
          ${year}
        </span>

        <div class="bars-row-aston">

          <div class="bar-wrap-aston">

            <span class="bar-value alonso-val">
              0
            </span>

            <div class="bar-aston alonso"></div>

          </div>

          <div class="bar-wrap-aston">

            <span class="bar-value stroll-val">
              0
            </span>

            <div class="bar-aston stroll"></div>

          </div>

        </div>

        <div class="diff-aston"></div>

      `;


      chart.appendChild(group);


      const alonsoBar =
      group.querySelector(".alonso");

      const strollBar =
      group.querySelector(".stroll");


      const alonsoVal =
      group.querySelector(".alonso-val");

      const strollVal =
      group.querySelector(".stroll-val");


      const diffEl =
      group.querySelector(".diff-aston");


      setTimeout(() => {

        /* ALTURA */
        if(mode === "both"){

          alonsoBar.style.height =
          (alonso / max * 100) + "%";

          strollBar.style.height =
          (stroll / max * 100) + "%";

        }

        if(mode === "alonso"){

          alonsoBar.style.height =
          (alonso / max * 100) + "%";

        }

        if(mode === "stroll"){

          strollBar.style.height =
          (stroll / max * 100) + "%";

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
        alonsoVal.style.opacity = "1";
        strollVal.style.opacity = "1";


        /* ESCONDER */
        if(mode === "alonso"){

          strollVal.style.opacity = "0";

        }

        if(mode === "stroll"){

          alonsoVal.style.opacity = "0";

        }


        /* ANIMAR */
        if(mode !== "stroll"){

          animateValue(alonsoVal, alonso);

        }

        if(mode !== "alonso"){

          animateValue(strollVal, stroll);

        }


        /* COMPARAÇÃO */
        if(mode === "both"){

          const diff =
          Math.abs(alonso - stroll);

          if(alonso > stroll){

            alonsoBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Alonso`;

          }

          if(stroll > alonso){

            strollBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Stroll`;

          }

          if(alonso === stroll){

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

    if(mode === "alonso"){

      render(
        Object.keys(data.alonso),
        "alonso"
      );

    }

    if(mode === "stroll"){

      render(
        Object.keys(data.stroll),
        "stroll"
      );

    }


    /* IMAGENS */
    if(mode === "both"){

      imgAlonso.style.opacity = "1";
      imgStroll.style.opacity = "1";

    }

    if(mode === "alonso"){

      imgAlonso.style.opacity = "1";
      imgStroll.style.opacity = "0";

    }

    if(mode === "stroll"){

      imgAlonso.style.opacity = "0";
      imgStroll.style.opacity = "1";

    }

  }


  select.addEventListener(
    "change",
    update
  );

  update();

});



// =====================================================
// 🟢 HALL DA FAMA ASTON MARTIN
// =====================================================

const bg1Aston =
document.querySelector(".bg1-aston");

const bg2Aston =
document.querySelector(".bg2-aston");

const cardsAston =
document.querySelectorAll(".hall-card-aston");

const hallAston =
document.querySelector(".hall-aston");

const gridAston =
document.querySelector(".hall-grid-aston");

if(
  bg1Aston &&
  bg2Aston &&
  cardsAston.length > 0
){

  let currentAston = bg1Aston;
  let nextAston = bg2Aston;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundAston(img){

    if(!img) return;

    nextAston.style.backgroundImage =
    `url('${img}')`;

    nextAston.classList.add("active");

    currentAston.classList.remove("active");

    let temp = currentAston;

    currentAston = nextAston;
    nextAston = temp;

  }

  // inicia com primeiro card
  changeBackgroundAston(
    cardsAston[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsAston.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallAston.classList.add(
          "showcase"
        );

        changeBackgroundAston(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridAston.classList.add(
          "active"
        );

        cardsAston.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

        card.classList.add(
          "active"
        );

        hallAston.classList.add(
          "showcase"
        );

        changeBackgroundAston(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallAston.addEventListener(
    "mouseleave",
    () => {

      hallAston.classList.remove(
        "showcase"
      );

      gridAston.classList.remove(
        "active"
      );

      cardsAston.forEach(c => {

        c.classList.remove(
          "active"
        );

      });

    }
  );

}




const carsDataAston = {

  "2000": {

    image:"hallaston/fi2008.png",

  name:"Force India VJM01",

  engine:"Ferrari 056 V8",

  power:"~780 HP",

  year:"2008",

  driver:"Fisichella <br> Sutil"

},

  "2010": {

   image:"hallaston/rp2018.png",

  name:"Racing Point Force India RP20",

  engine:"Mercedes V6 Turbo",

  power:"~950 HP",

  year:"2018",

  driver:"Pérez <br> Ocon"

},

  "2020": {

    image:"hallaston/amr25.png",

    name:"Aston Martin AMR25",

    engine:"Mercedes V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Alonso <br> Stroll"

  }

};

function changeEraAston(era){

  const section =
  document.getElementById("astonEvolution");

  const img =
  document.getElementById("carImage-aston");

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
    carsDataAston[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-aston"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-aston"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-aston"
    ).innerText = data.power;

    document.getElementById(
      "carYear-aston"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-aston"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
    "scale(1)";

  },250);

}

window.changeEraAston =
changeEraAston;