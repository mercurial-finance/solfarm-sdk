import { find } from 'lodash';
import lendConfig from '../constants/lending_info.json';

export const getLendingMarketAccount = () => {
  return lendConfig.lending.lending_market_account;
};

export const getPriceFeedsForReserve = (name) => {
  return find(lendConfig.pyth.price_feeds, (priceFeed) => {
    return priceFeed.name === name;
  });
};
