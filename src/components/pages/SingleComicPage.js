import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleComicPage.scss';

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const { loading, error, getComic, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]); //eslint-disable-line

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

SingleComicPage.propTypes = {
  comicId: PropTypes.string,
};

const View = ({ comic }) => {
  const {
    title,
    description,
    originalSource,
    thumbnail,
    language,
    price,
    writers,
  } = comic;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">Writer(s): {writers}</p>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
        <a href={originalSource} className="single-comic__back">
          Check out this comic on Marvel's official website!
        </a>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all comics
      </Link>
    </div>
  );
};

View.propTypes = {
  comic: PropTypes.object,
};

export default SingleComicPage;
