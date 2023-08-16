

function Header ({setDisplayWin, title}) {

    const addNew = () => {
        setDisplayWin(true);
    }


    return (
        <div className="header-container">
        <p className="header-title">{title}</p>
        <div className="add-button-container">
            <button onClick={addNew} className="addNew">New Task</button>
        </div>
        </div>
    )
}

export default Header;