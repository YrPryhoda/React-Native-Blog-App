import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './src/redux';


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFonts = async () => {
    await Font.loadAsync({
      'coming-soon': require('./assets/fonts/ComingSoon-Regular.ttf'),
      'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  };

  if (!fontLoaded) {
    return <AppLoading
      startAsync={loadFonts}
      onFinish={() => setFontLoaded(true)}
      onError={err => console.log(err)}
    />
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>)
}
