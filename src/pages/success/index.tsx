import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../../lib/stripe";
import { ImageContainer } from "../../styles/pages/success";
import { SuccessContainer } from "../../styles/pages/success";

export default function Success(){
    return(
       <SuccessContainer>
           <h1>Compra efetuada!</h1>
           <ImageContainer>


           </ImageContainer>

           <p><strong>Guilherme</strong>,sua <strong>Camiseta Ignite Lab</strong> já está a caminho de sua casa.</p>
           <Link href={'/'}>
               Voltar ao catálogo
           </Link>
       </SuccessContainer>
    )
}

export const getServerSideProps:GetServerSideProps = async({query})=>{
  
   const productId = String(query.session_id)
   const product = await stripe.checkout.sessions.retrieve(productId,{
    expand:['line_items']
   })
   console.log(product.line_items?.data)

    return{
        props:{
           
        }
    }
}