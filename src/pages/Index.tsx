
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { FeedLayout } from "@/components/FeedLayout";
import { PastEvents } from "@/components/PastEvents";
import { HomeIcon, Building, House, Hammer, Construction, BrickWall } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className={`flex justify-center mb-8 transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <div className="logo-container relative">
                  <div className="relative h-32 md:h-40 flex items-center justify-center">
                    <div className="aihs-animated-text flex space-x-1 md:space-x-2">
                      {/* A */}
                      <div className="letter-container relative h-32 md:h-40 w-24 md:w-28">
                        <div className="letter font-bold text-6xl md:text-7xl text-primary">A</div>
                        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                          <House className="text-primary/20 absolute w-12 h-12 -top-5 -left-3 transform rotate-12" />
                          <Building className="text-primary/30 absolute w-10 h-10 top-1/2 -left-2" />
                        </div>
                      </div>
                      
                      {/* I */}
                      <div className="letter-container relative h-32 md:h-40 w-10 md:w-12">
                        <div className="letter font-bold text-6xl md:text-7xl text-primary">I</div>
                        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                          <Building className="text-blue-600/20 absolute w-16 h-16 -top-8 -right-2 transform rotate-45" />
                          <House className="text-orange-500/30 absolute w-10 h-10 bottom-5 -left-5 transform -rotate-12" />
                        </div>
                      </div>
                      
                      {/* H */}
                      <div className="letter-container relative h-32 md:h-40 w-24 md:w-28">
                        <div className="letter font-bold text-6xl md:text-7xl text-primary">H</div>
                        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 animate-fade-in" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
                          <HomeIcon className="text-blue-600/20 absolute w-8 h-8 top-8 -left-4" />
                          <Building className="text-orange-500/30 absolute w-12 h-12 bottom-8 -right-6 transform rotate-12" />
                        </div>
                      </div>
                      
                      {/* S */}
                      <div className="letter-container relative h-32 md:h-40 w-24 md:w-28">
                        <div className="letter font-bold text-6xl md:text-7xl text-primary">S</div>
                        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                          <House className="text-primary/20 absolute w-14 h-14 -top-7 -right-7 transform -rotate-12" />
                          <HomeIcon className="text-blue-600/30 absolute w-10 h-10 bottom-10 -right-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className={`construction-animation absolute inset-0 pointer-events-none ${animationComplete ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="construction-element absolute"
                          style={{ 
                            animation: `constructionFloat ${2 + Math.random() * 2}s ${Math.random() * 1}s infinite alternate`,
                            left: `${10 + i * 10}%`,
                            top: `${20 + Math.random() * 60}%`,
                            opacity: 0,
                            transform: 'scale(0.8)',
                            animationDelay: `${0.7 + i * 0.2}s`
                          }}
                        >
                          {i % 4 === 0 ? 
                            <HomeIcon className="text-primary h-6 w-6" /> : 
                            i % 4 === 1 ? 
                            <Building className="text-blue-600 h-6 w-6" /> :
                            i % 4 === 2 ?
                            <House className="text-orange-500 h-6 w-6" /> :
                            <Building className="text-green-700 h-6 w-6" />
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="logo-line w-0 h-1 bg-gradient-to-r from-blue-600 via-primary to-orange-500 mx-auto rounded-full animate-expand-line"></div>
                </div>
              </div>
              <div className="inline-block rounded-full bg-green-600/10 px-3 py-1 text-sm text-green-600 mb-4 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards', opacity: 0 }}>
                Africa International Housing Show
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-balance overflow-hidden">
                <span className="block animate-reveal-text">Connecting Africa's Housing Industry</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards', opacity: 0 }}>
                Discover updates from top housing companies, connect with industry leaders, and grow your network.
              </p>
            </div>
          </section>
          
          <FeedLayout />
          
          <PastEvents />
        </div>
      </main>
    </div>
  );
};

export default Index;
