import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Sparkles } from 'lucide-react';
import { useContacts } from '@/hooks/useContacts';
import SearchBar from '@/components/SearchBar';
import ContactList from '@/components/ContactList';
import AddContactModal from '@/components/AddContactModal';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Index = () => {
  const { contacts, loading, searchQuery, setSearchQuery, addContact } = useContacts();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddContact = (contact: Parameters<typeof addContact>[0]) => {
    addContact(contact);
    toast.success('Contact added successfully!', {
      description: `${contact.name} has been added to your contacts.`,
    });
  };

  return (
    <div className="min-h-screen gradient-bg overflow-x-hidden">
      {/* Floating orbs for depth */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-12 pb-8 px-4"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-8 h-8 text-primary animate-glow" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Tria Contact List
              </h1>
              <Sparkles className="w-8 h-8 text-secondary animate-glow" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg"
            >
              Your futuristic contact management system
            </motion.p>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 pb-20">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          {loading ? (
            <LoadingSpinner />
          ) : (
            <ContactList contacts={contacts} />
          )}
        </main>

        {/* Floating Add Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.5 }}
          className="fixed bottom-8 right-8 z-30"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 group-hover:opacity-100 blur-xl transition-opacity animate-glow" />
            <Button
              onClick={() => setIsModalOpen(true)}
              className="relative h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform shadow-2xl"
            >
              <Plus className="w-8 h-8" />
            </Button>
          </div>
        </motion.div>

        {/* Add Contact Modal */}
        <AddContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddContact}
        />
      </div>
    </div>
  );
};

export default Index;
