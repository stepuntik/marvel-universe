import './charInfo.scss';
import MarvelService from '../../services/MarvelService';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Skeleton from '../skeleton/Skeleton';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const CharInfo = ({ charId }) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const marvelService = useMemo(() => new MarvelService(), []);

  const onCharLoaded = useCallback(
    (char) => {
      setChar(char);
      setLoading(false);
    },
    [setChar, setLoading]
  );

  const onError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, [setLoading, setError]);

  const updateCharInfo = useCallback(() => {
    if (!charId) return;

    setLoading(true);

    marvelService.getCharacter(charId).then(onCharLoaded).catch(onError);
  }, [charId, marvelService, onCharLoaded, onError]);

  useEffect(() => {
    try {
      updateCharInfo();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [updateCharInfo, charId]);

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  const isImageNotAvailable = thumbnail.includes('image_not_available');
  const imageStyle = {
    objectFit: isImageNotAvailable ? 'contain' : 'cover',
  };

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imageStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      {comics.length === 0 ? (
        <p>No comics found with this character.</p>
      ) : (
        <ul className="char__comics-list">
          {comics.slice(0, 10).map((item, i) => (
            <li key={i} className="char__comics-item">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CharInfo;
