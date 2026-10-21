
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2, VolumeX, Maximize, Video } from "lucide-react";

const LiveStream = () => {
  const [muted, setMuted] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-12">
            <div className="max-w-3xl mx-auto animate-blur-in text-center mb-16">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Live Now
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-balance">
                AIHS Live Stream
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Watch keynote speeches, panel discussions, and live coverage from the event
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="main-stage" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="main-stage">Main Stage</TabsTrigger>
                  <TabsTrigger value="panel-discussions">Panel Discussions</TabsTrigger>
                  <TabsTrigger value="exhibition-hall">Exhibition Hall</TabsTrigger>
                </TabsList>

                <div className="relative aspect-video bg-black rounded-xl overflow-hidden mb-4">
                  <TabsContent value="main-stage" className="m-0 h-full">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <Video size={48} className="mx-auto mb-4 text-white/60" />
                        <p className="text-white/80">
                          Live stream will begin soon
                        </p>
                        <Button variant="outline" className="mt-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                          Join Waiting Room
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="panel-discussions" className="m-0 h-full">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <Video size={48} className="mx-auto mb-4 text-white/60" />
                        <p className="text-white/80">
                          Panel discussion stream will begin at 2:00 PM WAT
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="exhibition-hall" className="m-0 h-full">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <Video size={48} className="mx-auto mb-4 text-white/60" />
                        <p className="text-white/80">
                          Exhibition hall stream will begin at 10:00 AM WAT tomorrow
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="bg-black/40 text-white hover:bg-black/60"
                      onClick={() => setMuted(!muted)}
                    >
                      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="bg-black/40 text-white hover:bg-black/60"
                    >
                      <Maximize size={20} />
                    </Button>
                  </div>
                </div>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">Upcoming Sessions</h2>
                      <p className="text-muted-foreground">All times are in West Africa Time (WAT)</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4 py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Opening Ceremony & Keynote Address</h3>
                            <p className="text-sm text-muted-foreground">Main Stage</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary">10:00 AM</p>
                            <p className="text-sm text-muted-foreground">Today</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-secondary/40 pl-4 py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Panel: Affordable Housing in Africa</h3>
                            <p className="text-sm text-muted-foreground">Panel Discussions</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">2:00 PM</p>
                            <p className="text-sm text-muted-foreground">Today</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-secondary/40 pl-4 py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Innovation Showcase: PropTech Solutions</h3>
                            <p className="text-sm text-muted-foreground">Exhibition Hall</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">10:00 AM</p>
                            <p className="text-sm text-muted-foreground">Tomorrow</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-secondary/40 pl-4 py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Closing Ceremony & Awards</h3>
                            <p className="text-sm text-muted-foreground">Main Stage</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">4:00 PM</p>
                            <p className="text-sm text-muted-foreground">Day After Tomorrow</p>
                          </div>
                        </div>
                      </div>
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

export default LiveStream;
