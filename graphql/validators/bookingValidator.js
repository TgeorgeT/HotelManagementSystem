const validateBooking = (booking) => {
    if (!isValidDate(booking.checkInDate)) {
        return "Invalid check-in date";
    }

    if (!isValidDate(booking.checkOutDate)) {
        return "Invalid check-out date";
    }

    let checkInDate = new Date(booking.checkInDate);
    let checkOutDate = new Date(booking.checkOutDate);

    if (checkOutDate <= checkInDate) {
        return "Check-out date must be after check-in date";
    }

    let today = new Date();

    if (checkInDate < today) {
        return "Check-in date must be today or a future date";
    }

    if (booking.sizeTwoRoomCount < 0 || booking.sizeFourRoomCount < 0) {
        return "Room count must be a positive number";
    }

    if (booking.sizeTwoRoomCount === 0 && booking.sizeFourRoomCount === 0) {
        return "Room count must be greater than 0";
    }

    return "";
};

const isValidDate = (date) => {
    // check if date string is in YYYY-MM-DD format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        return false;
    }

    if (!moment(date, "YYYY-MM-DD").isValid()) {
        return false;
    }

    return true;
};
