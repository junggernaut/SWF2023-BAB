const shortenAddress = (
  address: `0x${string}`,
  frontNum: number,
  backNum: number
) => {
  return address
    ? `${address.substring(0, 2 + frontNum)}...${address.substring(
        42 - backNum,
        42
      )}
  `
    : '';
};

export default shortenAddress;
