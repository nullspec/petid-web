import { shallow } from 'vue-test-utils';
import BaseControlInput from '@/components/base/BaseControlInput';

const props = {
  label: 'Input 1',
  name: 'spot',
  text: 'Foobar',
  readonly: false,
};

describe('BaseControlInput.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(BaseControlInput, {
      propsData: {
        ...props,
      },
    });
  });

  it('sets the initial label', () => {
    expect(cmp.vm.label).toEqual(props.label);
  });

  it('sets the initial name', () => {
    expect(cmp.vm.name).toEqual(props.name);
  });

  it('Initial Color is accent', () => {
    expect(cmp.vm.color).toEqual('accent');
  });
});
