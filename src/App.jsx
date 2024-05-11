import { useState } from 'react'
import Input from './components/Input'
import useCurrenyCode from './hooks/currencyCode'
import useCountryCode from './hooks/countryCode';
import useCurrencySymbols from './hooks/currencySymbols';
import useCurrencyInfo from './hooks/currencyConvertInfo';



function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const fromFlag = useCountryCode(from);
  const toFlag = useCountryCode(to);

  const fromSymbol = useCurrencySymbols(from);
  const toSymbol = useCurrencySymbols(to);

  const currencyCode = useCurrenyCode();
  const options = Object.keys(currencyCode);

  const clear = () => {
    setAmount(0)
    setConvertAmount(0)
  }

  const rate = useCurrencyInfo(from.toLocaleLowerCase(), to.toLocaleLowerCase());

  const [convertAmount, setConvertAmount] = useState(0);
  const convertCurrency = () => {
    setConvertAmount(amount * rate);
    // console.log(convertAmount);
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertAmount)
    setConvertAmount(amount)
  }
  return (
    <>
      <div className='w-full h-screen bg-[url("https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN1cnJlbmN5JTIwY29udmVyc2lvbnxlbnwwfHwwfHx8MA%3D%3D")] bg-cover flex justify-center items-center flex-col '>
        <div className=' w-[95%] rounded-lg sm:w-[60%] py-4 bg-blue-900/30 border-[3px] '>

          <h1 className='text-white text-3xl sm:text-4xl text-center font-bold  mb-8'>Currency Convertor</h1>
          <Input
            label={"From"}
            amount={amount}
            currencySymbol={fromSymbol}
            currencyOption={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            flag={fromFlag}
          />
          <div className=" w-full flex justify-center my-1 ">
            <button
              type="button"
              className="  border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <Input
            label={"To"}
            amount={convertAmount}
            currencySymbol={toSymbol}
            currencyOption={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            flag={toFlag} />

          <div className='flex justify-evenly mx-auto w-[90%] sm:w-full py-2 mt-4 font-semibold'>
            <button type="submit" className=" bg-blue-500 text-white px-4 py-3 rounded-lg border-2" onClick={clear} >
              Clear
            </button>
            <button type="submit" className=" bg-blue-500 text-white px-4 py-3 rounded-lg border-2" onClick={convertCurrency} >
              Convert {from} to {to}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
