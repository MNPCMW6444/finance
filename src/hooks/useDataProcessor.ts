import { useEffect, useState } from "react";
import { Exp } from "../types/index";
import domain from "../config/domain";
import Axios from "axios";

const colorMap = new Map();
colorMap.set("Red", "🔴");
colorMap.set("Orange", "🟠");
colorMap.set("Yellow", "🟡");
colorMap.set("Green", "🟢");
colorMap.set("Blue", "🔵");
colorMap.set("Purple", "🟣");
colorMap.set("Black", "⚫️");
colorMap.set("White", "⚪️");
colorMap.set("Brown", "🟤");

const useDataProcessor = (refresher: number) => {
  const [data, setData] = useState<Exp[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(domain + "exps");
      setData(res.data);
    };
    fetchData();
  }, [refresher]);
  return data;
};

export default useDataProcessor;
