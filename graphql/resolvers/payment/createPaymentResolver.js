const db = require("../../../models");

async function createPaymentResolver(parent, args, context) {
  const { bookingId, paymentDate, paymentType } = args;

  try {
    const newPayment = await db.Payment.create({
      paymentDate,
      paymentType,
    });

    await db.Booking.update(
      { paymentId: newPayment.id },
      {
        where: { id: bookingId },
      }
    );
    return newPayment;
  } catch (error) {
    throw new Error("Error creating booking: " + error.message);
  }
}

module.exports = createPaymentResolver;
