import { SYSVAR_CLOCK_PUBKEY, TransactionInstruction } from '@solana/web3.js';
import * as BufferLayout from 'buffer-layout';
import { LENDING_PROGRAM_ID } from '../constants';

const LendingInstruction = {
  InitLendingMarket: 0,
  SetLendingMarketOwner: 1,
  InitReserve: 2,
  RefreshReserve: 3,
  DepositReserveLiquidity: 4,
  RedeemReserveCollateral: 5,
  InitObligation: 6,
  RefreshObligation: 7,
  DepositObligationCollateral: 8,
  WithdrawObligationCollateral: 9,
  BorrowObligationLiquidity: 10,
  RepayObligationLiquidity: 11,
  LiquidateObligation: 12,
  FlashLoan: 13,
  UpdatePseudoDeposits: 14
};

export const refreshReserve = ({ reserveAccount, priceAccount }) => {
  const dataLayout = BufferLayout.struct([BufferLayout.u8('instruction')]);

  const data = Buffer.alloc(dataLayout.span);

  dataLayout.encode(
    {
      instruction: LendingInstruction.RefreshReserve
    },
    data
  );

  const keys = [
    { pubkey: reserveAccount, isSigner: false, isWritable: true },
    { pubkey: priceAccount, isSigner: false, isWritable: false },
    { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false }
  ];

  return new TransactionInstruction({
    keys,
    programId: LENDING_PROGRAM_ID,
    data
  });
};
