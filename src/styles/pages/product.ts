import {styled } from '@stitches/react'

export const ProductContainer = styled("main",{

    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    alignItems:'stretch',
    gap:'4rem',
    maxWidth:1180,
    margin:'0 auto' ,
    marginBottom:'50px',

})

export const ImageContainer = styled("div",{

    width:'100%',
    maxWidth:576,
    minHeight: 556,
    background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
    borderRadius:8,
    padding: '0.25rem',
    alignItems:'center',
    justifyContent:'center',
   

    img:{
        objectFi:'cover'
    }
})


export const ProductDetails = styled("div",{
    display: 'flex',
    flexDirection:'column',
    h1:{
        color: '$gray300'
    },
    span:{
        marginTop:'1rem',
        display:'block',
        color:'$green300',
        fontSize:25
    },
    p:{
        marginTop:'2.5rem',
        lineHeight:1.6,
        color: '$gray300'
    },
    button:{
        marginTop:'auto',
        backgroundColor:'$green500',
        border:0,
        color:'white',
        borderRadius:8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight:'bold',
        transition: 'filter 0.3s',
        '&:hover':{
      
                filter:'brightness(0.8)'
            
        }

     
    },
  
})