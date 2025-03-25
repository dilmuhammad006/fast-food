import app from "./app.js";
import { APP_PORT } from "./config/app.config.js";
import connectDb from "./config/mongo.config.js";

await connectDb();

app.listen(APP_PORT, () => {
  console.log(`http://localhost:${APP_PORT}`);
});
