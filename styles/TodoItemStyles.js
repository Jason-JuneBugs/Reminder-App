import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    justifyContent: "center",
  },
  todoWrapper: {
    width: "100%",
    flex: 1,
  },
  todoInnerWrapper: {
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    color: "#F7F8F3",
    fontSize: 24,
  },
  timestamp: {
    color: "#002C3E",
  },
});
