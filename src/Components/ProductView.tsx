import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { editProduct } from '../store/products';
import Comment from '../models/Comment';
import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';
import Product from "../models/Product"


export const ProductView: React.FC<{ productId: number }> = ({ productId }) => {
  const dispatch = useDispatch();
  const product: Product | undefined = useSelector((state: RootState) =>
    state.products.products.find((product) => product.id === productId)
  );

  const handleEditProduct = (editedProduct: Product) => {
    dispatch(editProduct(editedProduct));
  };

  const handleAddComment = (comment: Comment) => {
    const currentComments = product?.comments || [];
  
    const updatedComments = [...currentComments, comment];

    const updatedProduct: Product = {
      ...product!,
      comments: updatedComments,
    };
  
    dispatch(editProduct(updatedProduct));
  };

  const handleDeleteComment = (commentId: number) => {
    const currentComments = product?.comments || [];

    const updatedComments = currentComments.filter((comment) => comment.id !== commentId);

    const updatedProduct: Product = {
        ...product!,
        comments: updatedComments,
    };

    dispatch(editProduct(updatedProduct));
    };

  if (!product) {
    return null;
  }

  return (
    <div>
      <h1>Product View</h1>
      <h2>{product.name}</h2>
      <p>Count: {product.count}</p>
      <button onClick={() => handleEditProduct({ ...product, name: 'Edited Product' })}>Edit</button>
      <CommentList comments={product?.comments || []} onDelete={handleDeleteComment} />
      <CommentForm onSave={handleAddComment} />
    </div>
  );
};
