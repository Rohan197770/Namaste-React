import { useEffect,useState } from "react";
import { MENU_API } from "./constant";
// this is f custom hooks 
const useRestaurantMenu =(resId)=>
{

  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setresInfo(json.data);
  };
    return resInfo;
}
export default useRestaurantMenu;