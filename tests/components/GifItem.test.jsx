import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Tests for <GifItem />', () => {

  const title = 'Saitama';
  const url = 'https://one-punch.com/img.jpg';

  test('should match with the snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

});