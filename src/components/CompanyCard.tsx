
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  featured: boolean;
}

interface CompanyCardProps {
  company: Company;
  viewMode: 'grid' | 'list';
}

export const CompanyCard = ({ company, viewMode }: CompanyCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = company.logo;
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true); // We'll still consider it "loaded" but show a fallback
    };
  }, [company.logo]);
  
  // Company logo fallback based on company name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  const logoFallback = (
    <div className="w-full h-full flex items-center justify-center bg-primary/10">
      <div className="text-2xl font-bold text-primary">
        {getInitials(company.name)}
      </div>
    </div>
  );
  
  if (viewMode === 'grid') {
    return (
      <div 
        className="group relative bg-card rounded-xl overflow-hidden border border-border/60 transition-all duration-300 hover:shadow-soft hover:border-primary/20 animate-fade-in"
      >
        <div className="relative h-40 bg-muted overflow-hidden">
          <div className={`absolute inset-0 flex items-center justify-center ${imageLoaded ? '' : 'animate-pulse bg-muted'}`}>
            {imageLoaded ? (
              imageError ? (
                logoFallback
              ) : (
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className={`w-full h-full object-contain p-2 transition-all duration-500 transform group-hover:scale-105`}
                  onError={() => setImageError(true)}
                />
              )
            ) : (
              <div className="w-12 h-12 rounded-full bg-muted-foreground/20"></div>
            )}
          </div>
          {company.featured && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="default" className="bg-primary/90 hover:bg-primary/90 backdrop-blur-sm">
                <Star size={12} className="mr-1 fill-white" /> Featured
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg truncate">{company.name}</h3>
          </div>
          
          <Badge variant="secondary" className="mb-3">
            {company.category}
          </Badge>
          
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {company.description}
          </p>
          
          <div className="flex justify-between items-center mt-auto pt-2">
            <Link to={`/company/${company.id}`}>
              <Button variant="outline" size="sm" className="transition-all duration-300 hover:bg-primary/5">
                View Profile
              </Button>
            </Link>
            <Button 
              size="sm" 
              variant="ghost" 
              className="rounded-full h-8 w-8 p-0 transition-all"
            >
              <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  // List view
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-xl border border-border/60 hover:shadow-soft hover:border-primary/20 transition-all duration-300 animate-fade-in">
      <div className="sm:w-24 sm:h-24 h-20 w-full rounded-lg bg-muted overflow-hidden flex-shrink-0">
        <div className={`w-full h-full flex items-center justify-center ${imageLoaded ? '' : 'animate-pulse'}`}>
          {imageLoaded ? (
            imageError ? (
              logoFallback
            ) : (
              <img 
                src={company.logo} 
                alt={company.name} 
                className="w-full h-full object-contain p-1"
                onError={() => setImageError(true)}
              />
            )
          ) : (
            <div className="w-8 h-8 rounded-full bg-muted-foreground/20"></div>
          )}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center">
            <h3 className="font-semibold text-base mr-2">{company.name}</h3>
            {company.featured && (
              <Badge variant="default" className="bg-primary/90 hover:bg-primary/90 text-xs">
                <Star size={10} className="mr-1 fill-white" /> Featured
              </Badge>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            {company.category}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
          {company.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <Link to={`/company/${company.id}`}>
            <Button variant="outline" size="sm" className="text-xs h-8 transition-all duration-300 hover:bg-primary/5">
              View Profile
            </Button>
          </Link>
          <Button 
            size="sm" 
            variant="ghost" 
            className="rounded-full h-8 w-8 p-0"
          >
            <ExternalLink size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};
