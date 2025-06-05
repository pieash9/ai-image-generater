import { useState } from "react";
import Header from "./components/Header";
import CreateImage from "./components/create-image/CreateImage";
import Downloaded from "./components/downloaded/Downloaded";
import { ImageProvider } from "./context/ImageContext";

const App = () => {
  const [activeRoute, setActiveRoute] = useState("create");
  return (
    <ImageProvider>
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header/Logo */}
          <Header onRouteChange={setActiveRoute} activeRoute={activeRoute} />
          {/* Glow */}
          <div className="fixed -bottom-1/4 -right-0">
            <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
          </div>
          {/* Main Content */}
          <main className="relative z-10">
            {activeRoute === "create" ? <CreateImage /> : <Downloaded />}
          </main>
        </div>
      </div>
    </ImageProvider>
  );
};

export default App;
