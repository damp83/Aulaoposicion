/*
 * Aula CHS — datos de la convocatoria y temario común.
 *
 * Convocatoria: Resolución de la Subsecretaría del MITECO (firmada el 06/07/2026) de proceso selectivo de
 * personal laboral fijo, grupos M2, M1, E2 y E1 del IV Convenio Único (OEP 2023 y 2024).
 * Especialidad preparada: M2 · Química · Confederación Hidrográfica del Segura (Santomera).
 *
 * Formato de cada pregunta: [enunciado, [CORRECTA, incorrecta, incorrecta, incorrecta], explicación]
 * La respuesta correcta va SIEMPRE en primera posición: la aplicación baraja las opciones al mostrarlas.
 * Material de práctica: contrástalo con las bases oficiales y con la versión consolidada de cada norma en el BOE.
 */
window.TEMARIO = {
  convocatoria: {
    titulo: "Personal laboral fijo MITECO · OEP 2023-2024",
    plaza: "M2 · Química",
    organismo: "Confederación Hidrográfica del Segura, O.A.",
    resolucion: "Resolución de la Subsecretaría del MITECO, firmada el 6 de julio de 2026 (RD 625/2023 y RD 656/2024 de OEP; art. 28 del IV Convenio Único)",
    puestos: [
      { orden: 9, id: "TED009", provincia: "Murcia", localidad: "Santomera", ambito: 6 },
      { orden: 10, id: "TED010", provincia: "Murcia", localidad: "Santomera", ambito: 6 }
    ],
    plazasEspecialidad: "10 plazas de M2 Química en todo el MITECO: 5 de turno libre y 5 de promoción interna (CH Cantábrico, Guadiana, Segura y Duero).",
    ambito: "Ámbito territorial 6: Albacete, Alicante y Murcia (casilla 27 A de la solicitud).",
    requisito: "Grado en Química (o titulación equivalente según el art. 10 del IV Convenio Único).",
    solicitud: "20 días hábiles desde el día siguiente a la publicación de la reseña en el BOE · modelo 790 · un solo turno (casilla 17), un grupo y una especialidad (casillas 15 y 16), un ámbito territorial (casilla 27 A).",
    ejercicios: [
      {
        nombre: "Primer ejercicio · test",
        detalle: "90 preguntas con 4 opciones: 45 del temario común y 45 del específico de Química, más 6 de reserva (3 + 3). 90 minutos. Cada error resta 1/3 de acierto; las respuestas en blanco no penalizan.",
        puntos: "Máximo 40 puntos (20 por parte). Mínimo 20 para superarlo. El órgano de selección fija la puntuación directa mínima."
      },
      {
        nombre: "Segundo ejercicio · supuesto práctico",
        detalle: "Prueba práctica sobre el temario específico, por escrito o en sesión pública. Máximo 2 horas. Si es escrita, se lee después ante el órgano de selección, que puede dialogar con el aspirante hasta 15 minutos.",
        puntos: "De 0 a 60 puntos. Mínimo 30 para superarlo. Se valoran conocimientos, claridad y orden de ideas, expresión escrita y presentación."
      }
    ],
    final: "Turno libre: solo fase de oposición; hacen falta 50 puntos sumando ambos ejercicios. Promoción interna: concurso-oposición. Las personas aprobadas por promoción interna eligen plaza en primer lugar.",
    simulacro: { comun: 45, especifico: 45, minutos: 90, penalizacion: 1 / 3, maxParte: 20, minimo: 20 }
  },
  bloques: [
    { id: "C", nombre: "Parte común · Organización y funcionamiento de la AGE", oficial: true, parte: "comun" },
    { id: "Q", nombre: "Parte específica · Química", oficial: true, parte: "especifico" },
    { id: "X", nombre: "Complementario · Aguas, CHS y laboratorio", oficial: false }
  ],
  temas: [
    {
      id: "c01", bloque: "C",
      titulo: "La Constitución Española de 1978. Principios, valores, derechos y deberes. Protección de los derechos",
      norma: "Constitución Española (BOE 29-12-1978)",
      resumen: [
        "Aprobada por las Cortes el 31-10-1978, ratificada en referéndum el 6-12-1978, sancionada el 27-12-1978 y publicada en el BOE el 29-12-1978.",
        "Características: escrita, extensa (169 artículos), rígida, de consenso. Estructura: Preámbulo, Título Preliminar, 10 Títulos, 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final.",
        "Art. 1.1: valores superiores (libertad, justicia, igualdad y pluralismo político). Art. 1.3: Monarquía parlamentaria. Art. 9.3: principios de legalidad, jerarquía normativa, publicidad, irretroactividad de las disposiciones sancionadoras no favorables, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad.",
        "Título I: derechos fundamentales y libertades públicas (arts. 15-29), derechos y deberes de los ciudadanos (arts. 30-38) y principios rectores (arts. 39-52).",
        "Protección (art. 53): reserva de ley que respete el contenido esencial; recurso de amparo ante el TC para los arts. 14 a 29 y 30.2; los principios rectores informan la legislación. Defensor del Pueblo (art. 54) y suspensión de derechos (art. 55)."
      ],
      preguntas: [
        ["¿Cuántos artículos tiene la Constitución Española de 1978?", ["169", "159", "179", "196"], "La CE tiene 169 artículos distribuidos en un Título Preliminar y diez Títulos."],
        ["¿En qué fecha se ratificó la Constitución en referéndum?", ["6 de diciembre de 1978", "31 de octubre de 1978", "27 de diciembre de 1978", "29 de diciembre de 1978"], "El referéndum fue el 6-12-1978; las Cortes la aprobaron el 31-10, el Rey la sancionó el 27-12 y se publicó en el BOE el 29-12."],
        ["Según el art. 1.3 CE, la forma política del Estado español es:", ["La Monarquía parlamentaria", "La Monarquía constitucional", "El Estado social y democrático de Derecho", "La Monarquía hereditaria"], "Art. 1.3 CE. 'Estado social y democrático de Derecho' es la definición del art. 1.1."],
        ["Los valores superiores del ordenamiento jurídico según el art. 1.1 CE son:", ["La libertad, la justicia, la igualdad y el pluralismo político", "La libertad, la seguridad, la igualdad y la solidaridad", "La dignidad, la libertad, la justicia y la paz social", "La justicia, la igualdad, la legalidad y el pluralismo político"], "Art. 1.1 CE."],
        ["El art. 9.3 CE garantiza, entre otros, el principio de:", ["Irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales", "Retroactividad de las normas sancionadoras", "Discrecionalidad de los poderes públicos", "Inviolabilidad de la Administración"], "Art. 9.3 CE."],
        ["El derecho a disfrutar de un medio ambiente adecuado (art. 45 CE) se encuentra en:", ["El Capítulo III del Título I (principios rectores de la política social y económica)", "La Sección 1ª del Capítulo II del Título I", "El Título Preliminar", "El Título VII"], "Es un principio rector: informa la actuación de los poderes públicos, pero no es amparable."],
        ["¿Qué derechos pueden protegerse mediante recurso de amparo ante el Tribunal Constitucional?", ["Los del art. 14, la Sección 1ª del Capítulo II del Título I y la objeción de conciencia del art. 30.2", "Todos los del Título I", "Solo los de la Sección 1ª del Capítulo II del Título I", "Los de los arts. 14 a 38"], "Art. 53.2 CE."],
        ["La regulación del ejercicio de los derechos y libertades del Capítulo II del Título I debe hacerse por:", ["Ley, que en todo caso deberá respetar su contenido esencial", "Real decreto del Gobierno", "Orden ministerial", "Reglamento parlamentario"], "Art. 53.1 CE."],
        ["Los derechos fundamentales y libertades públicas se desarrollan mediante:", ["Ley orgánica", "Ley ordinaria", "Real decreto-ley", "Decreto legislativo"], "Art. 81.1 CE."],
        ["El Defensor del Pueblo es:", ["Alto comisionado de las Cortes Generales", "Un órgano dependiente del Gobierno", "Un órgano del Consejo General del Poder Judicial", "Un órgano consultivo del Tribunal Constitucional"], "Art. 54 CE."],
        ["La mayoría de edad se fija en la Constitución a los:", ["18 años", "16 años", "21 años", "14 años"], "Art. 12 CE."],
        ["El procedimiento ordinario de reforma constitucional (art. 167) exige la aprobación por:", ["Mayoría de tres quintos de cada una de las Cámaras", "Mayoría de dos tercios de cada Cámara y referéndum obligatorio", "Mayoría absoluta del Congreso", "Mayoría simple de ambas Cámaras"], "Art. 167.1 CE. Los dos tercios corresponden al procedimiento agravado del art. 168."]
      ]
    },
    {
      id: "c02", bloque: "C",
      titulo: "El Gobierno. Composición, designación, funciones y relaciones con los demás poderes",
      norma: "CE Título IV y V (arts. 97-116) · Ley 50/1997, de 27 de noviembre, del Gobierno",
      resumen: [
        "Composición (art. 98 CE): Presidente, Vicepresidentes en su caso, Ministros y demás miembros que establezca la ley.",
        "Funciones (art. 97 CE): dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado; ejerce la función ejecutiva y la potestad reglamentaria.",
        "Investidura (art. 99 CE): el Rey propone candidato; el Congreso le otorga la confianza por mayoría absoluta en primera votación o simple en una segunda, 48 horas después. Si en dos meses ningún candidato la obtiene, se disuelven las Cámaras.",
        "Cese (art. 101 CE): tras elecciones generales, pérdida de confianza parlamentaria, dimisión o fallecimiento del Presidente. El Gobierno cesante continúa en funciones.",
        "Relaciones con las Cortes: cuestión de confianza (art. 112, mayoría simple), moción de censura constructiva (art. 113: una décima parte de los Diputados, candidato incluido, mayoría absoluta) y disolución anticipada (art. 115). Responsabilidad criminal ante la Sala de lo Penal del Tribunal Supremo (art. 102)."
      ],
      preguntas: [
        ["Según el art. 98 CE, el Gobierno se compone de:", ["El Presidente, los Vicepresidentes en su caso, los Ministros y los demás miembros que establezca la ley", "El Presidente, los Ministros y los Secretarios de Estado", "El Presidente y los Subsecretarios", "El Rey, el Presidente y los Ministros"], "Los Secretarios de Estado no son miembros del Gobierno."],
        ["En la investidura, si el candidato no obtiene la mayoría absoluta en la primera votación, se somete a nueva votación:", ["48 horas después, bastando la mayoría simple", "24 horas después, con mayoría de tres quintos", "Una semana después, con mayoría absoluta", "Al mes siguiente, con mayoría simple"], "Art. 99.3 CE."],
        ["Si transcurridos dos meses desde la primera votación de investidura ningún candidato obtiene la confianza del Congreso:", ["El Rey disuelve ambas Cámaras y convoca nuevas elecciones", "Gobierna el candidato más votado", "El Senado elige al Presidente", "Se convoca un referéndum"], "Art. 99.5 CE, con el refrendo del Presidente del Congreso."],
        ["La moción de censura debe ser propuesta, al menos, por:", ["La décima parte de los Diputados, e incluir un candidato a la Presidencia del Gobierno", "La quinta parte de los Diputados", "Un grupo parlamentario", "La mayoría absoluta del Senado"], "Art. 113.2 CE. Es una moción constructiva."],
        ["La moción de censura se aprueba por:", ["Mayoría absoluta del Congreso de los Diputados", "Mayoría simple del Congreso", "Mayoría de tres quintos de ambas Cámaras", "Mayoría absoluta del Senado"], "Art. 113.1 CE."],
        ["La confianza en una cuestión de confianza se entiende otorgada cuando vota a favor:", ["La mayoría simple de los Diputados", "La mayoría absoluta de los Diputados", "Los tres quintos del Congreso", "La mayoría absoluta de las Cortes Generales"], "Art. 112 CE."],
        ["La responsabilidad criminal del Presidente y los demás miembros del Gobierno es exigible ante:", ["La Sala de lo Penal del Tribunal Supremo", "El Tribunal Constitucional", "La Audiencia Nacional", "El Tribunal Superior de Justicia de Madrid"], "Art. 102.1 CE."],
        ["La ley que regula la organización y funcionamiento del Gobierno es la:", ["Ley 50/1997, de 27 de noviembre", "Ley 40/2015, de 1 de octubre", "Ley 6/1997, de 14 de abril (LOFAGE)", "Ley 39/2015, de 1 de octubre"], "La LOFAGE está derogada por la Ley 40/2015."],
        ["La disolución anticipada de las Cortes la propone:", ["El Presidente del Gobierno, previa deliberación del Consejo de Ministros y bajo su exclusiva responsabilidad", "El Consejo de Ministros por mayoría", "El Presidente del Congreso", "El Rey a iniciativa propia"], "Art. 115 CE. No puede presentarse mientras esté en trámite una moción de censura."]
      ]
    },
    {
      id: "c03", bloque: "C",
      titulo: "La Administración Pública. La AGE y su organización periférica. Organización territorial y Comunidades Autónomas",
      norma: "CE arts. 103, 137-158 · Ley 40/2015, de 1 de octubre",
      resumen: [
        "Art. 103.1 CE: la Administración sirve con objetividad los intereses generales y actúa según los principios de eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho.",
        "Órganos superiores de los Ministerios: Ministros y Secretarios de Estado. Directivos: Subsecretarios, Secretarios generales, Secretarios generales técnicos, Directores generales y Subdirectores generales (art. 55 Ley 40/2015).",
        "Organización periférica: Delegados del Gobierno en las CCAA (nombrados por real decreto del Consejo de Ministros a propuesta del Presidente del Gobierno) y Subdelegados en las provincias (nombrados por el Delegado del Gobierno).",
        "Organización territorial (Título VIII): municipios, provincias y Comunidades Autónomas, con autonomía para la gestión de sus intereses (art. 137). Competencias: arts. 148 (CCAA) y 149 (exclusivas del Estado, por ejemplo la 149.1.22ª sobre aguas intercomunitarias).",
        "Conflictos de competencia: los resuelve el Tribunal Constitucional. Coordinación y cooperación: Conferencias Sectoriales, convenios y el art. 155 CE como medida extraordinaria.",
        "Las Confederaciones Hidrográficas son organismos autónomos del sector público institucional estatal, adscritos al MITECO."
      ],
      preguntas: [
        ["Según el art. 103.1 CE, NO es un principio de actuación de la Administración Pública:", ["Autonomía", "Jerarquía", "Desconcentración", "Coordinación"], "El art. 103.1 enumera eficacia, jerarquía, descentralización, desconcentración y coordinación."],
        ["Son órganos superiores de los Ministerios:", ["Los Ministros y los Secretarios de Estado", "Los Subsecretarios y Directores generales", "Los Secretarios generales técnicos", "Los Subdirectores generales"], "Art. 55.3 Ley 40/2015."],
        ["Los Delegados del Gobierno en las Comunidades Autónomas son nombrados:", ["Por real decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno", "Por el Ministro del Interior", "Por el Presidente de la Comunidad Autónoma", "Por el Parlamento autonómico"], "Art. 72.1 Ley 40/2015."],
        ["Los Subdelegados del Gobierno en las provincias son nombrados por:", ["El Delegado del Gobierno", "El Consejo de Ministros", "El Ministro de Hacienda", "El Presidente de la Diputación"], "Art. 74 Ley 40/2015, entre funcionarios de carrera."],
        ["La organización territorial del Estado se regula en el Título:", ["VIII", "VI", "IV", "X"], "Título VIII (arts. 137 a 158)."],
        ["¿Qué precepto constitucional atribuye al Estado la competencia exclusiva sobre los recursos hidráulicos cuando las aguas discurren por más de una Comunidad Autónoma?", ["Art. 149.1.22ª", "Art. 148.1.10ª", "Art. 149.1.23ª", "Art. 132.2"], "La 149.1.23ª se refiere a la legislación básica sobre protección del medio ambiente."],
        ["Los conflictos de competencia entre el Estado y las Comunidades Autónomas los resuelve:", ["El Tribunal Constitucional", "El Tribunal Supremo", "El Senado", "El Consejo de Estado"], "Art. 161.1 c) CE."],
        ["Las medidas del art. 155 CE frente a una Comunidad Autónoma que incumpla sus obligaciones requieren la aprobación de:", ["La mayoría absoluta del Senado", "La mayoría absoluta del Congreso", "Los tres quintos de ambas Cámaras", "El Tribunal Constitucional"], "Art. 155.1 CE, previo requerimiento al Presidente de la Comunidad."],
        ["Las Confederaciones Hidrográficas tienen la naturaleza jurídica de:", ["Organismos autónomos", "Entidades públicas empresariales", "Sociedades mercantiles estatales", "Autoridades administrativas independientes"], "Art. 22 TRLA y art. 84 Ley 40/2015."],
        ["Los órganos de cooperación de composición multilateral entre la AGE y las Comunidades Autónomas en un sector concreto se denominan:", ["Conferencias Sectoriales", "Comisiones Bilaterales", "Delegaciones del Gobierno", "Consorcios"], "Art. 147 Ley 40/2015."],
        ["Los convenios administrativos deberán tener una duración que no podrá ser superior a:", ["Cuatro años, salvo que normativamente se prevea un plazo superior", "Dos años", "Diez años", "Un año, prorrogable anualmente"], "Art. 49 h) Ley 40/2015; prorrogables hasta cuatro años adicionales."],
        ["La técnica por la que un órgano superior asume el conocimiento de un asunto cuya resolución corresponde a un órgano dependiente se denomina:", ["Avocación", "Delegación", "Encomienda de gestión", "Suplencia"], "Art. 10 Ley 40/2015."]
      ]
    },
    {
      id: "c04", bloque: "C",
      titulo: "El Derecho Administrativo. Concepto y fuentes",
      norma: "CE arts. 81-97 · Código Civil art. 1 · Ley 50/1997 · Ley 39/2015 (Título VI)",
      resumen: [
        "El Derecho Administrativo es el Derecho público que regula la organización, el funcionamiento y la actividad de las Administraciones Públicas y sus relaciones con los ciudadanos.",
        "Fuentes (art. 1 Código Civil): la ley, la costumbre y los principios generales del Derecho; la jurisprudencia complementa el ordenamiento.",
        "Normas con rango de ley: leyes orgánicas (art. 81, mayoría absoluta del Congreso en votación final), leyes ordinarias, decretos-leyes (art. 86: extraordinaria y urgente necesidad; convalidación por el Congreso en 30 días) y decretos legislativos (art. 82: textos articulados mediante ley de bases o textos refundidos mediante ley ordinaria).",
        "Reglamentos: potestad reglamentaria del Gobierno (art. 97 CE). Jerarquía: reales decretos del Presidente o del Consejo de Ministros y, después, órdenes ministeriales (art. 24 Ley 50/1997). Inderogabilidad singular (art. 37 Ley 39/2015).",
        "Derecho de la UE: el reglamento es obligatorio en todos sus elementos y directamente aplicable; la directiva obliga en cuanto al resultado y debe transponerse."
      ],
      preguntas: [
        ["Según el art. 1 del Código Civil, las fuentes del ordenamiento jurídico español son:", ["La ley, la costumbre y los principios generales del Derecho", "La ley, la jurisprudencia y la doctrina", "La Constitución, los reglamentos y la costumbre", "La ley y los tratados internacionales únicamente"], "La jurisprudencia complementa el ordenamiento (art. 1.6 CC)."],
        ["Los decretos-leyes deben ser convalidados o derogados por el Congreso en el plazo de:", ["Treinta días desde su promulgación", "Quince días", "Dos meses", "Tres meses"], "Art. 86.2 CE."],
        ["La delegación legislativa para elaborar textos articulados se otorga mediante:", ["Una ley de bases", "Una ley ordinaria", "Un real decreto", "Una ley orgánica"], "Art. 82.2 CE. Para textos refundidos basta una ley ordinaria."],
        ["La aprobación de las leyes orgánicas exige:", ["Mayoría absoluta del Congreso en una votación final sobre el conjunto del proyecto", "Mayoría simple del Congreso", "Mayoría de tres quintos de ambas Cámaras", "Mayoría absoluta del Senado"], "Art. 81.2 CE."],
        ["La potestad reglamentaria corresponde, según el art. 97 CE, a:", ["El Gobierno", "Las Cortes Generales", "El Consejo de Estado", "El Tribunal Supremo"], "Sin perjuicio de la de las CCAA y entes locales en su ámbito."],
        ["En la jerarquía de los reglamentos estatales, las órdenes ministeriales se sitúan:", ["Por debajo de los reales decretos", "Por encima de los reales decretos", "Al mismo nivel que los reales decretos-leyes", "Por encima de las leyes ordinarias"], "Art. 24.2 Ley 50/1997."],
        ["El principio de inderogabilidad singular de los reglamentos significa que:", ["Las resoluciones administrativas de carácter particular no pueden vulnerar lo establecido en una disposición general, aunque procedan de un órgano de igual o superior jerarquía", "Los reglamentos no pueden derogarse nunca", "Solo una ley puede derogar un reglamento", "Los reglamentos singulares prevalecen sobre los generales"], "Art. 37.1 Ley 39/2015."],
        ["La norma de la Unión Europea que es obligatoria en todos sus elementos y directamente aplicable en cada Estado miembro es:", ["El reglamento", "La directiva", "La recomendación", "El dictamen"], "La directiva obliga en cuanto al resultado y requiere transposición."],
        ["NO tiene rango de ley:", ["La orden ministerial", "El real decreto-ley", "El real decreto legislativo", "La ley orgánica"], "Es un reglamento."]
      ]
    },
    {
      id: "c05", bloque: "C",
      titulo: "El acto administrativo. El procedimiento administrativo común (Ley 39/2015)",
      norma: "Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común",
      resumen: [
        "Los actos se presumen válidos y producen efectos desde la fecha en que se dictan, salvo que en ellos se disponga otra cosa (art. 39). Deben motivarse en los casos del art. 35.",
        "Nulidad de pleno derecho (art. 47): por ejemplo, actos que lesionen derechos amparables, dictados por órgano manifiestamente incompetente por razón de la materia o del territorio, o prescindiendo total y absolutamente del procedimiento. Anulabilidad (art. 48): cualquier infracción del ordenamiento.",
        "Plazo máximo para resolver: 3 meses si la norma no fija otro (art. 21). Silencio en procedimientos a solicitud del interesado: estimatorio como regla, con excepciones (por ejemplo, si transfiere facultades sobre el dominio público) (art. 24).",
        "Días hábiles: excluyen sábados, domingos y festivos (art. 30). Subsanación: 10 días (art. 68). Audiencia: 10 a 15 días (art. 82). Información pública: mínimo 20 días (art. 83).",
        "Revisión: de oficio de actos nulos con dictamen favorable del Consejo de Estado (art. 106); declaración de lesividad de actos anulables en 4 años (art. 107). Recursos: alzada (1 mes; se resuelve en 3), reposición potestativa (1 mes; se resuelve en 1) y extraordinario de revisión."
      ],
      preguntas: [
        ["Si la norma reguladora no fija el plazo máximo para resolver, este será de:", ["Tres meses", "Seis meses", "Un mes", "Dos meses"], "Art. 21.3 Ley 39/2015."],
        ["En los procedimientos iniciados a solicitud del interesado, el silencio administrativo tiene, como regla general, efecto:", ["Estimatorio", "Desestimatorio", "De caducidad", "Suspensivo"], "Art. 24.1, con excepciones tasadas."],
        ["Una solicitud cuya estimación transfiera al solicitante facultades relativas al dominio público, si no se resuelve en plazo, se entiende:", ["Desestimada", "Estimada", "Caducada", "Archivada sin efectos"], "Art. 24.1 Ley 39/2015."],
        ["Los actos administrativos producen efectos, con carácter general:", ["Desde la fecha en que se dicten", "Desde su publicación en el BOE en todo caso", "Un mes después de su notificación", "Desde que adquieren firmeza"], "Art. 39.1 Ley 39/2015."],
        ["A efectos del cómputo de plazos por días, se excluyen:", ["Sábados, domingos y festivos", "Solo domingos y festivos", "Solo festivos nacionales", "Sábados y domingos, pero no los festivos"], "Art. 30.2 Ley 39/2015."],
        ["El plazo para subsanar una solicitud que no reúne los requisitos exigidos es de:", ["10 días", "15 días", "5 días", "1 mes"], "Art. 68.1 Ley 39/2015."],
        ["El plazo del trámite de audiencia a los interesados será:", ["No inferior a 10 días ni superior a 15", "No inferior a 15 días ni superior a 30", "De 20 días como mínimo", "De 5 días"], "Art. 82.2 Ley 39/2015."],
        ["Un acto dictado por órgano manifiestamente incompetente por razón de la materia es:", ["Nulo de pleno derecho", "Anulable", "Irregular no invalidante", "Válido pero ineficaz"], "Art. 47.1 b) Ley 39/2015."],
        ["La revisión de oficio de un acto nulo de pleno derecho requiere:", ["Dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma", "Sentencia judicial firme", "Acuerdo del Consejo de Ministros en todo caso", "Informe de la Abogacía del Estado"], "Art. 106.1 Ley 39/2015."],
        ["La declaración de lesividad de un acto anulable favorable al interesado puede adoptarse en el plazo de:", ["Cuatro años desde que se dictó el acto", "Un año", "Seis meses", "Diez años"], "Art. 107.2 Ley 39/2015."],
        ["El plazo para interponer recurso de alzada contra un acto expreso es de:", ["Un mes", "Dos meses", "Tres meses", "Quince días"], "Art. 122.1 Ley 39/2015; se resuelve en tres meses."],
        ["Están obligadas a relacionarse electrónicamente con las Administraciones Públicas:", ["Las personas jurídicas", "Todas las personas físicas", "Solo las personas físicas mayores de 65 años", "Ninguna persona, salvo que lo pida"], "Art. 14.2 a) Ley 39/2015."],
        ["Salvo que la ley establezca otra cosa, las infracciones muy graves prescriben a los:", ["Tres años", "Dos años", "Cinco años", "Seis meses"], "Art. 30.1 Ley 40/2015: muy graves 3 años, graves 2 años, leves 6 meses."]
      ]
    },
    {
      id: "c06", bloque: "C",
      titulo: "El contrato administrativo (Ley 9/2017, de Contratos del Sector Público)",
      norma: "Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público",
      resumen: [
        "Transpone las Directivas 2014/23/UE y 2014/24/UE. Principios: libertad de acceso a las licitaciones, publicidad y transparencia, no discriminación e igualdad de trato, integridad, eficiencia y salvaguarda de la libre competencia.",
        "Contratos típicos (art. 12): obras, concesión de obras, concesión de servicios, suministro y servicios (y mixtos).",
        "Contratos menores (art. 118): obras de valor estimado inferior a 40.000 € y suministros o servicios inferiores a 15.000 €. No pueden durar más de un año ni prorrogarse (art. 29.8).",
        "Procedimientos de adjudicación: abierto, abierto simplificado, restringido, negociado, diálogo competitivo, asociación para la innovación y concurso de proyectos. Mesa de contratación y perfil de contratante en la Plataforma de Contratación del Sector Público.",
        "Garantía provisional: no superior al 3 % del presupuesto base de licitación. Garantía definitiva: con carácter general, el 5 % del precio final ofertado, IVA excluido.",
        "Recurso especial en materia de contratación: ante el Tribunal Administrativo Central de Recursos Contractuales, en 15 días hábiles."
      ],
      preguntas: [
        ["Se consideran contratos menores los contratos de obras de valor estimado inferior a:", ["40.000 euros", "15.000 euros", "50.000 euros", "60.000 euros"], "Art. 118.1 Ley 9/2017."],
        ["Se consideran contratos menores los contratos de suministro o de servicios de valor estimado inferior a:", ["15.000 euros", "40.000 euros", "18.000 euros", "30.000 euros"], "Art. 118.1 Ley 9/2017."],
        ["Los contratos menores:", ["No pueden tener una duración superior a un año ni ser objeto de prórroga", "Pueden prorrogarse una vez por un año", "Pueden durar hasta dos años", "No tienen límite de duración"], "Art. 29.8 Ley 9/2017."],
        ["Con carácter general, la garantía definitiva asciende al:", ["5 % del precio final ofertado, IVA excluido", "3 % del presupuesto base de licitación", "10 % del precio final, IVA incluido", "2 % del valor estimado"], "Art. 107.1 Ley 9/2017."],
        ["La garantía provisional, cuando se exija, no podrá ser superior al:", ["3 % del presupuesto base de licitación, IVA excluido", "5 % del precio de adjudicación", "10 % del valor estimado", "1 % del presupuesto"], "Art. 106.2 Ley 9/2017."],
        ["El órgano que resuelve el recurso especial en materia de contratación en el ámbito de la AGE es:", ["El Tribunal Administrativo Central de Recursos Contractuales", "La Junta Consultiva de Contratación Pública del Estado", "El Tribunal de Cuentas", "La Abogacía del Estado"], "Art. 45 Ley 9/2017."],
        ["El plazo general para interponer el recurso especial en materia de contratación es de:", ["15 días hábiles", "1 mes", "10 días naturales", "2 meses"], "Art. 50.1 Ley 9/2017."],
        ["NO es un contrato típico de los enumerados en el art. 12 de la Ley 9/2017:", ["El contrato de arrendamiento de inmuebles", "El contrato de obras", "El contrato de suministro", "El contrato de concesión de servicios"], "Los arrendamientos de inmuebles son contratos privados excluidos de la ley."],
        ["Las Directivas europeas que transpone la Ley 9/2017 son:", ["2014/23/UE y 2014/24/UE", "2004/17/CE y 2004/18/CE", "2000/60/CE y 2007/60/CE", "2014/25/UE y 2014/55/UE"], "La 2014/23 regula las concesiones y la 2014/24 la contratación pública."]
      ]
    },
    {
      id: "c07", bloque: "C",
      titulo: "El personal al servicio de las Administraciones Públicas. Régimen jurídico. Derechos y deberes",
      norma: "Real Decreto Legislativo 5/2015, de 30 de octubre (TREBEP)",
      resumen: [
        "Clases de empleados públicos (art. 8): funcionarios de carrera, funcionarios interinos, personal laboral (fijo, por tiempo indefinido o temporal) y personal eventual.",
        "El personal laboral se rige por la legislación laboral, el convenio colectivo y los preceptos del TREBEP que así lo dispongan (art. 7).",
        "Derechos individuales (art. 14) y ejercidos colectivamente (art. 15: libertad sindical, negociación colectiva, huelga, planteamiento de conflictos colectivos y reunión).",
        "Deberes y código de conducta (arts. 52-54): principios éticos (art. 53) y de conducta (art. 54).",
        "Vacaciones: 22 días hábiles (art. 50). Permiso por matrimonio: 15 días (art. 48). Faltas muy graves: prescriben a los 3 años, graves a los 2 y leves a los 6 meses (art. 97).",
        "La readmisión del personal laboral fijo es obligatoria si se declara improcedente el despido acordado por falta muy grave en un expediente disciplinario (art. 96.2)."
      ],
      preguntas: [
        ["NO es una clase de empleado público según el art. 8 del TREBEP:", ["Personal directivo profesional", "Funcionario interino", "Personal laboral", "Personal eventual"], "El personal directivo se regula en el art. 13."],
        ["El personal laboral al servicio de las AAPP se rige, además de por la legislación laboral, por:", ["Los preceptos del TREBEP que así lo dispongan", "Todos los preceptos del TREBEP sin excepción", "Exclusivamente su convenio colectivo", "La Ley 30/1984 en su totalidad"], "Art. 7 TREBEP."],
        ["El código de conducta de los empleados públicos se regula en los artículos:", ["52 a 54 del TREBEP", "14 y 15 del TREBEP", "93 a 98 del TREBEP", "1 a 7 del TREBEP"], "Art. 52 (deberes), 53 (principios éticos) y 54 (principios de conducta)."],
        ["Es un derecho individual ejercido colectivamente según el art. 15 TREBEP:", ["El derecho de huelga", "El derecho a la carrera profesional", "El derecho a la formación continua", "El derecho a las vacaciones"], "Junto a la libertad sindical, la negociación colectiva, el planteamiento de conflictos y la reunión."],
        ["Los empleados públicos tienen derecho a disfrutar como mínimo, cada año natural, de unas vacaciones retribuidas de:", ["22 días hábiles", "30 días naturales", "25 días hábiles", "21 días hábiles"], "Art. 50 TREBEP."],
        ["El permiso por matrimonio o registro de pareja de hecho es de:", ["Quince días", "Diez días", "Veinte días", "Un mes"], "Art. 48 l) TREBEP."],
        ["Las faltas muy graves prescriben a los:", ["Tres años", "Dos años", "Seis meses", "Cinco años"], "Art. 97 TREBEP."],
        ["Si se declara improcedente el despido de un trabajador laboral fijo acordado por la comisión de una falta muy grave en expediente disciplinario:", ["Procede la readmisión", "La Administración puede optar entre readmisión e indemnización", "Solo procede indemnización de 33 días por año", "El trabajador pasa a ser funcionario interino"], "Art. 96.2 TREBEP."],
        ["NO es una situación administrativa de los funcionarios de carrera según el art. 85 TREBEP:", ["Jubilación parcial", "Servicios especiales", "Excedencia", "Suspensión de funciones"], "Las situaciones son: servicio activo, servicios especiales, servicio en otras AAPP, excedencia y suspensión de funciones."]
      ]
    },
    {
      id: "c08", bloque: "C",
      titulo: "Los procesos selectivos. Principios constitucionales. Selección en la AGE. Incompatibilidades",
      norma: "CE arts. 23.2 y 103.3 · TREBEP arts. 55-62 · RD 364/1995 · Ley 53/1984",
      resumen: [
        "Principios constitucionales: igualdad en el acceso (art. 23.2 CE), mérito y capacidad (art. 103.3 CE).",
        "Principios del art. 55 TREBEP: publicidad de convocatorias y bases, transparencia, imparcialidad y profesionalidad de los órganos de selección, independencia y discrecionalidad técnica, adecuación de las pruebas a las funciones y agilidad.",
        "Órganos de selección (art. 60): colegiados, con paridad entre mujer y hombre; no pueden formar parte el personal de elección o designación política, los funcionarios interinos ni el personal eventual; la pertenencia es a título individual.",
        "Sistemas: oposición y concurso-oposición; el concurso solo con carácter excepcional y por ley. El personal laboral puede seleccionarse por oposición, concurso-oposición o concurso de valoración de méritos (art. 61). Reglamento General de Ingreso: RD 364/1995.",
        "Cupo de discapacidad: al menos el 7 % de las vacantes, con un 2 % para personas con discapacidad intelectual (art. 59). Edad mínima: 16 años. Los extranjeros con residencia legal pueden acceder como personal laboral (art. 57.4).",
        "Ley 53/1984, de 26 de diciembre, de Incompatibilidades: regla general de un único puesto en el sector público; la compatibilidad con actividades privadas requiere reconocimiento expreso."
      ],
      preguntas: [
        ["El derecho a acceder en condiciones de igualdad a las funciones y cargos públicos se recoge en el artículo:", ["23.2 CE", "103.3 CE", "14 CE", "35 CE"], "El art. 103.3 recoge los principios de mérito y capacidad."],
        ["Según el art. 103.3 CE, el acceso a la función pública se hará de acuerdo con los principios de:", ["Mérito y capacidad", "Igualdad y publicidad", "Eficacia y jerarquía", "Antigüedad y experiencia"], "Art. 103.3 CE."],
        ["NO puede formar parte de un órgano de selección, según el art. 60 TREBEP:", ["El personal eventual", "Un funcionario de carrera", "Un empleado laboral fijo con la titulación adecuada", "Un funcionario de otra Administración"], "Tampoco el personal de elección o designación política ni los funcionarios interinos."],
        ["El personal laboral fijo puede seleccionarse por:", ["Oposición, concurso-oposición o concurso de valoración de méritos", "Solo oposición", "Libre designación", "Solo concurso de méritos"], "Art. 61.7 TREBEP."],
        ["En las ofertas de empleo público se reservará para personas con discapacidad un cupo no inferior al:", ["7 % de las vacantes, con un 2 % para discapacidad intelectual", "5 % de las vacantes", "10 % de las vacantes", "3 % de las vacantes"], "Art. 59.1 TREBEP."],
        ["La edad mínima para participar en los procesos selectivos de acceso al empleo público es:", ["16 años", "18 años", "17 años", "21 años"], "Art. 56.1 c) TREBEP."],
        ["Los extranjeros con residencia legal en España que no sean nacionales de la UE pueden acceder a las AAPP:", ["Como personal laboral, en igualdad de condiciones con los españoles", "Como funcionarios de carrera en cualquier cuerpo", "Solo como personal eventual", "En ningún caso"], "Art. 57.4 TREBEP."],
        ["La ley de incompatibilidades del personal al servicio de las Administraciones Públicas es la:", ["Ley 53/1984, de 26 de diciembre", "Ley 30/1984, de 2 de agosto", "Ley 19/2013, de 9 de diciembre", "Ley 3/2015, de 30 de marzo"], "La Ley 3/2015 regula el ejercicio del alto cargo."],
        ["El Reglamento General de Ingreso del personal al servicio de la Administración General del Estado se aprobó por:", ["Real Decreto 364/1995, de 10 de marzo", "Real Decreto 2271/2004, de 3 de diciembre", "Real Decreto 33/1986, de 10 de enero", "Real Decreto 5/2015, de 30 de octubre"], "El RD 2271/2004 regula el acceso de personas con discapacidad; el RD 33/1986, el régimen disciplinario de funcionarios."]
      ]
    },
    {
      id: "c09", bloque: "C",
      titulo: "El IV Convenio colectivo único para el personal laboral de la AGE",
      norma: "IV Convenio Único (BOE 2019)",
      resumen: [
        "Se aplica al personal laboral de la AGE y de sus organismos públicos (incluidas las Confederaciones Hidrográficas). Se publicó en el BOE en mayo de 2019.",
        "Clasificación profesional en grupos profesionales: M3, M2, M1, E2, E1 y E0, ordenados por la titulación exigida. M2 exige grado o diplomatura universitaria (en esta convocatoria, Grado en Química); M1, Técnico Superior de FP.",
        "Órganos: Comisión Negociadora y Comisión Paritaria (interpretación, vigilancia, estudio y aplicación del convenio), que actúa en pleno y mediante subcomisiones y grupos de trabajo.",
        "Ingreso por oposición, concurso-oposición o concurso; promoción interna al grupo superior por concurso-oposición (art. 28 en relación con esta convocatoria). Provisión de puestos por concurso de traslados y movilidad.",
        "Régimen disciplinario: faltas leves, graves y muy graves."
      ],
      preguntas: [
        ["El IV Convenio colectivo único para el personal laboral de la AGE se publicó en el BOE en el año:", ["2019", "2009", "2015", "2023"], "Publicado en mayo de 2019."],
        ["¿Cuál de los siguientes NO es un grupo profesional del IV Convenio Único?", ["G3", "M2", "E1", "E0"], "Grupos: M3, M2, M1, E2, E1 y E0."],
        ["En la convocatoria de M2 Química del MITECO, la titulación exigida es:", ["Grado en Química", "Técnico Superior en Química Industrial", "Bachillerato de Ciencias", "Máster en Química"], "Anexo VII de la convocatoria."],
        ["El órgano encargado de la interpretación, vigilancia, estudio y aplicación del IV Convenio Único es:", ["La Comisión Paritaria", "La Comisión Superior de Personal", "El Comité de Empresa", "La Mesa General de Negociación"], "Funciona en pleno y mediante subcomisiones y grupos de trabajo."],
        ["La promoción interna al grupo profesional superior en esta convocatoria se realiza mediante el sistema de:", ["Concurso-oposición", "Oposición libre", "Libre designación", "Antigüedad"], "Base 1.5 de la convocatoria."],
        ["Las faltas en el régimen disciplinario del IV Convenio Único se clasifican en:", ["Leves, graves y muy graves", "Leves y graves", "Menos graves, graves y muy graves", "Simples y cualificadas"], "Clasificación habitual en el régimen disciplinario laboral."],
        ["El grupo profesional M1 del IV Convenio Único exige, como regla general, la titulación de:", ["Técnico Superior de Formación Profesional", "Grado universitario", "Graduado en ESO", "Sin requisito de titulación"], "En esta convocatoria, por ejemplo, Técnico Superior en Gestión Forestal y del Medio Natural."]
      ]
    },
    {
      id: "c10", bloque: "C",
      titulo: "El contrato de trabajo en la Administración. Modalidades, suspensión y extinción. Sindicación y representación",
      norma: "RDL 2/2015, de 23 de octubre (Estatuto de los Trabajadores) · LO 11/1985, de Libertad Sindical",
      resumen: [
        "Modalidades: contrato indefinido (regla general), temporal (por circunstancias de la producción o por sustitución, tras el RDL 32/2021) y formativo.",
        "Periodo de prueba (art. 14 ET): hasta 6 meses para técnicos titulados y 2 meses para el resto (3 en empresas de menos de 25 trabajadores).",
        "Suspensión (art. 45 ET): incapacidad temporal, nacimiento y cuidado de menor, excedencia forzosa, etc. Excedencia voluntaria: requiere al menos 1 año de antigüedad; entre 4 meses y 5 años (art. 46).",
        "Despido disciplinario por incumplimiento grave y culpable (art. 54). Despido objetivo: indemnización de 20 días por año, con un máximo de 12 mensualidades (art. 53). Despido improcedente: 33 días por año, con un máximo de 24 mensualidades (art. 56). Plazo para reclamar: 20 días hábiles (art. 59.3).",
        "Representación: delegados de personal en centros de más de 10 y menos de 50 trabajadores; comité de empresa a partir de 50 (arts. 62-63 ET). Libertad sindical: LO 11/1985, de 2 de agosto."
      ],
      preguntas: [
        ["El periodo de prueba de los técnicos titulados no podrá exceder de:", ["Seis meses", "Dos meses", "Tres meses", "Un año"], "Art. 14.1 ET."],
        ["La indemnización por despido objetivo procedente es de:", ["20 días de salario por año de servicio, con un máximo de 12 mensualidades", "33 días por año, con un máximo de 24 mensualidades", "45 días por año, con un máximo de 42 mensualidades", "12 días por año"], "Art. 53.1 b) ET."],
        ["La indemnización por despido improcedente es de:", ["33 días de salario por año de servicio, con un máximo de 24 mensualidades", "20 días por año, con un máximo de 12 mensualidades", "45 días por año, sin límite", "30 días por año, con un máximo de 12 mensualidades"], "Art. 56.1 ET (para periodos posteriores a febrero de 2012)."],
        ["El plazo para ejercitar la acción contra el despido es de:", ["20 días hábiles", "30 días naturales", "2 meses", "1 año"], "Art. 59.3 ET; es un plazo de caducidad."],
        ["El comité de empresa se constituye en los centros de trabajo con:", ["50 o más trabajadores", "Más de 10 trabajadores", "Más de 100 trabajadores", "Más de 250 trabajadores"], "Art. 63.1 ET. Por debajo, delegados de personal."],
        ["Para solicitar una excedencia voluntaria se requiere una antigüedad mínima en la empresa de:", ["Un año", "Seis meses", "Dos años", "Cinco años"], "Art. 46.2 ET: duración de 4 meses a 5 años."],
        ["Tras la reforma laboral del RDL 32/2021, el contrato temporal puede celebrarse:", ["Por circunstancias de la producción o por sustitución de persona trabajadora", "Por obra o servicio determinado", "Solo para jóvenes menores de 30 años", "Por tiempo indefinido discontinuo"], "Se suprimió el contrato por obra o servicio."],
        ["La ley que regula la libertad sindical es la:", ["Ley Orgánica 11/1985, de 2 de agosto", "Ley 31/1995, de 8 de noviembre", "Real Decreto Legislativo 2/2015", "Ley 9/1987, de 12 de junio"], "La Ley 9/1987 regulaba los órganos de representación de los funcionarios."],
        ["El despido disciplinario se basa en:", ["Un incumplimiento grave y culpable del trabajador", "Causas económicas, técnicas u organizativas", "La ineptitud sobrevenida del trabajador", "La finalización del periodo de prueba"], "Art. 54.1 ET."]
      ]
    },
    {
      id: "c11", bloque: "C",
      titulo: "Presupuestos Generales del Estado. Estructura y ciclo presupuestario",
      norma: "CE art. 134 y 136 · Ley 47/2003, de 26 de noviembre, General Presupuestaria",
      resumen: [
        "Art. 134 CE: el Gobierno elabora los PGE y las Cortes los examinan, enmiendan y aprueban. Son anuales e incluyen la totalidad de los gastos e ingresos del sector público estatal y los beneficios fiscales.",
        "El Gobierno los presenta al Congreso al menos tres meses antes de que expiren los del año anterior. Si no se aprueban antes del 1 de enero, se prorrogan automáticamente los del ejercicio anterior.",
        "El ejercicio presupuestario coincide con el año natural. Los créditos tienen carácter limitativo y vinculante.",
        "Clasificaciones del gasto: orgánica (quién gasta), por programas (para qué) y económica (en qué): capítulo 1 gastos de personal, 2 gastos corrientes en bienes y servicios, 3 financieros, 4 transferencias corrientes, 5 fondo de contingencia, 6 inversiones reales, 7 transferencias de capital, 8 activos financieros y 9 pasivos financieros.",
        "Fases del gasto (art. 73 LGP): aprobación (A), compromiso (D), reconocimiento de la obligación (O), propuesta de pago (P) y pago material.",
        "Control: interno, por la Intervención General de la Administración del Estado (IGAE); externo, por el Tribunal de Cuentas (art. 136 CE), dependiente de las Cortes Generales."
      ],
      preguntas: [
        ["Según el art. 134 CE, corresponde la elaboración de los Presupuestos Generales del Estado a:", ["El Gobierno", "Las Cortes Generales", "El Ministerio de Hacienda en exclusiva", "El Tribunal de Cuentas"], "Las Cortes los examinan, enmiendan y aprueban."],
        ["El Gobierno debe presentar los PGE ante el Congreso de los Diputados:", ["Al menos tres meses antes de la expiración de los del año anterior", "Antes del 1 de enero", "Al menos un mes antes de la expiración", "Antes del 30 de junio"], "Art. 134.3 CE."],
        ["Si la Ley de Presupuestos no se aprueba antes del primer día del ejercicio económico:", ["Se consideran automáticamente prorrogados los presupuestos del ejercicio anterior", "No puede realizarse ningún gasto", "El Gobierno los aprueba por real decreto-ley", "Se aplican los presupuestos elaborados por el Gobierno"], "Art. 134.4 CE."],
        ["El control externo de la gestión económica del Estado corresponde a:", ["El Tribunal de Cuentas", "La Intervención General de la Administración del Estado", "La Dirección General de Presupuestos", "El Banco de España"], "Art. 136 CE. La IGAE ejerce el control interno."],
        ["En la clasificación económica del gasto, el capítulo 1 corresponde a:", ["Gastos de personal", "Inversiones reales", "Gastos corrientes en bienes y servicios", "Transferencias corrientes"], "Capítulo 2: bienes y servicios; capítulo 6: inversiones reales."],
        ["En la clasificación económica del gasto, la adquisición de equipos de laboratorio inventariables se imputa al capítulo:", ["6, inversiones reales", "2, gastos corrientes en bienes y servicios", "4, transferencias corrientes", "8, activos financieros"], "El material fungible de laboratorio iría al capítulo 2."],
        ["La primera fase de la gestión del presupuesto de gastos según la Ley General Presupuestaria es:", ["La aprobación del gasto", "El compromiso del gasto", "El reconocimiento de la obligación", "La propuesta de pago"], "Art. 73 LGP: aprobación, compromiso, reconocimiento de la obligación, propuesta de pago y pago material."],
        ["La Ley General Presupuestaria vigente es la:", ["Ley 47/2003, de 26 de noviembre", "Ley 39/2015, de 1 de octubre", "Ley 2/2012, de Estabilidad Presupuestaria", "Ley 58/2003, General Tributaria"], "La LO 2/2012 regula la estabilidad presupuestaria y sostenibilidad financiera."],
        ["El ejercicio presupuestario:", ["Coincide con el año natural", "Va de julio a junio", "Dura dos años", "Lo fija cada Ministerio"], "Art. 34 LGP."]
      ]
    },
    {
      id: "c12", bloque: "C",
      titulo: "Normas sobre seguridad y prevención de riesgos laborales",
      norma: "Ley 31/1995, de 8 de noviembre · RD 39/1997 y normas de desarrollo",
      resumen: [
        "Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales. Reglamento de los Servicios de Prevención: RD 39/1997.",
        "Principios de la acción preventiva (art. 15): evitar los riesgos, evaluar los que no se puedan evitar, combatirlos en su origen, adaptar el trabajo a la persona, sustituir lo peligroso por lo que entrañe poco o ningún peligro y anteponer la protección colectiva a la individual.",
        "Derecho a interrumpir la actividad ante un riesgo grave e inminente (art. 21). Obligaciones de los trabajadores (art. 29): usar correctamente equipos y EPI, informar de riesgos y cooperar.",
        "Comité de Seguridad y Salud en centros de 50 o más trabajadores (art. 38). Modalidades preventivas: asunción por el empresario, trabajadores designados, servicio de prevención propio o ajeno.",
        "Normas de desarrollo relevantes en un laboratorio: EPI (RD 773/1997), lugares de trabajo (RD 486/1997), agentes químicos (RD 374/2001), agentes cancerígenos (RD 665/1997) y coordinación de actividades empresariales (RD 171/2004)."
      ],
      preguntas: [
        ["La Ley de Prevención de Riesgos Laborales es la:", ["Ley 31/1995, de 8 de noviembre", "Ley 39/1995, de 17 de enero", "Ley 31/1997, de 8 de noviembre", "Ley 54/2003, de 12 de diciembre"], "La Ley 54/2003 reformó el marco normativo de la prevención."],
        ["El Comité de Seguridad y Salud se constituirá en todas las empresas o centros de trabajo que cuenten con:", ["50 o más trabajadores", "30 o más trabajadores", "100 o más trabajadores", "6 o más trabajadores"], "Art. 38.2 Ley 31/1995."],
        ["Según el art. 15, entre los principios de la acción preventiva figura:", ["Adoptar medidas que antepongan la protección colectiva a la individual", "Anteponer la protección individual a la colectiva", "Evaluar los riesgos que se puedan evitar", "Adaptar la persona al trabajo"], "Art. 15.1 h)."],
        ["Cuando los trabajadores estén expuestos a un riesgo grave e inminente:", ["Tienen derecho a interrumpir su actividad y abandonar el lugar de trabajo", "Deben esperar la orden escrita del empresario", "Solo pueden paralizar la actividad los delegados sindicales", "Deben comunicarlo a la Inspección antes de interrumpir"], "Art. 21 Ley 31/1995."],
        ["El Reglamento de los Servicios de Prevención se aprobó por el:", ["RD 39/1997, de 17 de enero", "RD 486/1997, de 14 de abril", "RD 773/1997, de 30 de mayo", "RD 171/2004, de 30 de enero"], "El RD 773/1997 regula los EPI y el RD 486/1997 los lugares de trabajo."],
        ["La protección de los trabajadores contra los riesgos relacionados con los agentes químicos se regula en el:", ["RD 374/2001, de 6 de abril", "RD 773/1997, de 30 de mayo", "RD 1215/1997, de 18 de julio", "RD 486/1997, de 14 de abril"], "El RD 1215/1997 se refiere a los equipos de trabajo."],
        ["Es una obligación de los trabajadores en materia preventiva:", ["Utilizar correctamente los equipos de protección individual facilitados por el empresario", "Evaluar los riesgos del puesto de trabajo", "Contratar un servicio de prevención ajeno", "Elaborar el plan de prevención"], "Art. 29.2 Ley 31/1995."],
        ["En un laboratorio químico, la vitrina de gases es un ejemplo de medida de:", ["Protección colectiva", "Protección individual", "Vigilancia de la salud", "Señalización"], "Las medidas colectivas tienen prioridad sobre los EPI."]
      ]
    },
    {
      id: "c13", bloque: "C",
      titulo: "Políticas sociales: igualdad de género, violencia de género, personas LGTBI, discapacidad y dependencia",
      norma: "LO 3/2007 · LO 1/2004 · Ley 15/2022 · Ley 4/2023 · RDL 1/2013 · Ley 39/2006",
      resumen: [
        "LO 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres. Composición equilibrada: ningún sexo por encima del 60 % ni por debajo del 40 %. Plan de igualdad obligatorio en empresas de 50 o más trabajadores.",
        "IV Plan para la igualdad de género en la AGE y sus organismos públicos, aprobado por Acuerdo del Consejo de Ministros de 7 de octubre de 2025.",
        "LO 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género (teléfono de atención 016).",
        "Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación. Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI.",
        "RDL 1/2013, de 29 de noviembre: Texto Refundido de la Ley General de derechos de las personas con discapacidad (se considera persona con discapacidad a quien tenga un grado igual o superior al 33 %).",
        "Ley 39/2006, de 14 de diciembre, de dependencia: grado I (moderada), grado II (severa) y grado III (gran dependencia)."
      ],
      preguntas: [
        ["Se entiende por composición equilibrada la presencia de mujeres y hombres de forma que las personas de cada sexo:", ["No superen el 60 % ni sean menos del 40 %", "No superen el 70 % ni sean menos del 30 %", "Sean exactamente el 50 %", "No superen el 55 % ni sean menos del 45 %"], "Disposición adicional primera de la LO 3/2007."],
        ["Están obligadas a elaborar y aplicar un plan de igualdad las empresas con:", ["50 o más personas trabajadoras", "100 o más personas trabajadoras", "250 o más personas trabajadoras", "Cualquier número de personas trabajadoras"], "Art. 45.2 LO 3/2007, en la redacción dada por el RDL 6/2019."],
        ["La Ley Orgánica de Medidas de Protección Integral contra la Violencia de Género es la:", ["LO 1/2004, de 28 de diciembre", "LO 3/2007, de 22 de marzo", "LO 10/2022, de 6 de septiembre", "LO 15/1999, de 13 de diciembre"], "La LO 10/2022 es la de garantía integral de la libertad sexual."],
        ["El IV Plan para la igualdad de género en la AGE y sus organismos públicos se aprobó por Acuerdo del Consejo de Ministros de:", ["7 de octubre de 2025", "8 de marzo de 2020", "22 de marzo de 2007", "29 de diciembre de 2015"], "Así se cita en la propia convocatoria."],
        ["La ley para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI es la:", ["Ley 4/2023, de 28 de febrero", "Ley 15/2022, de 12 de julio", "Ley 13/2005, de 1 de julio", "LO 3/2007, de 22 de marzo"], "La Ley 15/2022 es la integral para la igualdad de trato y la no discriminación."],
        ["A efectos del Texto Refundido de la Ley General de derechos de las personas con discapacidad, tienen la consideración de personas con discapacidad las que tengan reconocido un grado igual o superior al:", ["33 %", "50 %", "25 %", "65 %"], "Art. 4.2 RDL 1/2013."],
        ["En la Ley 39/2006, de dependencia, el grado III corresponde a:", ["Gran dependencia", "Dependencia moderada", "Dependencia severa", "Dependencia leve"], "Grado I moderada, grado II severa, grado III gran dependencia."],
        ["El texto refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social se aprobó por:", ["Real Decreto Legislativo 1/2013, de 29 de noviembre", "Ley 39/2006, de 14 de diciembre", "Ley 51/2003, de 2 de diciembre", "Real Decreto 2271/2004, de 3 de diciembre"], "Refundió, entre otras, la LISMI y la Ley 51/2003."]
      ]
    },
    {
      id: "c14", bloque: "C",
      titulo: "La Ley 19/2013 de transparencia. El Consejo de Transparencia y Buen Gobierno. Portal de Transparencia y UIT",
      norma: "Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno",
      resumen: [
        "Tres ámbitos: publicidad activa, derecho de acceso a la información pública y buen gobierno.",
        "Derecho de acceso: la solicitud no necesita motivarse (art. 17.3). Plazo para resolver: un mes, ampliable otro mes (art. 20.1). Silencio desestimatorio (art. 20.4). Límites (art. 14) y protección de datos personales (art. 15).",
        "Reclamación potestativa ante el Consejo de Transparencia y Buen Gobierno (CTBG) en el plazo de un mes, sustitutiva de los recursos administrativos (art. 24).",
        "CTBG: autoridad administrativa independiente que promueve la transparencia, vela por la publicidad activa y garantiza el derecho de acceso. Su Presidente se nombra por real decreto por un mandato de 5 años no renovable.",
        "Portal de la Transparencia de la AGE (art. 10) y Unidades de Información y Transparencia (UIT) en cada Ministerio y organismo, que tramitan las solicitudes de acceso y coordinan la publicidad activa (art. 21)."
      ],
      preguntas: [
        ["El plazo para resolver una solicitud de acceso a la información pública es de:", ["Un mes, ampliable por otro mes", "Tres meses", "Quince días hábiles", "Dos meses improrrogables"], "Art. 20.1 Ley 19/2013."],
        ["Si no se resuelve en plazo una solicitud de acceso a información pública, se entiende:", ["Desestimada", "Estimada", "Caducada", "Remitida al Defensor del Pueblo"], "Art. 20.4 Ley 19/2013."],
        ["Al solicitar el acceso a información pública, el solicitante:", ["No está obligado a motivar su solicitud", "Debe acreditar un interés legítimo", "Debe motivarla siempre", "Debe ser empleado público"], "Art. 17.3 Ley 19/2013."],
        ["El plazo para presentar la reclamación ante el Consejo de Transparencia y Buen Gobierno es de:", ["Un mes", "Tres meses", "Quince días", "Dos meses"], "Art. 24.2 Ley 19/2013. Es potestativa y sustituye a los recursos administrativos."],
        ["El Presidente del Consejo de Transparencia y Buen Gobierno es nombrado por un periodo de:", ["Cinco años, no renovable", "Cuatro años, renovable", "Seis años, renovable una vez", "Tiempo indefinido"], "Art. 37 Ley 19/2013."],
        ["Las unidades encargadas en cada departamento ministerial de tramitar las solicitudes de acceso y coordinar la publicidad activa son:", ["Las Unidades de Información y Transparencia", "Las Oficinas de Asistencia en Materia de Registros", "Las Inspecciones de Servicios", "Las Secretarías Generales Técnicas"], "Art. 21 Ley 19/2013."],
        ["Los tres ámbitos que regula la Ley 19/2013 son:", ["Publicidad activa, derecho de acceso a la información pública y buen gobierno", "Transparencia, protección de datos y administración electrónica", "Publicidad, contratación y subvenciones", "Gobierno abierto, rendición de cuentas y participación"], "Título I (transparencia: publicidad activa y acceso) y Título II (buen gobierno)."]
      ]
    },
    {
      id: "c15", bloque: "C",
      titulo: "La Agenda 2030 y los ODS. Transparencia, colaboración, participación y rendición de cuentas",
      norma: "Resolución 70/1 de la Asamblea General de Naciones Unidas (25-09-2015)",
      resumen: [
        "La Agenda 2030 para el Desarrollo Sostenible fue aprobada por la Asamblea General de Naciones Unidas el 25 de septiembre de 2015. Contiene 17 Objetivos de Desarrollo Sostenible (ODS) y 169 metas; sucede a los Objetivos de Desarrollo del Milenio (2000-2015).",
        "Esferas: personas, planeta, prosperidad, paz y alianzas (las «5 P»).",
        "ODS de especial relevancia para una Confederación Hidrográfica: ODS 6 (agua limpia y saneamiento), ODS 13 (acción por el clima), ODS 14 (vida submarina) y ODS 15 (vida de ecosistemas terrestres).",
        "Otros: ODS 5 (igualdad de género), ODS 12 (producción y consumo responsables), ODS 16 (paz, justicia e instituciones sólidas) y ODS 17 (alianzas para lograr los objetivos).",
        "Principios del gobierno abierto en el servicio público: transparencia, participación, colaboración y rendición de cuentas."
      ],
      preguntas: [
        ["La Agenda 2030 para el Desarrollo Sostenible fue aprobada por la Asamblea General de Naciones Unidas en:", ["Septiembre de 2015", "Diciembre de 2015 (Acuerdo de París)", "Junio de 1992 (Cumbre de Río)", "Septiembre de 2000"], "En 2000 se aprobaron los Objetivos de Desarrollo del Milenio."],
        ["¿Cuántos Objetivos de Desarrollo Sostenible contiene la Agenda 2030?", ["17", "8", "169", "21"], "Con 169 metas."],
        ["El ODS 6 se refiere a:", ["Agua limpia y saneamiento", "Acción por el clima", "Igualdad de género", "Energía asequible y no contaminante"], "Es el ODS más directamente vinculado a la actividad de una Confederación Hidrográfica."],
        ["El ODS 13 se refiere a:", ["Acción por el clima", "Vida submarina", "Ciudades y comunidades sostenibles", "Industria, innovación e infraestructura"], "ODS 14: vida submarina; ODS 11: ciudades sostenibles; ODS 9: industria e innovación."],
        ["El ODS 16 se denomina:", ["Paz, justicia e instituciones sólidas", "Alianzas para lograr los objetivos", "Reducción de las desigualdades", "Trabajo decente y crecimiento económico"], "Incluye la transparencia y la rendición de cuentas de las instituciones."],
        ["Las «5 P» de la Agenda 2030 son:", ["Personas, planeta, prosperidad, paz y alianzas", "Pobreza, población, paz, progreso y política", "Personas, producción, prosperidad, participación y paz", "Planeta, protección, progreso, participación y prosperidad"], "Alianzas: partnerships, en inglés."],
        ["Son principios del gobierno abierto:", ["Transparencia, participación, colaboración y rendición de cuentas", "Jerarquía, eficacia, coordinación y desconcentración", "Legalidad, publicidad y seguridad jurídica", "Mérito, capacidad, igualdad y publicidad"], "Son los principios informadores que cita el tema 15 del temario común."]
      ]
    }
  ]
};
