import React from "react";
import { Text, View } from "react-native";
import { CommentsProps, OnAddNewComment } from "../../types";
import CommentBox from "../CommentBox";
import { styles } from "./styles";

const SubComment: React.FC<CommentsProps> = ({ comment, onAddSubComment }) => {
  const handleOnPressEnter: OnAddNewComment = (commentText) => {
    onAddSubComment(comment.id, comment.rootId, commentText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text>{comment.commentLabel}</Text>
      </View>
      <CommentBox onAddComment={handleOnPressEnter} />
      <View style={styles.subCommentContainer}>
        {comment.subComments.map((subComment, index) => (
          <SubComment
            key={index}
            comment={subComment}
            onAddSubComment={onAddSubComment}
          />
        ))}
      </View>
    </View>
  );
};
export default SubComment;
