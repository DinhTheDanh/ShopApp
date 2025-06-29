const Sequelize = require("sequelize");
const db = require("../models/index");
const { Op } = Sequelize;
const os = require("os");

class HealthCheckController {
  async getHealthCheck(req, res) {
    try {
      // Kiểm tra kết nối cơ sở dữ liệu
      await db.sequelize.authenticate();

      //Lấy thông tin tải cpu
      const cpuLoad = os.loadavg();

      // Lấy thông tin sử dụng bộ nhớ
      const memoryUsage = process.memoryUsage();

      // Tính toán tải cpu trong %
      const cpus = os.cpus();
      const cpuPercentage = (cpuLoad[0] / cpus.length) * 100;

      // Trả về kết quả
      res.status(200).json({
        status: "OK",
        database: "Connected",
        cpuLoad: {
          "1min": cpuLoad[0],
          "5min": cpuLoad[1],
          "15min": cpuLoad[2],
          percentage: cpuPercentage.toFixed(2) + "%",
        },
        memoryUsage: {
          rss: memoryUsage.rss,
          heapTotal: memoryUsage.heapTotal,
          heapUsed: memoryUsage.heapUsed,
          external: memoryUsage.external,
        },
      });
    } catch (err) {
      res
        .status(500)
        .json({
          status: "Failed",
          message: "Health check failed",
          err: err.message,
        });
    }
  }
}

module.exports = new HealthCheckController();
