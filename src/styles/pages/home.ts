import {styled } from '@stitches/react'


export const HomeContainer = styled('main',{
    display:'flex' ,
  

 
    width:'100%' ,

   maxWidth:'1180px',

    minHeight:656

})


export const Product = styled('a',{
 
    background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
    borderRadius:8,

    cursor: 'pointer',
    position: 'relative',
    justifyContent:'center',
    alignItems:'center',
    display: 'flex',
    height: '500px',
    overflow:'hidden' ,
    footer:{
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '1.5rem',
        borderRadius:6,

        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between',

        background: 'rgba(0,0,0,0.6)',
        transform: 'translateY(100%)',
        opacity:0 ,
        transition: 'all 0.2s ease-in-out'
    },
    '&:hover':{
        footer: {
          transform:'translateY(0%)',
      
          opacity:1,
        }
      }
     
   
    
})