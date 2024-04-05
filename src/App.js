import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Governor from "./pages/governors/Governor";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Senator from "./pages/senator/Senator";
import { useEffect, useState } from "react";

function App() {

  const [senators, setSenators] = useState([]);

  const getSenators = async () => {
    try {
      const response = await fetch('https://wordpress-933231-4419286.cloudwaysapps.com/wp-json/wp/v2/senator?_embed');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const posts = data.map(post => ({
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

  useEffect(() => {
    getSenators();
  }, []);


  return (
    <div className="App" style={{ height: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/governor" element={<Governor />} />
        <Route path="/senator" element={<Senator getSenators={getSenators} senators={senators} />} />
        <Route path="/profile/:id" element={<Profile getSenators={getSenators} senators={senators} />} />
      </Routes>
    </div>
  );
}

export default App;
