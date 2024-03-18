import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Proximamente Ecommerce Alanding! Esten atentos a las actualizaciones. Disculpe las molestias!'} />
    </>
  );
}

export default App;
