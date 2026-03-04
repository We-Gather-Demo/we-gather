import { motion } from "framer-motion";
import { Check, Zap, Shield, Globe } from "lucide-react";

const features = [
  "Unlimited access to all books & literature",
  "Full music & audio streaming library",
  "Video content & masterclasses",
  "Community documents & templates",
  "NFT minting privileges",
  "Priority community support",
  "Early access to new features",
  "DAO voting rights",
];

const Payment = () => {
  return (
    <div className="min-h-screen bg-glow-radial pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-3xl md:text-4xl mb-2 glow-text">Subscription</h1>
          <p className="text-muted-foreground font-sub text-sm">
            One plan. Unlimited resources.
          </p>
        </motion.div>

        <motion.div
          className="glass-card glow-accent mx-auto max-w-md p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="text-primary" size={28} />
              <Shield className="text-accent" size={28} />
              <Globe className="text-secondary" size={28} />
            </div>
            <h2 className="font-sub text-lg tracking-wider mb-2">WeGather Pro</h2>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-heading glow-text">$10</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
          </div>

          <ul className="space-y-3 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <Check className="text-primary shrink-0" size={16} />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <button className="w-full rounded-full bg-primary py-4 font-sub text-sm tracking-wider text-primary-foreground transition-all hover:scale-[1.02] glow-teal">
            Subscribe with Wallet
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Paid via smart contract. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
