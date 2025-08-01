import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_portfolio'; // You'll need to replace this
      const templateId = 'template_contact'; // You'll need to replace this
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'pv123dinesh@gmail.com',
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again or contact me directly at pv123dinesh@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="max-w-2xl mx-auto space-y-8 lg:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg px-4">
              Ready to transform your data into actionable insights? Let's discuss your project.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input 
                  id="name" 
                  value={formData.name} 
                  onChange={e => handleChange("name", e.target.value)} 
                  placeholder="Your full name" 
                  required 
                  className="bg-white/5 border-white/20" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={e => handleChange("email", e.target.value)} 
                  placeholder="your.email@example.com" 
                  required 
                  className="bg-white/5 border-white/20" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium block">
                Message *
              </label>
              <Textarea 
                id="message" 
                value={formData.message} 
                onChange={e => handleChange("message", e.target.value)} 
                placeholder="Tell me about your project..." 
                required 
                rows={4} 
                className="bg-white/5 border-white/20" 
              />
            </div>

            <Button 
              type="submit" 
              variant="contact" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            <div className="text-center text-sm text-foreground/60">
              <p>Or reach me directly at:</p>
              <a 
                href="mailto:pv123dinesh@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                pv123dinesh@gmail.com
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};