import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, Alert } from "react-native";

const Settings = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("User logged out") }, // Add your logout logic
    ]);
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Setting options */}
      <TouchableOpacity
        className="flex-row justify-between items-center py-4 px-4 border-b border-gray-300 bg-white"
        onPress={() => navigation.navigate("About")}
      >
        <Text className="text-base">About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row justify-between items-center py-4 px-4 border-b border-gray-300 bg-white"
        onPress={() => navigation.navigate("SendFeedback")}
      >
        <Text className="text-base">Send Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row justify-between items-center py-4 px-4 border-b border-gray-300 bg-white"
        onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <Text className="text-base">Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row justify-between items-center py-4 px-4 border-b border-gray-300 bg-white"
        onPress={() => navigation.navigate("TermsOfUse")}
      >
        <Text className="text-base">Terms of Use</Text>
      </TouchableOpacity>

      {/* Dark Mode Switch */}
      <View className="flex-row justify-between items-center py-4 px-4 border-b border-gray-300 bg-white">
        <Text className="text-base">Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      {/* Logout button */}
      <TouchableOpacity
        className="mt-8 p-3 items-center bg-primary rounded-lg"
        onPress={handleLogout}
      >
        <Text className="text-base text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
