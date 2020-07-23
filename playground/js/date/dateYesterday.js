const today = new Date();
const todayTimeStamp = today.getTime();
const yesterday = new Date();
yesterday.setTime(today - 86400);

console.log(today,'\n', todayTimeStamp, '\n', yesterday);