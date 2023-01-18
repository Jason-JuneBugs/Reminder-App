import * as Notifications from "expo-notifications";

export const scheduleNotification = (description, timestamp) => {
  const trigger = timestamp;
  const schedulingOptions = {
    content: {
      title: "Reminder",
      body: description,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "White",
    },
    trigger,
  };
  Notifications.scheduleNotificationAsync(schedulingOptions);
};
export const scheduleNotificationRepeat = (description, timestamp) => {
  const trigger = timestamp;
  const selectMin = trigger.getMinutes();
  trigger.setMinutes(selectMin + 1);
  const repeatSchedulingOptions = {
    content: {
      title: "Reminder",
      body: description,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "White",
    },
    trigger,
  };
  Notifications.scheduleNotificationAsync(repeatSchedulingOptions);
};
