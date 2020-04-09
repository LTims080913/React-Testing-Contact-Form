import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('make sure inputs are visible', () => {
   const { getByTestId } = render(<ContactForm/>)
   const firstNameVisible = getByTestId("firstName");
   const lastNameVisible = getByTestId("lastName");
   const emailVisible = getByTestId("email");
   const messageVisible = getByTestId("message")
   expect(firstNameVisible).toBeVisible();
   expect(lastNameVisible).toBeVisible();
   expect(emailVisible).toBeVisible();
   expect(messageVisible).toBeVisible();
});

test('first name input max length fail', () => {
     const {getByTestId} = render(<ContactForm/>)
     const firstNameInput = getByTestId("firstName")
     fireEvent.change(firstNameInput,{target:{value:'Latosha'} });
     expect(firstNameInput.value).toBe('Latosha');
    
 });

test('last name input text', () => {
    const {getByTestId} = render(<ContactForm/>)
    const lastNameInput = getByTestId('lastName')
    fireEvent.change(lastNameInput, {target: {value: 'Tims'}});
    expect(lastNameInput.value).toBe('Tims')
});

test('email input field is functional', () => {
    const {getByTestId} = render(<ContactForm/>)
    const emailInput = getByTestId('email')
    fireEvent.change(emailInput, {target: {value: 'hotstuff14@email.com'}});
    expect(emailInput.value).toBe('hotstuff14@email.com')
});

test('message input field is functional', () => {
    const {getByTestId} = render(<ContactForm/>)
    const messageInput = getByTestId('message')
    fireEvent.change(messageInput, {target: {value: 'I want to be the very best like no one ever was.'}} )
    expect(messageInput.value).toBe('I want to be the very best like no one ever was.')
});

test('submit button', () => {
    const {getByTestId} = render(<ContactForm/>)
    const submitButton = getByTestId('submitButton')
    fireEvent.click(submitButton)
})