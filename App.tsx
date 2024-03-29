import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomTab from "./src/components/BottomTab";

import Homescreen from "./src/pages/Homescreen";
import Onboarding from "./src/pages/Onboarding";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Homescreen" component={Homescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
