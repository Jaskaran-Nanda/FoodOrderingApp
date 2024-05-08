import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Testing the Contact Us Page", () => {
  it("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  it("Should load button in contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
  it("Should load input field with placeholder name", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });
  it("Should load 2 input fields on contact component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(3);
  });
});
