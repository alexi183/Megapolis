import React from 'react';
import {Button} from 'reactstrap';

const ButtonClick = (props) => {

   const {productsItemShow, filterProductsById, removeProducts, productId, num} = props

   console.log('props.prId -' , productId);

   return (
       <>
          {
             !productsItemShow ?
                 <Button
                     onClick = {() => filterProductsById(productId)}>Показать
                 </Button>

                 :
                 <Button onClick = {() => removeProducts(num)}>
                    Скрыть
                 </Button>
          }
       </>
   )
}


export default (ButtonClick);
