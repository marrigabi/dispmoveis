import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useContacts } from './ContactContext';

const ContactListScreen = () => {
  const { contacts } = useContacts();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contatos</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactDetails}>Phone: {item.phone}</Text>
            <Text style={styles.contactDetails}>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#593008',
    textAlign: 'center',
  },
  contactItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#593008',
  },
  contactDetails: {
    fontSize: 16,
    color: '#555',
  },
});

export default ContactListScreen;
