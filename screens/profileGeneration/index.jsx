import { createStackNavigator } from "@react-navigation/stack";
import EnterSpaceTitle from "./space/EnterSpaceTitle";
import EnterSpaceCode from "./space/EnterSpaceCode";
import SelectCategory from "./space/SelectCategory";
import WhoAreYou from "./WhoAreYou";
import DescribeYourBusiness from "./space/DescribeYourBusiness";

const Stack = createStackNavigator();

const ProfileGeneration = () => {
  return (
    <Stack.Navigator
      initialRouteName="WhoAreYou"
      screenOptions={{
        headerShown: false, // This line hides the header globally for all screens
      }}
    >
      <Stack.Screen name="WhoAreYou" component={WhoAreYou} />
      <Stack.Screen name="EnterSpaceCode" component={EnterSpaceCode} />
      <Stack.Screen name="EnterSpaceTitle" component={EnterSpaceTitle} />
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      <Stack.Screen
        name="DescribeYourBusiness"
        component={DescribeYourBusiness}
      />
    </Stack.Navigator>
  );
};

export default ProfileGeneration;
