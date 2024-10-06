import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FormField from "./components/FormField";
import CustomButton from "./components/CustomButton";

const SignIn = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all the fields");
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-full justify-center min-h-[85vh] gap-5">
        <Text className="text-2xl text-black font-semibold">
          Log in to News
        </Text>
        <View>
          <FormField
            title="Email"
            value={form.email}
            placeholder={"Enter your Email"}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-1"
            // keyboardType="email-address"
          />
        </View>

        <View>
          <FormField
            title="Password"
            value={form.password}
            placeholder={"Enter your Password"}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-1"
          />
        </View>
        <View>
          <CustomButton
            title="Sign In"
            handlePress={() => navigation.navigate("MainTabs")}
            containerStyle="h-12 w-40"
          />
        </View>
        <View className="justify-center flex-row items-center gap-2">
          <Text className="text-lg text-black font-pregular">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="text-lg text-primary font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
