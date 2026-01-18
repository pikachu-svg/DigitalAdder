import React from "react";

function Khalf_sum() {
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
                <td className="px-4 py-2 text-center border-2 border-black"><span className="border-2 border-black py-1 px-3 bg-yellow-200">1</span></td>
            </tr>
            <tr className="bg-white">
                <td className="px-4 py-2 text-center border-2 border-black">A</td>
                <td className="px-4 py-2 text-center border-2 border-black "><span className="border-2 bg-yellow-200 border-black py-1 px-3">1</span></td>
                <td className="px-4 py-2 text-center border-2 border-black">0</td>
            </tr>
        </tbody>
      </table>
      <h1 className="w-full text-center mt-3.5 text-1xl ">Sum = <span className="overline">A</span>B + A<span className="overline">B</span></h1> 
      <h1 className="w-4/5 mx-auto justify-center items-center flex mt-3.5 text-1xl ">Highlighted cells represent minterms where Sum = 1</h1>   
      
    </div>
  );
}

export default Khalf_sum;
