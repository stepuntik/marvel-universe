import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleComicLayout.scss';

const SingleComicLayout = ({ data }) => {
  const {
    title,
    description,
    writers,
    originalSource,
    thumbnail,
    language,
    price,
  } = data;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="single-comic">
      <Helmet>
        <meta name="description" content={`${title} comics book`} />
        <title>{title}</title>
      </Helmet>
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">Writer(s): {writers}</p>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
        <a href={originalSource} className="single-comic__link">
          Check out this comic on Marvel's official website!
        </a>
      </div>
      <button onClick={goBack} className="single-comic__link">
        Go back
      </button>
    </div>
  );
};

export default SingleComicLayout;
