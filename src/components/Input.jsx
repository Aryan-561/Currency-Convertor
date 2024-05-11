import React from 'react'
import { useId } from 'react'

export default function Input({
    label,
    amount,
    currencyOption = [],
    selectCurrency,
    currencySymbol,
    onCurrencyChange,
    onAmountChange,
    flag

}) {

    const amountInputId = useId();
    return (
        <>
            <div className=' flex items-center  p-2 justify-around mx-auto w-[90%] sm:w-[50vw] font-semibold bg-blue-900  rounded-lg text-white border-2 '>

                <div className=' w-1/2'>
                    <label className='inline-block text mb-3 text-lg' htmlFor={amountInputId}>{label}</label>
                    <div className='bg-blue-500 rounded-md flex  p-1 pl-2 border-2 border-blue-100 text-lg'>

                        <span className='border-r-2 border-solid border-white pr-2'>{currencySymbol}</span>

                        <input type="number"
                            value={amount} id={amountInputId} className='w-[100%] pl-2 rounded-md outline-none bg-transparent'
                            onChange={(e) => {
                                onAmountChange &&
                                onAmountChange(Number(e.target.value))
                            }}
                        />

                    </div>
                </div>

                <div className=' '>
                    <p className='mb-3 text-lg font-bold '>Currency Type</p>
                    <div className='flex gap-1 bg-blue-500 rounded-md px-1 border-2 border-blue-100 justify-around'>
                        <img src={`https://flagsapi.com/${flag}/flat/64.png`} className='w-8 sm:w-12'  />
                        <select name="" className='outline-none bg-blue-500  '
                            value={selectCurrency} id=""
                            onChange={(e) => { onCurrencyChange &&
                                onCurrencyChange(e.target.value)
                            }}
                        >
                            {currencyOption.map((curr) => (
                                <option key={curr} value={curr}>{curr}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}