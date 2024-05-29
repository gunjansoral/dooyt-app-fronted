import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Onboarding from './screens/Onboarding';
import { ThemeProvider } from './context/ThemeContext';
import Login from './screens/login';
import { ProfileProvider } from './context/ProfileContext';

const Stack = createStackNavigator();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'PlusJakartaSans-Regular': require('./assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf'),
          'PlusJakartaSans-Medium': require('./assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Medium.ttf'),
          'PlusJakartaSans-SemiBold': require('./assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf'),
        });
      } catch (e) {
        console.warn("Failed to load fonts: ", e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider>
      <ProfileProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Onbaording"
            screenOptions={{
              headerShown: false  // This line hides the header globally for all screens
            }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;
