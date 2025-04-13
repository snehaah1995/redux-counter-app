import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './CounterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-bold'>Counter: {count}</h1>

      <div className='flex gap-4'>
        <button
          onClick={() => dispatch(increment())}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
          Decrement
        </button>

        <button
          onClick={() => dispatch(reset())}
          className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'>
          Reset
        </button>
      </div>

      <div className='mt-6 flex gap-2'>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className='border p-2 rounded'
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          Increment by {amount}
        </button>
      </div>
    </div>
  )
}

export default Counter
