import React from 'react';
import { numberComma } from '../../utils/formatters';
import PropTypes from 'prop-types';
import styles from './FeatureCard.module.css';

function FeatureCard({ country }) {
  return (
    <div className={styles.card}>
      <div className={styles.flagColumn}>
        <div className={styles.card__img}>
          <img src={country.flag} alt="flag" />
        </div>
        <div className={styles.flag__info}>
          <h1>{country.name}</h1>
          <h3>{country.subregion}</h3>
        </div>
      </div>

      <div className={styles.card__info}>
        <h1 className={styles.card__title}>Country Info</h1>
        <hr />
        <p className={styles.card__text}>
          <b>Capital:</b> {country.capital}
        </p>
        <p className={styles.card__text}>
          <b>Population:</b> {numberComma(country.population)}
        </p>
        <p className={styles.card__text}>
          <b>Currency:</b>{' '}
          {country.currencies.map((currency) => currency.code).join(', ')}
        </p>
        <p className={styles.card__text}>
          <b>Languages:</b>{' '}
          {country.languages.map((language) => language.name).join(', ')}
        </p>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  country: PropTypes.object,
};

export default FeatureCard;
