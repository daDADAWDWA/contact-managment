import { motion } from 'framer-motion';
import ContactCard from './ContactCard';
import { Contact } from '@/hooks/useContacts';

interface ContactListProps {
  contacts: Contact[];
}

const ContactList = ({ contacts }: ContactListProps) => {
  if (contacts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="glass-card rounded-3xl p-12 max-w-md mx-auto">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">No contacts found</h3>
          <p className="text-muted-foreground">Try a different search term</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {contacts.map((contact, index) => (
        <ContactCard key={contact.id} contact={contact} index={index} />
      ))}
    </div>
  );
};

export default ContactList;
