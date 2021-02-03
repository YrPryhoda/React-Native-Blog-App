import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from './AppHeaderIcon';

const AppStarIcon = ({ booked, onPress }) => {
  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  return (
    <HeaderButtons
      HeaderButtonComponent={AppHeaderIcon}
    >
      <Item
        title='App Star'
        iconName={iconName}
        onPress={onPress}
      />
    </HeaderButtons>
  )
}

export default AppStarIcon
