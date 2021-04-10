# 算法

## 树

### 深度优先遍历（DFS）

先序遍历，先访问根节点，再访问左节点，最后访问右节点

中序遍历，先访问左节点，再访问根节点，最后访问右节点

后序遍历，先访问左节点，再访问右节点，最后访问根节点

#### 节点
```js
function treeNode(val) {
    this.val = val
    this.left = this.right = null
}
```

#### 递归实现

```js
function traversal(root) {
  if (root) {
    // 先序
    console.log(root)
    traversal(root.left)
    
    // 中序
    // console.log(root)
    traversal(root.right)
    
    // 后序
    // console.log(root)
  }
}
```

#### 非递归实现

先序遍历：栈实现（先进后出），根节点先入栈，然后根节点出栈，右节点进栈，左节点进栈；

```js
function pre(root) {
  if (root) {
    let stack = []
    
    stack.push(root)
    
    while (stack.length > 0) {
      const node = stack.pop()
      console.log(node)
      
      if (node.right) {
        stack.push(node.right)
      }
      if (node.left) {
        stack.push(node.left)
      }
    } 
  }
}
```

中序遍历：栈实现

```js
function mid(root) {
  if(root) {
    let stack = []
    
    // 中序遍历是先左再根最后右
    // 所以首先应该先把最左边节点遍历到底依次 push 进栈
    // 当左边没有节点时，就打印栈顶元素，然后寻找右节点
    // 对于最左边的叶节点来说，可以把它看成是两个 null 节点的父节点
    // 左边打印不出东西就把父节点拿出来打印，然后再看右节点
    
    while (stack.length > 0 || root) {
      if (root) {
        stack.push(root)
        root = root.left
      } else {
        root = stack.pop()
        console.log(root)
        root = root.right
      }
    } 
  }
}
```

后序遍历：2个栈实现

```js
function pos(root) {
  if (root) {
    // 后序遍历是先左再右最后根
    // 所以对于一个栈来说，应该先 push 根节点
    // 然后 push 右节点，最后 push 左节点
    //    1
    //   / \
    //  2  3
    // [2, 3] stack1
    // [1] stack2
    // [2]
    // [1, 3]
    // []
    // [1, 3, 2]
    
    let stack1 = []
    let stack2 = []
    stack1.push(root)
    
    while (stack1.length > 0) {
      root = stack1.pop()
      stack2.push(root)
      
      if (root.left) {
        stack2.push(root.left)
      }
      if (root.right) {
        stack2.push(root.right)
      }
    } 
    
    while (stack2.length > 0) {
      root = stack2.pop()
      console.log(root)
    }
  }
}
```

### 广度优先遍历（BFS）

```js
function bfs(root) {
  if (!root) return null
  let q = new Queue()
  // 将根节点入队
  q.enQueue(root)
  // 循环判断队列是否为空，为空
  // 代表树遍历完毕
  while (!q.isEmpty()) {
    // 将队首出队，判断是否有左右子树
    // 有的话，就先左后右入队
    let n = q.deQueue()
    console.log(n.value)
    if (n.left) q.enQueue(n.left)
    if (n.right) q.enQueue(n.right)
  }
}
```
