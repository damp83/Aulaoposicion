/*
 * Parte específica — M2 Química (Anexo VII de la convocatoria de personal laboral fijo MITECO, OEP 2023-2024).
 * Formato: [enunciado, [CORRECTA, incorrecta, incorrecta, incorrecta], explicación]. La app baraja las opciones.
 */
window.TEMARIO.temas.push(
  {
    id: "q01", bloque: "Q",
    titulo: "Sistema periódico. Configuración electrónica. Propiedades periódicas",
    norma: "Tema 1 de la parte específica",
    resumen: [
      "Mendeléiev (1869) ordenó los elementos por masa atómica; Moseley (1913) demostró que el criterio correcto es el número atómico Z.",
      "Llenado de orbitales: principio de Aufbau (regla n + l), principio de exclusión de Pauli (dos electrones no pueden tener los cuatro números cuánticos iguales) y regla de Hund (máxima multiplicidad).",
      "Excepciones habituales: Cr [Ar] 3d⁵ 4s¹ y Cu [Ar] 3d¹⁰ 4s¹ (estabilidad de subniveles semillenos y llenos).",
      "En un grupo, de arriba abajo, aumentan el radio atómico y el carácter metálico; disminuyen la energía de ionización y la electronegatividad.",
      "En un periodo, de izquierda a derecha, disminuye el radio y aumentan la energía de ionización y la electronegatividad. El elemento más electronegativo es el flúor.",
      "Bloques: s (grupos 1-2), p (13-18), d (metales de transición) y f (lantánidos y actínidos)."
    ],
    preguntas: [
      ["El criterio de ordenación de la tabla periódica actual, establecido a partir de los trabajos de Moseley, es:", ["El número atómico", "La masa atómica", "El número másico", "La electronegatividad"], "Moseley relacionó la frecuencia de los rayos X característicos con la carga nuclear (Z)."],
      ["La configuración electrónica del cromo (Z = 24) en su estado fundamental es:", ["[Ar] 3d⁵ 4s¹", "[Ar] 3d⁴ 4s²", "[Ar] 3d⁶", "[Ar] 4s² 4p⁴"], "Excepción a la regla de Aufbau: el subnivel 3d semilleno aporta estabilidad adicional."],
      ["La configuración electrónica del hierro (Z = 26) es:", ["[Ar] 3d⁶ 4s²", "[Ar] 3d⁸", "[Ar] 3d⁵ 4s¹ 4p²", "[Kr] 4d⁶"], "Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶."],
      ["«Dos electrones de un mismo átomo no pueden tener sus cuatro números cuánticos iguales» es el enunciado de:", ["El principio de exclusión de Pauli", "La regla de Hund", "El principio de Aufbau", "El principio de incertidumbre de Heisenberg"], "La regla de Hund se refiere a la máxima multiplicidad en orbitales degenerados."],
      ["El elemento con mayor electronegatividad de la tabla periódica es:", ["El flúor", "El oxígeno", "El cloro", "El cesio"], "Flúor: 3,98 en la escala de Pauling. El cesio y el francio son los menos electronegativos."],
      ["¿Qué elemento tiene la afinidad electrónica más exotérmica (desprende más energía al captar un electrón)?", ["El cloro", "El flúor", "El oxígeno", "El neón"], "Aunque el F es más electronegativo, su pequeño tamaño genera repulsiones interelectrónicas que hacen menos exotérmica su afinidad electrónica que la del Cl."],
      ["Dentro de un mismo grupo, al descender:", ["Aumenta el radio atómico y disminuye la energía de ionización", "Disminuye el radio atómico y aumenta la energía de ionización", "Aumentan el radio y la energía de ionización", "No varía el radio atómico"], "Al descender se añaden capas electrónicas: los electrones externos están más lejos del núcleo y más apantallados."],
      ["Un orbital con número cuántico secundario l = 2 es de tipo:", ["d", "p", "s", "f"], "l = 0 (s), 1 (p), 2 (d), 3 (f). Un subnivel d tiene 5 orbitales y admite 10 electrones."],
      ["¿Cuántos elementos contiene el cuarto periodo de la tabla periódica?", ["18", "8", "32", "10"], "Del K (Z = 19) al Kr (Z = 36): se llenan 4s, 3d y 4p."],
      ["Los elementos del grupo 16 (O, S, Se, Te, Po) se denominan:", ["Anfígenos o calcógenos", "Halógenos", "Térreos", "Pnictógenos o nitrogenoideos"], "Halógenos: grupo 17. Térreos: grupo 13. Nitrogenoideos: grupo 15."]
    ]
  },
  {
    id: "q02", bloque: "Q",
    titulo: "El enlace químico. Aspectos energéticos",
    norma: "Tema 2 de la parte específica",
    resumen: [
      "Se forma un enlace cuando la energía del sistema unido es menor que la de los átomos separados. La distancia de enlace corresponde al mínimo de la curva de energía potencial.",
      "Energía de enlace: energía necesaria para romper un mol de enlaces en estado gaseoso; romper enlaces es siempre endotérmico.",
      "Estimación de entalpías: ΔH reacción ≈ Σ E(enlaces rotos) − Σ E(enlaces formados).",
      "A mayor orden de enlace, menor longitud y mayor energía de enlace (C–C < C=C < C≡C).",
      "Regla del octeto y sus excepciones: octeto incompleto (BF₃), octeto expandido (PCl₅, SF₆) y moléculas con número impar de electrones (NO, NO₂)."
    ],
    preguntas: [
      ["La distancia de enlace en una molécula diatómica corresponde a:", ["El mínimo de la curva de energía potencial frente a la distancia internuclear", "El punto en el que la energía potencial es cero", "La suma de los radios de van der Waals", "El máximo de la curva de energía potencial"], "En ese mínimo se equilibran las atracciones y las repulsiones."],
      ["La energía de enlace se define como la energía:", ["Necesaria para romper un mol de enlaces en estado gaseoso", "Desprendida al disolver un mol de sustancia en agua", "Necesaria para fundir un mol de sustancia", "Desprendida al formar un mol de cristal iónico a partir de sus iones gaseosos"], "La última opción describe la energía reticular."],
      ["¿Cuál de estas moléculas tiene mayor energía de enlace?", ["N₂", "O₂", "F₂", "Cl₂"], "El triple enlace N≡N (unos 945 kJ/mol) explica la baja reactividad del nitrógeno."],
      ["La energía del enlace F–F es menor que la del Cl–Cl porque:", ["Los pares no enlazantes de los átomos de flúor, muy próximos, se repelen fuertemente", "El flúor es menos electronegativo que el cloro", "El F₂ tiene un enlace doble", "El flúor tiene orbitales d disponibles"], "El pequeño tamaño del flúor provoca repulsiones entre pares solitarios."],
      ["Para estimar la entalpía de una reacción en fase gaseosa a partir de energías de enlace se calcula:", ["Σ E(enlaces rotos) − Σ E(enlaces formados)", "Σ E(enlaces formados) − Σ E(enlaces rotos)", "Σ E(enlaces rotos) + Σ E(enlaces formados)", "El producto de las energías de enlace"], "Romper enlaces absorbe energía y formarlos la libera."],
      ["Es un ejemplo de molécula con octeto incompleto en el átomo central:", ["BF₃", "PCl₅", "SF₆", "CH₄"], "El boro queda con 6 electrones de valencia. PCl₅ y SF₆ tienen octeto expandido."],
      ["En la serie C–C, C=C y C≡C, al aumentar el orden de enlace:", ["Disminuye la longitud y aumenta la energía de enlace", "Aumentan la longitud y la energía de enlace", "Disminuyen la longitud y la energía de enlace", "No varía la longitud"], "Longitudes aproximadas: 154, 134 y 120 pm."]
    ]
  },
  {
    id: "q03", bloque: "Q",
    titulo: "Clasificación de los enlaces según la electronegatividad. Propiedades de las sustancias",
    norma: "Tema 3 de la parte específica",
    resumen: [
      "La diferencia de electronegatividad (Δχ) orienta el tipo de enlace: valores pequeños, covalente apolar; intermedios, covalente polar; grandes (en torno a 1,7 o más), predominantemente iónico.",
      "Escalas de electronegatividad: Pauling (energías de enlace), Mulliken (media de energía de ionización y afinidad electrónica) y Allred-Rochow.",
      "Sustancias iónicas: sólidos duros y frágiles, pf altos, conducen fundidas o disueltas, no en estado sólido.",
      "Sólidos covalentes reticulares (diamante, SiO₂): muy duros, pf muy altos, aislantes (excepto el grafito).",
      "Sustancias moleculares: pf y pe bajos, no conducen. Metales: conducen en estado sólido, son dúctiles y maleables.",
      "Una molécula con enlaces polares puede ser apolar si su geometría anula los dipolos (CO₂, CCl₄)."
    ],
    preguntas: [
      ["Una sustancia que no conduce la electricidad en estado sólido, pero sí fundida o disuelta en agua, y tiene un punto de fusión elevado, es probablemente:", ["Iónica", "Metálica", "Molecular apolar", "Covalente reticular"], "Los iones solo tienen movilidad al fundir o disolver el cristal."],
      ["El grafito es una excepción entre los sólidos covalentes reticulares porque:", ["Conduce la electricidad", "Tiene punto de fusión bajo", "Es soluble en agua", "Es más duro que el diamante"], "Cada carbono (sp²) deja un electrón deslocalizado en el plano de las láminas."],
      ["La molécula de CO₂ es apolar porque:", ["Es lineal y los momentos dipolares de los enlaces C=O se anulan", "Los enlaces C=O son apolares", "El carbono y el oxígeno tienen la misma electronegatividad", "Tiene pares de electrones no enlazantes en el carbono"], "Los enlaces son polares, pero la geometría lineal anula el momento dipolar total."],
      ["La escala de electronegatividad de Mulliken se basa en:", ["La media de la energía de ionización y la afinidad electrónica", "Las energías de disociación de enlaces", "La carga nuclear efectiva y el radio covalente", "El radio iónico"], "La de Pauling usa energías de enlace; la de Allred-Rochow, carga nuclear efectiva y radio."],
      ["¿Cuál de los siguientes compuestos tiene un enlace con mayor carácter iónico?", ["CsF", "NaCl", "HCl", "Cl₂"], "Combina el elemento menos electronegativo habitual (Cs) con el más electronegativo (F)."],
      ["El diamante es muy duro y tiene un punto de fusión muy alto porque:", ["Es un sólido covalente reticular con enlaces C–C muy fuertes en las tres dimensiones", "Está formado por moléculas unidas por puentes de hidrógeno", "Es un sólido iónico", "Sus electrones están deslocalizados"], "Cada carbono sp³ se une tetraédricamente a otros cuatro."],
      ["Las sustancias metálicas son buenas conductoras en estado sólido porque:", ["Tienen electrones de valencia deslocalizados que pueden moverse por la red", "Contienen iones móviles", "Forman moléculas polares", "Sus átomos tienen electronegatividades muy altas"], "Modelo del «mar de electrones» o teoría de bandas."]
    ]
  },
  {
    id: "q04", bloque: "Q",
    titulo: "Enlace covalente: orbitales moleculares y geometría molecular",
    norma: "Tema 4 de la parte específica",
    resumen: [
      "TRPECV (VSEPR): los pares electrónicos del átomo central se disponen lo más alejados posible. CH₄ tetraédrica (109,5°), NH₃ piramidal (~107°), H₂O angular (~104,5°), BF₃ trigonal plana (120°), CO₂ lineal (180°), PCl₅ bipirámide trigonal, SF₆ octaédrica.",
      "Hibridación: sp³ (tetraédrica), sp² (trigonal), sp (lineal), sp³d (bipirámide trigonal), sp³d² (octaédrica).",
      "Enlace σ: solapamiento frontal. Enlace π: solapamiento lateral de orbitales p.",
      "Teoría de orbitales moleculares (TOM): orden de enlace = (e⁻ enlazantes − e⁻ antienlazantes)/2.",
      "La TOM explica el paramagnetismo del O₂ (dos electrones desapareados en orbitales π*) y la inexistencia del He₂ (orden de enlace 0)."
    ],
    preguntas: [
      ["Según la TRPECV, la geometría de la molécula de NH₃ es:", ["Piramidal trigonal", "Trigonal plana", "Tetraédrica", "Angular"], "Cuatro pares electrónicos (uno no enlazante) en disposición tetraédrica; la forma molecular es piramidal, con ángulo ≈ 107°."],
      ["El ángulo H–O–H en la molécula de agua es aproximadamente:", ["104,5°", "109,5°", "120°", "90°"], "Los dos pares no enlazantes del oxígeno comprimen el ángulo tetraédrico."],
      ["La hibridación de los átomos de carbono en el etileno (eteno) es:", ["sp²", "sp³", "sp", "sp³d"], "Cada carbono forma tres enlaces σ en un plano y un enlace π con el orbital p sin hibridar."],
      ["La geometría de la molécula de SF₆ es:", ["Octaédrica", "Bipirámide trigonal", "Tetraédrica", "Plano cuadrada"], "Seis pares enlazantes alrededor del azufre (hibridación sp³d²)."],
      ["Según la teoría de orbitales moleculares, el orden de enlace del O₂ es:", ["2", "1", "3", "2,5"], "O₂: 10 electrones de valencia en orbitales enlazantes y 6 en antienlazantes → (10 − 6)/2 = 2."],
      ["La teoría de orbitales moleculares justifica que el O₂ es paramagnético porque:", ["Tiene dos electrones desapareados en orbitales π antienlazantes", "Tiene un enlace triple", "Todos sus electrones están apareados", "Tiene un orden de enlace igual a cero"], "La estructura de Lewis no explica este comportamiento magnético."],
      ["Un enlace π se forma por:", ["Solapamiento lateral de orbitales p", "Solapamiento frontal de orbitales s", "Solapamiento frontal de orbitales híbridos", "Transferencia completa de electrones"], "El solapamiento frontal da lugar a enlaces σ."],
      ["La molécula de He₂ no es estable porque su orden de enlace es:", ["0", "1", "0,5", "2"], "Dos electrones en el orbital σ1s enlazante y dos en el σ*1s antienlazante."]
    ]
  },
  {
    id: "q05", bloque: "Q",
    titulo: "Fuerzas intermoleculares. Sólidos moleculares. Propiedades anómalas del agua",
    norma: "Tema 5 de la parte específica",
    resumen: [
      "Fuerzas de van der Waals: dipolo-dipolo (moléculas polares), dipolo-dipolo inducido y de dispersión de London (presentes en todas las moléculas; crecen con el tamaño y la polarizabilidad).",
      "Puente de hidrógeno: H unido a un átomo muy electronegativo y pequeño (F, O, N) que interacciona con un par solitario de otro átomo de F, O o N.",
      "Anomalías del agua por los puentes de hidrógeno: pf y pe muy altos respecto al H₂S, densidad máxima a 4 °C, hielo menos denso que el agua líquida, calor específico (4,18 J·g⁻¹·K⁻¹) y calor de vaporización elevados.",
      "Importancia para la vida: el hielo flota y aísla el agua de debajo; regulación térmica; constante dieléctrica alta (≈ 80), que la convierte en buen disolvente de compuestos iónicos y polares.",
      "Sólidos moleculares (I₂, hielo, CO₂ sólido): blandos, pf bajos, no conductores."
    ],
    preguntas: [
      ["La temperatura a la que el agua líquida alcanza su densidad máxima es:", ["4 °C", "0 °C", "−4 °C", "20 °C"], "Por debajo de 4 °C empieza a formarse la estructura abierta de puentes de hidrógeno."],
      ["El hielo flota sobre el agua líquida porque:", ["Su estructura cristalina, mantenida por puentes de hidrógeno, es abierta y menos densa", "Contiene aire disuelto", "Sus moléculas son más ligeras", "Las fuerzas de London son mayores en el sólido"], "Cada molécula forma cuatro puentes de hidrógeno en disposición tetraédrica (hielo hexagonal)."],
      ["El punto de ebullición del H₂O (100 °C) es mucho mayor que el del H₂S (≈ −60 °C) debido a:", ["Los puentes de hidrógeno entre moléculas de agua", "La mayor masa molecular del agua", "Las fuerzas de dispersión de London", "El enlace iónico del agua"], "El H₂S tiene mayor masa molecular, pero no forma puentes de hidrógeno apreciables."],
      ["El estado de agregación de los halógenos a temperatura ambiente (F₂ y Cl₂ gases, Br₂ líquido, I₂ sólido) se explica por:", ["El aumento de las fuerzas de dispersión de London con el tamaño molecular", "La formación de puentes de hidrógeno", "El aumento de la polaridad de las moléculas", "El carácter iónico creciente"], "Son moléculas apolares; la polarizabilidad aumenta con el número de electrones."],
      ["Para que se forme un puente de hidrógeno, el hidrógeno debe estar unido covalentemente a:", ["F, O o N", "C, Si o Ge", "Cl, Br o I", "Cualquier metal alcalino"], "Átomos muy electronegativos y de pequeño tamaño."],
      ["La elevada constante dieléctrica del agua (≈ 80) explica que:", ["Sea un buen disolvente de compuestos iónicos", "Tenga una densidad máxima a 4 °C", "Sea un buen conductor eléctrico en estado puro", "Tenga un calor específico bajo"], "Debilita la atracción electrostática entre los iones del soluto."],
      ["Las fuerzas intermoleculares presentes en todas las moléculas, polares o apolares, son:", ["Las fuerzas de dispersión de London", "Los puentes de hidrógeno", "Las interacciones dipolo-dipolo", "Las interacciones ion-dipolo"], "Se deben a dipolos instantáneos inducidos."],
      ["El alto calor específico del agua (≈ 4,18 J·g⁻¹·K⁻¹) tiene como consecuencia:", ["Que las grandes masas de agua moderen el clima y regulen la temperatura de los seres vivos", "Que el agua hierva a baja temperatura", "Que el hielo sea más denso que el agua líquida", "Que el agua sea mala disolvente"], "Absorbe mucho calor con poca variación de temperatura."]
    ]
  },
  {
    id: "q06", bloque: "Q",
    titulo: "Sustancias iónicas. Energía reticular y cristales iónicos",
    norma: "Tema 6 de la parte específica",
    resumen: [
      "Energía reticular: energía desprendida al formarse un mol de cristal iónico a partir de sus iones en estado gaseoso.",
      "Ecuación de Born-Landé: la energía reticular aumenta con la carga de los iones y disminuye con la distancia interiónica. Por eso MgO (2+/2−) tiene mucha más energía reticular que NaCl.",
      "Ciclo de Born-Haber: sublimación del metal, ionización, disociación del no metal, afinidad electrónica y energía reticular (aplicación de la ley de Hess).",
      "Estructuras e índices de coordinación: NaCl 6:6, CsCl 8:8, blenda (ZnS) 4:4, fluorita (CaF₂) 8:4.",
      "Propiedades: duros pero frágiles, pf altos, solubles en disolventes polares, conducen fundidos o en disolución."
    ],
    preguntas: [
      ["La energía reticular de un compuesto iónico aumenta cuando:", ["Aumenta la carga de los iones y disminuye la distancia entre ellos", "Disminuye la carga de los iones", "Aumenta el tamaño de los iones", "Disminuye el índice de coordinación"], "La energía reticular es proporcional a z⁺·z⁻/d₀ (Born-Landé)."],
      ["¿Cuál de estos compuestos tiene el punto de fusión más alto?", ["MgO", "NaCl", "KCl", "NaF"], "MgO funde a unos 2.800 °C por la carga 2+/2− de sus iones."],
      ["El ciclo de Born-Haber permite calcular la energía reticular aplicando:", ["La ley de Hess", "La ley de Raoult", "La ecuación de Nernst", "La ley de Henry"], "La entalpía es función de estado."],
      ["El índice de coordinación de los iones en la red del cloruro de sodio es:", ["6:6", "8:8", "4:4", "8:4"], "Red cúbica centrada en las caras; cada ion está rodeado de 6 de signo contrario. CsCl es 8:8."],
      ["Los cristales iónicos son frágiles porque:", ["Un desplazamiento de las capas enfrenta iones del mismo signo, que se repelen", "Sus enlaces son muy débiles", "Contienen electrones libres", "Están formados por moléculas"], "La repulsión entre iones iguales provoca la fractura."],
      ["¿Cuál de los siguientes pasos NO forma parte del ciclo de Born-Haber para el NaCl?", ["La vaporización del agua", "La sublimación del sodio", "La primera energía de ionización del sodio", "La afinidad electrónica del cloro"], "También incluye la disociación de ½ Cl₂ y la energía reticular."],
      ["La estructura de la fluorita (CaF₂) tiene índices de coordinación:", ["8:4", "6:6", "4:4", "6:3"], "Cada Ca²⁺ rodeado de 8 F⁻ y cada F⁻ de 4 Ca²⁺."]
    ]
  },
  {
    id: "q07", bloque: "Q",
    titulo: "Teoría de bandas. Conductores, semiconductores y aislantes. Superconductividad",
    norma: "Tema 7 de la parte específica",
    resumen: [
      "En un sólido, los orbitales atómicos forman bandas: banda de valencia, banda de conducción y, entre ellas, la banda prohibida (gap).",
      "Conductor: bandas solapadas o parcialmente llenas. Semiconductor: gap pequeño (Si ≈ 1,1 eV; Ge ≈ 0,67 eV). Aislante: gap grande (diamante ≈ 5,5 eV).",
      "La conductividad de un semiconductor aumenta con la temperatura; la de un metal disminuye.",
      "Dopado tipo n: Si con elementos del grupo 15 (P, As), que aportan electrones. Tipo p: con elementos del grupo 13 (B, Ga), que crean huecos.",
      "Superconductividad: resistencia eléctrica nula por debajo de una temperatura crítica (Tc) y expulsión del campo magnético (efecto Meissner). Descubierta por Kamerlingh Onnes en 1911 en mercurio; explicada por la teoría BCS (pares de Cooper).",
      "Superconductores de alta temperatura: cupratos como el YBa₂Cu₃O₇ (Tc ≈ 92 K, por encima de la temperatura del nitrógeno líquido, 77 K)."
    ],
    preguntas: [
      ["En un material aislante, la banda prohibida (gap) entre la banda de valencia y la de conducción es:", ["Grande, de varios electronvoltios", "Inexistente, porque las bandas se solapan", "Muy pequeña, del orden de 1 eV", "Siempre negativa"], "Ejemplo: diamante, ≈ 5,5 eV."],
      ["Al aumentar la temperatura, la conductividad eléctrica de un semiconductor intrínseco:", ["Aumenta", "Disminuye", "No varía", "Se anula"], "Más electrones adquieren energía para saltar a la banda de conducción. En los metales ocurre lo contrario."],
      ["Un semiconductor de tipo n se obtiene dopando silicio con:", ["Fósforo o arsénico", "Boro o galio", "Carbono", "Oxígeno"], "Los elementos del grupo 15 aportan un electrón adicional."],
      ["Un semiconductor de tipo p se obtiene dopando silicio con:", ["Boro o galio", "Fósforo o arsénico", "Germanio", "Antimonio"], "Los elementos del grupo 13 crean huecos (portadores positivos)."],
      ["La expulsión del campo magnético del interior de un superconductor se conoce como:", ["Efecto Meissner", "Efecto Hall", "Efecto Joule", "Efecto fotoeléctrico"], "Permite fenómenos de levitación magnética."],
      ["La superconductividad fue descubierta en 1911 por:", ["Heike Kamerlingh Onnes, en el mercurio", "Bardeen, Cooper y Schrieffer, en el plomo", "Bednorz y Müller, en cupratos", "Michael Faraday, en el cobre"], "La teoría BCS (1957) la explicó; Bednorz y Müller descubrieron los superconductores cerámicos de alta temperatura en 1986."],
      ["La teoría BCS explica la superconductividad convencional mediante:", ["La formación de pares de Cooper de electrones", "La ausencia de electrones de valencia", "El solapamiento de la banda de valencia y la de conducción", "La formación de huecos por dopado"], "Los pares de electrones se mueven sin dispersión por la red."],
      ["La importancia de superconductores como el YBa₂Cu₃O₇ radica en que:", ["Su temperatura crítica supera la del nitrógeno líquido (77 K)", "Son superconductores a temperatura ambiente", "Son metales puros muy baratos", "No presentan efecto Meissner"], "Tc ≈ 92 K, lo que abarata mucho la refrigeración frente al helio líquido."]
    ]
  },
  {
    id: "q08", bloque: "Q",
    titulo: "Importancia de los semiconductores y superconductores en las nuevas tecnologías",
    norma: "Tema 8 de la parte específica",
    resumen: [
      "La unión p-n es la base del diodo; los transistores (bipolares y MOSFET) son la base de los circuitos integrados y microprocesadores.",
      "LED: emiten luz al recombinarse electrones y huecos; el color depende del gap del semiconductor (GaAs, GaN, GaP…).",
      "Células fotovoltaicas: el efecto fotovoltaico en una unión p-n de silicio convierte la luz en corriente eléctrica.",
      "Superconductores: imanes de resonancia magnética (aleaciones Nb-Ti enfriadas con helio líquido), aceleradores de partículas, trenes de levitación magnética (maglev), SQUID (magnetómetros de alta sensibilidad) y cables sin pérdidas."
    ],
    preguntas: [
      ["El dispositivo formado por la unión de un semiconductor tipo p y otro tipo n que permite el paso de corriente en un solo sentido es:", ["El diodo", "El condensador", "La resistencia", "El transformador"], "En polarización directa conduce; en inversa, prácticamente no."],
      ["En un LED, el color de la luz emitida depende principalmente de:", ["La anchura de la banda prohibida del semiconductor", "La intensidad de la corriente", "El tamaño del encapsulado", "La temperatura ambiente"], "La energía del fotón es aproximadamente igual al gap."],
      ["Las células fotovoltaicas convencionales se fabrican mayoritariamente con:", ["Silicio", "Cobre", "Wolframio", "Aluminio"], "Silicio monocristalino o policristalino con una unión p-n."],
      ["Los potentes imanes de los equipos de resonancia magnética utilizan bobinas:", ["Superconductoras, enfriadas con helio líquido", "De cobre a temperatura ambiente", "De silicio dopado", "De grafito"], "Habitualmente de aleación niobio-titanio."],
      ["El componente electrónico básico de los circuitos integrados y microprocesadores es:", ["El transistor", "El diodo LED", "La célula fotovoltaica", "El termopar"], "Un procesador actual contiene miles de millones de transistores MOSFET."],
      ["El arseniuro de galio (GaAs) se emplea en:", ["Láseres, LED y dispositivos de alta frecuencia", "Imanes superconductores de resonancia magnética", "Aislantes térmicos de construcción", "Electrodos de baterías de plomo"], "Es un semiconductor III-V de gap directo."]
    ]
  },
  {
    id: "q09", bloque: "Q",
    titulo: "Metales: grupos, obtención, propiedades, compuestos y aplicaciones",
    norma: "Tema 9 de la parte específica",
    resumen: [
      "Alcalinos (grupo 1): muy reductores; reaccionan con el agua formando hidróxido e hidrógeno; se guardan en aceite de parafina. El sodio se obtiene por electrólisis de NaCl fundido (célula de Downs).",
      "Alcalinotérreos (grupo 2): menos reactivos; el magnesio se obtiene por electrólisis de MgCl₂ fundido.",
      "Aluminio: el metal más abundante de la corteza. De la bauxita se obtiene alúmina (proceso Bayer) y de esta el aluminio, por electrólisis en criolita fundida (Hall-Héroult). Su hidróxido es anfótero.",
      "Hierro: reducción de sus óxidos con CO en el alto horno.",
      "Datos: mercurio, único metal líquido a temperatura ambiente; plata, el mejor conductor eléctrico; wolframio, el de mayor punto de fusión (≈ 3.420 °C)."
    ],
    preguntas: [
      ["El sodio metálico se obtiene industrialmente por:", ["Electrólisis del cloruro de sodio fundido", "Reducción del NaCl con carbono", "Electrólisis de una disolución acuosa de NaCl", "Tostación del carbonato de sodio"], "Célula de Downs. En disolución acuosa se obtendría H₂ en el cátodo, no sodio."],
      ["Los metales alcalinos se conservan sumergidos en aceite de parafina porque:", ["Reaccionan vigorosamente con el oxígeno y la humedad del aire", "Se evaporan a temperatura ambiente", "Son muy densos", "Se oxidan con la luz"], "Con el agua forman hidróxido e hidrógeno de forma muy exotérmica."],
      ["El proceso de obtención del aluminio por electrólisis de alúmina disuelta en criolita fundida se denomina:", ["Proceso Hall-Héroult", "Proceso Bayer", "Proceso Solvay", "Proceso Haber-Bosch"], "El proceso Bayer obtiene la alúmina a partir de la bauxita."],
      ["El metal más abundante en la corteza terrestre es:", ["El aluminio", "El hierro", "El calcio", "El sodio"], "Alrededor del 8 % en masa. El oxígeno y el silicio, no metálicos, son los elementos más abundantes."],
      ["El único metal líquido a temperatura ambiente y presión normal es:", ["El mercurio", "El galio", "El cesio", "El bromo"], "El bromo también es líquido, pero no es un metal. El galio funde a unos 30 °C."],
      ["El metal de mayor punto de fusión es:", ["El wolframio", "El hierro", "El platino", "El titanio"], "Unos 3.420 °C; por eso se usaba en filamentos de bombillas incandescentes."],
      ["Un hidróxido que reacciona tanto con ácidos como con bases fuertes es:", ["Al(OH)₃", "NaOH", "Ca(OH)₂", "KOH"], "Es anfótero: con NaOH forma aluminatos y con HCl, sales de Al³⁺."],
      ["En el alto horno, el principal agente reductor de los óxidos de hierro es:", ["El monóxido de carbono", "El hidrógeno", "El oxígeno", "La caliza"], "Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. La caliza actúa como fundente para formar la escoria."]
    ]
  },
  {
    id: "q10", bloque: "Q",
    titulo: "Aleaciones. Interés económico",
    norma: "Tema 10 de la parte específica",
    resumen: [
      "Aleación: mezcla de un metal con otros elementos (metálicos o no) que mantiene carácter metálico. Suelen ser más duras que el metal base y pueden fundir a menor temperatura (eutécticos).",
      "Acero: hierro con carbono (hasta ≈ 2,1 %); por encima, fundición. Acero inoxidable: Fe con al menos ≈ 10,5 % de Cr (y a menudo Ni), que forma una capa pasiva de Cr₂O₃.",
      "Latón (Cu-Zn), bronce (Cu-Sn), alpaca (Cu-Ni-Zn), duraluminio (Al-Cu-Mg) y amalgamas (aleaciones de mercurio).",
      "Oro de 18 quilates: 18/24 = 75 % de oro. Soldadura blanda tradicional Sn-Pb, hoy sustituida por aleaciones sin plomo (Sn-Ag-Cu)."
    ],
    preguntas: [
      ["El latón es una aleación de:", ["Cobre y cinc", "Cobre y estaño", "Hierro y carbono", "Aluminio y cobre"], "El bronce es cobre y estaño."],
      ["El bronce es una aleación de:", ["Cobre y estaño", "Cobre y cinc", "Cobre y níquel", "Estaño y plomo"], "Dio nombre a la Edad del Bronce."],
      ["El acero inoxidable resiste la corrosión principalmente gracias a:", ["El cromo, que forma una capa pasiva de óxido", "Su alto contenido en carbono", "El recubrimiento de cinc", "La ausencia de hierro"], "Contiene como mínimo alrededor de un 10,5 % de cromo."],
      ["Una amalgama es una aleación en la que uno de los componentes es:", ["El mercurio", "El estaño", "El plomo", "La plata"], "Se ha usado en odontología y en la minería del oro."],
      ["Una joya de oro de 18 quilates contiene un porcentaje en masa de oro del:", ["75 %", "18 %", "90 %", "50 %"], "24 quilates = oro puro; 18/24 = 0,75."],
      ["Una aleación de hierro con más de un 2,1 % de carbono se denomina:", ["Fundición", "Acero dulce", "Acero inoxidable", "Ferroníquel"], "Las fundiciones son más duras y frágiles; se moldean bien."],
      ["El duraluminio, muy usado en aeronáutica, es una aleación de aluminio principalmente con:", ["Cobre (y magnesio y manganeso)", "Hierro y carbono", "Plomo y estaño", "Mercurio"], "Combina baja densidad con alta resistencia mecánica."]
    ]
  },
  {
    id: "q11", bloque: "Q",
    titulo: "Elementos no metálicos: grupos, obtención, propiedades, compuestos y aplicaciones",
    norma: "Tema 11 de la parte específica",
    resumen: [
      "Halógenos: el F₂ es el oxidante más fuerte. El Cl₂ se obtiene por electrólisis de salmuera (industria cloro-álcali), que produce además H₂ y NaOH.",
      "Nitrógeno (78 % del aire) y oxígeno (21 %) se obtienen por destilación fraccionada del aire líquido. El amoniaco se sintetiza por el proceso Haber-Bosch (catalizador de Fe, alta presión, ≈ 400-500 °C).",
      "Alótropos: oxígeno (O₂ y O₃), fósforo (blanco, muy reactivo y guardado bajo agua; rojo), azufre (rómbico y monoclínico), carbono (diamante, grafito, fullerenos, grafeno, nanotubos).",
      "El silicio es el segundo elemento más abundante de la corteza tras el oxígeno.",
      "Gases nobles: el argón (≈ 0,93 % del aire) se usa como atmósfera inerte; el helio, en criogenia."
    ],
    preguntas: [
      ["El cloro se obtiene industrialmente por:", ["Electrólisis de disoluciones de cloruro de sodio (salmuera)", "Destilación fraccionada del aire", "Reducción de HCl con hidrógeno", "Tostación de piritas"], "En la industria cloro-álcali se obtienen Cl₂, H₂ y NaOH."],
      ["El proceso Haber-Bosch de síntesis del amoniaco utiliza como catalizador:", ["Hierro", "Pentóxido de vanadio", "Platino-rodio", "Níquel"], "V₂O₅ se usa en el método de contacto (H₂SO₄) y Pt-Rh en el proceso Ostwald (HNO₃)."],
      ["El nitrógeno y el oxígeno se obtienen industrialmente por:", ["Destilación fraccionada del aire líquido", "Electrólisis del agua", "Descomposición térmica de nitratos", "Combustión del carbón"], "Se aprovecha la diferencia de puntos de ebullición (N₂ −196 °C, O₂ −183 °C)."],
      ["El fósforo blanco se conserva bajo agua porque:", ["Se inflama espontáneamente en contacto con el aire", "Se disuelve en el aire", "Es higroscópico", "Sublima a temperatura ambiente"], "El fósforo rojo es mucho más estable."],
      ["¿Cuál de los siguientes NO es una forma alotrópica del carbono?", ["El carburo de silicio", "El grafeno", "El diamante", "Los fullerenos"], "El SiC es un compuesto de silicio y carbono, no un alótropo."],
      ["El ozono (O₃) es:", ["Una forma alotrópica del oxígeno", "Un isótopo del oxígeno", "Un óxido de nitrógeno", "Un gas noble"], "Alótropos: distintas formas de un mismo elemento. Isótopos: distinto número de neutrones."],
      ["El halógeno con mayor poder oxidante es:", ["El flúor", "El cloro", "El bromo", "El yodo"], "E°(F₂/F⁻) ≈ +2,87 V."],
      ["El gas noble más abundante en la atmósfera terrestre es:", ["El argón", "El helio", "El neón", "El xenón"], "Alrededor del 0,93 % en volumen; procede de la desintegración del ⁴⁰K."]
    ]
  },
  {
    id: "q12", bloque: "Q",
    titulo: "Elementos de transición. Compuestos de coordinación",
    norma: "Tema 12 de la parte específica",
    resumen: [
      "Elementos de transición: orbitales d parcialmente ocupados. Presentan varios estados de oxidación, compuestos coloreados, paramagnetismo y actividad catalítica.",
      "Werner (Nobel 1913) propuso la teoría de la coordinación: valencia primaria (estado de oxidación) y secundaria (número de coordinación).",
      "Ligandos: monodentados (NH₃, Cl⁻, CN⁻), bidentados (etilendiamina, oxalato), hexadentado (EDTA, base de las complexometrías).",
      "Teorías: del enlace de valencia (Pauling), del campo cristalino (desdoblamiento de los d en t₂g y e_g en campo octaédrico) y del campo de ligandos (orbitales moleculares).",
      "Serie espectroquímica: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO. Los ligandos de campo fuerte originan complejos de bajo espín."
    ],
    preguntas: [
      ["El estado de oxidación del hierro en el K₄[Fe(CN)₆] es:", ["+2", "+3", "+4", "+6"], "4(+1) + x + 6(−1) = 0 → x = +2 (hexacianoferrato(II) de potasio)."],
      ["El número de coordinación del ion central en [Fe(CN)₆]⁴⁻ es:", ["6", "4", "2", "8"], "Seis ligandos monodentados en disposición octaédrica."],
      ["El EDTA, utilizado en volumetrías de complejación, es un ligando:", ["Hexadentado", "Monodentado", "Bidentado", "Tridentado"], "Se une al metal por dos nitrógenos y cuatro oxígenos carboxilato, formando quelatos 1:1."],
      ["Según la teoría del campo cristalino, en un complejo octaédrico los orbitales d se desdoblan en:", ["Tres orbitales t₂g de menor energía y dos e_g de mayor energía", "Dos t₂g de menor energía y tres e_g de mayor energía", "Cinco orbitales degenerados", "Cuatro orbitales de baja energía y uno de alta"], "En campo tetraédrico el desdoblamiento se invierte y es menor."],
      ["¿Cuál de estos ligandos produce un mayor desdoblamiento del campo cristalino?", ["CN⁻", "I⁻", "Cl⁻", "H₂O"], "Está en el extremo de campo fuerte de la serie espectroquímica."],
      ["La teoría de la coordinación, con valencias primarias y secundarias, fue propuesta por:", ["Alfred Werner", "Linus Pauling", "Gilbert Lewis", "Svante Arrhenius"], "Recibió el Premio Nobel de Química en 1913."],
      ["El color azul intenso que aparece al añadir exceso de amoniaco a una disolución de Cu²⁺ se debe a la formación de:", ["[Cu(NH₃)₄]²⁺", "Cu(OH)₂", "CuCl₂", "Cu₂O"], "Ion tetraamincobre(II). Con poco amoniaco precipita primero Cu(OH)₂ azul pálido."],
      ["El máximo estado de oxidación del manganeso, presente en el permanganato potásico, es:", ["+7", "+6", "+4", "+2"], "KMnO₄: +1 + x + 4(−2) = 0 → x = +7."]
    ]
  },
  {
    id: "q13", bloque: "Q",
    titulo: "Disoluciones. Concentración. Propiedades coligativas",
    norma: "Tema 13 de la parte específica",
    resumen: [
      "Formas de expresar la concentración: % en masa, g/L, molaridad (mol/L de disolución), molalidad (mol/kg de disolvente), fracción molar y normalidad (equivalentes/L). La molalidad no depende de la temperatura.",
      "Dilución: M₁V₁ = M₂V₂.",
      "Propiedades coligativas (dependen del número de partículas de soluto): descenso de la presión de vapor (ley de Raoult), aumento ebulloscópico ΔTe = i·Ke·m, descenso crioscópico ΔTc = i·Kc·m y presión osmótica π = i·M·R·T.",
      "Para el agua: Kc = 1,86 °C·kg/mol y Ke = 0,512 °C·kg/mol. Factor de van't Hoff ideal: NaCl i = 2, CaCl₂ i = 3.",
      "Ley de Henry: la solubilidad de un gas es proporcional a su presión parcial. La solubilidad de los gases disminuye al aumentar la temperatura."
    ],
    preguntas: [
      ["Se disuelven 4,0 g de NaOH (M = 40 g/mol) en agua hasta 500 mL de disolución. La molaridad es:", ["0,2 M", "0,1 M", "0,4 M", "2 M"], "n = 4/40 = 0,1 mol; M = 0,1/0,5 = 0,2 mol/L."],
      ["Se diluyen 100 mL de HCl 2 M hasta un volumen final de 500 mL. La nueva concentración es:", ["0,4 M", "0,2 M", "1 M", "10 M"], "M₂ = M₁V₁/V₂ = 2·100/500 = 0,4 M."],
      ["La forma de expresar la concentración que no depende de la temperatura es:", ["La molalidad", "La molaridad", "Los gramos por litro", "La normalidad"], "Se basa en masas (mol de soluto por kg de disolvente), no en volúmenes."],
      ["Las propiedades coligativas dependen de:", ["El número de partículas de soluto disueltas", "La naturaleza química del soluto", "El color de la disolución", "La masa molar del disolvente únicamente"], "No dependen de la identidad del soluto, sino de su concentración de partículas."],
      ["El descenso del punto de congelación de una disolución acuosa 0,5 molal de glucosa (Kc = 1,86 °C·kg/mol) es:", ["0,93 °C", "1,86 °C", "0,465 °C", "3,72 °C"], "ΔTc = Kc·m = 1,86 · 0,5 = 0,93 °C (la glucosa no se disocia, i = 1)."],
      ["El factor de van't Hoff ideal del CaCl₂ en disolución acuosa diluida es:", ["3", "2", "1", "4"], "CaCl₂ → Ca²⁺ + 2 Cl⁻."],
      ["La presión osmótica de una disolución se calcula con la expresión:", ["π = i·M·R·T", "π = Kc·m", "π = x·P°", "π = k·P"], "Ecuación de van't Hoff para disoluciones diluidas."],
      ["Según la ley de Henry, la solubilidad de un gas en un líquido:", ["Es proporcional a la presión parcial del gas sobre el líquido", "Aumenta al aumentar la temperatura", "No depende de la presión", "Es inversamente proporcional a la presión"], "Por eso las bebidas carbonatadas pierden gas al abrirlas."]
    ]
  },
  {
    id: "q14", bloque: "Q",
    titulo: "Disoluciones reales. Electrolitos. Comportamiento eléctrico",
    norma: "Tema 14 de la parte específica",
    resumen: [
      "Disoluciones reales: se desvían de la ley de Raoult. Desviación positiva (interacciones A-B más débiles que A-A y B-B, azeótropo de mínimo punto de ebullición, como el etanol-agua al 95,6 %) o negativa.",
      "Actividad: a = γ·c. Fuerza iónica: I = ½ Σ cᵢ·zᵢ². Ley límite de Debye-Hückel: log γ± = −A·|z₊z₋|·√I.",
      "Electrolitos fuertes (disociación completa) y débiles (parcial; ley de dilución de Ostwald).",
      "Ley de Kohlrausch para electrolitos fuertes: Λm = Λ°m − K·√c. Ley de migración independiente de los iones: Λ°m = ν₊λ°₊ + ν₋λ°₋.",
      "La conductividad se mide con un conductímetro (puente de Wheatstone y corriente alterna para evitar la electrólisis), en celdas de constante conocida calibradas con disoluciones patrón de KCl.",
      "Los iones H₃O⁺ y OH⁻ tienen conductividades iónicas anormalmente altas (mecanismo de Grotthuss)."
    ],
    preguntas: [
      ["La fuerza iónica de una disolución 0,1 M de MgCl₂ es:", ["0,3 M", "0,1 M", "0,2 M", "0,4 M"], "I = ½ (0,1·2² + 0,2·1²) = ½ (0,4 + 0,2) = 0,3."],
      ["La mezcla etanol-agua forma un azeótropo de punto de ebullición mínimo porque presenta:", ["Desviación positiva de la ley de Raoult", "Desviación negativa de la ley de Raoult", "Comportamiento ideal", "Inmiscibilidad total"], "Por destilación simple no se supera el ≈ 95,6 % de etanol."],
      ["Para medir la conductividad de un electrolito se emplea corriente alterna para:", ["Evitar la electrólisis y la polarización de los electrodos", "Aumentar la temperatura de la disolución", "Medir el pH al mismo tiempo", "Reducir la fuerza iónica"], "Con corriente continua se producirían reacciones en los electrodos."],
      ["La ley de Kohlrausch establece que, para electrolitos fuertes a bajas concentraciones, la conductividad molar:", ["Disminuye linealmente con la raíz cuadrada de la concentración", "Aumenta linealmente con la concentración", "Es independiente de la concentración", "Disminuye exponencialmente con la temperatura"], "Λm = Λ°m − K·√c."],
      ["La relación entre la constante de disociación y el grado de disociación de un electrolito débil se describe por:", ["La ley de dilución de Ostwald", "La ley de Henry", "La ley de Raoult", "La ecuación de Nernst"], "Ka = c·α²/(1 − α)."],
      ["La conductividad iónica anormalmente alta de los iones H₃O⁺ y OH⁻ en agua se explica por:", ["El mecanismo de Grotthuss (transferencia de protones entre moléculas de agua)", "Su gran tamaño", "Su carga múltiple", "La formación de pares iónicos"], "La carga se transmite por reordenación de puentes de hidrógeno, sin desplazamiento real del ion."],
      ["Para calibrar la constante de una celda de conductividad se utilizan disoluciones patrón de:", ["Cloruro de potasio", "Ácido acético", "Glucosa", "Etanol"], "Las disoluciones de KCl tienen conductividades tabuladas con gran exactitud."],
      ["La actividad (a) de una especie iónica en una disolución real se relaciona con su concentración mediante:", ["a = γ·c, siendo γ el coeficiente de actividad", "a = c/γ", "a = c + γ", "a = c²"], "En disoluciones muy diluidas γ → 1 y la actividad se aproxima a la concentración."]
    ]
  },
  {
    id: "q15", bloque: "Q",
    titulo: "Cinética química. Teorías y velocidad de reacción",
    norma: "Tema 15 de la parte específica",
    resumen: [
      "Ecuación de velocidad: v = k[A]ᵐ[B]ⁿ. Los órdenes se determinan experimentalmente y no tienen por qué coincidir con los coeficientes estequiométricos.",
      "Unidades de k: orden 0 → mol·L⁻¹·s⁻¹; orden 1 → s⁻¹; orden 2 → L·mol⁻¹·s⁻¹.",
      "Primer orden: ln[A] = ln[A]₀ − kt; t½ = ln 2/k, independiente de la concentración inicial.",
      "Ecuación de Arrhenius: k = A·e^(−Ea/RT).",
      "Teoría de colisiones: solo son eficaces los choques con energía suficiente (≥ Ea) y orientación adecuada (factor estérico). Teoría del estado de transición (Eyring): complejo activado.",
      "Factores: naturaleza de los reactivos, concentración, temperatura, grado de división (superficie) y catalizadores. Métodos de determinación: velocidades iniciales, integración, aislamiento (Ostwald) y vidas medias."
    ],
    preguntas: [
      ["Las unidades de la constante de velocidad de una reacción de primer orden son:", ["s⁻¹", "mol·L⁻¹·s⁻¹", "L·mol⁻¹·s⁻¹", "L²·mol⁻²·s⁻¹"], "v (mol·L⁻¹·s⁻¹) = k·[A] (mol·L⁻¹) → k en s⁻¹."],
      ["Una reacción de primer orden tiene k = 0,0693 min⁻¹. Su periodo de semirreacción es:", ["10 min", "0,0693 min", "14,4 min", "6,93 min"], "t½ = ln 2/k = 0,693/0,0693 = 10 min."],
      ["En una reacción de primer orden, el periodo de semirreacción:", ["Es independiente de la concentración inicial", "Es proporcional a la concentración inicial", "Es inversamente proporcional a la concentración inicial", "Aumenta con cada vida media"], "t½ = ln 2/k."],
      ["La ecuación que relaciona la constante de velocidad con la temperatura y la energía de activación es la de:", ["Arrhenius", "Nernst", "Van der Waals", "Clausius-Clapeyron"], "k = A·e^(−Ea/RT)."],
      ["Según la teoría de colisiones, para que un choque entre moléculas sea eficaz debe:", ["Tener energía suficiente y una orientación adecuada", "Producirse a temperatura ambiente", "Implicar al menos tres moléculas", "Producirse en presencia de un catalizador"], "El factor estérico recoge la influencia de la orientación."],
      ["El complejo activado es un concepto central de:", ["La teoría del estado de transición", "La teoría de colisiones", "La teoría de bandas", "La teoría de Brønsted-Lowry"], "Desarrollada por Eyring, Evans y Polanyi."],
      ["Los órdenes de reacción parciales:", ["Se determinan experimentalmente", "Coinciden siempre con los coeficientes estequiométricos", "Son siempre números enteros positivos", "Dependen de la temperatura"], "Solo coinciden con los coeficientes en las reacciones elementales."],
      ["El método de aislamiento de Ostwald para determinar órdenes de reacción consiste en:", ["Emplear un gran exceso de todos los reactivos menos uno", "Medir la velocidad a distintas temperaturas", "Añadir un catalizador", "Medir solo la velocidad final"], "La concentración del reactivo en exceso permanece prácticamente constante (pseudoorden)."]
    ]
  },
  {
    id: "q16", bloque: "Q",
    titulo: "Catálisis. Efecto sobre la energía de activación. Aplicaciones industriales",
    norma: "Tema 16 de la parte específica",
    resumen: [
      "Un catalizador aumenta la velocidad al ofrecer un mecanismo alternativo de menor energía de activación. Se recupera al final y no modifica ΔH, ΔG ni la constante de equilibrio: acelera por igual la reacción directa y la inversa.",
      "Catálisis homogénea (misma fase) y heterogénea (fases distintas: adsorción en la superficie, reacción y desorción).",
      "Ejemplos industriales: Haber-Bosch (Fe), método de contacto para H₂SO₄ (V₂O₅), proceso Ostwald para HNO₃ (Pt-Rh), hidrogenación de aceites (Ni), craqueo catalítico (zeolitas) y catalizadores de automóvil (Pt, Pd, Rh).",
      "Venenos catalíticos (compuestos de S, Pb…) inactivan el catalizador. Autocatálisis: el producto cataliza la reacción (Mn²⁺ en la reacción de permanganato con oxalato)."
    ],
    preguntas: [
      ["Un catalizador aumenta la velocidad de una reacción porque:", ["Proporciona un mecanismo alternativo con menor energía de activación", "Aumenta la energía cinética de las moléculas", "Desplaza el equilibrio hacia los productos", "Hace más negativa la variación de entalpía"], "No altera la termodinámica de la reacción."],
      ["Sobre un sistema en equilibrio, la adición de un catalizador:", ["No modifica la constante de equilibrio, pero permite alcanzar antes el equilibrio", "Aumenta la constante de equilibrio", "Desplaza el equilibrio hacia los reactivos", "Modifica ΔG°"], "Acelera por igual las reacciones directa e inversa."],
      ["En el método de contacto para fabricar ácido sulfúrico, la oxidación de SO₂ a SO₃ se cataliza con:", ["Pentóxido de vanadio (V₂O₅)", "Hierro", "Níquel", "Platino-rodio"], "Hoy es el catalizador habitual; antiguamente se usaba platino."],
      ["La hidrogenación de aceites vegetales para obtener grasas sólidas se cataliza con:", ["Níquel", "Vanadio", "Hierro", "Cobre"], "Catálisis heterogénea sobre níquel finamente dividido."],
      ["La catálisis en la que el catalizador está en una fase distinta a la de los reactivos se denomina:", ["Heterogénea", "Homogénea", "Enzimática", "Autocatálisis"], "Ejemplo: catalizador sólido con reactivos gaseosos."],
      ["Los catalizadores de tres vías de los automóviles contienen principalmente:", ["Platino, paladio y rodio", "Hierro y cobre", "Vanadio y níquel", "Plomo y estaño"], "Oxidan CO e hidrocarburos y reducen NOx. El plomo los envenena."],
      ["En la reacción del permanganato con el ácido oxálico, el ion Mn²⁺ formado acelera la propia reacción. Es un caso de:", ["Autocatálisis", "Inhibición", "Catálisis heterogénea", "Envenenamiento catalítico"], "Por eso las primeras gotas de permanganato tardan en decolorarse."]
    ]
  },
  {
    id: "q17", bloque: "Q",
    titulo: "Naturaleza y propiedades catalíticas de las enzimas",
    norma: "Tema 17 de la parte específica",
    resumen: [
      "Las enzimas son catalizadores biológicos, en su mayoría proteínas (también hay ARN catalíticos o ribozimas). Actúan en el centro activo con gran especificidad.",
      "Modelos: llave-cerradura (Fischer) y ajuste inducido (Koshland).",
      "Cinética de Michaelis-Menten: v = Vmáx·[S]/(Km + [S]). Km es la concentración de sustrato a la que v = Vmáx/2. Linealización de Lineweaver-Burk (dobles recíprocos).",
      "Inhibición competitiva: Km aparente aumenta y Vmáx no cambia. No competitiva pura: Vmáx disminuye y Km no cambia.",
      "La actividad depende de la temperatura y el pH (óptimos); por encima de cierta temperatura se desnaturalizan. Cofactores: iones metálicos y coenzimas (muchas derivadas de vitaminas)."
    ],
    preguntas: [
      ["En la ecuación de Michaelis-Menten, la constante Km es la concentración de sustrato a la cual:", ["La velocidad es la mitad de la velocidad máxima", "La velocidad es máxima", "La enzima se desnaturaliza", "La velocidad es nula"], "v = Vmáx/2 cuando [S] = Km."],
      ["En la representación de Lineweaver-Burk se representa:", ["1/v frente a 1/[S]", "v frente a [S]", "log v frente a [S]", "v frente a 1/[S]"], "Corta el eje de ordenadas en 1/Vmáx y el de abscisas en −1/Km."],
      ["En la inhibición competitiva:", ["Aumenta la Km aparente y la Vmáx no varía", "Disminuye la Vmáx y la Km no varía", "Disminuyen la Km y la Vmáx", "No varía ninguna de las dos"], "El inhibidor compite con el sustrato por el centro activo; a [S] muy alta se recupera Vmáx."],
      ["El modelo de «ajuste inducido» de la interacción enzima-sustrato fue propuesto por:", ["Koshland", "Fischer", "Michaelis", "Arrhenius"], "Fischer propuso el modelo llave-cerradura (1894)."],
      ["Una molécula de ARN con actividad catalítica se denomina:", ["Ribozima", "Coenzima", "Apoenzima", "Isoenzima"], "Su descubrimiento (Cech y Altman) demostró que no todas las enzimas son proteínas."],
      ["Un aumento excesivo de la temperatura reduce la actividad enzimática porque:", ["Provoca la desnaturalización de la proteína", "Aumenta la energía de activación", "Disminuye la concentración de sustrato", "Transforma la enzima en un inhibidor"], "Se pierde la estructura tridimensional del centro activo."],
      ["La parte proteica de una enzima que necesita un cofactor para ser activa se denomina:", ["Apoenzima", "Holoenzima", "Coenzima", "Zimógeno"], "Apoenzima + cofactor = holoenzima."]
    ]
  },
  {
    id: "q18", bloque: "Q",
    titulo: "Termoquímica. Primer principio. Ley de Hess",
    norma: "Tema 18 de la parte específica",
    resumen: [
      "Primer principio: ΔU = Q + W (criterio IUPAC: son positivos el calor y el trabajo recibidos por el sistema).",
      "A presión constante, Qp = ΔH; a volumen constante, Qv = ΔU. Para gases ideales: ΔH = ΔU + Δn·R·T.",
      "Reacción exotérmica: ΔH < 0; endotérmica: ΔH > 0.",
      "Entalpía estándar de formación: la de formar 1 mol de compuesto a partir de sus elementos en estado estándar (25 °C, 1 bar). La de un elemento en su forma estable es cero.",
      "Ley de Hess: como H es función de estado, la ΔH de una reacción es la misma tanto si ocurre en una etapa como en varias. ΔH°r = Σ n·ΔH°f(productos) − Σ n·ΔH°f(reactivos).",
      "La bomba calorimétrica (volumen constante) mide ΔU de combustión."
    ],
    preguntas: [
      ["El calor intercambiado en una reacción a presión constante es igual a:", ["La variación de entalpía", "La variación de energía interna", "La variación de entropía", "La variación de energía libre"], "Qp = ΔH; Qv = ΔU."],
      ["Datos: C + O₂ → CO₂, ΔH = −393,5 kJ; CO + ½ O₂ → CO₂, ΔH = −283,0 kJ. La entalpía de la reacción C + ½ O₂ → CO es:", ["−110,5 kJ", "−676,5 kJ", "+110,5 kJ", "−283,0 kJ"], "Ley de Hess: −393,5 − (−283,0) = −110,5 kJ."],
      ["La entalpía estándar de formación del O₂(g) es:", ["Cero", "−393,5 kJ/mol", "+249 kJ/mol", "Depende de la temperatura de referencia y no está definida"], "Por convenio, es nula para los elementos en su forma más estable en condiciones estándar."],
      ["La ley de Hess es consecuencia de que:", ["La entalpía es una función de estado", "El calor es una función de estado", "La entropía del universo aumenta", "La energía se crea en las reacciones"], "Q y W no son funciones de estado; H y U sí."],
      ["En una bomba calorimétrica se mide directamente:", ["La variación de energía interna (Qv)", "La variación de entalpía (Qp)", "La variación de entropía", "La energía de activación"], "Se trabaja a volumen constante; ΔH se calcula con ΔH = ΔU + Δn·R·T."],
      ["Una reacción con ΔH < 0 es:", ["Exotérmica", "Endotérmica", "Siempre espontánea", "Siempre rápida"], "La espontaneidad depende de ΔG, y la rapidez, de la cinética."],
      ["Para la reacción N₂(g) + 3 H₂(g) → 2 NH₃(g), la variación de moles gaseosos Δn que se usa en ΔH = ΔU + Δn·R·T es:", ["−2", "+2", "−4", "0"], "Δn = 2 − (1 + 3) = −2."]
    ]
  },
  {
    id: "q19", bloque: "Q",
    titulo: "Entropía. Segundo principio. Energía libre de Gibbs y espontaneidad",
    norma: "Tema 19 de la parte específica",
    resumen: [
      "Segundo principio: en un proceso espontáneo la entropía del universo aumenta (ΔS universo > 0).",
      "Tercer principio: la entropía de un cristal perfecto a 0 K es cero. La entropía crece en el orden sólido < líquido < gas.",
      "ΔG = ΔH − T·ΔS. Proceso espontáneo a T y P constantes si ΔG < 0; en equilibrio, ΔG = 0.",
      "ΔH < 0 y ΔS > 0: espontáneo siempre. ΔH > 0 y ΔS < 0: nunca. ΔH < 0 y ΔS < 0: espontáneo a baja T. ΔH > 0 y ΔS > 0: espontáneo a alta T. Temperatura de inversión: T = ΔH/ΔS.",
      "Relación con el equilibrio: ΔG° = −R·T·ln K; ΔG = ΔG° + R·T·ln Q. Si ΔG° < 0, K > 1."
    ],
    preguntas: [
      ["Una reacción es espontánea a temperatura y presión constantes cuando:", ["ΔG < 0", "ΔH > 0", "ΔS < 0", "ΔG > 0"], "ΔG = ΔH − TΔS."],
      ["Una reacción con ΔH < 0 y ΔS > 0 es:", ["Espontánea a cualquier temperatura", "Espontánea solo a temperaturas bajas", "Espontánea solo a temperaturas altas", "No espontánea a ninguna temperatura"], "Ambos términos contribuyen a que ΔG sea negativo."],
      ["Una reacción tiene ΔH = +40 kJ y ΔS = +100 J/K. Será espontánea a temperaturas superiores a:", ["400 K", "40 K", "0,4 K", "4.000 K"], "T = ΔH/ΔS = 40.000 J / 100 J·K⁻¹ = 400 K."],
      ["La relación entre la energía libre estándar y la constante de equilibrio es:", ["ΔG° = −R·T·ln K", "ΔG° = R·T·ln K", "ΔG° = −n·F·K", "ΔG° = ΔH° + T·ln K"], "Si K > 1, ΔG° < 0."],
      ["Según el tercer principio de la termodinámica:", ["La entropía de un cristal perfecto a 0 K es cero", "La energía del universo es constante", "La entropía del universo disminuye en los procesos espontáneos", "Es posible alcanzar el cero absoluto en un número finito de pasos"], "Permite calcular entropías absolutas."],
      ["¿En cuál de estos procesos aumenta la entropía del sistema?", ["La sublimación del yodo", "La congelación del agua", "La condensación del vapor de agua", "La formación de NH₃(g) a partir de N₂(g) y H₂(g)"], "El paso de sólido a gas aumenta mucho el desorden."],
      ["En un sistema en equilibrio químico a T y P constantes:", ["ΔG = 0", "ΔG° = 0", "K = 0", "ΔH = 0"], "ΔG° solo es cero si K = 1."]
    ]
  },
  {
    id: "q20", bloque: "Q",
    titulo: "Constante de equilibrio. Equilibrios heterogéneos. Principio de Le Châtelier",
    norma: "Tema 20 de la parte específica",
    resumen: [
      "Para aA + bB ⇌ cC + dD: Kc = [C]ᶜ[D]ᵈ/[A]ᵃ[B]ᵇ. Relación con Kp: Kp = Kc·(RT)^Δn (Δn: moles gaseosos de productos menos reactivos).",
      "Equilibrios heterogéneos: los sólidos y líquidos puros no aparecen en la expresión de la constante (CaCO₃(s) ⇌ CaO(s) + CO₂(g): Kp = pCO₂).",
      "Cociente de reacción Q: si Q < K la reacción avanza hacia los productos; si Q > K, hacia los reactivos.",
      "Le Châtelier: un sistema en equilibrio sometido a una perturbación evoluciona para contrarrestarla. Aumentar la presión desplaza hacia donde hay menos moles gaseosos; añadir un gas inerte a volumen constante no lo desplaza.",
      "Solo la temperatura cambia el valor de K: en una reacción exotérmica, al subir T disminuye K. Un catalizador no desplaza el equilibrio."
    ],
    preguntas: [
      ["Para el equilibrio CaCO₃(s) ⇌ CaO(s) + CO₂(g), la constante Kp es igual a:", ["pCO₂", "pCO₂ · [CaO]/[CaCO₃]", "1/pCO₂", "[CaO]·pCO₂"], "Los sólidos puros no aparecen en la expresión."],
      ["Para la síntesis de amoniaco N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), con ΔH < 0, el rendimiento en NH₃ aumenta:", ["Al aumentar la presión", "Al aumentar la temperatura", "Al añadir un catalizador", "Al retirar N₂"], "A mayor presión se favorece el lado con menos moles gaseosos (2 frente a 4)."],
      ["El único factor que modifica el valor de la constante de equilibrio es:", ["La temperatura", "La presión", "La concentración de los reactivos", "La presencia de un catalizador"], "Los demás factores pueden desplazar el equilibrio, pero no cambian K."],
      ["En una reacción exotérmica, al aumentar la temperatura:", ["La constante de equilibrio disminuye", "La constante de equilibrio aumenta", "La constante de equilibrio no varía", "La reacción se vuelve endotérmica"], "El equilibrio se desplaza hacia los reactivos (en el sentido endotérmico)."],
      ["Si el cociente de reacción Q es menor que K:", ["La reacción evoluciona hacia la formación de productos", "La reacción evoluciona hacia los reactivos", "El sistema está en equilibrio", "La reacción se detiene"], "Faltan productos para alcanzar el equilibrio."],
      ["Kp y Kc tienen el mismo valor numérico en la reacción:", ["H₂(g) + I₂(g) ⇌ 2 HI(g)", "N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)", "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)", "2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)"], "Kp = Kc·(RT)^Δn, y aquí Δn = 0."],
      ["Al añadir un gas inerte a volumen constante a un sistema gaseoso en equilibrio:", ["El equilibrio no se desplaza", "Se desplaza hacia el lado con menos moles gaseosos", "Se desplaza hacia el lado con más moles gaseosos", "Aumenta la constante de equilibrio"], "No cambian las presiones parciales de las especies que reaccionan."]
    ]
  },
  {
    id: "q21", bloque: "Q",
    titulo: "Ácidos y bases. pH. Indicadores. Volumetrías. Hidrólisis. Disoluciones reguladoras",
    norma: "Tema 21 de la parte específica",
    resumen: [
      "Teorías: Arrhenius (H⁺ y OH⁻ en agua), Brønsted-Lowry (dador y aceptor de protones; pares conjugados) y Lewis (aceptor y dador de pares de electrones; BF₃ es un ácido de Lewis).",
      "pH = −log[H₃O⁺]; a 25 °C, Kw = 1,0·10⁻¹⁴ y pH + pOH = 14. Ácido débil: pH ≈ ½(pKa − log C).",
      "Indicadores: naranja de metilo (viraje 3,1-4,4), rojo de metilo (4,4-6,2), azul de bromotimol (6,0-7,6), fenolftaleína (≈ 8,2-10, de incolora a rosa).",
      "Valoración ácido débil con base fuerte: punto de equivalencia básico (pH > 7), indicador fenolftaleína. Ácido fuerte con base fuerte: pH 7. La curva se obtiene con pH-metro, añadiendo la disolución valorante desde una bureta.",
      "Patrones primarios: ftalato ácido de potasio (para bases) y carbonato de sodio o bórax (para ácidos). El pH-metro (electrodo de vidrio) se calibra con tampones de pH 4, 7 y 10.",
      "Hidrólisis: NH₄Cl da disolución ácida, CH₃COONa básica y NaCl neutra. Tampones: pH = pKa + log([A⁻]/[HA]) (Henderson-Hasselbalch); máxima capacidad reguladora cuando pH = pKa."
    ],
    preguntas: [
      ["El pH de una disolución de HCl 0,01 M es:", ["2", "1", "0,01", "12"], "Ácido fuerte: [H₃O⁺] = 10⁻² M → pH = 2."],
      ["El pH de una disolución de NaOH 0,001 M a 25 °C es:", ["11", "3", "10", "13"], "pOH = 3 → pH = 14 − 3 = 11."],
      ["Según la teoría de Lewis, el BF₃ es:", ["Un ácido, porque acepta un par de electrones", "Una base, porque cede un protón", "Una base, porque acepta un par de electrones", "Un anfótero de Arrhenius"], "El boro tiene el octeto incompleto."],
      ["En la valoración de ácido acético con NaOH, el indicador más adecuado es:", ["Fenolftaleína", "Naranja de metilo", "Rojo Congo", "Ninguno; el punto de equivalencia es pH 7"], "El acetato formado se hidroliza y el punto de equivalencia es básico (pH ≈ 8-9)."],
      ["Una disolución acuosa de cloruro de amonio (NH₄Cl) es:", ["Ácida", "Básica", "Neutra", "Anfótera"], "El NH₄⁺ (ácido conjugado de una base débil) se hidroliza liberando H₃O⁺."],
      ["Una disolución reguladora formada por ácido acético y acetato de sodio en concentraciones iguales tiene un pH igual a:", ["El pKa del ácido acético", "7", "14 − pKa", "El pKb del acetato"], "Henderson-Hasselbalch con [A⁻] = [HA]: pH = pKa ≈ 4,74."],
      ["El patrón primario más utilizado para normalizar disoluciones de NaOH es:", ["El ftalato ácido de potasio", "El carbonato de sodio", "El ácido clorhídrico", "El hidróxido de bario"], "Es estable, no higroscópico y de masa molar elevada. El carbonato de sodio se usa para normalizar ácidos."],
      ["Un pH-metro con electrodo de vidrio se calibra habitualmente con:", ["Disoluciones tampón de pH conocido (por ejemplo, 4, 7 y 10)", "Agua destilada exclusivamente", "Una disolución de KCl 3 M", "Una disolución de HCl 1 M"], "La calibración ajusta el punto cero y la pendiente del electrodo."],
      ["La fenolftaleína, en el intervalo de viraje (≈ 8,2-10), cambia de:", ["Incolora a rosa-fucsia", "Rojo a amarillo", "Amarillo a azul", "Azul a incolora"], "En medio ácido es incolora."]
    ]
  },
  {
    id: "q22", bloque: "Q",
    titulo: "Ácidos inorgánicos de importancia industrial. Seguridad en su uso y transporte",
    norma: "Tema 22 de la parte específica",
    resumen: [
      "H₂SO₄ (método de contacto): S o piritas → SO₂ → SO₃ (catalizador V₂O₅) → absorción en H₂SO₄ concentrado (óleum, H₂S₂O₇) → dilución. Es el producto químico de mayor producción; se usa sobre todo para fertilizantes.",
      "HNO₃ (proceso Ostwald): oxidación catalítica de NH₃ a NO sobre Pt-Rh, después a NO₂ y absorción en agua.",
      "H₃PO₄: vía húmeda (fosforita + H₂SO₄); fertilizantes y alimentación. HCl: síntesis directa H₂ + Cl₂ o como subproducto.",
      "Seguridad: diluir añadiendo siempre el ácido sobre el agua (nunca al revés). El HF ataca el vidrio (se guarda en plástico) y sus quemaduras se tratan con gluconato cálcico. Agua regia (HCl:HNO₃ 3:1) disuelve el oro.",
      "Etiquetado según el Reglamento CLP (CE) n.º 1272/2008: pictograma GHS05 (corrosión). Transporte por carretera según el ADR: clase 8, materias corrosivas."
    ],
    preguntas: [
      ["En el método de contacto para obtener ácido sulfúrico, el SO₃ se absorbe en:", ["Ácido sulfúrico concentrado, formando óleum", "Agua pura directamente", "Disolución de NaOH", "Ácido nítrico"], "Absorberlo en agua formaría una niebla ácida difícil de condensar."],
      ["El ácido nítrico se obtiene industrialmente mediante:", ["El proceso Ostwald, por oxidación catalítica del amoniaco", "El método de contacto", "El proceso Solvay", "La electrólisis del nitrato de sodio"], "NH₃ → NO (Pt-Rh) → NO₂ → HNO₃."],
      ["Para diluir ácido sulfúrico concentrado se debe:", ["Añadir lentamente el ácido sobre el agua, agitando", "Añadir rápidamente el agua sobre el ácido", "Calentar previamente el ácido", "Mezclar ambos en un recipiente cerrado"], "La dilución es muy exotérmica: el agua añadida al ácido puede hervir y proyectar ácido."],
      ["El ácido que ataca el vidrio y debe almacenarse en recipientes de plástico es:", ["El ácido fluorhídrico", "El ácido clorhídrico", "El ácido sulfúrico", "El ácido fosfórico"], "Reacciona con el SiO₂ formando SiF₄ o H₂SiF₆."],
      ["El agua regia, capaz de disolver el oro, es una mezcla de:", ["Ácido clorhídrico y ácido nítrico en proporción 3:1", "Ácido sulfúrico y ácido nítrico en proporción 1:1", "Ácido clorhídrico y ácido sulfúrico", "Ácido nítrico y peróxido de hidrógeno"], "El HNO₃ oxida el oro y el Cl⁻ lo estabiliza como [AuCl₄]⁻."],
      ["En el transporte de mercancías peligrosas por carretera (ADR), los ácidos corrosivos pertenecen a la clase:", ["8", "3", "6.1", "2"], "Clase 3: líquidos inflamables; 6.1: materias tóxicas; 2: gases."],
      ["El pictograma de peligro GHS05 del Reglamento CLP indica:", ["Corrosión", "Inflamabilidad", "Toxicidad aguda", "Peligro para el medio ambiente acuático"], "Muestra líquidos corroyendo una mano y una superficie metálica."],
      ["El principal uso industrial del ácido sulfúrico es la fabricación de:", ["Fertilizantes", "Explosivos", "Medicamentos", "Plásticos"], "Sobre todo superfosfatos y sulfato de amonio."]
    ]
  },
  {
    id: "q23", bloque: "Q",
    titulo: "Oxidación-reducción. Pilas, electrólisis, corrosión, metalurgia y siderurgia",
    norma: "Tema 23 de la parte específica",
    resumen: [
      "Oxidación: pérdida de electrones (aumenta el número de oxidación). Reducción: ganancia. El oxidante se reduce y el reductor se oxida.",
      "Ajuste por el método del ion-electrón. Ejemplo en medio ácido: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O.",
      "Pila galvánica: en el ánodo hay oxidación (polo −) y en el cátodo, reducción (polo +). Pila Daniell: E° = 0,34 − (−0,76) = 1,10 V. Referencia: electrodo estándar de hidrógeno (E° = 0 V).",
      "ΔG° = −n·F·E° (F = 96.485 C/mol). Ecuación de Nernst a 25 °C: E = E° − (0,0592/n)·log Q.",
      "Cuba electrolítica: el ánodo es el polo + (oxidación). Leyes de Faraday: la masa depositada es proporcional a la carga (m = M·I·t/(n·F)).",
      "Corrosión: protección catódica con ánodos de sacrificio (Zn, Mg), galvanizado (recubrimiento de Zn) y pinturas. Siderurgia: alto horno (reducción con CO) y convertidor de oxígeno para obtener acero."
    ],
    preguntas: [
      ["En una pila galvánica, en el ánodo se produce:", ["La oxidación, y es el polo negativo", "La reducción, y es el polo positivo", "La oxidación, y es el polo positivo", "La reducción, y es el polo negativo"], "En una cuba electrolítica el ánodo también es donde hay oxidación, pero es el polo positivo."],
      ["Con E°(Cu²⁺/Cu) = +0,34 V y E°(Zn²⁺/Zn) = −0,76 V, la fem estándar de la pila Daniell es:", ["1,10 V", "0,42 V", "−1,10 V", "0,26 V"], "E° = E°cátodo − E°ánodo = 0,34 − (−0,76)."],
      ["En la semirreacción ajustada MnO₄⁻ → Mn²⁺ en medio ácido, el número de electrones intercambiados es:", ["5", "3", "2", "7"], "El Mn pasa de +7 a +2: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O."],
      ["La relación entre la variación de energía libre estándar y el potencial estándar de una pila es:", ["ΔG° = −n·F·E°", "ΔG° = n·F·E°", "ΔG° = −R·T·E°", "ΔG° = E°/(n·F)"], "Si E° > 0, ΔG° < 0: la reacción es espontánea."],
      ["¿Qué carga es necesaria para depositar 1 mol de cobre a partir de una disolución de Cu²⁺?", ["2 × 96.485 C", "96.485 C", "96.485/2 C", "4 × 96.485 C"], "Cu²⁺ + 2 e⁻ → Cu: 2 mol de electrones, 2 faradios."],
      ["La protección catódica de una tubería de acero enterrada mediante ánodos de sacrificio utiliza metales como:", ["Magnesio o cinc", "Cobre o plata", "Oro o platino", "Plomo o estaño"], "Son más reductores (E° más negativo) que el hierro y se oxidan en su lugar."],
      ["El galvanizado consiste en recubrir el acero con:", ["Cinc", "Cromo", "Estaño", "Níquel"], "El cinc protege como barrera y, si se raya, como ánodo de sacrificio."],
      ["La ecuación de Nernst permite calcular:", ["El potencial de un electrodo o pila en condiciones no estándar", "La velocidad de corrosión", "La constante de velocidad de una reacción", "El calor de reacción"], "E = E° − (R·T/n·F)·ln Q."]
    ]
  },
  {
    id: "q24", bloque: "Q",
    titulo: "Reacciones de precipitación. Producto de solubilidad",
    norma: "Tema 24 de la parte específica",
    resumen: [
      "Producto de solubilidad: para AgCl ⇌ Ag⁺ + Cl⁻, Ks = [Ag⁺][Cl⁻] = s²; para Ag₂CrO₄ o PbI₂ (tipo AB₂), Ks = 4s³.",
      "Precipita cuando el producto iónico Q supera Ks; si Q < Ks la disolución no está saturada.",
      "Efecto del ion común: la adición de un ion presente en el equilibrio disminuye la solubilidad.",
      "La solubilidad aumenta si disminuye el pH en sales de aniones básicos (CaCO₃, hidróxidos) o si se forman complejos (AgCl en NH₃).",
      "Aplicaciones analíticas: precipitación fraccionada, método de Mohr (cloruros con AgNO₃ e indicador K₂CrO₄) y gravimetrías (sulfato como BaSO₄)."
    ],
    preguntas: [
      ["Si el Ks del AgCl es 1,8·10⁻¹⁰, su solubilidad molar en agua pura es aproximadamente:", ["1,3·10⁻⁵ M", "1,8·10⁻¹⁰ M", "9·10⁻¹¹ M", "3,6·10⁻¹⁰ M"], "s = √Ks = √(1,8·10⁻¹⁰) ≈ 1,34·10⁻⁵ M."],
      ["La expresión de Ks en función de la solubilidad molar s para el PbI₂ es:", ["Ks = 4s³", "Ks = s²", "Ks = 2s²", "Ks = 27s⁴"], "PbI₂ ⇌ Pb²⁺ + 2 I⁻: Ks = s·(2s)² = 4s³."],
      ["Se forma un precipitado cuando:", ["El producto iónico supera el producto de solubilidad", "El producto iónico es menor que Ks", "El producto iónico es igual a cero", "La disolución está diluida"], "Q > Ks: disolución sobresaturada."],
      ["La solubilidad del AgCl en una disolución de NaCl 0,1 M es menor que en agua pura debido a:", ["El efecto del ion común", "La formación de complejos", "La hidrólisis del cloruro", "El aumento de la fuerza iónica"], "El Cl⁻ añadido desplaza el equilibrio hacia el sólido."],
      ["El AgCl se disuelve al añadir amoniaco porque:", ["Se forma el complejo [Ag(NH₃)₂]⁺", "Aumenta el pH y precipita AgOH", "El amoniaco reduce la plata", "Disminuye la temperatura"], "La formación del complejo retira Ag⁺ del equilibrio de solubilidad."],
      ["En el método de Mohr para determinar cloruros, el indicador utilizado es:", ["Cromato de potasio", "Fenolftaleína", "Negro de eriocromo T", "Almidón"], "Tras precipitar todo el AgCl, el primer exceso de Ag⁺ forma Ag₂CrO₄ de color rojo ladrillo."],
      ["El carbonato de calcio es más soluble en medio ácido porque:", ["El ion carbonato se protona (HCO₃⁻, H₂CO₃ → CO₂), desplazando el equilibrio de disolución", "Aumenta el efecto del ion común", "Se forma un complejo de calcio", "Disminuye la fuerza iónica"], "Es el fundamento de la disolución de rocas calizas por aguas ácidas."]
    ]
  },
  {
    id: "q25", bloque: "Q",
    titulo: "Química del carbono. Nomenclatura. Isomería. Actividad óptica",
    norma: "Tema 25 de la parte específica",
    resumen: [
      "El carbono es tetravalente y puede hibridarse sp³ (enlaces simples), sp² (dobles) y sp (triples). Forma cadenas y anillos estables.",
      "Isomería estructural: de cadena, de posición y de función (etanol y dimetiléter). Estereoisomería: geométrica (cis/trans, E/Z) y óptica.",
      "Carbono quiral: unido a cuatro sustituyentes distintos. Con n centros quirales hay como máximo 2ⁿ estereoisómeros. Los compuestos meso tienen centros quirales, pero son aquirales (plano de simetría).",
      "Enantiómeros: giran el plano de la luz polarizada el mismo ángulo en sentidos opuestos (dextrógiro +, levógiro −). La mezcla racémica es ópticamente inactiva. Configuración absoluta R/S (Cahn-Ingold-Prelog).",
      "La actividad óptica se mide con un polarímetro. Rotación específica: [α] = α/(l·c), con l en dm y c en g/mL."
    ],
    preguntas: [
      ["Un carbono asimétrico o quiral es aquel que:", ["Está unido a cuatro sustituyentes distintos", "Forma un doble enlace", "Está unido a dos átomos de hidrógeno", "Forma parte de un anillo aromático"], "Origina dos configuraciones no superponibles (enantiómeros)."],
      ["El etanol (CH₃CH₂OH) y el dimetiléter (CH₃OCH₃) son isómeros:", ["De función", "De cadena", "De posición", "Ópticos"], "Misma fórmula molecular (C₂H₆O) con distinto grupo funcional."],
      ["Una mezcla racémica:", ["Contiene cantidades iguales de ambos enantiómeros y es ópticamente inactiva", "Contiene un solo enantiómero", "Gira el plano de la luz polarizada a la derecha", "Es un compuesto meso"], "Las rotaciones de ambos enantiómeros se compensan."],
      ["El número máximo de estereoisómeros de un compuesto con 3 carbonos quirales es:", ["8", "6", "3", "9"], "2ⁿ = 2³ = 8 (puede ser menor si hay formas meso)."],
      ["El instrumento que mide la rotación del plano de la luz polarizada es:", ["El polarímetro", "El refractómetro", "El espectrofotómetro de infrarrojo", "El conductímetro"], "Consta de fuente, polarizador, tubo de muestra y analizador."],
      ["Un compuesto meso, como el ácido meso-tartárico:", ["Tiene centros quirales pero es ópticamente inactivo por tener un plano de simetría interno", "No tiene centros quirales", "Es una mezcla de enantiómeros", "Es siempre dextrógiro"], "Es superponible con su imagen especular."],
      ["El número de isómeros estructurales del C₄H₁₀ es:", ["2", "3", "4", "1"], "Butano y metilpropano (isobutano). El C₅H₁₂ tiene 3."],
      ["La rotación específica [α] se calcula como:", ["α/(l·c), con l en decímetros y c en g/mL", "α·l·c", "α/c, con c en mol/L", "l/(α·c)"], "Es característica de cada sustancia a una longitud de onda y temperatura dadas."]
    ]
  },
  {
    id: "q26", bloque: "Q",
    titulo: "Tipos de reacciones orgánicas. Mecanismos de reacción",
    norma: "Tema 26 de la parte específica",
    resumen: [
      "Tipos: sustitución, adición, eliminación, transposición y redox. Ruptura homolítica (radicales) o heterolítica (iones).",
      "Nucleófilo: especie rica en electrones (OH⁻, CN⁻, NH₃). Electrófilo: especie deficiente en electrones (H⁺, NO₂⁺, carbocationes).",
      "SN2: un solo paso, cinética de segundo orden, inversión de configuración (Walden); favorecida en sustratos primarios y disolventes polares apróticos. SN1: carbocatión intermedio, primer orden, racemización; favorecida en sustratos terciarios y disolventes polares próticos.",
      "Eliminación E1/E2; regla de Zaitsev: se forma preferentemente el alqueno más sustituido.",
      "Adición electrófila a alquenos según la regla de Markovnikov (el H se une al carbono con más hidrógenos); con HBr y peróxidos, adición radicalaria anti-Markovnikov.",
      "Halogenación de alcanos con luz: mecanismo radicalario en cadena (iniciación, propagación y terminación). Benceno: sustitución electrófila aromática."
    ],
    preguntas: [
      ["Una reacción SN2 se caracteriza por:", ["Transcurrir en una sola etapa con inversión de la configuración", "Formar un carbocatión intermedio", "Seguir una cinética de primer orden", "Producir racemización"], "El nucleófilo ataca por el lado opuesto al grupo saliente."],
      ["Las reacciones SN1 están favorecidas en:", ["Haluros terciarios y disolventes polares próticos", "Haluros de metilo y disolventes apolares", "Haluros primarios con nucleófilos fuertes", "Haluros de arilo"], "Los carbocationes terciarios son los más estables."],
      ["Según la regla de Markovnikov, en la adición de HBr al propeno se obtiene mayoritariamente:", ["2-bromopropano", "1-bromopropano", "1,2-dibromopropano", "Propano"], "El H se adiciona al carbono con más hidrógenos y se forma el carbocatión secundario, más estable."],
      ["La regla de Zaitsev establece que en las reacciones de eliminación se forma preferentemente:", ["El alqueno más sustituido", "El alqueno menos sustituido", "El alquino correspondiente", "El alcohol de partida"], "Es el alqueno termodinámicamente más estable."],
      ["La cloración del metano en presencia de luz ultravioleta transcurre mediante un mecanismo:", ["Radicalario en cadena", "De sustitución nucleófila", "De adición electrófila", "Iónico de eliminación"], "Etapas: iniciación (Cl₂ → 2 Cl·), propagación y terminación."],
      ["¿Cuál de las siguientes especies es un electrófilo?", ["NO₂⁺", "OH⁻", "NH₃", "CN⁻"], "El ion nitronio es el electrófilo de la nitración del benceno; las demás son nucleófilos."],
      ["La ruptura homolítica de un enlace covalente produce:", ["Radicales libres", "Un catión y un anión", "Un carbanión", "Un carbocatión"], "Cada fragmento conserva uno de los electrones del enlace."]
    ]
  },
  {
    id: "q27", bloque: "Q",
    titulo: "Identificación de compuestos orgánicos: análisis cualitativo y cuantitativo",
    norma: "Tema 27 de la parte específica",
    resumen: [
      "Análisis elemental: C e H por combustión (CO₂ y H₂O); N por los métodos de Dumas o Kjeldahl; N, S y halógenos cualitativamente por fusión con sodio (Lassaigne).",
      "Con la composición centesimal se obtiene la fórmula empírica; con la masa molar (espectrometría de masas, crioscopia), la molecular.",
      "Ensayos de grupos funcionales: agua de bromo o KMnO₄ en frío (Baeyer) para insaturaciones; Tollens (espejo de plata) y Fehling (precipitado rojo de Cu₂O) para aldehídos; 2,4-dinitrofenilhidracina para aldehídos y cetonas; Lucas para clasificar alcoholes; FeCl₃ para fenoles; yodoformo para metilcetonas y etanol; ninhidrina para aminoácidos.",
      "Criterios de pureza: punto de fusión (intervalo estrecho) y punto de ebullición. Separación e identificación: cromatografía en capa fina (Rf), de gases (CG) y líquida de alta resolución (HPLC)."
    ],
    preguntas: [
      ["Un compuesto contiene 40,0 % de C, 6,7 % de H y 53,3 % de O en masa. Su fórmula empírica es:", ["CH₂O", "CHO", "C₂H₄O", "CH₃O"], "C: 40/12 = 3,33; H: 6,7/1 = 6,7; O: 53,3/16 = 3,33 → relación 1:2:1."],
      ["El reactivo de Tollens (espejo de plata) permite distinguir:", ["Aldehídos de cetonas", "Alcoholes primarios de secundarios", "Alquenos de alquinos", "Ácidos de ésteres"], "Los aldehídos reducen el Ag(NH₃)₂⁺ a plata metálica."],
      ["El reactivo de Fehling da positivo con aldehídos y azúcares reductores, formando un precipitado:", ["Rojo de óxido de cobre(I)", "Blanco de cloruro de plata", "Amarillo de yodoformo", "Negro de óxido de manganeso"], "El Cu²⁺ (azul) se reduce a Cu₂O."],
      ["La decoloración del agua de bromo indica la presencia de:", ["Dobles o triples enlaces carbono-carbono", "Grupos carbonilo", "Grupos hidroxilo", "Grupos amino"], "El bromo se adiciona a la insaturación."],
      ["El ensayo de Lucas (ZnCl₂ en HCl concentrado) se utiliza para:", ["Distinguir alcoholes primarios, secundarios y terciarios", "Identificar aldehídos", "Detectar dobles enlaces", "Identificar fenoles"], "Los terciarios enturbian la disolución al instante; los secundarios, en unos minutos; los primarios, apenas reaccionan."],
      ["El método de Kjeldahl se utiliza para determinar:", ["Nitrógeno", "Azufre", "Halógenos", "Carbono"], "Digestión con H₂SO₄, destilación del NH₃ y valoración."],
      ["En cromatografía en capa fina, el factor Rf se define como:", ["La distancia recorrida por la sustancia dividida entre la recorrida por el frente del disolvente", "El tiempo de retención de la sustancia", "El cociente entre áreas de pico", "La distancia recorrida por el disolvente dividida entre la de la sustancia"], "Su valor está siempre entre 0 y 1."],
      ["Un intervalo de fusión amplio y por debajo del valor tabulado indica que un sólido orgánico:", ["Está impuro", "Es muy puro", "Es un compuesto iónico", "Sublima"], "Las impurezas descienden y ensanchan el intervalo de fusión."]
    ]
  },
  {
    id: "q28", bloque: "Q",
    titulo: "Análisis estructural por métodos espectroscópicos",
    norma: "Tema 28 de la parte específica",
    resumen: [
      "IR: vibraciones de enlace que identifican grupos funcionales. C=O ≈ 1.700 cm⁻¹; O–H, banda ancha a 3.200-3.600 cm⁻¹; C≡N ≈ 2.250 cm⁻¹; zona de huella dactilar por debajo de 1.500 cm⁻¹.",
      "UV-visible: transiciones electrónicas. Ley de Lambert-Beer: A = ε·b·c; A = −log T.",
      "RMN de ¹H: desplazamiento químico δ (ppm) respecto al TMS (δ = 0). Multiplicidad por la regla n + 1. El H de un aldehído aparece a δ ≈ 9-10 ppm.",
      "Espectrometría de masas: ion molecular M⁺ y fragmentos (m/z). Patrón isotópico del Cl (M y M + 2 en relación 3:1) y del Br (1:1).",
      "Análisis de metales: absorción atómica (lámpara de cátodo hueco), ICP-OES e ICP-MS."
    ],
    preguntas: [
      ["En espectroscopía infrarroja, una banda intensa hacia 1.700 cm⁻¹ indica la presencia de un grupo:", ["Carbonilo (C=O)", "Hidroxilo (O–H)", "Nitrilo (C≡N)", "Metilo (C–H)"], "Aldehídos, cetonas, ácidos y ésteres absorben entre 1.650 y 1.750 cm⁻¹."],
      ["Una disolución tiene una absorbancia de 0,5 en una cubeta de 1 cm; ε = 1.000 L·mol⁻¹·cm⁻¹. Su concentración es:", ["5·10⁻⁴ M", "5·10⁻³ M", "0,5 M", "2·10⁻³ M"], "c = A/(ε·b) = 0,5/(1.000 · 1) = 5·10⁻⁴ mol/L."],
      ["Una muestra que transmite el 10 % de la luz incidente tiene una absorbancia de:", ["1", "0,1", "10", "2"], "A = −log T = −log 0,10 = 1."],
      ["La sustancia de referencia habitual en RMN de ¹H, a la que se asigna δ = 0 ppm, es:", ["El tetrametilsilano (TMS)", "El cloroformo deuterado", "El benceno", "El agua"], "Sus 12 protones equivalentes dan una única señal muy apantallada."],
      ["En el espectro de RMN de ¹H del etanol, la señal del CH₃ (vecino de un CH₂) aparece como:", ["Un triplete", "Un doblete", "Un cuartete", "Un singlete"], "Regla n + 1: dos hidrógenos vecinos → 3 picos. El CH₂ aparece como cuartete."],
      ["En espectrometría de masas, un compuesto con un átomo de cloro presenta los picos M y M + 2 en una relación aproximada de:", ["3:1", "1:1", "1:3", "9:1"], "Abundancia natural ³⁵Cl : ³⁷Cl ≈ 75 : 25. Con bromo la relación es 1:1."],
      ["La técnica que utiliza una lámpara de cátodo hueco del elemento que se va a determinar es:", ["La espectroscopía de absorción atómica", "La resonancia magnética nuclear", "La espectroscopía infrarroja", "La cromatografía de gases"], "La lámpara emite las líneas características del elemento analizado."],
      ["En RMN de ¹H, el protón de un grupo aldehído (–CHO) aparece a un desplazamiento químico aproximado de:", ["9-10 ppm", "0-1 ppm", "2-3 ppm", "5-6 ppm"], "Está muy desapantallado por el grupo carbonilo."]
    ]
  },
  {
    id: "q29", bloque: "Q",
    titulo: "Hidrocarburos. Nomenclatura, obtención, propiedades. Identificación de alquenos y alquinos",
    norma: "Tema 29 de la parte específica",
    resumen: [
      "Alcanos CₙH₂ₙ₊₂ (saturados, poco reactivos: combustión y sustitución radicalaria). Alquenos CₙH₂ₙ y alquinos CₙH₂ₙ₋₂ (adiciones). Los cicloalcanos CₙH₂ₙ son isómeros de los alquenos.",
      "Nomenclatura IUPAC: cadena principal más larga (o con más insaturaciones), localizadores lo más bajos posible y sustituyentes en orden alfabético.",
      "El punto de ebullición aumenta con la longitud de la cadena y disminuye con la ramificación.",
      "Obtención: alquenos por deshidratación de alcoholes (H₂SO₄ en caliente) o craqueo; acetileno a partir de carburo de calcio: CaC₂ + 2 H₂O → C₂H₂ + Ca(OH)₂.",
      "Identificación: decoloración del agua de bromo; ensayo de Baeyer (KMnO₄ diluido en frío, que forma precipitado pardo de MnO₂). Los alquinos terminales precipitan acetiluros con Ag⁺ o Cu⁺ amoniacales.",
      "Hidrogenación catalítica (Ni, Pd, Pt); con el catalizador de Lindlar, un alquino da el alqueno cis."
    ],
    preguntas: [
      ["La fórmula general de los alquinos de cadena abierta es:", ["CₙH₂ₙ₋₂", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙHₙ"], "Un triple enlace equivale a dos insaturaciones."],
      ["El acetileno puede obtenerse en el laboratorio por reacción de agua con:", ["Carburo de calcio", "Carbonato de calcio", "Óxido de calcio", "Cloruro de calcio"], "CaC₂ + 2 H₂O → HC≡CH + Ca(OH)₂."],
      ["En el ensayo de Baeyer, un alqueno decolora el permanganato diluido en frío y se forma:", ["Un precipitado pardo de MnO₂ y un diol", "Un precipitado blanco de AgCl", "Un espejo de plata", "Un precipitado rojo de Cu₂O"], "El permanganato violeta se reduce a MnO₂."],
      ["Los alquinos terminales se distinguen de los internos porque:", ["Forman acetiluros insolubles con disoluciones amoniacales de Ag⁺ o Cu⁺", "Decoloran el agua de bromo", "Arden con llama luminosa", "Son insolubles en agua"], "Su hidrógeno terminal es ligeramente ácido."],
      ["El nombre IUPAC del (CH₃)₃CH (isobutano) es:", ["Metilpropano", "Butano", "2,2-dimetiletano", "Trimetilmetano"], "La cadena principal más larga tiene 3 carbonos, con un metilo en el carbono 2."],
      ["Entre los isómeros del pentano, el de menor punto de ebullición es:", ["El 2,2-dimetilpropano (neopentano)", "El n-pentano", "El 2-metilbutano", "Todos tienen el mismo"], "Cuanto más ramificado, menor superficie de contacto y menores fuerzas de London."],
      ["La hidrogenación de un alquino con el catalizador de Lindlar produce:", ["El alqueno cis", "El alqueno trans", "El alcano", "Un alcohol"], "El catalizador está parcialmente envenenado y la adición es syn."],
      ["Los alquenos se pueden obtener por deshidratación de alcoholes calentándolos con:", ["Ácido sulfúrico concentrado", "Sodio metálico", "Hidróxido de sodio diluido", "Hidrógeno y níquel"], "Eliminación de agua catalizada por ácido."]
    ]
  },
  {
    id: "q30", bloque: "Q",
    titulo: "Química del petróleo. Derivados, contaminación y comparación con gas natural y carbón",
    norma: "Tema 30 de la parte específica",
    resumen: [
      "Refino: destilación fraccionada en gases (C1-C4), gasolinas (C5-C12), queroseno, gasóleo, fuelóleo y residuo (asfaltos y lubricantes).",
      "Craqueo (térmico o catalítico) para romper cadenas largas y obtener gasolina y olefinas. Reformado catalítico para aumentar el índice de octano (aromáticos e isoalcanos).",
      "Índice de octano: isooctano (2,2,4-trimetilpentano) = 100; n-heptano = 0. Índice de cetano, para el gasóleo. El tetraetilo de plomo fue sustituido por oxigenados (MTBE, ETBE).",
      "Contaminación: CO₂ (efecto invernadero), SO₂ (lluvia ácida), NOx (smog), CO, partículas y COV; vertidos de crudo.",
      "Gas natural (principalmente metano): emite menos CO₂ por unidad de energía y apenas SO₂ y partículas. El carbón es el que más CO₂ emite. Rango del carbón por contenido en carbono: turba < lignito < hulla < antracita.",
      "Normativa: Ley 7/2021, de 20 de mayo, de cambio climático y transición energética; Ley 34/1998, del sector de hidrocarburos."
    ],
    preguntas: [
      ["El proceso de refino que rompe hidrocarburos de cadena larga en otros más cortos se denomina:", ["Craqueo", "Reformado", "Alquilación", "Polimerización"], "El reformado reorganiza moléculas para aumentar el octanaje."],
      ["En la escala de octano, el valor 100 corresponde a:", ["El isooctano (2,2,4-trimetilpentano)", "El n-heptano", "El n-octano", "El benceno"], "El n-heptano tiene índice 0."],
      ["El componente mayoritario del gas natural es:", ["El metano", "El propano", "El butano", "El etano"], "Suele superar el 80-90 % en volumen."],
      ["De los combustibles fósiles, el que emite menos CO₂ por unidad de energía producida es:", ["El gas natural", "El carbón", "El fuelóleo", "El gasóleo"], "El metano tiene la mayor relación H/C."],
      ["El principal contaminante responsable de la lluvia ácida en la combustión de carbón y fuelóleo con azufre es:", ["El dióxido de azufre", "El metano", "El monóxido de carbono", "El ozono troposférico"], "SO₂ → SO₃ → H₂SO₄ en la atmósfera (junto a los NOx, que forman HNO₃)."],
      ["El tipo de carbón con mayor contenido en carbono y poder calorífico es:", ["La antracita", "La turba", "El lignito", "La hulla subbituminosa"], "Orden de rango: turba < lignito < hulla < antracita."],
      ["El aditivo antidetonante tetraetilo de plomo fue sustituido en las gasolinas por compuestos oxigenados como:", ["MTBE y ETBE", "Benceno", "Cloruro de vinilo", "Dióxido de azufre"], "El plomo, además de tóxico, envenenaba los catalizadores de los automóviles."],
      ["La ley española de cambio climático y transición energética es la:", ["Ley 7/2021, de 20 de mayo", "Ley 34/1998, de 7 de octubre", "Ley 21/2013, de 9 de diciembre", "Ley 26/2007, de 23 de octubre"], "La Ley 34/1998 regula el sector de hidrocarburos."]
    ]
  },
  {
    id: "q31", bloque: "Q",
    titulo: "Funciones oxigenadas y nitrogenadas",
    norma: "Tema 31 de la parte específica",
    resumen: [
      "Alcoholes (–OH): la oxidación de los primarios da aldehídos y después ácidos; la de los secundarios, cetonas; los terciarios no se oxidan fácilmente. Forman puentes de hidrógeno, por lo que hierven más alto que los éteres de masa similar.",
      "Aldehídos (–CHO) y cetonas (C=O): los aldehídos dan positivo con Tollens y Fehling; las cetonas no.",
      "Ácidos carboxílicos (–COOH) y ésteres: esterificación de Fischer (ácido + alcohol con catalizador ácido; reversible); saponificación (hidrólisis básica de grasas, que da jabón y glicerina).",
      "Aminas (bases débiles), amidas (enlace peptídico; urea, síntesis de Wöhler en 1828) y nitrilos (–C≡N).",
      "Nomenclatura: CH₃CHO etanal; CH₃COCH₃ propanona; CH₃COOH ácido etanoico; HCOOCH₃ metanoato de metilo; CH₃NH₂ metilamina.",
      "Interés industrial: metanol, etanol, formaldehído (resinas), acetona (disolvente), poliamidas (nailon) y poliésteres (PET)."
    ],
    preguntas: [
      ["La oxidación suave de un alcohol secundario produce:", ["Una cetona", "Un aldehído", "Un ácido carboxílico", "Un éter"], "Los primarios dan aldehídos (y luego ácidos); los terciarios no se oxidan en condiciones suaves."],
      ["El nombre IUPAC de la acetona (CH₃COCH₃) es:", ["Propanona", "Propanal", "Etanona", "Metiletanal"], "Cetona de tres carbonos."],
      ["La reacción entre un ácido carboxílico y un alcohol, catalizada por ácido, para formar un éster y agua se denomina:", ["Esterificación de Fischer", "Saponificación", "Hidrólisis", "Transesterificación de Lucas"], "Es reversible; se desplaza retirando agua o usando exceso de alcohol."],
      ["La saponificación consiste en:", ["La hidrólisis básica de un éster (grasa), que produce la sal del ácido graso (jabón) y glicerina", "La esterificación de un ácido graso con glicerina", "La hidrogenación de aceites", "La oxidación de un alcohol"], "Las grasas son triésteres de la glicerina."],
      ["El etanol (M = 46) hierve a 78 °C y el dimetiléter (M = 46) a −24 °C. La diferencia se debe a:", ["Los puentes de hidrógeno entre moléculas de etanol", "La mayor masa molecular del etanol", "El carácter iónico del etanol", "Las fuerzas de London del éter"], "El éter no tiene H unido a O."],
      ["La síntesis de la urea a partir de cianato de amonio, que contradijo la teoría de la fuerza vital, la realizó:", ["Friedrich Wöhler, en 1828", "Louis Pasteur, en 1848", "August Kekulé, en 1865", "Marcellin Berthelot, en 1860"], "Primera síntesis de un compuesto orgánico a partir de uno inorgánico."],
      ["El HCOOCH₃ se denomina:", ["Metanoato de metilo", "Etanoato de metilo", "Ácido metanoico", "Metoximetano"], "Éster del ácido metanoico (fórmico) y el metanol."],
      ["El grupo funcional de los nitrilos es:", ["–C≡N", "–NH₂", "–CONH₂", "–NO₂"], "–NH₂: aminas; –CONH₂: amidas; –NO₂: nitroderivados."]
    ]
  },
  {
    id: "q32", bloque: "Q",
    titulo: "Compuestos aromáticos. El benceno",
    norma: "Tema 32 de la parte específica",
    resumen: [
      "Benceno C₆H₆: anillo plano con seis enlaces C–C equivalentes (≈ 139 pm) y electrones π deslocalizados (estructuras de Kekulé como formas resonantes). Regla de Hückel: es aromático un sistema cíclico, plano y conjugado con 4n + 2 electrones π.",
      "Reactividad típica: sustitución electrófila aromática (nitración con HNO₃/H₂SO₄ vía NO₂⁺, halogenación con FeBr₃, Friedel-Crafts con AlCl₃, sulfonación). No da adiciones con facilidad, porque perdería la aromaticidad.",
      "Orientación: activantes orto/para (–OH, –NH₂, –CH₃); desactivantes meta (–NO₂, –COOH, –CN); los halógenos son desactivantes pero orientan a orto/para.",
      "Obtención: reformado catalítico del petróleo y destilación del alquitrán de hulla.",
      "Toxicidad: el benceno es carcinógeno (leucemia); se sustituye por tolueno como disolvente. Grupo BTEX (benceno, tolueno, etilbenceno y xilenos).",
      "Derivados de interés industrial: estireno (poliestireno), fenol (resinas, bisfenol A), anilina (colorantes), tolueno (TNT), naftaleno (dos anillos fusionados)."
    ],
    preguntas: [
      ["La reacción característica del benceno es:", ["La sustitución electrófila aromática", "La adición electrófila", "La sustitución nucleófila bimolecular", "La eliminación"], "Conserva el sistema aromático estable."],
      ["Según la regla de Hückel, un sistema cíclico plano y conjugado es aromático si tiene:", ["4n + 2 electrones π", "4n electrones π", "Un número impar de electrones π", "Exactamente 6 átomos de carbono"], "El benceno tiene 6 electrones π (n = 1)."],
      ["En la nitración del benceno con mezcla sulfonítrica, el electrófilo que ataca el anillo es:", ["El ion nitronio, NO₂⁺", "El ion nitrato, NO₃⁻", "El ácido nítrico sin disociar", "El ion sulfato"], "El H₂SO₄ protona al HNO₃, que pierde agua."],
      ["Un sustituyente –NO₂ unido al anillo bencénico:", ["Desactiva el anillo y orienta la sustitución a la posición meta", "Activa el anillo y orienta a orto y para", "Activa el anillo y orienta a meta", "No influye en la reactividad"], "Es un grupo fuertemente atractor de electrones."],
      ["La reacción de Friedel-Crafts utiliza como catalizador:", ["Tricloruro de aluminio (AlCl₃)", "Níquel Raney", "Pentóxido de vanadio", "Ácido sulfúrico diluido"], "Ácido de Lewis que genera el carbocatión o el ion acilio electrófilo."],
      ["El benceno se ha sustituido como disolvente por el tolueno principalmente porque:", ["El benceno es carcinógeno", "El tolueno es más volátil", "El benceno no disuelve compuestos orgánicos", "El tolueno no es inflamable"], "La exposición al benceno se asocia a leucemia."],
      ["¿Cuántos isómeros de posición tiene el dimetilbenceno (xileno)?", ["3", "2", "4", "6"], "Orto (1,2), meta (1,3) y para (1,4)."],
      ["El monómero de partida del poliestireno es:", ["El estireno (vinilbenceno)", "El tolueno", "El fenol", "La anilina"], "Polimerización por adición del doble enlace vinílico."]
    ]
  }
);
