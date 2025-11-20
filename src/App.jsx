import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import SuperCoin from "./Components/SuperCoin";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-heading">Redux Store</h1>
      <div className="container app-content">
        <ProductList />
        <ShoppingCart />
        <SuperCoin />
      </div>
    </div>
  );
};

export default App;
