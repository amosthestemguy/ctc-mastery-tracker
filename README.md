# 🎓 Counting to Calculus - Mastery Tracker

Track your mathematics mastery journey from PreAlgebra through PreCalculus, with Euclid's Elements integrated throughout all 4 years.

## ✨ Features

- **4 Complete Courses**: PreAlgebra (5th), Algebra 1 (6th), Algebra 2 (7th), PreCalculus (8th)
- **151 Sections** mapped from actual textbooks
- **Euclid's Elements** integrated across all 4 years
- **Click to Track**: Cycle through Not Started → In Progress → Mastered
- **Auto-Save**: Progress persists in browser localStorage
- **Dashboard View**: See overall progress and per-book/chapter breakdowns
- **Search & Filter**: Find topics quickly or filter by mastery status
- **Responsive Design**: Works on desktop, tablet, and mobile

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel account** at [vercel.com](https://vercel.com) (free)

2. **Upload this folder**:
   - Click "Add New..." → "Project"
   - Click "Browse" and select this entire folder
   - OR drag and drop this folder into Vercel

3. **Configure** (Vercel auto-detects everything):
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Click "Deploy"**
   - Wait 30-60 seconds
   - Done! 🎉

5. **Your live URL**: `https://your-project-name.vercel.app`

### Option 2: Deploy via GitHub (More Control)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ctc-mastery-tracker.git
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import from GitHub
   - Select your repository
   - Click "Deploy"

3. **Done!** Auto-deploys on every git push

### Option 3: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from this directory)
vercel

# Deploy to production
vercel --prod
```

## 🖥️ Run Locally (Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Customization

### Change Colors
Edit the color constants in `src/App.jsx`:
```javascript
const BOOKS = [
  { color: "#3B82F6", ... },  // PreAlgebra - Blue
  { color: "#8B5CF6", ... },  // Algebra 1 - Purple
  { color: "#EC4899", ... },  // Algebra 2 - Pink
  { color: "#10B981", ... },  // PreCalculus - Green
  { color: "#F59E0B", ... },  // Geometry - Amber
];
```

### Add Your Branding
- Replace `/public/favicon.svg` with your logo
- Update meta tags in `index.html`
- Modify the header in `src/App.jsx`

### Custom Domain
In Vercel dashboard:
1. Go to Settings → Domains
2. Add your domain (e.g., `tracker.countingtocalculus.org`)
3. Update DNS records as instructed
4. Done!

## 📱 Mobile App (Optional)

To convert to a mobile app:
1. Use [Capacitor](https://capacitorjs.com/) for iOS/Android
2. Or use [Progressive Web App (PWA)](https://web.dev/progressive-web-apps/) features

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool (super fast!)
- **localStorage** - Data persistence
- **Pure CSS** - No external CSS frameworks needed

## 📄 Files Included

```
ctc-tracker-deploy/
├── public/
│   └── favicon.svg          # App icon
├── src/
│   ├── App.jsx              # Main application
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🐛 Troubleshooting

**Build fails?**
- Make sure you're using Node.js 16+ (`node --version`)
- Delete `node_modules` and run `npm install` again

**Data not saving?**
- Check browser localStorage isn't disabled
- Try in incognito mode to test without extensions

**Slow performance?**
- Run `npm run build` for optimized production version
- Production build is 10x faster than dev mode

## 📞 Support

Questions? Visit [countingtocalculus.org](https://countingtocalculus.org) or email support.

## 📜 License

© 2025 Counting to Calculus. All rights reserved.

---

**Made with ❤️ for students everywhere**

For more math resources, visit **[CountingToCalculus.org](https://countingtocalculus.org)**
