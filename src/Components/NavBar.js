import { useHref, useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate();

  const items = ["Home", "Career", "Portfolio", "Contact Me"];

  const navigatePath = (event) => {
    const path = event.target.innerHTML;

    switch (path) {
      case "Home":
        navigate("/");
        console.log("home");
        break;
      case "Career":
        navigate("/Career");
        console.log("career");
        break;
      case "Portfolio":
        navigate("/Portfolio");
        console.log("portfolio");
        break;
      case "Contact Me":
        navigate("/ContactMe");
        console.log("contact");
        break;
    }
  };

  return (
    <div>
      <nav className="rounded-l z-40 w-full fixed top-0 py-2 bg-slate-600">
        <div className="flex justify-evenly font-large text-l text-white">
          {items.map((item) => (
            <a
              className="block py-2 pl-3 pr-4 text-center flex-row cursor-pointer hover:bg-cyan-400 rounded-md"
              onClick={navigatePath}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};
