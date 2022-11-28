import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiSap } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiPython } from "react-icons/si";

export const CareerInfo = () => {
  return (
    <div className="min-h-screen flex mt-12 pt-1">
      <div className="bg-gradient-to-l from-slate-600 flex-1 text-center text-slate-800 text-2xl font-serif font-bold">
        <h1 className="mt-3">Skills</h1>
        <div className="flex flex-row justify-evenly mt-3">
          <FaReact className="text-center text-8xl max-md:text-4xl" />
          <FaJsSquare className="text-center text-8xl max-md:text-4xl" />
          <FaNode className="text-center text-8xl max-md:text-4xl" />
          <DiMysql className="text-center text-8xl max-md:text-4xl" />
          <DiNpm className="text-center text-8xl max-md:text-4xl" />
          <DiMongodb className="text-center text-8xl max-md:text-4xl" />
          <SiExpress className="text-center text-8xl max-md:text-4xl" />
          <SiSequelize className="text-center text-8xl max-md:text-4xl" />
        </div>
        <h1 className="mt-3">Currently Learning</h1>
        <div className="flex flex-row justify-evenly mt-3">
          <FaAws className="text-8xl max-md:text-4xl " />
          <SiSap className="text-8xl max-md:text-4xl" />
          <SiPython className="text-8xl max-md:text-4xl" />
        </div>
        <div className="text-center font-serif text-2xl font-bold ">
          <h1 className="mt-3">Career Timeline</h1>
          <div class="sm:w- w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-5">
            <div class="border-l-2 ">
              <div class=" transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-slate-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-black absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div class="w-10 h-1 bg-zinc-300 absolute -left-10 z-0"></div>

                <div class="flex-auto">
                  <h1 class="text-lg">BMI UK and Ireland</h1>
                  <h1 class="text-xl font-bold">
                    Placement Year Sales and Data Analyst
                  </h1>
                  <h2>June 2022 - June 2023</h2>
                </div>
              </div>

              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-stone-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-stone-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div class="w-10 h-1 bg-black absolute -left-10 z-0"></div>

                <div class="flex-auto">
                  <h1 class="text-lg">
                    Univeristy Of Birmingham Coding BootCamp
                  </h1>
                  <h1 class="text-xl font-bold">
                    Full Stack JavaScript Developer
                  </h1>
                  <h2>March 2022 - September 2022</h2>
                </div>
              </div>

              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gray-900 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-gray-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div class="w-10 h-1 bg-gray-100 absolute -left-10 z-0"></div>

                <div class="flex-auto">
                  <h1 class="text-lg">Aston University</h1>
                  <h1 class="text-xl font-bold">
                    BsC International Business and Economics
                  </h1>
                  <h2>September 2020 - September 2024</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
