document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // ANIMAÇÃO DOS BLOCOS
  // =========================
  const blocos = document.querySelectorAll(".bloco-equipe-rb");

  blocos.forEach((bloco, i) => {
    bloco.style.opacity = 0;
    bloco.style.transform = "translateY(20px)";

    setTimeout(() => {
      bloco.style.opacity = 1;
      bloco.style.transform = "translateY(0)";
    }, i * 300);
  });
  
  
  
  const secao = document.querySelector(".numeros-rb");
  const bg = document.querySelector(".bg-numeros-rb");

  window.addEventListener("scroll", function () {

    if (!secao || !bg) return;

    const rect = secao.getBoundingClientRect();
    const alturaTela = window.innerHeight;

    if (rect.top < alturaTela && rect.bottom > 0) {
      let progresso = rect.top / alturaTela;
      bg.style.transform = `translateY(${progresso * 80}px) scale(1.05)`;
    }

  });
  
  
  
  const cards = document.querySelectorAll(".animar-rb");

  function animarCards() {

    const topoTela = window.innerHeight;

    cards.forEach((card, index) => {

      const posicao = card.getBoundingClientRect().top;

      if (posicao < topoTela - 100 && !card.classList.contains("ativo")) {

        setTimeout(() => {

          card.classList.add("ativo");

          const contador = card.querySelector(".contador-rb");
          const barra = card.querySelector(".barra-velocidade-rb");

          if (contador && !contador.classList.contains("contado")) {

            contador.classList.add("contado");

            const target = +contador.getAttribute("data-target");
            let count = 0;

            const update = () => {

              const increment = target / 200;

              if (count < target) {
                count += increment;
                contador.innerText = Math.floor(count);

                if (barra) {
                  barra.style.width = (count / target * 100) + "%";
                }

                setTimeout(update, 40);

              } else {
                contador.innerText = target;

                if (barra) {
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
  
  const titulo = document.querySelector(".titulo-animar-rb");

  window.addEventListener("scroll", () => {

    if (!titulo) return;

    const pos = titulo.getBoundingClientRect().top;

    if (pos < window.innerHeight - 120) {
      titulo.classList.add("show");
    }

  });
  
  
const erasrb = [
  {
titulo: "Capítulo I – Origem Minardi (1985-2005)",
texto: "A história da atual Racing Bulls começa com a equipe Minardi, fundada em 1985. Conhecida por operar com poucos recursos, a equipe italiana se destacou por revelar jovens talentos e manter presença constante na Fórmula 1. Apesar de nunca ter conquistado vitórias ou títulos, a Minardi ganhou respeito no paddock por sua paixão pelo automobilismo e por servir como porta de entrada para diversos pilotos que mais tarde fariam sucesso na categoria.",
timeline: [
{ano:"1985", imagem:"RB/1985.jpeg", descricao:"Fundação da Minardi"},
{ano:"1990", imagem:"RB/1990.jpeg", descricao:"Consolidação no grid"},
{ano:"2005", imagem:"RB/2005.jpeg", descricao:"Fim da era Minardi"}
]
},

{
titulo: "Capítulo II – Toro Rosso e a surpresa (2006-2019)",
texto: "Em 2006, a equipe foi adquirida pela Red Bull e renomeada para Toro Rosso, assumindo o papel de equipe júnior. Durante esse período, o objetivo principal era desenvolver jovens pilotos para a equipe principal. O grande momento dessa era aconteceu em 2008, quando Sebastian Vettel conquistou uma vitória histórica em Monza, surpreendendo todo o grid. Ao longo dos anos seguintes, a equipe continuou formando talentos e mantendo presença competitiva no meio do pelotão.",
timeline: [
{ano:"2006", imagem:"RB/2006.jpg", descricao:"Criação da Toro Rosso"},
{ano:"2008", imagem:"RB/2008.jpg", descricao:"Vitória histórica"},
{ano:"2015", imagem:"RB/2015.webp", descricao:"Nova geração de pilotos"},
{ano:"2019", imagem:"RB/2019.webp", descricao:"Último ano Toro Rosso"}
]
},

{
titulo: "Capítulo III – AlphaTauri (2020-2023)",
texto: "A partir de 2020, a equipe passou a se chamar AlphaTauri, entrando em uma nova fase com identidade própria. Logo no primeiro ano, conquistou uma vitória marcante com Pierre Gasly em Monza, reafirmando sua capacidade de surpreender. Durante essa era, a equipe se manteve competitiva no meio do grid, alternando bons resultados com períodos de instabilidade, mas sempre desempenhando um papel importante no desenvolvimento de pilotos.",
timeline: [
{ano:"2020", imagem:"RB/2020.jpeg", descricao:"Nova identidade"},
{ano:"2020", imagem:"RB/gasly20.jpeg", descricao:"Vitória com Gasly"},
{ano:"2021", imagem:"RB/2021.jpg", descricao:"Boa fase competitiva"},
{ano:"2023", imagem:"RB/2023.jpg", descricao:"Transição de fase"}
]
},

{
titulo: "Capítulo IV – Racing Bulls (2024-atual )",

texto: "Em 2024, a equipe foi novamente renomeada, passando a se chamar Racing Bulls. Essa nova fase representa uma reformulação completa, com foco em maior competitividade e integração com a equipe principal. Com uma base sólida e jovens talentos, a equipe busca evoluir e se tornar mais consistente dentro do grid da Fórmula 1, mirando um futuro mais competitivo.",
timeline: [
{ano:"2024", imagem:"RB/2024.jpg", descricao:"Nova era Racing Bulls"},
{ano:"2025", imagem:"RB/2025.jpeg", descricao:"Evolução do projeto"}
]
}
];

function mostrarEra(index) {

  const titulo = document.getElementById("tituloEra-rb");
  const texto = document.getElementById("textoEra-rb");
  const timeline = document.getElementById("rb-timeline");
  const botoes = document.querySelectorAll(".botoes-eras-rb button");

  if (!titulo || !texto || !timeline) return;

  const era = erasrb[index];

  if (!era) return;

  titulo.textContent = era.titulo;
  texto.textContent = era.texto;

  timeline.innerHTML = "";

  era.timeline.forEach(item => {
    timeline.innerHTML += `
      <div class="rb-timeline-item">
        <div class="rb-timeline-year">${item.ano}</div>
        <img src="${item.imagem}">
        <p>${item.descricao}</p>
      </div>
    `;
  });

  botoes.forEach(btn => btn.classList.remove("ativo"));
  if (botoes[index]) botoes[index].classList.add("ativo");
}

// 🔥 IMPORTANTE: deixar global
window.mostrarEra = mostrarEra;

// inicia automaticamente
mostrarEra(0);
  




  
  
  const toggleRB = document.getElementById("menuToggleRB");
  const menuRB = document.getElementById("sideMenuRB");
  const overlayRB = document.getElementById("overlayRB");
  const closeRB = document.getElementById("closeMenuRB");

  const linksMenuRB = document.querySelectorAll(".side-menu-rb a");

  function fecharMenuRB() {
    if (menuRB) menuRB.classList.remove("active");
    if (overlayRB) overlayRB.classList.remove("active");
  }

  if (toggleRB) {
    toggleRB.addEventListener("click", () => {
      menuRB?.classList.add("active");
      overlayRB?.classList.add("active");
    });
  }

  if (closeRB) {
    closeRB.addEventListener("click", fecharMenuRB);
  }

  if (overlayRB) {
    overlayRB.addEventListener("click", fecharMenuRB);
  }

  linksMenuRB.forEach(link => {
    link.addEventListener("click", fecharMenuRB);
  });
  
  
  
  
  (function scrollLinks() {

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

  })()
  
  
});


document.addEventListener("DOMContentLoaded", () => {

  const imgLawson =
  document.getElementById("img-lawson");

  const imgLindblad =
  document.getElementById("img-lindblad");


  const data = {

    lawson: {

      2023: 2,
      2024: 4,
      2025: 12

    },

    lindblad: {

      2025: 0

    }

  };


  const chart =
  document.getElementById("chart-rb");

  const select =
  document.getElementById("pilotEvoSelect-rb");


  if(!chart || !select) return;


  function getCommonSeasons(){

    return Object.keys(data.lawson).filter(y =>

      Object.keys(data.lindblad).includes(y)

    );

  }


  function render(seasons, mode){

    chart.innerHTML = "";

    const lValues =
    seasons.map(y => data.lawson[y] || 0);

    const liValues =
    seasons.map(y => data.lindblad[y] || 0);

    const max =
    Math.max(...lValues, ...liValues, 1);


    seasons.forEach((year, i) => {

      const lawson = lValues[i];
      const lindblad = liValues[i];

      const group =
      document.createElement("div");

      group.className =
      "bar-group-rb";


      group.innerHTML = `

        <span class="label-rb">
          ${year}
        </span>

        <div class="bars-row-rb">

          <div class="bar-wrap-rb">

            <span class="bar-value lawson-val">
              0
            </span>

            <div class="bar-rb lawson"></div>

          </div>

          <div class="bar-wrap-rb">

            <span class="bar-value lindblad-val">
              0
            </span>

            <div class="bar-rb lindblad"></div>

          </div>

        </div>

        <div class="diff-rb"></div>

      `;


      chart.appendChild(group);


      const lawsonBar =
      group.querySelector(".lawson");

      const lindbladBar =
      group.querySelector(".lindblad");


      const lawsonVal =
      group.querySelector(".lawson-val");

      const lindbladVal =
      group.querySelector(".lindblad-val");


      const diffEl =
      group.querySelector(".diff-rb");


      setTimeout(() => {

        /* ALTURA */
        if(mode === "both"){

          lawsonBar.style.height =
          (lawson / max * 100) + "%";

          lindbladBar.style.height =
          (lindblad / max * 100) + "%";

        }

        if(mode === "lawson"){

          lawsonBar.style.height =
          (lawson / max * 100) + "%";

        }

        if(mode === "lindblad"){

          lindbladBar.style.height =
          (lindblad / max * 100) + "%";

        }


        /* ANIMAÇÃO NÚMERO */
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
        lawsonVal.style.opacity = "1";
        lindbladVal.style.opacity = "1";


        /* ESCONDER */
        if(mode === "lawson"){

          lindbladVal.style.opacity = "0";

        }

        if(mode === "lindblad"){

          lawsonVal.style.opacity = "0";

        }


        /* ANIMAR */
        if(mode !== "lindblad"){

          animateValue(lawsonVal, lawson);

        }

        if(mode !== "lawson"){

          animateValue(lindbladVal, lindblad);

        }


        /* COMPARAÇÃO */
        if(mode === "both"){

          const diff =
          Math.abs(lawson - lindblad);

          if(lawson > lindblad){

            lawsonBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Lawson`;

          }

          if(lindblad > lawson){

            lindbladBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Lindblad`;

          }

          if(lindblad === 0){

            diffEl.textContent =
            "Lindblad ainda não correu na F1 até 2025";

          }

        }

      }, i * 200);

    });

  }


  function update(){

    const mode =
    select.value;


    /* ===== GRÁFICO ===== */
    if(mode === "both"){

      render(
        getCommonSeasons(),
        "both"
      );

    }

    if(mode === "lawson"){

      render(
        Object.keys(data.lawson),
        "lawson"
      );

    }

    if(mode === "lindblad"){

      render(
        Object.keys(data.lindblad),
        "lindblad"
      );

    }


    /* ===== IMAGENS ===== */
    if(mode === "both"){

      imgLawson.style.opacity = "1";
      imgLindblad.style.opacity = "1";

    }

    if(mode === "lawson"){

      imgLawson.style.opacity = "1";
      imgLindblad.style.opacity = "0";

    }

    if(mode === "lindblad"){

      imgLawson.style.opacity = "0";
      imgLindblad.style.opacity = "1";

    }

  }


  select.addEventListener(
    "change",
    update
  );

  update();

});


// =====================================================
// 🏎️ HALL DA FAMA RACING BULLS
// =====================================================

const bg1RB =
document.querySelector(".bg1-rb");

const bg2RB =
document.querySelector(".bg2-rb");

const cardsRB =
document.querySelectorAll(".hall-card-rb");

const hallRB =
document.querySelector(".hall-rb");

const gridRB =
document.querySelector(".hall-grid-rb");

if(
  bg1RB &&
  bg2RB &&
  cardsRB.length > 0
){

  let currentRB = bg1RB;
  let nextRB = bg2RB;

  // =====================================
  // TROCA DE FUNDO
  // =====================================

  function changeBackgroundRB(img){

    if(!img) return;

    nextRB.style.backgroundImage =
    `url('${img}')`;

    nextRB.classList.add("active");

    currentRB.classList.remove("active");

    let temp = currentRB;

    currentRB = nextRB;
    nextRB = temp;

  }

  // inicia com primeiro card
  changeBackgroundRB(
    cardsRB[0].dataset.bg
  );

  // =====================================
  // EVENTOS
  // =====================================

  cardsRB.forEach(card => {

    const img = card.dataset.bg;

    // HOVER PC
    card.addEventListener(
      "mouseenter",
      () => {

        hallRB.classList.add(
          "showcase"
        );

        changeBackgroundRB(img);

      }
    );

    // CLICK MOBILE
    card.addEventListener(
      "click",
      () => {

        gridRB.classList.add(
          "active"
        );

        cardsRB.forEach(c => {
          c.classList.remove(
            "active"
          );
        });

        card.classList.add(
          "active"
        );

        hallRB.classList.add(
          "showcase"
        );

        changeBackgroundRB(img);

      }
    );

  });

  // =====================================
  // REMOVE SHOWCASE AO SAIR
  // =====================================

  hallRB.addEventListener(
    "mouseleave",
    () => {

      hallRB.classList.remove(
        "showcase"
      );

      gridRB.classList.remove(
        "active"
      );

      cardsRB.forEach(c => {
        c.classList.remove(
          "active"
        );
      });

    }
  );

}





const carsDataRB = {

  "2000": {
    image:"hallrb/2006.png",
    name:"Toro Rosso STR1",
    engine:"Cosworth TJ2005 V10",
    power:"~900 HP",
    year:"2006",
    driver:"Liuzzi <br> Speed"
  },


  "2010": {
    image:"hallrb/2010.png",
    name:"Toro Rosso STR11",
    engine:"Ferrari 059/3 V6 Turbo",
    power:"~850 HP",
    year:"2016",
    driver:"Sainz <br> Verstappen"
  },


  "2020": {
    image:"hallrb/2025.png",
    name:"Racing Bulls VCARB 02",
    engine:"Honda RBPT",
    power:"~1000 HP",
    year:"2025",
    driver:"Lawson <br> Hadjar"
  }

};

function changeEraRB(era){

  const section =
  document.getElementById("rbEvolution");

  const img =
  document.getElementById("carImage-rb");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-2000",
    "bg-2010",
    "bg-2020"
  );

  section.classList.add(`bg-${era}`);

  setTimeout(() => {

    const data = carsDataRB[era];

    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-rb").innerText =
    data.name;

    document.getElementById("carEngine-rb").innerText =
    data.engine;

    document.getElementById("carPower-rb").innerText =
    data.power;

    document.getElementById("carYear-rb").innerText =
    data.year;

    document.getElementById("carDriver-rb").innerHTML =
    data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}

window.changeEraRB = changeEraRB;