# Interactive STEM Learning Platform

A completely free, source-available web platform designed to help university students master technical coursework through targeted practice problems, step-by-step solutions, and reading materials. Every problem and article is strictly aligned with real university course syllabi to keep content focused and practical. 

> **Note:** Astrophysics I is currently the primary live module, with additional STEM courses planned for future rollout.

## Description

This platform delivers an accessible learning environment specifically tailored for introductory university astrophysics. Built with long-term scalability at its core, the application utilizes a dynamic architecture that allows new course modules to be added effortlessly. Instead of using rigid conditional logic or manual component imports, the platform relies on centralized registries (`readRegistry.js` and `practiceRegistry.js`) to dynamically resolve URL keys and topic slugs to course content.

## Live Demo

Explore the live platform at [ericgurley.github.io/Owlgorithms](https://ericgurley.github.io/Owlgorithms/).

## User Workflow

1. **Course Catalog Selection:** Select a university course module directly from the main catalog interface (e.g., *Astrophysics I*).
2. **Topic Exploration:** View curated, syllabus-aligned course nodes (e.g., *The Celestial Sphere*, *Right Ascension & Declination*).
3. **Practice or Read:** Choose between reviewing course reading articles or launching dynamic practice sets for a chosen topic.
4. **Interactive Practice:** Solve algorithmic practice problems with instant feedback and continuous progress tracking.
5. **Step-by-Step Solutions:** Reveal detailed solution derivations when stuck to verify step-by-step mathematical work.

## Getting Started

### Prerequisites

* Node.js (v18.0.0 or higher)
* npm (v9.0.0 or higher)

### Installation & Local Setup

1. Clone the repository:
   git clone https://github.com/ericgurley/Owlgorithms.git
   cd Owlgorithms

2. Install dependencies:
   npm install

3. Launch local development server:
   npm run dev

4. Build for production deployment:
   npm run build

## Architecture & Scalability Highlights

* **Registry-Driven Design:** All course metadata, reading material, and practice problem generators are mapped dynamically through centralized registry lookups (`readRegistry.js` and `practiceRegistry.js`) using URL keys and topic slugs.
* **Modular Subject Scaling:** Introducing new university courses requires zero refactoring of core layout views or router configurations—simply add the course content data and register its lookup key.
* **Algorithmic Problem Sets:** Practice sets generate numerical problem instances with step-by-step worked derivations.

## Built With

* [React 18](https://react.dev/) - Frontend framework
* [Vite](https://vitejs.dev/) - Development server and build tooling
* [React Router DOM](https://reactrouter.com/) - Client-side dynamic routing
* [GitHub Pages](https://pages.github.com/) - Application hosting

## License

This project is source-available and free to use.