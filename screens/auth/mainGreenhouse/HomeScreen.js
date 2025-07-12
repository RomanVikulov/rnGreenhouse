// screens/auth/mainGreenhouse/HomeScreen.js

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const HomeScreen = () => {
  const [greenhouses, setGreenhouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // чтобы перезагружать после добавления

  // const fetchGreenhouses = async () => {
  //   setLoading(true);
  //   try {
  //     // ЗАМЕНИ на реальный backend URL
  //     const response = await fetch('http://your-backend.com/api/greenhouses');
  //     const data = await response.json();
  //     setGreenhouses(data);
  //   } catch (error) {
  //     console.error('Ошибка при загрузке теплиц:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isFocused) fetchGreenhouses();
  // }, [isFocused]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>
        Размер: {item.width}м × {item.length}м
      </Text>
      <Text>Температура: {item.settings?.temperature ?? 'N/A'}°C</Text>
      <Text>Влажность: {item.settings?.humidity ?? 'N/A'}%</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#22C1C3', '#FDBB2D']} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.header}>Мои теплицы</Text>

        <Button
          title="➕ Добавить теплицу"
          onPress={() => navigation.navigate('Add')}
        />

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#000"
            style={{ marginTop: 20 }}
          />
        ) : (
          <FlatList
            data={greenhouses}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 20 }}
          />
        )}
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
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffffcc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default HomeScreen;
