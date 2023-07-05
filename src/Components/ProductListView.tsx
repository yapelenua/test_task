import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addProduct, removeProduct } from '../store/products';
import { setSortOption, SortOption } from '../app/sort';
import { ProductModal } from './ProductModal';
import Product from "../models/Product"

export const ProductListView: React.FC<{ onSelect: (productId: number) => void }> = ({ onSelect }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products) as unknown as Product[];
  const sortOption = useSelector((state: RootState) => state.sortOption) as unknown as SortOption;

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const handleSortOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOption(event.target.value as SortOption));
  };

  return (
    <div>
      <h1>Product List View</h1>
      <button onClick={() => handleAddProduct({ id: 1, name: 'Product 1' })}>Add Product</button>
      <select value={sortOption} onChange={handleSortOptionChange}>
        <option value="name">Sort by Name</option>
        <option value="count">Sort by Count</option>
      </select>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Count: {product.count}
            <button onClick={() => handleRemoveProduct(product.id)}>Delete</button>
            <button onClick={() => onSelect(product.id)}>View Details</button>
          </li>
        ))}
      </ul>
      <ProductModal onSave={handleAddProduct} />
    </div>
  );
};

export default ProductListView;
