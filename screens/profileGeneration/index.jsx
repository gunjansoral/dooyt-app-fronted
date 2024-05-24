import { createStackNavigator } from '@react-navigation/stack';
import EnterSpaceTitle from "./EnterSpaceTitle";
import EnterSpaceCode from "./EnterSpaceCode";
import SelectCategory from "./SelectCategory";

const Stack = createStackNavigator();

const Register = () => {
  return (
    <Stack.Navigator
      initialRouteName="EnterSpaceTitle"
      screenOptions={{
        headerShown: false  // This line hides the header globally for all screens
      }}
    >
      <Stack.Screen name="EnterSpaceTitle" component={EnterSpaceTitle} />
      <Stack.Screen name="EnterSpaceCode" component={EnterSpaceCode} />
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      {/* Additional screens can be added here */}
    </Stack.Navigator>
  );
};

export default Register;