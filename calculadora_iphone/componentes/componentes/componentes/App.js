import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState('');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleTap = (type, value) => {
    switch (type) {
      case 'number':
        if (waitingForSecondValue) {
          setDisplayValue(String(value));
          setWaitingForSecondValue(false);
        } else {
          setDisplayValue(displayValue === '0' ? String(value) : displayValue + value);
        }
        setExpression(expression + value);
        break;

      case 'operator':
        if (firstValue == null) {
          setFirstValue(parseFloat(displayValue));
        } else if (operator) {
          const result = performCalculation(firstValue, parseFloat(displayValue), operator);
          setDisplayValue(String(result));
          setFirstValue(result);
        }
        setOperator(value);
        setWaitingForSecondValue(true);
        setExpression(expression + ' ' + value + ' ');
        break;

      case 'clear':
        setDisplayValue('0');
        setFirstValue(null);
        setOperator(null);
        setWaitingForSecondValue(false);
        setExpression('');
        break;

      case 'backspace':
        if (expression.length > 0) {
          setExpression(expression.slice(0, -1));
          setDisplayValue(displayValue.slice(0, -1) || '0');
        }
        break;

      case 'equal':
        if (operator && firstValue != null) {
          const result = performCalculation(firstValue, parseFloat(displayValue), operator);
          setDisplayValue(String(result));
          setFirstValue(result);
          setOperator(null);
          setWaitingForSecondValue(false);
          setExpression(String(result));
        }
        break;

      default:
        break;
    }
  };

  const performCalculation = (first, second, operator) => {
    switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return first / second;
      default:
        return second;
    }
  };

  return (
    <View style={styles.container}>
      <Display value={expression || displayValue} />
      <View style={styles.row}>
        <Button text="AC" color="#ff3b30" onPress={() => handleTap('clear')} />
        <Button text="(" color="#ff9500" onPress={() => handleTap('operator', '(')} />
        <Button text=")" color="#ff9500" onPress={() => handleTap('operator', ')')} />
        <Button text="/" color="#ff9500" onPress={() => handleTap('operator', '/')} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => handleTap('number', 7)} />
        <Button text="8" onPress={() => handleTap('number', 8)} />
        <Button text="9" onPress={() => handleTap('number', 9)} />
        <Button text="x" color="#ff9500" onPress={() => handleTap('operator', '*')} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => handleTap('number', 4)} />
        <Button text="5" onPress={() => handleTap('number', 5)} />
        <Button text="6" onPress={() => handleTap('number', 6)} />
        <Button text="-" color="#ff9500" onPress={() => handleTap('operator', '-')} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => handleTap('number', 1)} />
        <Button text="2" onPress={() => handleTap('number', 2)} />
        <Button text="3" onPress={() => handleTap('number', 3)} />
        <Button text="+" color="#ff9500" onPress={() => handleTap('operator', '+')} />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={() => handleTap('number', 0)} />
        <Button text="." onPress={() => handleTap('number', '.')} />
        <Button text="<=" color="#ff9500" onPress={() => handleTap('backspace')} />
        <Button text="=" color="#ff9500" onPress={() => handleTap('equal')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
