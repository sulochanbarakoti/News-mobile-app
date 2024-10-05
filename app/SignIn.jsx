import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SignIn = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
