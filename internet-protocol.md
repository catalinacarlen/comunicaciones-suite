# Direccionamiento IP

> Guia de estudio - Universidad de Palermo - Ciberseguridad

---

## Tabla de contenidos

1. [¿Que es IP?](#que-es-ip)
2. [El datagrama](#el-datagrama)
3. [Direcciones IPv4](#direcciones-ipv4)
4. [Casos especiales](#casos-especiales)
5. [Limitaciones de IPv4](#limitaciones-de-ipv4)
6. [IPv6](#ipv6)

---

## Que es IP

### ¿Por que existe IP?

Internet conecta dispositivos de distintos fabricantes sobre cables, fibra, Wi-Fi o satelite. Para que todo funcione necesita un "idioma comun": el **Internet Protocol (IP)**. Su exito se basa en cuatro pilares:

- **Estandares abiertos** - cualquier fabricante puede implementarlo. Documentos publicos: **RFC (Request for Comments)**. Tambien existen **Military Standards (MIL STD)** e **Internet Engineering Notes (IEN)**.
- **Independencia fisica** - IP funciona igual sobre Ethernet, Wi-Fi, fibra o cualquier otro medio.
- **Direccionamiento universal** - cada dispositivo tiene una direccion unica en toda la red.
- **Protocolos de alto nivel estandarizados** - HTTP, FTP, DNS, SMTP se construyen sobre IP.

### Arquitectura en capas TCP/IP

No hay acuerdo universal sobre cuantas capas tiene TCP/IP (se usan de 3 a 5 segun el autor). El modelo mas comun tiene 4:

| Capa | Rol | Ejemplos |
|---|---|---|
| **Aplicacion** | Aplicaciones y procesos que usan la red | HTTP, FTP, DNS, SMTP |
| **Transporte** | Servicios de entrega de datos entre nodos | TCP, UDP |
| **Internet** | Define el datagrama y maneja el enrutamiento | IP, ICMP, ARP |
| **Acceso de red** | Rutinas para acceder el medio fisico | Ethernet, Wi-Fi |

### La capa internet: el corazon de todo

La capa internet esta sobre la capa de acceso de red. El protocolo IP (RFC 791) es el protocolo mas importante. IP provee el servicio de entrega de paquetes sobre el cual estan construidas las redes. **Todos los datos fluyen a través de IP**, sin importar su destino final.

**Funciones de IP:**
- Define el **datagrama**, la unidad basica de transmision en internet
- Define el **esquema de direccionamiento** de internet
- Mueve datos entre la capa de acceso de red y la capa de transporte

**Caracteristicas de IP:**
- **Connectionless**: no intercambia informacion de control (handshake) antes de transmitir
- **Unreliable**: no corrige ni detecta errores. Otros protocolos (TCP) hacen esas tareas

### Red de conmutacion de paquetes

Internet es una **red de conmutacion de paquetes**. Un paquete es un bloque de datos que lleva la informacion necesaria para ser entregado.

> **Concepto clave:** CADA PAQUETE VIAJA INDEPENDIENTE DE CUALQUIER OTRO PAQUETE. Pueden tomar rutas distintas y llegar en diferente orden.

---

## El datagrama

El datagrama es el formato de paquete definido por IP. Tiene dos partes: el **header** (encabezado con informacion de control) y los **datos**.

### Campos del header IPv4

| Campo | Funcion | Dato clave |
|---|---|---|
| **Version** | Version de IP | 4 |
| **IHL** | Internet Header Length en palabras de 32 bits | Min. 5 palabras = 20 bytes |
| **Tipo de servicio** | Prioridad del paquete (QoS) | Usado para voz/video |
| **Longitud total** | Tamano completo del datagrama | Header + datos |
| **Identificacion** | Identifica fragmentos del mismo paquete | Para rearmar en destino |
| **Flags** | Banderas de control de fragmentacion | Indica si hay mas fragmentos |
| **Offset de fragmentacion** | Posicion del fragmento en el paquete original | Para rearmar en orden |
| **TTL (Tiempo de vida)** | Evita que paquetes circulen infinitamente | Se decrementa en cada salto; al llegar a 0 se descarta |
| **# de protocolo** | Protocolo encapsulado dentro | 6 = TCP, 17 = UDP |
| **Checksum del header** | Verificacion de integridad del header | Solo del header, no de los datos |
| **Direccion origen** | IP del emisor | Ej: 168.176.25.43 |
| **Direccion destino** | IP del receptor | Ej: 168.176.1.70 |
| **Opciones** | Campo opcional adicional | Puede incluir padding |

### Fragmentacion

Distintas redes tienen un tamano maximo de paquete llamado **MTU (Maximum Transmission Unit)**. Hay fragmentacion al pasar de un MTU mayor a uno menor. Los campos Identificacion, Flags y Offset permiten rearmar los fragmentos en el destino.

> Ejemplo: Ethernet tiene MTU de 1500 bytes. Si un paquete de 3000 bytes necesita pasar por esa red, IP lo divide en 2 fragmentos que se rearman en el destino.

---

## Direcciones IPv4

### Que es una direccion IP

Las direcciones IP identifican unicamente un **punto de acceso (interfaz)** a la red, no un dispositivo completo. Un router o host multi-homed tienen varias IPs (una por interfaz).

- Son numeros de **32 bits**, expresados en notacion decimal con puntos
- Tienen significado global en Internet
- Asignadas por **InterNIC (Internet Network Information Center)**
- Se mapean a nombres legibles mediante **DNS**

### Estructura de la direccion

Cada interfaz recibe una **direccion logica unica de 32 bits** con dos partes:

- **Parte de RED** - identifica la red fisica. La asigna InterNIC, el ISP o el administrador. Se usa para el ruteo.
- **Parte de HOST** - identifica el dispositivo dentro de esa red. Se asigna localmente.

En **1984** se agrega un tercer elemento: las **subnets**. Con el direccionamiento classless (CIDR) se elimina la restriccion de longitudes fijas.

### Tres formas de escribir la misma direccion

| Formato | Ejemplo |
|---|---|
| Decimal con puntos (la mas usada) | `128.223.254.10` |
| Binaria | `10000000.11011111.11111110.00001010` |
| Hexadecimal | `80.DF.FE.0A` |

> Truco: cada numero separado por punto es 1 byte (8 bits). Rango por seccion: 0 a 255.

### Clases de direcciones IPv4

El sistema clasful original define 5 clases. Los primeros bits del primer byte determinan la clase:

| Clase | Bits iniciales | Rango | Parte RED | Parte HOST | Redes / Hosts |
|---|---|---|---|---|---|
| **A** | `0` | 0.0.0.0 - 127.255.255.255 | 1 byte | 3 bytes | 126 / 16.777.214 |
| **B** | `10` | 128.0.0.0 - 191.255.255.255 | 2 bytes | 2 bytes | 16.382 / 65.534 |
| **C** | `110` | 192.0.0.0 - 223.255.255.255 | 3 bytes | 1 byte | 2.097.150 / 254 |
| **D** | `1110` | 224.0.0.0 - 239.255.255.255 | Multicast - ID grupo | - | - |
| **E** | `11110` | 240.0.0.0 - 247.255.255.255 | Experimental - reservado | - | - |

**Direccion especial: Loopback**
- La `127.0.0.0` es la direccion de loopback
- Se usa para comunicaciones de procesos en la misma maquina
- Nunca se propaga a la red

### Resolucion de direcciones

Las IPs son identificadores en una **red virtual**; en ultima instancia deben mapearse a direcciones fisicas. Este proceso se denomina **resolucion de direcciones**.

> Ejemplo: ARP (Address Resolution Protocol) convierte una IP a una direccion MAC de Ethernet.

---

## Casos especiales

### Direcciones con significado especial

Usando la notacion `<Red, Host>`:

| Notacion | Significado | Ejemplo |
|---|---|---|
| `<0, 0>` | Mi propio host (durante arranque, sin IP asignada) | `0.0.0.0` |
| `<0, H>` | Host indicado dentro de mi red | `0.0.0.10` |
| `<R, 0>` | Red indicada (todos los bits de nodo a 0) | `192.168.1.0` |
| Todos 1 | Broadcast local (llega a todos en la red local) | `255.255.255.255` |
| `<R, Todos 1>` | Broadcast dirigido (todos en esa red especifica) | `192.168.1.255` |
| `<127, H>` | Loopback - nunca sale a la red | `127.0.0.1` |

### Reglas resumidas

| Regla | Resultado | Ejemplo con /24 |
|---|---|---|
| Todos los bits de nodo a 0 | Representa la red | `128.223.254.0/24` |
| Todos los bits a 1 | Broadcast local o limitado | `255.255.255.255` |
| Todos los bits de nodo a 1 | Broadcast dirigido | `128.223.254.255` |
| Rango 127.0.0.0/8 | Loopback | `127.0.0.1` |

### Notacion CIDR (prefijo)

La mascara de red define que parte de la IP es RED y que parte es HOST. La mascara se puede expresar como la cantidad de bits a 1:

```
255.255.255.0 -> tiene 24 bits a 1 -> se escribe /24
128.223.254.10/24 -> red: 128.223.254.0 | host: .10
```

> Truco: /24 = las primeras 3 secciones son red. /16 = las primeras 2. /8 = solo la primera.

### Direcciones privadas (no salen a internet)

Estos rangos estan reservados para redes internas. Los routers no los propagan a internet publico:

| Rango | Equivalencia | Uso tipico |
|---|---|---|
| `10.0.0.0 - 10.255.255.255` | Una clase A completa | Redes corporativas grandes |
| `172.16.0.0 - 172.31.255.255` | 16 clases B | Redes medianas |
| `192.168.0.0 - 192.168.255.255` | 255 clases C | Hogares y oficinas pequenas |

> Tu router de casa seguramente usa 192.168.x.x. La IP que "ve" internet es otra (la publica de tu ISP).

---

## Limitaciones de IPv4

### Problemas del esquema original

- **Uso ineficiente del espacio** - los prefijos de longitud fija desperdician direcciones. Una empresa que necesitaba 300 hosts debia tomar una Clase B (65.534 hosts) y desperdiciar ~65.000.
- **Agotamiento y escalabilidad** - el crecimiento de internet evidencio la falta de escalabilidad y el agotamiento de clases B.
- **Problema de movilidad (IP Mobility)** - codificar la red en la IP implica que si un host cambia de red, cambia su direccion. Esto rompe conexiones activas.
- **Perdida de subredes** - se perdian dos subredes en cada division: la direccion de red (.0) y la de broadcast (.255).

> Las viejas clases A, B, C no tienen significado en el internet de hoy.

### Soluciones a corto plazo (IPv4)

**CIDR - Classless Interdomain Routing:**
Los routers ya no consideran A, B, C como /8, /16, /24. Trabajan con prefijos de cualquier longitud (/20, /22, /25...). Permite asignar bloques exactos segun necesidad.

**VLSM - Variable Length Subnet Masks:**
Los routers no asumen que todas las subredes son del mismo tamano. Distintas subredes dentro de la misma red pueden tener mascaras de diferente longitud.

> Pregunta trampa de examen: ¿128.223.254.0/24 es una Clase C? Tecnicamente el primer byte 128 cae en rango de Clase B, pero tiene mascara /24. Con CIDR la clase ya no importa - lo que importa es el prefijo.

Estos problemas se solucionan a corto plazo con CIDR y VLSM, pero definitivamente se solucionan en **IPv6**.

---

## IPv6

### Por que IPv6

IPv4 tiene 32 bits = aprox. 4.300 millones de direcciones (ya agotadas). IPv6 usa **128 bits**: permite mas de 340 sextillones de direcciones.

| | IPv4 | IPv6 |
|---|---|---|
| Bits | 32 | 128 |
| Direcciones aprox. | 4.300 millones | 340 sextillones |

### Cambios y mejoras de IPv6

- **Direccionamiento expandido** - 32 a 128 bits, mas niveles de jerarquia y autoconfiguración mas simple.
- **Multicast mejorado** - campo de ambito ("scope") agregado a las direcciones multicast.
- **Anycast (nuevo)** - tipo de direccion para enviar un paquete al nodo mas cercano de un grupo.
- **Header simplificado** - reduce el costo de procesamiento en routers.
- **Mejor soporte de opciones** - reenvio mas eficiente, sin restricciones en longitud de opciones.
- **Etiquetamiento de flujos** - marca paquetes para manejo especial (QoS).
- **Seguridad integrada** - extensiones para autenticacion, integridad y confidencialidad. En IPv4 esto era opcional (IPsec).
- **Sin broadcast** - no hay direcciones broadcast en IPv6. Todo se hace con multicast.

### Campos del header IPv6

| Campo | Funcion |
|---|---|
| **Version** | Version del protocolo (6) |
| **Clase de trafico** | Prioridad del paquete |
| **Etiqueta de flujo** | Identifica flujo para manejo especial (QoS) |
| **Longitud de los datos** | Tamano del payload sin contar el header |
| **Siguiente header** | Tipo de header o protocolo que viene despues |
| **Limite de saltos** | Equivalente al TTL de IPv4 |
| **Direccion IP origen** | 128 bits |
| **Direccion IP destino** | 128 bits |

### Tipos de direcciones IPv6

Hay tres tipos. Todas se asignan a **interfaces**, no a nodos:

| Tipo | Significado | Equivalente IPv4 |
|---|---|---|
| **Unicast** | Un paquete a una interfaz especifica | Direccion normal |
| **Anycast** | Un paquete al nodo mas cercano del grupo | No existe en IPv4 |
| **Multicast** | Un paquete a multiples interfaces suscritas | Clase D (224.x.x.x) |

### Como se escribe una direccion IPv6: 3 formatos

**Formato 1 - completo:**
```
FEDC:BA98:7654:3210:FEDC:BA98:7654:3210
1080:0:0:0:8:800:200C:417A
```

**Formato 2 - comprimido con "::"**
El `::` indica uno o mas grupos de 16 bits en cero. Solo puede aparecer una vez.

| Completa | Comprimida | Tipo |
|---|---|---|
| `1080:0:0:0:8:800:200C:417A` | `1080::8:800:200C:417A` | Unicast |
| `FF01:0:0:0:0:0:0:101` | `FF01::101` | Multicast |
| `0:0:0:0:0:0:0:1` | `::1` | Loopback (equiv. 127.0.0.1) |
| `0:0:0:0:0:0:0:0` | `::` | Unspecified |

**Formato 3 - mixto IPv4/IPv6:**
```
0:0:0:0:0:0:13.1.68.3       -> comprimida: ::13.1.68.3
0:0:0:0:0:FFFF:129.144.52.38 -> comprimida: ::FFFF:129.144.52.38
```

### Direcciones IPv6 con IPv4 embebida

**IPv4-compatible IPv6:**
- Nodos IPv6 que hacen tunel sobre infraestructura IPv4
- Formato: 80 bits de ceros + 16 bits de ceros + 32 bits de IPv4
- Ejemplo: `::13.1.68.3`

**IPv4-mapped IPv6:**
- Representa IPs de nodos IPv4 como direcciones IPv6
- Formato: 80 bits de ceros + 16 bits en FFFF + 32 bits de IPv4
- Ejemplo: `::FFFF:129.144.52.38`
- Diferencia: los 16 bits centrales son FFFF en vez de 0000
