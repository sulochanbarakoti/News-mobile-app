import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const Trending = ({ props }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="py-3 space-y-3">
        {props.map((data, index) => (
          <TouchableOpacity key={index} className="flex-row space-x-4">
            <View className="h-28 w-28">
              <Image
                source={{ uri: data.image_url }}
                className="w-28 h-28 rounded-xl"
                resizeMode="cover"
              />
            </View>
            <View>
              <View>
                <Text>{data.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Trending;
