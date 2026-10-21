
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Building, Calendar, Home, LogIn, Menu, X, Info, Mail, UserPlus, Video, Eye, ChevronUp } from 'lucide-react';
import { AuthModal } from './AuthModal';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Check if menu content overflows
    const checkOverflow = () => {
      if (mobileMenuRef.current) {
        const { scrollHeight, clientHeight } = mobileMenuRef.current;
        setShowScrollIndicator(scrollHeight > clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [isMenuOpen]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3 glass-effect' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Africa Housing
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" icon={<Home size={18} />} label="Home" />
            <NavLink to="/companies" icon={<Building size={18} />} label="Companies" />
            <NavLink to="/about" icon={<Info size={18} />} label="About Us" />
            <NavLink to="/contact" icon={<Mail size={18} />} label="Contact" />
            <NavLink to="/register" icon={<UserPlus size={18} />} label="Register" />
            <NavLink to="/booking" icon={<Calendar size={18} />} label="Book Meeting" />
            <NavLink to="/live-stream" icon={<Video size={18} />} label="Live Stream" />
            <NavLink to="/vr-view" icon={<Eye size={18} />} label="VR View" />
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={openAuthModal}
              className="hover:bg-primary/5 transition-all duration-300"
            >
              <LogIn size={18} className="mr-2" />
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-green-600 hover:bg-green-700 transition-all duration-300"
            >
              Register
            </Button>
          </div>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-secondary/80 transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile menu - Bottom Navigation */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden ${isMenuOpen ? 'h-60' : 'h-16'} 
        transition-all duration-300 glass-effect shadow-lg border-t border-border overflow-hidden`}
      >
        {isMenuOpen ? (
          <>
            <div 
              ref={mobileMenuRef} 
              className="h-52 overflow-y-auto py-2 px-4 scrollbar-thin"
            >
              <nav className="flex flex-col space-y-1 items-start">
                <MobileNavLink to="/" icon={<Home size={20} />} label="Home" />
                <MobileNavLink to="/companies" icon={<Building size={20} />} label="Companies" />
                <MobileNavLink to="/about" icon={<Info size={20} />} label="About Us" />
                <MobileNavLink to="/contact" icon={<Mail size={20} />} label="Contact" />
                <MobileNavLink to="/register" icon={<UserPlus size={20} />} label="Register" />
                <MobileNavLink to="/booking" icon={<Calendar size={20} />} label="Book Meeting" />
                <MobileNavLink to="/live-stream" icon={<Video size={20} />} label="Live Stream" />
                <MobileNavLink to="/vr-view" icon={<Eye size={20} />} label="VR View" />
              </nav>
            </div>
            
            {showScrollIndicator && (
              <div className="absolute bottom-14 left-0 right-0 flex justify-center">
                <ChevronUp className="animate-bounce h-5 w-5 text-primary" />
              </div>
            )}
            
            <div className="h-8 flex justify-center items-center border-t border-border">
              <button 
                onClick={toggleMenu}
                className="w-10 h-1.5 bg-muted-foreground/40 rounded-full"
                aria-label="Close menu"
              />
            </div>
          </>
        ) : (
          <div className="h-full flex justify-around items-center px-2">
            <BottomNavIcon to="/" icon={<Home size={22} />} label="Home" />
            <BottomNavIcon to="/companies" icon={<Building size={22} />} label="Companies" />
            <BottomNavIcon onClick={toggleMenu} icon={<Menu size={22} />} label="Menu" isMenu />
            <BottomNavIcon to="/booking" icon={<Calendar size={22} />} label="Book" />
            <BottomNavIcon onClick={openAuthModal} icon={<LogIn size={22} />} label="Login" />
          </div>
        )}
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
};

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
        isActive 
          ? 'text-green-600 font-medium' 
          : 'text-foreground/80 hover:text-foreground'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const MobileNavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-3 py-2.5 px-4 rounded-md w-full transition-all duration-300 ${
        isActive 
          ? 'bg-green-600/10 text-green-600 font-medium' 
          : 'text-foreground/80 hover:bg-secondary/80'
      }`}
    >
      {icon}
      <span className="text-base">{label}</span>
    </Link>
  );
};

const BottomNavIcon = ({ 
  to, 
  icon, 
  label, 
  onClick,
  isMenu = false
}: { 
  to?: string; 
  icon: React.ReactNode; 
  label: string; 
  onClick?: () => void;
  isMenu?: boolean;
}) => {
  const location = useLocation();
  const isActive = to ? location.pathname === to : false;
  
  const content = (
    <div 
      className={`flex flex-col items-center justify-center ${
        isMenu ? 'text-primary' : isActive ? 'text-green-600' : 'text-foreground/70'
      } space-y-1`}
    >
      <div className={`p-1.5 rounded-full ${isActive ? 'bg-green-600/10' : ''}`}>
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
  
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="w-1/5 h-full flex items-center justify-center"
      >
        {content}
      </button>
    );
  }
  
  return (
    <Link to={to || "/"} className="w-1/5 h-full flex items-center justify-center">
      {content}
    </Link>
  );
};
