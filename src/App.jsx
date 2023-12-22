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

export default App;
