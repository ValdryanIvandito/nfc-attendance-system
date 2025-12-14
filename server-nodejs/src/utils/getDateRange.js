import { DateTime } from "luxon";

function getDateRange(date, zone = "utc") {
  const dt = DateTime.fromISO(date, { zone });

  return {
    start: dt.startOf("day").toJSDate(),
    end: dt.endOf("day").toJSDate(),
  };
}

export default getDateRange;
