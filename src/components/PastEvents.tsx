
import { useState } from 'react';
import { Image, Video, Presentation, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type EventItem = {
  id: string;
  type: 'image' | 'video' | 'presentation';
  title: string;
  description: string;
  src: string;
  thumbnail?: string;
  date: string;
};

const PAST_EVENTS: EventItem[] = [
  {
    id: '1',
    type: 'image',
    title: 'AIHS Exhibition Hall',
    description: 'The main exhibition hall at Africa International Housing Show showcasing innovations in housing.',
    src: 'https://africahousingshow.com/wp-content/uploads/2023/07/dac0a8ac-f1a0-49c1-be46-3c3c0ef7cc7b-scaled.jpg',
    date: 'July 2023'
  },
  {
    id: '2',
    type: 'video',
    title: 'Ministerial Address',
    description: 'The Minister of Works and Housing delivers keynote address at AIHS opening ceremony.',
    src: 'https://example.com/video1.mp4',
    thumbnail: 'https://africahousingshow.com/wp-content/uploads/2023/07/aihs-1.jpg',
    date: 'July 2023'
  },
  {
    id: '3',
    type: 'presentation',
    title: 'Affordable Housing Forum',
    description: 'Panel discussion on innovative approaches to affordable housing development in Africa.',
    src: 'https://example.com/presentation1.pdf',
    thumbnail: 'https://africahousingshow.com/wp-content/uploads/2023/07/IMG_2068-scaled.jpg',
    date: 'July 2023'
  },
  {
    id: '4',
    type: 'image',
    title: 'AIHS Awards Night',
    description: 'Recognition of excellence in Africa\'s housing sector during the annual awards ceremony.',
    src: 'https://africahousingshow.com/wp-content/uploads/2023/07/IMG_2181-scaled.jpg',
    date: 'July 2023'
  },
  {
    id: '5',
    type: 'video',
    title: 'CEO Roundtable',
    description: 'Leaders in real estate and construction discuss market trends and development strategies.',
    src: 'https://example.com/video2.mp4',
    thumbnail: 'https://africahousingshow.com/wp-content/uploads/2023/07/IMG_1935-scaled.jpg',
    date: 'July 2023'
  },
  {
    id: '6',
    type: 'image',
    title: 'Product Launch',
    description: 'New building technologies and materials being unveiled at the housing show.',
    src: 'https://africahousingshow.com/wp-content/uploads/2023/07/IMG_2242-scaled.jpg',
    date: 'July 2023'
  },
  {
    id: '7',
    type: 'presentation',
    title: 'Financial Inclusion Summit',
    description: 'Strategies for expanding access to housing finance across African markets.',
    src: 'https://www.example.com/presentation2.pdf',
    thumbnail: 'https://africahousingshow.com/wp-content/uploads/2022/07/20220726_111013-scaled.jpg',
    date: 'July 2022'
  },
];

export const PastEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'presentation'>('all');
  
  const filteredEvents = filter === 'all' 
    ? PAST_EVENTS 
    : PAST_EVENTS.filter(event => event.type === filter);
  
  const canScrollLeft = activeIndex > 0;
  const canScrollRight = activeIndex < filteredEvents.length - 1;
  
  const handlePrev = () => {
    if (canScrollLeft) {
      setActiveIndex(activeIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (canScrollRight) {
      setActiveIndex(activeIndex + 1);
    }
  };
  
  const getEventIcon = (type: EventItem['type']) => {
    switch (type) {
      case 'image':
        return <Image className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'presentation':
        return <Presentation className="h-5 w-5" />;
      default:
        return null;
    }
  };
  
  return (
    <section className="py-12 overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Past Events</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore images, videos, and presentations from previous Africa International Housing Shows and events.
        </p>
      </div>
      
      <div className="flex justify-center mb-6 space-x-2 overflow-x-auto pb-2 scrollbar-thin">
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton 
          active={filter === 'image'} 
          onClick={() => setFilter('image')}
          icon={<Image className="h-4 w-4" />}
        >
          Images
        </FilterButton>
        <FilterButton 
          active={filter === 'video'} 
          onClick={() => setFilter('video')}
          icon={<Video className="h-4 w-4" />}
        >
          Videos
        </FilterButton>
        <FilterButton 
          active={filter === 'presentation'} 
          onClick={() => setFilter('presentation')}
          icon={<Presentation className="h-4 w-4" />}
        >
          Presentations
        </FilterButton>
      </div>
      
      {filteredEvents.length > 0 ? (
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${filteredEvents.length * 100}%`
              }}
            >
              {filteredEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="w-full px-4 flex-shrink-0"
                >
                  <Card className="overflow-hidden shadow-lg">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src={event.thumbnail || event.src} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1.5 bg-background/90 backdrop-blur-sm rounded-md flex items-center space-x-1.5">
                        {getEventIcon(event.type)}
                        <span className="text-xs font-medium capitalize">{event.type}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-3">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="font-medium"
                        >
                          View {event.type}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 bg-background/80 backdrop-blur-sm border shadow-md",
              !canScrollLeft && "opacity-50 cursor-not-allowed"
            )}
            onClick={handlePrev}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 bg-background/80 backdrop-blur-sm border shadow-md",
              !canScrollRight && "opacity-50 cursor-not-allowed"
            )}
            onClick={handleNext}
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <div className="flex justify-center space-x-1 mt-4">
            {filteredEvents.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeIndex ? 'bg-primary w-4' : 'bg-muted'
                }`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No {filter} events found.</p>
        </div>
      )}
    </section>
  );
};

const FilterButton = ({ 
  children, 
  active, 
  onClick, 
  icon 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
  icon?: React.ReactNode;
}) => (
  <Button
    variant={active ? "default" : "outline"}
    size="sm"
    onClick={onClick}
    className={`text-xs font-medium transition-all ${active ? 'bg-primary' : ''}`}
  >
    {icon && <span className="mr-1">{icon}</span>}
    {children}
  </Button>
);
