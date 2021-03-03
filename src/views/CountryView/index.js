import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './CountryView.module.css';
import BorderCountry from 'src/components/BorderCountry';
import FeatureCard from 'src/components/FeatureCard';
import Page from 'src/components/Page';
import useGet from 'src/hooks/useGet';
import Loader from 'src/components/Loader';
import Error from 'src/components/Error';

function CountryView() {
  const { countryAlpha } = useParams();
  const { data: country, loading, error } = useGet(`/alpha/${countryAlpha}`);
  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <Page title={`${country.name} - Info`} heading={country.name}>
      <div className="row">
        <div className="col-xs-12">
          <FeatureCard country={country} />
        </div>
      </div>
      <h1 className={styles.borderTitle}>Bordering Countries</h1>
      {country.borders.length > 0 ? (
        <div className={styles.borderContainer}>
          {country.borders.map((border) => (
            <BorderCountry key={border} border={border} />
          ))}
        </div>
      ) : (
        'NONE'
      )}
    </Page>
  );
}

export default CountryView;
