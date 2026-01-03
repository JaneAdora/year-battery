# Year Progress Battery Indicator

A beautiful, minimal React application that displays the year's remaining time as a vertical battery indicator. Watch as the year drains away in real-time!

## Features

- 📅 **Current Date Display** - Shows the current date formatted as "Month DD, YYYY"
- 🔋 **Battery Indicator** - Visual representation of year progress as a vertical battery
- ⏱️ **Real-time Updates** - Progress updates every second with sub-day precision
- 🎨 **Color-coded Status**:
  - 🟢 Green: >50% remaining
  - 🟡 Yellow: 20-50% remaining
  - 🔴 Red: <20% remaining
- 📱 **Mobile-first Design** - Fully responsive, works on all screen sizes (320px+)
- 🌙 **Dark Theme** - Easy on the eyes with a sleek dark background

## Tech Stack

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS** - No heavy libraries, just clean CSS

## Development

### Prerequisites

- Node.js 18+ recommended
- npm 9+

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Year Progress Calculation

The progress is calculated with sub-day precision:

1. **Day of Year**: Calculate the current day number (1-366)
2. **Elapsed Time**: `(dayOfYear - 1) + (hours + minutes/60 + seconds/3600) / 24`
3. **Leap Year**: Accounts for leap years (366 days vs 365 days)
4. **Remaining**: `((totalDays - elapsedDays) / totalDays) * 100`

- January 1 at midnight shows ~100%
- December 31 at 23:59:59 shows ~0%

## Deployment

This project is configured for deployment on Netlify via GitHub integration:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Build command: `npm run build`
4. Publish directory: `dist`

## License

MIT
