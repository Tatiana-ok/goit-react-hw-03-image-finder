
const KEY = '19404590-ebb1cf59ef1b71a0170f01254';

function fetchPixabayAPI (search, numberOfPage){
    return fetch(`https://pixabay.com/api/?q=${search}&page=${numberOfPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет ответа по запросу: ${search}`));
    });
}

const pixabayApi = {
  fetchPixabayAPI,
};
export default pixabayApi;