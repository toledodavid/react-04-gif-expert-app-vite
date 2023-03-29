import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Tests for GifExpertApp', () => {

  test('should match with the snapshot', () => {
    const {container} = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

  test('should add a new category to its state', () => {
    const inputValue = 'Nintendo';

    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    expect(input.value).toBeFalsy();
    expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);
  });

});