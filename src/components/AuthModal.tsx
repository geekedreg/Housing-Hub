
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Sign In form state
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  
  // Register form state
  const [companyName, setCompanyName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Signed in successfully",
        description: "Welcome back to Africa Housing Show.",
      });
      onClose();
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful",
        description: "Your company account has been created. Please check your email to verify your account.",
      });
      onClose();
    }, 1500);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 animate-scale-in">
        <Tabs defaultValue="signin" value={activeTab} onValueChange={(value) => setActiveTab(value as 'signin' | 'register')} className="w-full">
          <div className="flex">
            <TabsList className="w-full rounded-none grid grid-cols-2">
              <TabsTrigger value="signin" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary transition-all">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="register" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary transition-all">
                Register
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="signin" className="p-6 pt-8">
            <form onSubmit={handleSignIn}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input 
                    id="signin-email" 
                    type="email" 
                    placeholder="email@company.com" 
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="signin-password">Password</Label>
                    <Button type="button" variant="link" size="sm" className="h-auto p-0 text-xs">
                      Forgot password?
                    </Button>
                  </div>
                  <div className="relative">
                    <Input 
                      id="signin-password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      value={signInPassword}
                      onChange={(e) => setSignInPassword(e.target.value)}
                      required
                      className="h-11 pr-10"
                    />
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="sm"
                      className="absolute right-1 top-1/2 -translate-y-1/2 px-2 py-0 h-auto"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff size={16} className="text-muted-foreground" />
                      ) : (
                        <Eye size={16} className="text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-11" 
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                  {!isLoading && <ArrowRight size={16} className="ml-2" />}
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="p-6 pt-8">
            <form onSubmit={handleRegister}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input 
                    id="company-name" 
                    placeholder="Your company name" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-email">Company Email</Label>
                  <Input 
                    id="register-email" 
                    type="email" 
                    placeholder="email@company.com" 
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="register-password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create a password" 
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                      className="h-11 pr-10"
                    />
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="sm"
                      className="absolute right-1 top-1/2 -translate-y-1/2 px-2 py-0 h-auto"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff size={16} className="text-muted-foreground" />
                      ) : (
                        <Eye size={16} className="text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm font-normal leading-tight">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-11" 
                  disabled={isLoading || !acceptTerms}
                >
                  {isLoading ? "Creating account..." : "Create Company Account"}
                  {!isLoading && <Check size={16} className="ml-2" />}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
