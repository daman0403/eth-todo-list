
module.exports = {
  networks: {
    ganache: {
      
      host: "HTTP://127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
		test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
