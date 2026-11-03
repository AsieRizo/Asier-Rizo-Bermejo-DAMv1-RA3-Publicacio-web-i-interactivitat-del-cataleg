//Part A: Cataleg dinàmic
//Dades en arrays d'objectes
const joc = [
    {   titol: "Hollow Knight",
        codi: "HK-001",
        genere:["Metroidvania"],
        plataforma: ["Ps5","Ps4", "Nintendo Switch 1", "Nintendo Switch 2", "PC", "Xbox One"],
        PreusSenseIVA: 11.85,
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
        PreusSenseIVA: 47.4,
        descompte:-20,
        valoracio: 8.9,
        estoc:12,
        imatge: "Img_IA/SMO.jpg",
        descripcio: "En aquest joc, el jugador controla a Mario en un entorn 3D on pot explorar diversos mons, coneguts com a regnes, per a recollir Power Moons i salvar a la Princesa Peach de Bowser, que planeja casar-se amb ella.",

    },
    {   titol: "The Legend of Zelda: Breath of the Wild",
        codi: "BTOW-001",
        genere:["Món obert", "Aventura", "Acció"],
        plataforma: ["Nintendo Switch 1", "Nintendo Switch 2","Wii U"],
        PreusSenseIVA: 55.3,
        descompte:-25,
        valoracio: 9.0,
        estoc:5,
        imatge: "Img_IA/BOTW.jpg",
        descripcio: "Encarna a Link, un jove que desperta després d'un son de cent anys després d'haver defensat el regne de Hyrule de l'exèrcit de monstres del rei dimoni Ganon. Embarca't en una aventura on exploraràs el vastíssim món de Hyrule per a salvar el regne ia la princesa Zelda",

    },
    {   titol: "God of War",
        codi: "GW-001",
        genere:["Acció", "Aventura", "Hack and Slash"],
        plataforma: ["Ps4", "PC"],
        PreusSenseIVA: 20,
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
        PreusSenseIVA: 47.4,
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
        PreusSenseIVA: 47.4,
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
        PreusSenseIVA: 55.3,
        descompte: -15,
        valoracio: 9.3,
        estoc:15,
        imatge: "Img_IA/RER.jpg",
        descripcio: "En una fatídica nit, Grace Ashcroft, analista de l' FBI; és segrestada pel doctor Victor Gideon a l'hospital Rhodes Hill de Racoon City, on s'ha estès la infecció del virus T, convertint a tot el personal de l'hospital en zombies. Mentrestant, Leon S. Kennedy, expolicia experimentat en combatre zombies, es veu involucra't en la història de Grace. Encarna als dos personatges i ajudeu-vos mútuament per a sobreivure.",
    }
]
//Funció per a calcular el preu amb IVA
const IVA= 21;
function calculaPreuFinal (joc) {
    return joc.PreusSenseIVA*(1+IVA/100)*(1+joc.descompte/100);
}

// Funció per a la targeta

function Targeta (joc) {
    const seccioJoc= document.createElement("article");
    seccioJoc.classList.add("background_2", "jocgrid");

    const titol= document.createElement("h2");
    titol.textContent = joc.titol;
    titol.classList.add("hover");
    titol.title=joc.codi;

    const img = document.createElement("img");
    img.src = joc.imatge;
    img.alt = `Caràtula no oficial feta per IA: ${joc.titol}`;
    img.width = 350;
    img.height=300;

    const list= document.createElement("ul");
    const genere = document.createElement("li");
    const plataformes = document.createElement ("li");
    const preu = document.createElement ("li");
    const valoracio = document.createElement ("li");
    const estoc= document.createElement("li");
    const descripcio = document.createElement("li");

    genere.textContent = `Gèneres: ${joc.genere.join(", ")}`;
    plataformes.textContent= `Plataformes: ${joc.plataforma.join(", ")}`;
    preu.textContent= `Preu descomptat (${joc.descompte} %) amb IVA (+ ${IVA} %): ${calculaPreuFinal(joc).toFixed(2)} €`;
    valoracio.textContent = `Valoració: ${joc.valoracio}`;
    estoc.textContent = `Unitats en estoc: ${joc.estoc}`;   
    descripcio.textContent = `Descripció: ${joc.descripcio}`;

    valoracio.title="Valoració d'usuaris";
    valoracio.classList.add("hover");

    estoc.classList.add("hover");
    estoc.title="Unitats de 1a mà";

    list.append(genere, plataformes, preu, valoracio, descripcio);
   
    const compraMissatge= document.createElement("p");
    compraMissatge.textContent="Consulta'm"

    const enllaçCompra= document.createElement("a");
    enllaçCompra.href="Error.html";
    
    compraMissatge.appendChild(enllaçCompra);
    

    if (joc.estoc<=5 && joc.estoc>0) {
       seccioJoc.classList.add("estoc_baix");   
    }
    else if (joc.estoc===0){
        estoc.textContent="Estoc esgotat";
    }

    seccioJoc.append(titol, img, list, compraMissatge);

        return seccioJoc;
}

function ferCatalog(llista) {
    const contenidor =document.querySelector("#cataleg");
    contenidor.textContent="";
    llista.forEach((joc) => {
        contenidor.appendChild(Targeta(joc));
    });
}

ferCatalog(joc);