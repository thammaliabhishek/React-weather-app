import React,{useState} from 'react'

const FormWeather = () => {
    const [city,setCity]=useState('')
    const [data,setData]=useState([])

   const clickHandler=(e)=>{

    setCity(e.target.value)

   }

   const submitHandler=(e)=>{
     e.preventDefault()
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
        response => response.json()
     ).then(
        data =>{
            const kelvin = data.main.temp;
            const celcius = kelvin - 273.15;
            const cities = city.toUpperCase()
            setData("Temperature at "+cities+"\n"+Math.round(celcius)+"°C"+"⛅");
            setCity("")
        }
     ).catch(error => {
      setData("❌❌❌")
     })
    
}
  return (
    <>
    <div className="card one" style={{width:'400px',height:'400px',margin:'10px',marginLeft:'35%',marginTop:'20vh',boxShadow:'30px 10px 40px black'}}>
        <div className="card-body">
            <h2 className="card-title" style={{color:'black',fontWeight:'bolder'}}>⛅WEATHER APP🌦️</h2>
            <form onSubmit={submitHandler}>
                <input className="m-3" type="text" value={city} onChange={clickHandler} style={{boxShadow:'3px 3px 10px black',border:'none'}}/><br/>
                <button className="btn btn-primary" value={city}>Get Tempareture</button>
            </form>

  <h1 style={{color:'black',}}>{data}</h1><br/>
  <h1>🌍🌍🌦️🌦️</h1>

        </div>


    </div>
    </>
    
  )
}

export default FormWeather
