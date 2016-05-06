import AppDispatcher from '../dispatchers/AppDispatcher';
import { ReduceStore } from 'flux/utils';

class FavStore extends ReduceStore {
  getInitialState() {
    return new Map();
  }

  reduce(state, action) {
    switch (action.type) {
      case 'hn-local/post/fav':
        return state.set(action.data.story_id, action.data);
      default:
        return state;
    }
  }
}

export default new FavStore(AppDispatcher);
