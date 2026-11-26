/*
 * Temas elaborados por la persona usuaria e incorporados a la plataforma.
 * Sustituyen por completo a las preguntas de ejemplo del tema y, si las traen, a su título e ideas clave.
 * Se generan importando el PDF del tema (sección Importar) y copiando aquí el resultado.
 * Formato de cada pregunta: [enunciado, [CORRECTA, incorrecta, incorrecta, incorrecta], explicación].
 */
window.TEMARIO.misTemas = {
  // Tema 3 de Química · PDF «Tema 3 - Clasificación de los enlaces» (datos revisados en noviembre de 2026)
  q03: {
    titulo: "Clasificación de los enlaces químicos según la electronegatividad. Tipo de enlace y propiedades de las sustancias",
    resumen: [
      "Criterio atómico: Δχ separa apolar (0 a 0,4), polar (0,4 a 1,7) e iónico (más de 1,7). La media χ̄ separa metálico (baja) de covalente (alta).",
      "Carácter iónico parcial: Pauling 100[1 − 𝑒−(Δ𝜒)2/4], Hannay-Smyth 16Δ𝜒 + 3,5(Δ𝜒)2, o experimental 𝜇/(𝑒 𝑑).",
      "Triángulo de van Arkel-Ketelaar (1941, 1947): vértices iónico (CsF), metálico (Cs) y covalente (F2).",
      "Fajans (1923): catión pequeño y cargado, anión grande y cargado, y catión de 18 electrones aumentan el carácter covalente.",
      "Criterio por propiedades: iónicas, covalentes moleculares, covalentes reticulares y metálicas se distinguen por punto de fusión, conductividad y solubilidad.",
      "Trampa frecuente: El HF tiene Δχ de 1,78 y es covalente: la frontera de 1,7 es orientativa.",
      "Trampa frecuente: Conducir en disolución acuosa no prueba que la sustancia sea iónica: el HCl es covalente y su disolución conduce.",
      "Trampa frecuente: El grafito conduce la electricidad sin ser un metal.",
      "Trampa frecuente: Δχ = 0 no implica enlace covalente: también la tienen los metales puros.",
      "Trampa frecuente: Un anión grande aumenta el carácter covalente (LiI más covalente que LiF); un catión grande lo disminuye (CsCl más iónico que LiCl).",
      "Trampa frecuente: AgCl es menos soluble y funde más bajo que KCl aunque Ag+ y K+ tienen radios parecidos: lo explica la configuración 4d10 del Ag+.",
      "Trampa frecuente: CO2 es molecular y SiO2 reticular, aunque sus fórmulas se parezcan.",
      "Trampa frecuente: Fundir una sustancia molecular rompe fuerzas intermoleculares, no enlaces covalentes; fundir una reticular sí rompe enlaces covalentes."
    ],
    preguntas: [
      ["Con χ(H) = 2,20 y χ(Cl) = 3,16, el enlace H–Cl se clasifica como:",["Covalente polar","Covalente apolar","Iónico","Metálico"],"Δχ = 0,96, entre 0,4 y 1,7"],
      ["El triángulo de van Arkel-Ketelaar representa:",["La diferencia y la media de electronegatividad","La energía de ionización y la afinidad electrónica","El radio y la carga de los iones","El número atómico y la masa"],"Eje horizontal: media; eje vertical: diferencia"],
      ["¿Qué compuesto tiene mayor carácter iónico?",["CsF","LiI","LiF","NaCl"],"Δχ = 3,19, la mayor posible"],
      ["Según las reglas de Fajans, ¿qué cloruro tiene mayor carácter covalente?",["AgCl","NaCl","KCl","CsCl"],"Ag+ (4d10) polariza más que los cationes con configuración de gas noble"],
      ["Un sólido no conduce la electricidad, funde a 801 °C y conduce una vez fundido. Su enlace es:",["Iónico","Metálico","Covalente molecular","Covalente reticular"],"No conduce en sólido, sí fundido; punto de fusión alto (es el NaCl)"],
      ["Un sólido muy duro, que funde por encima de 1700 °C, no conduce en ningún estado y es insoluble en agua y en hexano, es probablemente:",["Covalente reticular","Iónico","Covalente molecular","Metálico"],"Muy duro, punto de fusión muy alto, aislante e insoluble (cuarzo, diamante)"],
      ["La disolución acuosa de HCl conduce la electricidad porque:",["El HCl reacciona con el agua y forma iones","El HCl es un compuesto iónico","Tiene electrones deslocalizados","Forma enlaces de hidrógeno"],"HCl + H2O → H3O+ + Cl−"],
      ["El HCl tiene μ = 1,08 D y d = 127 pm (e · d = 6,10 D). Su carácter iónico experimental es de aproximadamente:",["18 %","5 %","50 %","82 %"],"1,08 / 6,10 ≈ 0,18"],
      ["Una diferencia de electronegatividad nula corresponde a:",["Enlace covalente apolar o metálico","Solo enlace covalente apolar","Enlace iónico","Enlace dativo"],"Cl2 (covalente) y Na (metálico) tienen Δχ = 0"],
      ["El orden correcto de puntos de fusión de los haluros de litio es:",["LiF > LiCl > LiBr > LiI","LiI > LiBr > LiCl > LiF","LiCl > LiF > LiI > LiBr","Todos funden a la misma temperatura"],"Al crecer el anión aumenta el carácter covalente y baja el punto de fusión"],
      ["¿Qué catión tiene mayor poder polarizante?",["Al3+","Cs+","K+","Na+"],"Carga alta y radio pequeño: mayor z/r"],
      ["El CO2 es un gas y el SiO2 un sólido de punto de fusión muy alto porque:",["El SiO2 forma una red covalente tridimensional","El Si es más electronegativo que el C","El SiO2 es un compuesto iónico","El CO2 es polar"],"Red de tetraedros SiO4 frente a moléculas O=C=O"],
      ["La recomendación de la IUPAC de 2016 sobre el estado de oxidación se apoya en la escala de electronegatividad de:",["Allen","Pauling","Mulliken","Allred-Rochow"],"Asigna los electrones de enlace al átomo más electronegativo según Allen"],
      ["El grafito conduce la electricidad porque:",["Tiene electrones π deslocalizados en sus láminas","Es un metal","Contiene iones","Siempre lleva impurezas metálicas"],"Un electrón por átomo queda deslocalizado en cada lámina"],
      ["Según Hannay-Smyth, un enlace con Δχ = 2,0 tiene un carácter iónico de:",["46 %","32 %","63 %","86 %"],"16 × 2 + 3,5 × 4 = 46"]
    ]
  }
};
