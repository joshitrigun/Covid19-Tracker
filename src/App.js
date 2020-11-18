import React from "react";
import {MenuItem, FormControl, Select} from "@material-ui/core";
import './App.css';

const App = () => {

  return (
    <div className="app">
      <h1>Covid</h1>
      <FormControl className= "app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default App;
