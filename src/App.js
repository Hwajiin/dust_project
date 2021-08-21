import React from "react";
import { GEO_API_KEY, fineDustApi } from "./api";
import axios from "axios";
import { cityName } from "./cityName";
import Data from "./components/Data";
import Loader from "./components/Loader";

class App extends React.Component {
  state = {
    fineDustResult: null,
    datatime: null,
    sidoName: null,
    isLoading: true,
  };

  async componentDidMount() {
    const geoSuccess = async (pos) => {
      const {
        coords: { latitude, longitude },
      } = pos;
      const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`;
      const {
        data: { documents },
      } = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${GEO_API_KEY}`,
        },
      });
      const sidoName = documents[0].address.region_1depth_name;
      const transCity = cityName[`${sidoName}`];

      //  fine dust
      const {
        data: {
          response: {
            body: { items: fineItems },
          },
        },
      } = await fineDustApi.get("/getCtprvnMesureLIst");

      const fineDustData = fineItems[0];
      const fineDustResult = fineDustData[`${transCity}`];
      const datatime = fineDustData.dataTime;
      this.setState({ fineDustResult, datatime, sidoName, isLoading: false });
    };

    navigator.geolocation.getCurrentPosition(geoSuccess);
  }

  dustStandard = () => {
    const { fineDustResult } = this.state;
    console.log(fineDustResult);
  };

  render() {
    const { fineDustResult, datatime, sidoName, isLoading } = this.state;

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <Data
            datatime={datatime}
            sidoName={sidoName}
            fineDustResult={fineDustResult}
          />
        )}
      </>
    );
  }
}

export default App;
