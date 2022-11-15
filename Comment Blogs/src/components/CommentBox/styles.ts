import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: "#E8E7E7",
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      borderBottomLeftRadius: 5
    },
    inputField: {
      flex: 1,
      paddingHorizontal: 10,
      height: "100%",
      textAlign: "left",
      color: "black",
      outlineWidth: 0
    },
    button: {
      width: 100,
      height: 30,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      textAlign: "center",
      color: "cornsilk",
      fontSize: 12,
      lineHeight: 13
    }
  });
};
