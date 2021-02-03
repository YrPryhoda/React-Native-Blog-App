import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './src/redux';
import {bootstrap} from './src/bootstrap'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading
      startAsync={bootstrap}
      onFinish={() => setFontLoaded(true)}
      onError={err => console.log(err)}
    />
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>)
}
