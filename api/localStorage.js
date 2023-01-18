import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@reminder-list";

export const Load = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data !== null && data !== undefined) return JSON.parse(data);
    else throw Error("Failed to fetch saved data");
  } catch (error) {
    return [];
  }
};

export const Save = async (data) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Error saving data");
  }
};
