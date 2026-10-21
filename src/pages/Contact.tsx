
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-12">
            <div className="max-w-3xl mx-auto animate-blur-in text-center mb-16">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-balance">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about AIHS? We're here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      International Conference Centre<br />
                      Central Business District, Abuja<br />
                      Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@africahousingshow.com" className="hover:text-primary transition-colors">
                        info@africahousingshow.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+2348097546666" className="hover:text-primary transition-colors">
                        +234 809 754 6666
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 bg-card rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
