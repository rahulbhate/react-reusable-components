import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import data from '../src/data/data';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Accordian from '../src/components/Accordian/Accordian';
import Form from './components/Form/Form';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import WrappedMap from '../src/components/WrappedMap/WrappedMap';
import Calendar from '../src/components/Calendar/Calendar';
import Navigation from '../src/components/Navigation/Navigation';
import Table from '../src/components/Table/Table';

function App() {
  return (
    <div className="container-fluid">
      {/* 
      <div style={{ width: '100vh', height: '100vh' }}>
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCM4LPDseLxG7wlucJxgiMuKUSNnOlxCwE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
     */}
      <div>
        <Accordian label="Offer Documents" data={data}>
          <div>
            <p>
              Please read all parts of the PDS. You should assess whether the
              product is appropriate for you and speak to your financial adviser
              before making a decision to invest in this product. Past
              performance is no indication of future performance
            </p>
          </div>
        </Accordian>
        <Accordian label="Fund Performance Report" data={data}>
          <div>
            <p>
              The Fund offers an opportunity for investors to participate in a
              managed investment scheme managed by an experienced investment
              team, APSEC Funds Management Pty Ltd (Investment Manager, ABN 48
              152 440 723, Corporate Authorised Representative (411859) of APSEC
              Compliance & Administration Pty Ltd (ABN 30 142 148 409; AFSL
              345443)). Equity Trustees Limited (ABN 46 004 031 298) is the
              responsible entity of the Atlantic Pacific Australian Equity Fund
              ARSN 158 861 155 and the holder of AFS Licence number 240975.
            </p>
          </div>
        </Accordian>
        <Accordian label="Audited Reports" data={data}>
          <div>
            <p>Click the links below to see the following documentation:</p>
          </div>
        </Accordian>
        <Accordian label="Key features of the Fund" data={data}>
          <div>
            <ul>
              <li>
                The Investment manager employs its Quadruple Alpha Investment
                Strategy which focuses on outperforming overall market cycles by
                capturing upside returns while aiming to reduce downside risk.
              </li>
              <li>
                Share market-type returns, with lower than share market-type
                volatility
              </li>
              <li>
                The Fund generated an annualised average return of 8.3% p.a.
                since inception (June 2013)
              </li>
              <li>Cumulative returns 61.0% (as at April 2019)</li>
              <li>
                Largest drawdown of -7.1% compared to the S&P/ASX200
                Accumulation Index of -13.7%
              </li>
            </ul>
          </div>
        </Accordian>
        <div>
          <Form />
          <Calendar />
          <p>
            The Fund offers an opportunity for investors to participate in a
            managed investment scheme managed by an experienced investment team,
            APSEC Funds Management Pty Ltd (Investment Manager, ABN 48 152 440
            723, Corporate Authorised Representative (411859) of APSEC
            Compliance & Administration Pty Ltd (ABN 30 142 148 409; AFSL
            345443)). Equity Trustees Limited (ABN 46 004 031 298) is the
            responsible entity of the Atlantic Pacific Australian Equity Fund
            ARSN 158 861 155 and the holder of AFS Licence number 240975.
          </p>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
