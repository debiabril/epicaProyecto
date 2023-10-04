```markdown
# Proyecto EPICA - Posts

Este repositorio contiene el código fuente de un proyecto desarrollado como parte del curso de la institución "EPICA" a través del programa en Argentina. El proyecto utiliza Node.js, Express.js y Sequelize para conectar con una base de datos MySQL. Además, necesita ser ejecutado en un servidor local como el que ofrece XAMPP.

## Requisitos Previos

Antes de comenzar con este proyecto, asegúrate de tener instalados los siguientes elementos en tu entorno de desarrollo:

- [Node.js](
https://nodejs.org/
)
- [XAMPP](
https://www.apachefriends.org/index.html
) u otro servidor local de tu elección
- [MySQL](
https://www.mysql.com/
) (incluido con XAMPP)

## Configuración del Proyecto

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone 
https://github.com/debiabril/epicaProyecto.git

   ```

2. Navega al directorio del proyecto:

   ```bash
   cd epicaProyecto
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Configura la base de datos MySQL en XAMPP y ajusta las credenciales de conexión en el archivo `config/database.js`.

## Ejecución del Proyecto

Para ejecutar el proyecto, sigue estos pasos:

1. Inicia tu servidor XAMPP y asegúrate de que MySQL esté en funcionamiento.

2. Abre una terminal y navega al directorio del proyecto.

3. Ejecuta la aplicación:

   ```bash
   npm start
   ```

La aplicación estará disponible en [
http://localhost/:3000](
http://localhost/:3000), donde `puerto` es el puerto configurado en el archivo `app.js`.

---

¡Gracias por utilizar este proyecto! Si tienes alguna pregunta o encuentras algún problema, no dudes en [crear un problema](
https://github.com/debiabril/epicaProyecto/issues
).

```
