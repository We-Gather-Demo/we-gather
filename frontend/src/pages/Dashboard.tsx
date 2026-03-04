import { motion } from "framer-motion";
import { BookOpen, Music, Film, FileText, Image, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const myResources = [
  { category: "Books", icon: BookOpen, count: 12, items: ["The Web3 Handbook", "Decentralized Future", "Crypto Economics"] },
  { category: "Music", icon: Music, count: 8, items: ["Lo-Fi Beats Vol. 3", "Blockchain Anthems", "Digital Sunrise"] },
  { category: "Videos", icon: Film, count: 5, items: ["Intro to Smart Contracts", "DeFi Masterclass"] },
  { category: "Documents", icon: FileText, count: 3, items: ["Whitepaper Template", "DAO Guide"] },
];

const nftPreviews = [
  { name: "Genesis Pass #001", rarity: "Legendary", color: "from-accent/40 to-primary/40" },
  { name: "Community Badge #042", rarity: "Rare", color: "from-secondary/40 to-primary/40" },
  { name: "Resource Key #128", rarity: "Common", color: "from-primary/40 to-teal/40" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-glow-radial pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-heading text-3xl md:text-4xl mb-2 glow-text">Dashboard</h1>
          <p className="text-muted-foreground font-sub text-sm">Welcome back, Explorer</p>
        </motion.div>

        {/* My Resources */}
        <section className="mb-12">
          <h2 className="font-sub text-lg tracking-wider mb-6">My Resources</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {myResources.map((res, i) => (
              <motion.div
                key={res.category}
                className="glass-card p-6 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <res.icon className="text-primary" size={24} />
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-sub text-primary">
                    {res.count}
                  </span>
                </div>
                <h3 className="font-sub text-sm tracking-wider mb-3">{res.category}</h3>
                <ul className="space-y-1.5">
                  {res.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground truncate">• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Discover More */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-sub text-lg tracking-wider">Discover More</h2>
            <Link to="/community" className="flex items-center gap-2 text-primary text-sm font-sub hover:underline">
              Browse All <ExternalLink size={14} />
            </Link>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <BookOpen className="text-primary" size={28} />
              <Music className="text-accent" size={28} />
              <Film className="text-secondary" size={28} />
            </div>
            <h3 className="font-sub text-sm tracking-wider mb-2">Explore the Community Hub</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Thousands of resources await — books, music, videos, and documents curated by the community.
            </p>
            <Link
              to="/community"
              className="inline-block rounded-full bg-primary px-6 py-3 font-sub text-xs tracking-wider text-primary-foreground hover:scale-105 transition-transform"
            >
              Go to Community Hub
            </Link>
          </div>
        </section>

        {/* Mint CTA */}
        <section className="mb-12">
          <motion.div
            className="glass-card glow-accent p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-accent/10 p-3">
                <Sparkles className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-sub text-sm tracking-wider mb-1">Founding Member NFT</h3>
                <p className="text-xs text-muted-foreground">Mint your exclusive NFT for lifetime access & perks</p>
              </div>
            </div>
            <Link
              to="/mint"
              className="rounded-full border border-accent/50 bg-accent/10 px-6 py-3 font-sub text-xs tracking-wider text-accent hover:bg-accent/20 transition-all hover:scale-105 shrink-0"
            >
              Mint Now
            </Link>
          </motion.div>
        </section>

        {/* NFT Preview */}
        <section>
          <h2 className="font-sub text-lg tracking-wider mb-6">My NFTs</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {nftPreviews.map((nft, i) => (
              <motion.div
                key={nft.name}
                className="glass-card overflow-hidden hover:border-primary/30 transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className={`h-40 bg-gradient-to-br ${nft.color} flex items-center justify-center`}>
                  <Image className="text-foreground/40" size={48} />
                </div>
                <div className="p-4">
                  <h3 className="font-sub text-xs tracking-wider mb-1">{nft.name}</h3>
                  <span className="text-xs text-accent">{nft.rarity}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
