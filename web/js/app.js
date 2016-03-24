// app.js

var RCE = React.createElement;

var render = function() {
    ReactDOM.render(
        RCE('h5', {}, 'bacon'),
        document.getElementById('react-app')
    );
    console.log('re-rendered');
}

var initialState = {};
var store = createStore(rootReducer, initialState);

store.subscribe(render);
render();

store.dispatch(addBacon());
