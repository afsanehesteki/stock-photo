import './App.css';

  const Photo = ( {urls:{
      regular} , alt_description })=>{
    return(
        <section className='photo'>
          <img src={regular} alt ={alt_description} />
        </section>
    )
}
export default Photo;