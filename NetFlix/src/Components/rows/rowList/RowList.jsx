import React from "react";
import Row from "../row/Row";
import axios from "../../../utils/Axios";
import Request from "../../../utils/Request";

function RowList() {
  return (
    <>
      <Row title="Trending Now" fetchUrl={Request.fetch1} isLargeRow={false} />
      <Row title="Top Rated" fetchUrl={Request.fetch2} isLargeRow={true} />
      <Row title="Action Movies" fetchUrl={Request.fetch3} isLargeRow={true} />
      <Row title="Comedy Movies" fetchUrl={Request.fetch4} isLargeRow={true} />
      <Row title="Horror movies" fetchUrl={Request.fetch5} isLargeRow={true} />
      <Row title="Romance Movies" fetchUrl={Request.fetch6} isLargeRow={true} />
      <Row title="Tv Shows" fetchUrl={Request.fetch7} isLargeRow={true} />
      <Row
        title="Documentaries Movies"
        fetchUrl={Request.fetch8}
        isLargeRow={true}
      />
    </>
  );
}

export default RowList;
