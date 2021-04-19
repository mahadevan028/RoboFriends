import React from 'react';


const SearchBox = ({ searchCallback }) => {
    return (
        <React.Fragment>
            <div className='pa2'>
                <input type='search' placeholder='Search Robots' onChange={searchCallback} />
            </div>
        </React.Fragment>
    )
}

export default SearchBox;