import { motion } from "framer-motion";
import { Wallet, BookOpen, Music, Globe, Shield, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/WeGather3D.png";

const features = [
  { icon: BookOpen, title: "Books & Literature", desc: "Access a vast library of community-curated books and publications." },
  { icon: Music, title: "Music & Audio", desc: "Stream and collect music, podcasts, and audio content as NFTs." },
  { icon: Globe, title: "Decentralized", desc: "All resources are stored on-chain, ensuring permanence and transparency." },
  { icon: Shield, title: "Secure Access", desc: "Smart wallet authentication keeps your identity and assets safe." },
  { icon: Zap, title: "Instant Access", desc: "Connect your wallet and start exploring community resources immediately." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-glow-radial">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-primary/10 blur-[80px] animate-pulse-glow" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 animate-float"
        >
          <img src={logo} alt="WeGather Logo" className="h-36 w-36 md:h-52 md:w-52 object-contain" />
        </motion.div>

        <motion.h1
          className="font-heading text-4xl md:text-6xl mb-6 glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          WeGather
        </motion.h1>

        <motion.p
          className="max-w-xl text-center font-sub text-sm md:text-base text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          A community resource hub on the blockchain. Access books, music, and more — powered by Web3.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button
            className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-sub text-sm tracking-wider text-primary-foreground transition-all hover:scale-105 glow-teal"
            whileHover={{ boxShadow: "0 0 40px hsl(174 58% 64% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Wallet size={20} />
            Connect Wallet
          </motion.button>

          <Link to="/mint">
            <motion.button
              className="group flex items-center gap-3 rounded-full border border-accent/50 bg-accent/10 px-8 py-4 font-sub text-sm tracking-wider text-accent transition-all hover:scale-105 hover:bg-accent/20 glow-accent"
              whileHover={{ boxShadow: "0 0 40px hsl(298 93% 85% / 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={20} />
              Mint Founding NFT
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-sub tracking-widest">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-24">
        <motion.h2
          className="mb-4 text-center font-sub text-2xl md:text-3xl glow-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why WeGather?
        </motion.h2>
        <motion.p
          className="mb-16 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Everything your community needs, decentralized and accessible.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass-card p-8 transition-all hover:border-primary/30 hover:glow-teal"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <f.icon className="mb-4 text-primary" size={32} />
              <h3 className="mb-2 font-sub text-sm tracking-wider">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 text-center">
        <motion.div
          className="glass-card glow-accent mx-auto max-w-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-sub text-xl md:text-2xl">Ready to explore?</h2>
          <p className="mb-8 text-muted-foreground">
            Join the community and unlock decentralized resources for just $10/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              className="rounded-full bg-primary px-8 py-3 font-sub text-sm tracking-wider text-primary-foreground transition-all hover:scale-105"
            >
              Browse Resources
            </Link>
            <Link
              to="/payment"
              className="rounded-full border border-primary/50 px-8 py-3 font-sub text-sm tracking-wider text-primary transition-all hover:bg-primary/10"
            >
              Subscribe Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logo} alt="WeGather" className="h-8 w-8 object-contain" />
            <span className="font-sub text-xs tracking-widest">WEGATHER</span>
          </div>
          <p>© 2026 WeGather. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
