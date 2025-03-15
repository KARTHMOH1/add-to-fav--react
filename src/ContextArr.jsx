import { createContext, useState } from "react";
const Contextdata = createContext();

function ContextArr(componentdata) {


    const [mydata, setMydata] = useState(["KARTHIK", "MALCOM", "RAGHUL", "SYED ANIF", "BHARATH", "SARAVANA", "AVINASH"])
    const [favList, setFavList] = useState([]);


    
    return (
        <>
            <Contextdata.Provider value={{mydata,setMydata,favList, setFavList}}>
                {componentdata.children}
            </Contextdata.Provider>
        </>
    )

}
export default ContextArr
export { Contextdata }