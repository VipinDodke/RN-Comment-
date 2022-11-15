import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { CommentBoxProps } from "../../types";
import { getStyles } from "./styles";

const CommentBox: React.FC<CommentBoxProps> = ({
  placeHolder,
  onAddComment
}) => {
  const styles = getStyles();
  const [comment, setComment] = useState<string>("");

  const handleOnEnterPress = () => {
    if (!comment) return;
    onAddComment(comment);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={comment}
        onChangeText={(text) => setComment(text)}
        onSubmitEditing={handleOnEnterPress}
        placeholder={placeHolder}
      />
      <TouchableOpacity onPress={handleOnEnterPress} style={styles.button}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentBox;
