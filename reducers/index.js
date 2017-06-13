export default (state = [], action) => {
  	switch (action.type) {
    	case 'SHOW_ONE_POST':
      		return Object.assign({}, state, {
      			postIndex: action.postIndex
      		})
    	default:
      		return state
  	}
}