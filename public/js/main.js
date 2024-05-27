const cityName=document.getElementById("cityName");
const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById("city_name")
const temp=document.getElementById("temp");
const temp_status =document.getElementById("temp_status");
const data_hide=document.querySelector('.middle_layer');
const getInfo = async (event)=>{

    event.preventDefault()

    let cityVal=cityName.value;
    // alert("hi")

    if(cityVal==""){
        city_name.innerText = "Please Write The Name Before Search";
        data_hide.classList.add("data_hide");

    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=3753d69b6013b8412eea56250262b4c3`
            const response=await fetch(url);
            const data=await response.json()
            // console.log(data);
            const ArrData = [data];
            city_name.innerText=`${ArrData[0].name} , ${ArrData[0].sys.country}`;
            temp_real_val.innerText=ArrData[0].main.temp;
            // temp_status.innerText=ArrData[0].weather[0].main;
            let tempMod = ArrData[0].weather[0].main;
            if(tempMod=="Sunny")
            {
                temp_status.innerHTML="<i class='fa-solid fa-sun' style='color: #eccc68;'></i>"
            }
            else if(tempMod=="Clouds")
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;' ></i>";
            }
            else if(tempMod=="Rainy")
            {
                temp_status.innerHTML="<i class='fas fa-rain' style='color: #a4b0be;' ></i>";
            }
            else
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;' ></i>";

            }
            data_hide.classList.add("data_hide");
        
        }
        

        catch{
            city_name.innerText = "Please Enter The City Name Properly";
            data_hide.classList.add("data_hide");
        

        }
       

    }
}
submitBtn.addEventListener("click",getInfo);