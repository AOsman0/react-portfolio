import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ContactForm = () => {
  const form = useRef();

  const emailSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("gmail", "gmail_template", form.current, "zelAZILVYviPmYN5X")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div className="flex-col justify-center min-h-screen">
      <form
        ref={form}
        onSubmit={emailSubmit}
        className=" text-center p-10 mt-10"
      >
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            className="shadow-sm bg-slate-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="shadow-sm bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm text-center bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <label
          for="message"
          id="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <input
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-slate-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
          placeholder="Leave a comment..."
        ></input>
        <button
          type="submit"
          className="text-white bg-gradient-to-l from-slate-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
        >
          Send Message
        </button>
      </form>
      <div className="flex flex-row text-4xl text-center justify-center space-x-2">
        <a
          href="https://drive.google.com/file/d/1NhdT9AXmICiC-W7JY3RviPMi33hQ292K/view?usp=share_link"
          download
        >
          CV
        </a>
        <FaGithub href="https://github.com/AOsman0" />
        <FaLinkedin href="https://www.linkedin.com/in/abdirahman-osman-a6b165250/" />
      </div>
    </div>
  );
};
