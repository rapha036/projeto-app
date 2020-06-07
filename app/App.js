import React, {Fragment, useEffect, useState} from 'react';
import {
   ScrollView,
   FlatList
} from "react-native";

import { Cabecalho } from './src/Components/Cabeçalho';
import { Foto } from './src/Components/Foto';


const App = () => {
  
  const [fotos, setFotos] = useState([]);

  useEffect(()=> {

    const lerFotos = async() => {
        const fotosHTTP = await fetch("http://localhost:3030/feed");
        const fotosJson = await fotosHTTP.json();
        setFotos(fotosJson);
    }

    lerFotos();
  },[]);
  
  
  
  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
         renderItem={ ({item}) => 
          <Fragment>
            <Cabecalho nomeUsuario={item.userName}/>
            <Foto/>
          </Fragment>}
      />
    </ScrollView>  
  )
};

export default App;
