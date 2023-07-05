import React from 'react';
import Product from "../models/Product"

interface ProductModalProps {
  onSave: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ onSave }) => {
  const [name, setName] = React.useState('');
  const [count, setCount] = React.useState('');

  const handleSave = () => {
    const product: Product = {
      id: Date.now(),
      name,
      count: parseInt(count, 10),
    };
    onSave(product);
    setName('');
    setCount('');
  };

  const handleCancel = () => {
    setName('');
    setCount('');
  };

  return (
    <div>
      <h3>Add Product</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} placeholder="Count" />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};
