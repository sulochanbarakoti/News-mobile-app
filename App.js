import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import SignIn from "./app/SignIn";
import Home from "./app/Tabs/home";
import Bookmark from "./app/Tabs/Bookmark";
import Discover from "./app/Tabs/Discover";
import Settings from "./app/Tabs/Settings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home">
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                  }
                  if (route.name === "Bookmark") {
                    iconName = focused ? "bookmarks" : "bookmarks-outline";
                  }
                  if (route.name === "Discover") {
                    iconName = focused ? "compass" : "compass-outline";
                  }
                  if (route.name === "Settings") {
                    iconName = focused ? "settings" : "settings-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Discover" component={Discover} />
              <Tab.Screen name="Bookmark" component={Bookmark} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
