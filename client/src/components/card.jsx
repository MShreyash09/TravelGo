export default function Card({img, country, description, state1, state2, state3, price}) {
      return(
            <>
                  <div class="destination-card">
                        <img src={img} alt={country} />
                        <h3>{country}</h3>
                        <p>{description}</p>
                        <p><b>States covered : </b></p>
                        <ul>
                              <li>{state1}</li>
                              <li>{state2}</li>
                              <li>{state3}</li>
                        </ul>
                        <p>Price :&#8377;<b>{price}</b></p>
                        <button className="exploreBtn">Explore Country</button>
                  </div>
            </>
      );
}