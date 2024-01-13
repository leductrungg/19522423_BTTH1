import { View, Text, StyleSheet, Image } from "react-native";
import UserInfo from "./UserInfo";
import Interaction from "./Interaction";

const Post = ({ avatarSource, username, text, imageSource }) => {
  return (
    <View style={styles.container}>
      <UserInfo avatarSource={avatarSource} username={username} />
      <Text style={styles.mainText}>{text}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.postImage} source={imageSource}></Image>
      </View>
      <Interaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding:15,
  },
  text: {
    fontSize: 50,
  },
  mainText: {
    fontSize:16,
    fontWeight:"bold"
  },
  imageContainer:{
    width:'100%',
    height:200,
    marginVertical:10,
    borderRadius:10,
    overflow:"hidden"
  },
  postImage: {
    width:"100%",
    height:"100%",
    resizeMode: "cover",
  },
  
  
});

export default Post;
