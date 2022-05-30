import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";

import { Provider } from "react-redux";
import { store } from "./redux";
import { GamePage } from "./pages/GamePage";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pages/game/:title/:price" element={<GamePage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

// TODO: Треба зробити сторінку гри, на яку ти клацнув.
// TODO: Зробити сторінку формлення заказу.
