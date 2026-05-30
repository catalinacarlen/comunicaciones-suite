# Comunicaciones - Study Suite

Interactive study material for the **Networks and Communications** course in the Cybersecurity program at Universidad de Palermo, Buenos Aires.

**[View live suite](https://catalinacarlen.github.io/comunicaciones-suite/index.html)**

---

## About

Eleven self-contained HTML mini-apps covering the full course syllabus. Each module runs without a server, requires no internet connection beyond the initial load, and can be shared as a single HTML file.

The apps follow an ascending pedagogical order - from abstract concepts down to the physical medium, back up through the OSI model, and finally to concrete tools - with each module opening where the previous one left off.

---

## Modules

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

### Thread through the syllabus

```
Fundamentals -> Physical layer -> Architecture -> Evolution -> OSI model
    -> Switching -> Layer 2 (MAC) -> Layer 2 (LLC) -> Layer 3 (IP) -> Equipment -> Tools
```

---

## Tech

- Pure HTML/CSS/JS, no dependencies or frameworks
- No build step, no server - every file opens directly in the browser
- Automatic dark mode via `prefers-color-scheme`
- Mobile responsive

---

## Local use

```bash
git clone https://github.com/catalinacarlen/comunicaciones-suite
# open index.html in the browser, or any module directly
open index.html
```

---

Made by [Catalina Carlen](https://github.com/catalinacarlen) - Universidad de Palermo, Cybersecurity

---
---

# Comunicaciones - Suite de Estudio

Material interactivo para la materia **Redes y Comunicaciones** de la carrera de Ciberseguridad en la Universidad de Palermo.

**[Ver suite en vivo](https://catalinacarlen.github.io/comunicaciones-suite/index.html)**

---

## Sobre el proyecto

Once mini-aplicaciones HTML independientes que cubren el temario completo de la materia. Cada una es autocontenida: no requiere servidor, no necesita conexion adicional, y puede abrirse como un unico archivo local.

Las apps siguen un orden pedagogico ascendente, desde conceptos abstractos hasta herramientas concretas, con un hilo conductor que conecta cada modulo con el anterior y el siguiente.

---

## Modulos

| # | Modulo | Temas principales |
|---|--------|-------------------|
| 01 | **Conceptos y Definiciones** | Vocabulario base, primitivas de comunicacion, triada CIA |
| 02 | **Medios fisicos y procesamiento de la senal** | Coaxial, par trenzado, fibra optica, modulacion, las 8 etapas del viaje de la informacion |
| 03 | **Topologias, transmision y cobertura** | Estrella, malla, anillo, bus; simplex/duplex; PAN, LAN, MAN, WAN; modelo jerarquico |
| 04 | **Redes de datos y evolucion** | TDM, SDH, ATM, dominio de IP; por que IP gano sobre alternativas tecnicamente superiores |
| 05 | **Protocolos y modelo OSI** | Las 7 capas, subcapas MAC y LLC, TCP/IP comparado, TCP vs UDP, encapsulacion por capa |
| 06 | **Conmutacion de circuitos y paquetes** | PSTN vs paquetes, datagramas vs circuitos virtuales, estrategias de encaminamiento |
| 07 | **ALOHA, CSMA/CD, Ethernet y WiFi** | Evolucion del acceso al medio, trama Ethernet, CSMA/CA, nodo escondido, WPA |
| 08 | **Control de flujo y errores** | Stop-and-Wait, ventana deslizante, CRC, paridad, FEC, mecanismos ARQ |
| 09 | **Direccionamiento IP** | IPv4, IPv6, clases, mascaras, subnetting, CIDR, NAT, IPSec |
| 10 | **Equipos fisicos** | Hub, bridge, switch, router y firewall ordenados por capa OSI; dominios de colision y broadcast |
| 11 | **Herramientas y ciberseguridad** | Ping, traceroute, Wireshark, nmap, aircrack-ng, Burp Suite; cada herramienta mapeada a su capa OSI |

### Hilo conductor

```
Fundamentos -> Capa fisica -> Arquitectura -> Evolucion -> Modelo OSI
     -> Conmutacion -> Capa 2 (MAC) -> Capa 2 (LLC) -> Capa 3 (IP) -> Equipos -> Herramientas
```

---

## Tecnologia

- HTML/CSS/JS puro, sin dependencias ni frameworks
- Sin build step, sin servidor - cada archivo abre directo en el navegador
- Dark mode automatico via `prefers-color-scheme`
- Responsive para movil

---

## Uso local

```bash
git clone https://github.com/catalinacarlen/comunicaciones-suite
# abrir index.html en el navegador, o cualquier modulo directamente
open index.html
```

---

Hecho por [Catalina Carlen](https://github.com/catalinacarlen) - Universidad de Palermo, Ciberseguridad
