import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Rocket, Upload, Link2, Github, FileCheck } from "lucide-react";

const RegisterSubmit = () => (
  <>
    {/* Register */}
    <section id="register" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <Rocket size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-gradient">
            Register Now
          </h2>
          <p className="text-muted-foreground mb-8 text-sm sm:text-base">
            Ready to showcase your skills? Join hundreds of developers building their digital identity.
          </p>
          <Button variant="neon" size="lg" className="text-base px-10" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">Register Here</a>
          </Button>
        </AnimatedSection>
      </div>
    </section>

    {/* Submit */}
    <section id="submit" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <Upload size={40} className="text-secondary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-gradient">
            Submit Your Portfolio
          </h2>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Deadline: <span className="text-primary font-semibold">5th March, 11:59 PM</span>
          </p>

          <div className="glass rounded-xl p-6 mb-8 text-left inline-block">
            <p className="text-sm text-muted-foreground mb-3 font-medium">Submission requires:</p>
            <div className="space-y-2">
              {[
                { icon: Link2, text: "Live portfolio link" },
                { icon: Github, text: "GitHub repository link" },
                { icon: FileCheck, text: "v0.dev usage proof" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-foreground">
                  <Icon size={14} className="text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Button variant="neon" size="lg" className="text-base px-10" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">Submit Final Project</a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default RegisterSubmit;
