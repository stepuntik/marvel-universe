import { Link } from 'react-router-dom';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({ data }) => {
  const { name, fullDescription, thumbnail, comics, stories } = data;

  const comicsList = comics
    ? comics.map((item) => {
        if (item.resourceURI) {
          let comicId;

          const valueAfterComics = item.resourceURI.match(/comics\/(\d+)/);

          if (valueAfterComics) {
            comicId = valueAfterComics[1];
          }
          return (
            <li>
              <Link
                key={comicId}
                to={`/comics/${comicId}`}
                className="single-char__link"
              >
                {item.name}
              </Link>
            </li>
          );
        } else return null;
      })
    : null;

  const storiesList = stories
    ? stories.map((story, i) => <li key={i}>{story.name}</li>)
    : null;

  return (
    <div className="single-char">
      <img src={thumbnail} alt={name} className="single-char__char-img" />
      <div className="single-char__info">
        <h2 className="single-char__name">{name}</h2>
        <p className="single-char__descr">{fullDescription}</p>
        <h2 className="single-char__name">In comics:</h2>
        <ul className="single-char__list">
          {comics ? comicsList : 'No comics found'}
        </ul>
        <h2 className="single-char__name">In stories:</h2>
        <ul className="single-char__list">
          {stories ? storiesList : 'No stories found'}
        </ul>
      </div>
      <Link to="/" className="single-char__link">
        Back to all characters
      </Link>
    </div>
  );
};

export default SingleCharacterLayout;
