import strings from "../../../res/strings";

export function convertMiliseconds(miliseconds, format) {
  var years,
    months,
    days,
    hours,
    minutes,
    seconds,
    total_months,
    total_days,
    total_hours,
    total_minutes,
    total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  total_days = parseInt(Math.floor(total_hours / 24));
  total_months = parseInt(Math.floor(total_days / 30));
  years = parseInt(Math.floor(total_months / 12));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);
  days = parseInt(total_days % 30);
  months = parseInt(total_months % 12);

  switch (format) {
    case "s":
      return total_seconds;
    case "m":
      return total_minutes;
    case "h":
      return total_hours;
    case "d":
      return days;
    default:
      return { years, months, days, hours, minutes, seconds };
  }
}

export function formatTimeAll(time) {
  const { years, months, days } = convertMiliseconds(time);

  return `${
    years ? `${years} ${years > 1 ? strings.years : strings.year}` : ""
  }${years && months ? " " : ""}${
    months ? `${months} ${months > 1 ? strings.months : strings.month}` : ""
  }${months && days ? " " : ""}${
    days ? `${days} ${days > 1 ? strings.days : strings.day}` : ""
  }`;
}

export function formatTime(time) {
  const { years, months, days } = convertMiliseconds(time);

  return years
    ? `${years} ${years > 1 ? strings.years : strings.year}`
    : months
    ? `${months} ${months > 1 ? strings.months : strings.month}`
    : days
    ? `${days} ${days > 1 ? strings.days : strings.day}`
    : "";
}
