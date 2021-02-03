import * as Font from 'expo-font'
import { DB } from './db';

export async function bootstrap() {
  try {

    await Font.loadAsync({
      'coming-soon': require('../assets/fonts/ComingSoon-Regular.ttf'),
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf')
    });

    await DB.init();
    console.log('Database connected ...');

  } catch (error) {
    console.log(error);
  }
}