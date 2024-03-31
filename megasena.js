import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumeros = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    setNumerosSorteados(numeros);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sorteio de Números</Text>
      <Button title="Sortear Números" onPress={sortearNumeros} />
      <Text style={styles.numerosSorteados}>
        {numerosSorteados.length > 0 && 'Números Sorteados:'}
      </Text>
      {numerosSorteados.map((numero, index) => (
        <Text key={index} style={styles.numerosSorteados}>
          {numero}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numerosSorteados: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default App;
