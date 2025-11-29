# Wabsyin Solar - Premium Rooftop Solar Website

A production-ready, full-stack website for **Wabsyin Pvt. Ltd.**, featuring a bilingual interface, subsidy calculator, and admin dashboard.

## 🚀 Features

### Public Interface
- **Premium UI**: "Tiranga" inspired color palette (Saffron, India Green, Chakra Blue) with modern Framer Motion animations.
- **3D Effects**: Interactive 3D hero section (Three.js) and tilt-effect cards (Framer Motion).
- **Subsidy Calculator**: Interactive tool implementing **PM Surya Ghar Muft Bijli Yojana** logic (₹30k/kW up to 2kW, ₹18k/kW for next 1kW).
- **Multi-language Support**: Built-in support for English, Assamese, and Hinglish.
- **Storytelling Home Page**: Animated hero section and narrative flow.
- **Services & Projects**: Dedicated pages for services and portfolio showcase.
- **Contact**: Enquiry form with WhatsApp quick link.

### Admin Dashboard (`/admin`)
- **Overview**: KPI cards for applications, installations, and users.
- **Application Management**: Filterable list of subsidy applications with status tracking.
- **CMS**: Manage website content and translations.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, React Three Fiber (Three.js)
- **Database**: Supabase (PostgreSQL)
- **Testing**: Jest (Unit), React Testing Library

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/wabsyin-web.git
    cd wabsyin-web
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env.local` file in the root directory:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌐 Managing Translations

Translations are currently managed via the `LanguageSwitcher` component and can be expanded using `react-i18next`.
To add more languages:
1.  Update `src/components/ui/LanguageSwitcher.tsx` to include the new language code.
2.  Add the corresponding JSON file in `public/locales/[lang]/common.json`.

## 🎨 3D Effects

- **Hero Section**: Uses `src/components/home/Hero3D.tsx` (React Three Fiber). To disable, remove the `<Hero3D />` component from `src/components/home/Hero.tsx`.
- **Cards**: Uses `src/components/ui/TiltCard.tsx` (Framer Motion). This is a lightweight 3D effect that is performant on all devices.

## 🚢 Deployment

### Vercel (Recommended)
1.  Push code to GitHub.
2.  Import project in Vercel.
3.  Add Environment Variables (`NEXT_PUBLIC_SUPABASE_URL`, etc.).
4.  Deploy.

## 📄 License
Private - Wabsyin Pvt. Ltd.
