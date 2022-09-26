import dayjs from "dayjs";

export const getDayAndTime = date => dayjs(date).format("dddd, hh:mmA");
export const getTimePassedSinceCreation = date => dayjs(date).fromNow();
