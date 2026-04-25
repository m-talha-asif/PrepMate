# PrepMate

**PrepMate** is a modern, AI-driven mock interview application designed to help job seekers get interview-ready. By combining Google's Gemini language models with Vapi's conversational voice AI, the platform delivers highly personalized, realistic interview scenarios and instant feedback.

## ✨ Features

* **Tailored AI Question Generation**: Dynamically creates interview questions based on the desired job role, experience level, tech stack, and preferred interview type (behavioral vs. technical) using the `gemini-2.0-flash-001` model.
* **Real-time Voice Interviews**: Integrates the `@vapi-ai/web` SDK to facilitate interactive, conversational voice interviews with an AI assistant/page.tsx].
* **Progress Tracking Dashboard**: A centralized dashboard that tracks and displays a user's past taken interviews and available upcoming interviews.
* **Instant Feedback**: Retrieves and associates detailed AI feedback with specific interview sessions upon completion/page.tsx].
* **Secure Authentication**: Robust user authentication handling sign-ups and sign-ins via Firebase, utilizing custom HTTP-only session cookies (valid for 1 week) for secure state management.

## 🛠️ Tech Stack

* **Framework**: Next.js 15 (React 19).
* **AI & Voice**: `@ai-sdk/google` (Gemini), `@vapi-ai/web` (Voice Agent).
* **Database & Auth**: Firebase / Firebase Admin SDK (Firestore).
* **Styling & UI**: Tailwind CSS v4, Lucide React, Radix UI.

## 🚀 Getting Started

### Prerequisites
* Node.js (v20 or higher recommended)
* A Firebase Project with Firestore and Authentication enabled
* A Google Gemini API Key
* A Vapi Web Token

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/prepmate.git](https://github.com/yourusername/prepmate.git)
   cd prepmate
