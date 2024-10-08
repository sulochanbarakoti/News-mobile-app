import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import SignIn from "./app/screens/SignIn";
import Home from "./app/Tabs/home";
import Bookmark from "./app/Tabs/Bookmark";
import Discover from "./app/Tabs/Discover";
import Settings from "./app/Tabs/Settings";
import StartScreen from "./app/screens/StartScreen";
import SignUp from "./app/screens/SignUp";
import News from "./app/screens/News";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
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
        tabBarActiveTintColor: "#f8312f",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ headerShown: true }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
