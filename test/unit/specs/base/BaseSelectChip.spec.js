import { shallow } from 'vue-test-utils';
import BaseSelectChip from '@/components/base/BaseSelectChip';

const props = {
  label: 'Chips Ahoy',
  value: [
    {
      val: 'cookie',
      txt: 'cookie',
    },
  ],
  available: [
    {
      val: 'cookie',
      txt: 'cookie',
    },
    {
      val: 'cake',
      txt: 'cake',
    },
    {
      val: 'icecream',
      txt: 'icecream',
    },
  ],
  disabled: false,
  itemText: 'txt',
  itemValue: 'val',
};

describe('BaseSelectChip.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(BaseSelectChip, {
      propsData: {
        ...props,
      },
    });
  });

  it('sets the initial label', () => {
    expect(cmp.vm.label).toEqual(props.label);
  });

  it('sets the initial value', () => {
    expect(cmp.vm.value).toEqual(props.value);
  });

  it('sets the initial available', () => {
    expect(cmp.vm.available).toEqual(props.available);
  });
});
