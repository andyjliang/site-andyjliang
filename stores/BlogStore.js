import alt from '../alt';
import BlogActions from '../actions/BlogActions';

class BlogStore {
  constructor() {
    this.bindActions(BlogActions);
    this.posts = [];
  }

  getPosts(data) {
    this.posts = data;
  }
}

export default alt.createStore(BlogStore);