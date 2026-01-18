import React from 'react'

function Kfull_sum() {
  return (
    <div className='mt-5'>
      <table className='table-fixed border-collapse border-3 w-5/6 mx-auto items-center justify-center'>
        <thead>
            <tr className='bg-gray-200'>
                <th className='border-2 py-2.5 border-black text-center'>C | AB</th>
                <th className='border-2 py-2.5 border-black text-center'><span className='overline'>A</span> <span className='overline'>B</span></th>
                <th className='border-2 py-2.5 border-black text-center'><span className='overline'>A</span> B</th>
                <th className='border-2 py-2.5 border-black text-center'>A B</th>
                <th className='border-2 py-2.5 border-black text-center'>A <span className='overline'>B</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border-2 border-black py-2.5 text-center'><span className='overline'>C</span></td>
                <td className='border-2 border-black py-2.5 text-center'>0</td>
                <td className='border-2 border-black py-2.5 text-center'><span className='border-2 border-black bg-yellow-200 px-3.5 py-1.5'>1</span></td>
                <td className='border-2 border-black py-2.5 text-center'>0</td>
                <td className='border-2 border-black py-2.5 text-center'><span className='border-2 border-black bg-yellow-200 px-3.5 py-1.5'>1</span></td>
            </tr>
            <tr>
                <td className='border-2 border-black py-2.5 text-center'>C</td>
                <td className='border-2 border-black py-2.5 text-center'><span className='border-2 border-black bg-yellow-200 px-3.5 py-1.5'>1</span></td>
                <td className='border-2 border-black py-2.5 text-center'>0</td>
                <td className='border-2 border-black py-2.5 text-center'><span className='border-2 border-black bg-yellow-200 px-3.5 py-1.5'>1</span></td>
                <td className='border-2 border-black py-2.5 text-center'>0</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Kfull_sum

