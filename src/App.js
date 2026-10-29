import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';

import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

import EventBind from './components/EventBind';

import TombolHalo from './components/TombolHalo';

import Stok from './components/Stok';

import StokProduk from './components/ProductStatus';

import ListProduk from './components/ListProduk';
import DaftarSiswa from './components/DaftarSiswa';
import KatalogProduk from './components/KatalogProduk';

function App() {
  return (
    <div className="App">
      <KatalogProduk judul="Katalog Produk"/>
      {/* <ListProduk /> */}
      {/* <DaftarSiswa /> */}
      {/* <StokProduk nama="Keyboard" stok={10} /> */}
      {/* <StokProduk nama="Mouse"/> */}
      {/* <StokProduk nama="Monitor" stok={4} /> */}

      {/* <Stok stok={10} /> */}
      {/* <Stok /> */}
      {/* <TombolHalo /> */}

      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Message />

      <Greet name="Faris" characteristic="Rizz">
        <button>Action</button>
      </Greet>
      <Greet name="Olivia" characteristic="Cute">
        <p>She is really cute</p>
      </Greet> */}
    </div>
  );
}

export default App;
