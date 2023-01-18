import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const DeleteButton = ({ itemKey, onPress }) => (
  <View style={styles.container}>
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "rgba(255, 255, 255, 0.5) "
            : "transparent",
        },
        styles.deleteButton,
      ]}
      onPress={onPress}
      testID={`delete-${itemKey}`}
    >
      <MaterialIcons name="delete" style={styles.deleteIcon} />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginStart: 10,
  },
  deleteIcon: {
    fontSize: 50,
    color: "#002C3E",
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});

export default DeleteButton;
