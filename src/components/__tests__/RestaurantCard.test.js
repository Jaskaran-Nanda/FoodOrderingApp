import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withVegLabel } from "../RestaurantCard";

it("Should render restaurant card component with Props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const element = screen.getByText("Pizza Hut");
  expect(element).toBeInTheDocument();
});
it("Should render restaurant card component with Props Data and veg label", () => {
  const RestaurantCardVeg = withVegLabel(RestaurantCard);
  render(<RestaurantCardVeg resData={MOCK_DATA} />);
  const label = screen.getByText("Veg");
  expect(label).toBeInTheDocument();
});
