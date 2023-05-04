//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); 
    let objectInCache = cache.find((item) => item.hash === hash); 
    if (objectInCache) { 
      let i = cache.indexOf(objectInCache);
      console.log("Из кэша: " + cache[i].value); 
      return "Из кэша: " + cache[i].value;
    }

    let result = func(...args); 
    cache.push({
      hash: md5(args), 
      value: result
    }); 
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);    
    return "Вычисляем: " + result;  
  }
  return wrapper; 
}



//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutID = null;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if(timeoutID === null) {
      func(...args);
      wrapper.count += 1;
    }

    if(timeoutID) {
      console.log("удалили текущий таймаут");
      clearTimeout(timeoutID);
    } 

    console.log("создаем новый таймаут");
    timeoutID = setTimeout(() => {
      timeoutID = null;
     
      wrapper.count += 1;
      console.log("вызвали колбек");
      func(...args);
      wrapper.count += 1;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}