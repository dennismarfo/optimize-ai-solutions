
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-aiDark text-white">
      <div className="text-center max-w-lg glass-panel p-10">
        <h1 className="text-6xl font-bold mb-4 text-aiBlue">404</h1>
        <p className="text-xl text-white/80 mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="flex items-center justify-center bg-aiBlue hover:bg-aiBlueLight text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-aiBlueGlow"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
