import './SearchForm.css'

export default function SearchForm () {
    return (
        <div className='search-form-max'>
            <form className='search-form' action="search">
                <input className='search-bar' type="text" placeholder='What are you looking for today?' />
                <button className='filter-button'>Filter</button>
            </form>

            <div className='button-row'>
                <button className='category-button'>All</button>
                <button className='category-button'>Clothing</button>
                <button className='category-button'>Housing</button>
                <button className='category-button'>Food</button>
                <button className='category-button'>Misc.</button>
            </div>

        </div>
    )
}