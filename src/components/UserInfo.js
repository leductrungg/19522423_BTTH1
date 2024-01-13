import { View, StyleSheet, Text, Image } from "react-native";

const UserInfo = ({ avatarSource, username }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatarSource}></Image>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  avatar: {
    borderRadius:99,
    width:50,
    aspectRatio:1
  },
  username: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
  },
});
export default UserInfo;
