import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Stripe from 'stripe'
import Image from "next/image"
import axios from "axios"

interface ProductProps {
  product: {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    description: string,
    defaultPriceId: string
  }
}


export default function Product({ product }: ProductProps) {

  console.log("Product id", product.defaultPriceId)

  async function handleBuyProduct() {


    try {
      const response = await axios.post('http://localhost:3001/api/checkout', {
        priceId: product.defaultPriceId

      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch (err) {
      alert("Erro ao realizar a compra do produto")
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={460} height={420} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>R$ {product.price / 100}</span>

        <p>{product.description}</p>

        <button onClick={handleBuyProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const productId = String(params!.slug) //mesmo nome do arquivo

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        price: price,
        imageUrl: product.images[0],
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hora
  }
}