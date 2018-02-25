const DEFAULT_ENV = {
  PORT: 8000,
  CLIENT_IP: '192.168.1.254',
  DEBUG: false,
  DISABLE_BOARD: false,
};

const getEnvValue = key => ({ [key]: process.env[key] || DEFAULT_ENV[key] });

const envValues = Object.assign(...Object.keys(DEFAULT_ENV).map(getEnvValue));

export default envValues;
