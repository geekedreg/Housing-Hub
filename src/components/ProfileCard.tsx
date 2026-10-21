
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, ExternalLink, Globe, Mail, MapPin, Phone, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CompanyProfile {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  description: string;
  category: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  verified: boolean;
  featured: boolean;
  established: string;
  services: string[];
  socialLinks: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

interface ProfileCardProps {
  profile: CompanyProfile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [coverLoaded, setCoverLoaded] = useState(false);
  
  useEffect(() => {
    const logo = new Image();
    logo.src = profile.logo;
    logo.onload = () => setLogoLoaded(true);
    
    const cover = new Image();
    cover.src = profile.coverImage;
    cover.onload = () => setCoverLoaded(true);
  }, [profile.logo, profile.coverImage]);
  
  return (
    <div className="w-full max-w-4xl mx-auto pb-10 animate-slide-in">
      <div className="relative w-full bg-muted rounded-xl overflow-hidden mb-4">
        <div className={`h-56 relative ${coverLoaded ? '' : 'animate-pulse'}`}>
          {coverLoaded ? (
            <img
              src={profile.coverImage}
              alt={`${profile.name} cover`}
              className={`w-full h-full object-cover ${coverLoaded ? 'image-loaded' : 'image-loading'}`}
            />
          ) : (
            <div className="absolute inset-0 bg-muted-foreground/10"></div>
          )}
        </div>
        
        <div className="absolute -bottom-16 left-8 flex items-end">
          <div className="relative rounded-xl border-4 border-background overflow-hidden">
            <div className={`w-32 h-32 bg-muted flex items-center justify-center ${logoLoaded ? '' : 'animate-pulse'}`}>
              {logoLoaded ? (
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className={`w-full h-full object-cover ${logoLoaded ? 'image-loaded' : 'image-loading'}`}
                />
              ) : (
                <Building size={36} className="text-muted-foreground/30" />
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 flex space-x-2">
          {profile.featured && (
            <Badge variant="default" className="bg-primary/90 hover:bg-primary/90 backdrop-blur-sm">
              <Star size={12} className="mr-1 fill-white" /> Featured
            </Badge>
          )}
          {profile.verified && (
            <Badge variant="default" className="bg-green-500/90 hover:bg-green-500/90 backdrop-blur-sm">
              Verified
            </Badge>
          )}
        </div>
      </div>
      
      <div className="mt-20 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">{profile.name}</h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="secondary" className="rounded-full">
                {profile.category}
              </Badge>
              {profile.address && (
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {profile.address}
                </span>
              )}
              <span className="flex items-center">
                <Building size={14} className="mr-1" />
                Est. {profile.established}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button variant="outline" size="sm" className="rounded-full">
              <Mail size={16} className="mr-2" />
              Contact
            </Button>
            <Button size="sm" className="rounded-full">
              <Phone size={16} className="mr-2" />
              Request Call
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="contact">Contact Info</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>About {profile.name}</CardTitle>
                <CardDescription>
                  Company overview and information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {profile.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="services" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
                <CardDescription>
                  Products and services provided by {profile.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {profile.services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-accent">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                      {service}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Ways to reach {profile.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.website && (
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent">
                      <Globe size={18} className="text-primary" />
                      <a 
                        href={profile.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-primary transition-colors"
                      >
                        {profile.website.replace(/^https?:\/\//, '')}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  )}
                  
                  {profile.email && (
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent">
                      <Mail size={18} className="text-primary" />
                      <a 
                        href={`mailto:${profile.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  )}
                  
                  {profile.phone && (
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent">
                      <Phone size={18} className="text-primary" />
                      <a 
                        href={`tel:${profile.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  )}
                  
                  {profile.address && (
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent">
                      <MapPin size={18} className="text-primary" />
                      <span>{profile.address}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
