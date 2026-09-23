// MenuScreen.js
// The second screen of the app.
// Shows the full restaurant menu in a FlatList, where every dish is
// drawn by the custom MenuItem component. A button fixed to the bottom
// of the screen takes the user back to the HomeScreen.

import { View, FlatList, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import MenuItem from '../components/menu/MenuItem';
import menuItems from '../data/menuData';
import Colors from '../constants/colors';

// onGoHome -> function from App.js that switches back to the HomeScreen
function MenuScreen({ onGoHome }) {
  // Tells the FlatList how to draw one menu item from the data array
  function renderMenuItem(itemData) {
    const menuItem = itemData.item;
    return (
      <MenuItem
        name={menuItem.name}
        price={menuItem.price}
        image={menuItem.image}
        description={menuItem.description}
      />
    );
  }

  return (
    <View style={styles.screenContainer}>
      {/* Screen heading using the same reusable Title component */}
      <Title style={styles.menuTitle}>Our Menu</Title>

      {/* Scrollable list of menu items */}
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.listContent}
        style={styles.menuList}
      />

      {/* Navigation button at the bottom of the menu screen */}
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onGoHome}>Back to Home</PrimaryButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuTitle: {
    marginBottom: 8,
  },
  menuList: {
    flex: 1, // list takes all space between the title and the button
  },
  listContent: {
    paddingBottom: 10,
  },
  buttonContainer: {
    paddingVertical: 12,
    borderTopWidth: 2,
    borderTopColor: Colors.gold500,
  },
});
