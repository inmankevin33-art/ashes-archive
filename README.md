# The Ashes Archive

The complete digital archive of cricket's greatest rivalry between England and Australia.

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── timeline/page.tsx   # Timeline page
│   ├── greatest-matches/page.tsx
│   ├── legends/page.tsx
│   └── records/page.tsx
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── FeatureCard.tsx
    ├── SectionHeading.tsx
    ├── TimelineItem.tsx
    ├── MatchCard.tsx
    ├── PlayerCard.tsx
    └── RecordCard.tsx
```

## Features

- 📱 Responsive design (mobile, tablet, desktop)
- 🎨 Premium dark theme with gold accents
- ⚡ Next.js 15 with App Router
- 🎯 Server Components optimized
- ♿ Accessible and semantic HTML
- 🔍 SEO optimized with metadata

## Pages

- **Home** - Hero section with feature cards and series info
- **Timeline** - Key moments in Ashes history
- **Greatest Matches** - Iconic Test matches
- **Legends** - Profile cards for legendary players
- **Records** - Statistics and achievements

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import this repository
4. Vercel will automatically detect Next.js and deploy

## Technologies

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## License

MIT
