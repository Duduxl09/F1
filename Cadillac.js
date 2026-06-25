const erascadillac = [

{
titulo: "Capítulo I – Entrada na Fórmula 1 (2023–2026)",
texto: "A entrada da Cadillac na Fórmula 1 começou a ser planejada em 2023, quando a General Motors se uniu à Andretti Global com o objetivo de criar uma equipe americana na categoria. Apesar de receber aprovação inicial da FIA, o projeto enfrentou resistência da Fórmula 1 e das equipes existentes. Após reformulações e maior envolvimento direto da General Motors, a entrada foi oficialmente aprovada em 2025, confirmando a Cadillac como a 11ª equipe do grid a partir de 2026.",
timeline: [
{ano:"2023", imagem:"cadillac/andretti.jpg", descricao:"Anúncio da parceria com Andretti"},
{ano:"2025", imagem:"cadillac/confirmed.jpeg", descricao:"Entrada oficial confirmada na F1"},
{ano:"2025", imagem:"cadillac/drivers.jpeg", descricao:"Anuncio dos Pilotos"},
{ano:"2026", imagem:"cadillac/first.jpeg", descricao:"Estreia no grid da Fórmula 1"}
]
},

{
titulo: "Capítulo II – Estrutura e Desenvolvimento",
texto: "A Cadillac chega à Fórmula 1 com um projeto sólido liderado pela General Motors. A equipe investiu em infraestrutura, incluindo fábricas e centros de engenharia nos Estados Unidos e na Europa. Nos primeiros anos, utilizará unidades de potência fornecidas por outra fabricante, enquanto trabalha no desenvolvimento de seu próprio motor, com foco no futuro da categoria.",
timeline: [
{ano:"2024", imagem:"cadillac/infra.jpeg", descricao:"Investimento em infraestrutura"},
{ano:"2025", imagem:"cadillac/team.jpg", descricao:"Formação da equipe técnica"},
{ano:"2026", imagem:"cadillac/estreia.jpeg", descricao:"Desenvolvimento do primeiro carro"}
]
},

{
titulo: "Capítulo III – Futuro e Consolidação",
texto: "A Cadillac entra na Fórmula 1 com uma visão de longo prazo, buscando se estabelecer gradualmente como uma equipe competitiva. O projeto representa a expansão da presença americana na categoria e aposta em inovação, tecnologia e desenvolvimento contínuo para alcançar melhores resultados ao longo dos anos.",
timeline: [
{ano:"Futuro", imagem:"cadillac/enginer.jpeg", descricao:"Desenvolvimento de motor próprio"}
]
}

];

function mostrarEra(index) {
    document.getElementById("tituloEra-cadillac").innerText = erascadillac[index].titulo;
    document.getElementById("textoEra-cadillac").innerText = erascadillac[index].texto;

    const timelineContainer = document.getElementById("cadillac-timeline");
    timelineContainer.innerHTML = "";

    erascadillac[index].timeline.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cadillac-timeline-item");

        div.innerHTML = `
            <div class="cadillac-timeline-year">${item.ano}</div>
            <img src="${item.imagem}" alt="">
            <p>${item.descricao}</p>
        `;

        timelineContainer.appendChild(div);
    });

    const botoes = document.querySelectorAll(".botoes-eras-cadillac button");
    botoes.forEach(btn => btn.classList.remove("ativo"));

    if (botoes[index]) {
        botoes[index].classList.add("ativo");
    }
}

// inicia automático
mostrarEra(0);


const togglecadillac = document.getElementById("menuTogglecadillac");
const menucadillac = document.getElementById("sideMenucadillac");
const overlaycadillac = document.getElementById("overlaycadillac");
const closecadillac = document.getElementById("closeMenucadillac");

const linksMenucadillac = document.querySelectorAll(".side-menu-cadillac a");

function fecharMenucadillac() {
  if (menucadillac) menucadillac.classList.remove("active");
  if (overlaycadillac) overlaycadillac.classList.remove("active");
}

if (togglecadillac) {
  togglecadillac.addEventListener("click", () => {
    menucadillac?.classList.add("active");
    overlaycadillac?.classList.add("active");
  });
}

if (closecadillac) {
  closecadillac.addEventListener("click", fecharMenucadillac);
}

if (overlaycadillac) {
  overlaycadillac.addEventListener("click", fecharMenucadillac);
}

linksMenucadillac.forEach(link => {
  link.addEventListener("click", fecharMenucadillac);
});

(function scrollLinkscadillac() {

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

  const imgPeres =
  document.getElementById("img-Peres");

  const imgBottas =
  document.getElementById("img-Bottas");

  /* ===================================
     DADOS DOS PILOTOS
  =================================== */
  const data = {

  Peres: {

  2011: 14,
  2012: 66,
  2013: 49,
  2014: 59,
  2015: 78,
  2016: 101,
  2017: 100,
  2018: 62,
  2019: 52,
  2020: 125,
  2021: 190,
  2022: 305,
  2023: 285,
  2024: 152

},

Bottas: {

  2013: 4,
  2014: 186,
  2015: 136,
  2016: 85,
  2017: 305,
  2018: 247,
  2019: 326,
  2020: 223,
  2021: 226,
  2022: 49,
  2023: 10,
  2024: 24

}

  };


  const chart =
  document.getElementById("chart-cadillac");

  const select =
  document.getElementById("pilotEvoSelect-cadillac");

  if(!chart || !select) return;


  /* ===================================
     TEMPORADAS EM COMUM
  =================================== */
  function getCommonSeasons(){

    return Object.keys(data.Peres).filter(y =>

      Object.keys(data.Bottas).includes(y)

    );

  }


  /* ===================================
     RENDER
  =================================== */
  function render(seasons, mode){

    chart.innerHTML = "";

    const aValues =
    seasons.map(y => data.Peres[y] || 0);

    const sValues =
    seasons.map(y => data.Bottas[y] || 0);

    const max =
    Math.max(...aValues, ...sValues, 1);


    seasons.forEach((year, i) => {

      const Peres = aValues[i];
      const Bottas = sValues[i];

      const group =
      document.createElement("div");

      group.className =
      "bar-group-cadillac";


      group.innerHTML = `

        <span class="label-cadillac">
          ${year}
        </span>

        <div class="bars-row-cadillac">

          <div class="bar-wrap-cadillac">

            <span class="bar-value Peres-val">
              0
            </span>

            <div class="bar-cadillac Peres"></div>

          </div>

          <div class="bar-wrap-cadillac">

            <span class="bar-value Bottas-val">
              0
            </span>

            <div class="bar-cadillac Bottas"></div>

          </div>

        </div>

        <div class="diff-cadillac"></div>

      `;


      chart.appendChild(group);


      const PeresBar =
      group.querySelector(".Peres");

      const BottasBar =
      group.querySelector(".Bottas");


      const PeresVal =
      group.querySelector(".Peres-val");

      const BottasVal =
      group.querySelector(".Bottas-val");


      const diffEl =
      group.querySelector(".diff-cadillac");


      setTimeout(() => {

        /* ALTURA */
        if(mode === "both"){

          PeresBar.style.height =
          (Peres / max * 100) + "%";

          BottasBar.style.height =
          (Bottas / max * 100) + "%";

        }

        if(mode === "Peres"){

          PeresBar.style.height =
          (Peres / max * 100) + "%";

        }

        if(mode === "Bottas"){

          BottasBar.style.height =
          (Bottas / max * 100) + "%";

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
        PeresVal.style.opacity = "1";
        BottasVal.style.opacity = "1";


        /* ESCONDER */
        if(mode === "Peres"){

          BottasVal.style.opacity = "0";

        }

        if(mode === "Bottas"){

          PeresVal.style.opacity = "0";

        }


        /* ANIMAR */
        if(mode !== "Bottas"){

          animateValue(PeresVal, Peres);

        }

        if(mode !== "Peres"){

          animateValue(BottasVal, Bottas);

        }


        /* COMPARAÇÃO */
        if(mode === "both"){

          const diff =
          Math.abs(Peres - Bottas);

          if(Peres > Bottas){

            PeresBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Peres`;

          }

          if(Bottas > Peres){

            BottasBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Bottas`;

          }

          if(Peres === Bottas){

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

    if(mode === "Peres"){

      render(
        Object.keys(data.Peres),
        "Peres"
      );

    }

    if(mode === "Bottas"){

      render(
        Object.keys(data.Bottas),
        "Bottas"
      );

    }


    /* IMAGENS */
    if(mode === "both"){

      imgPeres.style.opacity = "1";
      imgBottas.style.opacity = "1";

    }

    if(mode === "Peres"){

      imgPeres.style.opacity = "1";
      imgBottas.style.opacity = "0";

    }

    if(mode === "Bottas"){

      imgPeres.style.opacity = "0";
      imgBottas.style.opacity = "1";

    }

  }


  select.addEventListener(
    "change",
    update
  );

  update();

});
