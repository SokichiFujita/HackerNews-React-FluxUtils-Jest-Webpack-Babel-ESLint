import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatchers/AppDispatcher';
import FavStore from './FavStore';

class StoryStore extends ReduceStore {
  getInitialState() {
    return new Map();
  }

  reduce(state, action) {
    switch (action.type) {
      case 'hn/get/top':
        return action.data;
      case 'hn/get/newest':
        return action.data;
      case 'hn/get/best':
        return action.data;
      case 'hn/get/fav':
        return FavStore.getState();
      default:
        return state;
    }
  }
}

export default new StoryStore(AppDispatcher);
