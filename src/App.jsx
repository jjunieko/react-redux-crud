import React from 'react';
import ListItems from './components/ListItems';
import {Provider} from 'react-redux';

import SideBar from './components/Redux/components/sideBar';
import Usuarios from './components/Redux/components/usuarios';
import { store } from './components/Redux/store/store';

function App() {

  return (
    <Provider store={store}>
      <SideBar />
      <Usuarios />
      <ListItems />
    </Provider>
  )
}

export default App
