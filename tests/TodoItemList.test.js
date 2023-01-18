import React from "react";
import renderer from "react-test-renderer";
import {
  screen,
  render,
  fireEvent,
  waitFor,
  act,
  debug,
} from "@testing-library/react-native";

import TodoItemList from "../components/TodoItemList";
import data from "../data";
import deleteButton from "../components/DeleteButton";

// jest.mock("../components/TodoItemList", () => ({
//   ...jest.requireActual("../components/TodoItemList"),
//   deleteRow: jest.fn(),
// }));

describe("TodoItemList", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  // it("renders TodoItemList to match snapshot", () => {
  //   const setListData = jest.fn();
  //   const tree = renderer
  //     .create(<TodoItemList listData={data} setListData={setListData} />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  it("renders a list of tasks", async () => {
    const setListData = jest.fn();
    const { getByTestId, getByText } = render(
      <TodoItemList listData={data} setListData={setListData} />
    );
    // screen.debug();
    expect(getByTestId("TodoItemList")).toBeTruthy();
    getByText("Do laundry");
    getByText("Buy groceries");
    getByText("Clean the house");
    // expect(getByTestId("TodoItemList").props.children).toHaveLength(3); //---why it receives "2" actually?
  });
  it("deletes a task", async () => {
    const setListData = jest.fn();
    const { getByTestId } = render(
      <TodoItemList listData={data} setListData={setListData} />
    );
    fireEvent.press(getByTestId("delete-1667874825875"));
    expect(getByTestId("TodoItemList").props.children).toHaveLength(2);
    // screen.debug();
    // await waitFor(() => {
    //   expect(getByTestId("TodoItemList").props.children).toHaveLength(2);
    // });
  });
});
