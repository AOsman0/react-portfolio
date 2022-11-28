import DadJokes from "../Images/dad-jokes.jpg";
import MarketingSEO from "../Images/marketing-seo.jpg";
import PasswordGenerator from "../Images/password-gen.jpg";
import CodeQuiz from "../Images/code-quiz.jpg";
import WeatherDash from "../Images/weather-dash.jpg";
import Library from "../Images/library.jpg";
import Reading from "../Images/read-me.jpg";
import ECommerce from "../Images/e-commerce.jpg";
import Employee from "../Images/employee-track.jpg";
import Mentor from "../Images/mentor-me.jpg";
import BookSearch from "../Images/book-search-engine.jpg";
import Quizzical from "../Images/quizzical.jpg";
import { useState } from "react";

export const Cards = () => {
  const [frontEndCards, setFrontCards] = useState(false);
  const [backEndCards, setBackEndCards] = useState(false);
  const [groupCards, setGroupCards] = useState(false);

  const showFrontEndProjects = (event) => {
    setFrontCards(true);
    setBackEndCards(false);
    setGroupCards(false);
  };
  const showBackEndProjects = (event) => {
    setBackEndCards(true);
    setFrontCards(false);
    setGroupCards(false);
  };
  const showGroupProjects = (event) => {
    setGroupCards(true);
    setBackEndCards(false);
    setFrontCards(false);
  };

  const frontEndCardDetails = [
    {
      name: "Dad Jokes",
      details: "An interactive basic app using a 3rd Party API.",
      gitHubLink: "https://github.com/AOsman0/dad-jokes",
      image: DadJokes,
    },

    {
      name: "Marketing SEO",
      details: "Refactoring semantic elements",
      gitHubLink:
        "https://github.com/AOsman0/marketing-agency-refactor/tree/dev",
      image: MarketingSEO,
    },
    {
      name: "Password Generator",
      details: "Using JavaScript Fundamentals to create a password generator",
      gitHubLink: "https://github.com/AOsman0/password-generator/tree/dev",
      image: PasswordGenerator,
    },
    {
      name: "Code Quiz",
      details: "Using JavaScript to create a fully functioning quiz",
      gitHubLink: "https://github.com/AOsman0/code-quiz/tree/dev",
      image: CodeQuiz,
    },
    {
      name: "Weather Dashboard",
      details:
        "Used Web API's such as Bootstrap as well as 3rd Party APIs to create a weather dashboard",
      gitHubLink: "https://github.com/AOsman0/weather-dashboard",
      image: WeatherDash,
    },
  ];

  const groupProjectDetails = [
    {
      name: "Library Of Knowledge",
      details: "A modern library for users using a third party API",
      gitHubLink: "https://github.com/AOsman0/library-of-knowledge",
      image: Library,
    },
    {
      name: "MentorMe",
      details: "A full stack mentoring app",
      gitHubLink: "https://github.com/Am0031/coding-mentoring",
      image: Mentor,
    },
    {
      name: "Quizzical",
      details: "Full stack quiz application",
      gitHubLink: "https://github.com/faisal244/quizzical-front-end",
      image: Quizzical,
    },
  ];

  const backEndDetails = [
    {
      name: "READ-Me-Generator",
      details: "A read-me generated using NodeJS and Inquirer",
      gitHubLink: "https://github.com/AOsman0/read-me",
      image: Reading,
    },
    {
      name: "Employee Tracker",
      details: "Building a command-line application from scratch",
      gitHubLink: "https://github.com/AOsman0/employee-tracker/tree/main",
      image: Employee,
    },
    {
      name: "E-Commerce-BackEnd",
      details: "Buidling the back-end for a e-commerce website",
      gitHubLink: "https://github.com/AOsman0/e-commerce-back-end/tree/dev",
      image: ECommerce,
    },
    {
      name: "Book Search Engine",
      details:
        "Refactor a fully functioning google books api with GraphQL and Apollo Server",
      gitHubLink: "https://github.com/AOsman0/book-search-engine/tree/dev",
      image: BookSearch,
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-evenly mt-3">
        <button
          class="bg-gradient-to-l from-slate-600 flex-1 text-center hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
          onClick={showFrontEndProjects}
        >
          Front End
        </button>
        <button
          class="bg-gradient-to-l from-slate-600 flex-1 text-center hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
          onClick={showBackEndProjects}
        >
          Back End
        </button>
        <button
          class="bg-gradient-to-l from-slate-600 flex-1 text-center hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
          onClick={showGroupProjects}
        >
          Group Projects
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {frontEndCards ? (
          <div>
            {frontEndCardDetails.map((front) => (
              <div className="flex flex-col items-center mt-4">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={front.image}
                />
                <h5 className="mb-1 text-xl font-medium text-slate-700 dark:text-slate-700">
                  {front.name}
                </h5>
                <span className="text-sm text-slate-700  dark:text-slate-70">
                  {front.details}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href={front.gitHubLink}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-slate-800  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:slate-800  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    GitHubLink
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        {backEndCards ? (
          <div>
            {backEndDetails.map((backEnd) => (
              <div className="flex flex-col items-center mt-4">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={backEnd.image}
                />
                <h5 className="mb-1 text-xl font-medium text-slate-700 dark:text-slate-700">
                  {backEnd.name}
                </h5>
                <span className="text-sm text-slate-700  dark:text-slate-70">
                  {backEnd.details}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href={backEnd.gitHubLink}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-slate-800  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:slate-800  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    GitHubLink
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        {groupCards ? (
          <div>
            {groupProjectDetails.map((group) => (
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={group.image}
                />
                <h5 className="mb-1 text-xl font-medium text-slate-700 dark:text-slate-700">
                  {group.name}
                </h5>
                <span className="text-sm text-slate-700  dark:text-slate-70">
                  {group.details}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href={group.gitHubLink}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-slate-800  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:slate-800  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    GitHubLink
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
