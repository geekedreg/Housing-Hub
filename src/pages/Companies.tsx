
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CompanyCard } from "@/components/CompanyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Grid, List } from "lucide-react";

// List of real estate companies with reliable image URLs
const COMPANIES = [
  {
    id: "1",
    name: "Adron Homes",
    logo: "https://res.cloudinary.com/dqfrk92kq/image/upload/v1712739662/adron-homes-logo_a2xilv.png",
    description: "Adron Homes and Properties Limited is a leading real estate development company in Nigeria committed to offering affordable housing solutions and creating livable communities.",
    category: "Real Estate",
    featured: true
  },
  {
    id: "2",
    name: "RevolutionPlus Property",
    logo: "https://www.revolutionplus.com.ng/wp-content/uploads/2020/09/cropped-rplus-logo-1.png",
    description: "RevolutionPlus Property is a leading real estate development company providing affordable land and housing to Nigerians home and abroad.",
    category: "Real Estate",
    featured: true
  },
  {
    id: "3",
    name: "UPDC Plc",
    logo: "https://updcplc.com/img/updc_logo.png",
    description: "UPDC Plc is one of Nigeria's leading real estate companies with a portfolio spanning commercial and residential properties across the country.",
    category: "Real Estate",
    featured: false
  },
  {
    id: "4",
    name: "Landmark Corporate Realty",
    logo: "https://landmarkafrica.com/wp-content/uploads/2020/03/landmark-logo.svg",
    description: "Landmark Corporate Realty Ltd is a leading real estate development and investment company in Nigeria focused on creating premium developments.",
    category: "Real Estate",
    featured: true
  },
  {
    id: "5",
    name: "Lekki Gardens",
    logo: "https://estateintel.com/wp-content/uploads/2017/05/Lekki-Gardens-Logo-Primary_edited.jpg",
    description: "Lekki Gardens is one of Nigeria's fastest growing real estate development companies, providing affordable luxury homes and apartments.",
    category: "Real Estate",
    featured: false
  },
  {
    id: "6",
    name: "Haven Homes",
    logo: "https://www.havenhomes.ng/wp-content/uploads/2022/07/Haven-Logo-white.png",
    description: "Haven Homes is a luxury real estate development company that builds contemporary homes inspired by cutting-edge architecture from around the world.",
    category: "Real Estate",
    featured: false
  },
  {
    id: "7",
    name: "COPEN Group",
    logo: "https://www.copengroup.com/wp-content/uploads/2019/07/Copengroup-Logo.png",
    description: "COPEN Group is a real estate development company in Nigeria focused on creating affordable and sustainable housing solutions.",
    category: "Real Estate",
    featured: false
  },
  {
    id: "8",
    name: "Propertymart Real Estate",
    logo: "https://www.propertymartng.com/wp-content/uploads/2018/05/propertymart-logo.png",
    description: "Propertymart has a simple purpose of providing affordable housing to Nigerians through master planned communities.",
    category: "Real Estate",
    featured: true
  },
  {
    id: "9",
    name: "Homework Development",
    logo: "https://www.homeworkdev.com/img/logo.png",
    description: "Homework Development & Properties Limited is a fully integrated real estate firm with activities in acquisition, planning, designing and development.",
    category: "Real Estate",
    featured: false
  },
  {
    id: "10",
    name: "Megamound Investment",
    logo: "https://www.megamound.com/images/logo4.png",
    description: "Megamound Investment Limited is a leading Nigerian real estate development company that offers affordable and luxurious housing solutions.",
    category: "Real Estate",
    featured: true
  }
];

const CompaniesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const filteredCompanies = COMPANIES.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <section className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Featured Companies</h1>
            <p className="text-muted-foreground max-w-3xl">
              Browse housing and real estate companies participating in the Africa International Housing Show.
            </p>
          </section>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search companies..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {filteredCompanies.length > 0 ? (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredCompanies.map(company => (
                <CompanyCard 
                  key={company.id}
                  company={company}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No companies found matching your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CompaniesPage;
