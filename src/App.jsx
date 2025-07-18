import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product_Page from './Product_Page/Product_Page';
import Productlist from './api/productlist';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/products/:productId" element={<Product_Page />} />
                <Route path="/" element={<Productlist />} />
            </Routes>
        </Router>
    );
}
export default App;