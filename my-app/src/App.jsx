// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HomeComponent from './components/Home';
import CategoriesComponent from './components/Categories';
import ProductsComponent from './components/Products';
import AuthenticationComponent from './components/Authentication';
import ProductCreationEditComponen from './components/ProductCreationEdit';
import CategoryCreationEditComponent from './components/CategoryCreationEdit';
import CartComponent from './components/Cart';
import NotFoundComponent from './components/NotFound';
import { CartProvider } from './contexts/CartContext';



function App() {
  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Router>
          <CartProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/categories" exact component={Categories} />
              <Route path="/products" exact component={Products} />
              <Route path="/auth" exact component={Authentication} />
              <Route
                path="/products/create"
                exact
                component={ProductCreationEdit}
              />
              <Route
                path="/products/edit/:productId"
                exact
                component={ProductCreationEdit}
              />
              <Route
                path="/categories/create"
                exact
                component={CategoryCreationEdit}
              />
              <Route
                path="/categories/edit/:categoryId"
                exact
                component={CategoryCreationEdit}
              />
              <Route path="/cart" exact component={Cart} />
              <Route path="/404" exact component={NotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </CartProvider>
        </Router>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

function Layout() {
  return (
    <div className="Links">
      <nav>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Categories
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Register
          </Link>
        </li>
      </nav>

      <Outlet />
    </div>
  );
}

function AdminRoutes({ children }) {
  const currentLocation = useLocation();
  const { id } = useContext(AuthContext);

  if (!id) {
    return <Navigate to="/login" state={{ from: currentLocation }} replace />;
  }

  return children;
}


const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);

export default App;
