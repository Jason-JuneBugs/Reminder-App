import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";

import { styles } from "../styles/TodoItemStyles";

const TodoItem = ({ item }) => {
  const [isDueWithin24Hours, setIsDueWithin24Hours] = useState(false);
  const [isOverdue, setIsOverdue] = useState(false);
  const [timeDifference, setTimeDifference] = useState(
    new Date(item.timestamp) - new Date()
  );

  useEffect(() => {
    setIsDueWithin24Hours(timeDifference < 86400000 && timeDifference > 0);
    setIsOverdue(timeDifference < 0);
    const interval = setInterval(() => {
      setTimeDifference(new Date(item.timestamp) - new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeDifference]);

  const formattedDateTime = (dateTime) => {
    return format(new Date(dateTime), "MMM d, p");
  };

  const timeLeftIn24Hour = (remainingTime) => {
    if (isDueWithin24Hours && !isOverdue) {
      const hours = Math.floor(remainingTime / 3600000);
      const minutes = Math.floor((remainingTime % 3600000) / 60000);
      return `${hours} hours, ${minutes} minutes until due`;
    } else if (isOverdue) {
      return "Times up!";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.todoWrapper}>
        <View style={styles.todoInnerWrapper}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.timestamp} testID={`todotime-${item.key}`}>
            {!isDueWithin24Hours && !isOverdue
              ? formattedDateTime(item.timestamp)
              : timeLeftIn24Hour(timeDifference)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TodoItem;
