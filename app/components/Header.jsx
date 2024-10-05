import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Header = ({ props, navigation }) => {
  return (
    <View className="mx-5">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center space-x-2">
          <FontAwesome name="user-circle-o" size={35} color="black" />
          <View>
            <Text>Welcome</Text>
            <Text>{props.name}</Text>
          </View>
        </View>
        <View>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Header;
