import { View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimeComponent = ({
  addTask,
  dateTimePickerMode,
  selectedDate,
  setDateTimePickerMode,
  setShowDatePicker,
  setSelectedDate,
}) => {
  // event probably not needed
  const onChangeTimePicker = (event, dateString) => {
    setShowDatePicker(false);

    if (!dateString) setDateTimePickerMode("date");

    switch (dateTimePickerMode) {
      case "date":
        const date = new Date(dateString) || new Date();
        setSelectedDate(date);
        setDateTimePickerMode("time");
        setShowDatePicker(true);
        break;
      case "time":
        const time = new Date(dateString) || new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = 0;
        const newDate = new Date(selectedDate);
        newDate.setHours(hours, minutes, seconds);
        setSelectedDate(newDate);
        addTask(new Date(newDate));
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <DateTimePicker
        minimumDate={new Date()}
        value={new Date()}
        mode={dateTimePickerMode}
        onChange={onChangeTimePicker}
        testID="dateTimePicker"
      />
    </View>
  );
};

export default DateTimeComponent;
