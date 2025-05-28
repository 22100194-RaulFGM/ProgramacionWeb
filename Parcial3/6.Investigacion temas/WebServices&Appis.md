## Web Services y APIs

### ¿Qué son?

- **Web Services**: Son sistemas software diseñados para soportar la interoperabilidad máquina a máquina a través de una red. Permiten que aplicaciones diferentes se comuniquen entre sí mediante estándares.
- **APIs (Application Programming Interfaces)**: Conjunto de definiciones y protocolos que permiten que dos aplicaciones se comuniquen. Una API puede ser pública, privada o restringida a ciertos socios.

---

### Tipos principales de Web Services y APIs

#### SOAP (Simple Object Access Protocol)

- **Características**:
  - Protocolo estándar basado en XML.
  - Opera sobre HTTP, SMTP, TCP.
  - Contratos estrictos mediante WSDL (Web Services Description Language).
  - Soporta transacciones, seguridad, confiabilidad.
- **Ventajas**:
  - Estándar maduro.
  - Amplio soporte en entornos empresariales.
  - Ideal para operaciones complejas.
- **Desventajas**:
  - Verbosidad del XML.
  - Menor flexibilidad.
  - Sobrecarga de red.

---

#### REST (Representational State Transfer)

- **Características**:
  - Arquitectura que utiliza HTTP y principios como recursos, identificadores (URIs), métodos (GET, POST, PUT, DELETE).
  - Ligero, simple, sin estado.
  - Respuestas en JSON o XML.
- **Ventajas**:
  - Simplicidad.
  - Eficiencia.
  - Amplio uso en APIs modernas.
- **Desventajas**:
  - Menor soporte para operaciones avanzadas (como transacciones).
  - No tiene un estándar formal.

---

#### GraphQL

- **Características**:
  - Lenguaje de consulta para APIs.
  - Permite a los clientes especificar exactamente qué datos necesitan.
  - Una única petición para múltiples recursos.
- **Ventajas**:
  - Optimización de datos: sin under-fetching ni over-fetching.
  - Tipado fuerte.
  - Evolución flexible del esquema.
- **Desventajas**:
  - Curva de aprendizaje.
  - Necesita control para evitar consultas muy costosas.

---

### APIs más usadas

- **Google Maps API**: Para integrar mapas y geolocalización.
- **Twitter API**: Para acceder a datos y funcionalidades de Twitter.
- **Facebook Graph API**: Para interactuar con la plataforma de Facebook.
- **Stripe API**: Para pagos online.
- **Twilio API**: Para comunicaciones (mensajes, llamadas).
- **OpenWeatherMap API**: Para obtener información meteorológica.
