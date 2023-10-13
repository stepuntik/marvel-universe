import './charList.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const CharList = ({ onCharSelected }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = useMemo(() => new MarvelService(), []);

  const onCharListLoaded = useCallback((newCharList) => {
    if (newCharList.length < 9) {
      setCharEnded(true);
    }

    setCharacters((prevCharList) => [...prevCharList, ...newCharList]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset((prevOffset) => prevOffset + 9);
  }, []);

  const onError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  const onRequest = useCallback(
    (offset) => {
      setNewItemLoading(true);

      marvelService
        .getAllCharacters(offset)
        .then(onCharListLoaded)
        .catch(onError);
    },
    [marvelService, onCharListLoaded, onError]
  );

  useEffect(() => {
    onRequest();
  }, [onRequest]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {!(loading || error) ? (
        <>
          <ul className="char__grid">
            {characters.map(({ thumbnail, name, id }) => {
              const isImageNotAvailable = thumbnail.includes(
                'image_not_available'
              );
              const imageStyle = {
                objectFit: isImageNotAvailable ? 'contain' : 'cover',
              };

              return (
                <li
                  className="char__item"
                  key={id}
                  onClick={() => {
                    onCharSelected(id);
                  }}
                >
                  <img src={thumbnail} alt={name} style={imageStyle} />
                  <div className="char__name">{name}</div>
                </li>
              );
            })}
          </ul>
          <button
            className="button button__main button__long"
            disabled={newItemLoading}
            onClick={() => {
              onRequest(offset);
            }}
            style={{ display: charEnded ? 'none' : 'block' }}
          >
            <div className="inner">load more</div>
          </button>
        </>
      ) : null}
    </div>
  );
};

export default CharList;
