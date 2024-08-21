import React from "react";

function WomenMeasurement({handleChange,formData}) {
  return (
    <div className="grid gap-6 mt-6">
      <div className="mb-4">
        <label htmlFor="CL" className="block text-sm font-medium text-gray-700">
          CL
        </label>
        <input
          type="text"
          id="CL"
          name="CL"
          value={formData.CL}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="WL" className="block text-sm font-medium text-gray-700">
          WL
        </label>
        <input
          type="text"
          id="WL"
          name="WL"
          value={formData.WL}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="CL" className="block text-sm font-medium text-gray-700">
          L
        </label>
        <input
          type="text"
          id="L"
          name="L"
          value={formData.L}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="SH" className="block text-sm font-medium text-gray-700">
          SH
        </label>
        <input
          type="text"
          id="SH"
          name="SH"
          value={formData.SH}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="SL" className="block text-sm font-medium text-gray-700">
          SL
        </label>
        <input
          type="text"
          id="SL"
          name="SL"
          value={formData.SL}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="SW" className="block text-sm font-medium text-gray-700">
          SW
        </label>
        <input
          type="text"
          id="SW"
          name="SW"
          value={formData.SW}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="AH" className="block text-sm font-medium text-gray-700">
          AH
        </label>
        <input
          type="text"
          id="AH"
          name="AH"
          value={formData.AH}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="FC" className="block text-sm font-medium text-gray-700">
          FC
        </label>
        <input
          type="text"
          id="FC"
          name="FC"
          value={formData.FC}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      {/* Repeat the same structure for all other fields */}
      <div className="mb-4">
        <label
          htmlFor="CH"
          cCHassName="block text-sm font-medium text-gray-700"
        >
          CH
        </label>
        <input
          type="text"
          id="CH"
          name="CH"
          value={formData.CH}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="BR" className="block text-sm font-medium text-gray-700">
          BR
        </label>
        <input
          type="text"
          id="BR"
          name="BR"
          value={formData.BR}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      {/* Repeat the same structure for all other fields */}
      <div className="mb-4">
        <label htmlFor="W" className="block text-sm font-medium text-gray-700">
          W
        </label>
        <input
          type="text"
          id="W"
          name="W"
          value={formData.W}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="SW2"
          className="block text-sm font-medium text-gray-700"
        >
          SW2
        </label>
        <input
          type="text"
          id="SW2"
          name="SW2"
          value={formData.SW2}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      {/* Repeat the same structure for all other fields */}
      <div className="mb-4">
        <label htmlFor="SE" className="block text-sm font-medium text-gray-700">
          SE
        </label>
        <input
          type="text"
          id="SE"
          name="SE"
          value={formData.L}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="SLIT"
          className="block text-sm font-medium text-gray-700"
        >
          SLIT
        </label>
        <input
          type="text"
          id="SLIT"
          name="SLIT"
          value={formData.SLIT}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      {/* Repeat the same structure for all other fields */}
      <div className="mb-4">
        <label htmlFor="FN" className="block text-sm font-medium text-gray-700">
          FN
        </label>
        <input
          type="text"
          id="FN"
          name="FN"
          value={formData.FN}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="BN" className="block text-sm font-medium text-gray-700">
          BN
        </label>
        <input
          type="text"
          id="BN"
          name="BN"
          value={formData.BN}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      {/* Repeat the same structure for all other fields */}
      <div className="mb-4">
        <label htmlFor="NW" className="block text-sm font-medium text-gray-700">
          NW
        </label>
        <input
          type="text"
          id="NW"
          name="NW"
          value={formData.NW}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="BL" className="block text-sm font-medium text-gray-700">
          BL
        </label>
        <input
          type="text"
          id="BL"
          name="BL"
          value={formData.BL}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      {/* Repeat the same structure for all other fields */}
      <div className="mb-4">
        <label htmlFor="BW" className="block text-sm font-medium text-gray-700">
          BW
        </label>
        <input
          type="text"
          id="BW"
          name="BW"
          value={formData.BW}
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
  );
}

export default WomenMeasurement;
