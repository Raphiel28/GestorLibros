export async function getLibros() {
    try {
      const response = await fetch("https://localhost:7272/api/Libros");
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return null; 
    }
  }

  export async function getAutores() {
    try {
      const response = await fetch("https://localhost:7272/api/Autor");
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return null; 
    }
  }


  export async function deleteLibro(id) {
    try {
      const response = await fetch(`https://localhost:7272/api/Libros/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar el libro con ID ${id}`);
      }
  
      console.log(`Libro con ID ${id} eliminado correctamente`);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }


  export async function deleteAutor(id) {
    try {
      const response = await fetch(`https://localhost:7272/api/Autor/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar el autor con ID ${id}`);
      }
  
      console.log(`Autor con ID ${id} eliminado correctamente`);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }


  export async function postLibro(libro) {
    try {
      const response = await fetch('https://localhost:7272/api/Libros', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(libro),
      });
  
      if (!response.ok) {
        throw new Error('Error al registrar el libro');
      }
  
      const data = await response.json(); 
      console.log('Libro registrado:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }



  export async function postAutor(autor) {
    try {
      const response = await fetch('https://localhost:7272/api/Autor', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(autor),
      });
  
      if (!response.ok) {
        throw new Error('Error al registrar el autor');
      }
  
      const data = await response.json(); 
      console.log('Autor registrado:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }


 export async function getLibroById(id) {
    try {
      const response = await fetch(`https://localhost:7272/api/Libros/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('No se pudo obtener el libro');
      }
  
      const data = await response.json();
      console.log('Libro obtenido:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }



  export async function getAutorById(id) {
    try {
      const response = await fetch(`https://localhost:7272/api/Autor/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('No se pudo obtener el autor');
      }
  
      const data = await response.json();
      console.log('Autor obtenido:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }


  export async function updateLibro(id, libroData) {
    try {
      const response = await fetch(`https://localhost:7272/api/Libros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(libroData), 
      });
  
      if (!response.ok) {
        throw new Error('No se pudo actualizar el libro');
      }
  
      return await response.json(); 
    } catch (error) {
      throw error;
    }
  }


  export async function updateAutor(id, autorData) {
    try {
      const response = await fetch(`https://localhost:7272/api/Autor/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(autorData), 
      });
  
      if (!response.ok) {
        throw new Error('No se pudo actualizar el autor');
      }
  
      return await response.json(); 
    } catch (error) {
      throw error;
    }
  }