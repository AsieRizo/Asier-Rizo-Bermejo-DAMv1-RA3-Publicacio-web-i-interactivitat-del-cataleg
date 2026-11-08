- UBICACIÓ I EXPLICACIÓ DE LES FUNCIONALITATS:
  - Búsqueda dinàmica i filtratge de jocs amb targetes (Apartats A i B): js/cataleg.js => Crea targetes de cada joc dins del grid del catàleg i les borra o fa aparèixer en temps real segons les especificacions d'un filtre que funciona segons el títol introduït per l'usuari i la plataforma.
  - Validació en directe del formulari (Apartat C): js/contacte.js => Controla que el format de cada camp dels formularis sigui correcte, mostrant missatges d'error en temps real i mostrant targetes de resum en enviar amb els inputs de l'usuari sempre que tot sigui correcte.
  - Canvi de fons (Apartat D): js/tema.js => Canvia de mode clar a mode fosc l'estètica de la pàgina.
  
- TRIA DE let i const:
  - Const: El millor exemple és l'IVA, que és immutable.
  - Let: Qualsevol de les que validen que un camp del formulari tingui el format correcte, com "textAreaCorrecte", ja que aquests varien constantment.
  
- FUNCIÓ DEL CALLBACK: Les funcions que validen el format dels camps dels formularis quan detecten un canvi en el camp causat per un input de l'usuari segons una condició establerta. Com "textarea.addEventListener("input", () => {...})", que valida si el text de l'usuari dins del camp d'introduir nom i cognom té un mínim de 3 caràcters i mostra un missatge d'error amb el nombre de xifres actualitzat en temps real cada vegada que detecta un nou input.
