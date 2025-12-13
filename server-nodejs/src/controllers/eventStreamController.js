// src/controllers/eventStreamController.js
import eventBus from "../utils/eventBus.js";

class EventStreamController {
  static stream(req, res) {
    console.log("[SSE] client connected");

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const send = (event, data) => {
      res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
    };

    const attendanceCreated = (data) => send("attendance:created", data);
    const employeeCreated = (data) => send("employee:created", data);
    const employeeUpdated = (data) => send("employee:updated", data);

    eventBus.on("attendance:created", attendanceCreated);
    eventBus.on("employee:created", employeeCreated);
    eventBus.on("employee:updated", employeeUpdated);

    req.on("close", () => {
      eventBus.off("attendance:created", attendanceCreated);
      eventBus.off("employee:created", employeeCreated);
      eventBus.off("employee:updated", employeeUpdated);
    });
  }
}

export default EventStreamController;
