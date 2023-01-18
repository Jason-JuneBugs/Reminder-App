import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";
import DateTimeComponent from "./components/DateTimeComponent";
import { styles } from "./styles/AppStyles";
import HomePage from "./components/homePage";
import { Save } from "./api/localStorage";
import {
  scheduleNotification,
  scheduleNotificationRepeat,
} from "./api/notification";
import * as Notifications from "expo-notifications";
import setUpNotification from "./components/setUpNotification";

const App = () => {
  const [listData, setListData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateTimePickerMode, setDateTimePickerMode] = useState("date");
  const [taskName, setTaskName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const removeNotification = async () => {
      await Notifications.cancelAllScheduledNotificationsAsync();
    };
    removeNotification();
    setUpNotification(
      listData,
      scheduleNotification,
      scheduleNotificationRepeat
    );
  });

  const addTask = async (dateTime) => {
    const newList = [
      ...listData,
      {
        name: taskName,
        timestamp: dateTime.toString(),
        key: new Date().getTime().toString(),
      },
    ];
    setListData(newList);
    setDateTimePickerMode("date");
    await Save(newList);
  };

  return (
    <View style={styles.screen}>
      {isAuthenticated ? (
        <View style={styles.container}>
          <Text style={styles.title}>Reminders</Text>
          <AddTodo
            add={(name) => {
              // TIP: handles add button being pressed
              setTaskName(name);
              setSelectedDate(new Date(selectedDate));
              setShowDatePicker(true);
            }}
          />
          <View style={styles.todoItemListView}>
            <TodoItemList listData={listData} setListData={setListData} />
          </View>
        </View>
      ) : (
        <HomePage
          setIsAuthenticated={setIsAuthenticated}
          setListData={setListData}
        />
      )}

      {showDatePicker ? (
        <DateTimeComponent
          addTask={addTask}
          dateTimePickerMode={dateTimePickerMode}
          selectedDate={selectedDate}
          setDateTimePickerMode={setDateTimePickerMode}
          setShowDatePicker={setShowDatePicker}
          setSelectedDate={setSelectedDate}
        />
      ) : null}
    </View>
  );
};

export default App;
