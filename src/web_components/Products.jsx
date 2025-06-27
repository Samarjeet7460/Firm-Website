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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const productList = [
  {
    image: helicalGearBox,
    name: "Helical Gear Box",
    desc: "The Helical Gear Box is designed to deliver smooth and quiet power transmission. It is highly efficient and ideal for heavy-duty industrial applications. Built with precision, it reduces vibration and noise during operation. Its helical teeth ensure maximum torque transfer with minimal wear. Perfectly suited for rolling mill machinery and automation systems."
  },
  {
    image: elinmentRolls,
    name: "Elinment Rolls",
    desc: "Elinment Rolls are essential components used in rolling mill stands. They are crafted from high-grade steel for superior strength and durability. Designed to withstand high pressure and temperature in continuous operations. They ensure precise shaping and smooth rolling of billets and bars. Ideal for enhancing mill productivity and surface finish of products."
  },
  {
    image: satatingMachine,
    name: "Satating Machine 300 CRS",
    desc: "The Satating Machine 300 CRS is built for high-speed cutting and shaping. It offers accurate and consistent performance for steel bar processing. Designed with robust materials to ensure long operational life. Its compact structure makes it easy to install and maintain. Essential equipment for precision work in rolling mill lines."
  },
  {
    image: tmtRoller,
    name: "Tmt Roller Conveyor",
    desc: "The TMT Roller Conveyor is used to transport hot TMT bars efficiently. It supports seamless movement between rolling stages and cooling beds. Made from heat-resistant alloy steel to endure high temperatures. The rollers are precisely aligned for smooth and safe bar movement. An integral part of automation in TMT bar production."
  },
  {
    image: billerTransfer,
    name: "Billet Transfer Trolly",
    desc: "The Billet Transfer Trolly moves billets safely between processing areas. Engineered with heavy-duty frames to handle high loads. Operates smoothly with minimal manual intervention. Reduces downtime and enhances production line efficiency. Widely used in steel plants and rolling mill setups."
  },
  {
    image: millWheel,
    name: "Mill Wheel",
    desc: "The Mill Wheel is a critical rotating component in rolling mills. It is designed to bear high loads and continuous motion. Precision-engineered for excellent balancing and smooth operation. Made from premium steel to resist wear and deformation. Ensures optimal performance of rolling mill machines."
  },
  {
    image: chain,
    name: "Chain Sprocket",
    desc: "Chain Sprockets are used for synchronized motion in rolling machinery. They are manufactured with precision teeth for perfect chain fit. Durable construction allows them to endure heavy industrial use. They play a key role in power transmission systems. Ideal for various roller conveyors and mechanical setups."
  },
  {
    image: pulloutPinch,
    name: "Pullout Pinch Roll",
    desc: "The Pullout Pinch Roll assists in gripping and guiding the metal strip. It helps extract the material from mill stands smoothly. Crafted with hardened steel rolls for extended life. Operates under high pressure and maintains alignment. Crucial for controlled rolling and discharge in mills."
  },
  {
    image: barBundling,
    name: "Bar Bundling Machine",
    desc: "This machine is used to bundle steel bars automatically after rolling. It ensures uniform, tight, and secure packaging of finished bars. Reduces manual labor and speeds up dispatch preparation. Made with corrosion-resistant material for long-term use. Highly effective in improving post-production efficiency."
  },
  ...[
    mill1, mill2, mill3, mill4, mill5, mill6, mill7, mill8
  ].map(image => ({
    image,
    name: "Rolling Mill Accessories",
    desc: "Our Rolling Mill Accessories include guides, couplings, spindles, and more. Each part is manufactured to meet exact industrial standards. They enhance machine performance and reduce downtime. Ideal for customization and upgrades in rolling mill systems. Tested for durability and compatibility with major mill brands."
  })),
  {
    image: rollingMillsMachinery,
    name: "Rolling Mills Machinery Parts",
    desc: "These parts include essential spares for all types of rolling mills. From gearboxes to stands, each part supports uninterrupted operation. They are fabricated from high-quality materials for maximum life. Precision engineering ensures perfect fit and smooth functionality. A complete solution for maintaining and repairing mill machinery."
  }
]

function Products() {
  return (
    <div className="min-h-screen bg-gray-50" id="products">
      {/* Header */}
      <div className="py-16 bg-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our range of high-quality industrial solutions tailored for rolling mills and steel plants.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {productList.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 w-[270px] h-[300px]"
            >
              <div className="relative h-[180px] bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col items-center justify-between h-[120px]">
                <h3 className="text-base font-semibold text-center text-gray-800 mb-4 leading-tight">
                  {product.name}
                </h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="text-sm">View More</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-center text-lg font-semibold mb-4">
                        {product.name}
                      </DialogTitle>
                      <DialogDescription className="text-gray-700 text-sm leading-relaxed text-justify">
                        {product.desc}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {productList.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Available</h3>
            <p className="text-gray-600 text-lg">Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
