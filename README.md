# CampusPulse

A Next.js application skeleton for a campus community hub — built as part of the Frontend AI Engineering track, with GitHub Copilot as a development assistant.

## About

CampusPulse is designed to bring together the everyday tools students need on campus — from finding a free study room to reporting an issue anonymously — in a single, connected experience. This repository contains the foundational skeleton: routing, layout, navigation, and a health-check page confirming the data-fetching setup works end to end.

## Screens

| Screen | Description |
|---|---|
| **Home** | Dashboard overview — a snapshot of what's happening on campus |
| **Smart Room Finder** | Find open classrooms and study spaces |
| **Lost & Found** | Post or search for lost and found items around campus |
| **Quick Polls** | Create and vote on quick decisions for classes or societies |
| **Study Buddy Match** | Connect with other students in the same course |
| **Voice Box** | Report an issue or concern, with the option to stay anonymous |
| **Announcements** | A central hub for society and event announcements |
| **Health Check** | Verifies the app's data-fetching setup is working correctly |

## Tech Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- Deployed on **Vercel**

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd campuspulse-skeleton
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Status

This is currently a **skeleton/foundation build** — routes, layout, and navigation are in place with placeholder content for each screen. Full functionality (room availability logic, poll voting, anonymous complaint handling, etc.) will be built out in later development phases.

## About This Project

This project was built as part of a homework assignment for the Frontend AI Engineering track, using GitHub Copilot as an AI development assistant. Copilot was used to scaffold the App Router structure, build out the responsive navigation and placeholder pages, and implement the health-check page — all shaped through iterative, natural-language prompts with manual review and testing at each step (including responsive checks at 375px and 1280px).