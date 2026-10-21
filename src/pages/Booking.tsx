
import { Navbar } from "@/components/Navbar";
import { BookingForm } from "@/components/BookingForm";
import { CalendarDays, Calendar, Clock, Users, Building, CheckSquare } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <section className="mb-12 text-center">
            <div className="max-w-3xl mx-auto animate-blur-in">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                B2B Meetings
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Schedule Business Meetings
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Connect with housing industry leaders and explore business opportunities through our B2B meeting platform.
              </p>
            </div>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            
            <div className="space-y-6">
              <div className="rounded-xl border bg-card p-6 animate-slide-in">
                <h3 className="text-lg font-medium mb-4">Why Book a B2B Meeting?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Connect with industry leaders and potential partners</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Explore business opportunities with top housing companies</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Flexible scheduling that works with your calendar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Professional facilitation for productive meetings</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl border bg-card p-6 animate-slide-in">
                <h3 className="text-lg font-medium mb-4">How It Works</h3>
                <ol className="relative border-l border-muted-foreground/20 ml-3 space-y-6 pt-2">
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background">
                      <span className="text-primary font-medium">1</span>
                    </span>
                    <h4 className="font-medium">Submit Your Request</h4>
                    <p className="text-sm text-muted-foreground mt-1">Fill out the meeting request form with your details.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background">
                      <span className="text-primary font-medium">2</span>
                    </span>
                    <h4 className="font-medium">Receive Confirmation</h4>
                    <p className="text-sm text-muted-foreground mt-1">We'll email you once the company confirms the meeting.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-4 ring-background">
                      <span className="text-primary font-medium">3</span>
                    </span>
                    <h4 className="font-medium">Attend Your Meeting</h4>
                    <p className="text-sm text-muted-foreground mt-1">Join in-person or via video conference at the scheduled time.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
