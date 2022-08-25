import { useState } from "react";

import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Portfolio } from "./components/Porfolio";

import "./App.css";

export const App = () => {
  const [isAboutMe, setIsAboutMe] = useState(false);

  // setting state variable name of state to be false
  const [isContactMe, setIsContactMe] = useState(false);

  // set up state variable name of state to be false

  const [isPortfolioMe, setisPortfolioMe] = useState(false);

  const [isInroductionDisplay, setisIntroductionDisplay] = useState(true);

  const handlePortfolioView = () => {
    console.log("clicked on portfolio");

    setisPortfolioMe(!isPortfolioMe);
    setIsAboutMe(false);
    setIsContactMe(false);
    setisIntroductionDisplay(false);
  };

  const handleAboutMe = () => {
    // on click function
    console.log("clicked");
    // calling the function and setting variable to be true
    setIsAboutMe(!isAboutMe);
    setIsContactMe(false);
    setisPortfolioMe(false);

    // if isAboutMe is clicked set is contactMe To False
    setisIntroductionDisplay(false);
  };

  const handleContactMe = async () => {
    // on click function
    console.log("clicked-on-contact");
    // calling the function and setting variable to be true
    setIsContactMe(!isContactMe);
    setIsAboutMe(false);
    setisPortfolioMe(false);
    setisIntroductionDisplay(false);
  };

  return (
    <div>
      <Header
        handleAboutMe={handleAboutMe}
        handleContactMe={handleContactMe}
        handlePortfolioView={handlePortfolioView}
        isAboutMe={isAboutMe}
        isContactMe={isContactMe}
        isPortfolioMe={isPortfolioMe}
      />

      {isAboutMe && <AboutMe colour="red" firstName="Osman" />}

      <div>{isContactMe && <ContactMe />}</div>
      {isInroductionDisplay && <Introduction />}
      {/* setting variable name to be true and rendering the contact function  */}
      <div>{isPortfolioMe && <Portfolio />}</div>
    </div>
  );
};
