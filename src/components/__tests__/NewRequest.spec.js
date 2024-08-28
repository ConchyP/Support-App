import { shallowMount } from '@vue/test-utils';
import NewRequest from '@/components/NewRequest.vue';

describe('NewRequest.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NewRequest);
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a form with required fields', () => {
    expect(wrapper.find('input#DateRequest').exists()).toBe(true);
    expect(wrapper.find('input#Name').exists()).toBe(true);
    expect(wrapper.find('select#TypeRequest').exists()).toBe(true);
    expect(wrapper.find('textarea#Description').exists()).toBe(true);
  });

  it('renders the correct options in TypeRequest select box', () => {
    const options = wrapper.find('select#TypeRequest').findAll('option');
    expect(options.at(1).text()).toBe('Connection issues');
    expect(options.at(2).text()).toBe('Peripherals failure');
    expect(options.at(3).text()).toBe('Password error');
    expect(options.at(4).text()).toBe('Printing problems');
    expect(options.at(5).text()).toBe('Others');
  });

  it('binds data correctly with v-model', async () => {
    const dateInput = wrapper.find('input#DateRequest');
    await dateInput.setValue('2023-07-29');
    expect(wrapper.vm.form.DateRequest).toBe('2023-07-29');

    const nameInput = wrapper.find('input#Name');
    await nameInput.setValue('John Doe');
    expect(wrapper.vm.form.Name).toBe('John Doe');

    const selectInput = wrapper.find('select#TypeRequest');
    await selectInput.setValue('Connection issues');
    expect(wrapper.vm.form.TypeRequest).toBe('Connection issues');

    const textareaInput = wrapper.find('textarea#Description');
    await textareaInput.setValue('This is a test description.');
    expect(wrapper.vm.form.Description).toBe('This is a test description.');
  });

  it('calls submitForm on form submit', async () => {
    wrapper.vm.submitForm = jest.fn();
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.submitForm).toHaveBeenCalled();
  });
});
