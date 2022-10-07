import axios from "axios";
import React from "react";

const baseUrl = "http://192.168.10.4:5100/";

function ResultElections() {
  const [data, setData] = React.useState();

  axios.get(baseUrl).then((resp) => {
    setData(resp.data);
  });

  return JSON.stringify(data);
}

export default ResultElections;
