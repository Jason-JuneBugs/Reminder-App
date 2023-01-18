import HomePage from "../components/homePage";
import {
  render,
  screen,
  fireEvent,
  debug,
} from "@testing-library/react-native";

import { Load } from "../api/localStorage";
import Auth from "../utils/AuthHandler";
jest.mock("../utils/AuthHandler");

describe("homePage", () => {
  it("render a log in button on the screen if bioauthentication is supported", () => {
    const MockSetIsAuthenticated = jest.fn();
    const MockSetSetListData = jest.fn();

    const { getByRole, getByText, getByTestId } = render(
      <HomePage
        setIsAuthenticated={MockSetIsAuthenticated}
        setListData={MockSetSetListData}
      />
    );
    screen.debug();
    expect(getByText("Login")).toBeTruthy();
    expect(getByTestId("Image")).toBeTruthy();
  });
});
