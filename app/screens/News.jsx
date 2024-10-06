import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const News = ({ route }) => {
  const article = route.params.params;
  console.log(article);
  return (
    <ScrollView className="bg-gray-100 flex-1">
      {/* Article Image */}
      <Image
        source={{ uri: article.image_url }}
        className="w-full h-56"
        resizeMode="cover"
      />

      <View className="px-4 py-6">
        {/* Article Title */}
        <Text className="text-2xl font-bold text-gray-900">
          {article.title}
        </Text>

        {/* Article Metadata */}
        <View className="flex-row justify-between items-center mt-3">
          <Text className="text-gray-500">
            {new Date(article.pubDate).toLocaleDateString()}
          </Text>
          <View className="flex-row items-center space-x-2">
            <Image source={{ uri: article.source_icon }} className="h-6 w-6" />
            <Text className="text-gray-500 text-base">
              {article.source_name}
            </Text>
          </View>
        </View>

        {/* Article Description */}
        {article.description && (
          <Text className="mt-4 text-xl font-semibold text-gray-700">
            {article.description}
          </Text>
        )}

        {/* Article Content */}
        {article.content ? (
          <Text className="mt-6 text-base text-gray-800">
            {article.content}
          </Text>
        ) : (
          <Text className="mt-6 text-base text-gray-800">
            Content not available in free plans.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default News;
