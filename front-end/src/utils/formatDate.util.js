import dayjs from 'dayjs';

const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    return `${hour}h ngày ${day} tháng ${month} năm ${year}`
}

const formatFormDate = (data) => {
    const result = dayjs(data).format("YYYY-MM-DD");
    return result;
};

export { formatDate, formatFormDate }