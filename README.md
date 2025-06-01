<h1 align="center">EDIFY</h1>

<p align="center">
  <em>Empowering education through seamless digital connections.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/last%20commit-may-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/css-63.8%25-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/languages-3-blue?style=flat-square" />
</p>

<p align="center">
  <em>Built with the tools and technologies:</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JSON-black?logo=json&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Markdown-black?logo=markdown&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square" />
</p>

---

https://github.com/user-attachments/assets/f8e40b46-5c8e-408f-93ce-4c5f51f9f813



# 📘 Edify - An Education Platform (React)

**Edify** is a dynamic and immersive **education platform** built with **React**, tailored to connect students, educators, and institutions in one unified digital environment. It delivers a clean, modern user experience across all devices and focuses on interactive, accessible, and high-quality education for learners of all levels.

> 💡 “We ensure better Education for a better world.”

---

## 🧾 About Edify

Edify isn't just a front-facing website—it's a **feature-rich education system** with dedicated sections for academic programs, faculty, student testimonials, and campus facilities. Designed with scalability in mind, it supports static and dynamic deployments, integrates with external systems, and offers a modular architecture for easy extension.

Whether you're:
- A **school or university** administrator showcasing your institution,
- A **student** exploring learning options, or
- A **developer** looking to build your own version,

Edify offers the foundation for your goals.

---

## 🎯 Purpose

The main objectives behind Edify are:

✅ **Digital Transformation for Education**  
Enable traditional institutions to maintain an engaging online presence.

✅ **Student-Centric Design**  
Deliver structured, bite-sized, and visually intuitive content for learners.

✅ **Modern UI for Institutions**  
Provide an aesthetic and functional showcase of campus life, academic programs, and teaching excellence.

✅ **Ease of Use & Accessibility**  
Ensure the platform is intuitive for every type of user, including students, faculty, and parents.

---

## ⚙️ Tech Stack

| Layer             | Technologies Used                                                  |
|------------------|---------------------------------------------------------------------|
| **Frontend**      | React (with Create React App or Vite), JSX, Functional Components  |
| **Routing**       | `react-router-dom`                                                 |
| **State Management** | React Context API (or Redux if extended)                      |
| **Styling**       | CSS Modules / Tailwind CSS / SCSS                                 |
| **Responsive Design** | Flexbox, Grid, Media Queries for mobile optimization         |
| **Assets**        | Custom SVGs, Web-optimized PNGs/JPEGs, Fonts from Google Fonts     |
| **Deployment**    |  Vercel / GitHub Pages                                           |

---


## 📁 Project Structure

```
edify/
├── public/                        # Static assets served directly (favicon, manifest, etc.)
│   └── index.html                 # Root HTML file
├── src/                           # All source files
│   ├── assets/                    # Static media assets like images and videos
│   │   ├── images/                # All PNGs, JPGs, icons
│   │   └── videos/                # MP4 and other video files
│   ├── components/                # Reusable shared UI components
│   │   ├── Navbar/                # Navigation bar component
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Footer/                # Footer section
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Title/                 # Title header component
│   │   │   ├── Title.jsx
│   │   │   └── Title.css
│   │   └── VideoPlayer/           # Embedded video component
│   │       ├── Videoplayer.jsx
│   │       └── Videoplayer.css
│   ├── pages/                     # Route-level pages
│   │   ├── Home/                  # Homepage content (Hero, etc.)
│   │   ├── About/                 # About page content
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Campus/                # Campus info section
│   │   │   ├── Campus.jsx
│   │   │   └── Campus.css
│   │   ├── Contact/               # Contact form and info
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Facilities/            # School/College facility info
│   │   │   ├── Facilities.jsx
│   │   │   └── Facilities.css
│   │   ├── Programs/              # Program offerings
│   │   │   ├── Programs.jsx
│   │   │   └── Program.css
│   │   ├── Teachers/              # Teachers profiles
│   │   │   ├── Teachers.jsx
│   │   │   └── Teachers.css
│   │   └── Testimonials/          # User testimonials or feedback
│       │   ├── Testimonials.jsx
│       │   └── Testimonials.css
│   ├── data/                      # Static data (JS/JSON) to populate UI
│   │   ├── teachers.json
│   │   ├── programs.json
│   │   └── testimonials.json
│   ├── styles/                    # Global styles or shared variables
│   │   └── index.css
│   ├── App.jsx                    # Main app component with routing
│   └── main.jsx                   # ReactDOM entry point
├── .gitignore
├── README.md                     # Project overview, setup instructions
├── eslint.config.js             # ESLint configuration
├── vite.config.js               # Vite build configuration
├── package.json
├── package-lock.json
```

---


## 📦 Core Features

🔹 **Homepage**

![Screenshot 2025-05-09 225614](https://github.com/user-attachments/assets/4997ce29-b006-4dbe-941b-a467a6ebc172)

- Hero section with mission statement and call to action.
- Smooth navigation to explore the entire platform.

🔹 **Programs Offered**

![Screenshot 2025-05-09 225643](https://github.com/user-attachments/assets/5e7b3413-af56-4e3b-935d-586519491d49)


- Detailed sections for Graduation, Master's, and Post-Graduate programs.
- Modular cards displaying course information.

🔹 **About Us**

![Screenshot 2025-05-09 225709](https://github.com/user-attachments/assets/dc594e7b-7265-4d0c-838b-d2942183c99b)

- Highlights university philosophy, mission, and vision.

🔹 **Virtual Campus Gallery**

![Screenshot 2025-05-09 225740](https://github.com/user-attachments/assets/84c05a98-22e5-4ad9-b72d-c52325faec83)

- Dynamic photo carousel showcasing campus life.

🔹 **Facilities**

![Screenshot 2025-05-09 225817](https://github.com/user-attachments/assets/32769fa0-f521-48a3-833a-62680e39823e)


- Interactive section covering infrastructure (library, park, canteen, swimming pool, etc.)

🔹 **Teacher Profiles**

![Screenshot 2025-05-09 225838](https://github.com/user-attachments/assets/a3fbe9f8-6b81-47d5-9203-b6b560653bfe)


- Cards showcasing faculty members, their expertise, and subjects.

🔹 **Student Testimonials**

![Screenshot 2025-05-09 225910](https://github.com/user-attachments/assets/0cdf0196-8fa0-4881-89e6-d86b0d446163)


- Quotes and feedback from real users, giving credibility and trust.

🔹 **Contact Section**

![Screenshot 2025-05-09 225927](https://github.com/user-attachments/assets/d7341a8d-4af7-4975-8b8c-fe6cf2d9745e)


- Static or dynamic form integration for inquiries.

🔹 **Fully Responsive UI**
- Optimized for mobile, tablet, and desktop using responsive layout strategies.

---

## 🧠 Use Cases

- 🎓 **Universities/Schools**: Use Edify as a digital front for campus outreach.
- 👨‍💻 **Developers**: Extend the platform for online learning or LMS systems.
- 📈 **Startups/EdTech**: Customize it as an MVP for educational products.
- 📷 **Portfolio Projects**: Showcase frontend and UI/UX design skills.

---

## SEE ONLINE:
link : https://edify-rho.vercel.app/

## 🚀 Getting Started

To run this project locally:

### 🔧 Prerequisites

Ensure the following are installed:
- Node.js (v16+ recommended)
- npm or yarn
- Git

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/Anamicca23/edify.git

# Navigate into the project
cd edify

# Install dependencies
npm install
# or
yarn install


### ▶️ Run the Development Server

```bash
npm start
# or
yarn start
```

Your app should now be running at `http://localhost:3000`.

---
## ✅ To-Do / Future Enhancements

- 🔐 Authentication system for students and teachers
- 📊 Admin dashboard with content management
- 💬 Chat or discussion board integration
- 📦 CMS support (Strapi, Sanity, Contentful)
- 🌐 Multi-language/i18n support

---

## 🤝 Contributing

We welcome contributions of all kinds! To get started:

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add your message"

# Push to the branch
git push origin feature/your-feature-name

# Open a pull request
```

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

---

> Built with 💙 using **React** to reshape the future of education.


<p align="center">
  <a href="#top">
    <img src="https://img.shields.io/badge/⬅️%20Return-blue?style=for-the-badge" alt="Return Button"/>
  </a>
</p>

