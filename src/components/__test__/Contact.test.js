import Contact from "../Contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Contact Us Page Test Case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load 2 input boxes on the Contact comp", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
