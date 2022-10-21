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

Si el usuario ingreso una ruta existente pero que no es de tipo MD la consola mostrará que no existen archivos MD.
En todos los casos que existan archivos transformará las rutas a absolutas.

![Archivo MD no encontrados](img/archivosMdnoencontrados.png)

Si el usuario ingreso una ruta existente de tipo MD, el programa la leera y mostrara los Links encontrados:

![Se encontraron los siguientes Links](img/seencontraronlossiguienteslinksensuarchivo.png)

Luego de mostrar los links encontrados mostrara sus estados.En caso de estar funcionando será el status 200.

![Links Encontrados](img/loslinks.png)

![Status](img/estadoslinkOk.png)

Y en caso de no reconocer el Link muestra Undefined y el mensaje será Fail

![Undefined](img/undefinedstat.PNG)

En caso de no estar funcionando el Link el error que mostrará el status será 404 y el mensaje será FAIL.

![Undefined](img/error404.png)
