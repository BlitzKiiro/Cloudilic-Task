# 🚀 Freelancer Marketplace - Full Stack Developer Assessment

A responsive, production-grade freelancer marketplace web application built with **Next.js**, **TypeScript**, and **TailwindCSS**. Features advanced search, filtering, pagination, and URL synchronization.

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Lucide React** - Modern icon library

## ✨ Features

### 🔍 Advanced Search & Filter System

- **Real-time Search** - Find freelancers by name, role, or location
- **Service Category Filter** - Filter by photographer, designer, developer, etc.
- **Levels Filter** - Filter by freelancer level (Level 1, 2, 3)
- **Budget Filter** - Price range filtering ($0-20, $20-50, $50-100, $100+)
- **Delivery Time Filter** - Filter by project completion time (24h, 3d, 1w, 1m)
- **Location Filter** - Search by geographic location

### 📊 Smart Sorting System

- **Most Rated** - Sort by number of reviews (highest first)
- **Lowest Rated** - Sort by number of reviews (lowest first)
- **Highest Price** - Sort by price (highest first)
- **Lowest Price** - Sort by price (lowest first)
- **All** - No sorting (original order)

### 📄 Pagination System

- **Initial Load** - Shows only 12 freelancer cards
- **Load More** - "Show More Results" button to load additional cards
- **Smart Counting** - Displays remaining count in button
- **Filter Integration** - Pagination works with all filters and search

### 🔗 URL Synchronization

- **Query Parameters** - All search terms, filters, and sort options sync to URL
- **Shareable Links** - Users can share filtered/sorted results
- **Browser Navigation** - Back/forward buttons work with filters
- **Deep Linking** - Direct access to specific search results

### 🖼️ Enhanced Freelancer Cards

Each card displays:

- **Cover Image** - Role-specific high-quality cover photos
- **Profile Photo** - Freelancer profile picture
- **Name and Level** - Freelancer name and experience level
- **Role/Profession** - Professional title
- **Location** - Geographic location with pin emoji
- **Star Rating** - Visual star rating with review count
- **Starting Price** - Price range in USD
- **Heart Button** - Save/favorite functionality
- **See More Button** - Action button for detailed view

### 🎨 Smooth Animations

- **Initial Load Animation** - Cards fade in with staggered delay
- **Hover Effects** - Smooth transitions on card interactions
- **Button Animations** - Interactive feedback on all buttons
- **One-time Animation** - Animations only trigger on initial page load

### 📱 Responsive Design

- **Mobile-first** approach
- **Responsive Grid** - 1-4 columns based on screen size
- **Touch-friendly** interface
- **Optimized** for all device sizes

### 🦶 Comprehensive Footer

- Category listings
- Client & freelancer sections
- Company information
- Social media links
- Language switcher

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BlitzKiiro/Cloudilic-Task.git
   cd freelancer-marketplace
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page with Suspense wrapper
├── components/            # Reusable UI components
│   ├── Header.tsx         # Navigation header
│   ├── HomePageClient.tsx # Client-side home page logic
│   ├── SearchFilters.tsx  # Search and filter controls
│   ├── FreelancerCard.tsx # Individual freelancer card
│   ├── FreelancerGrid.tsx # Grid layout with pagination
│   └── Footer.tsx         # Site footer
├── store/                 # Zustand state management
│   └── freelancerStore.ts # Global app state with URL sync
├── types/                 # TypeScript type definitions
│   └── freelancer.ts      # Freelancer and filter types
└── data/                  # Mock data and utilities
    └── mockData.ts        # Sample freelancer data with cover images
```

## 🎯 Key Implementation Details

### State Management with Zustand

Advanced state management with URL synchronization:

```typescript
// Store features
- Search term tracking
- Filter state management (category, level, budget, delivery, location)
- Sort functionality (most-rated, lowest-rated, price sorting)
- Pagination state (displayed count, load more)
- URL synchronization (read/write to browser URL)
- Real-time filtering and sorting
```

### URL Parameter System

All search and filter state is synchronized with browser URL:

- `search` - Search term
- `category` - Service category filter
- `level` - Seller level filter
- `budget` - Budget range filter
- `delivery` - Delivery time filter
- `location` - Location filter
- `sort` - Sort option

### Type Safety

Full **TypeScript** implementation with:

- Freelancer interface with cover images
- Filter and sort type definitions
- Component prop typing
- Store state typing with pagination
- URL parameter types

### Performance Optimizations

- **Next.js Image** component for optimized images
- **Efficient re-rendering** with Zustand
- **CSS-in-JS** with TailwindCSS utilities
- **Responsive image loading** with cover images
- **Pagination** to limit initial load
- **Suspense boundaries** for client-side rendering

### Responsive Design

- **Mobile**: 1 column grid
- **Tablet**: 2-3 column grid
- **Desktop**: 4 column grid
- **Fluid typography** and spacing
- **Touch-friendly** interactions

## 🎨 Design System

### Colors

- **Primary**: Blue (#0ea5e9)
- **Success**: Green (#22c55e)
- **Neutral**: Gray scale
- **Background**: Light gray (#f9fafb)

### Typography

- **Font**: Inter (Google Fonts)
- **Hierarchy**: Consistent sizing scale
- **Weight**: 300-700 range

### Components

- **Consistent spacing** (4px grid)
- **Rounded corners** (4-8px)
- **Subtle shadows** and borders
- **Smooth hover transitions**
- **Cover images** for visual appeal

## 🔄 State Management Flow

```typescript
// Complete filter and URL sync flow
User updates filter →
Zustand store updates →
updateUrl() writes to browser URL →
filterAndSortFreelancers() runs →
UI re-renders with filtered results →
Pagination resets to show first 12 items
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel** (recommended)
- Netlify
- Any static hosting platform

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

## 🎯 Key Features Summary

✅ **Advanced Search & Filtering** - Real-time search with multiple filter options  
✅ **Smart Sorting** - Sort by rating count, price, or original order  
✅ **Pagination System** - Load more functionality with remaining count  
✅ **URL Synchronization** - Shareable links with all search/filter state  
✅ **Cover Images** - Role-specific high-quality cover photos  
✅ **Smooth Animations** - Staggered card animations on initial load  
✅ **Responsive Design** - Mobile-first approach with touch-friendly UI  
✅ **Type Safety** - Full TypeScript implementation  
✅ **Performance Optimized** - Efficient rendering and image loading
