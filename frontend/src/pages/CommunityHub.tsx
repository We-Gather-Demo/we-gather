import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Music, Film, FileText, Search, Star } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Star },
  { id: "books", label: "Books", icon: BookOpen },
  { id: "music", label: "Music", icon: Music },
  { id: "videos", label: "Videos", icon: Film },
  { id: "docs", label: "Documents", icon: FileText },
];

const resources = [
  { id: 1, title: "The Web3 Handbook", category: "books", author: "Satoshi N.", rating: 4.8 },
  { id: 2, title: "Decentralized Future", category: "books", author: "V. Buterin", rating: 4.9 },
  { id: 3, title: "Smart Contract Patterns", category: "books", author: "A. Antonopoulos", rating: 4.7 },
  { id: 4, title: "Crypto Economics 101", category: "books", author: "Community", rating: 4.5 },
  { id: 5, title: "Lo-Fi Beats Vol. 3", category: "music", author: "BlockBeats", rating: 4.6 },
  { id: 6, title: "Blockchain Anthems", category: "music", author: "CryptoSound", rating: 4.3 },
  { id: 7, title: "Digital Sunrise EP", category: "music", author: "Node.wav", rating: 4.8 },
  { id: 8, title: "Decentralized Mixtape", category: "music", author: "DAObeats", rating: 4.4 },
  { id: 9, title: "Intro to Smart Contracts", category: "videos", author: "WeGather Academy", rating: 4.9 },
  { id: 10, title: "DeFi Masterclass", category: "videos", author: "ChainEd", rating: 4.7 },
  { id: 11, title: "NFT Art Creation", category: "videos", author: "PixelDAO", rating: 4.5 },
  { id: 12, title: "Whitepaper Template", category: "docs", author: "Community", rating: 4.2 },
  { id: 13, title: "DAO Governance Guide", category: "docs", author: "GovDAO", rating: 4.6 },
  { id: 14, title: "Tokenomics Framework", category: "docs", author: "EconDAO", rating: 4.4 },
];

const categoryIcons: Record<string, typeof BookOpen> = {
  books: BookOpen,
  music: Music,
  videos: Film,
  docs: FileText,
};

const CommunityHub = () => {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = resources.filter(
    (r) =>
      (active === "all" || r.category === active) &&
      r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-glow-radial pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl md:text-4xl mb-2 glow-text">Community Hub</h1>
          <p className="text-muted-foreground font-sub text-sm mb-8">
            Browse all community-curated resources
          </p>
        </motion.div>

        {/* Search */}
        <div className="glass-card flex items-center gap-3 px-5 py-3 mb-8 max-w-md">
          <Search size={18} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-sub text-xs tracking-wider transition-all ${
                active === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              <cat.icon size={14} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((res) => {
              const Icon = categoryIcons[res.category] || Star;
              return (
                <motion.div
                  key={res.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card p-6 hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="text-primary" size={22} />
                    <span className="flex items-center gap-1 text-xs text-accent">
                      <Star size={12} fill="currentColor" /> {res.rating}
                    </span>
                  </div>
                  <h3 className="font-sub text-sm tracking-wider mb-1 group-hover:text-primary transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">by {res.author}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="font-sub text-sm">No resources found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityHub;
