import { createStackNavigator } from "@react-navigation/stack";
import EnterSpaceTitle from "./space/EnterSpaceTitle";
import EnterSpaceCode from "./space/EnterSpaceCode";
import SelectCategory from "./space/SelectCategory";
import WhoAreYou from "./WhoAreYou";
import DescribeYourBusiness from "./space/DescribeYourBusiness";
import EnterName from "./expert/EnterName";
import EnterSpaceCodeForExpert from "./expert/EnterSpaceCodeForExpert";
import Loading from "./Loading";

const Stack = createStackNavigator();

const ProfileGeneration = () => {
  return (
    <Stack.Navigator
      initialRouteName="EnterSpaceCode"
      screenOptions={{
        headerShown: false, // This line hides the header globally for all screensr
      }}
    >
      <Stack.Screen name="WhoAreYou" component={WhoAreYou} />
      <Stack.Screen name="EnterSpaceCode" component={EnterSpaceCode} />
      <Stack.Screen name="EnterSpaceTitle" component={EnterSpaceTitle} />
      <Stack.Screen name="SelectCategory" component={SelectCategory} />
      <Stack.Screen name="EnterYourName" component={EnterName} />
      <Stack.Screen
        name="EnterSpaceCodeForExpert"
        component={EnterSpaceCodeForExpert}
      />

      <Stack.Screen
        name="DescribeYourBusiness"
        component={DescribeYourBusiness}
      />
      <Stack.Screen name="Loading" component={Loading} />
    </Stack.Navigator>
  );
};

export default ProfileGeneration;
