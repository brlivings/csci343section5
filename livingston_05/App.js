// App.js
// Entry component for the Bella Notte Trattoria restaurant menu app.
// Responsibilities:
//   1. Load the custom fonts from assets/fonts.
//   2. Keep track of which screen is showing (home or menu).
//   3. Render the correct screen and pass it a function to switch screens.

import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/colors';

export default function App() {
  // Tracks the current screen: 'home' or 'menu'
  const [currentScreen, setCurrentScreen] = useState('home');

  // Loads the custom fonts that match the restaurant's Italian theme
  const [fontsLoaded] = useFonts({
    'playfair-bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
    lato: require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  });

  // Switches to the menu page (passed to HomeScreen's button)
  function showMenuHandler() {
    setCurrentScreen('menu');
  }

  // Switches back to the home page (passed to MenuScreen's button)
  function showHomeHandler() {
    setCurrentScreen('home');
  }

  // Don't draw anything until the fonts are ready, so text never
  // flashes in the wrong font
  if (!fontsLoaded) {
    return null;
  }

  // Decide which screen component to show
  let screenContent = <HomeScreen onViewMenu={showMenuHandler} />;
  if (currentScreen === 'menu') {
    screenContent = <MenuScreen onGoHome={showHomeHandler} />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.appContainer}>{screenContent}</SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
