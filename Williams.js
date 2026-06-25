// =====================================================
// 🏁 WILLIAMS PAGE JS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {


// =====================================================
// 🌌 PARALLAX BG NÚMEROS
// =====================================================

window.addEventListener("scroll", () => {

  const secao = document.querySelector(".numeros-williams");
  const bg = document.querySelector(".bg-numeros-williams");

  if(!secao || !bg) return;

  const rect = secao.getBoundingClientRect();
  const alturaTela = window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){

    let progresso = rect.top / alturaTela;

    bg.style.transform =
    `translateY(${progresso * 80}px) scale(1.05)`;

  }

});


// =====================================================
// 🔥 ANIMAÇÃO DOS CARDS + CONTADOR
// =====================================================

const cards = document.querySelectorAll(".animar-williams");

function animarCards(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
        card.querySelector(".contador-williams");

        const barra =
        card.querySelector(".barra-velocidade-williams");

        if(!contador || contador.classList.contains("contado")) return;

        contador.classList.add("contado");

        const target =
        +contador.getAttribute("data-target");

        let count = 0;

        function update(){

          const increment = target / 200;

          if(count < target){

            count += increment;

            contador.innerText = Math.floor(count);

            if(barra){
              barra.style.width =
              (count/target*100) + "%";
            }

            setTimeout(update,40);

          }else{

            contador.innerText = target;

            if(barra){
              barra.style.width = "100%";
            }

          }

        }

        update();

      }, index * 300);

    }

  });

}

window.addEventListener("scroll", animarCards);

animarCards();


// =====================================================
// ✨ ANIMAÇÃO TÍTULO
// =====================================================

window.addEventListener("scroll", ()=>{

  const titulo =
  document.querySelector(".titulo-animar-williams");

  if(!titulo) return;

  const pos = titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});


window.addEventListener("scroll", ()=>{

const itens = document.querySelectorAll(".conteudo-timeline-williams");
const linha = document.querySelector(".linha-centro-williams");
const secao = document.querySelector(".timeline-williams");

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

const pontos = document.querySelectorAll(".ponto-williams");
const progresso = document.querySelector(".linha-progresso-williams");
const luz = document.querySelector(".luz-williams");
const linha = document.querySelector(".linha-box-williams");

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

const pontos = document.querySelectorAll(".timeline-williams-car .ponto-car-williams");
const progresso = document.querySelector(".timeline-williams-car .linha-progresso-car-williams");
const luz = document.querySelector(".timeline-williams-car .luz-car-williams");
const linha = document.querySelector(".timeline-williams-car .linha-box-car-williams");

if(!pontos.length || !progresso || !luz || !linha) return;

let i = 0;

function animarTimeline(){

if(i >= pontos.length) return;

const ponto = pontos[i];

const foto = ponto.querySelector(".foto-car-williams, .foto-car-williams");
const info = ponto.querySelector(".info-car-williams, .info-car-williams");

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





// ===========================================

// =====================================================
// 📖 ERAS WILLIAMS
// =====================================================

const erasWilliams = [

{
titulo: "Capítulo I – Fundação e primeiros sucessos (1977-1982)",

texto: "A Williams entrou na Fórmula 1 em 1977 e rapidamente se tornou uma das equipes mais competitivas do grid. Fundada por Frank Williams e Patrick Head, a equipe cresceu rapidamente e conquistou seu primeiro título mundial de construtores em 1980. No mesmo ano, Alan Jones garantiu o título de pilotos, marcando o início de uma era vitoriosa. Em 1981, a Williams confirmou sua força com mais um título de construtores, consolidando-se como uma das principais equipes da Fórmula 1 no início da década de 80.Após esse início dominante em 1980 e a consolidação em 1981, a Williams Racing passou por um período de manutenção de competitividade, mas sem repetir o mesmo nível absoluto de domínio no topo. Em 1982, a equipe ainda se manteve entre as forças do grid, com Alan Jones se afastando da Fórmula 1 no fim de 1981 e Carlos Reutemann assumindo o papel de principal piloto. No entanto, a temporada foi mais irregular, marcada por forte concorrência de outras equipes e por um cenário técnico mais instável na categoria. Mesmo assim, a Williams continuou mostrando consistência e capacidade de disputar vitórias em alguns momentos, mantendo-se como uma equipe de ponta. Esse período entre 1980 e 1982 ajudou a consolidar a base estrutural e técnica da Williams, preparando o terreno para o crescimento ainda maior que viria na segunda metade da década, quando a equipe voltaria a lutar regularmente por títulos mundiais com diferentes gerações de carros e motores.",

timeline: [
{ano:"1977", imagem:"tituloswil/1977.jpg", descricao:"Estreia na Fórmula 1"},
{ano:"1980", imagem:"tituloswil/fw07b.jpg", descricao:"1° título mundial"},
{ano:"1981", imagem:"tituloswil/fw07c.jpg", descricao:"Bicampeã de construtores"},
{ano:"1982", imagem:"tituloswil/keke82.jpg", descricao:"Título com Keke Rosberg"}
]
},

{
titulo: "Capítulo II – Era turbo e domínio (1983-1987)",

texto: "Durante a era dos motores turbo, a Williams continuou sendo uma das equipes mais fortes da Fórmula 1. Com motores Honda extremamente potentes, a equipe conquistou títulos de construtores em 1986 e 1987. Em 1987, Nelson Piquet garantiu o título de pilotos, consolidando o domínio da equipe nesse período. Essa fase marcou a Williams como referência técnica e competitiva no auge da era turbo. Entre 1983 e 1985, a Williams Racing passou por uma fase de transição importante. A equipe ainda utilizava motores aspirados no início da era turbo, enquanto rivais como McLaren, Ferrari e Renault já exploravam melhor a nova tecnologia. Mesmo assim, a Williams manteve boa competitividade com o chassi eficiente projetado por Patrick Head e continuou somando pódios e vitórias ocasionais. A virada veio com a chegada da parceria com a Honda em 1985, que mudou completamente o nível da equipe. O desenvolvimento do conjunto chassis-motor colocou a Williams entre as forças dominantes do grid novamente. A partir daí, a equipe voltou a brigar diretamente por títulos, culminando na forte campanha de 1986 e no domínio ainda mais consistente de 1987. Esse período também consolidou a Williams como uma das equipes mais avançadas tecnicamente da Fórmula 1, com foco em aerodinâmica, confiabilidade e integração perfeita entre motor e chassis — elementos que seriam fundamentais para o sucesso contínuo nos anos seguintes.",

timeline: [
{ano:"1986", imagem:"tituloswil/fw11.jpg", descricao:"Título com motor Honda"},
{ano:"1987", imagem:"tituloswil/piquet87.jpg", descricao:"Piquet campeão"},
{ano:"1987", imagem:"tituloswil/fw11b.jpg", descricao:"Domínio consolidado"}
]
},

{
titulo: "Capítulo III – Auge absoluto (1992-1997)",

texto: "A partir de 1990, a Williams Racing entrou em uma das fases mais dominantes da história da Fórmula 1. A equipe já vinha de um trabalho técnico muito forte no final dos anos 80 e rapidamente se consolidou como referência absoluta em inovação, especialmente em aerodinâmica e suspensão ativa. O grande salto de desempenho veio com o FW14 e principalmente o FW14B, que trouxe tecnologias avançadas como suspensão ativa, controle de tração e sistemas eletrônicos que colocaram a Williams muito à frente das rivais. Em 1992, Nigel Mansell dominou a temporada e conquistou o título de pilotos com autoridade, enquanto a equipe levou o campeonato de construtores. Em 1993, mesmo com mudanças de pilotos e a saída de Mansell, a Williams manteve o nível altíssimo de desempenho. Alain Prost venceu o campeonato de pilotos com o FW15C, garantindo mais um título para a equipe e reforçando o domínio técnico da era. Mesmo com a saída de figuras importantes, a Williams conseguiu se adaptar aos novos regulamentos e continuou no topo. Em 1994, após uma temporada marcada por desafios e reconstrução, a equipe ainda assim permaneceu competitiva, enquanto em 1996 Damon Hill conquistou o título mundial de pilotos com o FW18, confirmando a força do projeto técnico da equipe. Em 1997, a Williams encerrou essa era dourada com Jacques Villeneuve campeão mundial e mais um título de construtores, consolidando esse período como o auge absoluto da equipe na Fórmula 1, tanto em desempenho quanto em consistência competitiva.",

timeline: [
{ano:"1992", imagem:"tituloswil/fw14b.jpg", descricao:"Domínio absoluto"},
{ano:"1993", imagem:"tituloswil/fw15c.jpeg", descricao:"Tecnologia avançada"},
{ano:"1994", imagem:"tituloswil/fw16.jpeg", descricao:"Título de construtores"},
{ano:"1996", imagem:"hallwil/hill.jpeg", descricao:"Hill campeão"},
{ano:"1997", imagem:"tituloswil/fw19.webp", descricao:"Último título"}
]
},

{
titulo: "Capítulo IV – Declínio e dificuldades (1998-2013)",

texto: "Entre 1998 e 2013, a Williams Racing entrou em uma fase de transição e queda gradual após o auge dos anos 90, quando dominava a Fórmula 1. Com as mudanças de regulamento, evolução aerodinâmica das rivais e a saída de parceiros técnicos importantes, a equipe passou a enfrentar um grid muito mais competitivo e equilibrado. No início desse período, a Williams ainda conseguiu manter algum nível de competitividade, especialmente em 1998 e 1999, quando seguiu brigando por vitórias ocasionais. Porém, a virada dos anos 2000 trouxe novos desafios. A parceria com a BMW em 2000 elevou o desempenho do time em alguns momentos, mas não foi suficiente para repetir o domínio do passado, já que a Ferrari e posteriormente a McLaren e Renault passaram a liderar a era. Durante os anos seguintes, a Williams viveu altos e baixos, alternando temporadas medianas com alguns pódios esporádicos, mas sem voltar à disputa real por títulos. Mesmo com pilotos talentosos como Juan Pablo Montoya, Ralf Schumacher e Mark Webber, a equipe não conseguiu acompanhar o ritmo de desenvolvimento das principais rivais. A partir de 2005, com o fim da parceria com a BMW, a situação ficou ainda mais difícil. A Williams passou a competir com recursos mais limitados e motores menos competitivos, entrando em uma fase de reconstrução. Ainda assim, manteve sua presença histórica na Fórmula 1, apostando em desenvolvimento próprio e novos talentos. Em 2012, a equipe viveu um raro momento de brilho com a vitória de Pastor Maldonado em Barcelona, marcando uma das últimas grandes conquistas desse período. Já em 2013, a Williams enfrentou mais uma temporada difícil, encerrando essa era ainda em busca de recuperação e estabilidade competitiva na era moderna da Fórmula 1.",

timeline: [
{ano:"1998", imagem:"tituloswil/1998.jpeg", descricao:"Fim do domínio"},
{ano:"2003", imagem:"tituloswil/2003.jpeg", descricao:"Última grande temporada"},
{ano:"2012", imagem:"tituloswil/2012.jpeg", descricao:"Última vitória até hoje"}
]
},

{
titulo: "Capítulo V – Nova era e reconstrução (2014-2025)",

texto: "Com a introdução dos motores híbridos em 2014, a Williams teve um breve retorno à competitividade. Utilizando unidades de potência Mercedes, a equipe conseguiu bons resultados e voltou a lutar regularmente por pódios. Em 2014 e 2015, a Williams viveu seu melhor momento da era moderna recente, com carros rápidos em classificações e forte desempenho em circuitos de baixa e média degradação. No entanto, a partir de 2016, a equipe começou a perder terreno para rivais que evoluíam mais rapidamente em aerodinâmica e desenvolvimento. Mesmo com pilotos experientes e jovens talentos, a Williams passou a enfrentar dificuldades para pontuar com consistência, entrando em uma fase de reconstrução estrutural e financeira. Entre 2018 e 2020, a equipe viveu um dos períodos mais difíceis de sua história, frequentemente ocupando o fim do grid. Apesar disso, a Williams manteve sua tradição de resiliência, passando por mudanças internas importantes de gestão e investimento para tentar recuperar competitividade. A partir de 2021, com a nova administração, a equipe iniciou uma reestruturação mais sólida, focando em eficiência, desenvolvimento gradual e preparação para o novo regulamento técnico da Fórmula 1. Mesmo ainda fora da disputa por pódios frequentes, a Williams começou a mostrar sinais de recuperação. Em 2023 e 2024, a equipe voltou a marcar presença mais consistente na zona de pontos, com destaque para Alexander Albon e novos projetos de desenvolvimento do carro. Já em 2025, a Williams segue em processo de evolução, ainda distante do topo, mas com uma base mais estável e uma estratégia de longo prazo para voltar a competir entre as equipes de frente no futuro da Fórmula 1.",

timeline: [
{ano:"2014", imagem:"tituloswil/2014.jpg", descricao:"Retorno ao pódio"},
{ano:"2015", imagem:"tituloswil/2015.jpeg", descricao:"Boa fase"},
{ano:"2019", imagem:"tituloswil/2019.jpg", descricao:"Pior fase"},
{ano:"2025", imagem:"tituloswil/2025.jpg", descricao:"Nova fase"}
]
}

];


// =====================================================
// 🔥 MOSTRAR ERA
// =====================================================
function mostrarEra(index) {

    document.getElementById("tituloEra-williams").innerText =
    erasWilliams[index].titulo;

    document.getElementById("textoEra-williams").innerText =
    erasWilliams[index].texto;

    const timelineContainer =
    document.getElementById("williams-timeline");

    timelineContainer.innerHTML = "";

    erasWilliams[index].timeline.forEach(item => {

        timelineContainer.innerHTML += `
            <div class="williams-timeline-item">

                <div class="williams-timeline-year">
                    ${item.ano}
                </div>

                <img src="${item.imagem}" alt="">

                <p>${item.descricao}</p>

            </div>
        `;

    });

}


// 🔥 deixa global pro onclick funcionar
globalThis.mostrarEra = mostrarEra;


// Mostra a primeira era automaticamente
mostrarEra(0);


// =====================================================
// 🍔 MENU WILLIAMS
// =====================================================

const toggleWilliams =
document.getElementById("menuToggleWilliams");

const menuWilliams =
document.getElementById("sideMenuWilliams");

const overlayWilliams =
document.getElementById("overlayWilliams");

const closeWilliams =
document.getElementById("closeMenuWilliams");

const linksMenuWilliams =
document.querySelectorAll(".side-menu-williams a");


// ABRIR MENU
if(toggleWilliams){

  toggleWilliams.addEventListener("click", ()=>{

    menuWilliams.classList.add("active");
    overlayWilliams.classList.add("active");

  });

}


// FECHAR MENU
function fecharMenuWilliams(){

  menuWilliams.classList.remove("active");
  overlayWilliams.classList.remove("active");

}


// BOTÃO X
if(closeWilliams){

  closeWilliams.addEventListener("click", ()=>{

    fecharMenuWilliams();

  });

}


// OVERLAY
if(overlayWilliams){

  overlayWilliams.addEventListener("click", ()=>{

    fecharMenuWilliams();

  });

}


// LINKS
linksMenuWilliams.forEach(link=>{

  link.addEventListener("click", ()=>{

    fecharMenuWilliams();

  });

});


});

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



document.addEventListener("DOMContentLoaded", () => {

  const imgSainz =
  document.getElementById("img-sainz");

  const imgAlbon =
  document.getElementById("img-albon");


  const data = {

    sainz: {

      2015: 18,
      2016: 46,
      2017: 54,
      2018: 53,
      2019: 96,
      2020: 105,
      2021: 164,
      2022: 246,
      2023: 200,
      2024: 290,
      2025: 64

    },

    albon: {

      2019: 92,
      2020: 105,
      2022: 4,
      2023: 27,
      2024: 68,
      2025: 73

    }

  };


  const chart =
  document.getElementById("chart-williams");

  const select =
  document.getElementById("pilotEvoSelect-williams");


  if(!chart || !select) return;


  function getCommonSeasons(){

    return Object.keys(data.sainz).filter(y =>

      Object.keys(data.albon).includes(y)

    );

  }


  function render(seasons, mode){

    chart.innerHTML = "";

    const sValues =
    seasons.map(y => data.sainz[y] || 0);

    const aValues =
    seasons.map(y => data.albon[y] || 0);

    const max =
    Math.max(...sValues, ...aValues);


    seasons.forEach((year, i) => {

      const s = sValues[i];
      const a = aValues[i];

      const group =
      document.createElement("div");

      group.className =
      "bar-group-williams";


      group.innerHTML = `

        <span class="label-williams">
          ${year}
        </span>

        <div class="bars-row-williams">

          <div class="bar-wrap-williams">

            <span class="bar-value sainz-val">
              0
            </span>

            <div class="bar-williams sainz"></div>

          </div>

          <div class="bar-wrap-williams">

            <span class="bar-value albon-val">
              0
            </span>

            <div class="bar-williams albon"></div>

          </div>

        </div>

        <div class="diff-williams"></div>

      `;


      chart.appendChild(group);


      const sBar =
      group.querySelector(".sainz");

      const aBar =
      group.querySelector(".albon");


      const sVal =
      group.querySelector(".sainz-val");

      const aVal =
      group.querySelector(".albon-val");


      const diffEl =
      group.querySelector(".diff-williams");


      setTimeout(() => {

        /* ALTURA */
        if(mode === "both"){

          sBar.style.height =
          (s / max * 100) + "%";

          aBar.style.height =
          (a / max * 100) + "%";

        }

        if(mode === "sainz"){

          sBar.style.height =
          (s / max * 100) + "%";

        }

        if(mode === "albon"){

          aBar.style.height =
          (a / max * 100) + "%";

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
        sVal.style.opacity = "1";
        aVal.style.opacity = "1";


        /* ESCONDER */
        if(mode === "sainz"){

          aVal.style.opacity = "0";

        }

        if(mode === "albon"){

          sVal.style.opacity = "0";

        }


        /* ANIMAR */
        if(mode !== "albon"){

          animateValue(sVal, s);

        }

        if(mode !== "sainz"){

          animateValue(aVal, a);

        }


        /* COMPARAÇÃO */
        if(mode === "both"){

          const diff =
          Math.abs(s - a);

          if(s > a){

            sBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Sainz`;

          }

          if(a > s){

            aBar.classList.add("winner");

            diffEl.textContent =
            `+${diff} Albon`;

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

    if(mode === "sainz"){

      render(
        Object.keys(data.sainz),
        "sainz"
      );

    }

    if(mode === "albon"){

      render(
        Object.keys(data.albon),
        "albon"
      );

    }


    /* ===== IMAGENS ===== */
    if(mode === "both"){

      imgSainz.style.opacity = "1";
      imgAlbon.style.opacity = "1";

    }

    if(mode === "sainz"){

      imgSainz.style.opacity = "1";
      imgAlbon.style.opacity = "0";

    }

    if(mode === "albon"){

      imgSainz.style.opacity = "0";
      imgAlbon.style.opacity = "1";

    }

  }


  select.addEventListener(
    "change",
    update
  );

  update();

});

// =====================================================
// 🏎️ HALL DA FAMA WILLIAMS
// =====================================================

const bg1Williams = document.querySelector(".bg1-williams");
const bg2Williams = document.querySelector(".bg2-williams");

const cardsWilliams = document.querySelectorAll(".hall-card-williams");

if(bg1Williams && bg2Williams && cardsWilliams.length > 0){

  let currentWilliams = bg1Williams;
  let nextWilliams = bg2Williams;

  function changeBackgroundWilliams(img){

    if(!img) return;

    nextWilliams.style.backgroundImage = `url('${img}')`;

    nextWilliams.classList.add("active");

    currentWilliams.classList.remove("active");

    let temp = currentWilliams;

    currentWilliams = nextWilliams;
    nextWilliams = temp;
  }

  // inicia com o primeiro card
  changeBackgroundWilliams(cardsWilliams[0].dataset.bg);

  cardsWilliams.forEach(card => {

    const img = card.dataset.bg;

    card.addEventListener("mouseenter", () => {
      changeBackgroundWilliams(img);
    });

    card.addEventListener("click", () => {

      cardsWilliams.forEach(c => {
        c.classList.remove("active");
      });

      card.classList.add("active");

      changeBackgroundWilliams(img);

    });

  });

}

const carsDataWilliams = {

  "1980s": {
    image:"hallwil/fw06b.png",
    name:"Williams FW07B",
    engine:"Ford Cosworth DFV",
    power:"~480 HP",
    year:"1980",
    driver:"Jones <br> Reutemann"
  },

   "1990s": {
    image: "tituloswil/fw19.png",
    name: "Williams FW19",
    engine: "Renault RS9 V10",
    power: "~750 HP",
    year: "1997",
    driver: "Villeneuve <br> Frentzen"
  },

  "2000s": {
    image: "hallwil/fw22.png",
    name: "Williams FW22",
    engine: "BMW P80 V10",
    power: "~800 HP",
    year: "2000",
    driver: "Ralf Schumacher <br> Jenson Button"
  },

  "2010s": {
    image: "hallwil/fw34.png",
    name: "Williams FW34",
    engine: "Renault RS27 V8",
    power: "~750 HP",
    year: "2012",
    driver: "Maldonado <br> Bruno Senna"
  },

  "2020s": {
    image: "hallwil/fw47.png",
    name: "Williams FW47",
    engine: "Mercedes-AMG F1 M14 E Performance",
    power: "~1000 HP",
    year: "2025",
    driver: "Albon <br> Sainz"
  }

};

function changeDecadeWilliams(decade){

  const section = document.getElementById("williamsEvolution");
  const img = document.getElementById("carImage-williams");

  img.style.opacity = 0;
  img.style.transform = "scale(.85)";

  section.classList.remove(
    "bg-1980s",
    "bg-1990s",
    "bg-2000s",
    "bg-2010s",
    "bg-2020s"
  );

  section.classList.add(`bg-${decade}`);

  setTimeout(() => {

    const data = carsDataWilliams[decade];
    if(!data) return;

    img.src = data.image;

    document.getElementById("carName-williams").innerText = data.name;
    document.getElementById("carEngine-williams").innerText = data.engine;
    document.getElementById("carPower-williams").innerText = data.power;
    document.getElementById("carYear-williams").innerText = data.year;
    document.getElementById("carDriver-williams").innerHTML = data.driver;

    img.style.opacity = 1;
    img.style.transform = "scale(1)";

  },250);

}

window.changeDecadeWilliams = changeDecadeWilliams;