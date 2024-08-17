import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { BsArrowDownSquare } from "react-icons/bs";

function Cards({ img, category }) {
  return (
    <div>
      <Card className="py-4 border rounded-xl cursor-pointer">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{category}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
            width={270}
          />
        </CardBody>
      </Card>
      <div className="flex justify-center mt-6">
      </div>
    </div>
  );
}

export default Cards;
