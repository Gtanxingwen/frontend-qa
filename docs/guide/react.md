# React

## React中 setState 什么时候是同步的，什么时候是 异步的？

React的setState本身并不是异步的，其批处理机制使得setState是异步的假象

React的更新机制

生命周期函数和React合成事件
  1. 在生命周期函数中无论调用多少次setState，都不会立即更新，而是将setState存储到_pendingStateQuene中，需要更新的组件
  会存储到dirtyComponent中；
  2. 在根组件didMount后，批处理更新机制为false，此时再取出_pendingStateQuene和dirtyComponent中的state和组件进行合并
  更新
  
原生事件和异步代码（setTimeout/setInterval）
  1. 原生事件不会触发React批处理机制，因而调用setState会直接更新；
  2. 异步代码中调用setState，由于js异步代码调用的机制，异步代码会暂存，等待同步代码执行，此时React批处理机制已经结束；
  因而直接更新 
  
总结：

React的setState会表现出同步和异步的现象，但是本质上是同步的，其批处理机制造成了异步的假象

## redux 为什么要把 reducer 设计成纯函数

redux的设计思想就是不产生副作用，数据更改的状态可回溯，所以redux中处处都是纯函数 
