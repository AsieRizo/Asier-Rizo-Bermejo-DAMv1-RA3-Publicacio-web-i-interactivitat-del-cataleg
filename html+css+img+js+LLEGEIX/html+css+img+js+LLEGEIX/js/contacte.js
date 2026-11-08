//Part C- Formulari de contacte

// Assigna una constant a cada element dels formularis associat a cada classe
const formulari=document.querySelector("form");
const formulariContacte = document.querySelector(".formContacte");
const formulariRessenya= document.querySelector(".formRessenya");
const textinput=document.querySelector(".textinput");
const gmailinput= document.querySelector(".gmailinput");
const numinput=document.querySelector(".numinput")
const textarea=document.querySelector(".textarea");
const horainput=document.querySelector(".horainput");
const diainput=document.querySelector(".diainput")
const submit=document.querySelector(".submit");
const reset=document.querySelector(".reset");
const selector=document.querySelector(".select");

//Assgina una constant a cada text que informa de l'estat d'error de cada element del formulari amb una classe
const llarginput=document.querySelector(".llarginput");
const llargtext=document.querySelector(".llargtext");
const errornum=document.querySelector(".errornum");
const errorgmail=document.querySelector(".errorgmail");
const horaerror=document.querySelector(".horaerror");
const opcioSelectError=document.querySelector(".opcioSelectError");
const diaerror= document.querySelector(".diaerror");

//Array que serveix més endavant per a la funció de borrar la selecció
const missatgesError=[llarginput, llargtext, errornum, errorgmail, horaerror, opcioSelectError, diaerror ];

//Variable que validen el format dels inputs dels camps. Comencen amb false per evitar que l'usuari enviï el formulari sense omplir-los
let textAreaCorrecte=false;
let textInputCorrecte= false;
let numInputCorrecte=false;
let horaInputCorrecte=false;
let selectorCorrecte=false;
let gmailInputCorrecte=false;
let diaInputCorrecte=false;

/* Valida que el camp de text on s'hagi d'incloure el comentari tingui entre 20 i 300 caràcters i els compta en directe
amb una funció que té efecte quan l'usuari introdueix un input. Si ho fa malament es mostra un missatge d'error. 
Si sí ho fa bé s'oculta el missatge d'error i oculta el missatge d'error.*/
function textAreaValidar(){
    //crea missatge d'error al DOM dins del div
    const missatgeErrorText=document.createElement("p");
    llargtext.appendChild(missatgeErrorText);
    
    textarea.addEventListener("input", () => {
    
    if (textarea.value.length>300||textarea.value.length<20){
        textAreaCorrecte=false;
        missatgeErrorText.textContent=`${textarea.value.length}/300 caràcters. Límits de caràcters fora del rang`;
        missatgeErrorText.classList.add("errorformat");
    }
    else{
        textAreaCorrecte=true;
        missatgeErrorText.textContent=`${textarea.value.length}/300 caràcters`;
        missatgeErrorText.classList.remove("errorformat");
    }
});
}

/* Valida que el camp de text on s'hagi d'incloure la nota estigui comprés entre 0 i 10 i no tingui més de 2 decimals
amb una funció que té efecte quan l'usuari introdueix un input. Si ho fa malament es mostra un missatge d'error. 
Si sí ho fa bé s'oculta el missatge d'error i oculta el missatge d'error.*/
function numInputValidar () {
    //crea missatge d'error al DOM dins del div
    const missatgeErrorNum=document.createElement("p");
    errornum.appendChild(missatgeErrorNum);
    numinput.addEventListener("input", () => { //el rang establert de la nota és del 0 al 10, l'estàndard per a quelsevol evaluació
        if (numinput.value<0 || numinput.value>10 || numinput.value.length>4){
            numInputCorrecte=false;
            missatgeErrorNum.textContent=`Nota numèrica no vàlida`;
            missatgeErrorNum.classList.add("errorformat");
        }
    else{
            numInputCorrecte=true;
            missatgeErrorNum.textContent=``;
            missatgeErrorNum.classList.remove("errorformat");
    }
});
}

/* Valida que el selector de números on s'ha d'incloure el número d'hores jugades sigui superior a 0 i no tingui decimals
amb una funció que té efecte quan l'usuari introdueix un input. Si ho fa malament es mostra un missatge d'error. 
Si sí ho fa bé s'oculta el missatge d'error i oculta el missatge d'error.*/

function horaInputValidar () { 
    //crea missatge d'error al DOM dins del div
    const missatgeErrorHora=document.createElement("p");
    horaerror.appendChild(missatgeErrorHora);
    horainput.addEventListener("input", () => {// No hi ha límit d'hores, però aquestes no poden ser negatives ni decimals
        if ((horainput.value<1||((((horainput.value)%2)!==0 ) && ((horainput.value)%2 !==1)))&&(horainput.value!=="")) {
            horaInputCorrecte=false;
            missatgeErrorHora.textContent=`Format d'hora no vàlid`;
            missatgeErrorHora.classList.add("errorformat");
        }
    else {
        horaInputCorrecte=true;
        missatgeErrorHora.textContent=``;
        missatgeErrorHora.classList.remove("errorformat");
    }
});
}

/* Valida que el camp de text on s'hagi d'incloure el nom de l'usuari tingui més de 3 dígits i els compta en directe
amb una funció que té efecte quan l'usuari introdueix un input. Si ho fa malament es mostra un missatge d'error. 
Si sí ho fa bé s'oculta el missatge d'error i oculta el missatge d'error.*/
function textInputValidar () {
    //crea missatge d'error al DOM dins del div
    const missatgeErrorTextInput=document.createElement("p");
    llarginput.appendChild(missatgeErrorTextInput);
    textinput.addEventListener("input", () => {
    if ((textinput.value.trim().length<3)){
        textInputCorrecte=false;
        missatgeErrorTextInput.textContent=`${textinput.value.trim().length}/3 caràcters. Caràcters insuficients`;
        missatgeErrorTextInput.classList.add("errorformat");
    }
    else{
        textInputCorrecte=true;
        missatgeErrorTextInput.textContent=``;
        missatgeErrorTextInput.classList.remove("errorformat");
    }
});
}

/* Valida que el camp de text on s'hagi d'incloure el gmail tingui almenys una @ amb un punt darrere i text davant 
amb una funció que té efecte quan l'usuari introdueix un input. Si ho fa malament es mostra un missatge d'error. 
Si sí ho fa bé s'oculta el missatge d'error i oculta el missatge d'error.*/
function gmailInputValidar () {
    //crea missatge d'error al DOM dins del div
    const missatgeErrorGmail=document.createElement("p");
    errorgmail.appendChild(missatgeErrorGmail);
    gmailinput.addEventListener("input", () => {
    if ((gmailinput.value.indexOf("@")<1)||((gmailinput.value.indexOf(".")>gmailinput.value.indexOf("@"))!==true)){
        gmailInputCorrecte=false;
        missatgeErrorGmail.textContent=`Format incorrecte. El gmail ha de contenir almenys una @ i un . darrere d'aquesta`;
        missatgeErrorGmail.classList.add("errorformat");
    }
    else{
        gmailInputCorrecte=true;
        missatgeErrorGmail.textContent=``;
        missatgeErrorGmail.classList.remove("errorformat");
    }   
});
}

/* Valida que el selector on ha d'escogir el motiu de la consulta no tingui seleccionat la opció predeterminada
amb una funció que té efecte quan l'usuari introdueix un input. Si ho fa malament es mostra un missatge d'error. 
Si sí ho fa bé s'oculta el missatge d'error i oculta el missatge d'error.*/
function selectorValidar() {
    //crea missatge d'error al DOM dins del div
    const missatgeErrorSelector=document.createElement("p");
    opcioSelectError.appendChild(missatgeErrorSelector);
    selector.addEventListener("input", () => {
    if (selector.value==="default"){
        selectorCorrecte=false;
        missatgeErrorSelector.textContent=`Tria una opció que no sigui la predeterminada`;
        missatgeErrorSelector.classList.add("errorformat");
    }
    else {
        selectorCorrecte=true;
        missatgeErrorSelector.textContent=``;
        missatgeErrorSelector.classList.remove("errorformat");
    }
});
}

/* Valida que el selector de data on s'hagi d'incloure aquesta no estigui buit
amb una funció que té efecte quan l'usuari introdueix un input. Si ho fa malament es mostra un missatge d'error. 
Si sí ho fa bé s'oculta el missatge d'error i oculta el missatge d'error.*/
function dataValidar () {
    //crea missatge d'error al DOM dins del div
    const missatgeErrorData=document.createElement("p");
    diaerror.appendChild(missatgeErrorData);
    diainput.addEventListener ("change", () => {
    if (diainput.value===``){
        diaInputCorrecte=false;
        missatgeErrorData.textContent=`Camp obligatori, no ho deixis buit`;
        missatgeErrorData.classList.add("errorformat");
    }
    else{
        diaInputCorrecte=true;
        missatgeErrorData.textContent=``;
        missatgeErrorData.classList.remove("errorformat");
    }
});
}

//Funció que borra missatges d'error i el contingut del formulari
function borrarErrors (llista) {
   /*Per a cada element de l'array on estan enmagatzemats els missatges d'error, sempre que
    que aparegui en un formulari borra aquest missatge*/
    llista.forEach((missatge) =>{ 
    if (missatge!==null&& missatge.firstElementChild!==null) {
        /*Selecciona el primer element que troba dins del div, és a dir el "p" que conté el missatge 
        d'error i li treu el contingut de text i la classe d'eror. Així s'evita que es borri el "p" directament
        i no es torni a mostrar el missatge d'error mai més després del reset*/
        missatge.firstElementChild.textContent=``; 
        missatge.firstElementChild.classList.remove("errorformat");
    }
   });//Retorna la validació de cada camp al seu estat original
    textAreaCorrecte=false;
    textInputCorrecte= false;
    numInputCorrecte=false;
    horaInputCorrecte=false;
    selectorCorrecte=false;
    gmailInputCorrecte=false;
    diaInputCorrecte=false;
   formulari.reset(); //Borra els camps introduïts en el formulari 
}

/*Si el programa troba el formulari de contacte en una pàgina
executa les funcions de validació per als seus camps corresponents. Si no es validés
saltaria un Type error perquè no trobaria el formulari*/
if (formulariContacte!==null){
    function validarFormulariContatacte () {
    textAreaValidar();
    textInputValidar();
    numInputValidar();
    gmailInputValidar();
    selectorValidar();
    dataValidar();
 }
 validarFormulariContatacte();
}

/*Si el programa troba el formulari de ressenya en una pàgina 
executa les funcions de validació per als seus camps corresponents. Si no es validés
saltaria un Type error perquè no trobaria el formulari*/

if (formulariRessenya!==null){
    function validarFormulariRessenya() {
    textInputValidar();
    numInputValidar();
    horaInputValidar();
    textAreaValidar();
}
validarFormulariRessenya();
}

/*Indica que quan es borri el botó de selecció s'executi la funció que borra 
els missatges d'error i el contingut del text */
reset.addEventListener("click", () =>{
    borrarErrors(missatgesError);
} );

//Events que succeixen quan es valida el document
formulari.addEventListener("submit", (event) => {
    event.preventDefault();

    let submitCorrecte=false;/*es supossa inicialment que el formulari no és vàlid*/

    //S'assignen propietats a la secció que contindrà la targeta amb els resultats del formulari
    const resum = document.querySelector(".resum"); 
    resum.classList.add("background_2", "contenidor");
    
    /*Es creen dos arrays: un que guarda els camps a omplir i altre que indica a quin camps es relaciona la dada.
    Seran útils a l'hora de generar la targeta*/

    const llistatDades = [textinput, gmailinput, diainput, selector, 
        textarea, numinput, horainput];
    const llistatCamps= ["Nom i cognoms:", "gmail: ", "Data: ", "Opció selector: ", "Comentari: ", "Nota: ", "Hores jugades: "];

    //La funció que crea la targeta amb el resum
    function crearResum () {
        resum.textContent=``; //Buida el contingut de la targeta si s'havia omplert anteriorment
        const capcalera=document.createElement("p"); //Crea una capçalera
        capcalera.textContent=`Resum dels resultats`;
        resum.appendChild(capcalera);
        /*Crea línies de text automàticament on s'agafa un element del array que conté els valors dels inputs
        i els assigna a l'etiqueta de la dada corresponent de l'altre array segons la seva posició dins del array*/
        
        llistatDades.forEach((resultat,index)=> {
            if (resultat!==null){ 
                const element=document.createElement("p");

                element.textContent=`${llistatCamps[index]} ${resultat.value}`;
                resum.appendChild(element);
            }
        });
        // Crea una línia de text que agradeixi a l'usuari pel seu nom la seva elaboració del formulari
        const agraïment=document.createElement("p");
        agraïment.textContent=`Moltes gràcies pel teu missatge, ${textinput.value}`;
        resum.appendChild(agraïment);
    };
    //Funció que s'executa quan el formulari no ha estat correctament validat
    function errorSubmit (){
        resum.textContent=``;//Buida el contingut de la targeta si s'havia omplert anteriorment
        //Crea un missatge d'error que indica que queden camps per omplir correctament
        const errorEnviartMissatge=document.createElement("p"); 
        errorEnviartMissatge.textContent=`Falten camps per omplir`;
        errorEnviartMissatge.classList.add("errorformat");
        resum.appendChild(errorEnviartMissatge);
    };

    //Valida per a cada formulari que existeixi en la pròpia pàgina i que els seus camps corresponents hagin estat validats
    if (formulariContacte!==null && textInputCorrecte!==false && textAreaCorrecte!==false && gmailInputCorrecte!== false 
    && numInputCorrecte!==false && diaInputCorrecte!==false && selectorCorrecte!==false ) {
      submitCorrecte=true;    
    }
    else if (formulariRessenya!==null && textInputCorrecte!==false && textAreaCorrecte!==false && numInputCorrecte!==false) {
     submitCorrecte=true;
    }

    /*Si el formulari ha estat correctament validat crea la targeta de resum on es mostren els resultats
    alhora que es borra la selecció anterior*/
    if(submitCorrecte!==false){
        crearResum();
        borrarErrors(missatgesError);
    }

    //Si el formulari no ha estat correctament validat salta el missatge d'error
    else {
        errorSubmit();
    }
});






