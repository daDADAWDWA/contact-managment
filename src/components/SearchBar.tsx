import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto mb-12"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-50 group-hover:opacity-75 blur-xl transition-opacity" />
        <div className="relative glass-card rounded-2xl p-1.5">
          <div className="flex items-center gap-3 px-6 py-4">
            <Search className="w-5 h-5 text-primary" />
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Search contacts by name..."
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
