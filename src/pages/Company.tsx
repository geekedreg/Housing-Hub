
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import { UpdateCard } from "@/components/UpdateCard";
import { Button } from "@/components/ui/button";

// Mock company profile data with reliable image URLs
const MOCK_COMPANY = {
  id: "1",
  name: "Adron Homes",
  logo: "https://res.cloudinary.com/dqfrk92kq/image/upload/v1712739662/adron-homes-logo_a2xilv.png",
  coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  description: "Adron Homes and Properties Limited is a leading real estate development company in Nigeria committed to offering affordable housing solutions and creating livable communities. With a reputation for quality construction and innovative design, Adron Homes has developed several estates across Nigeria, making homeownership accessible to many Nigerians through flexible payment plans.",
  category: "Real Estate",
  website: "https://adronhomesproperties.com",
  email: "info@adronhomes.com",
  phone: "+234 700 2376 6466",
  address: "Lagos, Nigeria",
  verified: true,
  featured: true,
  established: "2012",
  services: [
    "Affordable Housing Development",
    "Premium Estate Development",
    "Land Sales",
    "Property Management",
    "Real Estate Consulting",
    "Flexible Payment Plans"
  ],
  socialLinks: {
    twitter: "https://twitter.com/adronhomes",
    facebook: "https://facebook.com/adronhomes",
    linkedin: "https://linkedin.com/company/adron-homes",
    instagram: "https://instagram.com/adronhomes"
  }
};

// Mock company updates with reliable image URLs
const MOCK_COMPANY_UPDATES = [
  {
    id: "1",
    companyId: "1",
    companyName: "Adron Homes",
    companyLogo: "https://res.cloudinary.com/dqfrk92kq/image/upload/v1712739662/adron-homes-logo_a2xilv.png",
    title: "New Affordable Housing Project Launched",
    content: "We are excited to announce our new affordable housing project in Lagos, designed to provide quality homes at accessible prices. This new development features modern amenities and is strategically located for convenience.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    date: "2023-05-15",
    likes: 45,
    comments: 12
  },
  {
    id: "2",
    companyId: "1",
    companyName: "Adron Homes",
    companyLogo: "https://res.cloudinary.com/dqfrk92kq/image/upload/v1712739662/adron-homes-logo_a2xilv.png",
    title: "Special Promo: 30% Discount on Land Purchase",
    content: "For a limited time, enjoy a 30% discount on land purchases in our newest estates. This promotion is part of our commitment to making property ownership more accessible to Nigerians. Terms and conditions apply.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
    date: "2023-04-28",
    likes: 62,
    comments: 18
  },
  {
    id: "3",
    companyId: "1",
    companyName: "Adron Homes",
    companyLogo: "https://res.cloudinary.com/dqfrk92kq/image/upload/v1712739662/adron-homes-logo_a2xilv.png",
    title: "Adron Homes Opens New Regional Office",
    content: "We are pleased to announce the opening of our new regional office in Abuja. This expansion allows us to better serve our clients in the Northern region with personalized service and local expertise.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    date: "2023-04-10",
    likes: 38,
    comments: 7
  }
];

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState(MOCK_COMPANY);
  const [updates, setUpdates] = useState(MOCK_COMPANY_UPDATES);
  
  useEffect(() => {
    // In a real app, this would fetch the company data based on the ID
    // For now, we'll simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-12 flex items-center justify-center">
          <div className="animate-pulse space-y-4 w-full max-w-4xl px-4">
            <div className="h-56 bg-muted rounded-xl"></div>
            <div className="h-32 w-32 bg-muted rounded-xl mt-4"></div>
            <div className="h-8 bg-muted rounded-md max-w-md"></div>
            <div className="h-4 bg-muted rounded-md max-w-sm"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="h-64 bg-muted rounded-xl"></div>
              <div className="h-64 bg-muted rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12">
        <ProfileCard profile={company} />
        
        <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Latest Updates</h2>
            <Button variant="outline">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {updates.map(update => (
              <UpdateCard 
                key={update.id}
                update={update}
                viewMode="grid"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
