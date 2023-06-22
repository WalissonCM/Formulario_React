import React from "react";
import Pagina from '@/components/Pagina'


const index = () => {
 
    const myStyle={
        backgroundImage: "url('https://w0.peakpx.com/wallpaper/299/195/HD-wallpaper-cute-dog-filhote-cachorro-puppy-dog.jpg')",
        height:'100vh',
        marginTop:'-130px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };  
  
    return (
   <> 
    <Pagina></Pagina>    
     <div style={myStyle}><h1 className="text-center py-5 text-white"><strong>Uma Vida de Cuidado é Mais Saudavel</strong></h1></div>
     
   </>
  )
}

export default index