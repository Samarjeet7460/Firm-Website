import React from 'react'

import barBundling from "../assets/barBundling.jpg"
import billerTransfer from "../assets/billerTransfer.jpg"
import chain from "../assets/chain.jpg"
import elinmentRolls from "../assets/elinmentRolls.jpg"
import helicalGearBox from "../assets/helicalGearBox.jpg"
import mill1 from "../assets/mill1.jpg"
import mill2 from "../assets/mill2.jpg"
import mill3 from "../assets/mill3.jpg"
import mill4 from "../assets/mill4.jpg"
import mill5 from "../assets/mill5.jpg"
import mill6 from "../assets/mill6.jpg"
import mill7 from "../assets/mill7.jpg"
import mill8 from "../assets/mill8.jpg"
import millWheel from "../assets/millWheel.jpg"
import pulloutPinch from "../assets/pulloutPinch.jpg"
import rollingMillsMachinery from "../assets/rollingMillsMachinery.jpg"
import satatingMachine from "../assets/satatingMachine.jpg"
import tmtRoller from "../assets/tmtRoller.jpg"
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const productList = [
  {
    image: helicalGearBox,
    name: "Helical Gear Box"
  },
  {
    image: elinmentRolls,
    name: "Elinment Rolls"
  },
  {
    image: satatingMachine,
    name: "Satating Machine 300 CRS"
  },
  {
    image: tmtRoller,
    name: "Tmt Roller Conveyor"
  },
  {
    image: billerTransfer,
    name: "Billet Transfer Trolly"
  },
  {
    image: millWheel,
    name: "Mill Wheel"
  },
  {
    image: chain,
    name: "Chain Sprocket"
  },
  {
    image: pulloutPinch,
    name: "Pullout Pinch Roll"
  },
  {
    image: barBundling,
    name: "Bar Bundling Machine"
  },
  {
    image: mill1,
    name: "Rolling Mill Accessories"
  },
  {
    image: mill2,
    name: "Rolling Mill Accessories"
  },
  {
    image: mill3,
    name: "Rolling Mill Accessories"
  },
  {
    image: mill4,
    name: "Rolling Mill Accessories"
  },
  {
    image: mill5,
    name: "Rolling Mill Accessories"
  },
  {
    image: mill6,
    name: "Rolling Mill Accessories"
  },
  {
    image: mill7,
    name: "Rolling Mill Accessories"
  },
  {
    image: mill8,
    name: "Rolling Mill Accessories"
  },
  {
    image: rollingMillsMachinery,
    name: "Rolling Mills Machinery Parts"
  },
]

function Products() {
  return (
    <div className="min-h-screen bg-gray-50" id='products'>
      {/* Header Section */}
      <div className="text-black py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
            Our Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our range of high-quality industrial solutions
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productList.map((product, index) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
              style={{ aspectRatio: '1/1' }}
            >
              {/* Image Container - Takes up 70% of card height */}
              <div className="relative h-[170px] bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container - Takes up 30% of card height */}
              <div className="p-4 flex items-center justify-center flex-col">
                <h3 className="text-sm font-semibold text-gray-900 text-center leading-tight mb-6">
                  {product.name}
                </h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View more</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="self-center mb-10">{product.name}</DialogTitle>
                      <DialogDescription>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique assumenda molestias voluptates eius tempore eveniet ipsam, saepe totam unde quidem cupiditate quo magnam et. Quibusdam odit ratione nesciunt eius. Et id nam laborum quas. Ipsa minima exercitationem officiis? Reprehenderit facilis blanditiis laboriosam consequuntur dolores, et eveniet quisquam incidunt aut modi mollitia quos sint aliquam architecto! Possimus architecto facere saepe. Blanditiis at nobis aut corporis culpa libero quasi quam beatae debitis quae distinctio suscipit sapiente ipsa quod eveniet ipsum tempore optio, unde commodi facere. Recusandae aliquam doloribus, facere omnis, incidunt quis cumque, eligendi molestias quisquam natus ducimus nesciunt totam possimus nobis!</h1>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        {productList.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No products available</h3>
            <p className="text-gray-600 text-lg">Check back later for new products.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products