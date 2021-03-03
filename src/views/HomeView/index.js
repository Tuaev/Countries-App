import { useState } from 'react';
import Card from 'src/components/Card/';
import Error from 'src/components/Error';
import Loader from 'src/components/Loader';
import Page from 'src/components/Page';
import useGet from 'src/hooks/useGet';
import styles from './HomeView.module.css';

function HomeView() {
  const [searchInput, setSearchInput] = useState('');
  const { data: countries, loading, error } = useGet(`/all`);

  const filteredCountries =
    countries &&
    countries.filter((country) =>
      country.name.toLowerCase().includes(searchInput.toLowerCase())
    );

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <Page title="Countries List" heading="Countries App">
      <div className={styles.input__container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search by Country Name"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {filteredCountries.map((country) => (
        <Card key={country.name} country={country} />
      ))}
    </Page>
  );
}

export default HomeView;
