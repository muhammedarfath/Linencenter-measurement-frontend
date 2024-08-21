import React from "react";

function CommonOrderDetails({
  handleChange,
  formData,
  handleImageChange,
  imagePreview,
}) {
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="mb-5">
        <label
          htmlFor="orderNumber"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Order Number
        </label>
        <input
          type="text"
          name="order_no"
          id="orderNumber"
          placeholder="Order Number"
          value={formData.order_no}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your phone number"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="salesPerson"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Sales Person
        </label>
        <input
          type="text"
          name="saleperson"
          id="salesPerson"
          placeholder="Sales Person"
          value={formData.saleperson}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="bookingDate"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Booking Date
        </label>
        <input
          type="date"
          name="booking_date"
          id="bookingDate"
          value={formData.booking_date}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="deliveryDate"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Delivery Date
        </label>
        <input
          type="date"
          name="delivery_date"
          id="deliveryDate"
          value={formData.delivery_date}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="stylist"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Stylist
        </label>
        <input
          type="text"
          name="stylist"
          id="stylist"
          placeholder="Stylist Name"
          value={formData.stylist}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="measurementMaster"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Measurement Master
        </label>
        <input
          type="text"
          name="measurement_master"
          id="measurementMaster"
          placeholder="Measurement Master"
          value={formData.measurement_master}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="others"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Others
        </label>
        <textarea
          name="others"
          id="others"
          placeholder="Enter any other details"
          value={formData.others}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="invoiceNumber"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Bill/Invoice Number
        </label>
        <input
          type="text"
          name="bill_invoice_no"
          id="invoiceNumber"
          placeholder="Invoice Number"
          value={formData.bill_invoice_no}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="invoiceNumber"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Cut Pieces
        </label>
        <input
          type="text"
          name="Cut_Pieces"
          id="Cut_Pieces"
          placeholder="Cut Pieces"
          value={formData.Cut_pieces}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="trialDate"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Trial Date
        </label>
        <input
          type="date"
          name="trial"
          id="trialDate"
          value={formData.trial}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="deliveryAddress"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Delivery Address
        </label>
        <textarea
          name="delivery_address"
          id="deliveryAddress"
          placeholder="Enter delivery address"
          value={formData.delivery_address}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div class="relative">
        <label
          title="Click to upload"
          for="button2"
          class="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-white before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        >
          <div class="w-max relative">
            <img
              class="w-12"
              src={imagePreview}
              alt="file upload icon"
              width="512"
              height="512"
            />
          </div>
          <div class="relative">
            <span class="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
              Upload a file
            </span>
            <span class="mt-0.5 block text-sm text-gray-500">Max 2 MB</span>
          </div>
        </label>
        <input
          class="hidden"
          type="file"
          name="button2"
          id="button2"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
    </div>
  );
}

export default CommonOrderDetails;
