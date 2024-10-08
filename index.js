/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; //ui
import {name as appName} from './app.json'; //configurations

// first file to be opened is App.tsx
AppRegistry.registerComponent(appName, () => App);
