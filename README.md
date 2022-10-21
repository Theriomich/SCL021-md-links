# MD Link Finder

## De Michelle Cifuentes

![MD-LINK-FINDER](img/mdlinkfinder.png)

### Diagrama de Flujo

![Diagrama](img/diagrama.jpg)

### Como instalar la libreria MD lInk Finder

Aqui tengo que poner como...

### Resumen del proyecto

En este proyecto es una libreria pensada para programadores, en el que puedan comprobar si un archivo de tipo MD tiene links y cual es el estado de esos Links (si estan funcionando o no).

### Explicación de la Libreria

En primera instancia se le pide al usuario que ingrese la ruta del archivo a leer.

![Ingresar la Ruta](img/ingreselarutadelarchivo.png)

Si el usuario no ingresa un archivo se le indieca que debe ingresar una ruta válida

![Ingrese ruta Valida](img/debeingresarrutavalida.png)

Si el usuario ingreso una ruta existente pero que no es MD se dira que no existen archivos MD. En todos los casos que existan archivos transforma las rutas en absolutas.

![Archivo MD no encontrados](img/archivosMdnoencontrados.png)

Si el usuario ingreso una ruta existente y que es un archivo de tipo MD, el programa la leera y mostrara los Links encontrados:

![Se encontraron los siguientes Links](img/seencontraronlossiguienteslinksensuarchivo.png)

Luego de mostrar los links encontrados mostrara sus estados que en caso de estar funcionando mostrará el status 200.

![Links Encontrados](img/loslinks.png)

![Status](img/estadoslinkOk.png)

Y en caso de no saber muestra Undefined y el mensaje sera de Fallo:

![Undefined](img/undefinedstat.PNG)

En caso de no estar Funcionando el Link el error del status que muestra será 404 y el mensaje sera FAIL.

![Undefined](img/error404.png)
