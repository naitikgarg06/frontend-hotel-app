import useFetch from '../useFetch'

const Hotel = () => {
    const { data, loading ,error} = useFetch("http://localhost:3000/hotels")

    return data ? (
        <div>
            <h1>All Hotels</h1>
            <ul>
                {data.map((hotel) => (
                    <li key={hotel._id}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    ) : ( loading && <p>Loading...</p>)
}

export default Hotel