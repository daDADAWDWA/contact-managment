import { useState, useEffect } from 'react';

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    phone: '+1 (555) 123-4567',
    email: 'alex.rivera@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    phone: '+1 (555) 234-5678',
    email: 'sarah.chen@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    phone: '+1 (555) 345-6789',
    email: 'marcus.j@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
  },
  {
    id: '4',
    name: 'Elena Popova',
    phone: '+1 (555) 456-7890',
    email: 'elena.popova@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
  },
  {
    id: '5',
    name: 'James Wilson',
    phone: '+1 (555) 567-8901',
    email: 'james.wilson@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
  },
  {
    id: '6',
    name: 'Priya Sharma',
    phone: '+1 (555) 678-9012',
    email: 'priya.sharma@email.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
  },
];

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Simulate API call
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setContacts(mockContacts);
      setLoading(false);
    };

    fetchContacts();
  }, []);

  const addContact = (contact: Omit<Contact, 'id'>) => {
    const newContact = {
      ...contact,
      id: Date.now().toString(),
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    contacts: filteredContacts,
    loading,
    searchQuery,
    setSearchQuery,
    addContact,
  };
};
