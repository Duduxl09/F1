const pierreData=[

{

first:"BRENDON",

last:"HARTLEY",

img:"gasly/hartley.webp",

years:"2017 — 2018",

stats:{

quali:[12,3],

races:[7,6],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[29,4]

}

},

{

first:"MAX",

last:"VERSTAPPEN",

img:"gasly/verstappen.png",

years:"2019",

stats:{

quali:[1,11],

races:[1,11],

podiums:[0,5],

wins:[0,2],

pole:[0,1],

points:[63,181]

}

},

{

first:"DANIIL",

last:"KVYAT",

img:"gasly/kvyat.png",

years:"2019 — 2020",

stats:{

quali:[20,7],

races:[17,9],

podiums:[2,1],

wins:[1,0],

pole:[0,0],

points:[138,69]

}

},

{

first:"YUKI",

last:"TSUNODA",

img:"gasly/tsunoda.png",

years:"2021 — 2022",

stats:{

quali:[34,10],

races:[24,15],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[133,44]

}

},

{

first:"ESTEBAN",

last:"OCON",

img:"gasly/ocon.png",

years:"2023 — 2024",

stats:{

quali:[21,23],

races:[18,20],

podiums:[1,1],

wins:[0,0],

pole:[0,0],

points:[68,70]

}

},

{

first:"FRANCO",

last:"COLAPINTO",

img:"gasly/colapinto.webp",

years:"2025",

stats:{

quali:[13,8],

races:[11,8],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[41,21]

}

}

]
let current=0



const mateImg=
document.getElementById(
"mateImg"
)

const mateFirst=
document.getElementById(
"mateFirst"
)

const mateLast=
document.getElementById(
"mateLast"
)

const years=
document.getElementById(
"pierreYears"
)



function setBar(
id,
value,
max
){

document
.getElementById(id)
.style.width=

(value/max*100)

+"%"

}



function animateNumber(
el,
target
){

let value=0

const speed=
target/30



const timer=
setInterval(()=>{

value+=speed



if(
value>=target
){

value=
target

clearInterval(
timer
)

}



el.textContent=

Math.floor(
value
)

},20)

}





function updateStats(
data
){

const maxQuali=
Math.max(
...data.stats.quali
)

const maxRace=
Math.max(
...data.stats.races
)

const maxPod=
Math.max(
...data.stats.podiums
)

const maxWin=
Math.max(
...data.stats.wins
)

const maxPole=
Math.max(
...data.stats.pole
)

const maxPoints=
Math.max(
...data.stats.points
)



animateNumber(

document.getElementById(
"pierreQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"pierreQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"pierreRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"pierreRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"pierrePodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"pierrePodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"pierreWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"pierreWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"pierrePoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"pierrePoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"pierrePointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"pierrePointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"pierreBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"pierreBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"pierreBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"pierreBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"pierreBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"pierreBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"pierreBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"pierreBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"pierreBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"pierreBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"pierreBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"pierreBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
pierreData[
index
]



mateImg.style.opacity=0



setTimeout(()=>{

mateImg.src=
d.img

mateImg.style.opacity=1

},250)



mateFirst.textContent=
d.first

mateLast.textContent=
d.last

years.textContent=
d.years



updateStats(
d
)



document
.querySelectorAll(
".pierre-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.pierre-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".pierre-tab"
)

.forEach(

btn=>{

btn.onclick=()=>{

current=

Number(

btn.dataset.id

)



render(
current
)

}

}

)



document
.querySelector(
".pierre-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

pierreData
.length-1



render(
current
)

}



document
.querySelector(
".pierre-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
pierreData.length

)

current=0



render(
current
)

}



render(0) 