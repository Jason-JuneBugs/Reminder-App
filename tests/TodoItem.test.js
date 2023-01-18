import { render, waitFor } from "@testing-library/react-native";

import TodoItem from "../components/TodoItem";

// Reminder timestamp is 12 hours from now
const data = {
  key: "123",
  name: "Do laundry",
  timestamp: new Date(new Date().getTime() + 12 * 60 * 60 * 1000).toString(),
};

describe("TodoItem", () => {
  it.only("renders a task and shows hours and minutes until it is due", async () => {
    const { getByTestId } = render(<TodoItem item={data} />);

    await waitFor(() => {
      expect(getByTestId("todotime-123").props.children).toEqual(
        "11 hours, 59 minutes until due"
      );
    });
  });
});
