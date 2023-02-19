const Results = (props) =>{
    return(
        <div className="result-wrapper">
            {/* もし左辺がtrueなら右辺を表示する↓ */}
            {props.results.country && <div　className="results-country">{props.results.country}</div>}
            {props.results.cityName && <div className="results-city-name">{props.results.cityName}</div>}
            {props.results.temperature && <div className="results-temp">{props.results.temperature}<span>℃</span></div>}
            {props.results.conditionText && <div className="results-condition"><img src={props.results.icon} alt="icon" className="weather-icon" /><span>{props.results.conditionText}</span></div>}



            

        </div>

    );
};
export default Results;