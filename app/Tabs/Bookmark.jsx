import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { results } from "../../json";

const Bookmark = () => {
  const [bookmark, setBookmark] = React.useState({});
  React.useEffect(() => {
    const checkSaved = async () => {
      try {
        const savedArticles = await AsyncStorage.getItem("savedArticles");
        const currentSavedArticle = savedArticles
          ? JSON.parse(savedArticles)
          : [];

        console.log(currentSavedArticle.length); // Set the state accordingly
        const matchArticles = results.filter((item) =>
          currentSavedArticle.includes(item.article_id)
        );
        setBookmark(matchArticles);
        console.log(bookmark);
      } catch (error) {
        console.error("Failed to check saved article", error);
      }
    };
    checkSaved();
  }, [results]);
  return (
    <View className="p-5">
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View className="py-3 space-y-3">
          {bookmark.map((data, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("News", { params: data })}
              className="flex-row space-x-2 bg-gray-200 p-2 rounded-md"
            >
              <View className="h-24 w-24">
                <Image
                  source={{ uri: data.image_url }}
                  className="w-24 h-24 rounded-xl"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1 flex-col justify-evenly">
                <View className="flex-1">
                  <Text className="text-sm text-gray-500 font-bold">
                    {data.category}
                  </Text>
                </View>
                <View className="flex-1 pb-5">
                  <Text
                    className="text-sm font-semibold"
                    numberOfLines={2}
                    // ellipsizeMode="tail"
                  >
                    {data.title}
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <View>
                    <Image
                      source={{ uri: data.source_icon }}
                      className="h-5 w-5 rounded-sm"
                    />
                  </View>
                  <View>
                    <Text className="text-gray-500">{data.source_name}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView> */}
    </View>
  );
};

export default Bookmark;
