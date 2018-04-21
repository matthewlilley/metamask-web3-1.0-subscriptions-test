// Importing the latest version from NPM
const Web3 = require('web3')

const ZeroClientProvider = require('web3-provider-engine/zero')

// create engine
// const zeroClientProvider = ZeroClientProvider({
//     getAccounts: function() {},
//     rpcUrl: "http://localhost:8545",
//     originHttpHeaderKey: 'http://localhost'
//     // rpcUrl: 'https://mainnet.infura.io',

// })

window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    // const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io'))
    // const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'))
    // const web3 = new Web3(zeroClientProvider)
    const web3 = new Web3(window.web3.currentProvider)
    // web3.eth.getAccounts((error, data) => {
    //   if (error) {
    //     console.log('getAccounts error', error);
    //   } else {
    //     console.log('getAccounts data', data);
    //   }
    // });
    const newBlockHeadersSubscription = web3.eth.subscribe('newBlockHeaders', (error, data) => {
      if (error) {
          console.log('newBlockHeadersSubscription callback error', error)
      }
      console.log('newBlockHeadersSubscription callback data', data)
    }).on("data", (data) => {
      console.log('newBlockHeadersSubscription data event', data)
    }).on("error", (error) => {
      console.log('newBlockHeadersSubscription error event', error)
    });

    // const logsSubscription = web3.eth.subscribe('logs', {}, (error, data) => {
    //   if (error) {
    //       console.log('logsSubscription callback error', error)
    //   }
    //   console.log('logsSubscription callback data', data)
    // }).on('data', (data) => {
    //   console.log('logsSubscription data event', data)
    // }).on('error', (error) => {
    //   console.log('logsSubscription error event', error)
    // });

    // const pendingTransactions = web3.eth.subscribe('pendingTransactions', (error, data) => {
    //   if (error) {
    //       console.log('pendingTransactions callback error', error)
    //   }
    //   console.log('pendingTransactions callback data', data)
    // }).on('data', (data) => {
    //   console.log('pendingTransactions data event', data)
    // }).on('error', (error) => {
    //   console.log('pendingTransactions error event', error)
    // });
    
    // const syncingSubscription = web3.eth.subscribe('syncing', function(error, data){
    //   if (error) {
    //     console.log('syncingSubscription callback error', error)
    //   }
    //   console.log('syncingSubscription callback data', data)
    // }).on('data', (data) => {
    //   console.log('syncingSubscription data event', data)
    // }).on('changed', (isSyncing) => {
    //   if(isSyncing) {
    //     console.log('isSyncing')
    //     // stop app operation
    //   } else {
    //     console.log('not isSyncing')
    //     // regain app operation
    //   }
    // }).on('error', (error) => {
    //   console.log('syncingSubscription error event', error)
    // });
    
    setTimeout(() => {
      newBlockHeadersSubscription.unsubscribe((error, success) => {
        if(success)
          console.log('newBlockHeadersSubscription successfully unsubscribed!');
      });
      // logsSubscription.unsubscribe((error, success) => {
      //   if(success)
      //     console.log('logsSubscription successfully unsubscribed!');
      // });
      // pendingTransactions.unsubscribe((error, success) => {
      //   if(success)
      //     console.log('pendingTransactions successfully unsubscribed!');
      // });
      // syncingSubscription.unsubscribe((error, success) => {
      //   if(success)
      //     console.log('syncingSubscription successfully unsubscribed!');
      // });

      // https://github.com/ethereum/web3.js/issues/1466
      // web3.eth.clearSubscriptions()
    }, 60000)

  }
})