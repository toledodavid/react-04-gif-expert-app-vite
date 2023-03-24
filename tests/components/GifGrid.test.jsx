import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('Tests for <GifGrid />', () => {

  const category = 'Xbox';

  test('should show loading at the beginnig', () => {
    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

});