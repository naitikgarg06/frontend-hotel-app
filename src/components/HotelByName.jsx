import useFetch from "../useFetch";

const HotelByName = ({name}) => {
    const apiUrl = process.env.REACT_APP_API_URL
    const {data, loading, error} = useFetch(`${apiUrl}/hotels/${name}`)

    return data ? (
        <div>
            <h1>{data.name}</h1>
            <p><strong>Location:</strong> {data.location}</p>
            <p><strong>Rating:</strong> {data.rating}</p>
            <p><strong>Price Range:</strong> {data.priceRange}</p>
        </div>
    ) : (loading && <p>Loading...</p>)
}

export default HotelByName;