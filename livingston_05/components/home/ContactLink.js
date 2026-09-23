// ContactLink.js
// Custom component that shows one piece of restaurant contact information
// (phone number, address, or website) and opens it when tapped.
// The HomeScreen passes in the URL to open:
//   - "tel:"    URLs open the phone dialer
//   - map URLs  open the address in the maps app
//   - "https:"  URLs open the website in the browser

import { Pressable, View, Text, StyleSheet, Linking, Alert } from 'react-native';

import Colors from '../../constants/colors';

// label -> small heading such as "Phone"
// value -> the text the user sees, such as "(843) 555-0142"
// url   -> the link that opens when the component is tapped
function ContactLink({ label, value, url }) {
  // Tries to open the link; shows an alert if the device cannot open it
  async function openLinkHandler() {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Unable to open link', 'Please try again later.');
    }
  }

  return (
    <Pressable
      onPress={openLinkHandler}
      style={({ pressed }) => [styles.linkContainer, pressed && styles.pressed]}
    >
      <View>
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </Pressable>
  );
}

export default ContactLink;

const styles = StyleSheet.create({
  linkContainer: {
    backgroundColor: Colors.cardBackground,
    borderLeftWidth: 6,
    borderLeftColor: Colors.primary500,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 6,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.15,
  },
  labelText: {
    fontFamily: 'lato-bold',
    fontSize: 13,
    color: Colors.accent300,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  valueText: {
    fontFamily: 'lato',
    fontSize: 17,
    color: Colors.primary500,
    textDecorationLine: 'underline', // shows the user the text is a link
  },
  pressed: {
    opacity: 0.6,
  },
});
