// Title.js
// Reusable custom Title component.
// Displays any text passed to it as a large, bold heading using the
// restaurant's custom Playfair Display font. It is used on BOTH screens
// (HomeScreen and MenuScreen), which is what makes it reusable.

import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

// children -> the text to show inside the title
// style    -> optional extra styles so each screen can tweak the title
function Title({ children, style }) {
  return <Text style={[styles.titleText, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'playfair-bold', // custom font loaded in App.js
    fontSize: 30,
    color: Colors.textLight,
    textAlign: 'center',
    backgroundColor: Colors.accent500,
    borderWidth: 3,
    borderColor: Colors.gold500,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    overflow: 'hidden', // keeps the background inside the rounded corners
  },
});
