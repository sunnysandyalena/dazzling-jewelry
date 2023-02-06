import loading from './loading.png'
const IsLoading = () => {
    return (
        <div className="container-loading">
            <div>
                LOADING
            </div>
            <div>
                <img className='loading' src = {loading} alt = "Loading" width="90px"/>
            </div>
        </div>
    )
}

export default IsLoading;