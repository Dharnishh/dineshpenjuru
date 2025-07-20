import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="section-padding border-t border-white/10">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-foreground/60">
              © 2025 P.V. Dinesh. All rights reserved.
            </p>
            <div className="mt-2 space-y-1 text-sm text-foreground/60">
              <div>📧 dinesh@example.com</div>
              <div>📞 +1 (555) 123-4567</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};