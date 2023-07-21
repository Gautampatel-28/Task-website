import React, { useEffect, useState } from "react";
import { fetchData } from "../api/Api";
import "../App.css";

const Datapage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
  const [filterValue, setFilterValue] = useState(""); // State to hold the user input

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setFilteredData(data); // Initialize filteredData with the complete data
    });
  }, []);

  const handleFilterChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setFilterValue(inputValue);

    const filteredResults = data.filter(
      (post) =>
        post.name.toLowerCase().includes(inputValue) 
        // ||
        // post.body.toLowerCase().includes(inputValue)
    );
    setFilteredData(filteredResults);
  };

  return (
    <>
    <div className="input-center">
    <input
          className="input-search"
          type="text"
          placeholder="Enter any name from API..."
          value={filterValue}
          onChange={handleFilterChange}
        />
    </div>
      <div className="data-page">
    
        {filteredData.map((post,id) => {
          console.log(post)
          const {  name } = post;
          return (
            <div className='center-container'>
            <div className='flex-container' key={id}>
              <div className="card">
                <h2>{name}</h2>
                {/* <p>{body}</p> */}
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Datapage;
