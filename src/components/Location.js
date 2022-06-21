import { useState } from 'react';
import Results from './Results';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Location = () => {
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    //call react router redirect/pass location
    //export location to results page and redirect there to call api/display weather

    console.log(location);
  };

  return (
    <div className="grid">
      <div className="col-12">
        {!submitted ? (
          <Card
            style={{
              minHeight: '700px',
              backgroundColor: '#ceebf3',
              margin: '20px'
            }}>
            <div>
              <InputText
                id="location"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <br></br>
            <Button
              className="p-button-info"
              style={{ padding: '10' }}
              label="Submit"
              onClick={() => handleSubmit()}
            />
          </Card>
        ) : (
          <Results location={location} />
        )}
      </div>
    </div>
  );
};

export default Location;
