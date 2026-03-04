import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "bug", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Your message has been sent! We'll get back to you soon.",
    });
    setForm({ name: "", email: "", type: "bug", message: "" });
  };

  return (
    <div className="min-h-screen bg-glow-radial pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-3xl md:text-4xl mb-2 glow-text">Contact & Support</h1>
          <p className="text-muted-foreground font-sub text-sm">
            We're here to help. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-sub text-sm tracking-wider mb-2">Submit a Ticket</h2>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
              >
                <option value="bug">Bug Report</option>
                <option value="concern">Concern</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-sub text-xs tracking-wider text-primary-foreground hover:scale-[1.02] transition-transform glow-teal"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* Discord & Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card p-8">
              <MessageCircle className="text-accent mb-4" size={32} />
              <h2 className="font-sub text-sm tracking-wider mb-3">Join Our Discord</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Connect with the WeGather community for real-time support, discussions, and updates.
              </p>
              <a
                href="https://discord.gg/wegather"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-6 py-3 font-sub text-xs tracking-wider text-accent hover:bg-accent/10 transition-all"
              >
                <ExternalLink size={14} />
                Join Discord
              </a>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-sub text-sm tracking-wider mb-3">Common Questions</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-foreground mb-1">How do I connect my wallet?</p>
                  <p>Click "Connect Wallet" on the landing page and follow your wallet provider's prompts.</p>
                </div>
                <div>
                  <p className="text-foreground mb-1">Can I cancel my subscription?</p>
                  <p>Yes, you can cancel anytime through the payment page. Your access continues until the end of the billing cycle.</p>
                </div>
                <div>
                  <p className="text-foreground mb-1">How are resources stored?</p>
                  <p>All resources are stored on-chain using decentralized storage protocols ensuring permanence.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
