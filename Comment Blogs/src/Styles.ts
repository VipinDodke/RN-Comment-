import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    headerContainer: {
      width: "70%",
      justifyContent: "center",
      alignItems: "center"
    },
    header: {
      fontSize: 70,
      lineHeight: 76,
      fontWeight: "200",
      textAlign: "center"
    },
    headerCommentBoxContainer: {
      width: "70%"
    },
    scrollContainer: {
      width: "99%",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      paddingBottom: "1%"
    },
    commentContainer: {
      flex: 1,
      width: "90%",
      paddingTop: "2%"
    }
  });
};
