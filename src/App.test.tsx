import React from 'react';
import Amplify, {API} from "aws-amplify";
import { render, fireEvent } from '@testing-library/react';
import App from './App';

const {anything, objectContaining} = expect;

beforeEach(function () {
  jest.resetAllMocks();
})

it('renders learn react link', () => {
  const { getByRole } = render(<App />);
  const linkElement = getByRole('button', {name:'Order'});
  expect(linkElement).toBeInTheDocument();
});

it('should call the API', function () {
  const gett = jest.spyOn(API, 'get');
  const { getByRole } = render(<App />);
  fireEvent.click(getByRole('button', {name:'Order'}));
  expect(gett).toBeCalled()
});

it('should submit the order', function () {
  const gett = jest.spyOn(API, 'get');
  const { getByRole } = render(<App />);

  // fireEvent.change(getByRole('button', {name:'Order'}));
  fireEvent.click(getByRole('button', {name:'Order'}));

  expect(gett).toBeCalledWith(anything(), '/order', objectContaining({
    body: {}
  }))
});
