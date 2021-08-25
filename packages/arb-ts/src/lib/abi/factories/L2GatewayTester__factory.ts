/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L2GatewayTester,
  L2GatewayTesterInterface,
} from '../L2GatewayTester'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_sequenceNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_l2ToL1Id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalInitiated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'beaconProxyFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cloneableProxyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'getUserSalt',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_beaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_stubValue',
        type: 'address',
      },
    ],
    name: 'setStubAddressOracleReturn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stubAddressOracleReturn',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506119cd806100206000396000f3fe6080604052600436106100d25760003560e01c806386f1b3f71161007a57806386f1b3f7146103fe57806397881f8d14610431578063a0c76a9614610446578063a7e28d481461051f578063c05e6a9514610552578063c0c53b8b14610567578063d2ce7d65146105ac578063f887ea4014610646576100d2565b8062aa3a9b146100d7578063015234ab146101b05780630f09eb51146101d75780632db09c1c146101ec5780632e567b361461021d57806355e47ee814610328578063569f26ff1461033d5780637b3a3c8b14610370575b600080fd5b3480156100e357600080fd5b506101ae600480360360a08110156100fa57600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561013a57600080fd5b82018360208201111561014c57600080fd5b803590602001918460018302840111600160201b8311171561016d57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061065b945050505050565b005b3480156101bc57600080fd5b506101c5610855565b60408051918252519081900360200190f35b3480156101e357600080fd5b506101c561085b565b3480156101f857600080fd5b50610201610861565b604080516001600160a01b039092168252519081900360200190f35b6102b3600480360360a081101561023357600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561027557600080fd5b82018360208201111561028757600080fd5b803590602001918460018302840111600160201b831117156102a857600080fd5b509092509050610870565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102ed5781810151838201526020016102d5565b50505050905090810190601f16801561031a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561033457600080fd5b50610201610d19565b34801561034957600080fd5b506101c56004803603602081101561036057600080fd5b50356001600160a01b0316610d28565b6102b36004803603608081101561038657600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156103c057600080fd5b8201836020820111156103d257600080fd5b803590602001918460018302840111600160201b831117156103f357600080fd5b509092509050610d59565b34801561040a57600080fd5b506101ae6004803603602081101561042157600080fd5b50356001600160a01b0316610d6b565b34801561043d57600080fd5b506101c5610d8d565b34801561045257600080fd5b506102b3600480360360a081101561046957600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156104ab57600080fd5b8201836020820111156104bd57600080fd5b803590602001918460018302840111600160201b831117156104de57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e03945050505050565b34801561052b57600080fd5b506102016004803603602081101561054257600080fd5b50356001600160a01b0316610efb565b34801561055e57600080fd5b50610201610f30565b34801561057357600080fd5b506101ae6004803603606081101561058a57600080fd5b506001600160a01b038135811691602081013582169160409091013516610f3f565b6102b3600480360360c08110156105c257600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561060857600080fd5b82018360208201111561061a57600080fd5b803590602001918460018302840111600160201b8311171561063b57600080fd5b509092509050610fb9565b34801561065257600080fd5b50610201611186565b3330146106af576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b6106c1826001600160a01b0316611195565b610712576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b61071d85838661119b565b600061072761085b565b5a039050805a116107695760405162461bcd60e51b815260040180806020018281038252602b81526020018061196d602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156107e65781810151838201526020016107ce565b50505050905090810190601f1680156108135780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b15801561083457600080fd5b5087f1158015610848573d6000803e3d6000fd5b5050505050505050505050565b60025481565b61c35090565b6000546001600160a01b031681565b6000546060906001600160a01b031633146108cd576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060806108da8585611218565b9150915060006108e98a610efb565b90506108fd816001600160a01b0316611195565b6109365760006109118b838c8c8c89611342565b905080156109345760405180602001604052806000815250945050505050610d0f565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b6020831061099c5780518252601f19909201916020918201910161097d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146109fc576040519150601f19603f3d011682016040523d82523d6000602084013e610a01565b606091505b50915091506000821580610a16575060208251105b15610a2357506001610a52565b6000610a3083600c6114f4565b90508d6001600160a01b0316816001600160a01b031614610a5057600191505b505b8015610a9f57610a748d308e8d60405180602001604052806000815250610e03565b9550610a81308b88611554565b50604051806020016040528060008152509650505050505050610d0f565b50508251159050610c99576000306001600160a01b031662aa3a9b838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b59578181015183820152602001610b41565b50505050905090810190601f168015610b865780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610ba957600080fd5b505af1925050508015610bba575060015b610bce57610bc9828b8a61119b565b610bd2565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c57578181015183820152602001610c3f565b50505050905090810190601f168015610c845780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610ca4565b610ca481898961119b565b876001600160a01b0316896001600160a01b03168b6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb28a6040518082815260200191505060405180910390a46040518060200160405280600081525093505050505b9695505050505050565b6004546001600160a01b031681565b604080516001600160a01b03831660208083019190915282518083038201815291830190925280519101205b919050565b6060610d0f8686866000808888610fb9565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600354604080516397881f8d60e01b815290516000926001600160a01b0316916397881f8d916004808301926020929190829003018186803b158015610dd257600080fd5b505afa158015610de6573d6000803e3d6000fd5b505050506040513d6020811015610dfc57600080fd5b5051905090565b6060632e567b3660e01b86868686610e1d60025488611580565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b83811015610e88578181015183820152602001610e70565b50505050905090810190601f168015610eb55780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6004546000906001600160a01b031615610f2157506004546001600160a01b0316610d54565b610f2a82611613565b92915050565b6003546001600160a01b031681565b610f4983836116b0565b6001600160a01b038116610f95576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b03929092169190911790555050565b60603415610ff9576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b6000606061100633611706565b1561101f57611015858561171a565b909250905061105c565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b6002546000908161106c8d610efb565b9050611080816001600160a01b0316611195565b6110c6576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b6110d181868d611758565b6110de8d868e8e88610e03565b95506110eb858c88611554565b925050818b6001600160a01b0316856001600160a01b03167f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d738f858f60405180846001600160a01b03166001600160a01b03168152602001838152602001828152602001935050505060405180910390a4506040805160208082019390935281518082039093018352810190529a9950505050505050505050565b6001546001600160a01b031681565b3b151590565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156111fb57600080fd5b505af115801561120f573d6000803e3d6000fd5b50505050505050565b6060808383604081101561122b57600080fd5b810190602081018135600160201b81111561124557600080fd5b82018360208201111561125757600080fd5b803590602001918460018302840111600160201b8311171561127857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156112ca57600080fd5b8201836020820111156112dc57600080fd5b803590602001918460018302840111600160201b831117156112fd57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b60008061134e88610d28565b600354604080516329a5c5cf60e01b81526004810184905290519293506000926001600160a01b03909216916329a5c5cf9160248082019260209290919082900301818787803b1580156113a157600080fd5b505af11580156113b5573d6000803e3d6000fd5b505050506040513d60208110156113cb57600080fd5b505160408051630c4edbe960e11b81526001600160a01b038c811660048301908152602483019384528851604484015288519495509085169363189db7d2938e938a9392606490910190602085019080838360005b83811015611438578181015183820152602001611420565b50505050905090810190601f1680156114655780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561148557600080fd5b505af1158015611499573d6000803e3d6000fd5b50505050876001600160a01b0316816001600160a01b031614156114c257600092505050610d0f565b6114e830866114e38c308c8b60405180602001604052806000815250610e03565b611554565b50600192505050610d0f565b60008160140183511015611544576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b6002805460010190556000805461157890829086906001600160a01b0316856117b8565b949350505050565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156115ca5781810151838201526020016115b2565b50505050905090810190601f1680156115f75780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6003546000906001600160a01b031663e75b21413061163185610d28565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060206040518083038186803b15801561167e57600080fd5b505afa158015611692573d6000803e3d6000fd5b505050506040513d60208110156116a857600080fd5b505192915050565b6116ba82826117cf565b6001600160a01b038116611702576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b5050565b6001546001600160a01b0390811691161490565b600060608383604081101561172e57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156112ca57600080fd5b826001600160a01b03166374f4f54783836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156111fb57600080fd5b60006117c68585858561189b565b95945050505050565b6001600160a01b038216611820576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b03161561186d576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6000806060846001600160a01b031687856040518082805190602001908083835b602083106118db5780518252601f1990920191602091820191016118bc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461193d576040519150601f19603f3d011682016040523d82523d6000602084013e611942565b606091505b509150915081600081146119555761195d565b815160208301fd5b5061053997965050505050505056fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a2646970667358221220d00959d879b0b26ed84088b0bad8d3207dab921a989e4a4d69fa5c13a7eee74264736f6c634300060b0033'

export class L2GatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2GatewayTester> {
    return super.deploy(overrides || {}) as Promise<L2GatewayTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2GatewayTester {
    return super.attach(address) as L2GatewayTester
  }
  connect(signer: Signer): L2GatewayTester__factory {
    return super.connect(signer) as L2GatewayTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2GatewayTesterInterface {
    return new utils.Interface(_abi) as L2GatewayTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2GatewayTester {
    return new Contract(address, _abi, signerOrProvider) as L2GatewayTester
  }
}
