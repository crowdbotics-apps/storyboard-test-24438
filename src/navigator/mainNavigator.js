import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings203418Navigator from '../features/Settings203418/navigator';
import Settings203403Navigator from '../features/Settings203403/navigator';
import NotificationList203402Navigator from '../features/NotificationList203402/navigator';
import Maps203401Navigator from '../features/Maps203401/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings203418: { screen: Settings203418Navigator },
Settings203403: { screen: Settings203403Navigator },
NotificationList203402: { screen: NotificationList203402Navigator },
Maps203401: { screen: Maps203401Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
