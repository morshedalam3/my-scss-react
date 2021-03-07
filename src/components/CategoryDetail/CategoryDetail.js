import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h3>This is your Category Detail</h3>
            <p>category Context : {name}</p>
        </div>
    );
};

export default CategoryDetail;