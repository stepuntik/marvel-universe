import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import mjolnir from '../../resources/img/mjolnir.png';

import './randomChar.scss';

const RandomChar = () => {
  const [char, setChar] = useState(null);

  const { getCharacter, clearError, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, 600000);

    return () => {
      clearInterval(timerId);
    };
  }, []); //eslint-disable-line

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
    getCharacter(id)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  return (
    <div className="randomchar">
      {setContent(process, View, char)}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know them better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button onClick={updateChar} className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const View = ({ data }) => {
  const { id, name, thumbnail, comics } = data;

  let comicAppearance;

  if (comics.length === 0) {
    comicAppearance = `Hmm, ${name} did not appear in any comics! That's odd...`;
  } else {
    const comicWord = comics.length > 1 ? 'comics' : 'comic';
    comicAppearance = `Nice! ${name} appeared in ${comics.length} Marvel ${comicWord}!`;
  }

  let imgStyle = { objectFit: 'cover' };
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' };
  }

  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className="randomchar__img"
        style={imgStyle}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{comicAppearance}</p>
        <div className="randomchar__btns">
          <Link to={`/characters/${id}`} className="button button__main">
            <div className="inner">homepage</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
