import './App.css'
import { useState } from "react";


function App() {
  const [discordName, setDiscordName] = useState("");
  const [toramName, setToramName] = useState("");
  const [gender, setGender] = useState("");
  
  
  return (
    <div className="App">
      <h1>VGM Recruitment Form</h1>
      <fieldset>
        <form action="https://sheetdb.io/api/v1/qsuewq852mjtw" method="POST">
          <label> Discord Name * </label>
          <input type="text" name="DiscordName" id="discordname" value={discordName} onChange={(e) => setDiscordName(e.target.value)} placeholder="Enter discord name" required/>
          <label> Toram Name * </label>
          <input type="text" name="ToramName" id="toramname" value={toramName} onChange={(e) => setToramName(e.target.value)} placeholder='Enter toram name' required/>
          <label>Gender*</label>
          <input type="radio" name="Gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}/>Male 
          <input type="radio" name="Gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}/>Female
          <input type="radio" name="Gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)}/>Other
          <button type="submit" value="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
