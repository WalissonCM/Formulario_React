import React from "react";
import Pagina from '@/components/Pagina'


const index = () => {
 
    const myStyle={
        backgroundImage: "url('https://w0.peakpx.com/wallpaper/299/195/HD-wallpaper-cute-dog-filhote-cachorro-puppy-dog.jpg')",
        height:'100vh',
        marginTop:'-270px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };  
  
    return (
   <> 
    <Pagina>
    <h1 className="text-center py-5 text-white"><strong>Uma Vida de Cuidado é Mais Saudavel</strong></h1>  
    </Pagina>    
    <div style={myStyle}></div>  
   </>
  )
}

export default index