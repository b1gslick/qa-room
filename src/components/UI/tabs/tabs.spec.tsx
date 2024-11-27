import { fireEvent, render } from "@testing-library/react";
import { Tab } from "./tabs";
import { BrowserRouter } from "react-router-dom";

describe("Test tabs", () => {
  test("should transport to the correct destination", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Tab {...{ link: "/test", name: "test", text: "test" }} />,
      </BrowserRouter>,
    );
    const link = getByText("test");
    expect(link.getAttribute("href")).toMatch("/test");

    fireEvent.click(link);
    expect(window.location.pathname).toBe("/test");
  });
});
