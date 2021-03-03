import { Helmet } from 'react-helmet';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Page.module.css';

function Page({ title = '', children }) {
  const { pathname } = useLocation();
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <Link to="/" className={styles.header}>
              Countries App
            </Link>
          </div>
          <div className="col-xs-12">
            {pathname !== '/' && (
              <Link to="/">
                <button type="button" className={styles.button}>
                  Back
                </button>
              </Link>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
