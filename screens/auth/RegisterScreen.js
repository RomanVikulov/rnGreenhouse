import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';

import { authSignUpUser } from '../../redux/auth/authOperations';

const initialState = {
  email: '',
  password: '',
  nickname: '',
};

export default function RegisterScreen({ onLayoutRootView, navigation }) {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const handleSabmit = () => {
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleSabmit}>
      <LinearGradient
        colors={['#2A7B9B', '#57C785', '#EDDD53']}
        style={styles.container}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : -200}
        >
          <ImageBackground style={styles.image} resizeMode="cover">
            <ScrollView
              contentContainerStyle={styles.scroll}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.form} onLayout={onLayoutRootView}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Hello hello</Text>
                  <Text style={styles.headerTitle}>Please register</Text>
                </View>

                <View>
                  <Text style={styles.inputTitle}>YOUR NAME</Text>
                  <TextInput
                    style={styles.input}
                    textAlign="center"
                    placeholder="Enter name"
                    placeholderTextColor="#ccc"
                    value={state.nickname}
                    onChangeText={(value) =>
                      setState((prev) => ({ ...prev, nickname: value }))
                    }
                  />
                </View>

                <View style={{ marginTop: 20 }}>
                  <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
                  <TextInput
                    style={styles.input}
                    textAlign="center"
                    placeholder="Enter email"
                    placeholderTextColor="#ccc"
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prev) => ({ ...prev, email: value }))
                    }
                  />
                </View>

                <View style={{ marginTop: 20 }}>
                  <Text style={styles.inputTitle}>PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    textAlign="center"
                    secureTextEntry
                    placeholder="Enter password"
                    placeholderTextColor="#ccc"
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prev) => ({ ...prev, password: value }))
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={handleSabmit}
                >
                  <Text style={styles.btnTitle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    marginTop: 20,
                    alignSelf: 'center',
                  }}
                >
                  <Text style={{ color: '#fff' }}>
                    If you are registered!{' '}
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#ff1493',
                      }}
                    >
                      Sign In
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'center' },
  image: { flex: 1, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#006400',
    height: 40,
    borderRadius: 6,
    color: '#ffffff',
    paddingHorizontal: 10,
  },
  form: { marginHorizontal: 40, marginBottom: 120 },
  inputTitle: {
    color: '#006400',
    marginBottom: 5,
    fontSize: 18,
    fontFamily: 'Lora-Regular',
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    ...Platform.select({
      ios: { backgroundColor: 'transparent', borderColor: '#1e90ff' },
      android: { backgroundColor: '#2e8b57', borderColor: 'transparent' },
    }),
  },
  btnTitle: {
    color: Platform.OS === 'ios' ? '#1e90ff' : '#ffffff',
    fontSize: 18,
    fontFamily: 'Lora-Regular',
  },
  header: { alignItems: 'center', marginBottom: 30 },
  headerTitle: {
    fontSize: 30,
    color: '#006400',
    fontFamily: 'Lora-Regular',
  },
});
