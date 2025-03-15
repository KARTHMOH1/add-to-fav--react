import { useContext } from "react";
import { Contextdata } from "./ContextArr";


function AllList() {
    const { mydata, setMydata, favList, setFavList } = useContext(Contextdata);
  

const handleAdd = (item) =>
{
 setFavList([...favList,item])
}

const isFavorite = (item) =>
{
    return favList.includes(item)
}

    return (
        <>
            <table>
                <tbody>
                    {mydata.map((data, index) => (
                        <tr key={index}>
                            <td>
                                <h3>{data}</h3>
                            </td>
                            <td>
                               <button className={`add ${isFavorite(data) ? 'added' : ''}`} onClick={()=>handleAdd(data)} disabled={isFavorite(data)}>{isFavorite(data) ? "Added" : "Add to Favorite"}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AllList;