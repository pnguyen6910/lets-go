import React from 'react'
import Search from "react-leaflet-search/lib/Search-v1";

function SearchBar() {
    return (

        <form className="row g-3">

            <div className="col-auto">
                <input className="form-control" />

            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Go</button>
            </div>
        </form>

    )
}

export default SearchBar;