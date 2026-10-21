
import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-12">
            <div className="max-w-3xl mx-auto animate-blur-in text-center mb-16">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                About AIHS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-balance">
                Africa International Housing Show
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The largest housing and construction expo in Africa
              </p>
            </div>

            <div className="grid gap-16 md:gap-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    AIHS is committed to transforming Africa's housing landscape by connecting stakeholders, fostering innovation, and promoting sustainable housing solutions across the continent.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We bring together policymakers, developers, investors, technology providers, and consumers to address Africa's housing challenges and unlock opportunities.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://africahousingshow.com/wp-content/uploads/2022/03/AIHS-Slider-1.jpg" 
                    alt="AIHS Conference" 
                    className="w-full h-full object-cover aspect-video"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Why Attend AIHS?</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-primary/10 rounded-full p-1 h-8 w-8 flex items-center justify-center text-primary mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Networking Opportunities</h3>
                        <p className="text-muted-foreground">Connect with industry leaders, investors, and potential partners from across Africa.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 rounded-full p-1 h-8 w-8 flex items-center justify-center text-primary mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Knowledge Exchange</h3>
                        <p className="text-muted-foreground">Learn about the latest trends, technologies, and policies in housing and construction.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-primary/10 rounded-full p-1 h-8 w-8 flex items-center justify-center text-primary mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Business Opportunities</h3>
                        <p className="text-muted-foreground">Discover investment opportunities and new markets across the African housing sector.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://africahousingshow.com/wp-content/uploads/2022/03/AIHS-Slider-3.jpg" 
                    alt="AIHS Exhibition" 
                    className="w-full h-full object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
