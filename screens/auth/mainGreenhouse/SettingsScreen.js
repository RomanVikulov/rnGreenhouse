// screens/auth/mainGreenhouse/SettingsScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const SettingsScreen = () => {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ventilation, setVentilation] = useState(false);
  const [light, setLight] = useState(false);
  const [watering, setWatering] = useState(false);
  const [autoMode, setAutoMode] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();
  const { greenhouse } = route.params || {};

  const handleSave = async () => {
    if (!temperature || !humidity) {
      Alert.alert('Ошибка', 'Введите температуру и влажность');
      return;
    }

    const payload = {
      ...greenhouse,
      settings: {
        temperature: parseFloat(temperature),
        humidity: parseFloat(humidity),
        ventilation,
        light,
        watering,
        mode: autoMode ? 'auto' : 'manual',
      },
    };

    try {
      // Замените на ваш реальный backend URL
      const response = await axios.post(
        'http://your-backend.com/api/greenhouses',
        payload
      );

      if (response.status === 200 || response.status === 201) {
        Alert.alert('Успешно', 'Теплица добавлена');
        navigation.navigate('Home');
      } else {
        Alert.alert('Ошибка', 'Сервер вернул ошибку');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Ошибка', 'Не удалось подключиться к серверу');
    }
  };

  return (
    <LinearGradient colors={['#22C1C3', '#FDBB2D']} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Параметры теплицы</Text>

        <TextInput
          style={styles.input}
          placeholder="Температура (°C)"
          keyboardType="numeric"
          value={temperature}
          onChangeText={setTemperature}
        />
        <TextInput
          style={styles.input}
          placeholder="Влажность (%)"
          keyboardType="numeric"
          value={humidity}
          onChangeText={setHumidity}
        />

        <View style={styles.switchRow}>
          <Text>Вентиляция</Text>
          <Switch value={ventilation} onValueChange={setVentilation} />
        </View>
        <View style={styles.switchRow}>
          <Text>Освещение</Text>
          <Switch value={light} onValueChange={setLight} />
        </View>
        <View style={styles.switchRow}>
          <Text>Полив</Text>
          <Switch value={watering} onValueChange={setWatering} />
        </View>
        <View style={styles.switchRow}>
          <Text>Режим: {autoMode ? 'Авто' : 'Ручной'}</Text>
          <Switch value={autoMode} onValueChange={setAutoMode} />
        </View>

        <Button title="Сохранить теплицу" onPress={handleSave} />
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
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default SettingsScreen;
