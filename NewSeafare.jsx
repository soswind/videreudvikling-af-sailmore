export default function NewSeafare() {
  return(
    <>
    <h2>Post new seafare</h2>
    <form method="POST" className="seafare-form" action="/api/create_seafare.php">
    
    <label className="form-label" htmlFor="title">Title:</label>
    <input className="single" type="text" name="title" id="title" placeholder="Example: 120 day seafare on luxus boat" />

    <label className="form-label" htmlFor="description">Description:</label>
    <textarea name="description" id="description" columns="10" rows="5" placeholder="What makes your seafare special?"></textarea>

    <div className="form-grid">
        <div><label className="form-label" htmlFor="seafare_area">Area:</label>
          <select name="seafare_area" id="seafare_area">
            <option value="asia">Asia</option>
            <option value="atlantis_sea">Atlantis Sea</option>
            <option value="caribbia">Caribbira</option>
            <option value="copenhagen">Copenhagen, Denmark</option>
            <option value="denmark">Denmark</option>
            <option value="europe">Europe</option>
            <option value="faroe">Faröe & Shetland</option>
            <option value="phillipines">Phillipines</option>
            <option value="irish_ocean">Irish Ocean</option>
            <option value="ireland">Ireland around</option>
            <option value="medirian">Medirian Ocean</option>
            <option value="indonesia">Raja Ampat, Indonesia</option>
            <option value="stillehavet">Stillehavet</option>
            <option value="gb">Great Britain</option>
          </select>
        </div>

        <div>
          <label className="form-label" htmlFor="destination">Destination:</label>
          <input type="text" name="destination" id="destination" placeholder="Example: Japan" />
        </div>


      <div>  
        <label className="form-label" htmlFor="start_date">Start date:</label>
        <input type="date" name="start_date" id="start_date" />
      </div>

      <div>
        <label className="form-label" htmlFor="end_date">End date:</label>
        <input type="date" name="end_date" id="end_date" />
      </div>

      <div>  
        <label className="form-label" htmlFor="start_time">From:</label>
        <input type="time" name="start_time" id="start_time" />
      </div>

      <div>  
        <label className="form-label" htmlFor="end_time">To:</label>
        <input type="time" name="end_time" id="end_time" />
      </div>
    </div>

    <label className="form-label" htmlFor="price">Price:</label>
    <input className="single" type="number" name="price" id="price" placeholder="Prices listed in DKK"/>

<button className="form-button" type="submit">Submit</button>
    
    </form>
    </>
  )
}

// Title, destination, seafare_description, start_date, end_date, start_time end_time, price, seafare_area 