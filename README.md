# API Gestor de Tareas - Frontend

Este es el proyecto de **Frontend** para interactuar con la **API Gestor de Tareas**. Está desarrollado con **React** utilizando `npx create-react-app`.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** (versión recomendada: 16 o superior)
- **npm** (se instala junto con Node.js)
- **React** (este proyecto usa `create-react-app`)

## Instalación

Sigue estos pasos para configurar e instalar el proyecto en tu entorno local:

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina:


git clone https://github.com/tu_usuario/nombre_del_repositorio_frontend.git

### 2. Instalar dependencias
Una vez que el repositorio esté clonado, navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

cd nombre_del_repositorio_frontend
npm install

### 3. Verificar configuración del puerto en APIcontext.js
Es importante asegurarse de que el puerto configurado en el archivo APIcontext.js sea el correcto para que el frontend pueda comunicarse con el backend.

Abre el archivo src/APIcontext.js y verifica que la URL de la API esté configurada correctamente. Asegúrate de que el puerto en el que corre el backend coincida con el configurado en el frontend.


## 4. Abrir el proyecto en Visual Studio Code

Abre Visual Studio Code o el editor de tu preferencia.
Abre la carpeta donde clonaste el proyecto.

### 5. Ejecutar el Frontend
En la terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando para iniciar la aplicación React:

npm start
Esto abrirá el proyecto en tu navegador, generalmente en la URL http://localhost:3000.

### 6. Probar la conexión
Asegúrate de que el frontend esté correctamente configurado para realizar peticiones al backend. Abre tu navegador y verifica que puedas interactuar con la API, como listar las tareas o hacer peticiones de prueba.
