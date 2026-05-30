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
