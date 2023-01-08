// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler( req: NextApiRequest, res: NextApiResponse) {

const {priceId} = req.body

if(req.method!='POST'){
  return res.status(400).json({error:'Method not allowed'})
}
if(!priceId){
  return res.status(400).json({error:'Price not found'})
}
  const checkoutSession = await stripe.checkout.sessions.create({
    mode:'payment',
    success_url:'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url:'http://localhost:3000/',
    
    line_items:[
      {
        price:priceId,
        quantity:1
      }
    ],
  })

  return res.status(201).json({
    checkoutUrl:checkoutSession.url 
  })
}
