import { createStackNavigator } from '@react-navigation/stack';
import EnterSpaceTitle from "./space/EnterSpaceTitle";
import EnterSpaceCode from "./space/EnterSpaceCode";
import SelectCategory from "./space/SelectCategory";
import WhoAreYou from './WhoAreYou';

const Stack = createStackNavigator();

const ProfileGeneration = () => {
  return (
    <Stack.Navigator
      initialRouteName="WhoAreYou"
      screenOptions={{
        headerShown: false  // This line hides the header globally for all screens
      }}
    >
      <Stack.Screen name="WhoAreYou" component={WhoAreYou} />
    </Stack.Navigator>
  );
};

export default ProfileGeneration;