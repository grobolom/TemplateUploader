// app.js

var RCE = React.createElement;

var render = function() {
    ReactDOM.render(
        RCE('h5', {}, ''),
        document.getElementById('react-app')
    );
}

var initialState = {};
var store = createStore(rootReducer, initialState);

store.subscribe(render);
render();

store.dispatch(addBacon());
