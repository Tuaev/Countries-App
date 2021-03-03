import React from 'react';
import { Link } from 'react-router-dom';
import { numberComma } from 'src/utils/formatters';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ country }) {
  return (
    <Link to={`/${country?.alpha3Code}`} className={styles.card}>
      <div className={styles.card__img}>
        <img src={country?.flag} alt="flag" />
      </div>
      <div className={styles.card__info}>
        <h1 className={styles.card__title}>Country: {country?.name}</h1>
        <p className={styles.card__text}>Capital: {country?.capital}</p>
        <p className={styles.card__text}>
          Population: {numberComma(country?.population)}
        </p>
      </div>
    </Link>
  );
}

Card.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    alpha3Code: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }),
};

export default Card;
