import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=7baff9ba7eb10679bf4c82b8346b3b08';
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(
      `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComics);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : 'There is no description for this character',
      fullDescription: char.description
        ? `${char.description}`
        : 'There is no description for this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      comics: char.comics.items,
      stories: char.stories.items,
    };
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      writers:
        comics.creators.items.length > 0
          ? comics.creators.items.map((creator) => creator.name).join(', ')
          : 'Unknown',
      description: comics.description || 'There is no description',
      originalSource: comics.urls[0].url
        ? `${comics.urls[0].url}`
        : 'No information about the original source',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || 'en-us',
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : 'Price is not available',
    };
  };

  return {
    clearError,
    process,
    setProcess,
    getAllCharacters,
    getCharacter,
    getCharacterByName,
    getAllComics,
    getComic,
  };
};

export default useMarvelService;
