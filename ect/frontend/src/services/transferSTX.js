import {makeContractCall, broadcastTransaction} from '@stacks/transactions';
import {StacksDevnet} from '@stacks/network'

async function transferSTX() {
  const contractAddress = 'SP3FGQ8Z7JY9BWYZ5WM53E0M9NK7WHJF0691NZ159'; // replace with the contract's address
  const contractName = 'ect'; // replace with the contract's name
  const functionName = 'say-ect';
  const senderKey = '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601'; // replace with your private key
  const network = new StacksDevnet(); // replace with StacksMainnet() for mainnet

  const transaction = await makeContractCall(contractAddress,contractName,functionName,[],senderKey,network)
  const txid = await broadcastTransaction(transaction,"devnet")

  // broadcast the transaction to the network
  console.log(txid)
}

export default transferSTX;