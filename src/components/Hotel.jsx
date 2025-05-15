import { useState } from "react";
import useFetch from "../useFetch";


const Hotel = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL
  const { data, loading, error } = useFetch(`${apiUrl}/hotels`);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`${apiUrl}/hotels/${hotelId}`, { method: "DELETE"} )

      if(!response.ok){
        throw "Failed to delete hotel"
      }

      const data = await response.json()
      if(data){
        setSuccessMessage("Hotel deleted successfully")
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.error && <p>{data.error}</p>}
      {data && (
        <>
          <h1>All Hotels</h1>
          <ul>
            {data.map((hotel) => (
              <li key={hotel._id}>
                {hotel.name}{" "}
                <button
                  onClick={() => {
                    handleDelete(hotel._id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <p>{successMessage}</p>
    </div>
  );
};

export default Hotel;
