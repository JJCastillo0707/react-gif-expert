import { useState } from "react";

//*todo: TODO ESTE CODIGO ES PARA VALIDAR LA CAJA DE TEXTO

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onImputValue = ({target}) =>{   //!PONER SIEMPRE EL TARGET ENTRE {target} PARA DESESTRUCTURAR
          
          setInputValue(target.value);
    }

    const onSubmit = (event) =>{                      //* esta funcion contiene las validasiones, para la caja de texto(onSubmit)
        event.preventDefault();                      //* la cual es llamada en el form y tambien es un evento
        if (inputValue.trim().length <=1) return;
        //setCategories(categories =>[ inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');                          //!LIMPIO LA CAJA DE TEXTO


    }


  return (
      //! AQUI LLAMO LA FUNSION onSubmit
    <form onSubmit={ onSubmit }>   

         <input

                  type="text"
                  placeholder="Buscar gif"
                  value={ inputValue }
                  onChange={ onImputValue } //! onChange se activa en cada pulsacion de telca, dentro de la caja de texto
        />
    </form>

    
  )
}


