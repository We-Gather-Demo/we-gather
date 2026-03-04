import { ThirdwebProvider } from 'thirdweb/react'
import ClaimButton from '@/components/ClaimButton'
import { motion } from "framer-motion";
import { Sparkles, Shield, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/WeGather3D.png";

const benefits = [
  "Lifetime access to all community resources",
  "Exclusive founding member badge",
  "Early access to new features & drops",
  "Governance voting rights",
  "Priority support channel",
];

const MintNFT = () => {
  return (
    <ThirdwebProvider>
      <div className="min-h-screen bg-glow-radial pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sub text-xs tracking-wider mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          className="glass-card p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mx-auto mb-8 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-[60px] animate-pulse-glow" />
            <img
              src={logo}
              alt="WeGather Founding Member NFT"
              className="relative h-48 w-48 md:h-64 md:w-64 mx-auto object-contain animate-float"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-4">
              <Sparkles size={14} className="text-accent" />
              <span className="font-sub text-xs tracking-wider text-accent">LIMITED EDITION</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl mb-3 glow-text">
              Founding Member NFT
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Be among the first to join WeGather. Mint your Founding Member NFT and unlock
              exclusive lifetime benefits in the community.
            </p>
          </motion.div>

          <motion.div
            className="text-left max-w-sm mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-sub text-xs tracking-wider mb-4 text-center">BENEFITS</h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield size={16} className="text-primary" />
              <span className="font-sub text-xs tracking-wider text-muted-foreground">
                MINT PRICE: 0.05 ETH
              </span>
            </div>

            <ClaimButton />

            <p className="text-xs text-muted-foreground">
              237 / 1,000 minted
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </ThirdwebProvider>
  );
};

export default MintNFT;

