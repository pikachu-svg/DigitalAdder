import React from "react";

function Khalf() {
  return (
    <div className="mt-5">
      <table className="table-fixed border-3 border-collapse w-4/5 mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-2 border-black px-4 py-2 text-center">A,B</th>
            <th className="border-2 border-black px-4 py-2 text-center"><span className="overline">B</span></th>
            <th className="border-2 border-black px-4 py-2 text-center">B</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-4 py-2 text-center border-2 border-black"><span className="overline">A</span></td>
                <td className="px-4 py-2 text-center border-2 border-black">0</td>
                <td className="px-4 py-2 text-center border-2 border-black">1</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="px-4 py-2 text-center border-2 border-black">A</td>
                <td className="px-4 py-2 text-center border-2 border-black">1</td>
                <td className="px-4 py-2 text-center border-2 border-black">0</td>
            </tr>
        </tbody>
      </table>
      <div className="mt-5">
      <table className="table-fixed border-3 border-collapse w-4/5 mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-2 border-black px-4 py-2 text-center">A,B</th>
            <th className="border-2 border-black px-4 py-2 text-center"><span className="overline">B</span></th>
            <th className="border-2 border-black px-4 py-2 text-center">B</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-4 py-2 text-center border-2 border-black"><span className="overline">A</span></td>
                <td className="px-4 py-2 text-center border-2 border-black">0</td>
                <td className="px-4 py-2 text-center border-2 border-black">0</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="px-4 py-2 text-center border-2 border-black">A</td>
                <td className="px-4 py-2 text-center border-2 border-black">0</td>
                <td className="px-4 py-2 text-center border-2 border-black">1</td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Khalf;
