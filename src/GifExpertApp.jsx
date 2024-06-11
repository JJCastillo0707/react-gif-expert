import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


/** 
 * ?ESTA ES UNA CAJA DE COMENTARIOS
//! Con rafc creas una funcion al instante
//* useState crea un espacio en memoria
//? <ol> </ol> es un "Order List"
* TODO: <li> </li> es un "List Item"

*/




export const GifExpertApp = () => {
       
       const [category, setCategory] = useState(['One Punch']);

       const onAddCategory = (NewCategory) =>{     //!Agrega una nueva categoria
             
             if ( category.includes( NewCategory )) return;     //* VALIDACION PARA QUE NO SE REPITAN NOMBRES
              //categories.push(NewCategory);
             setCategory([NewCategory, ...category]);
       }

       
  return (

             <>
                <h1>GifExpertApp</h1> 

                <AddCategory 

                onNewCategory={ (value) => onAddCategory(value) }
                
                />

                   {
                        category.map( category => 

                            <GifGrid key={ category } category={ category }/>

                        )

                    }
            </>
  )
}






