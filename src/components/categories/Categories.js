import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name: 'lenovo', category: 'Laptop'},{name: 'asus', category: 'Laptop'},{name: 'dell', category: 'Laptop'},
    {name: 'samsung', category: 'Mobile'},{name: 'nokia', category: 'Mobile'},{name: 'apple', category: 'Mobile'},
    {name: 'canon', category: 'Camera'},{name: 'nikon', category: 'Camera'},{name: 'sony', category: 'Camera'}
];

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const matchedProducts = allProducts.filter(pd => pd.category === category && category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
          <h2>Select your categories: {category}</h2>
          {
              products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
          }
        </div>
    );
};

export default Categories;