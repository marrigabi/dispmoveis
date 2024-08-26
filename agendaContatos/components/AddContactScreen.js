import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useContacts } from './ContactContext';

const AddContactScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { addContact } = useContacts();

  const handleAddContact = () => {
    addContact({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar novo contato: </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#aaa"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        autoCapitalize="none"
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.buttonContainer}>
        <Button title="Adicionar Contato" color="#f0ab0f" onPress={handleAddContact} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Visualizar Contato" color="#593008" onPress={() => navigation.navigate('ContactList')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  buttonContainer: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default AddContactScreen;
