import { shallow } from 'vue-test-utils';
import BaseTable from '@/components/base/BaseTable';

const headers = [
  {
    text: 'Dessert (100g serving)',
    sortable: false,
    value: 'name',
  },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Carbs (g)', value: 'carbs' },
  { text: 'Protein (g)', value: 'protein' },
  { text: 'Sodium (mg)', value: 'sodium' },
  { text: 'Calcium (%)', value: 'calcium' },
  { text: 'Iron (%)', value: 'iron' },
];

const items = [
  {
    value: false,
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    value: false,
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    value: false,
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    value: false,
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
];

describe('BaseTable.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(BaseTable, {
      propsData: {
        headers, items,
      },
    });
  });

  it('sets the initial items', () => {
    expect(cmp.vm.items).toEqual(items);
  });

  it('calls rowClick emit onClick', () => {
    cmp.vm.clicked(items[0]);
    expect(cmp.emitted().rowClick).toBeTruthy();
  });
});
