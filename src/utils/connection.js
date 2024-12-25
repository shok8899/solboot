import { Connection } from '@solana/web3.js';
import { getEnvConfig } from './env.js';

export const createConnection = () => {
  const { rpcEndpoint } = getEnvConfig();
  return new Connection(rpcEndpoint, 'processed');
};