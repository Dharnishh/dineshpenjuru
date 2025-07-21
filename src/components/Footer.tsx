import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Footer = () => {
  return <footer className="section-padding border-t border-white/10">
      <div className="container-width">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
          <div className="text-center sm:text-left">
            <p className="text-foreground/60">
              © 2025 P.V. Dinesh. All rights reserved.
            </p>
            <div className="mt-2 space-y-1 text-xs sm:text-sm text-foreground/60">
              <div>📧 pv123dinesh@gmail.com</div>
              <div>📞 +91 9848284940</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};