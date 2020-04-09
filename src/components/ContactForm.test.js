import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('make sure inputs are visible', () => {
   const { getByTestId } = render(<ContactForm/>)
   getByTestId("firstName");
   getByTestId("lastName");
   getByTestId("email");
   getByTestId("message")


})