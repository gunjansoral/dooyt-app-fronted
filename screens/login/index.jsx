import { createStackNavigator } from '@react-navigation/stack';
import EnterMobileNumber from './EnterMobileNumber';
import EnterVerification from './EnterVerification';

const Stack = createStackNavigator();

const Login = () => {
  return (
    <Stack.Navigator
      initialRouteName="EnterMobileNumber"
      screenOptions={{
        headerShown: false  // This line hides the header globally for all screens
      }}
    >
      <Stack.Screen name="EnterMobileNumber" component={EnterMobileNumber} />
      <Stack.Screen name="EnterVerfication" component={EnterVerification} />
      {/* Additional screens can be added here */}
    </Stack.Navigator>
  );
};

export default Login;