
import React, { useState, useEffect } from 'react';
import { CompanyCard } from './CompanyCard';
import { UpdateCard } from './UpdateCard';
import { Building, Filter, LayoutGrid, List, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

// Example data for companies with verified working logos
const MOCK_COMPANIES = [
  {
    id: '1',
    name: 'Adron Homes',
    logo: 'https://cdn.africa-housing.com/images/adron-homes-logo.png',
    description: 'Leading real estate company in Nigeria with a focus on affordable housing solutions.',
    category: 'Real Estate',
    featured: true
  },
  {
    id: '2',
    name: 'Federal Mortgage Bank',
    logo: 'https://cdn.africa-housing.com/images/fmbn-logo.png',
    description: 'Nigeria\'s apex mortgage institution focused on increasing access to housing finance.',
    category: 'Finance',
    featured: true
  },
  {
    id: '3',
    name: 'Cosgrove',
    logo: 'https://cdn.africa-housing.com/images/cosgrove-logo.png',
    description: 'Smart homes and real estate development focused on innovation and sustainability.',
    category: 'Real Estate',
    featured: false
  },
  {
    id: '4',
    name: 'NBRRI',
    logo: 'https://cdn.africa-housing.com/images/nbrri-logo.png',
    description: 'Nigerian Building and Road Research Institute dedicated to research in construction.',
    category: 'Research',
    featured: false
  },
  {
    id: '5',
    name: 'Urban Shelter',
    logo: 'https://cdn.africa-housing.com/images/urban-shelter-logo.png',
    description: 'Real estate development company providing quality housing across Nigeria.',
    category: 'Real Estate',
    featured: false
  },
  {
    id: '6',
    name: 'RevolutionPlus Property',
    logo: 'https://cdn.africa-housing.com/images/revolutionplus-logo.png',
    description: 'Nigeria\'s leading real estate company providing affordable land and housing properties.',
    category: 'Real Estate',
    featured: true
  },
  {
    id: '7',
    name: 'UPDC Plc',
    logo: 'https://cdn.africa-housing.com/images/updc-logo.png',
    description: 'Premium real estate development company with luxury residential and commercial properties.',
    category: 'Real Estate',
    featured: false
  },
  {
    id: '8',
    name: 'Mixta Africa',
    logo: 'https://cdn.africa-housing.com/images/mixta-africa-logo.png',
    description: 'Pan-African real estate developer with projects in Nigeria, Senegal, Morocco and Tunisia.',
    category: 'Real Estate',
    featured: true
  },
  {
    id: '9',
    name: 'Family Homes Funds',
    logo: 'https://cdn.africa-housing.com/images/family-homes-funds-logo.png',
    description: 'Nigeria\'s largest housing fund focused on affordable housing for Nigerians on low income.',
    category: 'Finance',
    featured: false
  },
  {
    id: '10',
    name: 'Lekki Gardens',
    logo: 'https://cdn.africa-housing.com/images/lekki-gardens-logo.png',
    description: 'Leading residential property developer with focus on modern luxury homes.',
    category: 'Real Estate',
    featured: true
  }
];

// Example updates from companies with reliable image URLs
const MOCK_UPDATES = [
  {
    id: '1',
    companyId: '1',
    companyName: 'Adron Homes',
    companyLogo: 'https://cdn.africa-housing.com/images/adron-homes-logo.png',
    title: 'New Affordable Housing Project Launched',
    content: 'We are excited to announce our new affordable housing project in Lagos, designed to provide quality homes at accessible prices.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    date: '2023-05-15',
    likes: 45,
    comments: 12
  },
  {
    id: '2',
    companyId: '2',
    companyName: 'Federal Mortgage Bank',
    companyLogo: 'https://cdn.africa-housing.com/images/fmbn-logo.png',
    title: 'New Mortgage Financing Options Available',
    content: 'Federal Mortgage Bank now offers expanded financing options with lower interest rates for first-time homebuyers.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '2023-05-10',
    likes: 32,
    comments: 8
  },
  {
    id: '3',
    companyId: '3',
    companyName: 'Cosgrove',
    companyLogo: 'https://cdn.africa-housing.com/images/cosgrove-logo.png',
    title: 'Smart Home Technology Integration',
    content: 'Cosgrove announces integration of cutting-edge smart home technology in all new developments, enhancing security and energy efficiency.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '2023-05-05',
    likes: 56,
    comments: 14
  },
  {
    id: '4',
    companyId: '5',
    companyName: 'Urban Shelter',
    companyLogo: 'https://cdn.africa-housing.com/images/urban-shelter-logo.png',
    title: 'New Development Project in Abuja',
    content: 'Urban Shelter unveils plans for a new luxury residential development in Abuja Central District, featuring modern amenities and sustainable design.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    date: '2023-05-01',
    likes: 38,
    comments: 9
  },
  {
    id: '5',
    companyId: '4',
    companyName: 'NBRRI',
    companyLogo: 'https://cdn.africa-housing.com/images/nbrri-logo.png',
    title: 'Research Findings on Sustainable Building Materials',
    content: 'NBRRI releases research findings on locally sourced sustainable building materials that can reduce construction costs by up to 30%.',
    image: 'https://images.unsplash.com/photo-1581094618422-d8eba6485a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    date: '2023-04-28',
    likes: 27,
    comments: 5
  }
];

type ViewMode = 'grid' | 'list';
type FeedType = 'updates' | 'companies';

export const FeedLayout = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [feedType, setFeedType] = useState<FeedType>('updates');
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [companies, setCompanies] = useState(MOCK_COMPANIES);
  const [updates, setUpdates] = useState(MOCK_UPDATES);
  
  // Filter companies based on search query and featured status
  const filteredCompanies = companies.filter(company => {
    return (
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!featuredOnly || company.featured)
    );
  });
  
  // Filter updates based on search query
  const filteredUpdates = updates.filter(update => {
    return (
      update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 animate-slide-in">
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <Button
            variant={feedType === 'updates' ? 'default' : 'outline'}
            onClick={() => setFeedType('updates')}
            className="transition-all duration-300"
          >
            Latest Updates
          </Button>
          <Button
            variant={feedType === 'companies' ? 'default' : 'outline'}
            onClick={() => setFeedType('companies')}
            className="transition-all duration-300"
          >
            <Building size={18} className="mr-2" />
            Companies
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 h-10 rounded-full transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Filter size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 animate-scale-in">
              <DropdownMenuItem 
                onClick={() => setFeaturedOnly(!featuredOnly)}
                className="cursor-pointer flex items-center gap-2"
              >
                <div className={`w-4 h-4 rounded-sm border ${featuredOnly ? 'bg-primary border-primary' : 'border-input'} flex items-center justify-center`}>
                  {featuredOnly && <span className="text-white text-xs">✓</span>}
                </div>
                Featured Companies Only
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleViewMode}
            className="rounded-full"
          >
            {viewMode === 'grid' ? <List size={18} /> : <LayoutGrid size={18} />}
          </Button>
        </div>
      </div>
      
      <div className={`grid ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'grid-cols-1 gap-4'
      } transition-all duration-300`}>
        {feedType === 'companies' ? (
          filteredCompanies.length > 0 ? (
            filteredCompanies.map(company => (
              <CompanyCard 
                key={company.id}
                company={company}
                viewMode={viewMode} 
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <Building size={48} className="text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No companies found</h3>
              <p className="text-muted-foreground text-center">
                Try adjusting your search or filters to find what you're looking for
              </p>
            </div>
          )
        ) : (
          filteredUpdates.length > 0 ? (
            filteredUpdates.map(update => (
              <UpdateCard 
                key={update.id}
                update={update}
                viewMode={viewMode} 
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <Search size={48} className="text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No updates found</h3>
              <p className="text-muted-foreground text-center">
                Try adjusting your search to find what you're looking for
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
