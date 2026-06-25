document.addEventListener("DOMContentLoaded", function(){

const som = new Audio("f1.mp3");
som.volume = 0.5;

const diasF1 = [

{
  titulo:"Quinta-feira – Press Conference",
  texto:"Os pilotos falam com a imprensa antes do início das atividades.",
  barras:[60,50,40]
},

{
  titulo:"Sexta-feira – Treinos Livres",
  texto:"TL1 e TL2 servem para testar o carro e coletar dados.",
  barras:[80,70,60]
},

{
  titulo:"Sábado – Classificação",
  texto:"Q1, Q2 e Q3 definem o grid de largada.",
  barras:[95,90,85]
},

{
  titulo:"Domingo – Corrida",
  texto:"Corrida principal com estratégia e disputa intensa.",
  barras:[100,95,90]
}

];

let diaAtual = null;

function abrirDia(index){

  som.currentTime = 0;
  som.play();

  const hud = document.getElementById("cardDia");

  if(diaAtual === index){
    hud.classList.remove("ativo");
    document.querySelectorAll(".dia").forEach(d => d.classList.remove("ativo"));
    diaAtual = null;
    return;
  }

  const d = diasF1[index];

  document.getElementById("tituloDia").innerText = d.titulo;
  document.getElementById("textoDia").innerText = d.texto;

  hud.classList.add("ativo");

  setTimeout(()=>{
    document.getElementById("bar1").style.width = d.barras[0]+"%";
    document.getElementById("bar2").style.width = d.barras[1]+"%";
    document.getElementById("bar3").style.width = d.barras[2]+"%";
  },100);

  document.querySelectorAll(".dia").forEach(d => d.classList.remove("ativo"));
  document.querySelectorAll(".evento")[index].classList.add("ativo");

  diaAtual = index;
}

window.abrirDia = abrirDia;

});




document.addEventListener("DOMContentLoaded", function(){

  const pilotos = [
    "Norris","Piastri","Russel","Antonelli",
    "Verstappen","Hadjar","Lecrerc","Hamilton",
    "Sainz","Albon","Lawson","Lindbland",
    "Alonso","Stroll","Ocon","Bearman",
    "Hulkenberg","Bortoleto","Gasly","Colapinto","Bottas","Peres"
  ];

  const lista = document.getElementById("listaPilotosQualy");

  function renderPilotos(){
    lista.innerHTML = "";

    pilotos.forEach((nome, i)=>{
      lista.innerHTML += `
        <div class="linha-piloto">
          <span class="qualy-pos">${i+1}</span>
          <span class="qualy-nome">${nome}</span>
        </div>
      `;
    });
  }

  renderPilotos();

  window.mostrarQualy = function(fase){

    const linhas = document.querySelectorAll(".linha-piloto");

    linhas.forEach(l => {
      l.classList.remove("out","top");
    });

    let texto = "";

    if(fase === 1){
      texto = "Q1:22 pilotos participam...";
    }

    if(fase === 2){
      texto = "Q2: Restam 16 pilotos...";
    }

    if(fase === 3){
      texto = "Q3: disputa pela pole.";
    }

    linhas.forEach((l, i)=>{

      if(fase === 1 && i >= 16) l.classList.add("out");
      if(fase === 2 && i >= 10) l.classList.add("out");
      if(fase === 3 && i >= 10) l.classList.add("out");

    });

    if(fase === 2 || fase === 3){
      linhas.forEach((l, i)=>{
        if(i < 10){
          l.classList.add("top");
        }
      });
    }

    document.getElementById("titulo-qualy").innerText = "Q" + fase;
    document.getElementById("explicacao-qualy").innerText = texto;

    document.body.classList.remove("q1-ativo","q2-ativo","q3-ativo");
    document.body.classList.add("q" + fase + "-ativo");

  }

});




document.addEventListener("DOMContentLoaded", function(){
const pontos = {
  corrida: [25,18,15,12,10,8,6,4,2,1],
  sprint: [8,7,6,5,4,3,2,1]
};

// define cor
function getClasse(index){
  if(index === 0) return "gold-pontuacao";
  if(index === 1) return "silver-pontuacao";
  if(index === 2) return "bronze-pontuacao";
  return "white-pontuacao";
}

// anima barra + número juntos
function animarBarraNumero(bar, numeroEl, valorFinal, valorMax){

  const duracao = 3000; // ⬅️ tempo total (2 segundos)
  const inicio = performance.now();

  function animar(tempoAtual){

    const tempoDecorrido = tempoAtual - inicio;
    let progresso = tempoDecorrido / duracao;

    if(progresso > 1) progresso = 1;

    const valorAtual = valorFinal * progresso;

    numeroEl.innerText = Math.floor(valorAtual);

    bar.style.width = (valorAtual / valorMax * 100) + "%";

    if(progresso < 1){
      requestAnimationFrame(animar);
    }

  }

  requestAnimationFrame(animar);
}

function trocarPontuacao(tipo, event){

  const container = document.getElementById("telemetria-pontuacao");
  container.innerHTML = "";

  pontos[tipo].forEach((p,i)=>{

    const classe = getClasse(i);

    container.innerHTML += `
      <div class="linha-pontuacao">
        <span>P${i+1}</span>
        <div class="barra-pontuacao">
          <div class="barra-fill-pontuacao ${classe}"></div>
        </div>
        <small class="numero-pontuacao">0</small>
      </div>
    `;
  });

  // botão ativo
  document.querySelectorAll(".btn-pontuacao").forEach(b => b.classList.remove("ativo"));
  if(event) event.target.classList.add("ativo");

  // anima tudo
  setTimeout(()=>{

    const barras = document.querySelectorAll(".barra-fill-pontuacao");
    const numeros = document.querySelectorAll(".numero-pontuacao");

    const max = pontos[tipo][0];

    barras.forEach((bar,i)=>{

      const valorFinal = pontos[tipo][i];

      // anima com delay tipo "largada"
      setTimeout(()=>{
        animarBarraNumero(bar, numeros[i], valorFinal, max);
      }, i * 120);

    });

  },100);

}

// deixa acessível pro HTML
window.trocarPontuacao = trocarPontuacao;

// inicia automático
trocarPontuacao("corrida");

});


// =========================
// DADOS DOS PNEUS
// =========================
const pneus = [

{
  nome:"Soft",
  desc:"Ideal para voltas rápidas e classificação",
  cor:"#ff2e2e",
  desgaste:0.7,
  stats:[95,40,100],
  img:"pneus/macio.webp"
},

{
  nome:"Medium",
  desc:"Equilíbrio entre desempenho e durabilidade",
  cor:"#ffd800",
  desgaste:0.4,
  stats:[75,70,80],
  img:"pneus/medio.webp"
},

{
  nome:"Hard",
  desc:"Ideal para longos stints com menor desgaste",
  cor:"#ffffff",
  desgaste:0.2,
  stats:[60,95,65],
  img:"pneus/duro.webp"
},

{
  nome:"Inter",
  desc:"Usado em pista úmida ou chuva leve",
  cor:"#00ff88",
  desgaste:0.3,
  stats:[70,80,60],
  img:"pneus/inter.webp"
},

{
  nome:"Wet",
  desc:"Indicado para chuva intensa",
  cor:"#00aaff",
  desgaste:0.25,
  stats:[65,85,55],
  img:"pneus/wet.webp"
}

];

// =========================
// VARIÁVEIS
// =========================
let climaAtual = "seco";
let selecionandoCard = null;
let comparacao = [null, null];

// =========================
// SELECIONAR PNEU
// =========================
function selecionarPneu(index){

  // BLOQUEIO POR CLIMA
  if(climaAtual === "seco" && index > 2) return;
  if(climaAtual === "chuva" && index < 3) return;

  // ATUALIZA CARD PRINCIPAL
  atualizarPneuPrincipal(index);

  // SE ESTIVER ESCOLHENDO PRO COMPARADOR
  if(selecionandoCard !== null){

    comparacao[selecionandoCard] = index;
    atualizarComparacao();
    selecionandoCard = null;
  }

}

// =========================
// CARD PRINCIPAL
// =========================
function atualizarPneuPrincipal(index){

  const p = pneus[index];

  document.getElementById("imgPrincipal").src = p.img;
  document.getElementById("nomePrincipal").innerText = p.nome;
  document.getElementById("descPrincipal").innerText = p.desc;

  // anima imagem
  const img = document.getElementById("imgPrincipal");
  img.style.animation = "none";
  setTimeout(()=> img.style.animation = "girar 4s linear infinite", 50);

  // anima barras
  const grip = document.getElementById("statGrip");
const dur = document.getElementById("statDur");
const vel = document.getElementById("statVel");

grip.style.width = p.stats[0]+"%";
dur.style.width = p.stats[1]+"%";
vel.style.width = p.stats[2]+"%";

// 🔥 COR DO PNEU
grip.style.background = p.cor;
dur.style.background = p.cor;
vel.style.background = p.cor;

}

// =========================
// ABRIR SELEÇÃO DO CARD
// =========================
function abrirSelecao(cardIndex){
  selecionandoCard = cardIndex;
}

// =========================
// ATUALIZAR COMPARADOR
// =========================
function atualizarComparacao(){

  comparacao.forEach((pneuIndex, i)=>{

    const img = document.getElementById("imgComp"+i);
    const nome = document.getElementById("nomeComp"+i);
    const placeholder = document.querySelectorAll(".placeholder")[i];

    if(pneuIndex === null){
      img.style.display = "none";
      nome.innerText = "";
      placeholder.style.display = "block";
      return;
    }

    const p = pneus[pneuIndex];

    img.src = p.img;
    img.style.display = "block";
    nome.innerText = p.nome;
    placeholder.style.display = "none";
  });

  atualizarBarrasComparacao();
}

// =========================
// BARRAS DE COMPARAÇÃO
// =========================
function atualizarBarrasComparacao(){
  
  const p1 = pneus[comparacao[0]];
  const p2 = pneus[comparacao[1]];
  if(!p1 || !p2) return;

  // GRIP
  const g1 = document.getElementById("compGrip1");
  const g2 = document.getElementById("compGrip2");
  g1.style.width = p1.stats[0]+"%";
  g2.style.width = p2.stats[0]+"%";
  g1.style.background = p1.cor;
  g2.style.background = p2.cor;

  // DURABILIDADE
  const d1 = document.getElementById("compDur1");
  const d2 = document.getElementById("compDur2");
  d1.style.width = p1.stats[1]+"%";
  d2.style.width = p2.stats[1]+"%";
  d1.style.background = p1.cor;
  d2.style.background = p2.cor;

  // VELOCIDADE
  const v1 = document.getElementById("compVel1");
  const v2 = document.getElementById("compVel2");
  v1.style.width = p1.stats[2]+"%";
  v2.style.width = p2.stats[2]+"%";
  v1.style.background = p1.cor;
  v2.style.background = p2.cor;
}
// =========================
// REMOVER PNEU (DUPLO CLIQUE)
// =========================
document.querySelectorAll(".card-comp").forEach((card,i)=>{

  card.addEventListener("dblclick", ()=>{

    comparacao[i] = null;
    atualizarComparacao();

  });

});

// =========================
// CLIMA
// =========================
function mudarClima(tipo){

  climaAtual = tipo;

  document.querySelectorAll(".clima button").forEach(b=>b.classList.remove("ativo"));
  event.target.classList.add("ativo");

  // muda fundo
  document.body.style.background = tipo === "chuva" ? "#0b1a2a" : "#0a0a0a";

}

// =========================
// DESGASTE
// =========================
function simularDesgaste(){

  if(!document.getElementById("nomePrincipal").innerText) return;

  let valor = 100;

  const nome = document.getElementById("nomePrincipal").innerText;
  const pneu = pneus.find(p=>p.nome === nome);

  const barra = document.getElementById("desgaste");
  const texto = document.getElementById("textoDesgaste");

  texto.innerText = "Desgaste em andamento...";

  const intervalo = setInterval(()=>{

    valor -= pneu.desgaste * 2;

    if(valor <= 0){
      valor = 0;
      clearInterval(intervalo);
      texto.innerText = "Pneu desgastado 🔴";
    }

    barra.style.width = valor + "%";

  },100);
  
  document.addEventListener("DOMContentLoaded", function(){

  document.querySelectorAll(".card-comp").forEach((card,i)=>{

    card.addEventListener("dblclick", ()=>{

      comparacao[i] = null;
      atualizarComparacao();

    });

  });

});

}







// ==============================
// DADOS DO TOP 10 POR CORRIDA
// ==============================

const dadosCorridas = {
  australia: [
    {
      nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
    
    {
        nome: "Verstappen",
      numero: 1,
      cor: "#1E41FF",
      logo: "icons/redbull.png",
      pilotoImg: "pilotos/max.png",
      pontos:18,
         tempo:"+0.895",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
           tempo:"+8.481",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Antonelli",
      numero: 12,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/kimi.png",
      pontos:12,
        tempo:"+10.135",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Albon",
      numero: 23,
      cor: "#005AFF",
      logo: "icons/WilliamsF1.png",
      pilotoImg: "pilotos/alex.png",
      pontos:10,
        tempo:"+12.773",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:8,
        tempo:"+17.413",//LEADER
      voltaRapida:false//ou false
    },
    
        {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:6,
        tempo:"+18.423",//LEADER
      voltaRapida:false//ou false
    },

        {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:4,
       tempo:"+19.826",//LEADER
      voltaRapida:false//ou false
    },
    
    {
      nome: "Piastri",
      numero: 81,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/piastri.png",
      pontos:2,
       tempo:"+20.448",//LEADER
      voltaRapida:false//ou false
    },
    
    {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:1,
       tempo:"+22.473",//LEADER
      voltaRapida:false//ou false
    }
  ],
  china: [
   {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//true ou false
   },
   
   {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+9.748",//LEADER
      voltaRapida:true//ou false
    },
   
         {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
       tempo:"+11.097",//LEADER
      voltaRapida:false//ou false
    },
    
    {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+16.656",//LEADER
      voltaRapida:false//ou false
    },
   
      {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:10,
    tempo:"+49.969",//LEADER
      voltaRapida:false//ou false
      },
   
      {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+53.748",//LEADER
      voltaRapida:false//ou false
      },
      
         {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:6,
    tempo:"+56.321",//LEADER
      voltaRapida:false//ou false
         },
   
      {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:4,
    tempo:"+1.01.303",//LEADER
      voltaRapida:false//ou false
      },
         {
   nome: "Stroll",
   numero:18,
   cor: "#006F62",
   logo:"icons/Astonm.png",
   pilotoImg:"pilotos/stroll.png",
   pontos:2,
    tempo:"+1.10.204",//LEADER
      voltaRapida:false//ou false
         },
   
      {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+1.16.387",//LEADER
      voltaRapida:false//ou false
      }
    ],
    japao: [
      
         {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
      
        {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+1.423",//LEADER
      voltaRapida:false//ou false
    },
    
        {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:15,
      tempo:"+2.129",//LEADER
      voltaRapida:false//ou false
   },
      
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+16.097",//LEADER
      voltaRapida:false//ou false
    },
    
           {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+17.362",//LEADER
      voltaRapida:false//ou false
    },
      
          {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+18.671",//LEADER
      voltaRapida:true//ou false
      },
      
         {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:6,
       tempo:"+29.182",//LEADER
      voltaRapida:false//ou false
    },
      
         {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:4,
       tempo:"+37.134",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:2,
    tempo:"+40.367",//LEADER
      voltaRapida:false//ou false
         },
      
          {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:1,
    tempo:"+54.529",//LEADER
      voltaRapida:false//ou false
      }
      ],
      
      bahrein: [
       
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
   },
       
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:18,
       tempo:"+15.499",//LEADER
      voltaRapida:false//ou false
    },
       
            {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 15,
       tempo:"+16.273",//LEADER
      voltaRapida:false//ou false
    },
       
        
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+19.679",//LEADER
      voltaRapida:false//ou false
    },
       
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:10,
       tempo:"+27.993",//LEADER
      voltaRapida:false//ou false
    },
       
         {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:8,
    tempo:"+34.395",//LEADER
      voltaRapida:false//ou false
    },
       
         {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:6,
    tempo:"+36.002",//LEADER
      voltaRapida:false//ou false
    },
       
          {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:4,
    tempo:"+44.244",//LEADER
      voltaRapida:false//ou false
      },
       
               {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:2,
    tempo:"+45.061",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:1,
    tempo:"+47.594",//LEADER
      voltaRapida:false//ou false
      }
       ],
       
       arabia: [
          {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
   },
                 {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+2.843",//LEADER
      voltaRapida:false//ou false
    },
         
          
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+8.104",//LEADER
      voltaRapida:false//ou false
    },
         
         
              {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 12,
       tempo:"+9.196",//LEADER
      voltaRapida:true//ou false
    },
         
                 {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+27.236",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+34.688",//LEADER
      voltaRapida:false//ou false
      },
      
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:6,
       tempo:"+39.073",//LEADER
      voltaRapida:false//ou false
    },
         
             {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:4,
    tempo:"+1.04.630",//LEADER
      voltaRapida:false//ou false
      },
         
                {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:2,
    tempo:"+1.06.515",//LEADER
      voltaRapida:false//ou false
         },
         
               {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:1,
       tempo:"+1.07.091",//LEADER
      voltaRapida:false//ou false
    }
   ],
      
  miami:[
   
        {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
   },
   
        {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+4.630",//LEADER
      voltaRapida:true//ou false
    },
   
           {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
       tempo:"+37.644",//LEADER
      voltaRapida:false//ou false
    },
   
           {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+39.956",//LEADER
      voltaRapida:false//ou false
    },
   
          {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:10,
    tempo:"+48.067",//LEADER
      voltaRapida:false//ou false
         },
       {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+55.502",//LEADER
      voltaRapida:false//ou false
      },
   
    
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:6,
       tempo:"+57.036",//LEADER
      voltaRapida:false//ou false
    },
   
       {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+1.00.186",//LEADER
      voltaRapida:false//ou false
    },
   
   
       {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:2,
    tempo:"+1.00.577",//LEADER
      voltaRapida:false//ou false
      },
   
             {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:1,
    tempo:"+1.14.434",//LEADER
      voltaRapida:false//ou false
    }
    ],
      
      canada:[
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:25,
       tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
       
               {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+0.228",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:15,
    tempo:"+1.014",//LEADER
      voltaRapida:false//ou false
      },
        
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:12,
      tempo:"+2.109",//LEADER
      voltaRapida:false//ou false
   },
        
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:10,
       tempo:"+3.442",//LEADER
      voltaRapida:false//ou false
    },
        
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:8,
       tempo:"+10.713",//LEADER
      voltaRapida:false//ou false
    },
             {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+10.972",//LEADER
      voltaRapida:false//ou false
    },
        
             {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:4,
       tempo:"+15.364",//LEADER
      voltaRapida:false//ou false
    },
        
           {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:2,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      },
            {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      monaco:[
       
            {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
       
        
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:18,
       tempo:"+3.131",//LEADER
      voltaRapida:false//ou false
    },
       
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:15,
      tempo:"+3.658",//LEADER
      voltaRapida:false//ou false
   },
       
               {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+20.572",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:10,
       tempo:"+51.387",//LEADER
      voltaRapida:false//ou false
    },
       
             {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:8,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
       
          {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:6,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      },
             {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:4,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:2,
    tempo:"+2 lap",//LEADER
      voltaRapida:false//ou false
         },
           {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+2 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      espanha:[
        
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
   },
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+2.471",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+10.455",//LEADER
      voltaRapida:false//ou false
    },
    
            {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:12,
       tempo:"+11.359",//LEADER
      voltaRapida:false//ou false
    },
         {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:10,
       tempo:"+13.648",//LEADER
      voltaRapida:false//ou false
    },
    
       {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:8,
       tempo:"+15.508",//LEADER
      voltaRapida:false//ou false
    },
          {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:6,
       tempo:"+16.022",//LEADER
      voltaRapida:false//ou false
    },
    
             {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:4,
    tempo:"+17.882",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:2,
       tempo:"+21.564",//LEADER
      voltaRapida:false//ou false
    },
    
        {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:1,
    tempo:"+21.826",//LEADER
      voltaRapida:false//ou false
    },
        ],
      
      austria:[
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
        
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"+2.695",//LEADER
      voltaRapida:true//ou false
   },
       
        
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+19.820",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:12,
       tempo:"+29.020",//LEADER
      voltaRapida:false//ou false
    },
       
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+1.02.396",//LEADER
      voltaRapida:false//ou false
    },
       
                  {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:8,
       tempo:"+1.07.754",//LEADER
      voltaRapida:false//ou false
    },
       
             {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
       
            {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:4,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
            {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:2,
       tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
    },
          {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      silverstone:[
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
       
            {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"+6.812",//LEADER
      voltaRapida:true//ou false
   },
       
            {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:15,
       tempo:"+34.742",//LEADER
      voltaRapida:false//ou false
    },
       
          {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:12,
       tempo:"+39.812",//LEADER
      voltaRapida:false//ou false
    },
       
               {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:10,
    tempo:"+56.781",//LEADER
      voltaRapida:false//ou false
    },
       
                {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:8,
    tempo:"+59.857",//LEADER
      voltaRapida:false//ou false
    },
            {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:6,
       tempo:"+1.00.603",//LEADER
      voltaRapida:false//ou false
    },
       
              {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:4,
    tempo:"+1.04.135",//LEADER
      voltaRapida:false//ou false
         },
       
             {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:2,
       tempo:"+1.05.858",//LEADER
      voltaRapida:false//ou false
    },
               {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:1,
       tempo:"+1.10.674",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      spa:[
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
   },
           {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+3.415",//LEADER
      voltaRapida:false//ou false
    },
      
       
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+20.185",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:12,
    tempo:"+21.731",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+34.863",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:8,
    tempo:"+39.926",//LEADER
      voltaRapida:false//ou false
         },
      
         {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:6,
       tempo:"+40.679",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:4,
       tempo:"+52.033",//LEADER
      voltaRapida:false//ou false
    },
               {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:2,
       tempo:"+56.434",//LEADER
      voltaRapida:false//ou false
    },
               {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:1,
    tempo:"+1.12.714",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      hungria:[
        
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"0.698",//LEADER
      voltaRapida:false//ou false
   },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:15,
       tempo:"+21.916",//LEADER
      voltaRapida:true//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+42.560",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:10,
       tempo:"+59.040",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:8,
       tempo:"+1.06.169",//LEADER
      voltaRapida:false//ou false
    },
    
               {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:6,
       tempo:"+1.09.451",//LEADER
      voltaRapida:false//ou false
    },
    
                   {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:4,
       tempo:"+",//LEADER
      voltaRapida:false//ou false
    },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:2,
    tempo:"+1.12.645",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      holanda:[
        
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:25,
      tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
   },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+1.271",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:15,
       tempo:"+3.233",//LEADER
      voltaRapida:false//ou false
    },
    
    
            {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:12,
       tempo:"+5.654",//LEADER
      voltaRapida:false//ou false
    },
    
               {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:10,
    tempo:"+6.327",//LEADER
      voltaRapida:false//ou false
         },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:8,
    tempo:"+9.044",//LEADER
      voltaRapida:false//ou false
      },
             {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:6,
       tempo:"+9.497",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:4,
       tempo:"+11.709",//LEADER
      voltaRapida:false//ou false
    },
                  {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:2,
    tempo:"+13.597",//LEADER
      voltaRapida:false//ou false
    },
           {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:1,
    tempo:"+14.063",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      monza:[
        
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"19.207+",//LEADER
      voltaRapida:true//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:15,
      tempo:"+21.351",//LEADER
      voltaRapida:false//ou false
   },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+25.624",//LEADER
      voltaRapida:false//ou false
    },
    
            {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+32.881",//LEADER
      voltaRapida:false//ou false
    },
    
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:8,
       tempo:"+37.449",//LEADER
      voltaRapida:false//ou false
    },
               {
   nome: "Albon",
   numero:23,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/alex.png",
   pontos:6,
    tempo:"+50.537",//LEADER
      voltaRapida:false//ou false
         },
                 {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:4,
       tempo:"+58.484",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:2,
    tempo:"+59.762",//LEADER
      voltaRapida:false//ou false
      },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:1,
       tempo:"+1.03.891",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      madrid:[],
      
      baku:[
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:18,
       tempo:"+14.609",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:15,
    tempo:"+19.199",//LEADER
      voltaRapida:false//ou false
      },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:12,
    tempo:"+21.760",//LEADER
      voltaRapida:false//ou false
      },
                   {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:10,
       tempo:"+33.290",//LEADER
      voltaRapida:false//ou false
    },
                  {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:8,
    tempo:"+33.808",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 6,
       tempo:"+34.227",//LEADER
      voltaRapida:false//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+36.310",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:2,
     tempo:"+36.774",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:1,
       tempo:"+38.982",//LEADER
      voltaRapida:false//ou false
    }
        ],
      singapura:[
        
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:18,
    tempo:"+5.430",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 15,
       tempo:"+6.066",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:12,
      tempo:"+8.146",//LEADER
      voltaRapida:false//ou false
   },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:10,
    tempo:"+33.681",//LEADER
      voltaRapida:false//ou false
      },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:8,
       tempo:"+45.996",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+1.20.667",//LEADER
      voltaRapida:false//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+1.20.251",//LEADER
      voltaRapida:true//ou false
    },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:2,
    tempo:"+1.33.527",//LEADER
      voltaRapida:false//ou false
      },
            {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:1,
    tempo:"+1 lap",//LEADER
      voltaRapida:false//ou false
      }
        ],
      
      texas:[
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 18,
       tempo:"+7.959",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:15,
       tempo:"+15.373",//LEADER
      voltaRapida:false//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:12,
       tempo:"+28.536",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:10,
      tempo:"+29.678",//LEADER
      voltaRapida:false//ou false
   },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:8,
       tempo:"+33.456",//LEADER
      voltaRapida:false//ou false
    },
                  {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:6,
    tempo:"+52.714",//LEADER
      voltaRapida:false//ou false
    },
             {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:4,
       tempo:"+57.249",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:2,
    tempo:"+1.04.722",//LEADER
      voltaRapida:false//ou false
      },
            {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:1,
       tempo:"+1.10.001",//LEADER
      voltaRapida:false//ou false
    }
        ],
      
      mexico:[
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
         
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:18,
       tempo:"+30.324",//LEADER
      voltaRapida:false//ou false
    },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:15,
    tempo:"+31.049",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:12,
    tempo:"+40.955",//LEADER
      voltaRapida:false//ou false
      },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:10,
      tempo:"+42.065",//LEADER
      voltaRapida:false//ou false
   },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:8,
    tempo:"+47.837",//LEADER
      voltaRapida:false//ou false
      },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:6,
       tempo:"+50.287",//LEADER
      voltaRapida:true//ou false
    },
           {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+56.446",//LEADER
      voltaRapida:false//ou false
    },
           {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:2,
    tempo:"+1.15.464",//LEADER
      voltaRapida:false//ou false
      },
                 {
      nome: "Bortoleto",
      numero: 5,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/gabi.png",
      pontos:1,
       tempo:"+1.16.863",//LEADER
      voltaRapida:false//ou false
    }
        ],
        
      brasil:[
             {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 25,
       tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:18,
    tempo:"+10.388",//LEADER
      voltaRapida:false//ou false
      },
                {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:15,
    tempo:"+10.750",//LEADER
      voltaRapida:false//ou false
    },
                {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:12,
       tempo:"+15.267",//LEADER
      voltaRapida:false//ou false
    },
             {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:10,
      tempo:"+15.749",//LEADER
      voltaRapida:false//ou false
   },
              {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:8,
    tempo:"+29.630",//LEADER
      voltaRapida:false//ou false
      },
                   {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:6,
       tempo:"+52.642",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:4,
       tempo:"+52.873",//LEADER
      voltaRapida:false//ou false
    },
             {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:2,
       tempo:"+53.324",//LEADER
      voltaRapida:false//ou false
    },
                 {
   nome: "Gasly",
   numero:10,
   cor: "#FF69b4",
   logo:"icons/AlpineF1.png",
   pilotoImg:"pilotos/gasly.png",
   pontos:1,
    tempo:"+53.914",//LEADER
      voltaRapida:false//ou false
    }
    ],
       vegas:[
                 {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:true//ou false
    },
                 {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:18,
       tempo:"+23.546",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:15,
    tempo:"+30.488",//LEADER
      voltaRapida:false//ou false
      },
          
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+30.678",//LEADER
      voltaRapida:false//ou false
    },
             {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:10,
    tempo:"+34.924",//LEADER
      voltaRapida:false//ou false
      },
               {
      nome: "Hadjar",
      numero: 6,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/hadjar.png",
      pontos:8,
       tempo:"+45.257",//LEADER
      voltaRapida:false//ou false
    },
              {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:6,
       tempo:"+51.134",//LEADER
      voltaRapida:false//ou false
    },
            {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+59.369",//LEADER
      voltaRapida:false//ou false
    },
            {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:2,
    tempo:"+1.00.635",//LEADER
      voltaRapida:false//ou false
      },
               {
   nome: "Bearman",
   numero:87,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/bearman.png",
   pontos:1,
    tempo:"+1.10.549",//LEADER
      voltaRapida:false//ou false
      }
      ],
         qatar:[
                   {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
                {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"+7.995",//LEADER
      voltaRapida:true//ou false
   },
               {
   nome: "Sainz",
   numero:55,
   cor: "#005AFF",
   logo:"icons/WilliamsF1.png",
   pilotoImg:"pilotos/carlos.png",
   pontos:15,
    tempo:"+22.665",//LEADER
      voltaRapida:false//ou false
      },
                {
       nome: "Norris",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 12,
       tempo:"+23.315",//LEADER
      voltaRapida:false//ou false
    },
               {
   nome: "Antonelli",
   numero:12,
   cor: "#00D2BE",
   logo:"icons/Mercedesa.png",
   pilotoImg:"pilotos/kimi.png",
   pontos:10,
    tempo:"+28.317",//LEADER
      voltaRapida:false//ou false
      },
                   {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:8,
       tempo:"+48.599",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:6,
       tempo:"+54.045",//LEADER
      voltaRapida:false//ou false
    },
            
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:4,
       tempo:"+56.785",//LEADER
      voltaRapida:false//ou false
    },
                      {
      nome: "Lawson",
      numero: 30,
      cor: "#ffffff",
      logo: "icons/racingbulls.svg",
      pilotoImg: "pilotos/lawson.png",
      pontos:2,
       tempo:"+1.00.073",//LEADER
      voltaRapida:false//ou false
    },
                     {
   nome: "Tsunoda",
   numero:22,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/yuki.png",
   pontos:1,
    tempo:"+1.01.770",//LEADER
      voltaRapida:false//ou false
    }
    ],
           abudhabi:[
                     {
   nome: "Verstappen",
   numero:1,
   cor: "#1E41FF",
   logo:"icons/redbull.png",
   pilotoImg:"pilotos/max.png",
   pontos:25,
    tempo:"LEADER",//LEADER
      voltaRapida:false//ou false
    },
                {
     nome: "Piastri",
     numero: 81,
     cor: "#FF8700",
     logo: "icons/mcl (1).png",
     pilotoImg: "pilotos/piastri.png",
     pontos:18,
      tempo:"12.594",//LEADER
      voltaRapida:false//ou false
   },
                {
       nome: "Norris 🏆",
      numero: 4,
      cor: "#FF8700",
      logo: "icons/mcl (1).png",
      pilotoImg: "pilotos/norris.png",
      pontos: 15,
       tempo:"+16.572",//LEADER
      voltaRapida:false//ou false
    },
            
            {
      nome: "Leclerc",
      numero: 16,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lecrerc.png",
      pontos:12,
       tempo:"+23.279",//LEADER
      voltaRapida:true//ou false
    },
                   {
      nome: "Russell",
      numero: 63,
      cor: "#00D2BE",
      logo: "icons/Mercedesa.png",
      pilotoImg: "pilotos/russel.png",
      pontos:10,
       tempo:"+48.563",//LEADER
      voltaRapida:false//ou false
    },
                 {
      nome: "Alonso",
      numero: 14,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/alonso.png",
      pontos:8,
       tempo:"+1.07.562",//LEADER
      voltaRapida:false//ou false
    },
              {
   nome: "Ocon",
   numero:31,
   cor: "#FFFFFF",
   logo:"icons/HaasF1.png",
   pilotoImg:"pilotos/ocon.png",
   pontos:6,
    tempo:"+1.09.876",//LEADER
      voltaRapida:false//ou false
      },
              {
      nome: "Hamilton",
      numero: 44,
      cor: "#DC0000",
      logo: "icons/ferrari.png",
      pilotoImg: "pilotos/lewis.png",
      pontos:4,
       tempo:"+1.12.670",//LEADER
      voltaRapida:false//ou false
    },
                {
      nome: "Hulkenberg",
      numero: 27,
      cor: "#00FF00",
      logo: "icons/kick.png",
      pilotoImg: "pilotos/nico.png",
      pontos:2,
       tempo:"+1.19.014",//LEADER
      voltaRapida:false//ou false
    },
                {
      nome: "Stroll",
      numero: 18,
      cor: "#006F62",
      logo: "icons/Astonm.png",
      pilotoImg: "pilotos/stroll.png",
      pontos:1,
       tempo:"+1.19.523",//LEADER
      voltaRapida:false//ou false
    }
             ],

};


function corTextoIdeal(bg) {
  // remove #
  bg = (bg || "#111111").replace("#", "");

  // suporte pra hexadecimal curto (#fff)
  if (bg.length === 3) {
    bg = bg.split("").map(c => c + c).join("");
  }

  const r = parseInt(bg.substr(0, 2), 16);
  const g = parseInt(bg.substr(2, 2), 16);
  const b = parseInt(bg.substr(4, 2), 16);

  // cálculo de brilho
  const brilho = (r * 299 + g * 587 + b * 114) / 1000;

  // claro = texto escuro
  // escuro = texto branco
  return brilho > 155 ? "#111" : "#fff";
}

function abrirDashboard(pista) {
  const lista = document.getElementById("listaPilotos");
  lista.innerHTML = "";

  const corrida = dadosCorridas[pista];

  // evita erro
  if (!corrida) return;

  corrida.forEach((p, index) => {

    const linha = document.createElement("div");
    linha.classList.add("linha-piloto");

    // cor do card
    const corFundo = p.cor || "#111111";
    linha.style.background = corFundo;

    // cor automática do texto
    const corTexto = corTextoIdeal(corFundo);

    linha.innerHTML = `
      <div class="posicao-box">
        ${index + 1}
      </div>

      <div class="equipe-logo">
        <img 
          src="${p.logo}" 
          alt="${p.equipe || "Equipe"}"
          onerror="this.src='https://via.placeholder.com/40'"
        >
      </div>

      <div class="piloto-img-box">
        <img 
          src="${p.pilotoImg}" 
          alt="${p.nome}"
          onerror="this.src='https://via.placeholder.com/50'"
        >
      </div>

      <div class="info-piloto">
        <div class="nome-numero">

          <span 
            class="nome"
            style="color:${corTexto}"
          >
            ${p.nome}
          </span>

          <span 
            class="numero"
            style="color:${corTexto}; opacity:.7"
          >
            #${p.numero}
          </span>

        </div>
      </div>

      <div 
        class="tempo"
        style="color:${corTexto}"
      >
        ${p.tempo || "-"}
      </div>

      ${p.voltaRapida ? `
      <div class="volta-rapida">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      </div>
      ` : ""}

      <div class="pontos-box">
        ${p.pontos ?? 0}
      </div>
    `;

    lista.appendChild(linha);
  });

  document.getElementById("tituloGP").textContent =
    `RESULTADO - ${pista.toUpperCase()} 2025`;

  document.getElementById("dashboard").style.display = "flex";
}

function fecharDashboard() {
  document.getElementById("dashboard").style.display = "none";
}






const cards = document.querySelectorAll(".card-focus");

cards.forEach(card => {
  card.addEventListener("click", () => {
    document.querySelector(".card-focus.ativo").classList.remove("ativo");
    card.classList.add("ativo");
  });
});

/* SWIPE MOBILE */
let startX = 0;

document.querySelector(".bandeiras-focus").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.querySelector(".bandeiras-focus").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) mudarCard(1); // direita
  if (endX - startX > 50) mudarCard(-1); // esquerda
});

function mudarCard(dir) {
  let atual = document.querySelector(".card-focus.ativo");
  let index = Array.from(cards).indexOf(atual);

  let novoIndex = index + dir;

  if (novoIndex < 0) novoIndex = cards.length - 1;
  if (novoIndex >= cards.length) novoIndex = 0;

  atual.classList.remove("ativo");
  cards[novoIndex].classList.add("ativo");
}


document.addEventListener("DOMContentLoaded", function () {

  const pista = document.querySelector(".pista-sc");
  const barra = document.querySelector(".barra-velocidade");
  const numero = document.querySelector(".vel-numero");

  const tituloInfo = document.querySelector(".titulo-info");
  const textoInfo = document.querySelector(".texto-info");

  let modo = 0; // 0 = normal | 1 = SC | 2 = VSC
  let velocidadeAtual = 0;

  // =========================
  // 🎯 VELOCIDADE
  // =========================
  function atualizarVelocidade(valor) {

    let intervalo = setInterval(() => {

      if (velocidadeAtual < valor) {
        velocidadeAtual += 5;
      } else if (velocidadeAtual > valor) {
        velocidadeAtual -= 5;
      }

      numero.textContent = velocidadeAtual + " km/h";

      if (velocidadeAtual === valor) {
        clearInterval(intervalo);
      }

    }, 10);

    const porcentagem = (valor / 320) * 100;
    barra.style.width = porcentagem + "%";

    // cor dinâmica
    if (valor > 250) {
      barra.style.background = "red";
      barra.style.boxShadow = "0 0 15px red";
    } else if (valor > 180) {
      barra.style.background = "yellow";
      barra.style.boxShadow = "0 0 15px yellow";
    } else {
      barra.style.background = "lime";
      barra.style.boxShadow = "0 0 15px lime";
    }
  }

  // =========================
  // 📊 TEXTO
  // =========================
  function atualizarInfo() {

    if (modo === 0) {
      tituloInfo.textContent = "CORRIDA NORMAL";
      textoInfo.textContent =
        "Os carros estão em ritmo total de corrida, disputando posições livremente.";
    }

    if (modo === 1) {
      tituloInfo.textContent = "SAFETY CAR";
      textoInfo.textContent =
        "O Safety Car foi acionado. Os carros reduzem a velocidade e seguem em fila, sem ultrapassagens.";
    }

    if (modo === 2) {
      tituloInfo.textContent = "VIRTUAL SAFETY CAR";
      textoInfo.textContent =
        "O VSC reduz o ritmo de todos os carros de forma controlada, mantendo distâncias.";
    }
  }

  // =========================
  // 🚗 MODOS
  // =========================
  function aplicarModo() {

    pista.classList.remove("sc-mode", "vsc-mode");

    if (modo === 0) {
      atualizarVelocidade(320);
    }

    if (modo === 1) {
      pista.classList.add("sc-mode");
      atualizarVelocidade(140);
    }

    if (modo === 2) {
      pista.classList.add("vsc-mode");
      atualizarVelocidade(180);
    }

    atualizarInfo();
  }

  // =========================
  // 🎮 CLICK
  // =========================
  pista.addEventListener("click", function () {

    modo++;
    if (modo > 2) modo = 0;

    aplicarModo();

  });

  // inicia normal
  aplicarModo();

  console.log("Sistema completo SC/VSC + HUD carregado ✅");

});

document.addEventListener("DOMContentLoaded", function(){

const cards = document.querySelectorAll(".pen-card");
const banner = document.querySelector(".fia-banner");
const texto = document.querySelector(".fia-texto");
const info = document.querySelector(".fia-info");

const cores = {
  "+5s": "orange",
  "+10s": "red",
  "DRIVE THROUGH": "purple",
  "STOP & GO": "crimson",
  "GRID PENALTY": "yellow",
  "DSQ": "white"
};

function getInfo(tipo) {
  if (tipo === "+5s") return "5 segundos adicionados ao tempo final.";
  if (tipo === "+10s") return "10 segundos adicionados ao tempo final.";
  if (tipo === "DRIVE THROUGH") return "Passagem obrigatória pelo pit lane.";
  if (tipo === "STOP & GO") return "Parada obrigatória antes de retornar.";
  if (tipo === "GRID PENALTY") return "Perda de posições no grid.";
  if (tipo === "DSQ") return "Desclassificação da corrida.";
  return "";
}

cards.forEach(card => {

  card.addEventListener("click", function () {

    const tipo = this.dataset.tipo;
    const piloto = this.dataset.piloto;
    const numero = this.dataset.numero;

    // 🔴 TEXTO ESTILO F1
    texto.textContent = `${tipo} — CAR ${numero} (${piloto})`;

    banner.style.borderLeft = `5px solid ${cores[tipo]}`;
    banner.classList.add("ativo");

    setTimeout(() => {
      banner.classList.remove("ativo");
    }, 3000);

    // 📄 INFO
    info.textContent = getInfo(tipo);
    info.style.borderLeft = `5px solid ${cores[tipo]}`;

    info.classList.remove("ativo");
    setTimeout(() => {
      info.classList.add("ativo");
    }, 50);

  });

});

});


const togglef1 = document.getElementById("menuTogglef1");
const menuf1 = document.getElementById("sideMenuf1");
const overlayf1 = document.getElementById("overlayf1");
const closef1 = document.getElementById("closeMenuf1");

const linksMenuf1 = document.querySelectorAll(".side-menu-f1 a");

function fecharMenuf1() {
  if (menuf1) menuf1.classList.remove("active");
  if (overlayf1) overlayf1.classList.remove("active");
}

if (togglef1) {
  togglef1.addEventListener("click", () => {
    menuf1?.classList.add("active");
    overlayf1?.classList.add("active");
  });
}

if (closef1) {
  closef1.addEventListener("click", fecharMenuf1);
}

if (overlayf1) {
  overlayf1.addEventListener("click", fecharMenuf1);
}

linksMenuf1.forEach(link => {
  link.addEventListener("click", fecharMenuf1);
});

(function scrollLinksf1() {

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

