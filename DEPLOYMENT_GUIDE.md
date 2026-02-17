# 🚀 Quick Deployment Guide for Vercel

## 📋 What You Need
- A computer with internet access
- This folder (already downloaded)
- 5 minutes of your time

That's it! No coding knowledge required.

---

## ⚡ FASTEST METHOD: Vercel Dashboard Upload

### Step 1: Create Vercel Account
1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"**
3. Choose one of:
   - Continue with GitHub (recommended)
   - Continue with GitLab
   - Continue with Email
4. Follow the prompts to create your free account

### Step 2: Deploy Your App
1. Once logged in, click **"Add New..."** button (top right)
2. Select **"Project"**
3. You'll see three options - choose **"Browse"**
4. Select the entire **`ctc-tracker-deploy`** folder
5. Click **"Upload"**

### Step 3: Configure (Auto-Detected)
Vercel automatically detects everything, but verify:
- ✅ Framework Preset: **Vite**
- ✅ Root Directory: `./`
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

Click **"Deploy"**

### Step 4: Wait
- Progress bar shows deployment status
- Usually takes **30-90 seconds**
- You'll see a success screen with confetti! 🎉

### Step 5: Get Your Live URL
- Your app is live at: `https://your-project-name.vercel.app`
- Click the URL to open your live mastery tracker!
- Share this URL with students

---

## 🎯 Alternative: Deploy via GitHub (For Updates)

If you want to be able to update the tracker easily:

### Step 1: Install Git (if you don't have it)
- **Windows**: Download from [git-scm.com](https://git-scm.com/)
- **Mac**: Already installed or get from [git-scm.com](https://git-scm.com/)
- **Linux**: `sudo apt-get install git`

### Step 2: Create GitHub Account
1. Go to **[github.com](https://github.com)**
2. Sign up (free)
3. Verify your email

### Step 3: Create a New Repository
1. Click the **"+"** icon (top right) → **"New repository"**
2. Name it: `ctc-mastery-tracker`
3. Make it **Public** (free) or **Private** ($)
4. Do NOT initialize with README (we have one)
5. Click **"Create repository"**

### Step 4: Upload Your Files
**Option A - Via GitHub Website (Easier):**
1. On your new repository page, click **"uploading an existing file"**
2. Drag the entire contents of `ctc-tracker-deploy` folder
3. Wait for upload
4. Click **"Commit changes"**

**Option B - Via Command Line (Better for updates):**
```bash
# Navigate to the folder
cd path/to/ctc-tracker-deploy

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment"

# Connect to GitHub
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ctc-mastery-tracker.git

# Push
git push -u origin main
```

### Step 5: Connect to Vercel
1. Go to **[vercel.com](https://vercel.com)** and log in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Find your `ctc-mastery-tracker` repository
5. Click **"Import"**
6. Verify settings (auto-detected)
7. Click **"Deploy"**

### Step 6: Enjoy Auto-Deployments
Now whenever you push changes to GitHub:
```bash
git add .
git commit -m "Updated curriculum"
git push
```
Vercel automatically rebuilds and deploys! 🔄

---

## 🌐 Add a Custom Domain (Optional)

### If you own `countingtocalculus.org`:

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add domain: `tracker.countingtocalculus.org`
4. Vercel gives you DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records Vercel provides
7. Wait 5-60 minutes for DNS propagation
8. Done! Your tracker is at `tracker.countingtocalculus.org`

---

## 📱 Test Your Deployment

After deployment, test these features:

1. ✅ Click between books (sidebar)
2. ✅ Click a topic to change status
3. ✅ Refresh page - progress should persist
4. ✅ Try search bar
5. ✅ Try status filters
6. ✅ Switch to Dashboard view
7. ✅ Test on mobile phone
8. ✅ Test "Mark All Mastered" button
9. ✅ Try chapter filters

---

## 🐛 Common Issues & Fixes

### "Build Failed"
**Cause**: Usually missing dependencies
**Fix**: 
1. Delete `node_modules` folder (if it exists)
2. In Vercel, go to Settings → General
3. Click "Redeploy" or push a new commit

### "Page Not Loading"
**Cause**: Browser cache
**Fix**: 
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Or try incognito/private mode

### "Progress Not Saving"
**Cause**: Browser localStorage disabled
**Fix**: 
1. Check browser settings allow localStorage
2. Try a different browser
3. Disable browser extensions temporarily

### "Slow Performance"
**Cause**: Running development build
**Fix**: Already handled - Vercel automatically builds production version

---

## 📊 View Deployment Analytics

In Vercel dashboard:
- **Analytics** tab: See visitor stats
- **Deployments** tab: See deployment history
- **Settings** → **Environment Variables**: Add API keys if needed later

---

## 🔄 Update Your Live Site

### Via Vercel Dashboard:
1. Make changes to files locally
2. Go to Vercel dashboard
3. Click "Deployments" → "Redeploy"
4. Upload new files

### Via GitHub (Recommended):
```bash
# Make your changes to files
# Then:
git add .
git commit -m "Describe your changes"
git push
# Vercel auto-deploys in 30 seconds!
```

---

## 💡 Pro Tips

1. **Custom URL**: Change project name in Vercel settings for a better URL
2. **Speed**: Production build is 90%+ faster than local dev
3. **HTTPS**: Vercel provides free SSL certificate (secure URLs)
4. **Previews**: Every git push creates a preview URL before production
5. **Rollback**: Can instantly rollback to any previous deployment

---

## 🎉 You're Done!

Your Mastery Tracker is now:
- ✅ Live on the internet
- ✅ Accessible from any device
- ✅ Auto-saving student progress
- ✅ Free to use
- ✅ Fast and secure

Share the URL with your students and watch them track their progress!

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Discord**: [vercel.com/discord](https://vercel.com/discord)
- **Our Support**: Visit [countingtocalculus.org](https://countingtocalculus.org)

---

**Questions?** The Vercel community is very helpful, or feel free to reach out!
