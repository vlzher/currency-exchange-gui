import React, {useState} from 'react';
import Title from "../Title";
import CurrencyPickers from "../CurrencyPickers";
import InputZone from "../InputZone";
import BottomZone from "../BottomZone";


const CurrencyExchangePage = () => {
    const [firstCurrency, setFirstCurrency] = useState('USD');
    const [secondCurrency, setSecondCurrency] = useState('BYN');

    const [firstValue, setFirstValue] = useState("0.0");
    const [secondValue, setSecondValue] = useState("0.0");

    const[date, setDate] = useState(new Date().toISOString().slice(0,10));
    const [interbankRate, setInterbankRate] = useState("+/- 0%");

    const [isCorrect, setIsCorrect] = useState(true);
    function checkIsCorrect(input) {
        if(
            !isNaN(+firstValue) ||
            !isNaN(+secondValue) ||
            firstValue === "" ||
            secondValue === "" ||
            date !== "Invalid Date" ||
            !isNaN(+date)) return false;
        return true;
    }
    function calculate() {
        setIsCorrect(checkIsCorrect());
    }
    function reverseCurrencies() {
        let temp = firstCurrency;
        setFirstCurrency(secondCurrency);
        setSecondCurrency(temp);
    }
    return (
        <>
            <Title currencies={[firstCurrency,secondCurrency]}/>
            <CurrencyPickers currencies={[firstCurrency,secondCurrency]} setCurrencies={[setFirstCurrency,setSecondCurrency]}/>
            <InputZone values={[firstValue,secondValue]} setValues={[setFirstValue, setSecondValue]} reverseCurrencies={() => reverseCurrencies()}/>
            <BottomZone date={date} setDate={setDate} interbankRate={interbankRate} setInterbankRate={setInterbankRate}/>
        </>
    );
};

export default CurrencyExchangePage;