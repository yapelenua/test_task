import React from 'react';
import ProductListView from './Components/ProductListView';
import { ProductView } from './Components/ProductView';

const App: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = React.useState<number | null>(null);

  const handleProductSelect = (productId: number) => {
    setSelectedProductId(productId);
  };

  return (
    <div>
      <ProductListView onSelect={handleProductSelect} />
      {selectedProductId && <ProductView productId={selectedProductId} />}
    </div>
  );
};

export default App;
