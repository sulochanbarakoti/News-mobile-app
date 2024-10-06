import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useRef } from "react";

const { width: screenWidth } = Dimensions.get("window");

const Slider = ({ navigation, props }) => {
  const flatListRef = useRef(null);
  // console.log(props);

  const renderItem = ({ item }) => {
    return (
      <View
        className="mx-2 rounded-xl overflow-hidden"
        style={{ width: screenWidth * 0.8 }}
      >
        <Image
          source={{ uri: item.image_url }}
          className="w-full h-40"
          resizeMode="cover"
        />
        {/* Title on top of the image */}
        <View
          className="absolute bottom-0 left-0 right-0 p-2 h-full"
          style={{ backgroundColor: "black", opacity: 0.4 }}
        />
        <View className="absolute bottom-0 left-0 right-0 p-2 space-y-2">
          <View className="flex-row space-x-2">
            <Image
              source={{ uri: item.source_icon }}
              className="h-6 w-6 p-2 rounded-full"
            />
            <Text className="text-white font-semibold">{item.source_name}</Text>
          </View>
          <Text
            className="text-white text-sm font-bold text-start"
            numberOfLines={2}
          >
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View className="mt-4">
      <FlatList
        ref={flatListRef}
        data={props}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true} // Enable horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hide scroll indicator
        snapToInterval={screenWidth * 0.8 + 20} // Snap to the width of each item
        decelerationRate="fast" // Smooth scrolling
        pagingEnabled // Makes sure the flatlist scrolls one item at a time
        contentContainerStyle={{ paddingHorizontal: 10 }} // Add padding to the list
      />
    </View>
  );
};

export default Slider;
