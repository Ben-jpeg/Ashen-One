/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* Arrow pour revenir en debut de page* ------------------------------------*/
const up = document.querySelector('.up');

up.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});
/* FIN ARRON FIN ARROW FIN ARROW FIN ARROW FIN ARROW FIN ARROW FIN ARROW----*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* Chiffres d'animes vus* --------------------------------------------------*/



/* Attrapper chaque balise qui contient chaque lettre individuellement */
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");
var h = document.getElementById("h");
var i = document.getElementById("i");
var j = document.getElementById("j");
var k = document.getElementById("k");
var l = document.getElementById("l");
var m = document.getElementById("m");
var n = document.getElementById("n");
var o = document.getElementById("o");
var p = document.getElementById("p");
var q = document.getElementById("q");
var r = document.getElementById("r");
var s = document.getElementById("s");
var t = document.getElementById("t");
var u = document.getElementById("u");
var v = document.getElementById("v");
var w = document.getElementById("w");
var x = document.getElementById("x");
var y = document.getElementById("y");
var z = document.getElementById("z");
var others = document.getElementById("others");



/* Identifier la balise dans laquelle sera écrit le nombre d'animés vus */
var vusA = document.getElementById("nbVusA");
var vusB = document.getElementById("nbVusB");
var vusC = document.getElementById("nbVusC");
var vusD = document.getElementById("nbVusD");
var vusE = document.getElementById("nbVusE");
var vusF = document.getElementById("nbVusF");
var vusG = document.getElementById("nbVusG");
var vusH = document.getElementById("nbVusH");
var vusI = document.getElementById("nbVusI");
var vusJ = document.getElementById("nbVusJ");
var vusK = document.getElementById("nbVusK");
var vusL = document.getElementById("nbVusL");
var vusM = document.getElementById("nbVusM");
var vusN = document.getElementById("nbVusN");
var vusO = document.getElementById("nbVusO");
var vusP = document.getElementById("nbVusP");
var vusQ = document.getElementById("nbVusQ");
var vusR = document.getElementById("nbVusR");
var vusS = document.getElementById("nbVusS");
var vusT = document.getElementById("nbVusT");
var vusU = document.getElementById("nbVusU");
var vusV = document.getElementById("nbVusV");
var vusW = document.getElementById("nbVusW");
var vusX = document.getElementById("nbVusX");
var vusY = document.getElementById("nbVusY");
var vusZ = document.getElementById("nbVusZ");
var vusOthers = document.getElementById("nbVusOthers");



/* Chopper la balise P où sera inscrit le nb d'animés, pour chaque lettre spécifique */
var aParag = a.getElementsByTagName("p");
var bParag = b.getElementsByTagName("p");
var cParag = c.getElementsByTagName("p");
var dParag = d.getElementsByTagName("p");
var eParag = e.getElementsByTagName("p");
var fParag = f.getElementsByTagName("p");
var gParag = g.getElementsByTagName("p");
var hParag = h.getElementsByTagName("p");
var iParag = i.getElementsByTagName("p");
var jParag = j.getElementsByTagName("p");
var kParag = k.getElementsByTagName("p");
var lParag = l.getElementsByTagName("p");
var mParag = m.getElementsByTagName("p");
var nParag = n.getElementsByTagName("p");
var oParag = o.getElementsByTagName("p");
var pParag = p.getElementsByTagName("p");
var qParag = q.getElementsByTagName("p");
var rParag = r.getElementsByTagName("p");
var sParag = s.getElementsByTagName("p");
var tParag = t.getElementsByTagName("p");
var uParag = u.getElementsByTagName("p");
var vParag = v.getElementsByTagName("p");
var wParag = w.getElementsByTagName("p");
var xParag = x.getElementsByTagName("p");
var yParag = y.getElementsByTagName("p");
var zParag = z.getElementsByTagName("p");
var othersParag = others.getElementsByTagName("p");


/* Compter le nombre d'articles (d'animés) vus dans la lettre spécifique */
var numA = aParag.length;
var numB = bParag.length;
var numC = cParag.length;
var numD = dParag.length;
var numE = eParag.length;
var numF = fParag.length;
var numG = gParag.length;
var numH = hParag.length;
var numI = iParag.length;
var numJ = jParag.length;
var numK = kParag.length;
var numL = lParag.length;
var numM = mParag.length;
var numN = nParag.length;
var numO = oParag.length;
var numP = pParag.length;
var numQ = qParag.length;
var numR = rParag.length;
var numS = sParag.length;
var numT = tParag.length;
var numU = uParag.length;
var numV = vParag.length;
var numW = wParag.length;
var numX = xParag.length;
var numY = yParag.length;
var numZ = zParag.length;
var numOthers = othersParag.length;


/* Ecrire via JS dans le HTML le nombre d'animés vus */
vusA.innerHTML += `${numA - 1}✦`;
vusB.innerHTML += `${numB - 1}✦`;
vusC.innerHTML += `${numC - 1}✦`;
vusD.innerHTML += `${numD - 1}✦`;
vusE.innerHTML += `${numE - 1}✦`;
vusF.innerHTML += `${numF - 1}✦`;
vusG.innerHTML += `${numG - 1}✦`;
vusH.innerHTML += `${numH - 1}✦`;
vusI.innerHTML += `${numI - 1}✦`;
vusJ.innerHTML += `${numJ - 1}✦`;
vusK.innerHTML += `${numK - 1}✦`;
vusL.innerHTML += `${numL - 1}✦`;
vusM.innerHTML += `${numM - 1}✦`;
vusN.innerHTML += `${numN - 1}✦`;
vusO.innerHTML += `${numO - 1}✦`;
vusP.innerHTML += `${numP - 1}✦`;
vusQ.innerHTML += `${numQ - 1}✦`;
vusR.innerHTML += `${numR - 1}✦`;
vusS.innerHTML += `${numS - 1}✦`;
vusT.innerHTML += `${numT - 1}✦`;
vusU.innerHTML += `${numU - 1}✦`;
vusV.innerHTML += `${numV - 1}✦`;
vusW.innerHTML += `${numW - 1}✦`;
vusX.innerHTML += `${numX - 1}✦`;
vusY.innerHTML += `${numY - 1}✦`;
vusZ.innerHTML += `${numZ - 1}✦`;
vusOthers.innerHTML += `${numOthers - 1}`;


var wowT = document.getElementById("nbVusFull");

var wow = numA + numB + numC + numD + numE + numF + numG + numH + numI + numJ + numK + numL +
numM + numN + numO + numP + numQ + numR + numS + numT + numU + numV + numW + numX + numY + numZ + numOthers;

wowT.innerHTML +=  `✦total <b>${wow - 27}</b>✦`;


/* Chiffres d'animes vu FIN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* ScrollReveal* -------------------------------------------------------*/

ScrollReveal().reveal('.listeAnimes', { delay: 300 });
ScrollReveal().reveal('.pics', { delay: 400 });
ScrollReveal().reveal('.sousTitre', { delay: 400 });
ScrollReveal().reveal('.laPepite');
ScrollReveal().reveal('.pepiteOthers');
ScrollReveal().reveal('.txtOthers');


/* ScrollReveal FIN -----------------------------------------------------*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* Modale du burger* --------------------------------------------------------*/

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});

/* FIN MODALE --------------------------------------------------------------*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* Dark Mode     * --------------------------------------------------------*/

// function darkMode() {
//   const element = document.querySelector("h1, body");
//   element.classList.toggle("dark-mode");
// }

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


