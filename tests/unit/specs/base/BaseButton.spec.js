import { mount, createLocalVue } from 'vue-test-utils';
import BaseButton from '@/components/base/BaseButton';

const localVue = createLocalVue();

const props = {
  color: 'primary',
  disabled: true,
  text: 'Warp 9',
};

// const onClick = jest.fn();

describe('BaseButton.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(BaseButton, {
      localVue,
      propsData: {
        ...props,
      },
      // methods: {
      //   onClick,
      // },
    });
  });

  it('sets the initial color', () => {
    expect(cmp.vm.color).toEqual(props.color);
  });

  it('sets the initial disabled', () => {
    expect(cmp.vm.disabled).toEqual(props.disabled);
  });

  it('sets the initial text', () => {
    expect(cmp.vm.text).toEqual(props.text);
  });

  it('defaults to a button', () => {
    expect(cmp.findAll('v-btn').length).toEqual(1);
    expect(cmp.findAll('v-icon').length).toEqual(0);
  });

  it('should trigger a click method', () => {
    cmp.findAll('v-btn').trigger('click');
    expect(cmp.emitted().clicked).toBeTruthy();
  });

  it('displays an icon if passed one', () => {
    const btnWrapper = mount(BaseButton, {
      propsData: {
        icon: {
          type: 'android',
        },
      },
    });

    expect(btnWrapper.findAll('v-icon').length).toEqual(1);
  });
});
