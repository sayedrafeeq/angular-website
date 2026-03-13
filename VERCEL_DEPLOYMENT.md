# Vercel Deployment Guide

This guide explains how to deploy your Angular application to Vercel.

## 🚀 Quick Deployment

### Option 1: Using Vercel CLI
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project root:
```bash
vercel
```

### Option 2: Using Vercel Dashboard
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect the Angular framework and use the `vercel.json` configuration

## 📋 Deployment Configuration

### vercel.json
The `vercel.json` file configures:
- **Build Command**: `npm run build` (production build)
- **Output Directory**: `dist/my-angular-app/browser`
- **Routing**: All routes redirect to `index.html` for SPA functionality
- **Framework**: Angular auto-detection

### Build Process
1. Vercel runs `npm install` to install dependencies
2. Executes `npm run build` which builds the Angular app in production mode
3. Deploys the contents of `dist/my-angular-app/browser`
4. Configures routing for single-page application behavior

## 🔧 Environment Variables

If you need environment variables for different environments:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables (e.g., `API_URL`, `ENVIRONMENT`)

### Accessing Environment Variables in Angular
Update your `src/environments/environment.ts` and `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
};
```

## 🌐 Custom Domain

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed by Vercel

## 📊 Deployment Logs

To view deployment logs:
- Via Vercel CLI: `vercel logs`
- Via Dashboard: Go to your project → "Deployments" → Select deployment → "Logs"

## 🔄 Automatic Deployments

With GitHub integration, Vercel automatically:
- Deploys on every push to main branch
- Creates preview deployments for pull requests
- Rollbacks on failed deployments

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are in `package.json`
2. **Routing Issues**: Ensure `vercel.json` routing is configured correctly
3. **Environment Variables**: Make sure they're prefixed with `NEXT_PUBLIC_` for client-side access
4. **Large Bundle Size**: Check build budget warnings in Angular configuration

### Debug Commands
```bash
# Local build test
npm run build

# Check build output
ls -la dist/my-angular-app/browser

# Test locally with Vercel
vercel dev
```

## 📝 Post-Deployment Checklist

- [ ] Application loads correctly
- [ ] All routes work as expected
- [ ] Environment variables are properly set
- [ ] API endpoints are accessible
- [ ] Assets (images, fonts) load correctly
- [ ] Responsive design works on mobile
- [ ] Performance is acceptable

## 🎯 Best Practices

1. **Use Production Builds**: Always deploy with `--configuration production`
2. **Optimize Images**: Compress images before deployment
3. **Monitor Bundle Size**: Keep an eye on build budgets
4. **Test Preview Deployments**: Use preview deployments for testing
5. **Set Up Analytics**: Configure Vercel Analytics for performance monitoring

---

For more information, visit [Vercel's Angular deployment guide](https://vercel.com/docs/frameworks/angular).
