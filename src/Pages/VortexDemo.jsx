import React, { useEffect, useState } from "react";
import { Vortex } from "../components/ui/vortex";
import { IoNotificationsOutline, IoClose } from "react-icons/io5";
import useAxios from "../axios";
import { useNavigate } from "react-router-dom";

export function VortexDemo() {
  const [notificationCount, setNotificationCount] = useState(0);
  const axiosInstance = useAxios();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await axiosInstance.get("measurement/order-count/");
        setNotificationCount(response.data.count);
      } catch (error) {
        console.error("Error fetching order count:", error);
      }
    };

    fetchOrderCount();
  }, [axiosInstance]);

  const handleNotificationClick =  () => {
    navigate('/orderdetails')
  };

  return (
    <div className="relative w-full mx-auto h-[30rem] overflow-hidden">
      <div className="absolute top-7 right-9 z-50">
        <div className="relative">
          <IoNotificationsOutline
            className="text-3xl cursor-pointer"
            onClick={handleNotificationClick}
          />
          {notificationCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>
      </div>

      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <img
          className="max-w-xl mt-6"
          src="https://linencentre.in/measurement/images/06.png"
          alt="Measurement Image"
        />
      </Vortex>
    </div>
  );
}
