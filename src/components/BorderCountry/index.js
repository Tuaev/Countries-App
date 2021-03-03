import { numberComma } from 'src/utils/formatters';
import { Link } from 'react-router-dom';
import useGet from 'src/hooks/useGet';
import PropTypes from 'prop-types';
import styles from './BorderCountry.module.css';

function BorderCountry({ border }) {
  const { data: country } = useGet(`/alpha/${border}`);

  if (!country) return null;
  return (
    <Link to={country?.alpha3Code} key={border} className={styles.borderCountry}>
      <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={country?.flag} alt="flag" />
        </div>
        <div className={styles.card__info}>
          <h1 className={styles.card__title}>Country: {country?.name}</h1>
          <p className={styles.card__text}>
            <b>Capital:</b> {country?.capital}
          </p>
          <p className={styles.card__text}>
            <b>Population:</b> {numberComma(country?.population)}
          </p>
        </div>
      </div>
    </Link>
  );
}

BorderCountry.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    alpha3Code: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }),
};
export default BorderCountry;
