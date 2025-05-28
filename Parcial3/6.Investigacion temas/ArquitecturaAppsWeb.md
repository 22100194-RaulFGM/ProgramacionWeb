## Arquitectura de Aplicaciones Web

### Monolítica

- **Definición**: Es un tipo de arquitectura donde todos los componentes de la aplicación (interfaz, lógica de negocio, acceso a datos) están integrados en una única aplicación.
- **Características**:
  - Todo el código se despliega como una única unidad.
  - Dependencias internas fuertes.
  - Difícil de escalar por partes.
- **Ventajas**:
  - Desarrollo y despliegue sencillos.
  - Menor complejidad inicial.
  - Buena para proyectos pequeños.
- **Desventajas**:
  - Difícil mantenimiento al crecer.
  - Riesgo de fallos globales.
  - Escalabilidad limitada.

---

### Arquitectura en Capas

- **Definición**: Organiza la aplicación en capas separadas por responsabilidades (presentación, negocio, datos).
- **Características**:
  - Separación de preocupaciones.
  - Cada capa tiene responsabilidades bien definidas.
  - Comunicación entre capas adyacentes.
- **Ventajas**:
  - Mantenibilidad mejorada.
  - Reusabilidad de componentes.
  - Facilidad para pruebas.
- **Desventajas**:
  - Puede haber sobrecarga por excesiva separación.
  - Riesgo de dependencias cruzadas si no se controla bien.

---

### Microservicios

- **Definición**: Arquitectura que divide la aplicación en servicios pequeños e independientes, cada uno responsable de una funcionalidad específica.
- **Características**:
  - Servicios autónomos, desplegables independientemente.
  - Comunicación mediante APIs ligeras (REST, gRPC).
  - Escalabilidad individual por servicio.
- **Ventajas**:
  - Flexibilidad tecnológica.
  - Escalado específico.
  - Resiliencia: fallos aislados.
- **Desventajas**:
  - Complejidad en la orquestación y despliegue.
  - Necesidad de herramientas para monitoreo, logging, tracing.
  - Requiere una buena estrategia de manejo de datos distribuidos.

---
