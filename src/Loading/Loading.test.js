import Loading from './Loading.svelte'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

test('Loading page renders', () => {
  const { getByText } = render(Loading);

  expect(getByText('LOADING...')).toBeInTheDocument();
});