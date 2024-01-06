export const formatDateTime = (isoDate) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = new Date(isoDate).toLocaleString('en-US', options);
    return formattedDate;
  };