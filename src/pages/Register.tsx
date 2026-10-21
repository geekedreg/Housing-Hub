
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Building, Calendar, Users } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    registrationType: "attendee",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration submitted!",
      description: "We'll contact you with further details soon.",
    });
  };

  const updateFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-12">
            <div className="max-w-3xl mx-auto animate-blur-in text-center mb-16">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Register for AIHS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-balance">
                Join Africa's Largest Housing Expo
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose your participation type and register for the upcoming
                Africa International Housing Show.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="attendee" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="attendee" className="py-4">
                    <Users className="w-5 h-5 mr-2" />
                    <span>Attendee</span>
                  </TabsTrigger>
                  <TabsTrigger value="exhibitor" className="py-4">
                    <Building className="w-5 h-5 mr-2" />
                    <span>Exhibitor</span>
                  </TabsTrigger>
                  <TabsTrigger value="sponsor" className="py-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Sponsor</span>
                  </TabsTrigger>
                </TabsList>

                <Card>
                  <CardHeader>
                    <TabsContent value="attendee">
                      <CardTitle>Register as an Attendee</CardTitle>
                      <CardDescription>
                        Join as an attendee to network, learn, and explore the
                        latest in Africa's housing sector.
                      </CardDescription>
                    </TabsContent>
                    <TabsContent value="exhibitor">
                      <CardTitle>Register as an Exhibitor</CardTitle>
                      <CardDescription>
                        Showcase your products and services to thousands of
                        housing industry professionals.
                      </CardDescription>
                    </TabsContent>
                    <TabsContent value="sponsor">
                      <CardTitle>Register as a Sponsor</CardTitle>
                      <CardDescription>
                        Gain premium visibility and position your brand as a
                        leader in Africa's housing industry.
                      </CardDescription>
                    </TabsContent>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={updateFormData}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={updateFormData}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={updateFormData}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your company or organization"
                            value={formData.company}
                            onChange={updateFormData}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select
                            name="country"
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                country: value,
                              }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nigeria">Nigeria</SelectItem>
                              <SelectItem value="ghana">Ghana</SelectItem>
                              <SelectItem value="kenya">Kenya</SelectItem>
                              <SelectItem value="south-africa">
                                South Africa
                              </SelectItem>
                              <SelectItem value="egypt">Egypt</SelectItem>
                              <SelectItem value="morocco">Morocco</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <TabsContent value="exhibitor" className="mt-0">
                          <div className="space-y-2">
                            <Label htmlFor="booth">Booth Size Preference</Label>
                            <Select name="booth">
                              <SelectTrigger>
                                <SelectValue placeholder="Select booth size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="small">
                                  Small (9sqm)
                                </SelectItem>
                                <SelectItem value="medium">
                                  Medium (18sqm)
                                </SelectItem>
                                <SelectItem value="large">
                                  Large (36sqm)
                                </SelectItem>
                                <SelectItem value="custom">
                                  Custom Size
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TabsContent>
                        <TabsContent value="sponsor" className="mt-0">
                          <div className="space-y-2">
                            <Label htmlFor="package">
                              Sponsorship Package
                            </Label>
                            <Select name="package">
                              <SelectTrigger>
                                <SelectValue placeholder="Select package" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="platinum">
                                  Platinum Sponsor
                                </SelectItem>
                                <SelectItem value="gold">
                                  Gold Sponsor
                                </SelectItem>
                                <SelectItem value="silver">
                                  Silver Sponsor
                                </SelectItem>
                                <SelectItem value="bronze">
                                  Bronze Sponsor
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TabsContent>
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Registration
                      </Button>
                    </form>
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

export default Register;
