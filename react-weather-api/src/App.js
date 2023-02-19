import { useState } from "react";
import axios from "axios";
import Title from "./components/Title";//Title.jsのTitleコンポーネントがApp.jsに取り込まれる
import Form from "./components/Form";
import Results from "./components/Results";


import './App.css';
import { set } from "lodash";

function App() {
  const [city,setCity]=useState("");//「city」にユーザーが入力した都市名が保管される。「setCity」がstateにデータを書き込んだり操作したりする仕組みのこと。("")はstateの初期値。
  const [results,setResults]=useState({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });
  //下記は都市名のデータをAPIに渡している。
  const getWeather = (e) => {
      e.preventDefault();
      axios.get(`https://api.weatherapi.com/v1/current.json?key=70244d26e5bf4b948c671556231902&q=${city}&aqi=no`)
      //resにはAPIから送り返されたデータが入っている。setResultsを使うとresultstateにデータを書き込める
          .then(res => {
            setResults({
              country:res.data.location.country,
              cityName:res.data.location.name,
              temperature:res.data.current.temp_c,
              conditionText:res.data.current.condition.text,
              icon:res.data.current.condition.icon
            })
          })
  }
  return (
    <div className="wrapper">
      <div className="sub-wrapper">
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
