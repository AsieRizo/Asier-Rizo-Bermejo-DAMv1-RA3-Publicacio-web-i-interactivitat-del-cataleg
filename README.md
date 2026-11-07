EXPLICACIÓ DEL CODI: 
- UBICACIÓ DE LES FUNCIONALITATS:
  - Búsqueda dinàmica i filtratge de jocs amb targetes (Apartats A i B): js_cataleg.js.
  - Validació en directe del formulari (Apartat C): js_contacte.js.
  - Canvi de fons (Apartat D): js_tema.js.
- Tria de let i const:
  - Const: el millor exemple és l'IVA, que és inmutable.
  - Let: qualsevol de les que validen que un camp del formulari tingui el format correcte, com "textAreaCorrecte", ja que aquests varien constantment.
- Funció de Callback:
  - Les funcions que validen el format dels camps dels formularis quan detecta un canvi en el camp causat per un input de l'usuari, com "textarea.addEventListener("input", () => {...})"
