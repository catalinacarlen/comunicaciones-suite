# Comunicaciones · Study Suite

Interactive study material for the **Networks and Communications** course in the Cybersecurity program at Universidad de Palermo, Buenos Aires.

**[View live suite](https://catalinacarlen.github.io/comunicaciones-suite/index.html)**

[Versión en español más abajo.](#español)

---

## English

### About

Eleven self-contained HTML mini-apps covering the full course syllabus. Each one runs without a server, needs no internet beyond the first load, and can be shared as a single HTML file.

The modules go in order, from abstract concepts down to the physical medium, back up through the OSI model, and finally to the tools. Each one picks up where the last left off.

### Modules

| # | Module | Key topics |
|---|--------|------------|
| 01 | **Concepts and Definitions** | Core vocabulary, communication primitives, CIA triad |
| 02 | **Physical media and signal processing** | Coaxial, twisted pair, fiber optics, modulation, the 8 stages of data transmission |
| 03 | **Topologies, transmission and coverage** | Star, mesh, ring, bus; simplex/duplex; PAN, LAN, MAN, WAN; hierarchical model |
| 04 | **Data networks and evolution** | TDM, SDH, ATM, IP dominance; why IP won over technically superior alternatives |
| 05 | **Protocols and the OSI model** | The 7 layers, MAC and LLC sublayers, TCP/IP comparison, TCP vs UDP, encapsulation per layer |
| 06 | **Circuit and packet switching** | PSTN vs packets, datagrams vs virtual circuits, routing strategies |
| 07 | **ALOHA, CSMA/CD, Ethernet and WiFi** | Evolution of media access control, Ethernet frame, CSMA/CA, hidden node problem, WPA |
| 08 | **Flow and error control** | Stop-and-Wait, sliding window, CRC, parity, FEC, ARQ mechanisms |
| 09 | **IP addressing** | IPv4, IPv6, classes, masks, subnetting, CIDR, NAT, IPSec |
| 10 | **Physical equipment** | Hub, bridge, switch, router, and firewall ordered by OSI layer; collision and broadcast domains |
| 11 | **Tools and cybersecurity** | Ping, traceroute, Wireshark, nmap, aircrack-ng, Burp Suite; each tool mapped to its OSI layer |

#### Thread through the syllabus

```
Fundamentals -> Physical layer -> Architecture -> Evolution -> OSI model
    -> Switching -> Layer 2 (MAC) -> Layer 2 (LLC) -> Layer 3 (IP) -> Equipment -> Tools
```

### Tech

- Pure HTML/CSS/JS, no dependencies or frameworks
- No build step and no server; every file opens directly in the browser
- Automatic dark mode via `prefers-color-scheme`
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

Once mini-aplicaciones HTML independientes que cubren el temario completo de la materia. Cada una es autocontenida: no necesita servidor, no requiere conexión más allá de la primera carga, y se puede compartir como un único archivo local.

Los módulos van en orden, desde los conceptos abstractos hasta las herramientas concretas, con un hilo conductor que conecta cada uno con el anterior y el siguiente.

### Módulos

| # | Módulo | Temas principales |
|---|--------|-------------------|
| 01 | **Conceptos y Definiciones** | Vocabulario base, primitivas de comunicación, tríada CIA |
| 02 | **Medios físicos y procesamiento de la señal** | Coaxial, par trenzado, fibra óptica, modulación, las 8 etapas del viaje de la información |
| 03 | **Topologías, transmisión y cobertura** | Estrella, malla, anillo, bus; simplex/duplex; PAN, LAN, MAN, WAN; modelo jerárquico |
| 04 | **Redes de datos y evolución** | TDM, SDH, ATM, dominio de IP; por qué IP ganó sobre alternativas técnicamente superiores |
| 05 | **Protocolos y modelo OSI** | Las 7 capas, subcapas MAC y LLC, TCP/IP comparado, TCP vs UDP, encapsulación por capa |
| 06 | **Conmutación de circuitos y paquetes** | PSTN vs paquetes, datagramas vs circuitos virtuales, estrategias de encaminamiento |
| 07 | **ALOHA, CSMA/CD, Ethernet y WiFi** | Evolución del acceso al medio, trama Ethernet, CSMA/CA, nodo escondido, WPA |
| 08 | **Control de flujo y errores** | Stop-and-Wait, ventana deslizante, CRC, paridad, FEC, mecanismos ARQ |
| 09 | **Direccionamiento IP** | IPv4, IPv6, clases, máscaras, subnetting, CIDR, NAT, IPSec |
| 10 | **Equipos físicos** | Hub, bridge, switch, router y firewall ordenados por capa OSI; dominios de colisión y broadcast |
| 11 | **Herramientas y ciberseguridad** | Ping, traceroute, Wireshark, nmap, aircrack-ng, Burp Suite; cada herramienta mapeada a su capa OSI |

#### Hilo conductor

```
Fundamentos -> Capa física -> Arquitectura -> Evolución -> Modelo OSI
     -> Conmutación -> Capa 2 (MAC) -> Capa 2 (LLC) -> Capa 3 (IP) -> Equipos -> Herramientas
```

### Tecnología

- HTML/CSS/JS puro, sin dependencias ni frameworks
- Sin build step y sin servidor; cada archivo abre directo en el navegador
- Dark mode automático vía `prefers-color-scheme`
- Responsive para móvil

### Uso local

```bash
git clone https://github.com/catalinacarlen/comunicaciones-suite
# abrir index.html en el navegador, o cualquier módulo directamente
open index.html
```

---

Made by [Catalina Carlen](https://github.com/catalinacarlen) · Universidad de Palermo, Cybersecurity
