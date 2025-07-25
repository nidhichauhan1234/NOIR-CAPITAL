# Noir Capital Web Application

A modern, responsive web application for Noir Capital, a consulting and investment company. Built with React, Vite, and Tailwind CSS, this project provides a professional online presence, job application management, and a dashboard for HRs.

## Features

- **Homepage:** Company mission, hero section, testimonials, and about section.
- **Services Page:** Detailed list of consulting and investment services.
- **Careers Page:** Job listings with descriptions and an apply button.
- **Contact Page:** Contact information and a working contact form.
- **HR Dashboard:**
  - Table overview of all job roles and number of applicants.
  - "View Applications" button for each job to see applicants in a modal.
- **Navigation:** Responsive header with links to all main pages, including the HR Dashboard.
- **Styling:** Modern, dark-themed UI using Tailwind CSS and custom styles.

## Tech Stack

- **Frontend:** React 19, React Router, @tanstack/react-query
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, custom CSS
- **Icons:** Lucide React

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

3. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

```
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, HeroSection, etc.)
│   ├── pages/            # Main pages (index, Services, Careers, Contact, HRDashboard, etc.)
│   ├── styles/           # CSS files (Tailwind and custom styles)
│   ├── App.jsx           # Main app component with routing
│   └── main.jsx          # Entry point
├── index.html            # HTML entry point
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## HR Dashboard Demo

- Go to **HR Dashboard** from the navigation menu.
- See a table of job roles and applicant counts.
- Click "View Applications" to see a modal with applicant details for each job.

## Contribution

- Frontend: Ishu
- Backend: Vaibhav & Anjali

## License

This project is for internal use at Noir Capital. Contact the team for more information.
