import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import HomeScreen from './screens/auth/mainScreen/HomeScreen';
import AnalyticsScreen from './screens/auth/mainScreen/AnalyticsScreen';
import AutomationsScreen from './screens/auth/mainScreen/AutomationsScreen';
import ProfileScreen from './screens/auth/mainScreen/ProfileScreen';

//icon import
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const useRoute = (isAuth, onLayoutRootView) => {
  if (!isAuth) {
    return (
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
        </AuthStack.Navigator>
      </View>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: true }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Automations"
        component={AutomationsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="robot-happy-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="id-card-o" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
