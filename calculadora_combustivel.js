import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');
  const [total, setTotal] = useState(0);

  function calcularConsumo() {
    const quilometros = parseInt(km);
    const litrosGastos = parseInt(litros);
    const consumoTotal = quilometros / litrosGastos;
    setTotal(consumoTotal);
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          label="Km rodados"
          value={km}
          onChangeText={setKm}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          label="Litros gastos"
          value={litros}
          onChangeText={setLitros}
          keyboardType="numeric"
        />
        <Button mode="contained" onPress={calcularConsumo} style={styles.button}>
          Calcular Consumo
        </Button>
        <Text style={styles.text}>
          Consumo: {total.toFixed(2)} km/l
        </Text>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
    width: '80%',
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});
