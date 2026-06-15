# Modern React.js Portfolio Website (Vite)

This is a professional, high-performance developer portfolio built with **React.js** and **Vite**, featuring smooth transitions via **Framer Motion**, clean modular styling with **CSS Modules**, and interactive contact handling using **EmailJS**.

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 🛠️ Installation
1. Clone or copy the portfolio code to your local machine.
2. Open your terminal in the project directory.
3. Install the dependencies by running:
   ```bash
   npm install
   ```

### 💻 Local Development
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to the local host URL shown in your console (usually `http://localhost:5173`).

### 📦 Production Build
To build the application for production deployment, run:
```bash
npm run build
```
This compiles your React project into highly optimized static assets inside the `dist/` directory.

---

## 📦 Package Dependencies
The project uses the following major packages:
- **`react`** & **`react-dom`** (v19) - Core framework
- **`vite`** - Fast frontend toolchain and development server
- **`framer-motion`** - Advanced physics-based UI animations and slide reveals
- **`react-icons`** - Sleek vector icons for technology logos and UI actions
- **`@emailjs/browser`** - Secure integration for the email contact form

---

## ⚙️ Configuration (EmailJS Integration)
To enable form submissions to your inbox:
1. Register for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service (e.g., Gmail) and get your `Service ID`.
3. Create an Email Template and get your `Template ID`. Note down the parameter names. In the template layout, use `{{from_name}}` for sender name, `{{reply_to}}` for sender email, and `{{message}}` for message text.
4. Obtain your API Public Key from the Account settings.
5. In your local workspace, create a `.env` file at the root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
6. Alternatively, you can edit the values directly at the top of [Contact.jsx](file:///c:/Users/anand/OneDrive/Documents/FullStackDevelopment/Portfoilo/src/components/Contact/Contact.jsx).

---

## 🌐 Deployment Instructions (Vercel)

You can deploy this project to [Vercel](https://vercel.com/) in just a few clicks:

### Option 1: Vercel Dashboard (Recommended)
1. Push your project code to a remote Git repository (GitHub, GitLab, or Bitbucket).
2. Log in to your [Vercel Dashboard](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. Under **Build & Development Settings**, Vercel will automatically detect **Vite** as the framework:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. (Optional) Under **Environment Variables**, add your EmailJS keys:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click **Deploy**. Vercel will build and launch your site with a custom URL (e.g. `your-project.vercel.app`).

### Option 2: Vercel CLI
If you prefer deploying via terminal:
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in and initialize:
   ```bash
   vercel
   ```
3. Build and deploy for production:
   ```bash
   vercel --prod
   ```
