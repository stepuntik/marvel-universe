import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = ({ charId }) => {
  const [char, setChar] = useState(null);

  const { getCharacter, clearError, process, setProcess } = useMarvelService();

  const updateChar = () => {
    if (!charId) {
      return;
    }

    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  useEffect(() => {
    updateChar();
  }, [charId]); //eslint-disable-line react-hooks/exhaustive-deps

  const onCharLoaded = (char) => {
    setChar(char);
  };

  return (
    <div className="char__info char__info--fixed">
      {setContent(process, View, char)}
    </div>
  );
};

const View = ({ data }) => {
  const { id, name, thumbnail, comics } = data;

  let imgStyle = { objectFit: 'cover' };
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' };
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <Link to={`/characters/${id}`} className="button button__main">
              <div className="inner">homepage</div>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="char__comics">
        See what comics you can find me in below!
      </h3>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : 'No comics with this character found'}
        {comics.map((item, i) => {
          // eslint-disable-next-line
          if (i > 9) return;

          if (item.resourceURI) {
            let comicId;

            const valueAfterComics = item.resourceURI.match(/comics\/(\d+)/);

            if (valueAfterComics) {
              comicId = valueAfterComics[1];
            }
            return (
              <Link
                key={comicId}
                to={`/comics/${comicId}`}
                className="char__comics-item"
              >
                <li>{item.name}</li>
              </Link>
            );
          } else return null;
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
