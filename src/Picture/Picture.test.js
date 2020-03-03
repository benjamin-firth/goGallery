import Picture from './Picture.svelte'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

test('shows proper title when rendered', () => {
  const { getByText } = render(Picture, { title: 'test title', img: 'test-img', century: 'test century' })

  expect(getByText('test title')).toBeInTheDocument();
});

test('shows proper image when rendered', () => {
  render(Picture, { title: 'test title', img: 'test-img' , century: 'test century' });

  const img = document.querySelector('img[src="test-img"]');
  
  expect(img).not.toBeNull();
});