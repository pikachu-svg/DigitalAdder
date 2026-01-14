import React from "react";
import { useState } from "react";

function Half_Adder() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const sum = input1 ^ input2;
  const carry = input1 & input2;
  function InputHandler1() {
    if (input1 === 0) setInput1(1);
    else setInput1(0);
  }

  function InputHandler2() {
    if (input2 === 0) setInput2(1);
    else setInput2(0);
  }

  return (
    <div className="w-full ">
      <div className="flex items-center px-12 py-2 gap-5">
        <h1 className="px-2">First bit</h1>
        <button
          className="border-2 border-black px-2.5 rounded-xl"
          onClick={InputHandler1}
        >
          {input1}
        </button>

        <h1 className="px-2">Second bit</h1>
        <button
          className="border-2 border-black px-2.5 rounded-xl"
          onClick={InputHandler2}
        >
          {input2}
        </button>
      </div>
      <div className="flex items-center px-12 py-2 gap-5">
        <h1 className="px-4">Sum</h1>
        <h1 className="border-2 border-black px-3.5 rounded-xl">{sum}</h1>
        <h1 className="px-6">Carry</h1>
        <h1 className="border-2 border-black px-3.5 rounded-xl">{carry}</h1>
      </div>
      <div className="mt-5">
        <table className="table-fixed border-collapse border-3 border-gray-800 w-3/4 mx-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-500 px-4 py-2 text-center">
                A
              </th>
              <th className="border border-gray-500 px-4 py-2 text-center">
                B
              </th>
              <th className="border border-gray-500 px-4 py-2 text-center">
                Sum
              </th>
              <th className="border border-gray-500 px-4 py-2 text-center">
                Carry
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { A: 0, B: 0, Sum: 0, Carry: 0 },
              { A: 0, B: 1, Sum: 1, Carry: 0 },
              { A: 1, B: 0, Sum: 1, Carry: 0 },
              { A: 1, B: 1, Sum: 0, Carry: 1 },
            ].map((row, idx) => {
              const active = row.A === input1 && row.B === input2;

              return (
                <tr
                  key={idx}
                  className={
                    active ? "bg-green-200 font-semibold" : "hover:bg-gray-100"
                  }
                >
                  <td className="border border-gray-500 px-4 py-2 text-center">
                    {row.A}
                  </td>
                  <td className="border border-gray-500 px-4 py-2 text-center">
                    {row.B}
                  </td>
                  <td className="border border-gray-500 px-4 py-2 text-center">
                    {row.Sum}
                  </td>
                  <td className="border border-gray-500 px-4 py-2 text-center">
                    {row.Carry}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Half_Adder;
