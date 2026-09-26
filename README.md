# 💜 Love Letter Website - Special Gift for Her 💜

A beautiful, interactive love letter website built with React, Vite, and Tailwind CSS. A perfect digital gift to express your love with multiple sections: romantic love letter, photo gallery, and a heartfelt confession.

---

## ✨ Features

### 🔐 **Login Screen**
- Birthday-protected access
- Password format: `DDMMYYYY` (e.g., `100904` for September 4th)
- Beautiful purple gradient background
- Hint display for her birthday

### 💌 **Love Letter Section**
- Closed envelope view with "Open Letter" button
- Opens as a 2-page notebook spread
- Left & right page with romantic messages
- Flower decorations throughout
- Sound effect when opening
- Back button to return to envelope

### 📸 **Photo Carousel**
- Displays 7 personal photos
- Auto-rotate every 5 seconds
- Manual navigation with arrow buttons
- Indicator dots for quick navigation
- Photo captions on hover
- Responsive image gallery

### 💕 **Confession Section**
- Interactive question: "Will you be my girlfriend?"
- YES button triggers celebration
- NO button playfully runs away
- Purple fireworks effect with flowers (🌸🌷🌹💜💐✨)
- Celebratory success screen
- Replay button to start over

### 🎵 **Background Music**
- Background music plays on login
- Looping audio throughout experience
- Volume control slider (top-right)
- Shows percentage volume display

### 🎨 **Design**
- Purple & violet theme throughout
- Responsive for tablet & laptop (mobile disabled)
- Beautiful animations and transitions
- Flower bouquet decorations
- Smooth page transitions
- No scrolling needed between sections

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **JavaScript** - Logic & interactions

### Dependencies
```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x"
}
```

---

## 📋 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Clone/Create Project
```bash
npm create vite@latest my-love-letter -- --template react
cd my-love-letter
npm install
```

### Step 2: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Configure Tailwind
Update `tailwind.config.js`:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4: Add Tailwind to CSS
Create/Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Copy Project Files
Copy these files to your `src` folder:
- `App.jsx` - Main app component
- `App.css` - Animations
- `components/Letter.jsx` - Love letter
- `components/PhotoCarousel.jsx` - Photo gallery
- `components/Confession.jsx` - Confession page

### Step 6: Add Photos
Place your photos in `public` folder:
```
public/
├── 1.jpg
├── 2.jpg
├── 3.jpg
├── 5.jpg
├── 6.jpg
├── 7.jpg
└── 8.jpg
```

### Step 7: Add Background Music
Place your music file in `public` folder:
```
public/
└── mysong.mp3
```

### Step 8: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser!

---

## ⚙️ Configuration

### Change Birthday Password
In `App.jsx`, line 15:
```javascript
const CORRECT_PASSWORD = '100904'; // Change to DDMMYYYY format
```

Example:
- September 4 → `100904`
- December 25 → `251299`
- January 1 → `010105`

### Change Background Music
In `App.jsx`, line 85:
```jsx
<audio
  ref={audioRef}
  loop
  src="/mysong.mp3"  // Change to your music file
/>
```

Or use a public URL:
```jsx
src="https://example.com/your-song.mp3"
```

### Customize Love Letter Text
In `components/Letter.jsx`, update:
- Left page content (lines 80-95)
- Right page content (lines 115-125)
- Greeting & signature

### Add/Remove Photos
In `components/PhotoCarousel.jsx`, update the `photos` array:
```javascript
const photos = [
  {
    id: 1,
    src: 'your-photo.jpg',
    caption: 'Your caption here'
  },
  // Add more photos...
];
```

### Change Confession Text
In `components/Confession.jsx`, update:
- Main question (line 97)
- Success messages (lines 197-204)
- Any other text

---

## 📂 Project Structure

```
src/
├── App.jsx                 # Main app (login, routing)
├── App.css                 # Global animations
├── components/
│   ├── Letter.jsx          # Love letter (2-page notebook)
│   ├── PhotoCarousel.jsx   # Photo gallery with carousel
│   └── Confession.jsx      # Confession & fireworks
├── index.css               # Tailwind styles
└── main.jsx                # App entry point

public/
├── 1.jpg to 8.jpg         # Your photos
└── mysong.mp3             # Background music
```

---

## 🎯 How to Use

### For Users
1. **Open the website** on tablet or laptop
2. **Enter her birthday** in format DD/MM/YYYY (e.g., 04/09/2004)
3. **Navigate** between 3 sections using Next/Previous buttons
4. **Section 1: Love Letter** - Click "Open Letter" to view 2-page message
5. **Section 2: Photos** - Scroll through your favorite moments
6. **Section 3: Confession** - Click YES for celebration!
7. **Adjust volume** using the slider in top-right corner

### For Developers
1. Update birthday password
2. Add your photos to `public` folder
3. Update photo captions in PhotoCarousel
4. Update love letter text in Letter.jsx
5. Update confession text in Confession.jsx
6. Add your background music
7. Customize colors if desired (search & replace purple/violet)
8. Deploy to hosting service

---

## 🎨 Customization

### Change Colors
Replace throughout the code:
- `from-purple-600 to-violet-600` → your gradient
- `text-purple-600` → your text color
- `border-purple-300` → your border color

### Add More Animations
Update `App.css` with new `@keyframes` and add classes to components

### Disable Mobile Block
Remove the mobile check in App.jsx to allow mobile access

### Change Font
Add to `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');

body {
  font-family: 'YourFont', sans-serif;
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Upload dist/ to gh-pages branch
```

---

## 📝 Features Breakdown

### Login Animation
- Smooth gradient background
- Border focus effects
- Error message display
- Hint display with emoji

### Letter Opening Animation
- Envelope → Notebook spread transition
- Page flip animations
- Decorative borders
- Sound effect

### Photo Carousel
- Auto-rotation every 5 seconds
- Manual navigation arrows
- Indicator dots
- Caption overlay on hover
- Smooth transitions

### Confession Celebration
- 60 particle fireworks effect
- Purple flowers & hearts burst effect
- Gravity-based particle animation
- Success sound effect
- Celebratory screen with animations

### Responsive Design
- Tablet optimized (768px+)
- Laptop friendly (1024px+)
- Mobile disabled by design
- Fixed heights prevent scrolling
- Proper spacing on all screens

---

## 🎵 Audio Files

### Background Music Sources
- **Pixabay Music**: https://pixabay.com/music/
- **Pexels Music**: https://www.pexels.com/search/music/
- **YouTube Audio Library** (for YouTube use)
- **Local MP3 file** in public folder

### Sound Effects
- Included: Click sounds for buttons
- Optional: Add your own sound files

---

## 💡 Tips & Tricks

1. **Test on target device** before giving it to her
2. **Full-screen mode** (F11) for immersive experience
3. **Use high-quality photos** for carousel
4. **Customize captions** to match your memories
5. **Choose romantic background music** that means something to you
6. **Update love letter** with personal touches & inside jokes
7. **Keep birthday password** private!
8. **Backup your code** before deploying

---

## 🐛 Troubleshooting

### Music Not Playing
- Check file path in src attribute
- Ensure audio file is in `public` folder
- Try different audio format (MP3, WAV, OGG)
- Check browser autoplay permissions

### Photos Not Loading
- Verify image files are in `public` folder
- Check file names match exactly (case-sensitive)
- Ensure image formats are supported (JPG, PNG, WebP)
- Try using full URLs instead of local paths

### Animations Not Working
- Check that `App.css` is imported in `App.jsx`
- Verify `@keyframes` are defined in App.css
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors

### Mobile Showing Error
- This is intentional! Website is tablet/laptop only
- Remove the mobile check if you want mobile support
- Mobile responsiveness can be improved by adjusting breakpoints

---

## 📱 Mobile Support

Currently, mobile access is disabled (shows message). To enable:

In `App.jsx`, remove or modify the mobile fallback sections:
```jsx
{/* Mobile Fallback */}
<div className="sm:hidden min-h-screen flex items-center justify-center">
  {/* This shows on mobile - remove or modify */}
</div>
```

---

## 📄 License

This is a personal gift project. Feel free to use, modify, and share! ❤️

---

## 🎁 Special Notes

- **Created with love** ❤️
- **Purple theme** represents trust & magic
- **Flowers** symbolize beauty & affection
- **Interactive elements** create engagement & surprise
- **Personal photos** make it uniquely yours
- **Handwritten messages** show genuine effort

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Verify all files are in correct locations
3. Clear browser cache
4. Check browser console for error messages
5. Ensure Node.js and npm are up to date

---

## 🙏 Credits

- **Built with**: React + Vite + Tailwind CSS
- **Inspired by**: Love & Romance 💜
- **Made for**: That special someone ✨

---

**Good luck! This is going to make her so happy! 💜🌸💕**

Made with ❤️ for your special someone.