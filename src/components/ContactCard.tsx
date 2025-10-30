import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Contact } from '@/hooks/useContacts';

interface ContactCardProps {
  contact: Contact;
  index: number;
}

const ContactCard = ({ contact, index }: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      className="group relative"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative glass-card rounded-3xl p-6 border-2 border-border group-hover:border-primary/50 transition-all duration-300">
        {/* Avatar */}
        <motion.div 
          className="relative w-24 h-24 mx-auto mb-4"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-50 blur-lg group-hover:opacity-100 transition-opacity" />
          <img
            src={contact.avatar}
            alt={contact.name}
            className="relative w-full h-full rounded-full border-4 border-primary/30 object-cover"
          />
        </motion.div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-foreground text-center mb-4 group-hover:text-primary transition-colors">
          {contact.name}
        </h3>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              {contact.phone}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
              <Mail className="w-4 h-4 text-secondary" />
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate">
              {contact.email}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
