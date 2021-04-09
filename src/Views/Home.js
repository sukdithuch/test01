import React, { useState, useEffect } from "react";
import HelloWorld from "../components/HelloWorld";
import axois from "axios";

function Home() {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axois("https://api.github.com/users/example").then((response) => {
      setData(response.data);
    });
  }, []);

  const setData = ({ login, avatar_url }) => {
    setUserName(login);
    setAvatar(avatar_url);
  };

  const handleSearch = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    axois(`https://api.github.com/users/${userInput}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setData(error.response.data);
        }
      });
    // if (response.data.message) {
    //     setError(response.data.message);
    //   } else {
    //     setData(response.data);
    //   }
  };

  return (
    <div>
      <div>
        <form>
          <HelloWorld name="People" />
          <p>GitHub UserName</p>
          <input type="text" onChange={handleSearch} />
          <input
            name="submit"
            type="button"
            value="submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <h1>{userName}</h1>
          <div>
            <img src={avatar} alt={userName} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
