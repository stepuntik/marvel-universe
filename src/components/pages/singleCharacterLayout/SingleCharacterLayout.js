import { Link } from 'react-router-dom';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({ data }) => {
  const { name, fullDescription, thumbnail } = data;

  return (
    <div className="single-char">
      <img src={thumbnail} alt={name} className="single-char__char-img" />
      <div className="single-char__info">
        <h2 className="single-char__name">{name}</h2>
        <p className="single-char__descr">{fullDescription}</p>
      </div>
      <Link to="/" className="single-char__link">
        Back to all characters
      </Link>
    </div>
  );
};

export default SingleCharacterLayout;
