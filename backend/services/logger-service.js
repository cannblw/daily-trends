
class LoggerService {
  i(message) {
    console.log(`[INFO] ${message}`);
  }

  w(message) {
    console.warn(`[WARN] ${message}`);
  }

  e(message) {
    console.error(`[ERROR] ${message}`);
  }
}

module.exports = new LoggerService();
