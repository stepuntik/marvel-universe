import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import InfiniteScroll from 'react-infinite-scroller';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setnewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const { loading, error, getAllCharacters } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const onRequest = (offset, initial) => {
    if (newItemLoading) return;

    initial ? setnewItemLoading(false) : setnewItemLoading(true);
    getAllCharacters(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }
    setCharList([...charList, ...newCharList]);
    setOffset(offset + 9);
    setCharEnded(ended);
    setnewItemLoading(false);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove('char__item_selected')
    );
    itemRefs.current[id].classList.add('char__item_selected');
    itemRefs.current[id].focus();
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      let imgStyle = { objectFit: 'cover' };
      if (
        item.thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      ) {
        imgStyle = { objectFit: 'unset' };
      }

      return (
        <CSSTransition key={item.id} timeout={500} classNames="char__item">
          <li
            className="char__item"
            tabIndex={0}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => {
              props.onCharSelected(item.id);
              focusOnItem(i);
            }}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                props.onCharSelected(item.id);
                focusOnItem(i);
              }
            }}
          >
            <img src={item.thumbnail} alt={item.name} style={imgStyle} />
            <div className="char__name">{item.name}</div>
          </li>
        </CSSTransition>
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => onRequest(offset)}
        hasMore={!charEnded}
        initialLoad={false}
        loader={<Spinner key={0} />}
        useWindow={true}
      >
        <ul className="char__grid">
          <TransitionGroup component={null}>{items}</TransitionGroup>
        </ul>
      </InfiniteScroll>
    );
  }

  const items = renderItems(charList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {items}
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
