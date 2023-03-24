import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';


describe('Tests for <AddCategory />', () => {

  test('should change the input value', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: {value: 'Rick'}});

    expect(input.value).toBe('Rick');
  });

});