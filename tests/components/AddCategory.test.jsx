import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';


describe('Tests for <AddCategory />', () => {

  test('should change the input value', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: {value: 'Rick'}});

    expect(input.value).toBe('Rick');
  });

  test('should call onNewCategory if input value has a value', () => {
    const inputValue = 'Nintendo';

    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    expect(input.value).toBeFalsy();
  });

});