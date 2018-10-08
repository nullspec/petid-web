import { shallow } from 'vue-test-utils';
import BaseConfirmModal from '@/components/base/BaseConfirmModal';

const props = {
  title: 'Modal Title',
  text: 'Modal Text',
};

describe('BaseConfirmModal.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(BaseConfirmModal, {
      propsData: {
        ...props,
      },
    });
  });

  it('sets the initial title', () => {
    expect(cmp.vm.title).toEqual(props.title);
  });

  it('sets the initial text', () => {
    expect(cmp.vm.text).toEqual(props.text);
  });

  it('isOpen is set when open changes', () => {
    cmp.setProps({
      open: true,
    });
    expect(cmp.vm.isOpen).toBeTruthy();
  });

  it('confirm button emits and sets open to false', () => {
    cmp.findAll('v-btn').at(1).trigger('click');
    expect(cmp.emitted().clicked).toBeTruthy();
    expect(cmp.isOpen).toBeFalsy();
  });
});
