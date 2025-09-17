import app from './app.ts';
import { Config } from './config/index.ts';
import logger from './config/logger.ts';

const startServer = () => {
  const PORT = Config.PORT;

  try {
    app.listen(PORT, () =>
      logger.info('Server listening on port', { port: PORT }),
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
