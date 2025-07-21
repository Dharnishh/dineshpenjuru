import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
                  onChange={(e) => handleChange("name", e.target.value)}
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
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white/5 border-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium block">
                Service Needed
              </label>
              <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger className="bg-white/5 border-white/20">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="data-analysis">Data Analysis</SelectItem>
                  <SelectItem value="data-visualization">Data Visualization</SelectItem>
                  <SelectItem value="automation">Python Automation</SelectItem>
                  <SelectItem value="consulting">Data Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium block">
                Message *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
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
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};