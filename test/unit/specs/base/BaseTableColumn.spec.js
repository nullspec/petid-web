import { shallow } from 'vue-test-utils';
import BaseTableColumn from '@/components/base/BaseTableColumn';

const props = {
  format: (item, index, createElement) => {
    if (!item[index]) {
      return createElement('v-icon', {
        class: 'class1',
      }, 'add');
    }
    return '';
  },
  item: {
    id: '1',
    name: 'Number 1',
  },
  index: '1',
};

describe('BaseTableColumn.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(BaseTableColumn, {
      propsData: {
        ...props,
      },
    });
  });

  it('sets the initial item', () => {
    expect(cmp.vm.item).toEqual(props.item);
  });

  it('sets the initial index', () => {
    expect(cmp.vm.index).toEqual(props.index);
  });
});
