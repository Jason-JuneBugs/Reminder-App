const setUpNotification = (listData, schedule, scheduleRepeat) => {
  for (let i = 0; i < listData.length; i++) {
    const timeDiff = new Date(listData[i].timestamp) - new Date();
    if (timeDiff > 0) {
      schedule(listData[i].name, new Date(listData[i].timestamp));
      scheduleRepeat(listData[i].name, new Date(listData[i].timestamp));
    }
  }
};

export default setUpNotification;
