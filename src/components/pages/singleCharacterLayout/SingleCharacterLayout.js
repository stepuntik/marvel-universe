import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({ data }) => {
  const { name, fullDescription, thumbnail, comics, stories } = data;

  const comicsList = comics
    ? comics
        .filter((item) => item.resourceURI)
        .map((item) => {
          const comicId = item.resourceURI.match(/comics\/(\d+)/)?.[1];
          return (
            <li key={comicId}>
              <Link
                to={comicId ? `/comics/${comicId}` : '/'}
                className="single-char__link"
              >
                {item.name}
              </Link>
            </li>
          );
        })
    : null;

  const storiesList = stories
    ? stories.map((story, i) => <li key={i}>{story.name}</li>)
    : null;

  return (
    <div className="single-char">
      <Helmet>
        <meta name="description" content="Page with a Marvel comic character" />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} className="single-char__char-img" />
      <div className="single-char__info">
        <h2 className="single-char__name">{name}</h2>
        <p className="single-char__descr">{fullDescription}</p>
        {comics && comics.length > 0 && (
          <>
            <h2 className="single-char__name">In comics:</h2>
            <ul className="single-char__list">{comicsList}</ul>
          </>
        )}
        {(!comics || comics.length === 0) && (
          <p className="single-char__descr">No comics found</p>
        )}
        {stories && stories.length > 0 && (
          <>
            <h2 className="single-char__name">In stories:</h2>
            <ul className="single-char__list">{storiesList}</ul>
          </>
        )}
        {(!stories || stories.length === 0) && (
          <p className="single-char__descr">No stories found</p>
        )}
      </div>
      <Link to="/" className="single-char__link">
        Back to all characters
      </Link>
    </div>
  );
};

export default SingleCharacterLayout;
