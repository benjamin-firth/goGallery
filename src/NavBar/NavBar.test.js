import NavBar from './NavBar.svelte'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

test('shows render NavBar and have proper title when rendered', () => {
  const { getByText } = render(NavBar);

  expect(getByText('goGallery')).toBeInTheDocument();
});