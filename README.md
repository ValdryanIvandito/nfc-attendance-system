# NFC Attendance System

NFC Attendance System is an NFC-based attendance platform that combines
**Desktop Applications (Electron)** and **Web Applications (React + Nod
e.js)** to create a modern, fast, and hardware-integrated attendance
system.

This project was developed as a personal portfolio project to
demonstrate full-stack software engineering skills, hardware integration
capabilities, and modern multi-application system architecture using a
monorepo approach.

------------------------------------------------------------------------

## 📌 Introduction

Traditional attendance systems often face problems such as manual input
errors, data manipulation, and slow operational processes. By leveraging
**Near Field Communication (NFC)** technology, attendance recording can
be performed instantly with a simple tap.

This project aims to:

-   Automate attendance recording using NFC technology
-   Provide a desktop terminal application for hardware interaction
-   Deliver a centralized web dashboard and API server
-   Implement a scalable, production-ready system architecture

------------------------------------------------------------------------

## 🧩 Software Architecture Overview

This system consists of **two main platforms**:

------------------------------------------------------------------------

### 🖥 Desktop Applications

Desktop applications act as physical terminals connected directly to NFC
hardware.

#### 1. Register App

Main functions:

-   Register NFC tags into the system
-   Associate NFC tag UID with employee/user data
-   Used by administrators or system operators

Features:

-   NFC tag scanning
-   Tag registration workflow
-   Direct API server integration

------------------------------------------------------------------------

#### 2. Attendance App

Main functions:

-   Used as attendance terminal device
-   Reads NFC tags for check-in and check-out operations

Features:

-   Real-time NFC scanning
-   Attendance data transmission to API server
-   Production-ready terminal interface

------------------------------------------------------------------------

### 🌐 Web Applications

Web applications act as the data management center and user interface.

------------------------------------------------------------------------

#### 1. Web Client (Frontend)

Built with:

-   React
-   TypeScript
-   Vite
-   TailwindCSS

Functions:

-   Attendance dashboard
-   Real-time monitoring
-   Data visualization
-   API server consumption

------------------------------------------------------------------------

#### 2. API Server (Backend)

Built with:

-   Node.js
-   Express.js
-   Prisma ORM
-   PostgreSQL

Functions:

-   REST API services
-   Authentication and authorization handling
-   Attendance data management
-   Server-Sent Events (SSE) streaming
-   Database integration

------------------------------------------------------------------------

## 📂 Project Directory Structure

    NFC-ATTENDANCE-SYSTEM
    │
    ├── apps
    │   ├── api-server        # Backend API (Express + Prisma)
    │   ├── attendance-app    # Electron NFC Attendance Terminal
    │   ├── register-app      # Electron NFC Registration Tool
    │   └── web-app           # React Frontend Client
    │
    ├── docker-compose.yml
    ├── .gitignore
    ├── LICENSE
    └── README.md

------------------------------------------------------------------------

## ⚙️ How To Run The Project

------------------------------------------------------------------------

### ✅ Prerequisites

Make sure your environment meets the following requirements:

Software:

-   Node.js version 18 or higher
-   Docker and Docker Compose
-   Git

Hardware:

-   NFC Reader: **ACR122U**
-   NFC Tag: **MIFARE Classic**
-   Installed ACR122U NFC Reader driver

------------------------------------------------------------------------

## 🔐 Environment Configuration

------------------------------------------------------------------------

### 1️⃣ API Server Environment

Create the following file:

    apps/api-server/.env

Add the following content:

``` env
WEB_ORIGINS="http://localhost:5173,http://localhost:4173,http://localhost:3173"
API_KEY="67fa80b8bcf2d41b6aac848af7e9fa2dff3a9cfe7e98c11239e4b741d82e57e2"
DATABASE_URL="postgresql://postgres:postgres@db:5432/attendance"
```

------------------------------------------------------------------------

### 2️⃣ Web Client Environment

Create the following file:

    apps/web-app/.env

Add the following content:

``` env
VITE_API_URL="http://localhost:3000/proxy/v1"
VITE_API_STREAM_URL="http://localhost:3000/events/stream"
```

------------------------------------------------------------------------

## 🐳 Running Backend Infrastructure (Docker)

This project uses Docker to run:

-   PostgreSQL database
-   API server
-   Web client production build

From the project root directory, run:

``` bash
docker compose up --build
```

Running services:

  Service      URL
  ------------ -----------------------
  API Server   http://localhost:3000
  Web Client   http://localhost:3173
  PostgreSQL   localhost:5432

------------------------------------------------------------------------

## 🖥 Building Desktop Applications

Navigate to each desktop application directory.

### Attendance App

``` bash
cd apps/attendance-app
npm install
```

### Register App

``` bash
cd apps/register-app
npm install
```

------------------------------------------------------------------------

### Build Desktop Application Packages

Windows:

``` bash
npm run build:win
```

Linux:

``` bash
npm run build:linux
```

MacOS:

``` bash
npm run build:mac
```

------------------------------------------------------------------------

### Build Output

After the build process completes, output files will be available in:

    dist/

You can:

-   Run the `.exe` file directly
-   Or install the application using the provided installer

------------------------------------------------------------------------

## 🧪 Development Mode (Optional)

For local development:

### API Server

``` bash
cd apps/api-server
npm run dev
```

------------------------------------------------------------------------

### Web Client

``` bash
cd apps/web-app
npm run dev
```

------------------------------------------------------------------------

## 🔒 Security Notes

-   Never commit `.env` files
-   Always use `.env.example` as a configuration template
-   API keys are intended for development and testing purposes only

------------------------------------------------------------------------

## 📦 Technology Stack

### Frontend

-   React
-   TypeScript
-   Vite
-   TailwindCSS

### Backend

-   Node.js
-   Express.js
-   Prisma ORM
-   PostgreSQL

### Desktop

-   Electron.js
-   Node.js

### Infrastructure

-   Docker
-   Docker Compose

### Hardware

-   ACR122U NFC Reader
-   MIFARE Classic NFC Tag

------------------------------------------------------------------------

## 📄 License

This project is licensed under the **Apache License 2.0**.

You are free to:

-   Use commercially
-   Modify
-   Distribute
-   Use privately

See the [LICENSE](./LICENSE) file for more details.

------------------------------------------------------------------------

## 🚀 Future Improvements

Potential future enhancements include:

-   User authentication and role management
-   Multi-terminal device support
-   Offline-first attendance synchronization
-   Advanced analytics dashboard
-   Auto-update system for desktop applications
-   Mobile NFC support

------------------------------------------------------------------------

## 🤝 Contribution

Contributions are welcome.

For major changes, please open an issue first to discuss the proposed
updates.

------------------------------------------------------------------------

## ⭐ Acknowledgement

This project was developed as part of continuous learning and
exploration in:

-   Full-stack system design
-   Hardware integration
-   Desktop and web hybrid application architecture
-   Production-ready development workflows
