import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./configureStore";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
