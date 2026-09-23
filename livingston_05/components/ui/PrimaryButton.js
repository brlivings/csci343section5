// PrimaryButton.js
// Reusable custom button component.
// Used on the HomeScreen ("View Our Menu") and on the MenuScreen
// ("Back to Home") to navigate between the two screens.

import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

// children -> the label shown on the button
// onPress  -> the function that runs when the user taps the button
function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary700 }}
        // On iOS there is no ripple, so we lower the opacity while pressed
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden', // keeps the Android ripple inside the rounded corners
    elevation: 4, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontFamily: 'lato-bold',
    fontSize: 18,
    color: Colors.textLight,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
