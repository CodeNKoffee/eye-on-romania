# GitHub Actions Workflows

This directory contains the CI/CD workflows for the Eye on Romania project.

## Workflows

### 1. CI Pipeline (`ci-cd.yml`)

**Triggers:** Push to `main`/`dev`, Pull requests to `main`/`dev`

**Jobs:**

- **Code Quality Check:** ESLint linting and TypeScript type checking
- **Build Next.js Application:** Matrix build on Node.js 18.x and 20.x
- **E2E Tests:** Playwright tests across multiple Node.js versions
- **Quality Gate:** Ensures all jobs pass before allowing deployment

### 2. Deployment (`deploy.yml`)

**Triggers:** Successful CI pipeline completion on `main`, Manual trigger

**Jobs:**

- **Deploy to Production:** Supports multiple deployment methods
  - SSH deployment with PM2 restart
  - Vercel deployment
  - Netlify deployment
- **Notify Deployment:** Success/failure notifications
- **Health Check:** Post-deployment application health verification

### 3. Security & Dependency Checks (`security.yml`)

**Triggers:** Daily schedule, Push to `main`, Pull requests, Manual trigger

**Jobs:**
- **Security Audit:** npm audit and Snyk security scanning
- **Dependency Review:** Review dependencies in pull requests
- **CodeQL Analysis:** Static code analysis for security vulnerabilities
- **Outdated Dependencies:** Check and create issues for outdated packages

## Required Secrets

### For SSH Deployment

- `SSH_PRIVATE_KEY`: Private SSH key for server access
- `SERVER_IP`: IP address of the deployment server
- `SERVER_USER`: SSH username for the deployment server
- `APP_PATH`: Application path on the server (optional, defaults to `/var/www/eye-on-romania`)

### For Alternative Deployments

- `VERCEL_TOKEN`: Vercel deployment token
- `NETLIFY_AUTH_TOKEN`: Netlify authentication token

### For Security Scanning

- `SNYK_TOKEN`: Snyk security scanning token (optional)

### For Notifications

- `SLACK_WEBHOOK_URL`: Slack webhook for deployment notifications (optional)

## Environment Variables

### Deployment Method

Set `DEPLOY_METHOD` environment variable to choose deployment strategy:

- `ssh`: Deploy via SSH to custom server
- `vercel`: Deploy to Vercel
- `netlify`: Deploy to Netlify

## SSH Deployment Setup

1. Generate SSH key pair:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "github-actions@eye-on-romania"
   ```

2. Add public key to server's `~/.ssh/authorized_keys`

3. Add private key to GitHub repository secrets as `SSH_PRIVATE_KEY`

4. Install PM2 on the server:

   ```bash
   npm install -g pm2
   ```

5. Configure PM2 ecosystem file if needed:

   ```javascript
   // ecosystem.config.js
   module.exports = {
     apps: [{
       name: 'eye-on-romania',
       script: 'npm',
       args: 'start',
       cwd: '/var/www/eye-on-romania',
       instances: 1,
       autorestart: true,
       watch: false,
       max_memory_restart: '1G',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   };
   ```

## Workflow Features

### Matrix Builds

- Tests across multiple Node.js versions (18.x, 20.x)
- Ensures compatibility across different runtime environments

### Artifact Management

- Build artifacts are shared between jobs
- Playwright reports are preserved for debugging
- Retention periods configured for storage optimization

### Quality Gates

- All jobs must pass before deployment
- TypeScript type checking ensures code quality
- ESLint enforces coding standards

### Security Features

- Automated dependency vulnerability scanning
- Code quality analysis with CodeQL
- Regular dependency update notifications

### Deployment Safety

- Health checks after deployment
- Backup creation before new deployment
- Rollback capabilities (manual)

## Monitoring and Debugging

### Build Artifacts

- Next.js build outputs are available for download
- Playwright test reports include screenshots and traces
- Artifacts are retained based on configured retention periods

### Notifications

- Deployment success/failure notifications
- Security vulnerability alerts
- Outdated dependency reports

### Logs

- Detailed job logs available in GitHub Actions
- SSH deployment logs show server-side operations
- Health check results verify deployment success
