import { useState } from "react";
import axios from "axios";
const Form=(props)=>{
    const [city,setCity]=useState("");//「city」にユーザーが入力した都市名が保管される。「setCity」がstateにデータを書き込んだり操作したりする仕組みのこと。("")はstateの初期値。
    //下記は都市名のデータをAPIに渡している。
    const getWeather = (e) => {
        e.preventDefault();
        axios.get("https://api.weatherapi.com/v1/current.json?key=70244d26e5bf4b948c671556231902&q=London&aqi=no")
        //resにはA}PIから送り返されたデータが入っている
            .then(res => console.log(res))
    }
    return(
        <form>
            {/* onChangeを使用することでinputに入力されたデータをsetCityに渡し、cityに書き込まれる*/}
            {/* eにユーザーが入力した都市名の情報を入れる。その情報を取得するためにはeの中のtargetにアクセスし、その中のvalueへいく必要がある。eをeventやeveと書く人もいる。 */}
            {/* eをsetCityへ=>を使って渡しsetCity内でvalueにアクセスしている。 */}

            <input type="text" className="city-form" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>

    );
};
export default Form;