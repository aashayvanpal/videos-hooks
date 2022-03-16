import React,{ useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('Batman')
    const onInputChange = (event) => {
        // console.log('inside input change')
        setTerm(event.target.value)
    }

    const onFormSearchSubmit = (event) => {
        event.preventDefault()

        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSearchSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={onInputChange} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar