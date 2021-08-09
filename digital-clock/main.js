const clock = () => {
  const time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let meridian = "AM";

  if (hrs === 0) {
    hrs = 12;
    meridian = "AM";
  } else if (hrs > 12) {
    meridian = "PM";
    hrs = hrs - 12;
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;
  document.getElementById(
    "clock"
  ).innerHTML = `${hrs} : ${mins} : ${secs} ${meridian}`;
  setTimeout(clock, 1000);
};
// setInterval(clock, 1000);
clock();
