import { DateTime } from "luxon";

function getDayDateRange(date) {
  const timeZone = DateTime.local().zoneName;
  const dt = DateTime.fromISO(date, { zone: timeZone });

  if (!dt.isValid) {
    throw new Error(`Invalid date: ${date}`);
  }

  const start = dt.startOf("day").toJSDate();
  const end = dt.endOf("day").toJSDate();

  return { start, end };
}

export default getDayDateRange;
