import React, { createContext, FC } from 'react';
import { useAddItemsToCart } from '../../../hooks/Cart/useAddItemsToCart';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import { IProductPriceContext } from '../../../types/Products/products';
import { ProductPageContext } from '../ProductPageProvider/PoroductPageProvider';

export const ProductPriceContext = createContext<null | IProductPriceContext>(null)
interface ProductPriceProvider {
    children: React.ReactNode;
}

const ProductPriceProvider: FC<ProductPriceProvider> = ({ children }) => {
    const id = useNotNullContext(ProductPageContext).id
    const { addItems, addStatus } = useAddItemsToCart(id)
    return (
        <ProductPriceContext.Provider value={{ addFc: addItems, addStatus }}>
            {children}
        </ProductPriceContext.Provider>
    );
};

export default ProductPriceProvider;