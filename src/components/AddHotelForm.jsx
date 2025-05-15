import { use, useState } from "react";

const AddHotelForm = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [formData, setFormData] = useState({
    name: "",
    category: [],
    location: "",
    rating: 0,
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: [],
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: [],
  });

  const onChangeHandler = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault(); 
    // console.log(formData)
    try {
      const response = await fetch(`${apiUrl}/hotels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok){
        console.log("Failed to add movie.")
      }

      const data = await response.json()

      console.log("Added movie:", data)
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <h1>Add New Hotel</h1>
      <form onSubmit={onSubmitHandler}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="name"
          required
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value);
          }}
        />
        <br />
        <br />
        <label>Category:</label>
        <br />
        <select
          name="category"
          required
          onChange={(e) => {
            const { name, value } = e.target;
            // const arr = value.split(", ")
            onChangeHandler(name, value.split(", "));
          }}
        >
          <option value="">--Select Category--</option>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label>Location:</label>
        <br />
        <input
          type="text"
          name="location"
          required
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value);
          }}
        />
        <br />
        <br />
        <label>Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          onChange={(e) => {
            const { name, value } = e.target;
            value == "" ? onChangeHandler(name, 0) : onChangeHandler(name, value)
          }}
        />
        <br />
        <br />
        <label>Website:</label>
        <br />
        <input
          type="text"
          name="website"
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value);
          }}
        />
        <br />
        <br />
        <label>Phone Number:</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          required
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value);
          }}
        />
        <br />
        <br />
        <label>Check-In Time</label>
        <br />
        <input
          type="text"
          name="checkInTime"
          required
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value);
          }}
        />
        <br />
        <br />
        <label>Check-Out Time</label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          required
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value);
          }}
        />
        <br />
        <br />
        <label>Amenities Available:</label>
        <br />
        <input
          type="text"
          name="amenities"
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value.split(", "));
          }}
        />
        <br />
        <br />
        <label>Price Range:</label>
        <br />
        <select
          name="priceRange"
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value);
          }}
        >
          <option value="">--Select Price Range--</option>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="isParkingAvailable"
          value="Parking"
          onChange={(e) => {
            const { name, checked } = e.target;
            onChangeHandler(name, checked);
          }}
        />{" "}
        Is parking available
        <br />
        <input
          type="checkbox"
          name="isWifiAvailable"
          value="Wifi"
          onChange={(e) => {
            const { name, checked } = e.target;
            onChangeHandler(name, checked);
          }}
        />{" "}
        Is wifi available
        <br />
        <input
          type="checkbox"
          name="isPoolAvailable"
          onChange={(e) => {
            const { name, checked } = e.target;
            onChangeHandler(name, checked);
          }}
        />{" "}
        Is pool available
        <br />
        <input
          type="checkbox"
          name="isSpaAvailable"
          onChange={(e) => {
            const { name, checked } = e.target;
            onChangeHandler(name, checked);
          }}
        />{" "}
        Is spa available
        <br />
        <input
          type="checkbox"
          name="isRestaurantAvailabl"
          onChange={(e) => {
            const { name, checked } = e.target;
            onChangeHandler(name, checked);
          }}
        />{" "}
        Is restaurant available
        <br />
        <br />
        <label>Photos:</label>
        <br />
        <input
          type="text"
          name="photos"
          onChange={(e) => {
            const { name, value } = e.target;
            onChangeHandler(name, value.split(", "));
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddHotelForm;
