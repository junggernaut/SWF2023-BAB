const shortenAddress = (
  address: `0x${string}`,
  frontNum: number,
  backNum: number
) => {
  return address
    ? `${address.substring(0, 2 + frontNum)}...${address.substring(
        20 - backNum,
        20
      )}
  `
    : '';
};

export default shortenAddress;
