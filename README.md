# Redes y Comunicaciones · Suite de Estudio

Interactive study material for the **Networks and Communications** course in the Cybersecurity program at Universidad de Palermo, Buenos Aires.

**[View live suite](https://catalinacarlen.github.io/comunicaciones-suite/index.html)**

[Versión en español más abajo.](#español)

---

## English

### About

Thirteen self-contained interactive HTML modules, plus a practice app and a mock-exam app, covering the full course syllabus. Each module runs without a server, needs no external dependencies, and can be shared as a single HTML file. A shared `assets/` folder (`app.js`, `data.js`, `styles.css`) drives all of them, and a common navigation bar links each module to the previous and next one.

The modules go in order: from the evolution of data networks, up through the OSI model and each layer in detail (link, network, transport and application), closing with addressing, routing and the application protocols.

### Modules

| # | Module | Key topics |
|---|--------|------------|
| 01 | **Evolution of data networks** | History and development of data networks, why IP prevailed |
| 02 | **Network classification by coverage** | PAN, LAN, MAN, WAN; topologies; simplex/duplex; hierarchical model |
| 03 | **Protocols and the OSI model** | The 7 layers, MAC and LLC sublayers, TCP/IP comparison, encapsulation |
| 04 | **Circuit and packet switching** | PSTN vs packets, datagrams vs virtual circuits, routing strategies |
| 05 | **Flow and error control** | Stop-and-Wait, sliding window, CRC, parity, FEC, ARQ |
| 06 | **ALOHA, CSMA/CD, Ethernet and wireless** | Media access, Ethernet frame, CSMA/CA, hidden node, WLAN and WPA |
| 07 | **Equipment: hub, bridge, switch** | Devices by OSI layer, collision and broadcast domains |
| 08 | **IP addressing** | Datagram, classes A–E, special and private addresses, classless, IPv6 |
| 09 | **Subnetting** | Masks, logical AND, the bit rule, `2^s` and `2^h − 2` formulas |
| 10 | **VLSM, CIDR, ARP and ICMP** | Variable-length subnets, summarization, routing tables, longest match, ARP, ICMP |
| 11 | **TCP** | Ports, sockets, three-way handshake, sliding window |
| 12 | **UDP** | Datagram service, TCP vs UDP trade-offs |
| 13 | **Application layer** | DNS, DHCP (DORA), email (SMTP/POP/IMAP), HTTP, FTP/TFTP |

Plus two companion apps:

- **[Práctica](practica.html):** calculators and simulators in one place (conversions, subnetting, VLSM, summarization, longest match, ARP, three-way handshake, sliding window, DORA and DNS).
- **[Parciales](parciales.html):** a question bank (multiple choice, true/false, fill-in, matching and flashcards) and a timed mock exam with explained feedback.

#### Thread through the syllabus

```
Evolution -> Classification -> OSI model -> Switching -> Flow & error control
    -> LAN access -> Equipment -> IP addressing -> Subnetting -> VLSM/CIDR
    -> TCP -> UDP -> Application layer
```

### Tech

- Pure HTML/CSS/JS, no dependencies or frameworks
- No build step and no server; every file opens directly in the browser
- Shared `assets/` (engine, content and styles) reused across all modules
- Automatic dark mode via `prefers-color-scheme`, progress saved with `localStorage`
- Mobile responsive

### Local use

```bash
git clone https://github.com/catalinacarlen/comunicaciones-suite
# open index.html in the browser, or any module directly
open index.html
```

---

## Español

Material interactivo para la materia **Redes y Comunicaciones** de la carrera de Ciberseguridad en la Universidad de Palermo.

**[Ver suite en vivo](https://catalinacarlen.github.io/comunicaciones-suite/index.html)**

### Sobre el proyecto

Trece módulos HTML interactivos y autocontenidos, más una app de práctica y otra de simulacros de parcial, que cubren el temario completo de la materia. Cada módulo abre directo en el navegador, sin servidor ni dependencias externas, y se puede compartir como un único archivo. Una carpeta `assets/` compartida (`app.js`, `data.js`, `styles.css`) los alimenta a todos, y una barra de navegación común enlaza cada módulo con el anterior y el siguiente.

Los módulos van en orden: desde la evolución de las redes de datos, suben por el modelo OSI y cada capa en detalle (enlace, red, transporte y aplicación), y cierran con direccionamiento, enrutamiento y los protocolos de aplicación.

### Módulos

| # | Módulo | Temas principales |
|---|--------|-------------------|
| 01 | **Evolución de las redes de datos** | Historia y desarrollo de las redes, por qué se impuso IP |
| 02 | **Clasificación según cobertura** | PAN, LAN, MAN, WAN; topologías; simplex/duplex; modelo jerárquico |
| 03 | **Protocolos y modelo OSI** | Las 7 capas, subcapas MAC y LLC, TCP/IP comparado, encapsulación |
| 04 | **Conmutación de circuitos y paquetes** | PSTN vs paquetes, datagramas vs circuitos virtuales, encaminamiento |
| 05 | **Control de flujo y de errores** | Stop-and-Wait, ventana deslizante, CRC, paridad, FEC, ARQ |
| 06 | **ALOHA, CSMA/CD, Ethernet e inalámbricas** | Acceso al medio, trama Ethernet, CSMA/CA, nodo escondido, WLAN y WPA |
| 07 | **Equipamiento: hub, bridge, switch** | Equipos por capa OSI, dominios de colisión y broadcast |
| 08 | **Direccionamiento IP** | Datagrama, clases A–E, direcciones especiales y privadas, classless, IPv6 |
| 09 | **Subnetting** | Máscaras, AND lógico, regla del bit, fórmulas `2^s` y `2^h − 2` |
| 10 | **VLSM, CIDR, ARP e ICMP** | Subredes de tamaño variable, sumarización, tablas de ruteo, longest match, ARP, ICMP |
| 11 | **Protocolo TCP** | Puertos, sockets, three-way handshake, ventana deslizante |
| 12 | **Protocolo UDP** | Servicio de datagramas, TCP vs UDP |
| 13 | **Capa de aplicación** | DNS, DHCP (DORA), correo (SMTP/POP/IMAP), HTTP, FTP/TFTP |

Más dos apps complementarias:

- **[Práctica](practica.html):** calculadoras y simuladores en un solo lugar (conversores, subnetting, VLSM, sumarización, longest match, ARP, three-way handshake, ventana deslizante, DORA y DNS).
- **[Parciales](parciales.html):** un banco de preguntas (multiple choice, verdadero/falso, completar, unir conceptos y flashcards) y un simulacro de examen cronometrado con corrección explicada.

#### Hilo conductor del temario

```
Evolución -> Clasificación -> Modelo OSI -> Conmutación -> Control de flujo y errores
    -> Acceso al medio -> Equipamiento -> Direccionamiento IP -> Subnetting -> VLSM/CIDR
    -> TCP -> UDP -> Capa de aplicación
```

### Tecnología

- HTML/CSS/JS puro, sin dependencias ni frameworks
- Sin build step y sin servidor; cada archivo abre directo en el navegador
- `assets/` compartida (motor, contenido y estilos) reutilizada por todos los módulos
- Dark mode automático vía `prefers-color-scheme`, progreso guardado con `localStorage`
- Responsive para móvil

### Uso local

```bash
git clone https://github.com/catalinacarlen/comunicaciones-suite
# abrir index.html en el navegador, o cualquier módulo directamente
open index.html
```

---

Made by [Catalina Carlen](https://github.com/catalinacarlen) · Universidad de Palermo, Cybersecurity
