function countdown() {
  let now = new Date();
  let eventDate = new Date(now.getFullYear(), 12, 24);

  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("days").innerText = d;
  document.getElementById("days").innerContent = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("hours").innerContent = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("minutes").innerContent = m;
  document.getElementById("seconds").innerText = s;
  document.getElementById("seconds").innerContent = s;

  setTimeout(countdown, 1000);
}

countdown();
