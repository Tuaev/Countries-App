import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FeatureCard from './index';

test('FeatureCard component renders successfully', () => {
  const country = {
    name: 'Ireland',
    capital: 'Dublin',
    subregion: 'Northern Europe',
    population: 6000000,
    alpha3Code: 'IRL',
    flag: 'https://restcountries.eu/data/irl.svg',
    languages: ['Irish'],
    currencies: ['EURO'],
  };
  const { getByText, getByRole } = render(
    <Router>
      <FeatureCard country={country} />
    </Router>
  );

  const imageEl = getByRole('img');
  expect(imageEl.src).toContain('https://restcountries.eu/data/irl.svg');
  expect(getByText('Ireland')).toBeInTheDocument();
  expect(getByText('Dublin')).toBeInTheDocument();
  expect(getByText('6,000,000')).toBeInTheDocument();
});
