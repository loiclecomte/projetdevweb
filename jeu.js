function allumertete(imagetete) {
        document.getElementById('tete').style.backgroundImage = 'url('+imagetete+')';
}

function allumercorps(imagecorps){
    document.getElementById('corps').style.backgroundImage = 'url('+imagecorps+')';
}

function allumerjambe(imagejambe){
    document.getElementById('jambe').style.backgroundImage = 'url(' +imagejambe +')';
}

function allumerbrasgauche(imagebrasgauche){
    document.getElementById('brasg').style.backgroundImage = 'url(' +imagebrasgauche+ ')';
}

function allumerbrasdroit(imagebrasdroit){
    document.getElementById('brasd').style.backgroundImage = 'url(' +imagebrasdroit+ ')';
}


function eteindrebouton(){
    document.getElementById('boutontete1').style.display = 'none';
    document.getElementById('boutontete2').style.display = 'none';
    document.getElementById('boutontete3').style.display = 'none';
    document.getElementById('boutontete4').style.display = 'none';
    document.getElementById('boutontete5').style.display = 'none';
    document.getElementById('boutoncorps1').style.display = 'none';
    document.getElementById('boutoncorps2').style.display = 'none';
    document.getElementById('boutoncorps3').style.display = 'none';
    document.getElementById('boutoncorps4').style.display = 'none';
    document.getElementById('boutoncorps5').style.display = 'none';
    document.getElementById('boutonjambe1').style.display = 'none';
    document.getElementById('boutonjambe2').style.display = 'none';
    document.getElementById('boutonjambe3').style.display = 'none';
    document.getElementById('boutonjambe4').style.display = 'none';
    document.getElementById('boutonjambe5').style.display = 'none';
    document.getElementById('boutonbrasgauche1').style.display = 'none';
    document.getElementById('boutonbrasgauche2').style.display = 'none';
    document.getElementById('boutonbrasgauche3').style.display = 'none';
    document.getElementById('boutonbrasgauche4').style.display = 'none';
    document.getElementById('boutonbrasgauche5').style.display = 'none';
    document.getElementById('boutonbrasdroit1').style.display = 'none';
    document.getElementById('boutonbrasdroit2').style.display = 'none';
    document.getElementById('boutonbrasdroit3').style.display = 'none';
    document.getElementById('boutonbrasdroit4').style.display = 'none';
    document.getElementById('boutonbrasdroit5').style.display = 'none';
}

function allumerboutontete(){
    eteindrebouton();
    document.getElementById('boutontete1').style.display = 'initial';
    document.getElementById('boutontete2').style.display = 'initial';
    document.getElementById('boutontete3').style.display = 'initial';
    document.getElementById('boutontete4').style.display = 'initial';
    document.getElementById('boutontete5').style.display = 'initial';
}

function allumerboutoncorps(){
    eteindrebouton();
    document.getElementById('boutoncorps1').style.display = 'initial';
    document.getElementById('boutoncorps2').style.display = 'initial';
    document.getElementById('boutoncorps3').style.display = 'initial';
    document.getElementById('boutoncorps4').style.display = 'initial';
    document.getElementById('boutoncorps5').style.display = 'initial';
}

function allumerboutonjambe(){
    eteindrebouton();
    document.getElementById('boutonjambe1').style.display = 'initial';
    document.getElementById('boutonjambe2').style.display = 'initial';
    document.getElementById('boutonjambe3').style.display = 'initial';
    document.getElementById('boutonjambe4').style.display = 'initial';
    document.getElementById('boutonjambe5').style.display = 'initial';
}

function allumerboutonbrasdroit(){
    eteindrebouton();
    document.getElementById('boutonbrasdroit1').style.display = 'initial';
    document.getElementById('boutonbrasdroit2').style.display = 'initial';
    document.getElementById('boutonbrasdroit3').style.display = 'initial';
    document.getElementById('boutonbrasdroit4').style.display = 'initial';
    document.getElementById('boutonbrasdroit5').style.display = 'initial';
}

function allumerboutonbrasgauche(){
    eteindrebouton();
    document.getElementById('boutonbrasgauche1').style.display = 'initial';
    document.getElementById('boutonbrasgauche2').style.display = 'initial';
    document.getElementById('boutonbrasgauche3').style.display = 'initial';
    document.getElementById('boutonbrasgauche4').style.display = 'initial';
    document.getElementById('boutonbrasgauche5').style.display = 'initial';
}

var boutontete11=document.getElementById('boutontete1');
boutontete11.addEventListener("click",function(){allumertete("tetesinge.png")});
var boutontete2=document.getElementById('boutontete2');
boutontete2.addEventListener('click',function(){allumertete('teteleopard.png')});
var boutontete3=document.getElementById('boutontete3');
boutontete3.addEventListener('click',function(){allumertete('tetepingouin.png')});
var boutontete4=document.getElementById('boutontete4');
boutontete4.addEventListener('click',function(){allumertete('tetekoala.png')});
var boutontete5=document.getElementById('boutontete5');
boutontete5.addEventListener('click',function(){allumertete('tetecrocodile.png')});

var boutoncorps1=document.getElementById('boutoncorps1')
boutoncorps1.addEventListener('click',function(){allumercorps('corpssinge.png')})
var boutoncorps2=document.getElementById('boutoncorps2')
boutoncorps2.addEventListener('click',function(){allumercorps('corpsleopard.png')})
var boutoncorps3=document.getElementById('boutoncorps3')
boutoncorps3.addEventListener('click',function(){allumercorps('corpspingouin.png')})
var boutoncorps4=document.getElementById('boutoncorps4')
boutoncorps4.addEventListener('click',function(){allumercorps('corpskoala.png')})
var boutoncorps5=document.getElementById('boutoncorps5')
boutoncorps5.addEventListener('click',function(){allumercorps('corpscrocodile.png')})

var boutonjambe1=document.getElementById('boutonjambe1')
boutonjambe1.addEventListener('click',function(){allumerjambe('piedsinge.png')})
var boutonjambe2=document.getElementById('boutonjambe2')
boutonjambe2.addEventListener('click',function(){allumerjambe('piedleopard.png')})
var boutonjambe3=document.getElementById('boutonjambe3')
boutonjambe3.addEventListener('click',function(){allumerjambe('piedpingouin.png')})
var boutonjambe4=document.getElementById('boutonjambe4')
boutonjambe4.addEventListener('click',function(){allumerjambe('piedkoala.png')})
var boutonjambe5=document.getElementById('boutonjambe5')
boutonjambe5.addEventListener('click',function(){allumerjambe('piedcrocodile.png')})

var boutonbrasgauche1=document.getElementById('boutonbrasgauche1')
boutonbrasgauche1.addEventListener('click',function(){allumerbrasgauche('brasgauchesinge.png')})
var boutonbrasgauche2=document.getElementById('boutonbrasgauche2')
boutonbrasgauche2.addEventListener('click',function(){allumerbrasgauche('brasgaucheleopard.png')})
var boutonbrasgauche3=document.getElementById('boutonbrasgauche3')
boutonbrasgauche3.addEventListener('click',function(){allumerbrasgauche('brasgauchepingouin.png')})
var boutonbrasgauche4=document.getElementById('boutonbrasgauche4')
boutonbrasgauche4.addEventListener('click',function(){allumerbrasgauche('brasgauchekoala.png')})
var boutonbrasgauche5=document.getElementById('boutonbrasgauche5')
boutonbrasgauche5.addEventListener('click',function(){allumerbrasgauche('brasgauchecrocodile.png')})

var boutonbrasdroit1=document.getElementById('boutonbrasdroit1')
boutonbrasdroit1.addEventListener('click',function(){allumerbrasdroit('brasdroitsinge.png')})
var boutonbrasdroit2=document.getElementById('boutonbrasdroit2')
boutonbrasdroit2.addEventListener('click',function(){allumerbrasdroit('brasdroitleopard.png')})
var boutonbrasdroit3=document.getElementById('boutonbrasdroit3')
boutonbrasdroit3.addEventListener('click',function(){allumerbrasdroit('brasdroitpingouin.png')})
var boutonbrasdroit4=document.getElementById('boutonbrasdroit4')
boutonbrasdroit4.addEventListener('click',function(){allumerbrasdroit('brasdroitkoala.png')})
var boutonbrasdroit5=document.getElementById('boutonbrasdroit5')
boutonbrasdroit5.addEventListener('click',function(){allumerbrasdroit('brasdroitcrocodile.png')})

var boutontete=document.getElementById('ombretete')
boutontete.addEventListener('click',allumerboutontete)
var boutoncorps=document.getElementById('ombrecorps')
boutoncorps.addEventListener('click',allumerboutoncorps)
var boutonjambe=document.getElementById('ombrejambe')
boutonjambe.addEventListener('click',allumerboutonjambe)
var boutonbrasgauche=document.getElementById('ombrebrasgauche')
boutonbrasgauche.addEventListener('click',allumerboutonbrasgauche)
var boutonbrasdroit=document.getElementById('ombrebrasdroit')
boutonbrasdroit.addEventListener('click',allumerboutonbrasdroit)

eteindrebouton();
allumerboutontete();