import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
        Page doesn't exist
      </p>
      <Link to="/" className="button button__main button__long">
        <div className="inner">back to main page</div>
      </Link>
    </div>
  );
};

export default Page404;
