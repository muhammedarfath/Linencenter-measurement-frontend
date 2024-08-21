import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import MensModal from "../components/modal/MensModal";
import WomensModal from "../components/modal/WomensModal";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-2/4 flex-wrap gap-8 justify-center items-center px-4 py-8 rounded-2xl backdrop-blur bg-white bg-opacity-10">
        <Card className="w-full max-w-xs py-4 rounded-xl flex items-center  cursor-pointer">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <p className="text-tiny uppercase font-bold">Womens</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://i.pinimg.com/564x/f8/27/63/f82763e06ab73de2eac3ce8818c73182.jpg"
              width={270}
            />
          </CardBody>
          <WomensModal />
        </Card>

        <Card className="w-full max-w-xs py-4 rounded-xl cursor-pointer items-center">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <p className="text-tiny uppercase font-bold">Mens</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://i.pinimg.com/564x/c6/27/0f/c6270f503c54ea115769d4ff18432cd6.jpg"
              width={270}
            />
          </CardBody>
          <MensModal />
        </Card>

        {/* <Card className="w-full max-w-xs py-4 rounded-xl cursor-pointer items-center">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <p className="text-tiny uppercase font-bold">Kids</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://i.pinimg.com/564x/37/10/af/3710af0a81b850fcea833ac8e71836db.jpg"
              width={270}
            />
          </CardBody>
          <KidsModal />
        </Card> */}
      </div>
      <div className="flex flex-col sm:flex-row  mt-6">
        <Link to="/orderdetails">
          <button className="px-4 py-2 transition duration-200 rounded-lg text-white border shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
