# LearningReact

Es una herramienta que sirge para simplificar la creación de interfaces de usuarios. Dentro de las ventajas destaca que evita los ataques, esto se debe a la forma en que se estructura su código. Nace en 2011 pero no fue hasta 2013 que se convierte en código abierto.

## Algunas Notas a tener en cuenta
- Los componentes en React son funciones JS que retornan **jsx** (código que  luce con html pero no lo es)
- React tiene dos librerias react-DOM (para webs), react-Native (para aplicaciones moviles)
- La nomenclatura para los componentes que cree debe se PascalCased.
- Usar *className* en lugar de *class* como atributo de el elemento que esté creando dentro del componente.

## JSX
React utiliza JSX (una extensión de ECMAscript basada en XML) para hacer más funcional su código


La interpretación de este código y llevarlo al de react lo hacen Herramientas como [Babel]( https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.22.4&externalPlugins=&assumptions=%7B%7D) y [SWC](https://swc.rs/playground) que no son mas que transpiladores en el que pasas el código en JSX y lo transpila a React. 

Estas herranmientas son las que utilizan algunos empaquetadores de aplicaciones web (alistan el proyecto para poderlo ver como un todo) como **Webpack**, **Next.js** o **Vite**.


## Opciones de empaquetadores web:
- Create React App (forma official, pero va más lenta)
- WebPack (Es de las más utilizadas y con mas doc foro pero va lenta en comparación con otras opciones)
- Vite (Va bien rápido)

---

## Creación de proyecto desde cero con vite como empaquetador web

1. 	Dentro de la carpeta seleccionada en el terminal de VS Code
 [previa configuración básica de VSCode](https://www.freecodecamp.org/espanol/news/tutorial-de-javascript-como-configurar-un-proyecto-de-desarrollo-front-end/)

```
>> npm init -y
>> mkdir projects //crea la carpeta projects

```
La líneas anteriores inicializan npm en la carpeta raíz (esto permite compartir módulo entre proyectos)

```
>> cd project 
>> npm create vite 
     //responder lo que pregunte (nameProject, framework, variant)
>> cd NameProject
>> npm install       
>> npm run dev   
     //Inicializa proyecto y te da la url para previsualizacion   
```
