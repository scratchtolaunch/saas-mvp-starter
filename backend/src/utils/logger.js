export const logger = (message, meta = {}) => {
  console.log(`[LOG] ${message}`, meta);
};
