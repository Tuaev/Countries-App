import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './CountryView.module.css';
import BorderCountry from '../../components/BorderCountry';
import FeatureCard from '../../components/FeatureCard';
import Page from '../../components/Page';
import useGet from '../../hooks/useGet';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

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
