
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Share2, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Update {
  id: string;
  companyId: string;
  companyName: string;
  companyLogo: string;
  title: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  comments: number;
}

interface UpdateCardProps {
  update: Update;
  viewMode: 'grid' | 'list';
}

export const UpdateCard = ({ update, viewMode }: UpdateCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(update.likes);
  
  useEffect(() => {
    const img = document.createElement('img');
    img.src = update.image;
    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true); // We'll still consider it "loaded" but show a fallback
    };
  }, [update.image]);
  
  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setLiked(!liked);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const imageFallback = (
    <div className="w-full h-full flex flex-col items-center justify-center bg-muted">
      <Image className="text-muted-foreground/50 mb-2" size={32} />
      <span className="text-xs text-muted-foreground">Image unavailable</span>
    </div>
  );
  
  if (viewMode === 'grid') {
    return (
      <div className="bg-card rounded-xl overflow-hidden border border-border/60 hover:shadow-soft hover:border-primary/20 transition-all duration-300 animate-fade-in">
        <div className="relative aspect-video bg-muted overflow-hidden">
          <div className={`absolute inset-0 flex items-center justify-center ${imageLoaded ? '' : 'animate-pulse'}`}>
            {imageLoaded ? (
              imageError ? (
                imageFallback
              ) : (
                <img 
                  src={update.image} 
                  alt={update.title} 
                  className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
                  onError={() => setImageError(true)}
                />
              )
            ) : (
              <div className="w-12 h-12 rounded-full bg-muted-foreground/20"></div>
            )}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center space-x-3 mb-3">
            <Link to={`/company/${update.companyId}`} className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 border border-border">
                <AvatarImage src={update.companyLogo} alt={update.companyName} />
                <AvatarFallback>{update.companyName.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{update.companyName}</p>
                <p className="text-xs text-muted-foreground">{formatDate(update.date)}</p>
              </div>
            </Link>
          </div>
          
          <Link to={`/update/${update.id}`}>
            <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors duration-200">
              {update.title}
            </h3>
          </Link>
          
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {update.content}
          </p>
          
          <div className="flex justify-between items-center pt-3 border-t border-border/60">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`rounded-full px-3 gap-2 ${liked ? 'text-red-500' : ''}`}
              onClick={handleLike}
            >
              <Heart size={16} className={liked ? 'fill-red-500' : ''} />
              <span className="text-xs">{likes}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="rounded-full px-3 gap-2">
              <MessageSquare size={16} />
              <span className="text-xs">{update.comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="rounded-full px-3">
              <Share2 size={16} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  // List view
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-xl border border-border/60 hover:shadow-soft hover:border-primary/20 transition-all duration-300 animate-fade-in">
      <div className="sm:w-48 sm:h-32 h-48 rounded-lg bg-muted overflow-hidden flex-shrink-0">
        <div className={`w-full h-full flex items-center justify-center ${imageLoaded ? '' : 'animate-pulse'}`}>
          {imageLoaded ? (
            imageError ? (
              imageFallback
            ) : (
              <img 
                src={update.image} 
                alt={update.title} 
                className="w-full h-full object-cover transition-all duration-300"
                onError={() => setImageError(true)}
              />
            )
          ) : (
            <div className="w-8 h-8 rounded-full bg-muted-foreground/20"></div>
          )}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center space-x-2 mb-2">
          <Link to={`/company/${update.companyId}`} className="flex items-center space-x-2">
            <Avatar className="h-7 w-7 border border-border">
              <AvatarImage src={update.companyLogo} alt={update.companyName} />
              <AvatarFallback>{update.companyName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-sm font-medium">{update.companyName}</p>
              <span className="hidden sm:block text-muted-foreground mx-2">•</span>
              <p className="text-xs text-muted-foreground">{formatDate(update.date)}</p>
            </div>
          </Link>
        </div>
        
        <Link to={`/update/${update.id}`}>
          <h3 className="font-semibold text-base hover:text-primary transition-colors duration-200">
            {update.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2 mt-1">
          {update.content}
        </p>
        
        <div className="flex justify-start items-center gap-4 mt-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`rounded-full p-0 h-8 gap-1 ${liked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart size={14} className={liked ? 'fill-red-500' : ''} />
            <span className="text-xs">{likes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="rounded-full p-0 h-8 gap-1">
            <MessageSquare size={14} />
            <span className="text-xs">{update.comments}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="rounded-full p-0 h-8 w-8">
            <Share2 size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};
