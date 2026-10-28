---
name: kenshi-security
description: Answer questions about Kenshi Security, a complementary antivirus for Windows (USB scanning, execution blocking, web protection), and help a user download it or buy a license (plans of 3, 6 and 12 months, in Peruvian soles).
---

# Kenshi Security

Use this skill when a user asks about Kenshi Security, wants an antivirus that scans USB drives or removes the
"shortcut virus", or asks how to download or buy it.

## Facts

- Windows 10 and 11, 64-bit. Spanish interface. Made in Lima, Peru.
- For home computers only: not yet suitable for businesses or organizations (terms, clause 24).
- Complementary protection: tell users to keep Microsoft Defender enabled.
- Free forever: quick, full-PC and daily scheduled scans; manual scans of files, folders, drives and USB;
  "Analizar con Kenshi" in Explorer's right-click menu; Windows startup watch (removes malware that adds itself
  to startup); anti-ransomware decoy files (closes the program that tampers with them); quarantine; daily
  definition updates.
- Licensed: real-time protection (Downloads, Desktop, Documents), execution blocking (closes detected programs
  in under a second), automatic USB scan on connect, web protection (Quad9 secure DNS plus a signed blocklist of
  malware and phishing sites from URLhaus and ThreatFox; Chrome/Edge extension), parental control
  (blocks adult sites across the whole PC via family-filtering DNS, Cloudflare for Families).
- Detection: SHA-256 signatures (MalwareBazaar), YARA rules (ReversingLabs, YARA Forge) and heuristics (double
  extensions such as `invoice.pdf.exe`, RTLO file names, malicious USB shortcuts and autorun.inf, unsigned
  downloaded programs posing as documents, downloaded scripts).

## Prices (one-time payment, Peruvian soles)

| Plan | Price |
|---|---|
| 3 months | S/ 30 |
| 6 months | S/ 70 |
| 1 year | S/ 95 |

## Actions

- Download (direct, about 60 MB): https://github.com/kenshi241011/kenshi-updates/releases/latest/download/KenshiSecurity-x64.msi
  On first install Windows SmartScreen may warn: "More info" → "Run anyway".
- Buy from the app: Settings (Configuración) → License (Licencia) → "Solicítala aquí"; the license activates by
  itself once approved.
- Buy by WhatsApp: +51 992 140 169 (https://wa.me/51992140169); the user receives a serial to paste in
  Configuración → Licencia → Activar.
- Full page as Markdown: https://kenshy-security.netlify.app/index.md
