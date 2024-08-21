import React from "react";

function ShirtOrderDetails({ handleChange, formData }) {
  return (
    <>
      <div className="grid lg:grid-cols-5 gap-6 mt-6">
        <div className="mb-5">
          <label
            htmlFor="length"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Length
          </label>
          <input
            type="number"
            name="length"
            id="length"
            placeholder="Enter length"
            value={formData.length}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="shoulder"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Shoulder
          </label>
          <input
            type="number"
            name="shoulder"
            id="shoulder"
            placeholder="Enter shoulder"
            value={formData.shoulder}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="full_sleeve"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Sleeve
          </label>
          <input
            type="number"
            name="full_sleeve"
            id="full_sleeve"
            placeholder="Enter full sleeve length"
            value={formData.full_sleeve}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="half_sleeve"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Half Sleeve
          </label>
          <input
            type="number"
            name="half_sleeve"
            id="half_sleeve"
            placeholder="Enter half sleeve length"
            value={formData.half_sleeve}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="hs_btm_loose"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Half Sleeve Bottom Loose
          </label>
          <input
            type="number"
            name="hs_btm_loose"
            id="hs_btm_loose"
            placeholder="Enter half sleeve bottom loose"
            value={formData.hs_btm_loose}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="chest"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Chest
          </label>
          <input
            type="number"
            name="chest"
            id="chest"
            placeholder="Enter chest measurement"
            value={formData.chest}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="stomach"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Stomach
          </label>
          <input
            type="number"
            name="stomach"
            id="stomach"
            placeholder="Enter stomach measurement"
            value={formData.stomach}
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
            htmlFor="neck"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Neck
          </label>
          <input
            type="number"
            name="neck"
            id="neck"
            placeholder="Enter neck measurement"
            value={formData.neck}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5"></div>
        <div className="mt-9">
          <h1 htmlFor="body_loose" className=" block text-xl text-[#07074D]">
            Body Loose:
          </h1>
        </div>
        <div className="mb-5">
          <label
            htmlFor="a"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            A
          </label>
          <input
            type="number"
            name="a"
            id="a"
            placeholder="Enter value for A"
            value={formData.a}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="b"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            B
          </label>
          <input
            type="number"
            name="b"
            id="b"
            placeholder="Enter value for B"
            value={formData.b}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="c"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            C
          </label>
          <input
            type="number"
            name="c"
            id="c"
            placeholder="Enter value for C"
            value={formData.c}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="collar_type"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Collar Type
          </label>
          <input
            type="text"
            name="collar_type"
            id="collar_type"
            placeholder="Enter collar type"
            value={formData.collar_type}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="pocket"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Pocket Type
          </label>
          <input
            type="text"
            name="pocket"
            id="pocket"
            placeholder="Enter pocket type"
            value={formData.pocket}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cuff"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Cuff
          </label>
          <input
            type="text"
            name="cuff"
            id="cuff"
            placeholder="Enter cuff type"
            value={formData.cuff}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="kurtha"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Kurtha
          </label>
          <input
            type="text"
            name="kurtha"
            id="kurtha"
            placeholder="Enter kurtha type"
            value={formData.kurtha}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="lp_pady"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            LP Pady
          </label>
          <input
            type="text"
            name="lp_pady"
            id="lp_pady"
            placeholder="Enter LP pady type"
            value={formData.lp_pady}
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="no_pleat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Reverse Cut Way
          </label>
          <input
            type="checkbox"
            name="no_pleat"
            id="no_pleat"
            checked={formData.reverse_cut_way}
            onChange={handleChange}
            className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="no_pleat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Bottom Line Cut
          </label>
          <input
            type="checkbox"
            name="no_pleat"
            id="no_pleat"
            checked={formData.bottom_line_cut}
            onChange={handleChange}
            className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="no_pleat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Straight Cut
          </label>
          <input
            type="checkbox"
            name="no_pleat"
            id="no_pleat"
            checked={formData.straight_cut}
            onChange={handleChange}
            className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="no_pleat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Slit
          </label>
          <input
            type="checkbox"
            name="no_pleat"
            id="no_pleat"
            checked={formData.slit}
            onChange={handleChange}
            className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="no_pleat"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Linen Pady
          </label>
          <input
            type="checkbox"
            name="no_pleat"
            id="no_pleat"
            checked={formData.linen_pady}
            onChange={handleChange}
            className="h-6 w-6 text-[#6A64F1] focus:ring-[#6A64F1] border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="remark"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Remarks
        </label>
        <textarea
          type="text"
          name="remark"
          id="remark"
          placeholder="Remark"
          value={formData.remark}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    </>
  );
}

export default ShirtOrderDetails;
