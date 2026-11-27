# Aula CHS

Plataforma web para preparar la oposición de **M2 Química** de la **Confederación Hidrográfica del Segura (CHS)**: temario oficial de la convocatoria, resumen de ideas clave por tema, tests de práctica y simulacros con el formato real del examen.

## Plaza preparada

**M2 · Química** en la Confederación Hidrográfica del Segura (puestos TED009 y TED010, Santomera, ámbito territorial 6), de la convocatoria de personal laboral fijo del MITECO (OEP 2023-2024), firmada el 6 de julio de 2026.

- **Primer ejercicio:** 90 preguntas tipo test (45 del temario común y 45 del específico) en 90 minutos; cada error resta 1/3. Máximo 40 puntos (20 por parte), mínimo 20.
- **Segundo ejercicio:** supuesto práctico de 2 horas, de 0 a 60 puntos, mínimo 30.
- Para superar la oposición hacen falta 50 puntos en total. Requisito: Grado en Química.

## Funcionalidades

- **Temario oficial:** los 15 temas comunes del grupo M2 (Anexo VI) y los 32 específicos de Química (Anexo VII), con ideas clave por tema.
- **Bloque complementario** (no entra en el examen): legislación de aguas, la CHS y su cuenca, y análisis químico de aguas en laboratorio, como apoyo para el supuesto práctico.
- **Simulacro oficial:** 45 preguntas comunes + 45 de Química, 90 minutos, penalización de 1/3 y puntuación por partes sobre 20.
- **Tests por tema** en modo estudio (corrección inmediata con explicación) y modo examen (cronometrado, con hoja de respuestas).
- **Simulacro personalizado**, **repaso de fallos**, **progreso** con historial y gráfica, **preguntas propias** y **copia de seguridad** en JSON.
- **Repaso de hoy** (repetición espaciada): cada pregunta del temario oficial pasa por cajas de Leitner. Las falladas vuelven al día siguiente y las acertadas, a los 1, 3, 7, 15, 30 y 60 días. Cada día se suman preguntas nuevas (20 por defecto, configurable) y se muestra la previsión de la semana. Cuenta todo lo que se responde en la app.
- **Supuestos prácticos** (segundo ejercicio): los 64 supuestos de la opositora en 8 bloques (`js/data-supuestos.js`), leídos de sus PDF. Cada bloque trae ficha, formulario y bibliografía; cada supuesto, enunciado con tablas de datos, apartados con su puntuación y resolución, errores típicos, preguntas del tribunal en la lectura y, en los simulacros, «Qué aprender». Modo libre con autoevaluación por apartado (nota estimada sobre la puntuación del supuesto) o modo examen con el tiempo orientativo de cada supuesto y las resoluciones ocultas hasta terminar. Se pueden importar más supuestos en JSON desde *Importar*.
- La sección *Convocatoria* resume las plazas, los requisitos, la solicitud y los ejercicios.
- **Importar temas propios** (sección *Importar*): sube los PDF de tus temas, con el modelo de «Esquema-resumen», «Preguntas tipo test» y «Solucionario». Se toman las preguntas, la respuesta correcta y su justificación, y como ideas clave el esquema y las trampas frecuentes. También acepta JSON o texto pegado. Al cargar un tema, sus preguntas de ejemplo dejan de usarse. Si recargas un tema, las preguntas con el mismo enunciado se actualizan y las nuevas se añaden. La página incluye las instrucciones de formato para copiarlas en otra conversación.

## Uso

No necesita instalación ni servidor: abre `index.html` en el navegador.

Para publicarla en GitHub Pages: *Settings → Pages → Build and deployment → Source: Deploy from a branch*, elige la rama `ccr-0026883b-7vuch8` y la carpeta `/ (root)`, y guarda. La web queda en `https://damp83.github.io/Aulaoposicion/` y se actualiza sola con cada cambio en esa rama. El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll.

Para generar una versión de un único archivo (`dist/aula-chs.html`):

```bash
node tools/build-single.js
```

El progreso se guarda en el `localStorage` del navegador; usa *Progreso → Copia de seguridad* para no perderlo.

## Temas propios incluidos en la plataforma

`js/data-mis-temas.js` contiene los temas elaborados por la persona opositora que ya forman parte de la plataforma: los 15 temas del temario común (225 preguntas) y los 32 temas específicos de Química (480 preguntas); cada respuesta se ha cotejado con el solucionario de su PDF. En esos temas no se usan las preguntas de ejemplo de `js/data.js` ni de `js/data-quimica.js`, que solo se conservan como respaldo. Para añadir otro: impórtalo en la sección *Importar*, exporta la copia de seguridad y copia en ese archivo el tema correspondiente de `temas`.

## Lectura de PDF

Los PDF se leen en el navegador con pdf.js 3.11.174, que se descarga desde cdnjs solo al subir un PDF (hace falta conexión). El tema se detecta por la cabecera «Tema N · …» y «Química (M2)» o «parte común»; si no se detecta, se elige en un desplegable antes de cargar. El lector reconoce el esquema-resumen en forma de lista numerada o de tabla (incluidas tablas de varias columnas y cabeceras en dos líneas), las trampas frecuentes, las preguntas a)–d) y el solucionario.

## Formato de importación (JSON)

```json
{
  "tema": "q21",
  "titulo": "Título del tema",
  "resumen": ["Idea clave 1", "Idea clave 2"],
  "preguntas": [
    { "p": "Enunciado", "correcta": "Texto de la correcta", "incorrectas": ["…", "…", "…"], "e": "Explicación" }
  ]
}
```

Códigos: `c01`–`c15` (temario común), `q01`–`q32` (Química) y `a01`–`a11` (complementario). También se aceptan `{"temas": [...]}`, listas de temas, varios bloques seguidos y variantes como `pregunta`/`enunciado`, `opciones` (lista u objeto `{"A": …}`) con `respuesta_correcta` como letra, texto o número.

## Ampliar el banco de preguntas

Las preguntas están en `js/data.js` (convocatoria y temario común), `js/data-quimica.js` (parte específica) y `js/data-agua.js` (bloque complementario). Cada pregunta tiene este formato, con la respuesta **correcta siempre en primera posición** (la aplicación baraja las opciones al mostrarlas):

```js
["Enunciado", ["Correcta", "Incorrecta 1", "Incorrecta 2", "Incorrecta 3"], "Explicación y artículo"]
```

Para añadir un tema nuevo, agrega un objeto a `temas` con `id`, `bloque` (`C`, `Q` o `X`), `titulo`, `norma`, `resumen` y `preguntas`.

## Aviso

Material de práctica no oficial. Adapta el temario al de tu convocatoria concreta (personal funcionario o laboral, categoría y especialidad) y contrasta cada pregunta con la versión consolidada de las normas en el BOE.
