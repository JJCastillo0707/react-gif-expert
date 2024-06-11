//?LA DATA LA SACAMOS DEL PROGRAMA POSTMAN

export const getGifs = async(category) =>{
    
          const url = `https://api.giphy.com/v1/gifs/search?api_key=AqXkVAwAcKUlWlm1iO38d3pGO3Pgoqro&q=${category}&limit=10`;
          const resp = await fetch(url);                                                       
          const { data } =  await resp.json();  
  
          const gifs = data.map( img =>({
  
              id: img.id,
              title: img.title,
              url: img.images.downsized_medium.url
  
  
          }));
          
          return gifs;
  
      }



          //! AQUI HAY QUE PONER EL "https://" al incio, la url se copia de "postman"
    //*debes poner en el link que te da postman "?api_key=" pegas el link que sacas de GIPHY, al final de ese link pones "q"
   //?poner al final del link que sacas de postman, =${categories}
   //! &limit=20 pones para limitar a 20 la cantidad de archivos buscados
  //! SUPER IMPORTANTE LA URL NO VA NI EN COMILLAS NI APOSTROFES SI NO CON ESTAS ``
