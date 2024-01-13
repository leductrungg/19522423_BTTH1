import { View, StyleSheet, ScrollView } from "react-native";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <Post
              avatarSource={post.avatarSource}
              username={post.username}
              text={post.text}
              imageSource={post.imageSource}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf1f7",
  },
  contentContainer: {
    padding: 16,
  },
  postContainer: {
    marginBottom: 20,
  },
});
export default Feed;
