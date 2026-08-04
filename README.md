# Ultimate Fully Funded Master's Scholarship Guide

A polished, interactive scholarship and admissions companion built by Ashter Aoun Ali for Pakistani students pursuing fully funded master's programs in computer science and related fields.

This project helps users:
- explore scholarship opportunities across 27 countries
- review attestation and verification processes for Karachi / HEC / IBCC / MOFA requirements
- follow a structured roadmap for the 2027-2028 application cycle
- track their chapter progress and application milestones
- generate a PDF-ready guide
- use an AI-powered SOP review and professor outreach assistant

## Project Overview

This application is designed as a comprehensive digital guide for Pakistani MSCS applicants planning their fully funded scholarship journey. It combines curated educational guidance, interactive planning tools, and AI-assisted support in a single user-friendly experience.

## Key Features

- Interactive book-style reading experience
- Government and attestation guidance tailored to Pakistani applicants
- Country-by-country scholarship exploration
- 20+ scholarship coverage and timeline planning
- Progress trackers for personal application workflow
- AI assistant for SOP review, cold email drafting, and attestation questions
- PDF export support for offline reading and sharing

## Tech Stack

- React + TypeScript
- Vite
- Express server
- Tailwind CSS
- Google Gemini AI integration
- HTML-to-PDF export support

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Environment Setup

Create a `.env.local` file and add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Then open the app in your browser at:

```text
http://localhost:3000
```

## Production Build

To build the project for production:

```bash
npm run build
```

To start the production build:

```bash
npm start
```

## Project Structure

- `src/` — frontend application code
- `server.ts` — backend Express server and AI API routes
- `src/data/` — country, scholarship, timeline, and FAQ content
- `src/components/` — reusable UI sections and views

## Author

Built and maintained by Ashter Aoun Ali.

## License

This project is intended for personal and educational use. Please respect the licensing terms of the included dependencies and assets.

## Contact

For project inquiries, collaboration, or feedback, reach out through the repository owner’s preferred contact channel.
