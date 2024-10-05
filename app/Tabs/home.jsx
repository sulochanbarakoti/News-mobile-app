import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import Trending from "../components/Trending";
import { useEffect, useState } from "react";
import axios from "axios";
import { results } from "../../json";

const Home = () => {
  const [allNews, setAllNews] = useState(results);
  const [activeTab, setActiveTab] = useState("All");
  let profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "../../assets/profile.jpg",
  };
  const tabs = [
    "All",
    "Business",
    "Education",
    "Entertainment",
    "Health",
    "Politics",
    "Science",
    "Technology",
    "Sports",
    "World",
  ];

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            "https://newsdata.io/api/1/news?apikey=pub_55437e5d9bdac19426739db9c6786c467f2ae&language=en"
          );
          console.log(res.data.results);
          setAllNews(res.data.results);
        } catch (error) {
          console.log(error);
        }
      };
      // fetchData();
    },
    [activeTab],
    [allNews]
  );

  const handleTabClick = (tab) => {
    console.log(tab.toLowerCase());
    if (tab !== "All") {
      const updateNews = results.filter((data) =>
        data.category.includes(tab.toLowerCase())
      );
      setAllNews(updateNews);
    } else {
      setAllNews(results);
    }
    setActiveTab(tab);
  };

  return (
    <View className="mt-8 ">
      <Header props={profileData} />
      {/* Tranding Now components */}
      <View className="p-5">
        <View>
          <Text className="text-base font-bold pb-2">Trending Right Now</Text>
        </View>
        <View className="pb-5">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex-row  gap-4">
              {tabs.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleTabClick(tab)}
                >
                  <View
                    className={
                      activeTab === tab
                        ? "text-white p-2 px-4 bg-primary rounded-md"
                        : "text-gray p-2 px-4  border border-1 border-gray-400  rounded-md"
                    }
                    // className={"p-2 px-4  border border-1 bg-primary rounded-md"}
                    style={activeTab === tab ? (backgroundColor = "red") : null}
                  >
                    <View>
                      <Text
                        className={
                          activeTab === tab ? "text-white" : "text-gray"
                        }
                      >
                        {tab}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        {/* Trending posts */}
        <Trending props={allNews} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
