import { View, Text, StyleSheet } from "react-native";
import Feed from "../components/Feed";

const posts = [
  {
    id: 1,
    avatarSource: require("../assets/a2.jpg"),
    username: "Le Duc Trung - 19522423",
    text: "It is a long established fact that a reader will be distracted",
    imageSource: require("../assets/pc2.jpg"),
  },
  {
    id: 2,
    avatarSource: require("../assets/a3.jpg"),
    username: "John Doe",
    text: "Neque porro quisquam est.",
    imageSource: require("../assets/pc3.jpeg"),
  },
  {
    id: 3,
    avatarSource: require("../assets/a4.jpg"),
    username: "Joe Previtee",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    imageSource: require("../assets/pc4.jpeg"),
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Feed</Text>
      <Feed posts={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: "white",
    backgroundColor: "#2b61b3",
    textAlign: "center",
    fontSize: 25,
    padding: 20,
    marginTop: 30,
    fontWeight: "bold",
  },
});
export default HomeScreen;
