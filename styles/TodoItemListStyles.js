import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollList: {
    marginTop: 10,
    width: 1000,
    maxWidth: "100%",
  },
  item: {
    borderWidth: 3,
    borderColor: "#002C3E",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  itemDefault: {
    backgroundColor: "#78BCC4",
    borderColor: "#002C3E",
  },
  itemDueSoon: {
    backgroundColor: "#1a5178",
    borderColor: "#c92629",
  },
  deleteButton: {
    width: 50,
  },
});
