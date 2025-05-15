# BI1.2_HW2 - ADD HOTEL FORM FEATURE

# SUMMARY
Added a new component `AddHotelForm` which allows user to add a new hotel to the database via the frontend UI.

# FEATURES
- form to take user inputs for hotel details like location, rating, category etc
- submit collected data using POST `/hotels` API
- adds it to the mongoDB database

# NOTES 
- The backend route `/hotels` must be running for this to work

# BI1.3_HW2 - ADD DELETE FUNCTIONALITY

# FEATURES
- delete button for each hotel item to let user delete it from database
- uses DELETE `/hotels/hotelId` route to send delete request
- displays success message and renders updated hotel list
