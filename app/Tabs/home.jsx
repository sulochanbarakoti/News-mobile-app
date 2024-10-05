import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const Home = () => {
  let profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "../../assets/profile.jpg",
  };
  return (
    <View className="mt-8 ">
      <Header props={profileData} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
