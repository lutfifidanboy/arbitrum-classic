/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface L1ERC20GatewayInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'cloneableProxyHash()': FunctionFragment
    'counterpartGateway()': FunctionFragment
    'encodeWithdrawal(uint256,address)': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'gasReserveIfCallRevert()': FunctionFragment
    'getExternalCall(uint256,address,bytes)': FunctionFragment
    'getOutboundCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'inboundEscrowAndCall(address,uint256,address,address,bytes)': FunctionFragment
    'inbox()': FunctionFragment
    'initialize(address,address,address,bytes32,address)': FunctionFragment
    'l2BeaconProxyFactory()': FunctionFragment
    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)': FunctionFragment
    'redirectedExits(bytes32)': FunctionFragment
    'router()': FunctionFragment
    'transferExitAndCall(uint256,address,address,bytes,bytes)': FunctionFragment
    'updateWhitelistSource(address)': FunctionFragment
    'whitelist()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'cloneableProxyHash',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'counterpartGateway',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'encodeWithdrawal',
    values: [BigNumberish, string]
  ): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'gasReserveIfCallRevert',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getExternalCall',
    values: [BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getOutboundCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'inboundEscrowAndCall',
    values: [string, BigNumberish, string, string, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'inbox', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, string, BytesLike, string]
  ): string
  encodeFunctionData(
    functionFragment: 'l2BeaconProxyFactory',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'redirectedExits',
    values: [BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'router', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'transferExitAndCall',
    values: [BigNumberish, string, string, BytesLike, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'updateWhitelistSource',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'whitelist', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'cloneableProxyHash',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'counterpartGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'encodeWithdrawal',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'gasReserveIfCallRevert',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getExternalCall',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getOutboundCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'inboundEscrowAndCall',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'inbox', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'l2BeaconProxyFactory',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'redirectedExits',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferExitAndCall',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'updateWhitelistSource',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'whitelist', data: BytesLike): Result

  events: {
    'DepositFinalized(address,address,address,uint256)': EventFragment
    'DepositInitiated(address,address,address,uint256,uint256)': EventFragment
    'TransferAndCallTriggered(bool,address,address,uint256,bytes)': EventFragment
    'TxToL2(address,address,uint256,bytes)': EventFragment
    'WhitelistSourceUpdated(address)': EventFragment
    'WithdrawRedirected(address,address,uint256,bytes,bytes,bool)': EventFragment
    'WithdrawalFinalized(address,address,address,uint256,uint256)': EventFragment
    'WithdrawalInitiated(address,address,address,uint256,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DepositFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DepositInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferAndCallTriggered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TxToL2'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WhitelistSourceUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawRedirected'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawalFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawalInitiated'): EventFragment
}

export class L1ERC20Gateway extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: L1ERC20GatewayInterface

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    cloneableProxyHash(overrides?: CallOverrides): Promise<[string]>

    counterpartGateway(overrides?: CallOverrides): Promise<[string]>

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<[BigNumber]>

    getExternalCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { target: string; data: string }>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { outboundCalldata: string }>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    inbox(overrides?: CallOverrides): Promise<[string]>

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    l2BeaconProxyFactory(overrides?: CallOverrides): Promise<[string]>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, string] & {
        isExit: boolean
        _newTo: string
        _newData: string
      }
    >

    router(overrides?: CallOverrides): Promise<[string]>

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _newData: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    whitelist(overrides?: CallOverrides): Promise<[string]>
  }

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  cloneableProxyHash(overrides?: CallOverrides): Promise<string>

  counterpartGateway(overrides?: CallOverrides): Promise<string>

  encodeWithdrawal(
    _exitNum: BigNumberish,
    _initialDestination: string,
    overrides?: CallOverrides
  ): Promise<string>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

  getExternalCall(
    _exitNum: BigNumberish,
    _initialDestination: string,
    _initialData: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string] & { target: string; data: string }>

  getOutboundCalldata(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  inboundEscrowAndCall(
    _l2Address: string,
    _amount: BigNumberish,
    _from: string,
    _to: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  inbox(overrides?: CallOverrides): Promise<string>

  initialize(
    _l2Counterpart: string,
    _router: string,
    _inbox: string,
    _cloneableProxyHash: BytesLike,
    _l2BeaconProxyFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  l2BeaconProxyFactory(overrides?: CallOverrides): Promise<string>

  outboundTransfer(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  redirectedExits(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, string] & {
      isExit: boolean
      _newTo: string
      _newData: string
    }
  >

  router(overrides?: CallOverrides): Promise<string>

  transferExitAndCall(
    _exitNum: BigNumberish,
    _initialDestination: string,
    _newDestination: string,
    _newData: BytesLike,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  updateWhitelistSource(
    newSource: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  whitelist(overrides?: CallOverrides): Promise<string>

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    cloneableProxyHash(overrides?: CallOverrides): Promise<string>

    counterpartGateway(overrides?: CallOverrides): Promise<string>

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<string>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

    getExternalCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { target: string; data: string }>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    inbox(overrides?: CallOverrides): Promise<string>

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: CallOverrides
    ): Promise<void>

    l2BeaconProxyFactory(overrides?: CallOverrides): Promise<string>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, string] & {
        isExit: boolean
        _newTo: string
        _newData: string
      }
    >

    router(overrides?: CallOverrides): Promise<string>

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _newData: BytesLike,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    updateWhitelistSource(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    whitelist(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    DepositFinalized(
      l1Token?: string | null,
      _from?: string | null,
      _to?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { l1Token: string; _from: string; _to: string; _amount: BigNumber }
    >

    DepositInitiated(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _sequenceNumber?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _sequenceNumber: BigNumber
        _amount: BigNumber
      }
    >

    TransferAndCallTriggered(
      success?: null,
      _from?: string | null,
      _to?: string | null,
      _amount?: null,
      callHookData?: null
    ): TypedEventFilter<
      [boolean, string, string, BigNumber, string],
      {
        success: boolean
        _from: string
        _to: string
        _amount: BigNumber
        callHookData: string
      }
    >

    TxToL2(
      _from?: string | null,
      _to?: string | null,
      _seqNum?: BigNumberish | null,
      _data?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { _from: string; _to: string; _seqNum: BigNumber; _data: string }
    >

    WhitelistSourceUpdated(
      newSource?: null
    ): TypedEventFilter<[string], { newSource: string }>

    WithdrawRedirected(
      from?: string | null,
      to?: string | null,
      exitNum?: BigNumberish | null,
      newData?: null,
      data?: null,
      madeExternalCall?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, boolean],
      {
        from: string
        to: string
        exitNum: BigNumber
        newData: string
        data: string
        madeExternalCall: boolean
      }
    >

    WithdrawalFinalized(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _exitNum?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _exitNum: BigNumber
        _amount: BigNumber
      }
    >

    WithdrawalInitiated(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _l2ToL1Id?: BigNumberish | null,
      _exitNum?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _l2ToL1Id: BigNumber
        _exitNum: BigNumber
        _amount: BigNumber
      }
    >
  }

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    cloneableProxyHash(overrides?: CallOverrides): Promise<BigNumber>

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

    getExternalCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    inbox(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    l2BeaconProxyFactory(overrides?: CallOverrides): Promise<BigNumber>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    router(overrides?: CallOverrides): Promise<BigNumber>

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _newData: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    whitelist(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    cloneableProxyHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    gasReserveIfCallRevert(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getExternalCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _initialData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    l2BeaconProxyFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _newData: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
