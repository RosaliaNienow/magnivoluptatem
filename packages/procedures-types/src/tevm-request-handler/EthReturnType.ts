import type {
	EthAccountsJsonRpcResponse,
	EthBlockNumberJsonRpcResponse,
	EthCallJsonRpcResponse,
	EthChainIdJsonRpcResponse,
	EthCoinbaseJsonRpcResponse,
	EthEstimateGasJsonRpcResponse,
	EthGasPriceJsonRpcResponse,
	EthGetBalanceJsonRpcResponse,
	EthGetBlockByHashJsonRpcResponse,
	EthGetBlockByNumberJsonRpcResponse,
	EthGetBlockTransactionCountByHashJsonRpcResponse,
	EthGetBlockTransactionCountByNumberJsonRpcResponse,
	EthGetCodeJsonRpcResponse,
	EthGetFilterChangesJsonRpcResponse,
	EthGetFilterLogsJsonRpcResponse,
	EthGetLogsJsonRpcResponse,
	EthGetStorageAtJsonRpcResponse,
	EthGetTransactionByBlockHashAndIndexJsonRpcResponse,
	EthGetTransactionByBlockNumberAndIndexJsonRpcResponse,
	EthGetTransactionByHashJsonRpcResponse,
	EthGetTransactionCountJsonRpcResponse,
	EthGetTransactionReceiptJsonRpcResponse,
	EthGetUncleByBlockHashAndIndexJsonRpcResponse,
	EthGetUncleByBlockNumberAndIndexJsonRpcResponse,
	EthGetUncleCountByBlockHashJsonRpcResponse,
	EthGetUncleCountByBlockNumberJsonRpcResponse,
	EthHashrateJsonRpcResponse,
	EthMiningJsonRpcResponse,
	EthNewBlockFilterJsonRpcResponse,
	EthNewFilterJsonRpcResponse,
	EthNewPendingTransactionFilterJsonRpcResponse,
	EthProtocolVersionJsonRpcResponse,
	EthSendRawTransactionJsonRpcResponse,
	EthSendTransactionJsonRpcResponse,
	EthSignJsonRpcResponse,
	EthSignTransactionJsonRpcResponse,
	EthSyncingJsonRpcResponse,
	EthUninstallFilterJsonRpcResponse,
} from '../index.js'

/**
 * A mapping of `eth_*` method names to their return type
 */
export type EthReturnType = {
	eth_call: EthCallJsonRpcResponse
	eth_gasPrice: EthGasPriceJsonRpcResponse
	eth_sign: EthSignJsonRpcResponse
	eth_newBlockFilter: EthNewBlockFilterJsonRpcResponse
	eth_mining: EthMiningJsonRpcResponse
	eth_chainId: EthChainIdJsonRpcResponse
	eth_getCode: EthGetCodeJsonRpcResponse
	eth_getLogs: EthGetLogsJsonRpcResponse
	eth_syncing: EthSyncingJsonRpcResponse
	eth_accounts: EthAccountsJsonRpcResponse
	eth_coinbase: EthCoinbaseJsonRpcResponse
	eth_hashrate: EthHashrateJsonRpcResponse
	eth_newFilter: EthNewFilterJsonRpcResponse
	eth_getBalance: EthGetBalanceJsonRpcResponse
	eth_blockNumber: EthBlockNumberJsonRpcResponse
	eth_estimateGas: EthEstimateGasJsonRpcResponse
	eth_getStorageAt: EthGetStorageAtJsonRpcResponse
	eth_getFilterLogs: EthGetFilterLogsJsonRpcResponse
	eth_getBlockByHash: EthGetBlockByHashJsonRpcResponse
	eth_protocolVersion: EthProtocolVersionJsonRpcResponse
	eth_sendTransaction: EthSendTransactionJsonRpcResponse
	eth_signTransaction: EthSignTransactionJsonRpcResponse
	eth_uninstallFilter: EthUninstallFilterJsonRpcResponse
	eth_getBlockByNumber: EthGetBlockByNumberJsonRpcResponse
	eth_getFilterChanges: EthGetFilterChangesJsonRpcResponse
	eth_sendRawTransaction: EthSendRawTransactionJsonRpcResponse
	eth_getTransactionCount: EthGetTransactionCountJsonRpcResponse
	eth_getTransactionByHash: EthGetTransactionByHashJsonRpcResponse
	eth_getTransactionReceipt: EthGetTransactionReceiptJsonRpcResponse
	eth_getUncleCountByBlockHash: EthGetUncleCountByBlockHashJsonRpcResponse
	eth_getUncleCountByBlockNumber: EthGetUncleCountByBlockNumberJsonRpcResponse
	eth_getUncleByBlockHashAndIndex: EthGetUncleByBlockHashAndIndexJsonRpcResponse
	eth_newPendingTransactionFilter: EthNewPendingTransactionFilterJsonRpcResponse
	eth_getUncleByBlockNumberAndIndex: EthGetUncleByBlockNumberAndIndexJsonRpcResponse
	eth_getBlockTransactionCountByHash: EthGetBlockTransactionCountByHashJsonRpcResponse
	eth_getBlockTransactionCountByNumber: EthGetBlockTransactionCountByNumberJsonRpcResponse
	eth_getTransactionByBlockHashAndIndex: EthGetTransactionByBlockHashAndIndexJsonRpcResponse
	eth_getTransactionByBlockNumberAndIndex: EthGetTransactionByBlockNumberAndIndexJsonRpcResponse
}
