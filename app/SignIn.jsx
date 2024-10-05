import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SignIn = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <TouchableOpacity onPress={() => navigation.navigate("MainTabs")}>
        <Text className="text-black text-lg font-semibold">SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
