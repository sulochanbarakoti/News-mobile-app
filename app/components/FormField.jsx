import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-medium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-black font-semibold text-base w-full"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <View className="w-6 h-6">
              {!showPassword ? (
                <FontAwesome name="eye" size={24} color="black" />
              ) : (
                <FontAwesome name="eye-slash" size={24} color="black" />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
