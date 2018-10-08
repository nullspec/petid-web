import { shallow } from 'vue-test-utils';
import BaseDeleteModal from '@/components/base/BaseDeleteModal';

const props = {
  componentName: 'My Modal',
};

describe('BaseDeleteModal.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(BaseDeleteModal, {
      propsData: {
        ...props,
      },
    });
  });

  it('sets the initial componentName', () => {
    expect(cmp.vm.componentName).toEqual(props.componentName);
  });
});
