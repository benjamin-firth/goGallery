import Splash from './Splash.svelte'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

test('Splash page renders', () => {
  const { getByText } = render(Splash);

  expect(getByText('WELCOME!')).toBeInTheDocument();
});

