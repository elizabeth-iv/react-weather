import './App.css';

function App() {
  const api = {
    key: "f5686ded79f599145adc079ee949161e",
    url: "https://api.openweathermap.org/data/2.5/"
  }
  const getTodaysDate = (d) => {
    const months = [
      'January',

      'February',
 
      'March',
 
      'April',
 
      'May',
 
      'June',
 
      'July',
 
      'August',
 
      'September',
 
      'October',
 
      'November',
 
      'December'
    ];

    const days = [
      'Monday',

      'Tuesday',
 
      'Wednesday',
 
      'Thursday',
 
      'Friday',
 
      'Saturday',
 
      'Sunday'
    ]

    var day = days[d.getDay()]; //Fetches day of the week
    var date = d.getDate(); //Fetches the date
    var month = months[d.getMonth()]; //Fetches the month
    var year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className='main'>
      <main> 
        <input type='text' className='search-bar' placeholder='Enter Zipcode'>
        </input>
        <div>
          <div className='weather-container'>
            <div className='weather'>
              <div className='temp'> 65°F </div>
              <div className='condition'> Clear </div>
              <div className='city'> Charlotte </div>
        <br></br>
        <div className='date'>{getTodaysDate(new Date())}</div>
        <br></br>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
