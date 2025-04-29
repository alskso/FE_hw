// 시간계산
function calculate(diff) {
  var sec = Math.floor(diff / 1000);

  var hours = Math.floor(sec / 3600);
  sec = sec - hours * 3600;

  var minutes = Math.floor(sec / 60);
  sec = sec - minutes * 60;

  var seconds = sec;

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return { hours, minutes, seconds };
}

// -------------------------------
function update_time() {
  const now = new Date();
  const nowTime = now.getTime();

  const open = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    7,
    0,
    0
  );
  const close = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    30,
    0
  );

  const openTime = open.getTime();
  const closeTime = close.getTime();

  const open_timebox = document.querySelector(".open_time");
  const open_text = document.querySelector(".openTime");
  const beclose_timebox = document.querySelector(".beclose_time");
  const beclose_text = document.querySelector(".becloseTime");
  const afclose_text = document.querySelector(".afcloseTime");

  // 1. 운영전
  if (nowTime < openTime) {
    var diff = openTime - nowTime;
    var time = calculate(diff);

    open_timebox.style.display = "flex";
    open_text.style.display = "block";

    beclose_timebox.style.display = "none";
    beclose_text.style.display = "none";

    afclose_text.style.display = "none";

    open_timebox.querySelector(".hours").textContent = time.hours;
    open_timebox.querySelector(".minutes").textContent = time.minutes;
    open_timebox.querySelector(".seconds").textContent = time.seconds;
  } else if (nowTime >= openTime && nowTime < closeTime) {
    // 2. 운영 마감전
    var diff = closeTime - nowTime;
    var time = calculate(diff);

    open_timebox.style.display = "none";
    open_text.style.display = "none";

    beclose_timebox.style.display = "flex";
    beclose_text.style.display = "block";

    afclose_text.style.display = "none";

    beclose_timebox.querySelector(".hours").textContent = time.hours;
    beclose_timebox.querySelector(".minutes").textContent = time.minutes;
    beclose_timebox.querySelector(".seconds").textContent = time.seconds;
  } else {
    open_timebox.style.display = "none";
    open_text.style.display = "none";

    beclose_timebox.style.display = "none";
    beclose_text.style.display = "none";

    afclose_text.style.display = "block";
  }
}

setInterval(update_time, 1000); // 시간을 계속해서 갱신신

update_time(); // 처음부분을 맞춰야 함함
