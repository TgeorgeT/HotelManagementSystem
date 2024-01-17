const db = require("../../../models");

function getDaysBetweenDates(checkInDate, checkOutDate) {
  // Convert date strings to Date objects
  const startDate = new Date(checkInDate);
  const endDate = new Date(checkOutDate);

  // Calculate the difference in milliseconds
  const timeDifference = endDate.getTime() - startDate.getTime();

  // Convert the time difference to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
}

async function createBookingResolver(parent, args, context) {
  const { userId, checkInDate, checkOutDate, roomIDs } = args;
  const days = getDaysBetweenDates(checkInDate, checkOutDate);
  console.log(days);

  if (
    !context.user ||
    (context.user.id != userId && context.user.role != "admin")
  )
    throw new Error("Unauthorized");

  try {
    const rooms = await db.Room.findAll({
      where: { id: roomIDs },
    });

    const totalPrice =
      rooms.reduce((acc, room) => {
        return acc + room.price;
      }, 0) * days;

    const newBooking = await db.Booking.create({
      userId,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    if (roomIDs && roomIDs.length > 0) {
      await Promise.all(
        roomIDs.map((roomId) => {
          return db.BookedRooms.create({
            roomId,
            bookingId: newBooking.id,
          });
        })
      );
    }

    return newBooking;
  } catch (error) {
    throw new Error("Error creating booking: " + error.message);
  }
}

module.exports = createBookingResolver;
