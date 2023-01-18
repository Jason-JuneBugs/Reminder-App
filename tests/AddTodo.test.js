import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  debug,
} from "@testing-library/react-native";
import "@testing-library/jest-dom";
import AddTodo from "../components/AddTodo";

describe("AddTodo", () => {
  const mockAdd = jest.fn();

  it("should render a input box ", () => {
    const { getByPlaceholderText, getByTestId } = render(
      <AddTodo add={mockAdd} />
    );
    getByTestId("addButton");
    //equivalent to
    // expect(getByTestId("addButton")).toBeTruthy();
    getByPlaceholderText("Enter task name...");
  });

  it("should render a empty input box after click the add button", () => {
    const {
      getByText,
      getAllByText,
      getByPlaceholderText,
      getByTestId,
      findByText,
    } = render(<AddTodo add={mockAdd} />);
    const inputElement = getByPlaceholderText("Enter task name...");
    fireEvent.changeText(inputElement, "task1");
    const addButton = getByTestId("addButton");
    fireEvent.press(addButton);
    getByPlaceholderText("Enter task name...");
  });
});
