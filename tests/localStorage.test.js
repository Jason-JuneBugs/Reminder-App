import AsyncStorage from "@react-native-async-storage/async-storage";
import { Load, Save } from "../api/localStorage";
import data from "../data.json";

beforeEach(() => {
  AsyncStorage.clear();
});

describe("Async Storage", () => {
  test("Gets items", async () => {
    const list = await Load();
    expect(list).toEqual([]);
  });

  test("Stores item", async () => {
    await Save(data);
    const savedData = await Load();
    expect(savedData).toEqual(data);
  });
});
