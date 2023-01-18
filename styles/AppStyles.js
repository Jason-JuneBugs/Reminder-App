import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#78BCC4",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 50,
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 36,
    marginBottom: 20,
  },
  todoItemListView: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
