import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Header = ({ props, navigation }) => {
  return (
    <View className="mx-5 space-y-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center space-x-2">
          <FontAwesome name="user-circle-o" size={35} color="black" />
          <View>
            <Text className="text-base">Welcome</Text>
            <Text className="text-md font-bold">{props.name}</Text>
          </View>
        </View>
        <View>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
      </View>
      <View className="bg-slate-300 flex-row p-2 rounded-xl space-x-2">
        <Ionicons name="search" size={24} color="white" />
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
};

export default Header;
