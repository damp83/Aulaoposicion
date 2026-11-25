/*
 * Banco de preguntas — Aula Oposición CHS
 *
 * Formato de cada pregunta: [enunciado, [CORRECTA, incorrecta, incorrecta, incorrecta], explicación]
 * La respuesta correcta va SIEMPRE en primera posición: la aplicación baraja las opciones al mostrarlas.
 *
 * Contenido elaborado como material de práctica. Compruébalo siempre con el temario oficial
 * de tu convocatoria y con la versión consolidada de cada norma en el BOE.
 */
window.TEMARIO = {
  bloques: [
    { id: "B1", nombre: "Organización del Estado y Derecho administrativo" },
    { id: "B2", nombre: "Empleo público y materias transversales" },
    { id: "B3", nombre: "Legislación de aguas y administración hidráulica" },
    { id: "B4", nombre: "La cuenca del Segura, riesgos y medio ambiente" }
  ],
  temas: [
    // ───────────────────────────── BLOQUE 1 ─────────────────────────────
    {
      id: "t01", bloque: "B1",
      titulo: "La Constitución Española de 1978",
      norma: "Constitución Española (BOE 29-12-1978)",
      resumen: [
        "Aprobada por las Cortes el 31-10-1978, ratificada en referéndum el 6-12-1978, sancionada el 27-12-1978 y publicada en el BOE el 29-12-1978.",
        "Estructura: Preámbulo, Título Preliminar, 10 Títulos (169 artículos), 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final.",
        "Art. 1.3: la forma política del Estado español es la Monarquía parlamentaria.",
        "Derechos fundamentales (arts. 14 a 29) y objeción de conciencia (art. 30.2): protegidos por recurso de amparo ante el Tribunal Constitucional.",
        "Art. 45: derecho a un medio ambiente adecuado (principio rector, Capítulo III del Título I).",
        "Art. 103.1: la Administración sirve con objetividad los intereses generales (eficacia, jerarquía, descentralización, desconcentración y coordinación).",
        "Art. 149.1.22ª: competencia exclusiva del Estado sobre los aprovechamientos hidráulicos cuando las aguas discurran por más de una Comunidad Autónoma."
      ],
      preguntas: [
        ["¿Cuántos artículos tiene la Constitución Española de 1978?", ["169", "159", "179", "196"], "La CE tiene 169 artículos distribuidos en un Título Preliminar y diez Títulos."],
        ["¿En qué fecha se ratificó la Constitución en referéndum?", ["6 de diciembre de 1978", "31 de octubre de 1978", "27 de diciembre de 1978", "29 de diciembre de 1978"], "El referéndum fue el 6-12-1978; las Cortes la aprobaron el 31-10, el Rey la sancionó el 27-12 y se publicó en el BOE el 29-12."],
        ["Según el art. 1.3 CE, la forma política del Estado español es:", ["La Monarquía parlamentaria", "La Monarquía constitucional", "El Estado social y democrático de Derecho", "La Monarquía hereditaria"], "Art. 1.3 CE. 'Estado social y democrático de Derecho' es la definición del art. 1.1, no la forma política."],
        ["¿Qué precepto constitucional atribuye al Estado la competencia exclusiva sobre los recursos hidráulicos cuando las aguas discurren por más de una Comunidad Autónoma?", ["Art. 149.1.22ª", "Art. 148.1.10ª", "Art. 149.1.23ª", "Art. 132.2"], "El art. 149.1.22ª se refiere a la legislación, ordenación y concesión de recursos y aprovechamientos hidráulicos de cuencas intercomunitarias. El 148.1.10ª permite a las CCAA asumir aprovechamientos hidráulicos de interés de la comunidad."],
        ["El derecho a disfrutar de un medio ambiente adecuado (art. 45 CE) se encuentra en:", ["El Capítulo III del Título I (principios rectores de la política social y económica)", "La Sección 1ª del Capítulo II del Título I (derechos fundamentales)", "El Título Preliminar", "El Título VII (Economía y Hacienda)"], "El art. 45 es un principio rector: informa la legislación y la actuación de los poderes públicos, pero no es amparable."],
        ["¿Qué derechos pueden protegerse mediante recurso de amparo ante el Tribunal Constitucional?", ["Los del art. 14, la Sección 1ª del Capítulo II del Título I y la objeción de conciencia del art. 30.2", "Todos los del Título I", "Solo los de la Sección 1ª del Capítulo II del Título I", "Los de los arts. 14 a 38"], "Art. 53.2 CE."],
        ["Según el art. 103.1 CE, NO es un principio de actuación de la Administración Pública:", ["Autonomía", "Jerarquía", "Desconcentración", "Coordinación"], "El art. 103.1 enumera eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la ley y al Derecho."],
        ["El Defensor del Pueblo es:", ["Alto comisionado de las Cortes Generales", "Un órgano dependiente del Gobierno", "Un órgano del Consejo General del Poder Judicial", "Un órgano consultivo del Tribunal Constitucional"], "Art. 54 CE: alto comisionado de las Cortes Generales, designado por estas para la defensa de los derechos del Título I."],
        ["La mayoría de edad se fija en la Constitución a los:", ["18 años", "16 años", "21 años", "14 años"], "Art. 12 CE."],
        ["La organización territorial del Estado se regula en el Título:", ["VIII", "VI", "IV", "X"], "Título VIII (arts. 137 a 158). El Título IV regula el Gobierno y la Administración; el VI, el Poder Judicial; el X, la reforma constitucional."],
        ["El procedimiento ordinario de reforma constitucional (art. 167) exige la aprobación por:", ["Mayoría de tres quintos de cada una de las Cámaras", "Mayoría de dos tercios de cada Cámara y referéndum obligatorio", "Mayoría absoluta del Congreso", "Mayoría simple de ambas Cámaras"], "Art. 167.1 CE. El referéndum solo se celebra si lo solicita una décima parte de los miembros de cualquiera de las Cámaras. Los dos tercios corresponden al procedimiento agravado del art. 168."]
      ]
    },
    {
      id: "t02", bloque: "B1",
      titulo: "Procedimiento Administrativo Común (Ley 39/2015)",
      norma: "Ley 39/2015, de 1 de octubre",
      resumen: [
        "Plazo máximo para resolver: el que fije la norma del procedimiento (máx. 6 meses salvo ley o norma de la UE); si no lo fija, 3 meses (art. 21).",
        "Silencio en procedimientos a solicitud del interesado: regla general estimatorio, salvo excepciones (entre ellas, si la estimación transfiriera facultades relativas al dominio público) (art. 24).",
        "Días hábiles: se excluyen sábados, domingos y festivos (art. 30.2). Plazos en meses o años: de fecha a fecha (art. 30.4).",
        "Obligados a relacionarse electrónicamente: personas jurídicas, entidades sin personalidad, profesionales colegiados, etc. (art. 14.2).",
        "Subsanación de solicitudes: 10 días (art. 68). Audiencia: 10 a 15 días (art. 82). Información pública: mínimo 20 días (art. 83).",
        "Nulidad de pleno derecho (art. 47) y anulabilidad (art. 48).",
        "Recursos: alzada (1 mes; resolver en 3 meses), reposición potestativa (1 mes; resolver en 1 mes), extraordinario de revisión (4 años o 3 meses según causa)."
      ],
      preguntas: [
        ["Si la norma reguladora no fija el plazo máximo para resolver, este será de:", ["Tres meses", "Seis meses", "Un mes", "Dos meses"], "Art. 21.3 Ley 39/2015."],
        ["En los procedimientos iniciados a solicitud del interesado, el vencimiento del plazo sin resolución expresa tiene, como regla general, efecto:", ["Estimatorio", "Desestimatorio", "De caducidad", "Suspensivo"], "Art. 24.1. Hay excepciones tasadas, como el ejercicio del derecho de petición o la transferencia de facultades sobre el dominio público."],
        ["Una solicitud de concesión cuya estimación transfiera al solicitante facultades relativas al dominio público hidráulico, si no se resuelve en plazo, se entiende:", ["Desestimada", "Estimada", "Caducada", "Archivada sin efectos"], "Art. 24.1 Ley 39/2015: el silencio es desestimatorio cuando la estimación transfiera facultades relativas al dominio público o al servicio público."],
        ["A efectos del cómputo de plazos por días, se excluyen del cómputo:", ["Sábados, domingos y festivos", "Solo domingos y festivos", "Solo festivos nacionales", "Sábados y domingos, pero no los festivos"], "Art. 30.2: salvo que se exprese otra cosa, los plazos por días son hábiles, excluidos sábados, domingos y festivos."],
        ["El plazo para subsanar una solicitud que no reúne los requisitos exigidos es de:", ["10 días", "15 días", "5 días", "1 mes"], "Art. 68.1. Puede ampliarse hasta 5 días más en procedimientos no selectivos o de concurrencia competitiva."],
        ["El plazo del trámite de audiencia a los interesados será:", ["No inferior a 10 días ni superior a 15", "No inferior a 15 días ni superior a 30", "De 20 días como mínimo", "De 5 días"], "Art. 82.2 Ley 39/2015."],
        ["El plazo de información pública no podrá ser inferior a:", ["20 días", "10 días", "15 días", "30 días"], "Art. 83.2 Ley 39/2015."],
        ["El plazo para interponer recurso de alzada contra un acto expreso es de:", ["Un mes", "Dos meses", "Tres meses", "Quince días"], "Art. 122.1. Si el acto no es expreso, puede interponerse en cualquier momento a partir del día siguiente a aquel en que se produzcan los efectos del silencio."],
        ["El plazo máximo para dictar y notificar la resolución del recurso de alzada es de:", ["Tres meses", "Un mes", "Seis meses", "Dos meses"], "Art. 122.2 Ley 39/2015."],
        ["Están obligadas a relacionarse electrónicamente con las Administraciones Públicas:", ["Las personas jurídicas", "Todas las personas físicas", "Solo las personas físicas mayores de 65 años", "Únicamente los empleados públicos en cualquier caso"], "Art. 14.2 a) Ley 39/2015. Las personas físicas pueden elegir, salvo que estén obligadas."],
        ["Un acto dictado por órgano manifiestamente incompetente por razón de la materia es:", ["Nulo de pleno derecho", "Anulable", "Irregular no invalidante", "Válido pero ineficaz"], "Art. 47.1 b) Ley 39/2015."],
        ["Cuando una notificación electrónica no se abre, se entiende rechazada transcurridos:", ["Diez días naturales desde su puesta a disposición", "Diez días hábiles", "Quince días naturales", "Un mes"], "Art. 43.2 Ley 39/2015."]
      ]
    },
    {
      id: "t03", bloque: "B1",
      titulo: "Régimen Jurídico del Sector Público (Ley 40/2015)",
      norma: "Ley 40/2015, de 1 de octubre",
      resumen: [
        "Técnicas de alteración de competencias: delegación (art. 9), avocación (art. 10), encomienda de gestión (art. 11), delegación de firma (art. 12) y suplencia (art. 13).",
        "Abstención (art. 23): interés personal, parentesco de consanguinidad dentro del 4º grado o afinidad dentro del 2º, amistad íntima o enemistad manifiesta, etc. Recusación: art. 24.",
        "Órganos colegiados: para constituirse válidamente se requiere Presidente, Secretario y la mitad, al menos, de sus miembros (art. 17.2).",
        "Órganos superiores de los Ministerios: Ministros y Secretarios de Estado. Directivos: Subsecretarios, Secretarios generales, Secretarios generales técnicos, Directores generales y Subdirectores generales (art. 55).",
        "Sector público institucional estatal: organismos públicos (organismos autónomos y entidades públicas empresariales), autoridades administrativas independientes, sociedades mercantiles, consorcios, fundaciones, fondos sin personalidad y universidades públicas no transferidas (art. 84).",
        "Las Confederaciones Hidrográficas son organismos autónomos adscritos al Ministerio competente en materia de agua (MITECO).",
        "Prescripción (si la ley no dice otra cosa): infracciones muy graves 3 años, graves 2 años, leves 6 meses; sanciones muy graves 3 años, graves 2 años, leves 1 año (art. 30)."
      ],
      preguntas: [
        ["Para la válida constitución de un órgano colegiado se requiere la presencia del Presidente y Secretario (o sustitutos) y de:", ["La mitad, al menos, de sus miembros", "Dos tercios de sus miembros", "La mayoría absoluta más uno", "Un tercio de sus miembros"], "Art. 17.2 Ley 40/2015."],
        ["Es causa de abstención el parentesco de consanguinidad dentro del:", ["Cuarto grado", "Segundo grado", "Tercer grado", "Primer grado"], "Art. 23.2 b): consanguinidad dentro del cuarto grado o afinidad dentro del segundo."],
        ["La técnica por la que un órgano superior asume el conocimiento de un asunto cuya resolución corresponde a un órgano dependiente se denomina:", ["Avocación", "Delegación", "Encomienda de gestión", "Suplencia"], "Art. 10 Ley 40/2015."],
        ["La encomienda de gestión:", ["No supone cesión de la titularidad de la competencia", "Transfiere la titularidad de la competencia", "Solo puede hacerse entre órganos del mismo Ministerio", "Requiere siempre una ley"], "Art. 11.2 Ley 40/2015: no supone cesión de titularidad ni de los elementos sustantivos de su ejercicio."],
        ["Son órganos superiores de los Ministerios:", ["Los Ministros y los Secretarios de Estado", "Los Subsecretarios y Directores generales", "Los Secretarios generales técnicos", "Los Subdirectores generales"], "Art. 55.3 Ley 40/2015."],
        ["Las Confederaciones Hidrográficas tienen la naturaleza jurídica de:", ["Organismos autónomos", "Entidades públicas empresariales", "Sociedades mercantiles estatales", "Autoridades administrativas independientes"], "Art. 22 TRLA en relación con la Ley 40/2015 (art. 84)."],
        ["Salvo que la ley establezca otra cosa, las infracciones muy graves prescriben a los:", ["Tres años", "Dos años", "Cinco años", "Seis meses"], "Art. 30.1 Ley 40/2015: muy graves 3 años, graves 2 años, leves 6 meses."],
        ["Salvo que la ley disponga otra cosa, las sanciones impuestas por faltas leves prescriben al:", ["Año", "Mes", "Semestre", "Bienio"], "Art. 30.1 Ley 40/2015: sanciones muy graves 3 años, graves 2 años y leves 1 año."],
        ["Los convenios administrativos deberán tener una duración determinada que no podrá ser superior a:", ["Cuatro años, salvo que normativamente se prevea un plazo superior", "Dos años", "Diez años", "Un año, prorrogable anualmente"], "Art. 49 h) 1º Ley 40/2015. Pueden prorrogarse por un periodo de hasta cuatro años adicionales."]
      ]
    },
    {
      id: "t04", bloque: "B1",
      titulo: "Contratación del Sector Público (Ley 9/2017)",
      norma: "Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público",
      resumen: [
        "Contratos menores: obras de valor estimado inferior a 40.000 € y suministros o servicios inferiores a 15.000 € (art. 118).",
        "Los contratos menores no pueden durar más de un año ni ser objeto de prórroga (art. 29.8).",
        "Procedimientos de adjudicación: abierto, abierto simplificado, restringido, negociado (con o sin publicidad), diálogo competitivo, asociación para la innovación y concurso de proyectos.",
        "Garantía definitiva: con carácter general, el 5 % del precio final ofertado, IVA excluido (art. 107).",
        "Publicidad a través del perfil de contratante, alojado en la Plataforma de Contratación del Sector Público en el ámbito estatal.",
        "Recurso especial en materia de contratación: ante el Tribunal Administrativo Central de Recursos Contractuales (AGE); plazo general de 15 días hábiles (art. 50)."
      ],
      preguntas: [
        ["Se consideran contratos menores los contratos de obras de valor estimado inferior a:", ["40.000 euros", "15.000 euros", "50.000 euros", "60.000 euros"], "Art. 118.1 Ley 9/2017."],
        ["Se consideran contratos menores los contratos de servicios de valor estimado inferior a:", ["15.000 euros", "40.000 euros", "18.000 euros", "30.000 euros"], "Art. 118.1 Ley 9/2017 (también para suministros)."],
        ["Los contratos menores:", ["No pueden tener una duración superior a un año ni ser objeto de prórroga", "Pueden prorrogarse una vez por un año", "Pueden durar hasta dos años", "No tienen límite de duración"], "Art. 29.8 Ley 9/2017."],
        ["Con carácter general, la garantía definitiva asciende al:", ["5 % del precio final ofertado, IVA excluido", "3 % del presupuesto base de licitación", "10 % del precio final, IVA incluido", "2 % del valor estimado"], "Art. 107.1 Ley 9/2017."],
        ["El órgano que resuelve el recurso especial en materia de contratación en el ámbito de la Administración General del Estado es:", ["El Tribunal Administrativo Central de Recursos Contractuales", "La Junta Consultiva de Contratación Pública del Estado", "El Tribunal de Cuentas", "La Abogacía del Estado"], "Art. 45 Ley 9/2017."],
        ["El plazo general para interponer el recurso especial en materia de contratación es de:", ["15 días hábiles", "1 mes", "10 días naturales", "2 meses"], "Art. 50.1 Ley 9/2017."],
        ["NO es un procedimiento de adjudicación previsto en la Ley 9/2017:", ["La subasta electrónica como procedimiento autónomo", "El procedimiento abierto simplificado", "El diálogo competitivo", "La asociación para la innovación"], "La subasta electrónica es un instrumento que puede emplearse dentro de algunos procedimientos, no un procedimiento de adjudicación autónomo."]
      ]
    },

    // ───────────────────────────── BLOQUE 2 ─────────────────────────────
    {
      id: "t05", bloque: "B2",
      titulo: "El Estatuto Básico del Empleado Público y el personal laboral",
      norma: "Real Decreto Legislativo 5/2015, de 30 de octubre (TREBEP)",
      resumen: [
        "Clases de empleados públicos (art. 8): funcionarios de carrera, funcionarios interinos, personal laboral (fijo, por tiempo indefinido o temporal) y personal eventual.",
        "El personal laboral se rige por la legislación laboral, el convenio colectivo y los preceptos del TREBEP que así lo dispongan (art. 7).",
        "Grupos de clasificación de funcionarios (art. 76): A (A1, A2), B, C (C1, C2) y agrupaciones profesionales sin titulación.",
        "Situaciones de los funcionarios (art. 85): servicio activo, servicios especiales, servicio en otras AAPP, excedencia y suspensión de funciones.",
        "Vacaciones: 22 días hábiles por año natural (art. 50). Permiso por matrimonio o pareja de hecho: 15 días (art. 48).",
        "Faltas: muy graves prescriben a los 3 años, graves a los 2 y leves a los 6 meses; sanciones muy graves 3 años, graves 2 y leves 1 año (art. 97).",
        "El personal laboral de la AGE, incluido el de las Confederaciones Hidrográficas, se rige por el IV Convenio colectivo único (2019)."
      ],
      preguntas: [
        ["NO es una clase de empleado público según el art. 8 del TREBEP:", ["Personal directivo profesional", "Funcionario interino", "Personal laboral", "Personal eventual"], "El personal directivo se regula en el art. 13, pero no es una de las clases de empleado público del art. 8."],
        ["El personal laboral al servicio de las Administraciones Públicas se rige, además de por la legislación laboral, por:", ["Los preceptos del TREBEP que así lo dispongan", "Todos los preceptos del TREBEP sin excepción", "Exclusivamente su convenio colectivo", "La Ley 30/1984 en su totalidad"], "Art. 7 TREBEP."],
        ["Para el acceso al subgrupo C1 se exige el título de:", ["Bachiller o Técnico", "Graduado en ESO", "Técnico Superior", "Grado universitario"], "Art. 76 TREBEP."],
        ["Los funcionarios tienen derecho a disfrutar como mínimo, durante cada año natural, de unas vacaciones retribuidas de:", ["22 días hábiles", "30 días naturales", "25 días hábiles", "21 días hábiles"], "Art. 50 TREBEP."],
        ["El permiso por matrimonio o registro de pareja de hecho es de:", ["Quince días", "Diez días", "Veinte días", "Un mes"], "Art. 48 l) TREBEP."],
        ["Las faltas muy graves prescriben a los:", ["Tres años", "Dos años", "Seis meses", "Cinco años"], "Art. 97 TREBEP: muy graves 3 años, graves 2 años y leves 6 meses."],
        ["La suspensión firme de funciones no podrá exceder de:", ["Seis años", "Tres años", "Cuatro años", "Dos años"], "Art. 90.1 TREBEP."],
        ["NO es una situación administrativa de los funcionarios de carrera según el art. 85 TREBEP:", ["Jubilación parcial", "Servicios especiales", "Excedencia", "Suspensión de funciones"], "Las situaciones del art. 85.1 son servicio activo, servicios especiales, servicio en otras AAPP, excedencia y suspensión de funciones."],
        ["El IV Convenio colectivo único para el personal laboral de la Administración General del Estado se publicó en el año:", ["2019", "2009", "2015", "2023"], "El IV Convenio Único se publicó en el BOE en mayo de 2019."]
      ]
    },
    {
      id: "t06", bloque: "B2",
      titulo: "Igualdad, violencia de género, transparencia y protección de datos",
      norma: "LO 3/2007 · LO 1/2004 · Ley 19/2013 · LO 3/2018",
      resumen: [
        "LO 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres. Composición equilibrada: ningún sexo supera el 60 % ni baja del 40 %.",
        "Las empresas de 50 o más personas trabajadoras están obligadas a elaborar un plan de igualdad.",
        "LO 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género.",
        "Ley 19/2013, de 9 de diciembre, de transparencia: plazo de un mes para resolver el acceso (ampliable otro mes); silencio desestimatorio; Consejo de Transparencia y Buen Gobierno.",
        "LO 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales; desarrolla el Reglamento (UE) 2016/679 (RGPD).",
        "Consentimiento de menores para el tratamiento de sus datos: a partir de 14 años. Autoridad de control: Agencia Española de Protección de Datos."
      ],
      preguntas: [
        ["Se entiende por composición equilibrada la presencia de mujeres y hombres de forma que, en el conjunto a que se refiera, las personas de cada sexo:", ["No superen el 60 % ni sean menos del 40 %", "No superen el 70 % ni sean menos del 30 %", "Sean exactamente el 50 %", "No superen el 55 % ni sean menos del 45 %"], "Disposición adicional primera de la LO 3/2007."],
        ["La Ley Orgánica para la igualdad efectiva de mujeres y hombres es la:", ["LO 3/2007, de 22 de marzo", "LO 1/2004, de 28 de diciembre", "LO 3/2018, de 5 de diciembre", "Ley 19/2013, de 9 de diciembre"], "LO 3/2007."],
        ["Están obligadas a elaborar y aplicar un plan de igualdad las empresas con:", ["50 o más personas trabajadoras", "100 o más personas trabajadoras", "250 o más personas trabajadoras", "Cualquier número de personas trabajadoras"], "Art. 45.2 LO 3/2007, en la redacción dada por el RDL 6/2019."],
        ["El plazo para resolver una solicitud de acceso a la información pública es de:", ["Un mes, ampliable por otro mes", "Tres meses", "Quince días hábiles", "Dos meses, improrrogables"], "Art. 20.1 Ley 19/2013."],
        ["Si no se resuelve en plazo una solicitud de acceso a información pública, se entiende:", ["Desestimada", "Estimada", "Caducada", "Remitida al Defensor del Pueblo"], "Art. 20.4 Ley 19/2013."],
        ["El tratamiento de los datos personales de un menor de edad fundado en su consentimiento solo es posible si es mayor de:", ["14 años", "16 años", "13 años", "12 años"], "Art. 7 LO 3/2018."],
        ["La Ley Orgánica de Medidas de Protección Integral contra la Violencia de Género es la:", ["LO 1/2004", "LO 3/2007", "LO 10/2022", "LO 15/1999"], "LO 1/2004, de 28 de diciembre."],
        ["El Reglamento General de Protección de Datos de la Unión Europea es el:", ["Reglamento (UE) 2016/679", "Reglamento (UE) 2018/1725", "Directiva 95/46/CE", "Reglamento (UE) 910/2014"], "El RGPD es el Reglamento (UE) 2016/679, aplicable desde el 25 de mayo de 2018."]
      ]
    },
    {
      id: "t07", bloque: "B2",
      titulo: "Prevención de riesgos laborales",
      norma: "Ley 31/1995, de 8 de noviembre · RD 39/1997",
      resumen: [
        "Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales. El RD 39/1997 aprueba el Reglamento de los Servicios de Prevención.",
        "Principios de la acción preventiva (art. 15): evitar los riesgos, evaluar los que no se puedan evitar, combatirlos en su origen, adaptar el trabajo a la persona, anteponer la protección colectiva a la individual…",
        "Ante un riesgo grave e inminente, el trabajador puede interrumpir su actividad y abandonar el lugar de trabajo (art. 21).",
        "Obligaciones de los trabajadores (art. 29): usar adecuadamente máquinas y equipos de protección individual, informar de riesgos, cooperar con el empresario.",
        "Comité de Seguridad y Salud: en empresas o centros con 50 o más trabajadores (art. 38).",
        "Modalidades preventivas: asunción por el empresario, trabajadores designados, servicio de prevención propio o ajeno (art. 30-31)."
      ],
      preguntas: [
        ["La Ley de Prevención de Riesgos Laborales es la:", ["Ley 31/1995, de 8 de noviembre", "Ley 39/1995, de 17 de enero", "Ley 31/1997, de 8 de noviembre", "Ley 54/2003, de 12 de diciembre"], "La Ley 54/2003 reformó el marco normativo de la prevención, pero la ley básica es la 31/1995."],
        ["El Comité de Seguridad y Salud se constituirá en todas las empresas o centros de trabajo que cuenten con:", ["50 o más trabajadores", "30 o más trabajadores", "100 o más trabajadores", "6 o más trabajadores"], "Art. 38.2 Ley 31/1995."],
        ["Según el art. 15, entre los principios de la acción preventiva figura:", ["Adoptar medidas que antepongan la protección colectiva a la individual", "Anteponer la protección individual a la colectiva", "Evaluar los riesgos que se puedan evitar", "Adaptar la persona al trabajo"], "Art. 15.1 h). Además, se trata de adaptar el trabajo a la persona, no al revés."],
        ["Cuando los trabajadores estén expuestos a un riesgo grave e inminente:", ["Tienen derecho a interrumpir su actividad y abandonar el lugar de trabajo", "Deben esperar la orden escrita del empresario", "Solo pueden paralizar la actividad los delegados sindicales", "Deben comunicarlo a la Inspección antes de interrumpir"], "Art. 21 Ley 31/1995."],
        ["El Reglamento de los Servicios de Prevención se aprobó por el:", ["RD 39/1997, de 17 de enero", "RD 486/1997, de 14 de abril", "RD 773/1997, de 30 de mayo", "RD 171/2004, de 30 de enero"], "El RD 773/1997 regula los EPI, el RD 486/1997 los lugares de trabajo y el RD 171/2004 la coordinación de actividades empresariales."],
        ["Es una obligación de los trabajadores en materia preventiva:", ["Utilizar correctamente los equipos de protección individual facilitados por el empresario", "Evaluar los riesgos del puesto de trabajo", "Contratar un servicio de prevención ajeno", "Elaborar el plan de prevención"], "Art. 29.2 Ley 31/1995."]
      ]
    },

    // ───────────────────────────── BLOQUE 3 ─────────────────────────────
    {
      id: "t08", bloque: "B3",
      titulo: "La Ley de Aguas: principios y dominio público hidráulico",
      norma: "Real Decreto Legislativo 1/2001, de 20 de julio (TRLA)",
      resumen: [
        "El Texto Refundido de la Ley de Aguas (TRLA) se aprobó por RDL 1/2001, de 20 de julio, y refunde la Ley 29/1985, de 2 de agosto, de Aguas.",
        "Art. 1.3: las aguas continentales superficiales y subterráneas renovables, integradas en el ciclo hidrológico, constituyen un recurso unitario subordinado al interés general.",
        "Art. 2: integran el DPH las aguas continentales, los cauces de corrientes naturales continuas o discontinuas, los lechos de lagos, lagunas y embalses en cauces públicos, los acuíferos y las aguas desaladas una vez incorporadas a esos elementos.",
        "Art. 14: principios de unidad de gestión, tratamiento integral, economía del agua, desconcentración, descentralización, coordinación, eficacia, participación de los usuarios y respeto a la unidad de cuenca.",
        "Art. 16: cuenca hidrográfica = superficie cuya escorrentía fluye hacia el mar por una única desembocadura, estuario o delta; es indivisible como unidad de gestión.",
        "Art. 16 bis: demarcación hidrográfica = zona terrestre y marina compuesta por una o varias cuencas vecinas y las aguas de transición, subterráneas y costeras asociadas.",
        "Consejo Nacional del Agua (art. 19): órgano superior de consulta y participación en la materia."
      ],
      preguntas: [
        ["El Texto Refundido de la Ley de Aguas fue aprobado por:", ["Real Decreto Legislativo 1/2001, de 20 de julio", "Ley 29/1985, de 2 de agosto", "Real Decreto 849/1986, de 11 de abril", "Ley 10/2001, de 5 de julio"], "La Ley 29/1985 fue la ley original; el RD 849/1986 aprueba el Reglamento del DPH y la Ley 10/2001 es el Plan Hidrológico Nacional."],
        ["Según el art. 1.3 TRLA, las aguas continentales superficiales y subterráneas renovables integradas en el ciclo hidrológico constituyen:", ["Un recurso unitario, subordinado al interés general, que forma parte del DPH", "Un bien patrimonial del Estado", "Bienes de dominio privado cuando nacen en una finca", "Recursos de titularidad autonómica"], "Art. 1.3 TRLA."],
        ["NO forma parte del dominio público hidráulico del Estado (art. 2 TRLA):", ["Los cauces por los que ocasionalmente discurren aguas pluviales y atraviesan únicamente fincas privadas desde su origen", "Los acuíferos, a efectos de actos de disposición o afección", "Los lechos de los embalses superficiales en cauces públicos", "Los cauces de corrientes naturales discontinuas"], "Esos cauces son de dominio privado (art. 5 TRLA)."],
        ["Las aguas procedentes de la desalación de agua de mar:", ["Forman parte del DPH una vez que, fuera de la planta, se incorporan a alguno de los elementos del art. 2", "Nunca forman parte del DPH", "Son siempre dominio público marítimo-terrestre", "Forman parte del DPH desde su captación en el mar"], "Art. 2 e) TRLA."],
        ["La superficie de terreno cuya escorrentía superficial fluye en su totalidad a través de una serie de corrientes, ríos y eventualmente lagos hacia el mar por una única desembocadura, estuario o delta es:", ["La cuenca hidrográfica", "La demarcación hidrográfica", "La subcuenca", "La masa de agua superficial"], "Art. 16.1 TRLA."],
        ["La zona terrestre y marina compuesta por una o varias cuencas hidrográficas vecinas y las aguas de transición, subterráneas y costeras asociadas se denomina:", ["Demarcación hidrográfica", "Cuenca hidrográfica", "Sistema de explotación", "Unidad hidrogeológica"], "Art. 16 bis TRLA."],
        ["El órgano superior de consulta y de participación en materia de aguas a nivel nacional es:", ["El Consejo Nacional del Agua", "El Consejo del Agua de la demarcación", "La Junta de Gobierno", "El Comité de Autoridades Competentes"], "Art. 19 TRLA."],
        ["NO es uno de los principios del art. 14 TRLA:", ["Centralización de la gestión en el Ministerio", "Unidad de gestión", "Participación de los usuarios", "Respeto a la unidad de la cuenca hidrográfica"], "El art. 14 recoge desconcentración y descentralización, no centralización."],
        ["Según el art. 4 TRLA, el álveo o cauce natural de una corriente continua o discontinua es:", ["El terreno cubierto por las aguas en las máximas crecidas ordinarias", "El terreno cubierto por la avenida de 100 años", "El terreno cubierto por la avenida de 500 años", "La franja de 5 metros a cada lado del agua"], "Art. 4 TRLA."]
      ]
    },
    {
      id: "t09", bloque: "B3",
      titulo: "Los organismos de cuenca: las Confederaciones Hidrográficas",
      norma: "TRLA arts. 21 a 39 · RD 927/1988 · RD 984/1989",
      resumen: [
        "En las cuencas que exceden el ámbito de una Comunidad Autónoma existen organismos de cuenca denominados Confederaciones Hidrográficas (art. 21).",
        "Son organismos autónomos con personalidad jurídica propia, adscritos a efectos administrativos al Ministerio competente (MITECO), con plena autonomía funcional (art. 22).",
        "Funciones (art. 23): elaborar el plan hidrológico, administrar y controlar el DPH y los aprovechamientos de interés general, proyectar, construir y explotar obras…",
        "Órganos de gobierno: Presidente y Junta de Gobierno. El Presidente lo nombra y cesa el Consejo de Ministros a propuesta del Ministro.",
        "Órganos de gestión en régimen de participación: Asamblea de Usuarios, Comisión de Desembalse, Juntas de Explotación y Juntas de Obras. Órgano de planificación: Consejo del Agua de la demarcación. Cooperación: Comité de Autoridades Competentes.",
        "Unidades: Comisaría de Aguas (gestión del DPH, concesiones, vertidos y policía), Dirección Técnica (obras y explotación), Secretaría General y Oficina de Planificación Hidrológica (RD 984/1989).",
        "RD 927/1988: Reglamento de la Administración Pública del Agua y de la Planificación Hidrológica."
      ],
      preguntas: [
        ["Los organismos de cuenca, con la denominación de Confederaciones Hidrográficas, existen en las cuencas hidrográficas:", ["Que excedan el ámbito territorial de una Comunidad Autónoma", "Que pertenezcan a una sola Comunidad Autónoma", "Con más de 10.000 km²", "Que viertan al Mediterráneo"], "Art. 21 TRLA. En cuencas intracomunitarias la administración hidráulica corresponde a la Comunidad Autónoma."],
        ["Las Confederaciones Hidrográficas están adscritas, a efectos administrativos:", ["Al Ministerio competente en materia de agua (actualmente, MITECO)", "Al Ministerio de Agricultura, Pesca y Alimentación", "A la Comunidad Autónoma de su sede", "Al Ministerio de Hacienda"], "Art. 22.1 TRLA."],
        ["El Presidente de la Confederación Hidrográfica es nombrado y cesado por:", ["El Consejo de Ministros, a propuesta del Ministro competente", "El Ministro competente, a propuesta de la Junta de Gobierno", "La Asamblea de Usuarios", "El Presidente del Gobierno de la Comunidad Autónoma de la sede"], "Art. 30 TRLA."],
        ["Son órganos de gobierno de los organismos de cuenca:", ["La Junta de Gobierno y el Presidente", "La Asamblea de Usuarios y la Comisión de Desembalse", "El Consejo del Agua y el Comisario de Aguas", "Las Juntas de Explotación y las Juntas de Obras"], "Art. 26 TRLA."],
        ["El órgano que delibera y formula propuestas sobre el régimen adecuado de llenado y vaciado de los embalses y acuíferos de la cuenca es:", ["La Comisión de Desembalse", "La Junta de Explotación", "La Junta de Gobierno", "La Asamblea de Usuarios"], "Art. 33 TRLA."],
        ["Tienen por finalidad coordinar, respetando los derechos derivados de las concesiones, la explotación de las obras hidráulicas y de los recursos de un río, conjunto de ríos o unidades hidrogeológicas:", ["Las Juntas de Explotación", "Las Juntas de Obras", "Las Comunidades de Usuarios", "La Comisión de Desembalse"], "Art. 32 TRLA."],
        ["El órgano de planificación del organismo de cuenca es:", ["El Consejo del Agua de la demarcación", "La Oficina de Planificación Hidrológica", "La Junta de Gobierno", "El Comité de Autoridades Competentes"], "Art. 26.3 y 35 TRLA. La Oficina de Planificación es una unidad administrativa, no el órgano colegiado de planificación."],
        ["Dentro de una Confederación Hidrográfica, la tramitación de concesiones, autorizaciones de vertido y la policía de aguas corresponden a:", ["La Comisaría de Aguas", "La Dirección Técnica", "La Secretaría General", "La Oficina de Planificación Hidrológica"], "RD 984/1989: la Comisaría de Aguas gestiona el dominio público hidráulico."],
        ["El Reglamento de la Administración Pública del Agua se aprobó por:", ["Real Decreto 927/1988, de 29 de julio", "Real Decreto 849/1986, de 11 de abril", "Real Decreto 907/2007, de 6 de julio", "Real Decreto 125/2007, de 2 de febrero"], "El RD 849/1986 es el Reglamento del DPH; el 907/2007, el de Planificación Hidrológica; el 125/2007 fija el ámbito de las demarcaciones."],
        ["El órgano creado para garantizar la adecuada cooperación en la aplicación de las normas de protección de las aguas entre las distintas administraciones de la demarcación es:", ["El Comité de Autoridades Competentes", "El Consejo Nacional del Agua", "La Junta de Obras", "La Comisión de Desembalse"], "Art. 36 bis TRLA."]
      ]
    },
    {
      id: "t10", bloque: "B3",
      titulo: "Cauces, riberas y márgenes. Zonas de servidumbre, policía e inundables",
      norma: "TRLA arts. 4 a 11 · RDPH (RD 849/1986) arts. 4 a 14",
      resumen: [
        "Cauce natural: terreno cubierto por las aguas en las máximas crecidas ordinarias (art. 4 TRLA).",
        "Máxima crecida ordinaria: media de los máximos caudales anuales, en régimen natural, de 10 años consecutivos representativos (art. 4 RDPH).",
        "Riberas: fajas laterales de los cauces públicos situadas por encima del nivel de aguas bajas. Márgenes: terrenos que lindan con los cauces (art. 6 TRLA).",
        "Zona de servidumbre: 5 metros de anchura para uso público. Zona de policía: 100 metros, en la que se condiciona el uso del suelo y las actividades.",
        "Zona de flujo preferente: unión de la vía de intenso desagüe y la zona donde se pueden producir graves daños en la avenida de 100 años (art. 9.2 RDPH).",
        "Zonas inundables: las delimitadas por la avenida de periodo de retorno de 500 años (art. 14 RDPH).",
        "El deslinde de los cauces de dominio público corresponde al organismo de cuenca (art. 95 TRLA)."
      ],
      preguntas: [
        ["La zona de servidumbre para uso público en las márgenes de los cauces tiene una anchura de:", ["5 metros", "100 metros", "10 metros", "20 metros"], "Art. 6.1 a) TRLA."],
        ["La zona de policía, en la que se condiciona el uso del suelo y las actividades que se desarrollen, tiene una anchura de:", ["100 metros", "5 metros", "50 metros", "200 metros"], "Art. 6.1 b) TRLA. Puede ampliarse en determinados supuestos."],
        ["Las fajas laterales de los cauces públicos situadas por encima del nivel de aguas bajas se denominan:", ["Riberas", "Márgenes", "Álveos", "Zonas de policía"], "Art. 6.1 TRLA. Márgenes son los terrenos que lindan con los cauces."],
        ["El caudal de la máxima crecida ordinaria es la media de los máximos caudales anuales, en régimen natural, producidos durante:", ["Diez años consecutivos representativos", "Cinco años consecutivos", "Cien años", "Veinticinco años"], "Art. 4.2 RDPH."],
        ["Se consideran zonas inundables las delimitadas por los niveles teóricos que alcanzarían las aguas en las avenidas cuyo periodo estadístico de retorno sea de:", ["500 años", "100 años", "50 años", "1.000 años"], "Art. 14.3 RDPH (en relación con el art. 11 TRLA)."],
        ["La zona de flujo preferente está constituida por la vía de intenso desagüe y la zona donde pueden producirse graves daños en la avenida de periodo de retorno de:", ["100 años", "500 años", "10 años", "25 años"], "Art. 9.2 RDPH."],
        ["La vía de intenso desagüe es la zona por la que pasaría la avenida de 100 años sin producir una sobreelevación mayor que:", ["0,3 metros respecto a la cota de la lámina de agua sin esa ocupación", "1 metro", "0,5 metros", "0,1 metros"], "Art. 9.2 RDPH (sobreelevación de 0,3 m, ampliable hasta 0,5 m en algunos casos)."],
        ["El deslinde de los cauces de dominio público corresponde a:", ["El organismo de cuenca", "El Ayuntamiento", "La Comunidad Autónoma", "El Registro de la Propiedad"], "Art. 95 TRLA."],
        ["La realización de construcciones en la zona de policía de un cauce requiere:", ["Autorización previa del organismo de cuenca", "Solo licencia municipal", "Concesión administrativa", "Declaración de impacto ambiental en todo caso"], "Art. 9.4 y 78 RDPH, salvo que el planeamiento ya informado por el organismo de cuenca lo contemple."]
      ]
    },
    {
      id: "t11", bloque: "B3",
      titulo: "Utilización del dominio público hidráulico: usos, concesiones y comunidades de usuarios",
      norma: "TRLA arts. 50 a 91 y 112 a 114",
      resumen: [
        "Usos comunes (art. 50): beber, bañarse, otros usos domésticos y abrevar ganado, sin autorización y sin apartar las aguas de los cauces.",
        "Usos comunes especiales (art. 51): navegación y flotación, barcas de paso y otros usos que no excluyan a terceros; sujetos a declaración responsable.",
        "Usos privativos por disposición legal (art. 54): aguas pluviales en el predio y aguas subterráneas del predio hasta 7.000 m³/año.",
        "Todo uso privativo no incluido en el art. 54 requiere concesión administrativa; el derecho no se adquiere por prescripción. Plazo máximo de la concesión: 75 años (art. 59).",
        "Orden de preferencia (art. 60): 1º abastecimiento de población; 2º regadíos y usos agrarios; 3º usos industriales para producción de energía eléctrica; 4º otros usos industriales; 5º acuicultura; 6º usos recreativos; 7º navegación y transporte acuático; 8º otros.",
        "Caducidad por interrupción permanente de la explotación durante 3 años consecutivos imputable al titular (art. 66).",
        "Registro de Aguas en cada organismo de cuenca (art. 80). Comunidades de usuarios (art. 81), de regantes si el destino principal es el riego; son corporaciones de derecho público adscritas al organismo de cuenca.",
        "Régimen económico: canon de utilización de bienes del DPH (art. 112), canon de control de vertidos (art. 113), canon de regulación y tarifa de utilización del agua (art. 114)."
      ],
      preguntas: [
        ["El plazo máximo de duración de una concesión de aguas es de:", ["75 años", "50 años", "99 años", "25 años"], "Art. 59.4 TRLA."],
        ["Según el orden de preferencia del art. 60 TRLA, en primer lugar figura:", ["El abastecimiento de población", "Los regadíos y usos agrarios", "Los usos industriales para producción de energía eléctrica", "Los usos recreativos"], "Art. 60.3 TRLA. El plan hidrológico puede establecer otro orden, respetando la supremacía del abastecimiento."],
        ["En el orden de preferencia general del art. 60 TRLA, los regadíos y usos agrarios ocupan el:", ["Segundo lugar", "Primer lugar", "Tercer lugar", "Cuarto lugar"], "1º abastecimiento, 2º regadíos y usos agrarios, 3º producción de energía eléctrica."],
        ["El propietario de una finca puede aprovechar las aguas subterráneas de su predio sin concesión cuando el volumen total anual no sobrepase:", ["7.000 metros cúbicos", "3.000 metros cúbicos", "10.000 metros cúbicos", "70.000 metros cúbicos"], "Art. 54.2 TRLA."],
        ["El derecho al uso privativo del dominio público hidráulico:", ["No puede adquirirse por prescripción", "Puede adquirirse por prescripción de 20 años", "Se adquiere por el uso continuado de 3 años", "Se adquiere por inscripción en el Registro de la Propiedad"], "Art. 52.1 TRLA: se adquiere por disposición legal o por concesión administrativa."],
        ["Beber, bañarse y abrevar ganado con medios manuales y sin apartar las aguas de su cauce son:", ["Usos comunes, que no requieren autorización", "Usos comunes especiales sujetos a declaración responsable", "Usos privativos por disposición legal", "Usos que requieren concesión"], "Art. 50.1 TRLA."],
        ["La navegación y flotación en aguas continentales es un uso común especial sujeto a:", ["Declaración responsable", "Concesión", "Autorización previa del Consejo de Ministros", "Ningún requisito"], "Art. 51 TRLA, tras la reforma de la Ley 25/2009."],
        ["Puede declararse la caducidad de una concesión por interrupción permanente de la explotación imputable al titular durante:", ["Tres años consecutivos", "Un año", "Cinco años consecutivos", "Diez años"], "Art. 66.2 TRLA."],
        ["Cuando el destino dado a las aguas fuese principalmente el riego, la comunidad de usuarios se denomina:", ["Comunidad de regantes", "Junta central de usuarios", "Comunidad general", "Junta de explotación"], "Art. 81.1 TRLA."],
        ["Las comunidades de usuarios tienen el carácter de:", ["Corporaciones de derecho público adscritas al organismo de cuenca", "Asociaciones privadas sin ánimo de lucro", "Sociedades cooperativas", "Organismos autónomos"], "Art. 82.1 TRLA."],
        ["El tributo que grava la utilización de obras de regulación de aguas superficiales o subterráneas financiadas total o parcialmente por el Estado es:", ["El canon de regulación", "El canon de control de vertidos", "El canon de utilización de bienes del DPH", "La tarifa de saneamiento"], "Art. 114.1 TRLA. La tarifa de utilización del agua grava otras obras hidráulicas específicas."]
      ]
    },
    {
      id: "t12", bloque: "B3",
      titulo: "Protección del DPH: vertidos, policía de aguas, infracciones y sanciones",
      norma: "TRLA arts. 92 a 123",
      resumen: [
        "Queda prohibido con carácter general el vertido directo o indirecto de aguas y productos residuales susceptibles de contaminar el DPH sin autorización administrativa previa (art. 100).",
        "Las autorizaciones de vertido se otorgan por un plazo máximo de 5 años, renovables. Los vertidos a colectores municipales los autoriza el órgano autonómico o local competente.",
        "El canon de control de vertidos se destina al estudio, control, protección y mejora del medio receptor de cada cuenca (art. 113).",
        "El personal de los organismos de cuenca que ejerce funciones de vigilancia e inspección (guardería fluvial) tiene la consideración de agente de la autoridad.",
        "Infracciones (art. 116-117): leves, menos graves, graves y muy graves. Multas: leves hasta 10.000 €; menos graves de 10.000,01 a 50.000 €; graves de 50.000,01 a 500.000 €; muy graves de 500.000,01 a 1.000.000 €.",
        "Competencia sancionadora (art. 117.2): leves y menos graves, organismo de cuenca; graves, Ministro; muy graves, Consejo de Ministros.",
        "Además de la multa, el infractor debe reparar los daños y reponer las cosas a su estado anterior (art. 118)."
      ],
      preguntas: [
        ["Con carácter general, el vertido directo o indirecto de aguas residuales susceptibles de contaminar el DPH:", ["Está prohibido salvo que cuente con autorización administrativa previa", "Está permitido si no supera los 7.000 m³/año", "Solo requiere comunicación al Ayuntamiento", "Requiere concesión administrativa"], "Art. 100.1 TRLA."],
        ["Las autorizaciones de vertido se otorgan por un plazo máximo de:", ["Cinco años", "Diez años", "Veinticinco años", "Setenta y cinco años"], "Art. 101 TRLA; son renovables sucesivamente."],
        ["La autorización de los vertidos realizados a la red de saneamiento municipal corresponde a:", ["El órgano autonómico o local competente", "El organismo de cuenca", "El Ministerio competente en materia de agua", "La Comisión de Desembalse"], "Art. 101.2 TRLA."],
        ["El canon de control de vertidos se destina a:", ["El estudio, control, protección y mejora del medio receptor de cada cuenca", "La financiación general de los Presupuestos del Estado", "La construcción de nuevos embalses", "La retribución de la guardería fluvial"], "Art. 113.1 TRLA."],
        ["La sanción de las infracciones graves en materia de aguas corresponde a:", ["El Ministro competente", "El organismo de cuenca", "El Consejo de Ministros", "La Comunidad Autónoma"], "Art. 117.2 TRLA."],
        ["La sanción de las infracciones muy graves en materia de aguas corresponde a:", ["El Consejo de Ministros", "El Ministro competente", "El Presidente del organismo de cuenca", "La Junta de Gobierno"], "Art. 117.2 TRLA."],
        ["Las infracciones leves en materia de aguas se sancionan con multa de hasta:", ["10.000 euros", "6.000 euros", "3.000 euros", "50.000 euros"], "Art. 117.1 TRLA."],
        ["Las infracciones muy graves en materia de aguas se sancionan con multa de:", ["500.000,01 a 1.000.000 euros", "50.000,01 a 500.000 euros", "100.000 a 300.000 euros", "1.000.000 a 3.000.000 euros"], "Art. 117.1 TRLA."],
        ["Además de la multa, el infractor de la Ley de Aguas está obligado a:", ["Reparar los daños y perjuicios ocasionados al DPH y reponer las cosas a su estado anterior", "Abonar únicamente las costas del procedimiento", "Realizar trabajos en beneficio de la comunidad", "Nada más que el pago de la multa"], "Art. 118 TRLA."],
        ["El personal de los organismos de cuenca que realiza funciones de inspección y vigilancia del DPH tiene la consideración de:", ["Agente de la autoridad", "Policía judicial", "Autoridad sancionadora", "Personal auxiliar sin potestades"], "El TRLA reconoce a ese personal la condición de agente de la autoridad en el ejercicio de sus funciones."]
      ]
    },
    {
      id: "t13", bloque: "B3",
      titulo: "La planificación hidrológica y la Directiva Marco del Agua",
      norma: "Directiva 2000/60/CE · TRLA arts. 40 a 46 · RD 907/2007",
      resumen: [
        "Directiva Marco del Agua (DMA): Directiva 2000/60/CE, de 23 de octubre de 2000. Objetivo: alcanzar el buen estado de las masas de agua.",
        "Ciclos de planificación de 6 años: 1º 2009-2015, 2º 2015-2021, 3º 2022-2027.",
        "Objetivos generales (art. 40 TRLA): buen estado y adecuada protección del DPH, satisfacción de las demandas, equilibrio y armonización del desarrollo regional y sectorial.",
        "Los planes hidrológicos de cuenca los aprueba el Gobierno por real decreto; el Plan Hidrológico Nacional se aprueba por ley (Ley 10/2001).",
        "Reglamento de la Planificación Hidrológica: RD 907/2007, de 6 de julio.",
        "Fases: documentos iniciales → Esquema de Temas Importantes (ETI) → proyecto de plan; cada fase sometida a consulta pública de 6 meses.",
        "Masas superficiales: estado ecológico y estado químico. Masas subterráneas: estado cuantitativo y estado químico.",
        "Los caudales ecológicos son una restricción que se impone con carácter general a los sistemas de explotación; solo prevalece sobre ellos el abastecimiento de población cuando no hay alternativa (art. 59.7 TRLA)."
      ],
      preguntas: [
        ["La Directiva Marco del Agua es la:", ["Directiva 2000/60/CE", "Directiva 2007/60/CE", "Directiva 91/271/CEE", "Directiva 91/676/CEE"], "La 2007/60/CE es la de inundaciones; la 91/271 la de aguas residuales urbanas y la 91/676 la de nitratos."],
        ["El tercer ciclo de planificación hidrológica abarca el periodo:", ["2022-2027", "2015-2021", "2021-2026", "2028-2033"], "Ciclos de 6 años: 2009-2015, 2015-2021 y 2022-2027."],
        ["Los planes hidrológicos de cuenca de las demarcaciones intercomunitarias se aprueban por:", ["El Gobierno, mediante real decreto", "Las Cortes Generales, mediante ley", "El Ministro, mediante orden", "La Junta de Gobierno del organismo de cuenca"], "Art. 40.6 TRLA."],
        ["El Plan Hidrológico Nacional se aprueba mediante:", ["Ley", "Real decreto", "Orden ministerial", "Resolución del Consejo Nacional del Agua"], "Art. 45 TRLA. Fue aprobado por la Ley 10/2001, de 5 de julio."],
        ["El Reglamento de la Planificación Hidrológica se aprobó por:", ["Real Decreto 907/2007, de 6 de julio", "Real Decreto 927/1988, de 29 de julio", "Real Decreto 849/1986, de 11 de abril", "Real Decreto 903/2010, de 9 de julio"], "RD 907/2007."],
        ["El estado de una masa de agua superficial se determina por:", ["Su estado ecológico y su estado químico", "Su estado cuantitativo y su estado químico", "Solo su estado químico", "Su caudal medio anual"], "El estado cuantitativo es propio de las masas de agua subterránea."],
        ["El estado de una masa de agua subterránea se determina por:", ["Su estado cuantitativo y su estado químico", "Su estado ecológico y su estado químico", "Su potencial ecológico", "Su nivel piezométrico exclusivamente"], "DMA y RD 907/2007."],
        ["Los caudales ecológicos:", ["Son una restricción que se impone con carácter general a los sistemas de explotación", "Son un uso más, que se sitúa tras el regadío en el orden de preferencia", "Solo se aplican en época de lluvias", "Son facultativos para el organismo de cuenca"], "Art. 59.7 TRLA. Solo la supremacía del abastecimiento de poblaciones puede prevalecer en determinados casos."],
        ["El documento que recoge los principales problemas de la demarcación y las alternativas de actuación antes de redactar el proyecto de plan es:", ["El Esquema de Temas Importantes", "El Programa de Medidas", "El Estudio General de la Demarcación", "El Registro de Zonas Protegidas"], "Art. 79 RD 907/2007."],
        ["Los documentos iniciales, el esquema provisional de temas importantes y el proyecto de plan hidrológico se someten a consulta pública durante un plazo mínimo de:", ["Seis meses", "Tres meses", "Un mes", "Cuarenta y cinco días"], "Arts. 74, 79 y 80 RD 907/2007 (en línea con el art. 14 DMA)."]
      ]
    },

    // ───────────────────────────── BLOQUE 4 ─────────────────────────────
    {
      id: "t14", bloque: "B4",
      titulo: "La Confederación Hidrográfica del Segura y su demarcación",
      norma: "RD 125/2007 · RD 35/2023 (Plan Hidrológico 2022-2027)",
      resumen: [
        "La Confederación Hidrográfica del Segura (CHS) se creó en 1926; tiene su sede en Murcia.",
        "La Demarcación Hidrográfica del Segura se extiende por cuatro Comunidades Autónomas: Región de Murcia, Andalucía, Castilla-La Mancha y Comunitat Valenciana (provincias de Murcia, Albacete, Alicante, Jaén, Almería y Granada). Su ámbito se fija en el RD 125/2007.",
        "El río Segura nace en Fuente Segura (Pontones, municipio de Santiago-Pontones, Jaén) y desemboca en Guardamar del Segura (Alicante).",
        "Afluentes principales: Mundo (margen izquierda, nace en Los Chorros, Riópar), Guadalentín o Sangonera, Mula, Quípar, Argos, Moratalla, Taibilla y Alhárabe (margen derecha).",
        "Embalses destacados: Cenajo (el de mayor capacidad de la cuenca) y Fuensanta, en el Segura; Talave y Camarillas, en el Mundo; Puentes y Valdeinfierno, en el Guadalentín; La Pedrera (Alicante), embalse de la zona del postrasvase.",
        "La Mancomunidad de los Canales del Taibilla (1927) es un organismo autónomo distinto de la CHS que abastece de agua potable a municipios de Murcia, Alicante y Albacete.",
        "El Plan Hidrológico del Segura del tercer ciclo (2022-2027) se aprobó por el RD 35/2023, de 24 de enero. La demarcación incluye el Mar Menor y presenta un déficit hídrico estructural."
      ],
      preguntas: [
        ["La sede de la Confederación Hidrográfica del Segura se encuentra en:", ["Murcia", "Alicante", "Cartagena", "Albacete"], "La CHS tiene su sede en la ciudad de Murcia."],
        ["La Confederación Hidrográfica del Segura se creó en el año:", ["1926", "1985", "1959", "1971"], "La CHS es una de las confederaciones más antiguas; se creó en 1926, el mismo año que la del Ebro."],
        ["El río Segura nace en:", ["Fuente Segura, en Pontones (Santiago-Pontones, Jaén)", "Los Chorros de Riópar (Albacete)", "La sierra de Cazorla, junto al nacimiento del Guadalquivir", "La sierra de Espuña (Murcia)"], "Los Chorros de Riópar son el nacimiento del río Mundo, su principal afluente."],
        ["El río Segura desemboca en el Mediterráneo en el término municipal de:", ["Guardamar del Segura (Alicante)", "San Pedro del Pinatar (Murcia)", "Torrevieja (Alicante)", "Cartagena (Murcia)"], "Desembocadura en Guardamar del Segura."],
        ["El principal afluente del Segura por la margen izquierda es el río:", ["Mundo", "Guadalentín", "Mula", "Quípar"], "El Mundo nace en Los Chorros (Riópar, Albacete) y confluye con el Segura en el entorno de Las Minas (Hellín)."],
        ["¿Cuántas Comunidades Autónomas abarca la Demarcación Hidrográfica del Segura?", ["Cuatro: Murcia, Andalucía, Castilla-La Mancha y Comunitat Valenciana", "Tres: Murcia, Comunitat Valenciana y Castilla-La Mancha", "Dos: Murcia y Comunitat Valenciana", "Cinco, incluida Aragón"], "Provincias de Murcia, Albacete, Alicante, Jaén, Almería y Granada."],
        ["El embalse de mayor capacidad de la cuenca del Segura es:", ["El Cenajo", "La Fuensanta", "Talave", "Santomera"], "El Cenajo, sobre el río Segura, entre Moratalla y Hellín."],
        ["El embalse de Puentes, en Lorca, se sitúa sobre el río:", ["Guadalentín", "Segura", "Mundo", "Mula"], "Puentes y Valdeinfierno regulan el Guadalentín."],
        ["El embalse de Talave se sitúa sobre el río:", ["Mundo", "Segura", "Taibilla", "Guadalentín"], "Talave (Hellín-Liétor, Albacete) recibe las aguas del acueducto Tajo-Segura."],
        ["La entidad que abastece de agua potable a numerosos municipios de Murcia, Alicante y Albacete, distinta de la CHS, es:", ["La Mancomunidad de los Canales del Taibilla", "El Sindicato Central de Regantes del Acueducto Tajo-Segura", "La Comunidad de Regantes del Campo de Cartagena", "La Junta Central de Usuarios del Vinalopó"], "La MCT es un organismo autónomo creado en 1927."],
        ["El Plan Hidrológico de la demarcación del Segura para el ciclo 2022-2027 se aprobó mediante:", ["Real Decreto 35/2023, de 24 de enero", "Real Decreto 1/2016, de 8 de enero", "Ley 10/2001, de 5 de julio", "Real Decreto 125/2007, de 2 de febrero"], "El RD 1/2016 aprobó los planes del segundo ciclo; el RD 125/2007 fija el ámbito territorial de las demarcaciones."],
        ["El ámbito territorial de las demarcaciones hidrográficas se fijó por:", ["Real Decreto 125/2007, de 2 de febrero", "Real Decreto 907/2007, de 6 de julio", "Real Decreto 650/1987, de 8 de mayo", "Ley 29/1985, de 2 de agosto"], "RD 125/2007."]
      ]
    },
    {
      id: "t15", bloque: "B4",
      titulo: "El trasvase Tajo-Segura",
      norma: "Ley 21/1971 · Ley 52/1980 · RD 773/2014",
      resumen: [
        "Ley 21/1971, de 19 de junio, sobre el aprovechamiento conjunto Tajo-Segura. Previó un volumen máximo de 1.000 hm³/año, con una primera fase de hasta 600 hm³/año.",
        "Ley 52/1980, de 16 de octubre, de regulación del régimen económico de la explotación del acueducto Tajo-Segura.",
        "Cabecera del Tajo: embalses de Entrepeñas y Buendía. Toma en el embalse de Bolarque; elevación de Altomira.",
        "El acueducto llega al embalse de Talave, en el río Mundo. Entró en servicio en 1979.",
        "Reglas de explotación (RD 773/2014): cuatro niveles según las existencias conjuntas de Entrepeñas y Buendía. Nivel 1: trasvase de 60 hm³/mes. Nivel 4: no procede trasvase (existencias por debajo de 400 hm³).",
        "Las aguas trasvasadas se destinan al abastecimiento (Mancomunidad de los Canales del Taibilla) y al regadío (zonas regables del postrasvase, representadas por el SCRATS)."
      ],
      preguntas: [
        ["La ley sobre el aprovechamiento conjunto de los ríos Tajo-Segura es la:", ["Ley 21/1971, de 19 de junio", "Ley 52/1980, de 16 de octubre", "Ley 10/2001, de 5 de julio", "Ley 29/1985, de 2 de agosto"], "La Ley 52/1980 regula el régimen económico de la explotación del acueducto."],
        ["Los embalses de cabecera del Tajo desde los que se realiza el trasvase son:", ["Entrepeñas y Buendía", "Alarcón y Contreras", "Cenajo y Fuensanta", "Valdecañas y Alcántara"], "El volumen conjunto de Entrepeñas y Buendía determina el nivel de trasvase."],
        ["El acueducto Tajo-Segura vierte sus aguas en la cuenca del Segura en el embalse de:", ["Talave", "Cenajo", "La Pedrera", "Ojós"], "Talave, en el río Mundo."],
        ["La toma del acueducto Tajo-Segura se realiza en el embalse de:", ["Bolarque", "Entrepeñas", "Alarcón", "Buendía"], "Desde Bolarque las aguas se elevan a través de la elevación de Altomira."],
        ["El volumen máximo trasvasable previsto por la Ley 21/1971 para la primera fase fue de:", ["600 hm³ anuales", "1.000 hm³ anuales", "400 hm³ anuales", "250 hm³ anuales"], "La ley previó hasta 1.000 hm³/año, con una primera fase de 600 hm³/año."],
        ["Según las reglas de explotación del trasvase, en nivel 1 el volumen mensual autorizable es de:", ["60 hm³", "27 hm³", "20 hm³", "38 hm³"], "Nivel 1: 60 hm³/mes. Nivel 2: 27 hm³/mes."],
        ["En nivel 4 de las reglas de explotación del trasvase Tajo-Segura:", ["No procede ningún trasvase", "Se trasvasan 20 hm³/mes", "Se trasvasan 27 hm³/mes", "Se trasvasan 60 hm³/mes"], "El nivel 4 se da con existencias conjuntas en Entrepeñas y Buendía inferiores a 400 hm³."],
        ["El acueducto Tajo-Segura comenzó a trasvasar agua en el año:", ["1979", "1971", "1985", "1992"], "La infraestructura entró en servicio en 1979."],
        ["La entidad que agrupa a las comunidades de regantes usuarias de las aguas del trasvase es:", ["El Sindicato Central de Regantes del Acueducto Tajo-Segura (SCRATS)", "La Mancomunidad de los Canales del Taibilla", "La Junta de Hacendados de la Huerta de Murcia", "La Comisión de Desembalse"], "El SCRATS representa a los regantes del postrasvase."]
      ]
    },
    {
      id: "t16", bloque: "B4",
      titulo: "Seguridad de presas, avenidas e inundaciones",
      norma: "RD 264/2021 · Directiva 2007/60/CE · RD 903/2010",
      resumen: [
        "RD 264/2021, de 13 de abril: Normas Técnicas de Seguridad para las presas y sus embalses.",
        "Clasificación de presas según su riesgo potencial: categoría A (la rotura puede afectar gravemente a núcleos urbanos o servicios esenciales, o producir daños materiales o medioambientales muy importantes), B y C.",
        "Las presas de categorías A y B deben contar con un Plan de Emergencia de la presa.",
        "Directiva 2007/60/CE sobre evaluación y gestión de los riesgos de inundación, traspuesta por el RD 903/2010, de 9 de julio.",
        "Fases: Evaluación Preliminar del Riesgo de Inundación (EPRI) e identificación de las ARPSIs → mapas de peligrosidad y de riesgo → Planes de Gestión del Riesgo de Inundación (PGRI). Revisión cada 6 años.",
        "Mapas de peligrosidad: escenarios de alta probabilidad (T = 10 años), probabilidad media (T = 100 años) y baja probabilidad o escenario extremo (T = 500 años).",
        "Herramientas: SAIH (Sistema Automático de Información Hidrológica) y SNCZI (Sistema Nacional de Cartografía de Zonas Inundables)."
      ],
      preguntas: [
        ["Las Normas Técnicas de Seguridad para las presas y sus embalses se aprobaron por:", ["Real Decreto 264/2021, de 13 de abril", "Real Decreto 903/2010, de 9 de julio", "Real Decreto 907/2007, de 6 de julio", "Orden de 12 de marzo de 1996"], "El RD 903/2010 regula los riesgos de inundación. La Orden de 1996 aprobaba el antiguo Reglamento Técnico sobre Seguridad de Presas y Embalses."],
        ["Una presa cuya rotura o funcionamiento incorrecto puede afectar gravemente a núcleos urbanos o servicios esenciales se clasifica en la categoría:", ["A", "B", "C", "Especial"], "Clasificación según el riesgo potencial."],
        ["Deben disponer de Plan de Emergencia:", ["Las presas clasificadas en las categorías A y B", "Solo las presas de categoría A", "Todas las presas, incluidas las de categoría C", "Solo las presas de titularidad estatal"], "Normativa de seguridad de presas."],
        ["La Directiva relativa a la evaluación y gestión de los riesgos de inundación es la:", ["Directiva 2007/60/CE", "Directiva 2000/60/CE", "Directiva 2006/118/CE", "Directiva 92/43/CEE"], "La 2000/60 es la DMA; la 2006/118 protege las aguas subterráneas; la 92/43 es la de Hábitats."],
        ["La Directiva de inundaciones se traspuso al ordenamiento español mediante:", ["Real Decreto 903/2010, de 9 de julio", "Real Decreto 264/2021, de 13 de abril", "Ley 17/2015, del Sistema Nacional de Protección Civil", "Real Decreto 1/2016, de 8 de enero"], "RD 903/2010, de evaluación y gestión de riesgos de inundación."],
        ["Las zonas en las que existe un riesgo potencial significativo de inundación, identificadas en la evaluación preliminar, se denominan:", ["ARPSIs", "ZEPAs", "Zonas de flujo preferente", "Zonas de policía"], "Áreas de Riesgo Potencial Significativo de Inundación."],
        ["El escenario de baja probabilidad o escenario extremo de los mapas de peligrosidad corresponde a un periodo de retorno de:", ["500 años", "100 años", "1.000 años", "50 años"], "RD 903/2010: escenarios de T = 10, 100 y 500 años."],
        ["Los Planes de Gestión del Riesgo de Inundación se revisan cada:", ["Seis años", "Cuatro años", "Diez años", "Dos años"], "Se coordinan con los ciclos de la planificación hidrológica."],
        ["El sistema que proporciona en tiempo real datos de niveles, caudales y lluvias en la cuenca se denomina:", ["SAIH (Sistema Automático de Información Hidrológica)", "SNCZI", "SIA (Sistema de Información del Agua)", "Red ICA"], "El SNCZI es la cartografía de zonas inundables."]
      ]
    },
    {
      id: "t17", bloque: "B4",
      titulo: "Medio ambiente, calidad de las aguas y el Mar Menor",
      norma: "Ley 21/2013 · Ley 26/2007 · Ley 42/2007 · Ley 19/2022 · Ley 3/2020 (Murcia)",
      resumen: [
        "Ley 21/2013, de 9 de diciembre, de evaluación ambiental: evaluación ambiental estratégica (planes y programas) y evaluación de impacto ambiental (proyectos), cada una ordinaria o simplificada.",
        "Ley 26/2007, de 23 de octubre, de Responsabilidad Medioambiental: principio de «quien contamina paga».",
        "Ley 42/2007, del Patrimonio Natural y de la Biodiversidad. Red Natura 2000: ZEC (Directiva Hábitats 92/43/CEE) y ZEPA (Directiva Aves 2009/147/CE).",
        "Directiva 91/271/CEE sobre tratamiento de aguas residuales urbanas y Directiva 91/676/CEE sobre nitratos de origen agrario (zonas vulnerables).",
        "El Mar Menor es la mayor laguna costera salada de Europa y está separada del Mediterráneo por La Manga.",
        "Ley 19/2022, de 30 de septiembre: reconoce personalidad jurídica a la laguna del Mar Menor y su cuenca; nació de una Iniciativa Legislativa Popular y fue la primera de este tipo en Europa. Crea el Comité de Representantes, la Comisión de Seguimiento y el Comité Científico.",
        "Ley 3/2020, de 27 de julio, de la Región de Murcia, de recuperación y protección del Mar Menor."
      ],
      preguntas: [
        ["La ley que reconoce personalidad jurídica a la laguna del Mar Menor y su cuenca es la:", ["Ley 19/2022, de 30 de septiembre", "Ley 3/2020, de 27 de julio", "Ley 42/2007, de 13 de diciembre", "Ley 21/2013, de 9 de diciembre"], "Fue la primera ley europea que reconoce personalidad jurídica a un ecosistema."],
        ["La Ley 19/2022 sobre el Mar Menor tuvo su origen en:", ["Una Iniciativa Legislativa Popular", "Un proyecto de ley del Gobierno", "Una proposición de ley de la Asamblea Regional de Murcia", "Una sentencia del Tribunal Constitucional"], "La ILP reunió más de 600.000 firmas."],
        ["La Ley 3/2020, de 27 de julio, de recuperación y protección del Mar Menor fue aprobada por:", ["La Asamblea Regional de Murcia", "Las Cortes Generales", "El Consejo de Ministros", "La Junta de Gobierno de la CHS"], "Es una ley autonómica de la Región de Murcia."],
        ["La evaluación ambiental de planes y programas se denomina:", ["Evaluación ambiental estratégica", "Evaluación de impacto ambiental", "Autorización ambiental integrada", "Declaración responsable ambiental"], "Ley 21/2013. La evaluación de impacto ambiental se aplica a proyectos."],
        ["El principio inspirador de la Ley 26/2007, de Responsabilidad Medioambiental, es:", ["Quien contamina paga", "Precaución exclusiva del Estado", "Subsidiariedad de las CCAA", "Responsabilidad compartida de los consumidores"], "La ley obliga a los operadores a prevenir, evitar y reparar los daños medioambientales."],
        ["Las Zonas de Especial Protección para las Aves (ZEPA) derivan de la:", ["Directiva 2009/147/CE (Directiva Aves)", "Directiva 92/43/CEE (Directiva Hábitats)", "Directiva 2000/60/CE", "Directiva 2008/56/CE"], "Las ZEC derivan de la Directiva Hábitats; ambas integran la Red Natura 2000."],
        ["La Directiva sobre protección de las aguas contra la contaminación producida por nitratos de origen agrario es la:", ["Directiva 91/676/CEE", "Directiva 91/271/CEE", "Directiva 2006/7/CE", "Directiva 98/83/CE"], "La 91/271 es la de aguas residuales urbanas; la 2006/7 la de aguas de baño; la 98/83 la de aguas de consumo (hoy sustituida por la 2020/2184)."],
        ["El Mar Menor está separado del mar Mediterráneo por:", ["La Manga", "El cabo de Palos únicamente", "La sierra de Cartagena", "Las salinas de San Pedro"], "La Manga del Mar Menor es un cordón litoral arenoso comunicado con el Mediterráneo por varias golas."]
      ]
    }
  ]
};
