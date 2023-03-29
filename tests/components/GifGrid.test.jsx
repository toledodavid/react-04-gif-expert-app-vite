import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Tests for <GifGrid />', () => {

  const category = 'Xbox';

  test('should show loading at the beginnig', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('should show items when useFetchGifs loads the images', () => {
    const gifs = [
      {
        id: '123',
        title: 'abc',
        url: 'https://abc.com'
      },
      {
        id: '098',
        title: 'xyz',
        url: 'https://xyz.com'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });

});