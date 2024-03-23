const extractTime = (dateString) => {
  const date = new Date(dateString);
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return formattedTime;
}

export default extractTime;
