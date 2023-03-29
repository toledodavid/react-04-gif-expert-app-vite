import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Test for custom hook useFetchGifs', () => {

  test('should return initial state', () => {
    const {result} = renderHook(() => useFetchGifs('Xbox'));
    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading in false', async () => {
    const {result} = renderHook(() => useFetchGifs('Xbox'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const {images, isLoading} = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

});