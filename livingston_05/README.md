# Bella Notte Trattoria – Restaurant Menu App (Assignment 05)

**Student:** Livingston
**Course:** CSCI 343
**GitHub repository:** https://github.com/brlivings/csci343section5

A two-screen **React Native (Expo)** restaurant menu app.

- **Home Screen** (`screens/HomeScreen.js`): a picture of the restaurant, its name, and its phone number, address, and website. Tapping the phone number opens the dialer, the address opens Google Maps, and the website opens the browser. The **View Our Menu** button goes to the menu.
- **Menu Screen** (`screens/MenuScreen.js`): six menu items in a `FlatList`. Each one is a custom `MenuItem` component showing the dish's picture, name, and price. The **Back to Home** button at the bottom goes back to the home screen.

## Project structure

```
livingston_05/
├── App.js                        loads fonts and switches between screens
├── assets/
│   ├── fonts/                    custom fonts (Playfair Display, Lato)
│   └── images/                   restaurant and menu item pictures
├── components/
│   ├── ui/Title.js               reusable custom Title component
│   ├── ui/PrimaryButton.js       reusable navigation button
│   ├── home/ContactLink.js       phone/address/website link
│   └── menu/MenuItem.js          reusable custom MenuItem component
├── constants/colors.js           color theme constants
├── data/menuData.js              menu item data
├── docs/app_mockup.png           app mock-up
└── screens/
    ├── HomeScreen.js
    └── MenuScreen.js
```

## Running the app

```bash
npm install
npx expo start
```

Then scan the QR code with the Expo Go app, or press `a` for an Android emulator or `i` for an iOS simulator.
