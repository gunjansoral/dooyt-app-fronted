import { createStackNavigator } from '@react-navigation/stack';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const Stack = createStackNavigator();

const Register = () => {
  return (
    <Stack.Navigator
      initialRouteName="EnterSpaceCode"
      screenOptions={{
        headerShown: false  // This line hides the header globally for all screens
      }}
    >
      <Stack.Screen name="StepOne" component={StepOne} />
      <Stack.Screen name="StepTwo" component={StepTwo} />
      <Stack.Screen name="StepThree" component={StepThree} />
      {/* Additional screens can be added here */}
    </Stack.Navigator>
  );
};

export default Register;