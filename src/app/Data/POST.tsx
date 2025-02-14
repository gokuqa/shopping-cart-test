// Definimos una interfaz para el cuerpo de la respuesta de la API.
interface ResponseData {
    message?: string; // Ejemplo de campo opcional.
}

// Función para enviar datos usando el método POST
export const postData = async (data: unknown): Promise<void> => {
    console.log('Datos a enviar:', data); // Para verificar los datos antes de enviarlos

    try {
        // Realizamos la solicitud POST
        //no tenemos un endpoint asi que solo usamos un strind
        const respuesta = await fetch('simulaEndpoint', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convertimos el objeto `data` a JSON
        });

        // Verificamos si la respuesta es exitosa
        if (!respuesta.ok) {
            // Manejamos los diferentes posibles códigos de error HTTP
            const errorMessage = `Error ${respuesta.status}: ${respuesta.statusText || 'Problema desconocido'}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        // Intentamos obtener los datos de la respuesta en formato JSON
        const resultado: ResponseData = await respuesta.json();

        // Mostramos los resultados
        console.log('Resultado de la solicitud:', resultado);

    } catch (error) {
        // Manejamos el error de la solicitud
        // Si el error es un objeto `Error`, mostramos su mensaje, sino mostramos un mensaje genérico
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        console.error('Error durante la solicitud:', errorMessage);
    }
};
