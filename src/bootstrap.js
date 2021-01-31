import * as Font from 'expo-font'

export async function bootstrap() {

  await Font.loadAsync({
    OpenRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
    OpenBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    SoonRegular: require('../assets/fonts/ComingSoon-Regular.ttf'),
  });

}