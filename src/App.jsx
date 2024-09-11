import "./App.css";
import Project1 from "./assets/inspecthiscar.png";
import Project2 from "./assets/project_2.png";
import P_1 from "./assets/p_1.png";
import p_2 from "./assets/p_2.png";
import pot from "./assets/port.png";
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
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-10">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-16">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-base md:mt-0 mt-1 md:text-4xl">
                Hello, I'm Ashfaq Ahmad,
              </h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Front-End Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400 leading-7">
                  Front-End Developer with over a year of experience at{" "}
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
                      href="/resume.pdf"
                      download="Ashfaq_Ahmad.pdf"
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
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <Carousel>
                  <img src={Project1} className="w-full h-[200px] rounded-sm" />
                </Carousel>
                <h3 className="text-2xl font-semibold mt-8">
                  Inspect This Car landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  This project is for a Canadian client and involves a booking
                  system for car inspections. It includes three modules:
                  Customer, Garage Admin, and Super Admin. I used Tailwind CSS
                  for styling, React Core UI library for components, React
                  Router DOM for navigation, Axios for API calls, and Strapi CMS
                  for the blog section.
                </p>
                <div className="flex mt-[80px] gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://inspectthiscar.com/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-[200px]" />
                <h3 className="text-2xl font-semibold mt-8">
                  Click & Connect store landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online store of designer
                  furniture. HTML5, CSS3 (SCSS) Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Tenetur aut et necessitatibus
                  aperiam architecto quasi recusandae ut id nulla numquam! Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
                  officia alias mollitia dicta neque possimus qui lo
                </p>
                <div className="flex gap-2 mt-12  ">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <Carousel>
                  <img src={P_1} alt="" className=" rounded-sm" />
                  <img src={p_2} alt="" className=" rounded-sm" />
                </Carousel>
                {/* <img src={Project3} className="w-full h-auto" /> */}
                <h3 className="text-2xl font-semibold mt-8">
                  Landing page for front-end developer
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page for front-end
                  developer. HTML5, CSS3 (SCSS).
                </p>
                <div className="flex  gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href="https://click-connect.vercel.app/" target="_blank">
                      Live preview
                    </a>
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={pot} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Website redesign for The Venus project
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                  (SCSS)
                </p>
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
                    Checkout github
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
              Additional Technologies and Skills
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
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
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
