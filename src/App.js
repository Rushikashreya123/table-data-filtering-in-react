import "./App.css";
import Tabledata from "./Tabledata";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import DisplayingTrashData from "./DisplayingTrashData";
import DisplayStarredData from "./DisplayStarredData";
import { useRef } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [Trash, setTrash] = useState([]);
  const [Data, setData] = useState([]);
  const [Starred, SetStarred] = useState([]);
  const [selectedGender, setSelectedGender] = useState("All");
  const [filterData, setfilterData] = useState([]);
  //................. searching text getting updated using setSearchText function ti is used to hold input field data......................
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };
  //....................... by clicking delete that specific item is deleting using index.................................
  const handleDelClick = (index) => {
    setTrash([...Trash, filterData[index]]);
    // setData([...Data.filter((person, presentindex) => index !== presentindex)]);
    setfilterData([
      ...filterData.filter((person, presentindex) => index !== presentindex),
    ]);

    // console.log(Trash);
  };
  // ...............................this function is used to get indexes of specific start which is clicked..........................
  const handleStarClick = (index) => {
    SetStarred([...Starred, Data[index]]);
    // console.log(Starred);
  };
  //..................................... this function is used to get specific item isselected in drop down.......................
  const handleSelector = (e) => {
    //  console.log(e.target.value)
    // console.log(selectedGender, "selector");
    setSelectedGender(e.target.value);
    const filteredData = filterDataByGender(Data, e.target.value);
    setfilterData(filteredData);
  };
  // ............................this topref and handleHomeClick is used to make a scroll from bottom to top.......................
  const topRef = useRef(null);
  const handleHomeClick = () => {
    topRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    
  };
  //.............................. this filtered data is used to search data according data entered in input field........................
  const filteredData = Data.filter((user) => {
    return (
      user.id.toString().toLowerCase().includes(searchText.toLowerCase()) ||
      user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchText.toLowerCase()) ||
      user.ip_address.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  //............................ this filteredDataByGender is used to filter the data witho both inputfield and dropdown........................
  // const filteredDataByGender =
  //   selectedGender === "All"
  //     ? filteredData
  //     : filteredData.filter(
  //         (user) => user.gender.toLowerCase() === selectedGender.toLowerCase()
  //       );
  //..................... this function is used to upadate filtetred data array according to ower selection.........................
  function filterDataByGender(data, gender) {
    data = Trash.length > 0 ? filterData :Data
    if (gender === "All") {
      return data;
    } else {
      return data.filter((user) => user.gender === gender);
    }
  }


  // useEffect(()=>{

  // },[filterData])
  // ..................................to get API data using Fetch API........................................
  useEffect(() => {
    fetch("https://mocki.io/v1/d1f16339-9aec-4696-b302-7fd0cb0db28b")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setfilterData(json);
      });
  }, []);

  return (
    <div className="App">
      {/* //   header component */}
      <Header
        onSearchTextChange={handleSearchTextChange}
        onhandleSelector={handleSelector}
        handleHomeClick={handleHomeClick}
        topRef={topRef}
      />
      {/* trash data component */}
      <DisplayingTrashData Trash={Trash} />
      {/* starred data component */}
      <DisplayStarredData Starred={Starred} />
      {/* table data component to display table data */}
      <Tabledata
        onhandleDelClick={handleDelClick}
        onhandleStarClick={handleStarClick}
        Data={filterData}
      />
    </div>
  );
}

export default App;