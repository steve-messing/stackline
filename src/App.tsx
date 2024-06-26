import { useEffect } from 'react';
import { ItemPreview } from './components/ItemPreview';
import { Header } from './components/Header';
import "./styles.css"
import { Table } from './components/Table';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './store';
import { fetchSalesDataThunk } from './data/api'; // Add this line

function App() {

  const dispatch = useAppDispatch();
  const salesData = useSelector((state: RootState) => state.sales.salesData);
  const loading = useSelector((state: RootState) => state.sales.loading);
  const error = useSelector((state: RootState) => state.sales.error);

  useEffect(() => {
    dispatch(fetchSalesDataThunk());
  }, [dispatch]);

  if (loading) return <div className="temp">Loading...</div>;
  if (error) return <div className="temp">Error: {error}</div>;
  if (!salesData) return <div className="temp">No sales data</div>;

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ItemPreview data={salesData}  />
        <div className="dataContainer">
          <Table data={salesData.sales} />
        </div>
      </div>
    </div>
  );
}

export default App;
