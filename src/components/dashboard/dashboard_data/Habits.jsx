import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Habits() {
  const [habit, setHabit] = useState({
    id: "",
    user: "",
    name: "",
    description: "",
    created_at: "",
    note_entry: "",
  });

  const url = "https://wallflowerserver.herokuapp.com/";

  axios({
    method: "get",
    url: url + `/userdata/habits/`,
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );

  return <div></div>;
}
