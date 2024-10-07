import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const News = ({ route, navigation }) => {
  const article = route.params.params;
  const [save, setSave] = React.useState(false);

  React.useEffect(() => {
    const checkSaved = async () => {
      try {
        const savedArticles = await AsyncStorage.getItem("savedArticles");
        const currentSavedArticle = savedArticles
          ? JSON.parse(savedArticles)
          : [];

        // Check if the current article is already saved
        const isArticleSaved = currentSavedArticle.includes(article.article_id);
        setSave(isArticleSaved); // Set the state accordingly
      } catch (error) {
        console.error("Failed to check saved article", error);
      }
    };

    checkSaved();
  }, []);

  const saveArticle = async (id) => {
    try {
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      const currentSavedArticles = savedArticles
        ? JSON.parse(savedArticles)
        : [];

      if (!save) {
        // Save the article (add it to the list)
        const updatedSavedArticles = [...currentSavedArticles, id];
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(updatedSavedArticles)
        );
      } else {
        // Remove the article (filter it out)
        const updatedSavedArticles = currentSavedArticles.filter(
          (savedId) => savedId !== id
        );
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(updatedSavedArticles)
        );
      }

      setSave(!save); // Toggle save state after updating storage
    } catch (error) {
      console.error("Failed to save", error);
    }
  };

  return (
    <ScrollView className="bg-gray-100 flex-1 pt-10">
      {/* Article Image */}
      <Image
        source={{ uri: article.image_url }}
        className="w-full h-72"
        resizeMode="cover"
      />
      <View className="absolute top-0 w-full">
        <View className="flex-row justify-between items-center px-2 py-2">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle-sharp"
              size={40}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => saveArticle(article.article_id)}>
            {save ? (
              <AntDesign name="heart" size={28} color="red" />
            ) : (
              <AntDesign name="hearto" size={28} color="red" />
            )}
          </TouchableOpacity>
        </View>
      </View>
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
