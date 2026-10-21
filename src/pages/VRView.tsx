
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";

const VRView = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const resetZoom = () => setZoomLevel(1);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-12">
            <div className="max-w-3xl mx-auto animate-blur-in text-center mb-16">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Virtual Experience
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-balance">
                Explore AIHS in VR
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take a virtual tour of the Africa International Housing Show
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="exhibition" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="exhibition">Exhibition Hall</TabsTrigger>
                  <TabsTrigger value="conference">Conference Rooms</TabsTrigger>
                  <TabsTrigger value="outdoor">Outdoor Area</TabsTrigger>
                </TabsList>

                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
                  <TabsContent value="exhibition" className="m-0 h-full" style={{ transform: `scale(${zoomLevel})` }}>
                    <img 
                      src="https://africahousingshow.com/wp-content/uploads/2022/03/AIHS-Slider-2.jpg"
                      alt="Exhibition Hall VR View"
                      className="w-full h-full object-cover"
                    />
                  </TabsContent>
                  
                  <TabsContent value="conference" className="m-0 h-full" style={{ transform: `scale(${zoomLevel})` }}>
                    <img 
                      src="https://africahousingshow.com/wp-content/uploads/2022/03/AIHS-Slider-1.jpg"
                      alt="Conference Room VR View"
                      className="w-full h-full object-cover"
                    />
                  </TabsContent>
                  
                  <TabsContent value="outdoor" className="m-0 h-full" style={{ transform: `scale(${zoomLevel})` }}>
                    <img 
                      src="https://africahousingshow.com/wp-content/uploads/2022/03/AIHS-Slider-3.jpg"
                      alt="Outdoor Area VR View"
                      className="w-full h-full object-cover"
                    />
                  </TabsContent>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="bg-black/40 text-white hover:bg-black/60"
                      onClick={zoomIn}
                    >
                      <ZoomIn size={20} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="bg-black/40 text-white hover:bg-black/60"
                      onClick={zoomOut}
                    >
                      <ZoomOut size={20} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="bg-black/40 text-white hover:bg-black/60"
                      onClick={resetZoom}
                    >
                      <RotateCcw size={20} />
                    </Button>
                  </div>
                  
                  <Button 
                    className="absolute top-4 left-4 bg-primary/90 hover:bg-primary"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Enter Full VR Mode
                  </Button>
                </div>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">Virtual Tour Guide</h2>
                      <p className="text-muted-foreground">Navigate through different areas of the Africa International Housing Show</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div className="font-medium text-lg flex items-center">
                          <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center text-primary mr-2">1</div>
                          Exhibition Hall
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Explore exhibitor booths showcasing the latest housing innovations, materials, and designs.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="font-medium text-lg flex items-center">
                          <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center text-primary mr-2">2</div>
                          Conference Rooms
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Visit the presentation areas where keynote speeches and panel discussions take place.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="font-medium text-lg flex items-center">
                          <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center text-primary mr-2">3</div>
                          Outdoor Area
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Tour the outdoor exhibitions featuring full-scale housing models and construction demonstrations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Tip:</strong> For the best experience, use a VR headset or view in fullscreen mode. Use the controls to zoom and navigate around the space.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Tabs>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default VRView;
