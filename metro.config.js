const {getDefaultConfig} = require('@expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  // Настройте конфигурацию по вашему усмотрению, если это необходимо
  return defaultConfig;
})();
