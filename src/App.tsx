import React from 'react';
import { ItemPreview } from './components/ItemPreview';
import { Header } from './components/Header';
import { mockData } from './data/mockData';
import { SalesData } from './interfaces';
import "./styles.css"

const data: SalesData[] = mockData;

function App() {
  return (
    <div className="App">
      <Header />
      <ItemPreview data={data[0]}  />
    </div>
  );
}

export default App;
