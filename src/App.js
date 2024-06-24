import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Governor from "./pages/governors/Governor";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/MemberProfile";
import Senator from "./pages/senator/Senator";
import { useEffect, useState } from "react";
import Hor from "./pages/hor/Hor";
import MemberProfile from "./pages/profile/MemberProfile";

function App() {

  const [senators, setSenators] = useState([]);
  const [hor, setHor] = useState([]);

  const getSenators = async (assemblyId) => {
    try {
      const response = await fetch('https://wordpress-933231-4419286.cloudwaysapps.com/wp-json/wp/v2/senator?_embed');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const filteredData = data.filter(post => post.assembly.includes(assemblyId));

      const posts = filteredData.map(post => ({
        id: post.id,
        gender: post.acf.gender,
        dob: post.acf.date_of_birth,
        phone: post.acf.phone_number,
        email: post.acf.email_address,
        title: post.title.rendered,
        featuredImage: post._embedded['wp:featuredmedia'][0].source_url,
        district: post._embedded['wp:term'][1][0]?.name,
        party: post._embedded['wp:term'][2][0]?.name,
      }));

      setSenators(posts);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const getHor = async (assemblyId) => {
    try {
      const response = await fetch('https://wordpress-933231-4419286.cloudwaysapps.com/wp-json/wp/v2/member-hor?_embed');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);

      const filteredData = data.filter(post => post.assembly.includes(assemblyId));

      const posts = filteredData.map(post => ({
        id: post.id,
        gender: post.acf.gender,
        dob: post.acf.date_of_birth,
        phone: post.acf.phone_number,
        email: post.acf.email_address,
        title: post.title.rendered,
        featuredImage: post._embedded['wp:featuredmedia'][0].source_url,
        district: post._embedded['wp:term'][1][0]?.name,
        party: post._embedded['wp:term'][2][0]?.name,
      }));

      setHor(posts);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getSenators(23);
    getHor(23);
  }, []);

  return (
    <div className="App" style={{ height: "100%" }}>
      <Navbar getSenators={getSenators} getHor={getHor}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/governor" element={<Governor />} />
        <Route path="/senator" element={<Senator getSenators={getSenators} senators={senators} />} />
        <Route path="/hor" element={<Hor getHor={getHor} hor={hor}/>} />
        <Route path="/profile/:id" element={<MemberProfile senators={senators} hor={hor} type="senator" />} />
        <Route path="/hor/profile/:id" element={<MemberProfile senators={senators} hor={hor} type="hor" />} />
      </Routes>
    </div>
  );
}

export default App;
