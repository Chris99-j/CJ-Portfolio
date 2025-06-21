const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

function openModal(projectTitle) {
  document.getElementById('projectModal').style.display = 'flex';
  document.getElementById('modalTitle').textContent = projectTitle;
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}
const projects = {
  1: {
    title: "TalentFlow HR Suite",
    image: "assets/images/hr.jpg",
    description: "Oversees recruitment, employee records, payroll, leave management, and performance evaluations with secure, role-based access."
  },
  2: {
    title: "CivicAid Request Portal or Request Assistance System",
    image: "assets/images/asisstance.jpg",
    description: "Enables submission, approval, and monitoring of various forms of client or public assistance requests with a seamless UI."
  },
  3: {
    title: "Permit Express or Business Permit System",
    image: "assets/images/business.jpg",
    description: "Automates permit applications, renewals, and compliance for businesses with real-time status tracking and approval workflow."
  },
  4: {
    title: "Alert Response or Emergency Alert System",
    image: "assets/images/emergency.jpg",
    description: "Facilitates real-time emergency reporting and response coordination with automated alert notifications for quick deployment."
  },
  5: {
    title: "Information Center System",
    image: "assets/images/announcement.png",
    description: "Publishes official announcements, community updates, and public records via an admin-controlled content management interface."
  },
  6: {
    title: "JusticeTrack Management System",
    image: "assets/images/casemanagement.jpg",
    description: "Tracks, updates, and resolves cases with role-based access, status monitoring, and case analytics tools."
  },
  7: {
    title: "Online Shopping System",
    image: "assets/images/marketplace.jpg",
    description: "Includes vendor registration, product listings, cart management, payment processing, and customer feedback tools."
  },
  8: {
    title: "Payment System",
    image: "assets/images/onlinepayments.png",
    description: "Processes digital payments with invoicing, billing, and automatic confirmation notifications."
  },
  9: {
    title: "Ease Ticketing System",
    image: "assets/images/e-ticketing.jpg",
    description: "Handles event ticket sales, reservations, payment, and support all in one integrated platform.",
     github: "https://github.com/Chris99-j/Ticket-Booking.git",
    live: "https://chris99-j.github.io/Ticket-Booking/"
  },
  10: {
    title: "Project Management System",
    image: "assets/images/management.jpg",
    description: "Enables collaborative task planning, resource allocation, and project tracking with user role controls."
  },
  11: {
    title: "PowerTop Prepaid Utility Platform",
    image: "assets/images/load.jpg",
    description: "Allows users to purchase prepaid electricity credits and view transaction history via QR codes and Central Payment System."
  },
   12: {
    title: "Appointment System",
    image: "assets/images/appointment.jpg",
    description: "A user-friendly web application designed to streamline the process of booking and managing hospital appointments. It features dynamic doctor selection based on departments, real-time availability display, and calendar integration that disables unavailable dates for each doctor. Ideal for patients to conveniently schedule visits while helping hospitals manage appointment loads efficiently."
  },
  13: {
  title: "Nursing Case Management",
  image: "assets/images/nursing.png",
  description: "A comprehensive platform for tracking nursing cases, including patient profiles, diagnoses, treatment progress, and nurse assignments. Designed to streamline patient care and documentation in clinical settings."
},
14: {
  title: "Attendance Tracker",
  image: "assets/images/attendance.jpg",
  description: "An efficient system for logging and monitoring attendance of employees or students. Includes timestamp logging, leave records, and weekly/monthly attendance reports for performance and compliance monitoring."
},
15: {
  title: "Lesson Plan Manager",
  image: "assets/images/lesson-plan.png",
  description: "A web application for teachers to create, manage, and export lesson plans. Features include saving, printing, PDF/DOCX export, and clean user interface for better planning efficiency."
},
  16: {
    title: "Offline AI Chatbot (LLM-powered)",
    image: "assets/images/chatbot.jpg",
    description: "A local AI assistant using LangChain + Ollama + embeddings for document Q&A and offline code generation.",
    github: "https://github.com/Chris99-j/offline-ai.git",
    live: null
  },
  17: {
    title: "Mineral Water Delivery System",
    image: "assets/images/mineral.jpg", // 🔁 update with your actual image filename
    description: "A Vue.js web app for managing and delivering mineral water orders within a barangay. Built with a simple interface for mobile users.",
    github: "https://github.com/Chris99-j/Mineral-Delivery.git",
    live: "https://chris99-j.github.io/Mineral-Delivery/"
  },
  18: {
  title: "Auto Balance Sheet System",
  image: "assets/images/balance-sheet.webp", // 🔁 update with your actual image filename
  description: "An HTML/CSS/JS web app that helps users input and auto-balance assets, liabilities, and equity. Includes Excel export feature.",
  github: "https://github.com/Chris99-j/balance-sheet.git",
  live: "https://chris99-j.github.io/balance-sheet/"
},
  19: {
  title: "AI Website Tester",
  image: "assets/images/Web-testing.jpg", // 🔁 Add a real screenshot here
  description: "A frontend-only web app that uses a local LLM (via Ollama) to analyze HTML, CSS, and JavaScript code for accessibility, SEO, UX, and security issues. Features include code preview with syntax highlighting, file upload, PDF report export, and mobile-responsive UI.",
  github: "https://github.com/Chris99-j/ai-tester.git",
  live: null
}

};



const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = modal.querySelector(".close");

  document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-project-id');  // FIX here
    const project = projects[id];
    if (project) {
      modalImage.src = project.image;
      modalImage.alt = project.title;
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modal.style.display = "flex";
      document.body.style.overflow = 'hidden';
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
});



window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    document.body.style.overflow = '';
  }
});

