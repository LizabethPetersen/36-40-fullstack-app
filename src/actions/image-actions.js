import superagent from 'superagent';
import * as routes from '../lib/routes';

const createImage = image => ({
  type: 'IMAGE_CREATE',
  payload: image,
});

export default fileDescription => (store) => {
  const { token } = store.getState();

  return superagent.post(`${API_URL}${routes.IMAGE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('title', fileDescription.title)
    .attach('image', fileDescription.image)
    .then((response) => {
      return store.dispatch(createImage(response.body));
    });
};
