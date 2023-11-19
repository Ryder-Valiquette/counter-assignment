// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const message = screen.getByText(/Counter/i);
    expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const initCount = screen.getByTestId('count');
    expect(initCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const counter = screen.getByTestId('count');
    const increment = screen.getByText('+');

    fireEvent.click(increment);
    expect(counter.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const counter = screen.getByTestId('count');
    const decrement = screen.getByText('-');

    fireEvent.click(decrement);
    expect(counter.textContent).toBe('-1');
});
