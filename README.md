# Aula CHS

Plataforma web para preparar la oposición de la **Confederación Hidrográfica del Segura (CHS)**: temario organizado por bloques, resumen de ideas clave por tema y tests de práctica.

## Funcionalidades

- **Temario**: 17 temas en 4 bloques, cada uno con sus ideas clave y la norma de referencia.
- **Tests por tema** en dos modos:
  - *Modo estudio*: corrección inmediata con explicación y artículo de referencia.
  - *Modo examen*: cronometrado (1 min por pregunta), penalización de 1/3 por error, hoja de respuestas y preguntas marcadas para revisar.
- **Simulacro de examen**: preguntas al azar de los temas elegidos, con número de preguntas, tiempo y penalización configurables.
- **Repaso de fallos**: las preguntas falladas se guardan y salen de la lista cuando las aciertas.
- **Progreso**: porcentaje de temario dominado, acierto por tema, historial de notas y gráfica de evolución.
- **Mis preguntas**: añade preguntas propias (de exámenes anteriores o apuntes), que se mezclan con las del banco.
- **Copia de seguridad**: exporta o importa el progreso y las preguntas propias en JSON para pasarlos a otro dispositivo.
- Las opciones se barajan en cada test. Funciona en móvil, con tema claro u oscuro, y admite teclado (A–D o 1–4 para responder, Enter para avanzar).

## Bloques del temario

| Bloque | Temas |
| --- | --- |
| 1. Organización del Estado y Derecho administrativo | Constitución, Ley 39/2015, Ley 40/2015, Ley 9/2017 de Contratos |
| 2. Empleo público y materias transversales | TREBEP y personal laboral, igualdad, transparencia y protección de datos, prevención de riesgos laborales |
| 3. Legislación de aguas y administración hidráulica | TRLA y DPH, organismos de cuenca, cauces y zonas inundables, usos y concesiones, vertidos e infracciones, planificación hidrológica y DMA |
| 4. La cuenca del Segura, riesgos y medio ambiente | La CHS y su demarcación, trasvase Tajo-Segura, seguridad de presas e inundaciones, medio ambiente y Mar Menor |

## Uso

No necesita instalación ni servidor: abre `index.html` en el navegador.

Para publicarla en GitHub Pages: *Settings → Pages → Deploy from a branch*, y elige la rama y la carpeta raíz.

Para generar una versión de un único archivo (`dist/aula-chs.html`):

```bash
node tools/build-single.js
```

El progreso se guarda en el `localStorage` del navegador; usa *Progreso → Copia de seguridad* para no perderlo.

## Ampliar el banco de preguntas

Las preguntas están en `js/data.js`. Cada pregunta tiene este formato, con la respuesta **correcta siempre en primera posición** (la aplicación baraja las opciones al mostrarlas):

```js
["Enunciado", ["Correcta", "Incorrecta 1", "Incorrecta 2", "Incorrecta 3"], "Explicación y artículo"]
```

Para añadir un tema nuevo, agrega un objeto a `temas` con `id`, `bloque`, `titulo`, `norma`, `resumen` y `preguntas`.

## Aviso

Material de práctica no oficial. Adapta el temario al de tu convocatoria concreta (personal funcionario o laboral, categoría y especialidad) y contrasta cada pregunta con la versión consolidada de las normas en el BOE.
