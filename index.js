import {AppRegistry} from 'react-native';

import MainScreen from './code/screens/mainScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
