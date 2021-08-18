import axios from "axios";

export const DUST_API_KEY = process.env.REACT_APP_DUST_API_KEY;
export const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY;

export const fineDustApi = axios.create({
  baseURL: "/B552584/ArpltnStatsSvc",
  params: {
    serviceKey: `${DUST_API_KEY}`,
    returnType: "json",
    numOfRows: "100",
    pageNo: "1",
    itemCode: "PM10",
    dataGubun: "HOUR",
    searchCondition: "MONTH",
  },
});

export const microDustApi = axios.create({
  baseURL: "/B552584/ArpltnStatsSvc",
  params: {
    serviceKey: `${DUST_API_KEY}`,
    returnType: "json",
    numOfRows: "100",
    pageNo: "1",
    itemCode: "PM2.5",
    dataGubun: "HOUR",
    searchCondition: "MONTH",
  },
});
