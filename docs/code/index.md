# 常见代码题

## 实现一个事件类 Event，包括 on()，off()，once()，emit() 方法

```js
class Event {
  constructor() {
    this.event = {}
  }
  
  on(name, fn) {
    if (!this.event[name]) {
      this.event[name] = []
    }
    this.event[name].push(fn)
  }
  
  once(name, fn) {
    if (!this.event[name]) {
      this.event[name] = []
    }
    const onceFn = () => {
      fn.apply(this, arguments)
      this.off(onceFn)
    }
  }
  
  emit(name, ...args) {
    const fns = this.event[name]
    
    fns.forEach(fn => fn(...args))
  }
  
  off(name, fn) {
    const fns = this.event[name]
    
    if (fns) {
      this.event[name] = fns.filter(cb => cb !== fn)
    }
  }
}
```

## 实现数字千分符
