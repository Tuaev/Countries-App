import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './index';

test('Card component renders successfully', () => {
  const country = {
    name: 'Ireland',
    capital: 'Dublin',
    population: 6000000,
    alpha3Code: 'IRL',
    flag: 'https://restcountries.eu/data/irl.svg',
  };
  const { getByText, getByRole } = render(
    <Router>
      <Card country={country} />
    </Router>
  );

  const imageEl = getByRole('img');
  const linkWrapper = getByRole('link');
  expect(imageEl.src).toContain('https://restcountries.eu/data/irl.svg');
  expect(linkWrapper.href).toContain('/IRL');
  expect(getByText('Country: Ireland')).toBeInTheDocument();
  expect(getByText('Capital: Dublin')).toBeInTheDocument();
  expect(getByText('Population: 6,000,000')).toBeInTheDocument();
});
