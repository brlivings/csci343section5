// HomeScreen.js
// The first (main) screen of the app.
// Shows a picture of the restaurant, the restaurant name, and its
// contact details (phone, address, website). Each detail is a link.
// The button at the bottom takes the user to the MenuScreen.

import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import ContactLink from '../components/home/ContactLink';
import Colors from '../constants/colors';

// Restaurant information kept in one object so it is easy to update
const restaurantInfo = {
  name: 'Bella Notte Trattoria',
  tagline: 'Authentic Italian Cooking Since 1998',
  phoneDisplay: '(843) 555-0142',
  phoneUrl: 'tel:8435550142',
  address: '412 Vine Street, Charleston, SC 29401',
  website: 'www.bellanottetrattoria.com',
  websiteUrl: 'https://www.bellanottetrattoria.com',
};

// Builds a Google Maps search link from the address so the address
// opens in the maps app / browser when tapped
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(restaurantInfo.address);

// onViewMenu -> function from App.js that switches to the MenuScreen
function HomeScreen({ onViewMenu }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      {/* Restaurant name shown with the reusable Title component */}
      <Title>{restaurantInfo.name}</Title>
      <Text style={styles.taglineText}>{restaurantInfo.tagline}</Text>

      {/* Picture of the restaurant */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/restaurant.png')}
          style={styles.restaurantImage}
        />
      </View>

      {/* Contact details - each one opens its matching app when tapped */}
      <View style={styles.contactContainer}>
        <ContactLink
          label="Phone"
          value={restaurantInfo.phoneDisplay}
          url={restaurantInfo.phoneUrl}
        />
        <ContactLink
          label="Address"
          value={restaurantInfo.address}
          url={mapsUrl}
        />
        <ContactLink
          label="Website"
          value={restaurantInfo.website}
          url={restaurantInfo.websiteUrl}
        />
      </View>

      {/* Navigation button to the menu page */}
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onViewMenu}>View Our Menu</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
  },
  taglineText: {
    fontFamily: 'lato',
    fontStyle: 'italic',
    fontSize: 16,
    color: Colors.accent500,
    textAlign: 'center',
    marginTop: 10,
  },
  imageContainer: {
    marginVertical: 18,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: Colors.gold500,
    overflow: 'hidden',
  },
  restaurantImage: {
    width: '100%',
    height: 210,
  },
  contactContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});
