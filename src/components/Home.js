import { useContext } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { UserContext } from './UserContext';
import { login } from '../utils/login';

const Home = () => {
  const changeWindow = () => {
    window.location.href = '/location';
  };

  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <div className="grid">
      <div className="col-12">
        <Card
          style={{
            minHeight: '700px',
            backgroundColor: '#ceebf3',
            margin: '20px'
          }}>
          <h1>{JSON.stringify(user, null, 2)}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore dicta
            praesentium earum libero. Perferendis, eos mollitia soluta veniam hic quos iure aliquam,
            necessitatibus voluptates dolorum tenetur dignissimos eveniet in.
          </p>
          <Button
            className="p-button-info"
            label="Check The  Weather"
            onClick={() => changeWindow()}></Button>
          {user ? (
            <Button
              //call server to logout
              onClick={() => {
                setUser(null);
              }}>
              Logout
            </Button>
          ) : (
            <Button
              className="p-button-info"
              label="Login"
              onClick={async () => {
                const user = await login();
                setUser(user);
              }}></Button>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Home;
