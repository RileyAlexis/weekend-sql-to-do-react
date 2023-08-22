//Libraries
import axios from 'axios';

function Ticker ({id, complete, fetch}) {

    //Toggles "completed" column in database
const setComplete = () => {
    axios.put(`/todo/complete/${id}`)
    .then((result) => {
        fetch();
    }).catch((error) => {
        console.error(error);
    })
}

//This will eventualy be a more complex checkbox
    return (
        <div>
            <input type="checkbox" className="ticker" onChange={setComplete} checked={complete} />
            </div>

    )


}

export default Ticker;