import { useState } from "react";
import "./App.css";
import Form from "./components/From/Form";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    const newProfiles = [...profiles, profile];
    setProfiles(newProfiles);
  };

  return (
    <div className="App">
      <Form addProfile={addProfile} />
      <ProfileCard profiles={profiles} />
    </div>
  );
};

export default App;
