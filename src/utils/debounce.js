export function debounce(fun, delay) {
  let timer = null;
  return function(...arg) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      console.log(fun);
      fun.apply(this, arg);
    }, delay);
  };
}

export function throttle(fun, delat) {
  let canRun = true
  return function (...arg) {
    if (!canRun) {
      return
    }
    setTimeout(() => {
      fun.apply(this, arg)
      canRun = true
    }, delat)
    canRun = false
  }
}