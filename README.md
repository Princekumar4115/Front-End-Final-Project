# 📊 Sales Dashboard - Atomic Design MVP

A high-performance Sales Dashboard built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project follows the **Atomic Design Methodology** to ensure a scalable, modular, and maintainable component architecture.

🔗 **Live Demo:** [https://front-end-final-project-ochre.vercel.app/dashboard](https://front-end-final-project-ochre.vercel.app/dashboard)

---

## 🚀 Key Features

- **Interactive Charts:** Visualizing sales performance for 2022, 2023, and 2024 using Recharts.
- **Atomic Structural Principle:** Clean separation of concerns through Atoms, Molecules, Organisms, Templates, and Pages.
- **Mock Data Engine:** Realistic retail sales data simulation (inspired by Kaggle retail datasets).
- **Custom Filtering:** Dynamic threshold inputs to filter sales data in real-time.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using Tailwind CSS.
- **Multiple Views:** Switch between Bar, Line, and Pie chart types to gain different insights.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide-React](https://lucide.dev/)

---

## 🏗️ Atomic Design Structure

The project is organized into five distinct levels to maximize reusability:

1.  **Atoms**: Basic building blocks (Buttons, Inputs, Badges, Typography).
2.  **Molecules**: Groups of atoms working together (Search bars, Form fields, Filter groups).
3.  **Organisms**: Complex UI sections (The Sales Chart Widget, Navigation Bars, Sidebar).
4.  **Templates**: Page-level layouts that define the structure (Dashboard Layout).
5.  **Pages**: Specific routes that populate templates with real/mock data.

---

## 📂 Project Directory

```text
src/
├── app/                  # Next.js App Router (Pages & API)
├── components/           # Atomic Design components
│   ├── atoms/            # Smallest units
│   ├── molecules/        # Combinations of atoms
│   ├── organisms/        # Complex widgets/sections
│   └── templates/        # Page layouts
├── data/                 # Mock sales data (2022-2024)
└── styles/               # Global Tailwind styles

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
