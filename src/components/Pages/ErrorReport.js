import React from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../App.css';

const ErrorReport = () =>(
  <CSSTransitionGroup
    transitionName="worksTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div className="page error">
      <h1>Felanmälan</h1>
        <form>
          <div>
            <label for="name">Namn*</label>
            <input type="text" placeholder="namn" name="namn" required />
          </div>

          <div>
            <label for="adress">Adress*</label>
            <input type="text" placeholder="adress" name="adress" required />
          </div>

          <div>
            <label for="roomnumber">Rum/rumsnr*</label>
            <input type="text" name="roomnumber" required />
          </div>

          <div>
            <label for="name">Beskrivning(max 3000 tecken)*</label>
            <textarea></textarea>
          </div>

          <div>
            <label for="email">Mail</label>
            <input type="text" name="email" required />
          </div>

          <div>
            <label for="phone">Telefon</label>
            <input type="text" name="phone" required />
          </div>

    <p>Eran information kommer endast användas i syfte för att åtgärda det
     problem som anmälts. Efter genomfört arbete raderas er information
     från våran databas.</p>
   <button type="submit" class="signupbtn">Skicka in</button>
    </form>
<Link to="/"><li>tillbaka</li></Link>
     </div>
  </CSSTransitionGroup>
  )


export default ErrorReport;
