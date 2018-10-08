class Sort {
  static sortArrayObject(arr, key, desc) {
    if (arr.length <= 0) {
      return [];
    }

    // Return if its a bad key
    if (typeof arr[0][key] === 'undefined') {
      return arr;
    }

    // Do not stomp original
    const tmp = Object.assign([], arr);

    // Are these numbers?
    const sniffInt = Number.isInteger(arr[0][key]);

    if (sniffInt) {
      tmp.sort((a, b) => Sort.cmpInt(a, b, key));
    } else {
      tmp.sort((a, b) => Sort.cmpStr(a, b, key));
    }
    if (desc) {
      tmp.reverse();
    }
    return tmp;
  }

  static cmpInt(a, b, key) {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  }

  static cmpStr(a, b, key) {
    if (!a[key] || !b[key]) {
      return -1;
    }
    return a[key].toLowerCase().localeCompare(b[key].toLowerCase());
  }
}

export default Sort;
