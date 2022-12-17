require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/h5VTmYncV32NWk1H-VfbCIYh-ztgyFjG",
      accounts: [
        "5bbc26a6ec823973f0329b5aec861d6b4a01660d6f0f0dd21854f31af6c6714d",
      ],
    },
  },
};
