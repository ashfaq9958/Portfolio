import "./App.css";
import Project1 from "./assets/inspecthiscar.png";
import Project2 from "./assets/project_2.png";
import P_1 from "./assets/p_1.png";
import p_2 from "./assets/p_2.png";
import pot from "./assets/port.png";
import project3 from "./assets/OMS.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container mx-auto px-6 py-8 max-w-4xl bg-gradient-to-r from-gray-900 to-black shadow-lg rounded-lg">
          <div className="flex flex-col gap-6 sm:flex-row justify-between items-center">
            <h1 className="font-bold text-3xl text-white">Portfolio.</h1>
            <ul className="flex gap-8">
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#aboutme"
                  className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
                >
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="relative mt-16">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div className="sm:mt-0 mt-12">
              <h2 className="font-bold text-2xl  md:text-4xl">
                Hello, I'm Ashfaq Ahmad,
              </h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Front-End Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400 leading-7">
                  Front-End Developer with 1.5+ year of experience at{" "}
                  <span className="font-semibold text-white">
                    Sofyrus Technologies
                  </span>
                  , specializing in building responsive and interactive user
                  interfaces. Proficient in{" "}
                  <span className="font-semibold text-white">
                    HTML5, CSS3, JavaScript, React.js, Redux Toolkit and
                    Tailwind CSS.{" "}
                  </span>
                  Expert in cross-browser compatibility and user accessibility.
                  Collaborative with design and back-end teams for seamless web
                  applications. Skilled in using{" "}
                  <span className="font-semibold text-white">
                    {" "}
                    CMS frameworks like Strapi
                  </span>{" "}
                  for streamlined web development and deployment.
                </p>
                <button className="relative px-8 py-4 mt-5 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full shadow-md shadow-gray-500 overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-lg hover:from-blue-700 hover:to-cyan-700">
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-700 to-cyan-700 opacity-0 transition-opacity group-hover:opacity-100 rounded-full"></span>
                  <span className="relative z-10 flex items-center text-white font-semibold space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <a
                      href="/public/Ashfaq-Ahmad.Resume.pdf"
                      download="Ashfaq_Ahmad_Resume.pdf"
                      className="no-underline"
                    >
                      Download Resume
                    </a>
                  </span>
                </button>
              </div>
            </div>
            <div className="relative"></div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container mx-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 sm:mt-10">
              {/* Project Card 1 */}
              <div className="border border-gray-300 rounded-lg p-5 flex-1 flex flex-col justify-between shadow-md">
                <Carousel indicators={false}>
                  <img
                    src={P_1}
                    alt="E-commerce Project"
                    className="w-full h-[200px] object-contain"
                  />
                  <img
                    src={p_2}
                    alt="E-commerce Project"
                    className="w-full h-[200px] object-contain"
                  />
                </Carousel>
                <h3 className="text-xl font-semibold mt-6">
                  Click & Collect (E-commerce)
                </h3>
                <ul className="mt-3 ml-4 space-y-1 text-sm text-gray-500 list-disc leading-relaxed">
                  <li>
                    Responsive Design: Mobile-first approach with a seamless
                    user experience across devices.
                  </li>
                  <li>
                    Product Pages: Dynamic listing and filtering of products.
                  </li>
                  <li>
                    Cart & Checkout: Add to cart, remove, and secure checkout
                    process.
                  </li>
                  <li>
                    UI/UX: Modern, attractive, and professional interface with
                    animations and hover effects.
                  </li>
                </ul>
                <div className="flex mt-6 sm:mt-10 gap-3">
                  <a
                    href="https://click-connect.vercel.app/"
                    target="_blank"
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-700 hover:to-cyan-700 text-center"
                  >
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/ashfaq9958/click-collect"
                    target="_blank"
                    className="flex-1 text-sm py-3 border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Card 1 */}
              <div className="border border-gray-300 rounded-lg p-5 flex-1 flex flex-col justify-between shadow-md">
                <>
                  <img
                    src={Project1}
                    className="w-full h-[200px] object-contain"
                    alt="Inspect This Car"
                  />
                </>
                <h3 className="text-xl font-semibold mt-6">
                  Inspect This Car Landing Page (ITC)
                </h3>
                <ul className="mt-3 ml-4 space-y-1 text-sm text-gray-500 list-disc leading-relaxed">
                  <li>
                    Project Overview: Developed for a Canadian client featuring
                    a car inspection booking system.
                  </li>
                  <li>Modules Included:</li>
                  <ul className="mt-2 ml-5 space-y-1 text-sm text-gray-500 list-disc leading-relaxed">
                    <li>Tailwind CSS: For styling the user interface.</li>
                    <li>React Core UI: For reusable components.</li>
                    <li>Axios: For handling API requests and data fetching.</li>
                    <li>
                      React Router DOM: For seamless navigation between pages.
                    </li>
                  </ul>
                </ul>
                <div className="flex mt-6 sm:mt-10 gap-3">
                  <a
                    href="https://inspectthiscar.com/"
                    target="_blank"
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-700 hover:to-cyan-700 text-center"
                  >
                    Live Preview
                  </a>
                  <a
                    href="https://github.com/ashfaq9958/inspect-this-car"
                    target="_blank"
                    className="flex-1 text-sm py-3 border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 & 4  */}

            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-300 rounded-lg p-5 flex-1 flex flex-col justify-between shadow-md">
                <>
                  <img
                    src={project3}
                    alt="E-commerce Project"
                    className="w-full  object-contain "
                  />
                </>
                <h3 className="text-xl font-semibold mt-6">
                  Outsourcing Management System (OMS)
                </h3>
                <ul className="mt-3 ml-4 space-y-1 text-sm text-gray-500 list-disc leading-relaxed">
                  <li>
                    Developed an ”OMS” for a Riyadh-based client, enhancing
                    operational efficiency and record management.
                  </li>
                  <li>
                    Enabled super admins to manage employee services, including
                    iqama, visa, health insurance, and payroll options.
                  </li>
                  <li>
                    Provided a system for employees to request services,
                    streamlining the process and improving accessibility.
                  </li>
                  <li>
                    Implemented tracking of employee records, including
                    expiration dates for visas, iqamas, and health insurance.
                  </li>
                </ul>
                <div className="flex mt-6 sm:mt-10 gap-3">
                  <a
                    href="https://oms.sofyrus.com/login"
                    target="_blank"
                    className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-700 hover:to-cyan-700 text-center"
                  >
                    Live Preview
                  </a>
                  <a
                    // href="https://github.com/ashfaq9958/click-collect"
                    target="_blank"
                    className="flex-1 text-sm py-3 border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="border border-gray-300 rounded-lg p-5 flex-1 flex flex-col justify-between shadow-md">
                <img src={pot} className="w-full h-auto" />
                <h3 className="text-xl font-semibold mt-6">
                  Responsive React Portfolio with Vite
                </h3>
                <ul className="mt-3 ml-4 space-y-1 text-sm text-gray-500 list-disc leading-relaxed">
                  <li>
                    Developed a modern and responsive portfolio using React and
                    Vite to demonstrate front-end development expertise.
                  </li>
                  <li>
                    Utilized Vite for its fast build performance and efficient
                    development experience.
                  </li>
                  <li>
                    Implemented Tailwind CSS to create a sleek, adaptive, and
                    visually appealing layout.
                  </li>
                  <li>
                    Focused on delivering a high-quality, user-friendly web
                    application with clean and efficient code.
                  </li>
                </ul>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a
                      href="https://ashfaq-portfolioo.netlify.app/"
                      target="_blank"
                    >
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href="https://github.com/ashfaq9958/Portfolio">
                      Checkout github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="container m-auto px-4 py-12" id="technologies">
          <h2 className="text-3xl font-semibold">Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">HTML5</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">CSS3</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">JavaScript</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">React</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
                alt="Tailwind CSS"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">Tailwind CSS</h3>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                alt="Redux"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">Redux Toolkit</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">GitHub</h3>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                alt="NPM"
                className="h-16"
              />
              <h3 className="mt-4 text-white font-semibold">NPM</h3>
            </div>
          </div>
        </section>

        {/* Additional skills section */}
        <section className="py-14 ">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold  mb-10">
              Additional Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              <div className="w-40 text-center">
                <p className="font-bold text-lg relative inline-block">
                  <span className="absolute -left-6 top-2 w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-full"></span>
                  Jira
                </p>
              </div>
              <div className="w-40 text-center">
                <p className="font-bold text-lg relative inline-block">
                  <span className="absolute -left-6 top-2 w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-full"></span>
                  CMS Strapi
                </p>
              </div>
              <div className="w-40 text-center">
                <p className="font-bold text-lg relative inline-block">
                  <span className="absolute -left-6 top-2 w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-full"></span>
                  Postman
                </p>
              </div>
              <div className="w-40 text-center">
                <p className="font-bold text-lg relative inline-block">
                  <span className="absolute -left-6 top-2 w-4 h-4 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-full"></span>
                  Swagger
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  I began my internship as a Front-End Developer at Sofyrus
                  Technologies in May 2023. I am now employed full-time with the
                  company.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  I hold a Bachelor's degree in Computer Science from AKTU
                  College.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2016</h3>
                <p>I have completed my Senior Secondary School from Aligarh</p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2013</h3>
                <p>I have completed my Secondary Education from Aligarh.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/ashfaqahmad99/"
                  target="_blank"
                >
                  <img src={LinkedIn} className="w-5 cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yusufkhan.845/"
                  target="_blank"
                >
                  <img src={Instagram} className="w-5 cursor-pointer" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
