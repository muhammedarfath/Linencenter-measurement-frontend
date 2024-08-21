import React from "react";

function PantOrderDetails({handleChange,formData}) {
  return (
    <>
      <div className="grid lg:grid-cols-5 gap-6 mt-6">
        <div className="mb-5">
          <label
            htmlFor="full_length"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Length
          </label>
          <input
            type="number"
            step="0.01"
            name="full_length"
            id="full_length"
            placeholder="Enter full length"
            value={formData.full_length}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="bottom"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Bottom
          </label>
          <input
            type="number"
            step="0.01"
            name="bottom"
            id="bottom"
            placeholder="Enter bottom measurement"
            value={formData.bottom}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="waist"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Waist
          </label>
          <input
            type="number"
            step="0.01"
            name="waist"
            id="waist"
            placeholder="Enter waist measurement"
            value={formData.waist}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="seat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Seat
          </label>
          <input
            type="number"
            step="0.01"
            name="seat"
            id="seat"
            placeholder="Enter seat measurement"
            value={formData.seat}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="loose"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Loose
          </label>
          <input
            type="number"
            step="0.01"
            name="loose"
            id="loose"
            placeholder="Enter loose measurement"
            value={formData.loose}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inside"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Inside
          </label>
          <input
            type="number"
            step="0.01"
            name="inside"
            id="inside"
            placeholder="Enter inside measurement"
            value={formData.inside}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="middle"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Middle
          </label>
          <input
            type="number"
            step="0.01"
            name="middle"
            id="middle"
            placeholder="Enter middle measurement"
            value={formData.middle}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fork"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Fork
          </label>
          <input
            type="number"
            step="0.01"
            name="fork"
            id="fork"
            placeholder="Enter fork measurement"
            value={formData.fork}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="no_pleat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            No Pleat
          </label>
          <input
            type="checkbox"
            name="no_pleat"
            id="no_pleat"
            checked={formData.no_pleat}
            onChange={handleChange}
            className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="two_pleat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Two Pleat
          </label>
          <input
            type="checkbox"
            name="two_pleat"
            id="two_pleat"
            checked={formData.two_pleat}
            onChange={handleChange}
            className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cross_pocket"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Cross Pocket
          </label>
          <input
            type="text"
            name="cross_pocket"
            id="cross_pocket"
            placeholder="Enter cross pocket details"
            value={formData.cross_pocket}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="hook"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Hook
          </label>
          <input
            type="text"
            name="hook"
            id="hook"
            placeholder="Enter hook details"
            value={formData.hook}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="side_pocket"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Side Pocket
          </label>
          <input
            type="text"
            name="side_pocket"
            id="side_pocket"
            placeholder="Enter side pocket details"
            value={formData.side_pocket}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="back_pocket_1"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Back Pocket 1
          </label>
          <input
            type="text"
            name="back_pocket_1"
            id="back_pocket_1"
            placeholder="Enter back pocket 1 details"
            value={formData.back_pocket_1}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="back_pocket_2"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Back Pocket 2
          </label>
          <input
            type="text"
            name="back_pocket_2"
            id="back_pocket_2"
            placeholder="Enter back pocket 2 details"
            value={formData.back_pocket_2}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cu_band"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            CU Band
          </label>
          <input
            type="text"
            name="cu_band"
            id="cu_band"
            placeholder="Enter CU band details"
            value={formData.cu_band}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="over_band"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Over Band
          </label>
          <input
            type="text"
            name="over_band"
            id="over_band"
            placeholder="Enter over band details"
            value={formData.over_band}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="band"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Band
          </label>
          <input
            type="text"
            name="band"
            id="band"
            placeholder="Enter band details"
            value={formData.band}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="button"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Button
          </label>
          <input
            type="text"
            name="button"
            id="button"
            placeholder="Enter button details"
            value={formData.button}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="remarks"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Remarks
          </label>
          <textarea
            name="remarks"
            id="remarks"
            placeholder="Enter any additional remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default PantOrderDetails;
