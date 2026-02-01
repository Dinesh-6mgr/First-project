# JungleBook - Clean Social Platform

A modern, minimal social platform built with React, Vite, and Tailwind CSS. JungleBook features a clean, professional design focused on content and user experience.

## ✨ Features

- **Clean, Minimal Design**: Professional UI with focus on content and usability
- **Responsive Layout**: Optimized for all devices with mobile-first approach
- **Real-time Search**: Search across posts, users, albums, and photos
- **Modern Typography**: Inter font family for excellent readability
- **Consistent Components**: Reusable design system with consistent styling
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Accessible**: Proper semantic HTML and ARIA labels

## 🎨 Design System

### Color Palette
- **Primary**: Gray-900 (#111827) for text and primary actions
- **Secondary**: Gray-600 (#4B5563) for secondary text
- **Background**: Gray-50 (#F9FAFB) for page backgrounds
- **Cards**: White (#FFFFFF) with subtle borders
- **Accents**: Blue-600 (#2563EB) for links and highlights

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights with tight tracking
- **Body Text**: Regular weight with comfortable line height
- **Small Text**: Subtle gray colors for metadata

### Components
- **Cards**: Clean white backgrounds with subtle borders
- **Buttons**: Minimal design with hover states
- **Inputs**: Clean borders with focus states
- **Navigation**: Simple, accessible menu system

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd api-call
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5176`

## 🛠️ Built With

- **React 19.2.0** - Frontend framework
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **React Router DOM 7.13.0** - Client-side routing
- **Axios 1.13.2** - HTTP client for API calls
- **Inter Font** - Modern typography

## 📱 Pages

### Home Page
- Clean hero section with clear call-to-actions
- Statistics overview with minimal cards
- Featured users and posts sections
- Consistent spacing and typography

### Posts Page
- Grid layout with clean post cards
- Search functionality with real-time filtering
- Consistent image handling and metadata display
- Responsive design for all screen sizes

### Users Page
- Clean user profile cards
- Contact information with icons
- Search across name, username, and email
- Professional avatar generation

### Albums & Photos
- Grid-based photo galleries
- Hover effects and smooth transitions
- Search functionality
- Consistent card design

## 🔧 Configuration

### Port Configuration
The development server runs on port 5176 by default with automatic fallback.

### Vite Configuration
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    host: true
  }
})
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

Integrates with JSONPlaceholder API:
- Posts: `https://jsonplaceholder.typicode.com/posts`
- Users: `https://jsonplaceholder.typicode.com/users`
- Albums: `https://jsonplaceholder.typicode.com/albums`
- Photos: `https://jsonplaceholder.typicode.com/photos`

## 🎯 Design Principles

- **Simplicity**: Clean, uncluttered interface
- **Consistency**: Uniform spacing, colors, and typography
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized images and efficient rendering
- **Responsiveness**: Mobile-first, works on all devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.