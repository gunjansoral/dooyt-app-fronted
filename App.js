import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Onboarding from './screens/Onboarding';
import EnterSpaceTitle from './screens/login/EnterSpaceTitle';
import EnterSpaceCode from './screens/login/EnterSpaceCode';
import { ThemeProvider } from './context/ThemeContext';

const Stack = createStackNavigator();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          // 'PlusJakartaSans-Regular': require('./assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf')
          // More fonts can be loaded here
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
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="EnterSpaceCode"
          screenOptions={{
            headerShown: false  // This line hides the header globally for all screens
          }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="EnterSpaceTitle" component={EnterSpaceTitle} />
          <Stack.Screen name="EnterSpaceCode" component={EnterSpaceCode} />
          {/* Additional screens can be added here */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
