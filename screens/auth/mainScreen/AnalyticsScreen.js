import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnalyticsScreen = () => {
  return (
    <LinearGradient colors={['#22C1C3', '#FDBB2D']} style={styles.container}>
      <View style={styles.container}>
        <Text>AnalyticsScreen</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnalyticsScreen;
