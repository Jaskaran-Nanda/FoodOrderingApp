import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(14);

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  const cartItem = screen.getByText("Cart (1)");
  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  const cartItems2 = screen.getByText("Cart (2)");
  expect(cartItems2).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCart);
  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  expect(
    screen.getByText("Your Cart is Empty, Please add items to the cart")
  ).toBeInTheDocument();
});
