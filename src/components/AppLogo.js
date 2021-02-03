import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from './AppHeaderIcon';
import { useNavigation } from '@react-navigation/native';


const AppLogo = () => {
  const navigation = useNavigation();
  return (
    <HeaderButtons
      HeaderButtonComponent={AppHeaderIcon}
    >
      <Item
        title='Logo'
        iconName="ios-menu"
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  )
}

export default AppLogo
