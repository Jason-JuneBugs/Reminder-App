import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AddTodo = ({ add }) => {
  const [name, setName] = useState("");

  const CreateTodo = () => {
    add(name);
    setName("");
  };

  return (
    <View style={styles.addContainer}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Enter task name..."
          style={styles.textInput}
          value={name}
          onChangeText={(e) => setName(e)}
        ></TextInput>
      </View>
      <TouchableOpacity
        testID="addButton"
        style={styles.addButton}
        onPress={CreateTodo}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    marginHorizontal: 20,
  },
  innerContainer: { flexGrow: 1 },
  textInput: {
    height: 48,
    fontSize: 20,
    backgroundColor: "#F7F8F3",
    padding: 10,
    marginEnd: 10,
    borderRadius: 10,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#F7F8F3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  addText: {
    fontSize: 30,
    color: "#78BCC4",
  },
});

export default AddTodo;
