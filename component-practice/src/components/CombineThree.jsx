import React from 'react';
import Heading from './Heading';
import OrderList from './OrderList';
import Paragraph from './Paragraph';

function CombineThree() {
    // yadi multiple elements pass kar rahe hai to () ke andar dengy;
    return (
        <>
            <Heading/> 
            <Paragraph />
            <OrderList />
        </>
    );
}

export default CombineThree;