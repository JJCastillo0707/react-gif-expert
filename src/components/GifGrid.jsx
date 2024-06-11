import { GifItem } from './GifItem';
import { useFetchGifs } from '../hook/useFetchGifs';


//! useEffect es un Hook de react para disparar un efecto secundario

export const GifGrid = ({category}) => {

  //*muestra los titulos de las imagene
  
  const { images, isLoading } = useFetchGifs( category );
          
              
     return (

    <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className='card-grid'>

              {
                images.map(( image ) =>(
                  
                  <GifItem 
                           key={ image.id }
                               {...image}                 
                  />
                ))
              }
            </div>
            
    
    </>
  )
}
