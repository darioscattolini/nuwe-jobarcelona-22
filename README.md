# Nuwe JOBarcelona '22 Hackathon - Desafío front-end

Proyecto realizado en respuesta al desafío front-end de la Hackathon JOBarcelona
'22 organizada por Nuwe. El planteo del desafío es el siguiente:

> El equipo de front de JOBX está trabajando en una librería de componentes para
un proyecto que requiere que los usuarios puedan crear y personalizar listas de
regalos. El reto de la hackathon es crear un componente para visualizar los
distintos grupos de regalos en modo de scroll horizontal (para PC) o de lista
(para la versión de móvil y tablet).

## Tecnologías y librerías utilizadas

* Hemos escogido Angular 13 como framework para el desarrollo del componente.
  Entre otras cosas, hemos aprovechado la posibilidad que el framework ofrece de
  desarrollar librerías independientes de aplicaciones concretas.
* Hemos escogido UIKit como librería UI de base para la librería de componentes.
  Esto se debe a que incluye un componente Slider que facilita el desarrollo de
  la vista en scroll horizontal.
* Utilizamos Storybook para documentar el componente.

## Instalación y uso

### Instalación

Para instalar el proyecto son necesarios los siguientes pasos. Hay que tener en
cuenta que el bundle de la librería no es parte del repositorio, por lo que es
necesario compilarla antes de que `demo-app` pueda consumirla.

1. Clonar el repositorio:

   ```powershell
   git clone https://github.com/darioscattolini/nuwe-jobarcelona-22.git
   ```

2. Instalar las dependencias:

   ```powershell
   npm install
   ```

3. Compilar la librería:

   ```powershell
   npm run build jobx-ui
   ```

### Ejecución de la aplicación de demostración

La aplicación de demostración se puede ejecutar en modo de desarrollo con el
siguiente comando de la CLI de Angular:

```powershell
ng serve
```

El comando `ng build demo-app` producirá un bundle para producción, aunque en
este caso no será de utilidad.

### Uso y extensión de la librería

Si se desea utilizar la librería en otra aplicación de Angular es necesario
configurar el archivo `angular.json` para que se reconzca algunos assets que no
forman parte del módulo de la librería. En las opciones `styles` y  `scripts` es
necesario añadir las siguientes rutas:

```json
"your-app-name": {
  "architect": {
    "build": {
      "options": {
        "styles": [
          "dist/jobx-ui/assets/styles.scss"
        ],
        "scripts": [
          "node_modules/uikit/dist/js/uikit-core.min.js",
          "node_modules/uikit/dist/js/components/slider.min.js"
        ]
      }
    }
  }
},
```

La librería no está publicada en npm, así que sus assets se toman directamente
de la carpeta `/dist` (una vez ha sido compilada), y no de `node_modules`.

Si se quisiera trabajar sobre la librería, extendiéndola o modificándola, el
siguiente comando la compila automáticamente tras cada cambio:

```powershell
npm run watch jobx-ui
```

### Storybook

Parte del reto era documentar la solución utilizando Storybook. Para ejecutar la
aplicación de Storybook en local en modo desarrollo (accesible en
`localhost:6060`) se puede usar el siguiente comando:

```powershell
npm run storybook
```

Para compilar el bundle de producción de la aplicación se puede usar el
siguiente comando:

```powershell
npm run build-storybook
```

Si hubiera algún error durante la ejecución de Storybook, se puede intentar
eliminando el script `postinstall` en `package.json` y reinstalar las
dependencias con `npm install`. El postinstall incluye un script con un patch de
Storybook que era necesario resolver un bug de ejecución en Windows.

## Decisiones de diseño

### Librería independiente

El framework Angular permite desarrollar librerías además de aplicaciones
completas. Una librería puede contener módulos, componentes, servicios... de
Angular pero no puede ser ejecutada como aplicación, sino que debe ser integrada
a otra aplicación de Angular.

Consideramos esta funcionalidad interesante para el reto, ya que se trata del
desarrollo de una librería de componentes. Es por eso que el repositorio incluye
dos proyectos: la librería de componentes `jobx-ui` donde se incluye la solución
al reto, y la aplicación de Angular `demo-app` incluida sólo para mostrar el
funcionamiento del componente exportado por la librería.

### Screen Service

En lugar de utilizar *media queries*, desarrollamos el servicio `ScreenService`
para controlar el comportamiento responsive de la librería. Este servicio tiene
como dependencia un objeto de configuración de tipo `ResponsiveConfig` que
define los breakpoints que utilizará para detectar los distintos tamaños de
dispositivo:

```ts
interface ResponsiveConfig {
  medium: number;
  large: number;
  xLarge: number;
}
```

La librería inyecta en el servicio la siguiente configuración por defecto (en
píxeles):

```js
{
  medium: 768,
  large: 992,
  xLarge: 1280
}
```

Esta configuración puede ser sobrescrita por los consumidores de la librería,
añadiendo un objeto de configuración diferente para el token `RESPONSIVE_CONFIG`
dentro del array `providers` del módulo `JobxUIModule`.

El servicio detecta el tamaño de pantalla del dispositivo (y sus eventuales
modificaciones), y lo compara con los breakpoints con los que ha sido
configurado para determinar qué tamaño de pantalla está siendo utilizado. Los
componentes responsive a los que el servicio es inyectado pueden hacer uso de
esa información.

### Componentes atómicos

El reto solicitaba diseñar un único componente de la librería, y es el único
componente exportado por ella: `GiftsGroupListComponent`.

Sin embargo, para tener un código más legible y con separación de
responsabilidades se han desarrollado subcomponentes privados que son utilizados
por el anterior, a los cuales se delega la mayor parte de las tareas
presentacionales:

* `GiftsGroupCard`: define la vista de un único `GiftGroup` dentro del scroll
  horizontal.
* `Slider`: encapsula los detalles de configuración del componente `Slider` de
  UIKit, para no sobrecargar el componente principal.
* `Responsive`: es una solución alternativa al servicio `ScreenService`: en
  lugar de apelar a la inyección de dependencias se puede hacer que cualquier
  componente responsive herede este componente abstracto. Esta alternativa ha
  sido abandonada porque, si bien es válida en Angular, por alguna razón no
  funciona en Storybook.
