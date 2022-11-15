import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { uuid } from "uuidv4";
import CommentBox from "./components/CommentBox";
import { getStyles } from "./Styles";
import SubComment from "./components/SubComment";
import {
  Comment,
  AddRootComment,
  AddSubComment,
  HandleOnAddSubComment
} from "./types";

const App: React.FC = () => {
  const styles = getStyles();
  const [comments, setComments] = useState<Comment[]>([]);

  const addRootComment: AddRootComment = (comment) => {
    const newComment: Comment = {
      id: uuid(),
      rootId: "",
      commentLabel: comment,
      subComments: []
    };
    setComments([...comments, newComment]);
  };

  const addSubComment: AddSubComment = (commet, targetId, newComment) => {
    if (targetId === commet?.id) {
      return {
        ...commet,
        subComments: [...commet.subComments, newComment]
      };
    }
    return {
      ...commet,
      subComments: commet.subComments.map((subComment: Comment) =>
        addSubComment(subComment, targetId, newComment)
      )
    };
  };

  const handleOnAddSubComment: HandleOnAddSubComment = (id, rootId, text) => {
    const newComment: Comment = {
      id: uuid(),
      rootId: rootId || id,
      commentLabel: text,
      subComments: []
    };

    const updatedComments: Comment[] = comments.map((node) => {
      if (node.id === rootId || node.id === id) {
        return addSubComment(node, id, newComment);
      }
      return node;
    });
    setComments(updatedComments);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>COMMENTS</Text>
        <View style={styles.headerCommentBoxContainer}>
          <CommentBox
            placeHolder={"Enter new comment here"}
            onAddComment={addRootComment}
          />
        </View>
      </View>
      <View style={styles.commentContainer}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {comments.map((comment) => (
            <SubComment
              key={comment.id}
              comment={comment}
              onAddSubComment={handleOnAddSubComment}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
