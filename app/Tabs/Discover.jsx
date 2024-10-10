import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Discover = ({ navigation }) => {
  // Chip component
  const Chip = ({ label, isSelected, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          margin: 5,
          borderRadius: 20,
          backgroundColor: isSelected ? "#FF6347" : "#F0F0F0", // Change background based on selected
        }}
        onPress={onPress}
      >
        <Text style={{ color: isSelected ? "white" : "black" }}>{label}</Text>
      </TouchableOpacity>
    );
  };
  return (
    // <View className="mx-5 mt-16 space-y-5">
    //   <View className="bg-slate-300 flex-row p-2 rounded-xl space-x-2">
    //     <Ionicons name="search" size={24} color="white" />
    //     <TextInput placeholder="Search" />
    //   </View>
    //   <View>
    //     <View>
    //       <Text className="font-bold">Categories</Text>
    //     </View>
    //     <View></View>
    //   </View>
    // </View>
    <ScrollView style={{ padding: 20, backgroundColor: "#fff", flex: 1 }}>
      {/* Search Bar can be added here if needed */}
      {/* Categories */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Categories
      </Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Chip
            label={item}
            isSelected={selectedCategories.includes(item)}
            onPress={() => handleCategoryPress(item)}
          />
        )}
        keyExtractor={(item) => item}
        horizontal={false}
        numColumns={3}
        scrollEnabled={false}
      />

      {/* Country */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Country
      </Text>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <Chip
            label={item}
            isSelected={selectedCountries.includes(item)}
            onPress={() => handleCountryPress(item)}
          />
        )}
        keyExtractor={(item) => item}
        horizontal={false}
        numColumns={3}
        scrollEnabled={false}
      />

      {/* Add a button to trigger fetching news */}
      <TouchableOpacity
        style={{
          backgroundColor: "#FF6347",
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
          alignItems: "center",
        }}
        onPress={() => {
          // Pass selected categories and countries to fetch news from API
          console.log("Selected Categories:", selectedCategories);
          console.log("Selected Countries:", selectedCountries);
          // Here you can trigger the API call with the selected data
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Fetch News</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Discover;
