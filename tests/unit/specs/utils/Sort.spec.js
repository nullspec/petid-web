import Sort from '@/utils/Sort';

describe('Sort ', () => {
  const arr = [
    {
      num: 789,
      str: 'Umbrella',
      other: 'lkjsadf',
      numberfromanothermother: 31564864,
    },
    {
      num: 701,
      str: 'office',
      other: 'asdf',
      numberfromanothermother: 234234,
    },
    {
      num: 702,
      str: 'Patent',
      other: 'hjh',
      numberfromanothermother: 3453456,
    },
    {
      num: 699,
      str: 'kitten',
      other: 'lkjlkj',
      numberfromanothermother: 890890,
    },
    {
      num: 1024789,
      str: 'Zanzabar',
      other: 'lkjlkj',
      numberfromanothermother: 890890,
    },
    {
      num: 701.99,
      str: 'ozzie',
      other: 'lkjlkj',
      numberfromanothermother: 890890,
    },
    {
      num: 701,
      str: 'Office',
      other: ';weoiwer',
      numberfromanothermother: 89784,
    },
    {
      num: 7,
      str: 'banana',
      other: ';kasl;dkf',
      numberfromanothermother: 89789987978,
    },
  ];

  it('sorts by number asc', () => {
    const arr1 = Sort.sortArrayObject(arr, 'num', false);
    let i = 0;
    expect(arr1[i].num).toEqual(7);
    expect(arr1[i += 1].num).toEqual(699);
    expect(arr1[i += 1].num).toEqual(701);
    expect(arr1[i += 1].num).toEqual(701);
    expect(arr1[i += 1].num).toEqual(701.99);
    expect(arr1[i += 1].num).toEqual(702);
    expect(arr1[i += 1].num).toEqual(789);
    expect(arr1[i += 1].num).toEqual(1024789);
  });

  it('sorts by number desc', () => {
    const arr1 = Sort.sortArrayObject(arr, 'num', true);
    let i = 0;
    expect(arr1[i].num).toEqual(1024789);
    expect(arr1[i += 1].num).toEqual(789);
    expect(arr1[i += 1].num).toEqual(702);
    expect(arr1[i += 1].num).toEqual(701.99);
    expect(arr1[i += 1].num).toEqual(701);
    expect(arr1[i += 1].num).toEqual(701);
    expect(arr1[i += 1].num).toEqual(699);
    expect(arr1[i += 1].num).toEqual(7);
  });

  it('sorts by string asc', () => {
    const arr1 = Sort.sortArrayObject(arr, 'str', false);
    let i = 0;
    expect(arr1[i].str).toEqual('banana');
    expect(arr1[i += 1].str).toEqual('kitten');
    expect(arr1[i += 1].str).toEqual('office');
    expect(arr1[i += 1].str).toEqual('Office');
    expect(arr1[i += 1].str).toEqual('ozzie');
    expect(arr1[i += 1].str).toEqual('Patent');
    expect(arr1[i += 1].str).toEqual('Umbrella');
    expect(arr1[i += 1].str).toEqual('Zanzabar');
  });

  it('sorts by string asc', () => {
    const arr1 = Sort.sortArrayObject(arr, 'str', true);
    let i = 0;
    expect(arr1[i].str).toEqual('Zanzabar');
    expect(arr1[i += 1].str).toEqual('Umbrella');
    expect(arr1[i += 1].str).toEqual('Patent');
    expect(arr1[i += 1].str).toEqual('ozzie');
    expect(arr1[i += 1].str).toEqual('Office');
    expect(arr1[i += 1].str).toEqual('office');
    expect(arr1[i += 1].str).toEqual('kitten');
    expect(arr1[i += 1].str).toEqual('banana');
  });

  it('sort blank array returns a blank array', () => {
    const blankArr = [];
    const arr1 = Sort.sortArrayObject(blankArr, 'str', true);
    expect(arr1).toEqual([]);
  });

  it('returns the original array key is invalid', () => {
    const arr1 = Sort.sortArrayObject(arr, 'NONEXISTANTKEY', true);
    expect(arr1).toEqual(arr);
  });

  it('cmpStr returns properly', () => {
    const a = {
      '1key': 'x',
      '2key': 'y',
      '3key': 'z',
    };
    const b = {
      '1key': 'a',
      '2key': 'b',
      '3key': 'c',
    };

    expect(Sort.cmpStr(a, b, 'nonexist')).toEqual(-1);
    expect(Sort.cmpStr(a, b, '2key')).toEqual(1);
    expect(Sort.cmpStr(b, a, '2key')).toEqual(-1);
  });
});
