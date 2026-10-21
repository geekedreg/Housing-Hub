
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl font-medium mb-2">Page not found</p>
        <p className="text-muted-foreground mb-6">
          Sorry, the page at <span className="font-mono">{location.pathname}</span> doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link to="/">
            <Button className="w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
          <Link to="/companies">
            <Button variant="outline" className="w-full sm:w-auto">
              Browse Companies
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
