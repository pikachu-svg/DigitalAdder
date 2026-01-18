import React from "react";
import { useState } from "react";
import Kfull_sum from "./Kfull_sum";
import Kfull_carry from "./Kfull_carry";

function Full_Adder() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [cin, setCin] = useState(0);
  const sum = input1 ^ input2 ^ cin;
  const carry = (input1 & input2) | (input1 & cin) | (input2 & cin);
  function InputHandler1() {
    if (input1 === 0) setInput1(1);
    else setInput1(0);
  }
  function InputHandler2() {
    if (input2 === 0) setInput2(1);
    else setInput2(0);
  }
  function CinHandler() {
    if (cin === 0) setCin(1);
    else setCin(0);
  }
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto text-center font-semibold">
        <h1>Click on inputs to toggle the bits </h1>
      </div>
      <div className="w-6/7 flex gap-4 py-4 mx-auto items-center justify-center">
        <h1>Input A</h1>
        <button
          onClick={InputHandler1}
          className="border-2 border-black rounded-xl px-2.5"
        >
          {input1}
        </button>
        <h1>Input B</h1>
        <button
          onClick={InputHandler2}
          className="border-2 border-black rounded-xl px-2.5"
        >
          {input2}
        </button>
        <h1>Cin</h1>
        <button
          onClick={CinHandler}
          className="border-2 border-black rounded-xl px-2.5"
        >
          {cin}
        </button>
      </div>
      <div className="w-7/8 mx-auto flex items-center py-2 gap-7 justify-center">
        <h1 className="px-2">Sum</h1>
        <h1 className="border-2 border-black px-3.5 rounded-xl">{sum}</h1>
        <h1 className="px-2">Carry</h1>
        <h1 className="border-2 border-black px-3.5 rounded-xl">{carry}</h1>
      </div>
      <div className="mt-5">
        <table className="table-fixed border-collapse border-3 border-black w-5/6 mx-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-600 text-center px-1 py-1">
                A
              </th>
              <th className="border-2 border-gray-600 text-center px-1 py-1">
                B
              </th>
              <th className="border-2 border-gray-600 text-center px-1 py-1">
                Cin
              </th>
              <th className="border-2 border-gray-600 text-center px-1 py-1">
                Sum
              </th>
              <th className="border-2 border-gray-600 text-center px-1 py-1">
                Carry
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { A: 0, B: 0, Cin: 0, Sum: 0, Carry: 0 },
              { A: 0, B: 1, Cin: 0, Sum: 1, Carry: 0 },
              { A: 1, B: 0, Cin: 0, Sum: 1, Carry: 0 },
              { A: 1, B: 1, Cin: 0, Sum: 0, Carry: 1 },
              { A: 0, B: 0, Cin: 1, Sum: 1, Carry: 0 },
              { A: 0, B: 1, Cin: 1, Sum: 0, Carry: 1 },
              { A: 1, B: 0, Cin: 1, Sum: 0, Carry: 1 },
              { A: 1, B: 1, Cin: 1, Sum: 1, Carry: 1 },
            ].map((row, idx) => {
              const active =
                row.A === input1 && row.B === input2 && row.Cin === cin;

              return (
                <tr
                  key={idx}
                  className={
                    active
                      ? "bg-green-200 font-semibold transition-all duration-500"
                      : "hover:bg-gray-100"
                  }
                >
                  <td className="border-2 border-gray-600 text-center px-1 py-1">
                    {row.A}
                  </td>
                  <td className="border-2 border-gray-600 text-center px-1 py-1">
                    {row.B}
                  </td>
                  <td className="border-2 border-gray-600 text-center px-1 py-1">
                    {row.Cin}
                  </td>
                  <td className="border-2 border-gray-600 text-center px-1 py-1">
                    {row.Sum}
                  </td>
                  <td className="border-2 border-gray-600 text-center px-1 py-1">
                    {row.Carry}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Kfull_sum />
      <Kfull_carry />
    </div>
  );
}

export default Full_Adder;
