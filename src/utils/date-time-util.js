function formatDateTime(dateInput, timeInput) {
  // Create a new Date object using the date input
  const date = new Date(dateInput);

  // Extract the date parts (year, month, day)
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getUTCDate()).padStart(2, "0");

  // Extract the time parts from the time input
  const [hours, minutes] = timeInput.split(":");

  // Format the result in the desired format: YYYY-MM-DDTHH:mm:ssZ
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:00Z`;

  return formattedDateTime;
}

function formatDateTimeUi(isoDate) {
  const date = new Date(isoDate);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getUTCFullYear();

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  return `${hours}:${minutes} ${day}/${month}/${year}`;
}

export { formatDateTime, formatDateTimeUi };
