import Router from "./Router";
import { Provider, useSelector } from "react-redux";
import { store } from "./configureStore";
import "animate.css/animate.compat.css";
import { getAreAllJerrysFound } from "./selectors/jeremy.selectors";
import cn from "classnames";

const App = () => {
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
};

const InnerApp = () => {
  const areAllJerrysFound = useSelector(getAreAllJerrysFound);

  return (
    <div
      className={cn("App", {
        "jeremy-mode": areAllJerrysFound,
      })}
    >
      <Router />
    </div>
  );
};

export default App;
