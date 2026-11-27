/*
 * Supuestos prácticos (segundo ejercicio: prueba práctica sobre el temario específico, máx. 2 horas, 0-60 puntos).
 * Supuestos de ejemplo de un laboratorio de aguas, elaborados para practicar. Los cálculos están comprobados,
 * pero los métodos y criterios deben contrastarse con la norma o el procedimiento vigente en cada caso.
 *
 * Formato:
 * { id, titulo, temas: [códigos de tema], enunciado: [párrafos], datos: [líneas],
 *   apartados: [ { p: "pregunta", pasos: ["paso de la solución", …], resultado: "resultado final" } ] }
 * Se pueden importar supuestos propios con este mismo formato desde la sección Importar.
 */
window.TEMARIO.practicos = [
  {
    id: "p01",
    titulo: "Preparación y normalización de disoluciones",
    temas: ["q13", "q21"],
    enunciado: [
      "El laboratorio necesita preparar disoluciones de trabajo para las volumetrías ácido-base del control de aguas residuales.",
      "Se dispone de ácido clorhídrico comercial y de hidróxido de sodio, que debe normalizarse frente a un patrón primario."
    ],
    datos: [
      "HCl comercial: 37 % en masa; densidad 1,19 g/mL; M(HCl) = 36,46 g/mol.",
      "Ftalato ácido de potasio (KHP): M = 204,22 g/mol; masa pesada 0,5105 g.",
      "Volumen de NaOH gastado en la valoración del KHP: 24,60 mL (indicador fenolftaleína)."
    ],
    apartados: [
      {
        p: "Calcula la molaridad del HCl comercial.",
        pasos: [
          "Masa de 1 L de disolución: 1,19 g/mL × 1000 mL = 1190 g.",
          "Masa de HCl: 1190 g × 0,37 = 440,3 g.",
          "Moles: 440,3 g / 36,46 g/mol = 12,08 mol en 1 L."
        ],
        resultado: "≈ 12,1 M"
      },
      {
        p: "¿Qué volumen de HCl comercial hace falta para preparar 500 mL de HCl 0,100 M? Describe el procedimiento.",
        pasos: [
          "Moles necesarios: 0,500 L × 0,100 mol/L = 0,0500 mol.",
          "Volumen: 0,0500 mol / 12,08 mol/L = 4,14 × 10⁻³ L = 4,14 mL.",
          "Procedimiento: en vitrina y con guantes y gafas, poner unos 300 mL de agua destilada en un matraz aforado de 500 mL, añadir el ácido medido con pipeta graduada (ácido sobre agua), enrasar al enfriar y homogeneizar.",
          "Como el HCl comercial no es patrón primario, la disolución se normaliza después (por ejemplo, con carbonato de sodio o con el NaOH normalizado)."
        ],
        resultado: "4,14 mL de HCl al 37 %, enrasados a 500 mL"
      },
      {
        p: "Calcula la concentración exacta del NaOH y justifica la elección del patrón y del indicador.",
        pasos: [
          "Moles de KHP: 0,5105 g / 204,22 g/mol = 2,4998 × 10⁻³ mol.",
          "Estequiometría 1:1 (KHP es monoprótico): moles de NaOH = 2,4998 × 10⁻³ mol.",
          "M(NaOH) = 2,4998 × 10⁻³ mol / 0,02460 L = 0,1016 M.",
          "El KHP es patrón primario: muy puro, estable, no higroscópico y de masa molar alta (menor error relativo de pesada).",
          "El punto de equivalencia es básico (pH ≈ 8-9, ftalato), por eso se usa fenolftaleína (viraje 8,2-10)."
        ],
        resultado: "c(NaOH) = 0,1016 M"
      }
    ]
  },
  {
    id: "p02",
    titulo: "Fósforo en aguas por espectrofotometría: recta de calibrado",
    temas: ["q28", "q13"],
    enunciado: [
      "Se determina el fósforo (ortofosfato) en un efluente por el método del ácido ascórbico (azul de molibdeno), midiendo la absorbancia a 880 nm.",
      "La muestra se diluyó 1:5 antes de la medida porque su absorbancia sin diluir quedaba fuera del intervalo de calibración."
    ],
    datos: [
      "Patrones (mg P/L): 0; 0,5; 1,0; 2,0; 4,0.",
      "Absorbancias: 0,002; 0,081; 0,160; 0,318; 0,640.",
      "Absorbancia de la muestra diluida 1:5: 0,245.",
      "M(P) = 30,97 g/mol; M(PO₄³⁻) = 94,97 g/mol."
    ],
    apartados: [
      {
        p: "Obtén la recta de calibrado por mínimos cuadrados y su coeficiente de correlación.",
        pasos: [
          "Medias: x̄ = 1,5 mg/L; ȳ = 0,2402.",
          "Sxx = Σ(x − x̄)² = 10,0; Sxy = Σ(x − x̄)(y − ȳ) = 1,595.",
          "Pendiente b = Sxy / Sxx = 0,1595 L/mg.",
          "Ordenada a = ȳ − b·x̄ = 0,2402 − 0,1595 × 1,5 = 0,00095.",
          "r = 0,99999 (r² = 0,99998): la respuesta es lineal en todo el intervalo."
        ],
        resultado: "A = 0,1595·c + 0,00095; r = 0,99999"
      },
      {
        p: "Calcula la concentración de fósforo en la muestra original, expresada como P y como PO₄³⁻.",
        pasos: [
          "Concentración en la disolución medida: c = (0,245 − 0,00095) / 0,1595 = 1,530 mg P/L.",
          "Se corrige por la dilución 1:5: 1,530 × 5 = 7,65 mg P/L.",
          "Como fosfato: 7,65 × (94,97 / 30,97) = 7,65 × 3,066 = 23,5 mg PO₄³⁻/L."
        ],
        resultado: "7,65 mg P/L = 23,5 mg PO₄³⁻/L"
      },
      {
        p: "¿Por qué fue correcto diluir la muestra? Indica dos controles de calidad que añadirías a la serie analítica.",
        pasos: [
          "Solo es válido interpolar dentro del intervalo calibrado (0-4 mg/L); extrapolar supone asumir una linealidad no comprobada.",
          "La lectura diluida (1,53 mg/L) queda en la zona central de la recta, donde la incertidumbre es menor.",
          "Controles: blanco de reactivos; patrón de control independiente (otra fuente o lote) cada cierto número de muestras; muestra duplicada; muestra fortificada para calcular la recuperación."
        ],
        resultado: "Dilución correcta; blanco, patrón de control, duplicado y fortificación"
      }
    ]
  },
  {
    id: "p03",
    titulo: "Dureza total, calcio y magnesio con EDTA",
    temas: ["q12", "q24"],
    enunciado: [
      "Se analiza un agua subterránea destinada a riego y abastecimiento. Se determinan la dureza total y el calcio por volumetría complexométrica con EDTA."
    ],
    datos: [
      "Volumen de muestra en cada valoración: 50,0 mL.",
      "EDTA 0,0100 M.",
      "Dureza total (tampón pH 10, indicador negro de eriocromo T): 12,4 mL.",
      "Calcio (NaOH hasta pH 12-13, indicador murexida o calcón): 8,2 mL.",
      "M(CaCO₃) = 100,09 g/mol; M(Ca) = 40,08 g/mol; M(Mg) = 24,31 g/mol."
    ],
    apartados: [
      {
        p: "Calcula la dureza total en mmol/L, en mg/L de CaCO₃ y en grados franceses.",
        pasos: [
          "Moles de EDTA = moles de Ca²⁺ + Mg²⁺ (complejos 1:1): 0,0124 L × 0,0100 M = 1,24 × 10⁻⁴ mol.",
          "En 50 mL → 1,24 × 10⁻⁴ / 0,0500 L = 2,48 mmol/L.",
          "Como CaCO₃: 2,48 mmol/L × 100,09 mg/mmol = 248,2 mg/L.",
          "Grados franceses (1 °f = 10 mg/L de CaCO₃): 24,8 °f."
        ],
        resultado: "2,48 mmol/L = 248 mg/L CaCO₃ = 24,8 °f"
      },
      {
        p: "Calcula las concentraciones de calcio y de magnesio en mg/L.",
        pasos: [
          "Calcio: 0,0082 L × 0,0100 M / 0,0500 L = 1,64 mmol/L → 1,64 × 40,08 = 65,7 mg Ca/L.",
          "Magnesio, por diferencia: 2,48 − 1,64 = 0,84 mmol/L → 0,84 × 24,31 = 20,4 mg Mg/L."
        ],
        resultado: "Ca = 65,7 mg/L; Mg = 20,4 mg/L"
      },
      {
        p: "Explica la función del tampón de pH 10 y por qué a pH 12-13 se valora solo el calcio. Clasifica el agua.",
        pasos: [
          "A pH 10 los complejos de EDTA con Ca²⁺ y Mg²⁺ son estables y el negro de eriocromo T vira de rojo vino (complejo Mg-indicador) a azul (indicador libre).",
          "A pH 12-13 el magnesio precipita como Mg(OH)₂ y no consume EDTA; se valora solo el calcio con un indicador específico.",
          "Con 248 mg/L de CaCO₃ el agua es muy dura en la clasificación habitual (más de 180 mg/L)."
        ],
        resultado: "Agua muy dura"
      }
    ]
  },
  {
    id: "p04",
    titulo: "Demanda química de oxígeno (DQO) por dicromato",
    temas: ["q23", "q16"],
    enunciado: [
      "Se determina la DQO de un agua residual urbana a la entrada de una EDAR por oxidación con dicromato potásico en medio sulfúrico y valoración por retroceso del dicromato sobrante con sal de Mohr (sulfato de hierro(II) y amonio, FAS), con ferroína como indicador."
    ],
    datos: [
      "Volumen de muestra: 20,0 mL.",
      "FAS: 0,0995 M.",
      "Volumen de FAS gastado en el blanco: 19,80 mL; en la muestra: 12,35 mL.",
      "Expresión: DQO (mg O₂/L) = (A − B) × M × 8000 / V(mL); A = blanco, B = muestra."
    ],
    apartados: [
      {
        p: "Calcula la DQO de la muestra.",
        pasos: [
          "A − B = 19,80 − 12,35 = 7,45 mL de FAS equivalentes al dicromato consumido por la muestra.",
          "DQO = 7,45 × 0,0995 × 8000 / 20,0 = 296,5 mg O₂/L.",
          "El factor 8000 = 8 g de O₂ por equivalente × 1000 mL/L (cada Fe²⁺ cede 1 electrón; el O₂ capta 4 por mol, es decir, 8 g por electrón)."
        ],
        resultado: "DQO ≈ 297 mg O₂/L"
      },
      {
        p: "Indica la función del sulfato de plata y del sulfato de mercurio(II).",
        pasos: [
          "Ag₂SO₄: catalizador que permite oxidar compuestos orgánicos alifáticos de cadena lineal.",
          "HgSO₄: complejante de los cloruros (forma HgCl₂ poco disociado); sin él, el Cl⁻ se oxidaría a Cl₂, consumiría dicromato y daría una DQO falsamente alta."
        ],
        resultado: "Ag₂SO₄ cataliza; HgSO₄ elimina la interferencia de cloruros"
      },
      {
        p: "Para verificar el método se analiza un patrón de ftalato ácido de potasio de 425 mg/L. ¿Qué DQO teórica debe dar y cómo se valora el resultado?",
        pasos: [
          "Oxidación completa: KC₈H₅O₄ + 7,5 O₂ → 8 CO₂ + … ; 7,5 × 32 / 204,22 = 1,175 mg O₂ por mg de KHP.",
          "DQO teórica = 425 × 1,175 = 500 mg O₂/L.",
          "Se calcula la recuperación (valor medido / 500 × 100) y se compara con los límites de aceptación del procedimiento (habitualmente en torno al 90-110 %)."
        ],
        resultado: "500 mg O₂/L teóricos"
      }
    ]
  },
  {
    id: "p05",
    titulo: "Demanda bioquímica de oxígeno (DBO₅) y biodegradabilidad",
    temas: ["q17", "q15"],
    enunciado: [
      "De la misma agua residual del supuesto de DQO se determina la DBO₅ por el método de diluciones: incubación 5 días a 20 °C en oscuridad, midiendo el oxígeno disuelto inicial y final."
    ],
    datos: [
      "Volumen de muestra en el frasco: 10 mL; volumen del frasco: 300 mL.",
      "Oxígeno disuelto inicial: 8,6 mg/L; final: 4,1 mg/L.",
      "Consumo del blanco de agua de dilución en 5 días: 0,2 mg/L.",
      "DQO de la muestra: 296,5 mg O₂/L (supuesto anterior)."
    ],
    apartados: [
      {
        p: "Calcula la DBO₅.",
        pasos: [
          "Fracción de muestra: P = 10 / 300 = 0,0333.",
          "Consumo neto: (8,6 − 4,1) − 0,2 = 4,3 mg/L.",
          "DBO₅ = 4,3 / 0,0333 = 129 mg O₂/L."
        ],
        resultado: "DBO₅ ≈ 129 mg O₂/L"
      },
      {
        p: "¿Es válida la dilución? Justifícalo con los criterios habituales del método.",
        pasos: [
          "El método exige un consumo de oxígeno de al menos 2 mg/L y un oxígeno residual de al menos 1 mg/L al final de la incubación.",
          "Consumo: 4,5 mg/L (≥ 2) y residual: 4,1 mg/L (≥ 1): la dilución es válida.",
          "Si el oxígeno se agotase, habría que repetir con una dilución mayor (menos volumen de muestra)."
        ],
        resultado: "Dilución válida"
      },
      {
        p: "Calcula la relación DBO₅/DQO e interprétala. ¿Por qué se incuba a 20 °C y en oscuridad?",
        pasos: [
          "DBO₅/DQO = 129 / 296,5 = 0,44.",
          "Valores en torno a 0,4-0,8 indican un agua razonablemente biodegradable, apta para tratamiento biológico; valores bajos (< 0,2-0,3) indican materia orgánica poco biodegradable o presencia de tóxicos.",
          "20 °C: la velocidad de las reacciones bioquímicas depende de la temperatura y se normaliza para que los resultados sean comparables.",
          "Oscuridad: evita que las algas produzcan oxígeno por fotosíntesis, lo que falsearía el consumo."
        ],
        resultado: "DBO₅/DQO = 0,44: biodegradable"
      }
    ]
  },
  {
    id: "p06",
    titulo: "Alcalinidad y especies carbonatadas",
    temas: ["q21", "q20"],
    enunciado: [
      "Se determina la alcalinidad de un agua superficial valorando con ácido sulfúrico hasta pH 8,3 (alcalinidad a la fenolftaleína, P) y hasta pH 4,5 (alcalinidad total, T)."
    ],
    datos: [
      "Volumen de muestra: 100 mL.",
      "H₂SO₄ 0,0200 N (0,0100 M).",
      "Volumen hasta pH 8,3: 1,2 mL; volumen total hasta pH 4,5: 9,8 mL.",
      "Alcalinidad (mg CaCO₃/L) = V(mL) × N × 50 000 / V muestra (mL). M(HCO₃⁻) = 61,02 g/mol; equivalente de CaCO₃ = 50,04 g."
    ],
    apartados: [
      {
        p: "Calcula las alcalinidades P y T.",
        pasos: [
          "P = 1,2 × 0,0200 × 50 000 / 100 = 12 mg CaCO₃/L.",
          "T = 9,8 × 0,0200 × 50 000 / 100 = 98 mg CaCO₃/L."
        ],
        resultado: "P = 12 mg/L; T = 98 mg/L (como CaCO₃)"
      },
      {
        p: "Determina las contribuciones de hidróxidos, carbonatos y bicarbonatos.",
        pasos: [
          "Relaciones clásicas: si P = 0 → solo HCO₃⁻; si P < T/2 → CO₃²⁻ = 2P y HCO₃⁻ = T − 2P; si P = T/2 → solo CO₃²⁻; si P > T/2 → OH⁻ = 2P − T y CO₃²⁻ = 2(T − P); si P = T → solo OH⁻.",
          "Aquí P (12) < T/2 (49): OH⁻ = 0; CO₃²⁻ = 2 × 12 = 24 mg CaCO₃/L; HCO₃⁻ = 98 − 24 = 74 mg CaCO₃/L.",
          "Bicarbonato como ion: 74 × 61,02 / 50,04 = 90,2 mg HCO₃⁻/L."
        ],
        resultado: "OH⁻ = 0; CO₃²⁻ = 24; HCO₃⁻ = 74 mg CaCO₃/L (90 mg HCO₃⁻/L)"
      },
      {
        p: "¿Por qué se usan dos puntos finales (8,3 y 4,5)? ¿Qué indicadores o qué instrumento emplearías?",
        pasos: [
          "pH 8,3: el carbonato pasa a bicarbonato (CO₃²⁻ + H⁺ → HCO₃⁻); coincide con el viraje de la fenolftaleína.",
          "pH 4,5: el bicarbonato pasa a ácido carbónico (HCO₃⁻ + H⁺ → H₂CO₃); indicador naranja de metilo o verde de bromocresol-rojo de metilo.",
          "En aguas coloreadas o turbias es preferible la valoración potenciométrica con pH-metro calibrado."
        ],
        resultado: "Dos equivalencias del sistema carbonato"
      }
    ]
  },
  {
    id: "p07",
    titulo: "Cloruros por el método de Mohr y control de calidad",
    temas: ["q24", "q27"],
    enunciado: [
      "Se determinan cloruros en un agua de abastecimiento por argentometría (método de Mohr) y se evalúa la calidad de los resultados del laboratorio."
    ],
    datos: [
      "Volumen de muestra: 100 mL; AgNO₃ 0,0141 M; indicador K₂CrO₄.",
      "Volumen gastado en la muestra: 6,8 mL; en el blanco: 0,2 mL. M(Cl) = 35,45 g/mol.",
      "Réplicas de la muestra (mg Cl⁻/L): 32,6; 33,1; 32,8; 33,4; 32,9.",
      "Fortificación de otro analito (nitrito): muestra 2,10 mg/L; añadido 1,00 mg/L; medido 3,02 mg/L.",
      "Siete blancos de ese método (mg/L): 0,010; 0,014; 0,008; 0,012; 0,011; 0,009; 0,013."
    ],
    apartados: [
      {
        p: "Calcula la concentración de cloruros y explica el punto final.",
        pasos: [
          "Volumen neto: 6,8 − 0,2 = 6,6 mL.",
          "Cl⁻ = 6,6 × 0,0141 × 35 450 / 100 = 33,0 mg/L.",
          "Primero precipita AgCl (blanco), menos soluble; cuando se agota el cloruro, el primer exceso de Ag⁺ forma Ag₂CrO₄ rojo ladrillo.",
          "El pH debe estar entre 7 y 10: en medio ácido el cromato pasa a dicromato y en medio básico precipita AgOH/Ag₂O."
        ],
        resultado: "Cl⁻ = 33,0 mg/L"
      },
      {
        p: "Calcula la media, la desviación típica y el coeficiente de variación de las réplicas.",
        pasos: [
          "Media = 32,96 mg/L.",
          "Desviación típica (n − 1) = 0,305 mg/L.",
          "CV = 0,305 / 32,96 × 100 = 0,93 %: precisión muy buena."
        ],
        resultado: "x̄ = 32,96 mg/L; s = 0,31 mg/L; CV = 0,93 %"
      },
      {
        p: "Calcula la recuperación de la fortificación y los límites de detección y de cuantificación a partir de los blancos.",
        pasos: [
          "Recuperación = (3,02 − 2,10) / 1,00 × 100 = 92,0 %.",
          "Desviación típica de los blancos: s = 0,0022 mg/L.",
          "Límite de detección ≈ 3s = 0,0065 mg/L; límite de cuantificación ≈ 10s = 0,022 mg/L.",
          "La recuperación se compara con los criterios de aceptación del procedimiento (por ejemplo, 85-115 %); estos parámetros forman parte de la validación exigida por la norma UNE-EN ISO/IEC 17025."
        ],
        resultado: "Recuperación 92 %; LD ≈ 0,0065 mg/L; LC ≈ 0,022 mg/L"
      }
    ]
  }
];
