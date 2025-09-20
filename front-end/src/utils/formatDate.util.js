import dayjs from "dayjs";

const formatStartDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `0h ngày ${day} tháng ${month} năm ${year}`;
};

const formatEndDate = (isoString) => {
  const date = new Date(isoString);
  date.setDate(date.getDate() - 1); 
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `23h59 ngày ${day} tháng ${month} năm ${year}`;
};

const formatFormDate = (data) => {
  return dayjs(data).format("YYYY-MM-DD");
};

export { formatStartDate, formatEndDate, formatFormDate };