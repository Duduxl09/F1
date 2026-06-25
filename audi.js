document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ANIMAÇÃO DOS BLOCOS
========================= */
const blocos = document.querySelectorAll(".bloco-equipe-audi");

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
const secao = document.querySelector(".numeros-audi");
const bg = document.querySelector(".bg-numeros-audi");

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
const cards = document.querySelectorAll(".animar-audi");

function animarCards(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100 && !card.classList.contains("ativo")){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador = card.querySelector(".contador-audi");
        const barra = card.querySelector(".barra-velocidade-audi");

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
const titulo = document.querySelector(".titulo-animar-audi");

window.addEventListener("scroll", ()=>{

  if(!titulo) return;

  const pos = titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){
    titulo.classList.add("show");
  }

});

});

const erasaudi = [

{
titulo: "Capítulo I – Sauber (1993-2005)",
texto: "A história da futura equipe Audi começa com a Sauber, que entrou na Fórmula 1 em 1993. Ao longo dos anos, a equipe se destacou pela consistência e por revelar talentos, mantendo presença sólida no meio do grid.",
timeline: [
{ano:"1993", imagem:"audi/1993.jpeg", descricao:"Estreia da Sauber na F1"},
{ano:"2001", imagem:"audi/2001.jpg", descricao:"Melhor fase inicial"},
{ano:"2005", imagem:"audi/2005.jpeg", descricao:"Fim da primeira fase"}
]
},

{
titulo: "Capítulo II – BMW Sauber (2006-2009)",
texto: "Com a entrada da BMW, a equipe viveu seu auge. Conquistou vitórias e chegou a disputar posições de destaque no campeonato, incluindo uma vitória em 2008.",
timeline: [
{ano:"2006", imagem:"audi/2006.jpeg", descricao:"Parceria com BMW"},
{ano:"2008", imagem:"audi/2008.jpg", descricao:"Vitória no Canadá"},
{ano:"2009", imagem:"audi/2009.jpeg", descricao:"Fim da BMW Sauber"}
]
},

{
titulo: "Capítulo III – Retorno Sauber (2010-2022)",
texto: "Após a saída da BMW, a equipe voltou a ser Sauber. Passou por altos e baixos, mantendo-se no grid com recursos limitados e focando no desenvolvimento de pilotos.",
timeline: [
{ano:"2012", imagem:"audi/2012.jpg", descricao:"Pódios inesperados"},
{ano:"2017", imagem:"audi/2017.jpeg", descricao:"Crise financeira"},
{ano:"2022", imagem:"audi/2022.jpeg", descricao:"Última fase como Sauber"}
]
},

{
titulo: "Capítulo IV – Transição Audi (2023-2025)",
texto: "A equipe iniciou sua transformação para se tornar a Audi F1. Usando o Nome Kick temporariamente,Grandes investimentos foram feitos e a estrutura começou a ser preparada para a nova era.",
timeline: [
{ano:"2023", imagem:"audi/2023.jpeg", descricao:"Início da transição"},
{ano:"2024", imagem:"audi/2024.jpeg", descricao:"Desenvolvimento do projeto"},
{ano:"2025", imagem:"audi/2025.jpg", descricao:"Preparação final"},
{ano:"2026", imagem:"audi/2026.jpeg", descricao:"Oficialmente Audi"}
]
}
];

function mostrarEraAudi(index) {
    document.getElementById("tituloEra-audi").innerText = erasaudi[index].titulo;
    document.getElementById("textoEra-audi").innerText = erasaudi[index].texto;

    const timelineContainer = document.getElementById("audi-timeline");
    timelineContainer.innerHTML = "";

    erasaudi[index].timeline.forEach(item => {
        timelineContainer.innerHTML += `
            <div class="audi-timeline-item">
                <div class="audi-timeline-year">${item.ano}</div>
                <img src="${item.imagem}" alt="">
                <p>${item.descricao}</p>
            </div>
        `;
    });

    const botoes = document.querySelectorAll(".botoes-eras-audi button");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    botoes[index].classList.add("ativo");
}

// inicia automático
mostrarEraAudi(0);


const toggleaudi = document.getElementById("menuToggleaudi");
const menuaudi = document.getElementById("sideMenuaudi");
const overlayaudi = document.getElementById("overlayaudi");
const closeaudi = document.getElementById("closeMenuaudi");

const linksMenuaudi = document.querySelectorAll(".side-menu-audi a");

function fecharMenuaudi() {
  if (menuaudi) menuaudi.classList.remove("active");
  if (overlayaudi) overlayaudi.classList.remove("active");
}

if (toggleaudi) {
  toggleaudi.addEventListener("click", () => {
    menuaudi?.classList.add("active");
    overlayaudi?.classList.add("active");
  });
}

if (closeaudi) {
  closeaudi.addEventListener("click", fecharMenuaudi);
}

if (overlayaudi) {
  overlayaudi.addEventListener("click", fecharMenuaudi);
}

linksMenuaudi.forEach(link => {
  link.addEventListener("click", fecharMenuaudi);
});

(function scrollLinksaudi() {

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

  const imghulk =
  document.getElementById("img-hulk");

  const imgborto =
  document.getElementById("img-borto");


  /* ===================================
     DADOS DOS PILOTOS
  =================================== */
  const data = {

    hulk: {

      2010: 22,
      2012: 63,
      2013: 51,
      2014: 96,
      2015: 58,
      2016: 72,
      2017: 43,
      2018: 69,
      2019: 37,
      2023: 9,
      2024: 41,
      2025: 58

    },

    borto: {

      2025: 12

    }

  };


  const chart =
  document.getElementById("chart-audi");

  const select =
  document.getElementById("pilotEvoSelect-audi");

  if(!chart || !select) return;


  /* ===================================
     TEMPORADAS EM COMUM
  =================================== */
  function getCommonSeasons(){

    return Object.keys(data.hulk).filter(y =>

      Object.keys(data.borto).includes(y)

    );

  }


  /* ===================================
     RENDER
  =================================== */
  function render(seasons, mode){

    chart.innerHTML = "";

    const hValues =
    seasons.map(y => data.hulk[y] || 0);

    const bValues =
    seasons.map(y => data.borto[y] || 0);

    const max =
    Math.max(...hValues, ...bValues, 1);


    seasons.forEach((year, i) => {

      const hulk = hValues[i];
      const borto = bValues[i];

      const group =
      document.createElement("div");

      group.className =
      "bar-group-audi";


      group.innerHTML = `

        <span class="label-audi">
          ${year}
        </span>

        <div class="bars-row-audi">

          <div class="bar-wrap-audi">

            <span class="bar-value hulk-val">
              0
            </span>

            <div class="bar-audi hulk"></div>

          </div>

          <div class="bar-wrap-audi">

            <span class="bar-value borto-val">
              0
            </span>

            <div class="bar-audi borto"></div>

          </div>

        </div>

        <div class="diff-audi"></div>

      `;


      chart.appendChild(group);


      const hulkBar =
      group.querySelector(".hulk");

      const bortoBar =
      group.querySelector(".borto");


      const hulkVal =
      group.querySelector(".hulk-val");

      const bortoVal =
      group.querySelector(".borto-val");


      const diffEl =
      group.querySelector(".diff-audi");


      setTimeout(() => {

        /* ALTURA */
        if(mode === "both"){

          hulkBar.style.height =
          (hulk / max * 100) + "%";

          bortoBar.style.height =
          (borto / max * 100) + "%";

        }

        if(mode === "hulk"){

          hulkBar.style.height =
          (hulk / max * 100) + "%";

        }

        if(mode === "borto"){

          bortoBar.style.height =
          (borto / max * 100) + "%";

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
        hulkVal.style.opacity = "1";
        bortoVal.style.opacity = "1";


        /* ESCONDER */
        if(mode === "hulk"){

          bortoVal.style.opacity = "0";

        }

        if(mode === "borto"){

          hulkVal.style.opacity = "0";

        }


        /* ANIMAR */
        if(mode !== "borto"){

          animateValue(hulkVal, hulk);

        }

        if(mode !== "hulk"){

          animateValue(bortoVal, borto);

        }


        /* COMPARAÇÃO */
        if(mode === "both"){

          const diff =
          Math.abs(hulk - borto);

          if(hulk > borto){

            hulkBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Hülkenberg`;

          }

          if(borto > hulk){

            bortoBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} borto`;

          }

          if(hulk === borto){

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

    if(mode === "hulk"){

      render(
        Object.keys(data.hulk),
        "hulk"
      );

    }

    if(mode === "borto"){

      render(
        Object.keys(data.borto),
        "borto"
      );

    }


    /* IMAGENS */
    if(mode === "both"){

      imghulk.style.opacity = "1";
      imgborto.style.opacity = "1";

    }

    if(mode === "hulk"){

      imghulk.style.opacity = "1";
      imgborto.style.opacity = "0";

    }

    if(mode === "borto"){

      imghulk.style.opacity = "0";
      imgborto.style.opacity = "1";

    }

  }


  select.addEventListener(
    "change",
    update
  );

  update();

});


document.addEventListener("DOMContentLoaded", () => {

  const bg1Audi =
  document.querySelector(".bg1-audi");

  const bg2Audi =
  document.querySelector(".bg2-audi");

  const cardsAudi =
  document.querySelectorAll(".hall-card-audi");

  const hallAudi =
  document.querySelector(".hall-audi");

  const gridAudi =
  document.querySelector(".hall-grid-audi");

  if(
    bg1Audi &&
    bg2Audi &&
    cardsAudi.length > 0
  ){

    let currentAudi = bg1Audi;
    let nextAudi = bg2Audi;

    /* =====================================
       TROCA DE FUNDO
    ===================================== */

    function changeBackgroundAudi(img){

      if(!img) return;

      nextAudi.style.backgroundImage =
      `url('${img}')`;

      nextAudi.classList.add("active");

      currentAudi.classList.remove("active");

      let temp = currentAudi;

      currentAudi = nextAudi;
      nextAudi = temp;

    }

    /* inicia com primeiro card */

    changeBackgroundAudi(
      cardsAudi[0].dataset.bg
    );

    /* =====================================
       EVENTOS
    ===================================== */

    cardsAudi.forEach(card => {

      const img = card.dataset.bg;

      /* HOVER PC */

      card.addEventListener(
        "mouseenter",
        () => {

          hallAudi.classList.add(
            "showcase"
          );

          changeBackgroundAudi(img);

        }
      );

      /* CLICK MOBILE */

      card.addEventListener(
        "click",
        () => {

          gridAudi.classList.add(
            "active"
          );

          cardsAudi.forEach(c => {

            c.classList.remove(
              "active"
            );

          });

          card.classList.add(
            "active"
          );

          hallAudi.classList.add(
            "showcase"
          );

          changeBackgroundAudi(img);

        }
      );

    });

    /* =====================================
       REMOVE SHOWCASE AO SAIR
    ===================================== */

    hallAudi.addEventListener(
      "mouseleave",
      () => {

        hallAudi.classList.remove(
          "showcase"
        );

        gridAudi.classList.remove(
          "active"
        );

        cardsAudi.forEach(c => {

          c.classList.remove(
            "active"
          );

        });

      }
    );

  }

});


const carsDataAudi = {

"2000": {

  image:"hallaudi/sauber.png",

  name:"BMW Sauber F1.08",

  engine:"BMW P86/8 V8",

  power:"~780 HP",

  year:"2008",

  driver:"Kubica <br> Heidfeld"

},

  "2010": {

    image:"hallaudi/alfa.png",

    name:"Alfa Romeo C38",

    engine:"Ferrari V6 Turbo Hybrid",

    power:"~950 HP",

    year:"2019",

    driver:"Räikkönen <br> Giovinazzi"

  },

  "2020": {

    image:"hallaudi/kick.webp",

    name:"Kick Sauber C45",

    engine:"Ferrari V6 Turbo Hybrid",

    power:"~1000 HP",

    year:"2025",

    driver:"Hülkenberg <br> Bortoleto"

  }

};

function changeEraAudi(era){

  const section =
  document.getElementById("audiEvolution");

  const img =
  document.getElementById("carImage-audi");

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
    carsDataAudi[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById(
      "carName-audi"
    ).innerText = data.name;

    document.getElementById(
      "carEngine-audi"
    ).innerText = data.engine;

    document.getElementById(
      "carPower-audi"
    ).innerText = data.power;

    document.getElementById(
      "carYear-audi"
    ).innerText = data.year;

    document.getElementById(
      "carDriver-audi"
    ).innerHTML = data.driver;

    img.style.opacity = 1;

    img.style.transform =
    "scale(1)";

  },250);

}

window.changeEraAudi =
changeEraAudi;