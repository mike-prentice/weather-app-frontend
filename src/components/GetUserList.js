import { useState, useEffect } from 'react';

const GetUserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  console.log(userList);

  return (
    <div className="userlist">
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default GetUserList;
