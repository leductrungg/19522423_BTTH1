import * as React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Icon } from '@rneui/themed';

const Interaction = () => {
  const [likes, setLikes] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const [comments, setComments] = React.useState(0);
  const [shares, setShare] = React.useState(0);

  const handleLikePress = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  const handleCommentPress = () => {};
  const handleSharePress = () => {};
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.numberText}>{likes} Likes</Text>
        <Text style={styles.numberText}>{comments} Comments</Text>
        <Text style={styles.numberText}>{shares} Shares</Text>
      </View>
      <View style={styles.bottom}>
        {/* Like button */}
        <TouchableOpacity style={[styles.buttonContainer,{}]} onPress={handleLikePress}>
          <Icon
            name='thumbs-up'
            type='font-awesome-5'
            size={20}
            color={isLiked&&"blue"}
            solid={isLiked}
          />
          <Text style={[styles.buttonText,isLiked && {color:"blue"}]}>Like</Text>
        </TouchableOpacity>
        {/* Comment button */}
        <TouchableOpacity style={[styles.buttonContainer,{justifyContent:'center'}]} onPress={handleCommentPress}>
          <Icon
            name='comment-outline'
            type='material-community'
            size={20}
          />
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
        {/* Share button */}
        <TouchableOpacity style={[styles.buttonContainer,{justifyContent:"flex-end"}]} onPress={handleSharePress}>
          <Icon
            name='share-outline'
            type='material-community'
            size={20}
          />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingTop:15,
    borderTopWidth:0.5,
  },
  buttonContainer:{
    width:"33%",
    flexDirection:"row"
  },
  icon:{
    fontSize:15
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft:5
  },
  numberText: {
    fontSize: 12,
    color: "grey",
  },
});

export default Interaction;
