import axios from 'axios';

function Ticker ({id, complete, fetch}) {

const setComplete = () => {
    axios.put(`/todo/complete/${id}`)
    .then((result) => {
        fetch();
    }).catch((error) => {
        console.error(error);
    })
}


    return (
        <div>
            <input type="checkbox" onChange={setComplete} checked={complete} />
            </div>

    )


}

export default Ticker;