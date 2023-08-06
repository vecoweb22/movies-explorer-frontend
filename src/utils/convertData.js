export const convertData = (duration) => {
  const hours = Math.trunc(duration / 60);
  const munutes = duration % 60;
  const convertTime = [];

  if (hours) convertTime.push(`${hours}ч`);
  if (munutes) convertTime.push(`${munutes}м`);

  return convertTime.join(' ');
}