import React, { useState, useEffect } from "react";
import HelloWorld from "../components/HelloWorld";
import axois from "axios";

function Home() {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axois("https://mock-github-api.herokuapp.com/mock-github-api/example").then((response) => {
      setData(response.data);
    });
  }, []);

  const setData = ({ login, avatar_url }) => {

    // console.log("ttt", login);
    // console.log("ddd", avatar_url);
    

    setUserName(login);
    setAvatar(avatar_url);
  };

  const handleSearch = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    axois(`https://mock-github-api.herokuapp.com/mock-github-api/${userInput}`)
      .then((response) => {

        setError(null);

        // console.log("ccc", error);


        // console.log("xxxx", response);
        
        setData(response.data);
      })
      .catch((error) => {
       // console.log(error);
       //alert("error");
      //  console.log("yyy", error);


        if (error.response) {
          setError("Not Found");
        } else {
          setData(error.response.data);
        }
      });
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
            value="search"
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
