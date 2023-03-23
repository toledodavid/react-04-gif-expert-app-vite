import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Tests for <GifItem />', () => {

  const title = 'Saitama';
  const url = 'https://one-punch.com/img.jpg';

  test('should match with the snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the image with the correct URL and ALT', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});