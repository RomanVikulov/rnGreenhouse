import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import AddScreen from './screens/auth/mainGreenhouse/AddScreen';
import AnalyticsScreen from './screens/auth/mainGreenhouse/AnalyticsScreen';
import AutomationsScreen from './screens/auth/mainGreenhouse/AutomationsScreen';
import HomeScreen from './screens/auth/mainGreenhouse/HomeScreen';
import ProfileScreen from './screens/auth/mainGreenhouse/ProfileScreen';
import SettingsScreen from './screens/auth/mainGreenhouse/SettingsScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

//icon import
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="format-list-bulleted-add"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="settings-suggest" size={size} color={color} />
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
