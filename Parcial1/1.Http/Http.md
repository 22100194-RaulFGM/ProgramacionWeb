# Protocolo de Transmisión de Hipertexto (HTTP)

## Descripción
El protocolo HTTP (Hypertext Transfer Protocol) es la base de la comunicación en la World Wide Web. Permite la transferencia de datos entre servidores y clientes, facilitando la visualización de páginas web y el intercambio de información.

## Estructura del Protocolo
### Métodos HTTP
- **GET:** Solicita información de un recurso específico.
- **POST:** Envía datos al servidor para crear o actualizar un recurso.
- **PUT:** Actualiza un recurso existente.
- **DELETE:** Elimina un recurso específico.

### Códigos de Estado
- **200:** OK (Operación exitosa)
- **404:** Not Found (Recurso no encontrado)
- **500:** Internal Server Error (Error del servidor)

## Funcionamiento
Cuando un cliente (como un navegador web) realiza una solicitud HTTP, el servidor procesa la petición y responde con los datos solicitados junto con un código de estado que indica el resultado de la operación.

### Ejemplo de Interacción HTTP
1. El usuario ingresa `https://www.example.com` en su navegador.
2. El navegador envía una solicitud HTTP GET al servidor.
3. El servidor responde con el contenido de la página y un código de estado 200 (OK).

## Ventajas y Desventajas
### Ventajas
- Simple y fácil de implementar.
- Compatible con múltiples plataformas.

### Desventajas
- HTTP estándar no es seguro, ya que la información se transmite en texto plano.
- Vulnerable a ataques de interceptación.

## Conclusión
El protocolo HTTP ha sido fundamental para el desarrollo de Internet, y aunque tiene algunas limitaciones, sigue siendo una pieza clave en la comunicación web. Su evolución hacia HTTPS ha mejorado considerablemente la seguridad en las comunicaciones.

## Referencias
- [Documentación Oficial de HTTP](https://developer.mozilla.org/es/docs/Web/HTTP)
- [Introducción a HTTP en W3Schools](https://www.w3schools.com/tags/ref_httpmethods.asp)
