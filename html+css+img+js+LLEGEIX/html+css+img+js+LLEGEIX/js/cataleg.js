//Part A: Cataleg dinàmic
//Dades de cada joc en array d'objectes
const jocs = [
    {   titol: "Hollow Knight",
        codi: "HK-001",
        genere:["Metroidvania"],
        plataforma: ["Ps5","Ps4", "Nintendo Switch 1", "Nintendo Switch 2", "PC", "Xbox One"],
        PreusSenseIVA: 12.4,
        descompte: -33,
        valoracio: 9.0,
        estoc:36,
        imatge: "Img_IA/HK.jpg",
        descripcio: "Encarna al cavalleret, un ésser fet de pur buit, un viatge a través dels diferents paratges del regne caigut en desgràcia de Hallownest per a salvar-ho d'una amenaça que fa que els insectes intel·ligents que habiten la regió tornin al seu estat primitiu i salvatge.",

    },
    {   titol: "Super Mario Odyssey",
        codi: "SMO-001",
        genere:["Plataformes", "Aventura", "Collect-a-thon"],
        plataforma: ["Nintendo Switch 1", "Nintendo Switch 2"],
        PreusSenseIVA: 49.59,
        descompte:-20,
        valoracio: 8.9,
        estoc:0,
        imatge: "Img_IA/SMO.jpg",
        descripcio: "En aquest joc, el jugador controla a Mario en un entorn 3D on pot explorar diversos mons, coneguts com a regnes, per a recollir Power Moons i salvar a la Princesa Peach de Bowser, que planeja casar-se amb ella.",

    },
    {   titol: "The Legend of Zelda: Breath of the Wild",
        codi: "BTOW-001",
        genere:["Món obert", "Aventura", "Acció"],
        plataforma: ["Nintendo Switch 1", "Nintendo Switch 2","Wii U"],
        PreusSenseIVA: 57.85,
        descompte:-25,
        valoracio: 9.0,
        estoc:4,
        imatge: "Img_IA/BOTW.jpg",
        descripcio: "Encarna a Link, un jove que desperta després d'un son de cent anys després d'haver defensat el regne de Hyrule de l'exèrcit de monstres del rei dimoni Ganon. Embarca't en una aventura on exploraràs el vastíssim món de Hyrule per a salvar el regne ia la princesa Zelda",

    },
    {   titol: "God of War",
        codi: "GW-001",
        genere:["Acció", "Aventura", "Hack and Slash"],
        plataforma: ["Ps4", "PC"],
        PreusSenseIVA: 16.53,
        descompte:-10,
        valoracio: 9.0,
        estoc:8,
        imatge: "Img_IA/GOW.jpg",
        descripcio: "Encarna a Kratos, un antic déu grec que viu en les terres nòrdiques i acompanya al seu fill Atreus en un viatge per complir la darrera voluntat de la seva difunta esposa, Fay: escampar les seves cendres al cim més alt dels nou regnes, alhora que brega amb Baldur, un déu maleït amb l'ausència de dolor i qualsevol plaer.",
    },
    {   titol: "Red Dead Redemption 2",
        codi:"RDR2-001",
        genere:["Acció", "Aventura", "Món obert"],
        plataforma: ["Ps4", "PC"],
        PreusSenseIVA: 47.4,
        descompte:-15,
        valoracio: 9.5,
        estoc:10,
        imatge: "Img_IA/RDR.jpg",
        descripcio: "Encarna a Arthur Morgan, un membre de la banda de Van der Linde, i viu la vida d'un fugitiu que viu el final del llunyà Oest americà del s.XIX, mentre lluita per sobreviure davant la llei, altres bandes, traïcions inesperades i accepta les conseqüències de la seva vida criminal per a convertir-se en un millor home.",
    },
    {   titol: "Clair Obscure Expedition 33",
        codi: "COE33-001",    
        genere:["JRPG", "Acció per torns"],
        plataforma: ["Ps5", "Xbox One", "PC"],
        PreusSenseIVA: 49.59,
        descompte:-33,
        valoracio: 9.4,
        estoc:10,
        imatge: "Img_IA/COE33.jpg",
        descripcio: "Embarca't en una èpica aventura amb l'expedició 33 arran un món inspirat en França per a arribar al monòlit i derrotar a la Peintresse, un ésser que pinta un número al monòlit que erradica a les persones que tinguin aquella edat. Coneix als membres de l'expedició, lluita juntament amb ells i crea llaços sentimentals amb els teus companys.",
    },
    {   titol: "Elden Ring",
        codi:"ER-001",
        genere:["Món obert", "Souls", "Acció", "Aventura"],
        plataforma: ["Ps5", "Ps4", "PC", "Nintendo Switch 2", "Xbox One"],
        PreusSenseIVA: 49.59,
        descompte: -20,
        valoracio: 8.4,
        estoc:25,
        imatge: "Img_IA/ER.jpg",
        descripcio: "Adopta la identitat d'un sense llum en busca de la benedicció del gran Arbre Auri en una aventura a través de les Terres Intermèdies per a restaurar el Elden Ring, la representació de l'ordre d'aquest món, alhora que derrotes als semideus, fills de deessa i reina Màrika.",
    },
    {   titol: "Resident Evil: Requiem",
        codi: "RER-001",
        genere:["Survival Horror", "Shooter"],
        plataforma: ["Ps5", "PC", "Nintendo Switch 2", "Xbox One"],
        PreusSenseIVA: 57.85,
        descompte: -15,
        valoracio: 9.3,
        estoc:15,
        imatge: "Img_IA/RER.jpg",
        descripcio: "En una fatídica nit, Grace Ashcroft, analista de l' FBI; és segrestada pel doctor Victor Gideon a l'hospital Rhodes Hill de Racoon City, on s'ha estès la infecció del virus T, convertint a tot el personal de l'hospital en zombies. Mentrestant, Leon S. Kennedy, expolicia experimentat en combatre zombies, es veu involucra't en la història de Grace. Encarna als dos personatges i ajudeu-vos mútuament per a sobreivure.",
    }
]
//Funció per a calcular el preu amb IVA
const TIPUS_IVA= 21;
const calculaPreuAmbIva = (jocs) => jocs.PreusSenseIVA*(1+TIPUS_IVA/100)*(1+jocs.descompte/100);

// Funció per a la targeta

function Targeta (jocs) {
    const seccioJoc= document.createElement("article"); //Crea un article per a cada joc
    seccioJoc.classList.add("background_2", "jocgrid"); //Li afegeix les dues classes indicades

    //Crear el títol des de l'array i se li assignen atributs específics
    const titol= document.createElement("h2");
    titol.textContent = jocs.titol;
    titol.classList.add("hover");
    titol.title=jocs.codi;

    //Crear la imatge des de l'array amb uns característiques específiques
    const img = document.createElement("img");
    img.src = jocs.imatge;
    img.alt = `Caràtula no oficial feta per IA: ${jocs.titol}`;
    img.width = 350;
    img.height=300;

    // Creació d'una llista d'html amb les característiques del joc dins d'un element de la llista individual
    const list= document.createElement("ul");
    const genere = document.createElement("li");
    const plataformes = document.createElement ("li");
    const preu = document.createElement ("li");
    const valoracio = document.createElement ("li");
    const estoc= document.createElement("li");
    const descripcio = document.createElement("li");

    //Assignació del contingut de cada element de la llista segons el contingut del array
    genere.textContent = `Gèneres: ${jocs.genere.join(", ")}`;
    plataformes.textContent= `Plataformes: ${jocs.plataforma.join(", ")}`;
    preu.textContent= `Preu descomptat (${jocs.descompte} %) amb IVA (+ ${TIPUS_IVA} %): ${calculaPreuAmbIva(jocs).toFixed(2)} €`;
    valoracio.textContent = `Valoració: ${jocs.valoracio}`;  
    descripcio.textContent = `Descripció: ${jocs.descripcio}`;

    /* Assignació de titles (textos emergents) la class hover 
    (assignada a una pseucdoclasse hover que resalta el text amb el cursor) als elements de la llista indicats*/
    valoracio.title="Valoració d'usuaris";
    valoracio.classList.add("hover");

    estoc.classList.add("hover");
    estoc.title="Unitats de 1a mà";

    //inserció dels elements de la llista dins d'aquesta
    list.append(genere, plataformes, preu, valoracio, estoc, descripcio);
   
   // Creació d'un botó de compra
    const consulta= document.createElement("button");
    consulta.textContent="Consulta'm";
    consulta.classList.add("hover");
    consulta.classList.add("errorhtml");
    
    /*Definició del compotament dinàmic de la targeta segons si l'estoc és menor a 5 o igual a 0 
     a la qual se li assigna una classe que resalta el contorn del contenidor i un modificador de text*/

    if (jocs.estoc<5 && jocs.estoc>=0) {
       seccioJoc.classList.add("estoc_baix");   
        
        if (jocs.estoc>0) {
        estoc.textContent = `Unitats en estoc BAIXES: ${jocs.estoc}`; 
        }
         if (jocs.estoc===0) {
        const negreta=document.createElement("strong");
        negreta.textContent="Estoc esgotat";
        estoc.appendChild(negreta);
        }
        
    }
    else {
        estoc.textContent = `Unitats en estoc: ${jocs.estoc}`; 
    }

    //Fusió de tots els elements creats amb l'article del joc
    seccioJoc.append(titol, img, list, consulta);

        return seccioJoc;
}

// Funció que crea visualment el cataleg dins de l'espai buit al grid d'index.html
function ferCatalog(llista) {
    const contenidor =document.querySelector("#cataleg");
    contenidor.textContent="";
    llista.forEach((joc) => { //Selecciona l'array corresponent i per a cada element d'aquest truca a la funció de crear targeta
        contenidor.appendChild(Targeta(joc));
    });
}

ferCatalog(jocs); //Activa la funció per crear visualment la llista

// Part B-Filtre de catàleg

const cercadorTitol = document.querySelector("#cercaTitol"); //selecciona l'input de camp de text per a filtrar jocs pel titol
const cercadorPlataforma = document.querySelector("#cercaPlataformes"); //selecciona el select per a indicar la paltaforma
const resultat = document.querySelector("#resultats"); //selecciona el camp de text on s'indica el número total de jocs mostrats pel filtre

function filtra() { //Funció per filtrar els jocs
    const titolText= cercadorTitol.value.trim().toLowerCase(); //el valor introduït al camp de text passa a no tenir espais i a estar en majúscules internament
    const plataformaSelect= cercadorPlataforma.value; //la opció del selector

    const filtre = jocs.filter ((jocs) => { // Arrowfunction per a comparar el contingut del filtre amb el dels jocs
        const titolCheck= jocs.titol.toLowerCase().includes(titolText); //compara el titol de cada joc amb el contingut del filtre de text
        const plataformaCheck= plataformaSelect === "Totes" || jocs.plataforma.includes(plataformaSelect); /*comprova si s'ha seleccionat l'opció de totes o 
        si el joc conté alguna plataforma igual a la seleccionada */
        return titolCheck && plataformaCheck; 
    });
    
    
    ferCatalog(filtre); // pinta una targeta si el filtre dona true

    resultat.textContent = `Mostrant ${filtre.length} de ${jocs.length} jocs`; 

    if (filtre.length===0){
        resultat.textContent =`No s'ha trobat cap joc`;

    }
}   

//Acualitza en temps real els dos selectors
cercadorTitol.addEventListener("input", filtra);
cercadorPlataforma.addEventListener("change", filtra);
//Evita que quan es prengui Enter accidentalment la pàgina es recargui per culpa del form que conté el sistema de filtratge
document.querySelector("#cerca").addEventListener("submit", (event) => event.preventDefault());
filtra(); //Activa el sistema de filtratge