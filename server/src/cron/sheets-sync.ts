import cron from "node-cron";
import { syncDonaturFromSheets } from "../services/sheets-sync.js";

export function initCronJobs() {
  // Sync donatur every 15 minutes
  cron.schedule("*/15 * * * *", () => {
    console.log("Running scheduled Google Sheets sync...");
    syncDonaturFromSheets();
  });
  
  console.log("Cron jobs initialized.");
}
