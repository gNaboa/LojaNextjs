import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'


import { HomeContainer, Product } from '../styles/pages/home'

import Camiseta1 from '../assets/Camiseta1.png'
import Camiseta2 from '../assets/Camiseta2.png'
import Camiseta3 from '../assets/Camiseta3.png'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'

interface HomeProps {
  products:{
    id:string,
    name:string,
    price:number,
    imageUrl:string
  }[]
}

export default function Home ({products}:HomeProps){

  const [sliderRef] = useKeenSlider({
   slides:{
    perView:3,
    spacing:10
   }
  })

  return (
   <HomeContainer ref={sliderRef} className="keen-slider">
        
        {
          products.map(product =>{
            return(
              <Link key={product.id} href={`product/${product.id}`}>
              <Product  className='keen-slider__slide'>
              <Image src={product.imageUrl} width={460} height={420}/>
              <footer>
                <strong>{product.name}</strong>
                <span>R$ {product.price/100}</span>
              </footer>
            </Product>
            </Link>
            )
          })
        }
    
   </HomeContainer>
  )
}

export const getStaticProps:GetStaticProps = async ()=>{
   const response = await stripe.products.list({
    expand:['data.default_price'],
    active:true
   })

  const products = response.data.map( pro =>{
    const price = pro.default_price as  Stripe.Price
    return {
      id:pro.id,
      name:pro.name,
      imageUrl:pro.images[0],
      price: price.unit_amount,

    }
  })

   console.log(response.data)
  return{
      props:{
        products
      },
      revalidate: 60*60*2
  }
}
