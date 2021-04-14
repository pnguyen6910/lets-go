import React from 'react'

function Search() {
    return (
        <div className="col-3">
            <form className="row g-3">

                <div className="col-auto">

                    <input className="form-control" />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Go</button>
                </div>
            </form>
        </div>
    )
}

export default Search;