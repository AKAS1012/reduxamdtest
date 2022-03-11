
const Grid = () =>{
    return(
        <>
        <header className="header">
            <nav className="nav">
                <ul className="group-list">
                    <li className='group-list-item' href="/">Home</li>
                    <li className="group-list-item" href="/">About</li>
                    <li className="group-list-item" href="/">Details</li>
                    <li className="group-list-item" href="/">Navabr</li>
                    <li className="group-list-item" href="/">Dropdown</li>
                </ul>
            </nav>
        </header>
        <div className='grid-container'>
            <div className='grid-item'>first</div>
            <div className="grid-item">scond</div>
            <div className="grid-item">third</div>
            <div className="grid-item">fourth</div>
            <div className="grid-item">five</div>
            <div className="grid-item">six</div>
            <div className="grid-item">seven</div>
            <div className="grid-item">eight</div>
            <div className="grid-item">nine</div>
        </div>
        </>
    )
}
export default Grid;