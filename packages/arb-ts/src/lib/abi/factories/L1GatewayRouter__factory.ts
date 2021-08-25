/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1GatewayRouter,
  L1GatewayRouterInterface,
} from '../L1GatewayRouter'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newDefaultGateway',
        type: 'address',
      },
    ],
    name: 'DefaultGatewayUpdated',
    type: 'event',
  },
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
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'GatewaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userFrom',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'TransferRouted',
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
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'WhitelistSourceUpdated',
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
    name: 'defaultGateway',
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
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'getGateway',
    outputs: [
      {
        internalType: 'address',
        name: 'gateway',
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
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
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
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_defaultGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_whitelist',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_counterpartGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'l1TokenToGateway',
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
        name: '_token',
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
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
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
        name: 'newL1DefaultGateway',
        type: 'address',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setDefaultGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_creditBackAddress',
        type: 'address',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_token',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_gateway',
        type: 'address[]',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateways',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'updateWhitelistSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
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
  '0x608060405234801561001057600080fd5b50611adc806100206000396000f3fe6080604052600436106101045760003560e01c80638da5cb5b116100a0578063d2ce7d6511610064578063d2ce7d651461063a578063dd614569146106d4578063ed08fdc61461070c578063f887ea401461073f578063fb0e722b1461075457610104565b80638da5cb5b146104d157806393e59dc1146104e6578063a0c76a96146104fb578063a7e28d48146105d4578063bda009fe1461060757610104565b8063032958021461010957806313af40351461013a5780631459457a1461016f5780632d67b72d146101c45780632db09c1c146102185780632e567b361461022d57806347466f98146103385780635625a9521461036b578063658b53f4146103a3575b600080fd5b34801561011557600080fd5b5061011e610769565b604080516001600160a01b039092168252519081900360200190f35b34801561014657600080fd5b5061016d6004803603602081101561015d57600080fd5b50356001600160a01b0316610778565b005b34801561017b57600080fd5b5061016d600480360360a081101561019257600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013582169160809091013516610831565b610206600480360360a08110156101da57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080909101351661087f565b60408051918252519081900360200190f35b34801561022457600080fd5b5061011e6109d9565b6102c3600480360360a081101561024357600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561028557600080fd5b82018360208201111561029757600080fd5b803590602001918460018302840111600160201b831117156102b857600080fd5b5090925090506109e8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102fd5781810151838201526020016102e5565b50505050905090810190601f16801561032a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561034457600080fd5b5061016d6004803603602081101561035b57600080fd5b50356001600160a01b0316610a2e565b6102066004803603608081101561038157600080fd5b506001600160a01b038135169060208101359060408101359060600135610ad1565b610206600480360360a08110156103b957600080fd5b810190602081018135600160201b8111156103d357600080fd5b8201836020820111156103e557600080fd5b803590602001918460208302840111600160201b8311171561040657600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561045557600080fd5b82018360208201111561046757600080fd5b803590602001918460208302840111600160201b8311171561048857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060208101359060400135610c6e565b3480156104dd57600080fd5b5061011e610cd5565b3480156104f257600080fd5b5061011e610ce4565b34801561050757600080fd5b506102c3600480360360a081101561051e57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561056057600080fd5b82018360208201111561057257600080fd5b803590602001918460018302840111600160201b8311171561059357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610cf3945050505050565b3480156105e057600080fd5b5061011e600480360360208110156105f757600080fd5b50356001600160a01b0316610ef5565b34801561061357600080fd5b5061011e6004803603602081101561062a57600080fd5b50356001600160a01b0316610fa6565b6102c3600480360360c081101561065057600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561069657600080fd5b8201836020820111156106a857600080fd5b803590602001918460018302840111600160201b831117156106c957600080fd5b509092509050611008565b610206600480360360808110156106ea57600080fd5b506001600160a01b0381351690602081013590604081013590606001356110f1565b34801561071857600080fd5b5061011e6004803603602081101561072f57600080fd5b50356001600160a01b0316611109565b34801561074b57600080fd5b5061011e611124565b34801561076057600080fd5b5061011e611133565b6004546001600160a01b031681565b6005546001600160a01b031633146107c4576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b6001600160a01b03811661080f576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b61083d82600086611142565b600580546001600160a01b03199081166001600160a01b0397881617909155600080548216948716949094179093556006805490931694169390931790555050565b600061088a336111b9565b6108cf576040805162461bcd60e51b81526020600482015260116024820152701393d517d19493d357d0d3d395149050d5607a1b604482015290519081900360640190fd5b6108e1866001600160a01b03166111b9565b610924576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d513d7d0d3d395149050d5608a1b604482015290519081900360640190fd5b60408051600180825281830190925260609160208083019080368337019050509050338160008151811061095457fe5b6001600160a01b039290921660209283029190910190910152604080516001808252818301909252606091816020016020820280368337019050509050878160008151811061099f57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250506109cd8282898989896111bf565b98975050505050505050565b6001546001600160a01b031681565b6040805162461bcd60e51b815260206004820152601460248201527327a7262cafa7aaaa2127aaa7222fa927aaaa22a960611b6044820152905160609181900360640190fd5b6000546001600160a01b03163314610a7d576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015290519081900360640190fd5b600080546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac2274657779181900360200190a150565b6005546000906001600160a01b03163314610b20576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b600480546001600160a01b0387166001600160a01b0319909116811790915560408051918252517f3a8f8eb961383a94d41d193e16a3af73eaddfd5764a4c640257323a1603ac3319181900360200190a160006001600160a01b03861615610bea57856001600160a01b0316632db09c1c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610bbb57600080fd5b505afa158015610bcf573d6000803e3d6000fd5b505050506040513d6020811015610be557600080fd5b505190505b604080516001600160a01b038084166024808401919091528351808403909101815260449092018352602082810180516001600160e01b031663f7c9362f60e01b17905260065460015485516060810187528981529283018b90529482018990529293610c6393831692169033903490600090876114e9565b979650505050505050565b6005546000906001600160a01b03163314610cbd576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b610ccb8686868686336111bf565b9695505050505050565b6005546001600160a01b031681565b6000546001600160a01b031681565b60606000610d0087610fa6565b9050806001600160a01b031663a0c76a9688888888886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610db0578181015183820152602001610d98565b50505050905090810190601f168015610ddd5780820380516001836020036101000a031916815260200191505b50965050505050505060006040518083038186803b158015610dfe57600080fd5b505afa158015610e12573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610e3b57600080fd5b8101908080516040519392919084600160201b821115610e5a57600080fd5b908301906020820185811115610e6f57600080fd5b8251600160201b811182820188101715610e8857600080fd5b82525081516020918201929091019080838360005b83811015610eb5578181015183820152602001610e9d565b50505050905090810190601f168015610ee25780820380516001836020036101000a031916815260200191505b5060405250505091505095945050505050565b600080610f0183610fa6565b90506001600160a01b038116610f1b576000915050610fa1565b806001600160a01b031663a7e28d48846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610f7157600080fd5b505afa158015610f85573d6000803e3d6000fd5b505050506040513d6020811015610f9b57600080fd5b50519150505b919050565b6001600160a01b038082166000908152600360205260409020541680610fd457506004546001600160a01b03165b6001600160a01b03811660011480610ffb5750610ff9816001600160a01b03166111b9565b155b15610fa157506000610fa1565b6000546060906001600160a01b0316156110d6576000546040805163babcc53960e01b815233600482015290516001600160a01b039092169163babcc53991602480820192602092909190829003018186803b15801561106757600080fd5b505afa15801561107b573d6000803e3d6000fd5b505050506040513d602081101561109157600080fd5b50516110d6576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d5d2125511531254d51151608a1b604482015290519081900360640190fd5b6110e588888888888888611508565b50979650505050505050565b6000611100858585853361087f565b95945050505050565b6003602052600090815260409020546001600160a01b031681565b6002546001600160a01b031681565b6006546001600160a01b031681565b6001600160a01b0382161561118b576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b611195838361175d565b600480546001600160a01b0319166001600160a01b03929092169190911790555050565b3b151590565b60008551875114611206576040805162461bcd60e51b815260206004820152600c60248201526b0aea49e9c8ebe988a9c8ea8960a31b604482015290519081900360640190fd5b60005b87518110156113c45786818151811061121e57fe5b6020026020010151600360008a848151811061123657fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555086818151811061128e57fe5b60200260200101516001600160a01b03168882815181106112ab57fe5b60200260200101516001600160a01b03167f812ca95fe4492a9e2d1f2723c2c40c03a60a27b059581ae20ac4e4d73bfba35460405160405180910390a360006001600160a01b03168782815181106112ff57fe5b60200260200101516001600160a01b0316146113bc5786818151811061132157fe5b60200260200101516001600160a01b0316632db09c1c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561136157600080fd5b505afa158015611375573d6000803e3d6000fd5b505050506040513d602081101561138b57600080fd5b5051875188908390811061139b57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b600101611209565b506060634201f98560e01b8888604051602401808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611418578181015183820152602001611400565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561145757818101518382015260200161143f565b50505050905001945050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090506109cd600660009054906101000a90046001600160a01b0316600160009054906101000a90046001600160a01b03168534600060405180606001604052808b81526020018d81526020018c815250875b60006109cd8888888888886000015189602001518a604001518a611829565b6060600061151589610fa6565b90506060611524338686611a3c565b604080516001600160a01b0385811682529151929350818c169233928e16917f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f5919081900360200190a4816001600160a01b031663d2ce7d65348c8c8c8c8c886040518863ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b0316815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156116125781810151838201526020016115fa565b50505050905090810190601f16801561163f5780820380516001836020036101000a031916815260200191505b509750505050505050506000604051808303818588803b15801561166257600080fd5b505af1158015611676573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f1916820160405260208110156116a057600080fd5b8101908080516040519392919084600160201b8211156116bf57600080fd5b9083019060208201858111156116d457600080fd5b8251600160201b8111828201881017156116ed57600080fd5b82525081516020918201929091019080838360005b8381101561171a578181015183820152602001611702565b50505050905090810190601f1680156117475780820380516001836020036101000a031916815260200191505b5060405250505092505050979650505050505050565b6001600160a01b0382166117ae576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6001546001600160a01b0316156117fb576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b6000808a6001600160a01b031663679b6ded898c8a8a8e8f8c8c8c6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156118f05781810151838201526020016118d8565b50505050905090810190601f16801561191d5780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b15801561194257600080fd5b505af1158015611956573d6000803e3d6000fd5b50505050506040513d602081101561196d57600080fd5b81019080805190602001909291905050509050808a6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b0866040518080602001828103825283818151815260200191508051906020019080838360005b838110156119f45781810151838201526020016119dc565b50505050905090810190601f168015611a215780820380516001836020036101000a031916815260200191505b509250505060405180910390a49a9950505050505050505050565b606083838360405160200180846001600160a01b03166001600160a01b0316815260200180602001828103825284848281815260200192508082843760008184015260408051601f19601f909301831690940184810390920184525250999850505050505050505056fea26469706673582212205ebae349e872f2150acdaf2e9749f6c8731e5a5ff6dc30e5a3d73d9e0b2c232364736f6c634300060b0033'

export class L1GatewayRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1GatewayRouter> {
    return super.deploy(overrides || {}) as Promise<L1GatewayRouter>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayRouter {
    return super.attach(address) as L1GatewayRouter
  }
  connect(signer: Signer): L1GatewayRouter__factory {
    return super.connect(signer) as L1GatewayRouter__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1GatewayRouterInterface {
    return new utils.Interface(_abi) as L1GatewayRouterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayRouter {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayRouter
  }
}
