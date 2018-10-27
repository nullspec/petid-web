import { shallow } from 'vue-test-utils';
import BaseTableHeader from '@/components/base/BaseTableHeader';

const event = {
  currentTarget: {
    value: 42,
  },
};

describe('BaseTableHeader.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(BaseTableHeader, {});
  });

  it('onChange emits', () => {
    cmp.vm.onChange(event);
    expect(cmp.emitted().searchChange).toBeTruthy();
  });

  it('refresh emits', () => {
    cmp.vm.refresh(event);
    expect(cmp.emitted().refresh).toBeTruthy();
  });
});
