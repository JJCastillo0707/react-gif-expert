//! img + tabulador para obtener <img src="" alt="" />

export const GifItem = ({ title, url, id}) => {
    console.log({title, url, id});
  return (
    
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>


    </div>
  )
}


