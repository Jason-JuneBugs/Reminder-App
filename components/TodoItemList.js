import { ScrollView, View, StyleSheet } from "react-native";

import { styles } from "../styles/TodoItemListStyles";
import TodoItem from "./TodoItem";
import DeleteButton from "./DeleteButton";
import { Save } from "../api/localStorage";

const TodoItemList = ({ listData, setListData }) => {
  const deleteRow = async (rowKey) => {
    const newData = [...listData.filter((item) => item.key !== rowKey)];
    setListData(newData);
    await Save(newData);
  };

  const CheckHoursLeft = (timestamp) => {
    const msInHour = 1000 * 60 * 60;
    return Math.round(Math.abs(new Date(timestamp) - new Date()) / msInHour);
  };

  return (
    <ScrollView testID="TodoItemList" style={styles.scrollList}>
      {listData
        .sort((a, b) => {
          return new Date(a.timestamp) - new Date(b.timestamp);
        })
        .map((item) => (
          <View
            key={item.key}
            style={[
              styles.item,
              CheckHoursLeft(item.timestamp) <= 12
                ? styles.itemDueSoon
                : styles.itemDefault,
            ]}
          >
            <TodoItem item={item} />
            <DeleteButton
              itemKey={item.key}
              onPress={() => deleteRow(item.key)}
              style={styles.deleteButton}
            />
          </View>
        ))}
    </ScrollView>
  );
};

export default TodoItemList;
