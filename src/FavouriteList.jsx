import { useContext } from "react"
import { Contextdata } from "./ContextArr"
function FavouriteList()
{
    const { favList ,mydata, setFavList} = useContext(Contextdata);

    const handleDel = (removeItem)=>
    {
        const updatedFavList = favList.filter((item) => item !== removeItem);
        setFavList(updatedFavList);

    }
    return(
        <>

        <table>
                <tbody>
                    {favList.map((data, index) => (
                        <tr key={index}>
                            <td>
                                <h3>{data}</h3>
                            </td>
                            <td>
                                <button className="del" onClick={()=>handleDel(data)}>Remove </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default FavouriteList