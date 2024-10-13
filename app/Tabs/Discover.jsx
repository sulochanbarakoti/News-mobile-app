import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Sample data for categories and countries
const categories = [
  "All",
  "Politics",
  "Science",
  "Entertainment",
  "Sports",
  "Technology",
  "Business",
];
const countries = [
  "All",
  "India",
  "Australia",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "France",
  "Germany",
  "Japan",
  "Israel",
];

const Discover = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedCountries, setSelectedCountries] = React.useState([]);

  // Handle category selection
  const handleCategoryPress = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prevSelected) => {
        if (prevSelected.includes(category)) {
          return prevSelected.filter((item) => item !== category);
        } else {
          return [...prevSelected.filter((item) => item !== "All"), category];
        }
      });
    }
  };

  // Handle country selection
  const handleCountryPress = (country) => {
    if (country === "All") {
      setSelectedCountries(["All"]);
    } else {
      setSelectedCountries((prevSelected) => {
        if (prevSelected.includes(country)) {
          return prevSelected.filter((item) => item !== country);
        } else {
          return [...prevSelected.filter((item) => item !== "All"), country];
        }
      });
    }
  };

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
    <ScrollView style={{ padding: 20, backgroundColor: "#fff", flex: 1 }}>
      <View className=" mt-5 mb-5 space-y-5">
        <View className="bg-slate-300 flex-row p-2 rounded-xl space-x-2">
          <Ionicons name="search" size={24} color="white" />
          <TextInput placeholder="Search" />
        </View>
      </View>
      {/* Categories */}
      <Text className="text-xl font-bold mb-4">Categories</Text>
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
      <Text className="text-xl font-bold mt-10 mb-">Country</Text>
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

      <TouchableOpacity
        className="bg-primary p-3 rounded-xl mt-4"
        onPress={() => {
          console.log("Selected Categories:", selectedCategories);
          console.log("Selected Countries:", selectedCountries);
        }}
      >
        <Text className="text-white font-bold text-center text-lg">
          Discover News
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Discover;
