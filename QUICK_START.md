# Quick Start Guide 🚀

## First Time Setup (5 Minutes)

### 1. Extract the Files
```bash
unzip portfolio-github-ready.zip
cd portfolio-project
```

### 2. Test Locally
Open `index.html` in your browser, or use:
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```
Visit: http://localhost:8000

### 3. Customize Your Info

#### Update Personal Information:
1. Open `index.html`
2. Find and replace:
   - "Mohamed Ahmed" → Your Name
   - LinkedIn URL
   - GitHub URL
   - WhatsApp number
   - Email address

#### Update Colors (Optional):
1. Open `assets/css/style.css`
2. Find `:root` at the top
3. Change color values:
   ```css
   --primary-color: #2ECC71;  /* Your color */
   --secondary-color: #2C3E50; /* Your color */
   ```

### 4. Deploy to GitHub

#### Create Repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

#### Enable GitHub Pages:
1. Go to repository Settings
2. Click "Pages" in sidebar
3. Select "main" branch
4. Click "Save"
5. Wait 2-3 minutes
6. Visit: https://YOUR_USERNAME.github.io/portfolio

## Checklist Before Publishing ✅

- [ ] Updated name and personal info
- [ ] Updated all social media links
- [ ] Replaced placeholder email
- [ ] Updated WhatsApp number
- [ ] Changed GitHub repository URL in README
- [ ] Updated sitemap.xml with your domain
- [ ] Updated robots.txt with your domain
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] All images loading correctly
- [ ] All links working
- [ ] Contact form tested (if backend added)

## Common Issues & Solutions 🔧

### CSS Not Loading
- Check file paths are correct
- Ensure `assets/css/style.css` exists
- Clear browser cache (Ctrl+Shift+R)

### Images Not Showing
- Verify image files are in `assets/files/`
- Check file names match exactly (case-sensitive)
- Ensure images are committed to Git

### GitHub Pages Not Working
- Wait 2-3 minutes after enabling
- Check repository is public (or have GitHub Pro for private)
- Verify branch name is correct
- Check Actions tab for deployment status

### Mobile Layout Issues
- Open browser DevTools (F12)
- Use device emulator
- Test on actual devices if possible

## Updating Your Portfolio

### Add New Project:
1. Open `index.html`
2. Find projects section
3. Copy existing project card
4. Update with your project info

### Add New Certificate:
1. Add PDF to `assets/files/`
2. Add preview image to `assets/files/`
3. Update certificates section in `index.html`

### Update Skills:
1. Find skills section in `index.html`
2. Add/remove skills as needed
3. Update progress bars if needed

## Need Help? 💡

- Check `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment guides
- Review `CONTRIBUTING.md` for contribution guidelines
- Open an issue on GitHub for specific problems

## Resources 📚

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML/CSS Tutorial](https://www.w3schools.com/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

---

**Congratulations!** 🎉 Your portfolio is ready to go live!

Remember to:
- Keep your portfolio updated
- Add new projects regularly
- Test on different devices
- Monitor performance
- Respond to feedback

Good luck with your portfolio! 🚀
