# Deployment Guide

## Deploying to GitHub Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select `main` branch
5. Click **Save**
6. Your site will be available at: `https://yourusername.github.io/portfolio`

### Step 3: Update Links (Optional)

If using custom domain:
1. Add a `CNAME` file with your domain
2. Configure DNS settings with your provider
3. Wait for DNS propagation (can take up to 48 hours)

## Alternative Deployment Options

### Netlify

1. Sign up at [netlify.com](https://www.netlify.com)
2. Connect your GitHub repository
3. Configure build settings (usually automatic)
4. Deploy!

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure project settings
4. Deploy!

### Traditional Hosting

1. Build/export your site
2. Upload files via FTP/SFTP
3. Ensure all paths are correct
4. Test thoroughly

## Post-Deployment Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] CSS and JS files are loading
- [ ] Mobile responsiveness works
- [ ] Forms submit correctly (if applicable)
- [ ] Meta tags are correct
- [ ] Favicon appears
- [ ] Analytics tracking works (if added)

## Troubleshooting

### CSS not loading
- Check file paths are correct
- Ensure case sensitivity in filenames
- Verify MIME types

### Images not showing
- Check image paths
- Verify image files are committed
- Test image URLs

### JavaScript errors
- Check browser console
- Verify JS file paths
- Test in different browsers

## Performance Optimization

After deployment, consider:
- Minifying CSS and JS
- Optimizing images
- Adding service worker for PWA
- Implementing lazy loading
- Using CDN for assets

## Monitoring

Use these tools to monitor your site:
- Google Analytics
- Google Search Console
- Lighthouse (Chrome DevTools)
- GTmetrix
- WebPageTest

---

For more help, see [GitHub Pages Documentation](https://docs.github.com/en/pages)
