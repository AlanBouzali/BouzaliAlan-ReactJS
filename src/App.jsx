import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Proximamente Ecommerce Alanding! Esten atentos a las actualizaciones. Disculpe las molestias!'} />
      {/* <ItemCount initial={1} stock={25} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/> */}
    </>
  );
}

export default App;
