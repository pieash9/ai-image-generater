// import logo from "../assets/logo.svg";

const Header = ({ onRouteChange, activeRoute }) => {
  return (
    <header className="flex items-center mb-12 justify-between">
      {/* <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10" /> 
      </div> */}
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        <a
          onClick={() => onRouteChange("create")}
          className={`hover:text-zinc-200 font-medium cursor-pointer transition-all ${
            activeRoute === "create" ? "text-zinc-200" : ""
          }`}
        >
          Create Images
        </a>
        <a
          onClick={() => onRouteChange("download")}
          className={`hover:text-zinc-200 cursor-pointer transition-all ${
            activeRoute === "download" ? "text-zinc-200" : ""
          }`}
        >
          Downloaded
        </a>
      </ul>
    </header>
  );
};

export default Header;
