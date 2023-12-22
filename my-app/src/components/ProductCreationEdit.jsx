import React, { useState, useEffect } from 'react';
import ProductCreationEditComponent from './ProductCreationEdit'; // Cambia el nombre de la importación

const ProductCreationEdit = ({ match }) => {
  const productId = match.params.productId;
  const isEditing = !!productId;

  const [product, setProduct] = useState({
    name: '',
    // Otros campos del producto...
  });

  useEffect(() => {
    // Fetch product data if editing
    if (isEditing) {
      fetch(`https://fakeapi.platzi.com/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [isEditing, productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    // Implementa la lógica para crear o editar el producto
    if (isEditing) {
      fetch(`https://fakeapi.platzi.com/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => console.log('Product updated:', data));
    } else {
      fetch('https://fakeapi.platzi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => console.log('Product created:', data));
    }
  };

  return (
    <div>
      <h2>{isEditing ? 'Edit Product' : 'Create Product'}</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
      />
      {/* Otros campos del formulario... */}
      <button onClick={handleSubmit}>
        {isEditing ? 'Update Product' : 'Create Product'}
      </button>
    </div>
  );
};

export default ProductCreationEditComponent; 