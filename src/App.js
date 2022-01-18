import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <h3>ROI Calculator</h3>
    <div class="form-check form-switch" id ="toggle-id">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">USD</label>
  <img src="data:image/jpeg;base64,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" alt="cake"/>cake
</div>
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="0.00 USD" aria-label="Recipient's username" />

</div>
<button type="button" class="btn btn-light"><b>$1000</b></button>
<button type="button" class="btn btn-light"><b>$100</b></button>
 
<h5> <b>Timeframe  </b></h5>
<button class="button"><b>1 Day</b></button>
<button class="button"><b>7 Day</b></button>
<button class="button"><b>30 Day</b></button>
<button class="button"><b>1 Year</b></button>
<button class="button"><b>5 Year</b></button>

<h5> <b>Enable Accelerated APY</b></h5>
<div class="form-check form-switch" id ="toggle-id">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
  </div>

<div class ="tier">
  <h5>Select Tier</h5>
  <button class="button"><b>Tier 1</b></button>
<button class="button"><b>Tier 2</b></button>
<button class="button"><b>Tier 3</b></button>
<button class="button"><b>Tier 4</b></button>
<button class="button"><b>Tier 5</b></button>

  </div>
  <div class = "footer1">
  <h5>Roi at current rates</h5>
  <input type="text" class="form-control" placeholder="0.00 USD" aria-label="Recipient's username" />
  </div>


    </>
      );
}

export default App;
