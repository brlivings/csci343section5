// MenuItem.js
// Reusable custom MenuItem component.
// Displays a single dish from the menu: its picture, name, and price
// (plus a short description). The MenuScreen renders one MenuItem for
// every object in data/menuData.js using a FlatList.

import { View, Text, Image, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

// name        -> dish name, e.g. "Margherita Pizza"
// price       -> number, e.g. 14.99 (formatted to $14.99 below)
// image       -> image source created with require()
// description -> short sentence describing the dish
function MenuItem({ name, price, image, description }) {
  // Always show two decimal places so prices look like real prices
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <View style={styles.nameRow}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemPrice}>{formattedPrice}</Text>
        </View>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.gold500,
    marginVertical: 8,
    overflow: 'hidden', // clips the image to the rounded card corners
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  itemImage: {
    width: '100%',
    height: 170,
  },
  itemDetails: {
    padding: 12,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    flex: 1, // lets long names wrap instead of pushing the price off screen
    fontFamily: 'playfair-bold',
    fontSize: 20,
    color: Colors.accent500,
  },
  itemPrice: {
    fontFamily: 'lato-bold',
    fontSize: 18,
    color: Colors.textLight,
    backgroundColor: Colors.primary500,
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginLeft: 8,
    overflow: 'hidden',
  },
  itemDescription: {
    fontFamily: 'lato',
    fontSize: 14,
    color: Colors.textMuted,
    marginTop: 6,
  },
});
