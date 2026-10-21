
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const TIMES = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const COMPANIES = [
  { id: '1', name: 'Adron Homes' },
  { id: '2', name: 'Federal Mortgage Bank' },
  { id: '3', name: 'Cosgrove' },
  { id: '4', name: 'NBRRI' },
  { id: '5', name: 'Urban Shelter' }
];

export const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [company, setCompany] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Meeting Requested",
        description: "Your B2B meeting has been requested successfully. You'll receive a confirmation email shortly.",
        duration: 5000,
      });
      
      // Reset form after delay
      setTimeout(() => {
        setIsSuccess(false);
        setDate(undefined);
        setTime(undefined);
        setCompany(undefined);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }, 3000);
    }, 1500);
  };
  
  if (isSuccess) {
    return (
      <Card className="w-full max-w-lg mx-auto animate-scale-in">
        <CardContent className="pt-10 pb-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle>Meeting Successfully Requested</CardTitle>
            <CardDescription className="max-w-md">
              Your meeting request has been submitted. We will contact you shortly with confirmation details.
            </CardDescription>
            <Button 
              onClick={() => setIsSuccess(false)} 
              className="mt-6"
            >
              Book Another Meeting
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full max-w-lg mx-auto animate-slide-in">
      <CardHeader>
        <CardTitle>Book a B2B Meeting</CardTitle>
        <CardDescription>
          Schedule a meeting with one of our partner companies to discuss potential collaboration.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="company">Select Company</Label>
            <Select value={company} onValueChange={setCompany}>
              <SelectTrigger id="company">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent>
                {COMPANIES.map(c => (
                  <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-10"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={{ before: new Date() }}
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {TIMES.map(t => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="Enter your full name" 
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                placeholder="Enter your phone number" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Meeting Agenda</Label>
            <Textarea 
              id="message" 
              placeholder="Briefly describe the purpose of the meeting" 
              className="min-h-24 resize-none"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? "Processing..." : "Request Meeting"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
