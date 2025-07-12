// screens/auth/mainGreenhouse/AddScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const AddScreen = () => {
  const [name, setName] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {
    if (!name || !width || !length) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
      return;
    }

    const greenhouse = {
      name: name.trim(),
      width: parseFloat(width),
      length: parseFloat(length),
    };

    navigation.navigate('Settings', { greenhouse });
  };

  return (
    <LinearGradient colors={['#22C1C3', '#FDBB2D']} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Добавить теплицу</Text>

        <TextInput
          style={styles.input}
          placeholder="Название теплицы"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Ширина (м)"
          keyboardType="numeric"
          value={width}
          onChangeText={setWidth}
        />
        <TextInput
          style={styles.input}
          placeholder="Длина (м)"
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />

        <Button title="Далее" onPress={handleNext} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});

export default AddScreen;
