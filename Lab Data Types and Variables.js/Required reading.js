function requiredreading(pages, pagesPerHoures, days) {
  let timeForRead = pages / pagesPerHoures;
  let houresPerDay = timeForRead / days;
  console.log(houresPerDay);
}
requiredreading(212, 20, 2);
