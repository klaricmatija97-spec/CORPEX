import React from 'react';
import { Dimensions, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_600SemiBold });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('./assets/gym-bg.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.logo}>CORPEX</Text>
        <Pressable style={styles.startButton}>
          <Text style={styles.startButtonText}>Započni</Text>
        </Pressable>
        <Text style={styles.loginText}>Ulogiraj se &gt;</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  background: { flex: 1 },
  logo: {
    position: 'absolute',
    top: height * 0.1,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 21,
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 6.9,
    textAlign: 'center',
  },
  startButton: {
    position: 'absolute',
    bottom: height * 0.12,
    left: 24,
    right: 24,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#36ADF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: '#000000',
    fontSize: 19,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
  },
  loginText: {
    position: 'absolute',
    bottom: height * 0.075,
    alignSelf: 'center',
    color: '#CBCBCB',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
  },
});
