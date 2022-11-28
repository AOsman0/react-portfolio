import MyImage from "../Images/my-profile.jpeg";
import Typed from "react-typed";

export const Home = () => {
  const myInspiration = [
    "I am inspired to want to learn something.",
    "I enjoy spending all my time with my family.",
    "I am described often as a curious person.",
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-row justify-center">
        <img
          src={MyImage}
          className="w-96 h-96 rounded-full mt-20"
          alt="image of my self"
        />
      </div>
      <div className="text-center text-slate-700 font-bold text-xl mt-2">
        <h1 className="mt-4 mb-4">
          Hello <span class="animate-[wave_5s_ease-in-out_2]">👋🏽</span> My Name
          Is Osman
        </h1>
        <Typed
          strings={["Full Stack Developer 💻", "I Love Coffee ☕"]}
          typeSpeed={75}
          backSpeed={75}
          loop
        ></Typed>
      </div>
      <div className="mt-6 pt-4">
        <h1 className="font-bold text-center pb-2 text-xl text-gray-500">
          A Little Bit More About Me ...
        </h1>
        {myInspiration.map((interest) => (
          <li className="text-center list-none text-l mt-4 pb-4">{interest}</li>
        ))}
      </div>
    </div>
  );
};
