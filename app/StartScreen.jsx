import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const StartScreen = ({ navigation }) => {
  return (
    <View className="flex-1 relative">
      <ImageBackground
        source={require("./../assets/background.jpg")}
        className="flex-1"
      >
        {/* Overlay with black background at 50% opacity */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.5,
          }}
        />

        {/* Content with full opacity */}
        <View className="flex-1 justify-end items-center pb-10 space-y-2 z-10">
          <Text className="font-bold text-white text-3xl">
            Welcome to Online Media
          </Text>
          <View className="p-3 px-5 bg-red-700 rounded-xl">
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text className="text-white text-lg font-semibold">
                Continue with Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
