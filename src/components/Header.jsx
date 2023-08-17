



function Header ({setDisplayWin, currentDay, title}) {

    const addNew = () => {
        setDisplayWin(true);
    }
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return (
        <div className="header-container">
        <p className="header-title">{title}</p>
        <p>{currentDay}</p>
        <div className="add-button-container">
            <button onClick={addNew} className="addNew">New Task</button>
        </div>
        </div>
    )
}

export default Header;