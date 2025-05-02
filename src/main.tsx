
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Custom smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

createRoot(document.getElementById("root")!).render(<App />);
