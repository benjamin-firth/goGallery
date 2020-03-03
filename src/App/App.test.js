import App from './App.svelte'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

test('shows render App and have proper title when rendered', () => {
  const { getByText } = render(App);

  expect(getByText('goGallery')).toBeInTheDocument();
});


// test('shows proper image when rendered', () => {
//   render(App, { title: 'test title', img: 'test-img' });

//   const img = document.querySelector('img[src="test-img"]');
  
//   expect(img).not.toBeNull();
// });