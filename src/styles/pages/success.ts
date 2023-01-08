import {styled } from '@stitches/react'

export const SuccessContainer= styled("main",{
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'0 auto',
  
   
    h1:{
         color:'$gray100' 
    },
    p:{
       maxWidth:560,
       textAlign:'center',
       color:'$gray300' ,
       marginTop:'2rem'
    }

}
)

export const ImageContainer= styled("div",{
     width:'100%',
     maxWidth:130,
     height:145,
     background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
     borderRadius:8,
     padding:'0 25rem',
     display: 'flex',
     alignItems:'center',
     justifyContent:'center',
     marginTop:'4rem',
     
     img:{
        objectFit:'cover'
     }

} 
)