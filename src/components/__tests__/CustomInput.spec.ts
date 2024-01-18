/* eslint-disable import/no-extraneous-dependencies */
import CustomInput from '@/components/CustomInput.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('CustomInput.vue', () => {
  it('renders correctly CustomInput component', async () => {
    const wrapper = mount(CustomInput)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('renders correctly with props', async () => {
    const wrapper = mount(CustomInput, {
      props: {
        placeholder: 'Search for anything',
        type: 'text',
      } as any,
    })
    expect(wrapper.vm?.$props.placeholder).toEqual('Search for anything')
    expect(wrapper.vm?.$props.type).toEqual('text')
  })

  it("Should emit 'update:modelValue' event on modelValue change", async () => {
    const wrapper = mount(CustomInput, {
      props: {
        modelValue: 'Rick',
      },
    })
    if (wrapper.vm) {
      expect(wrapper.vm.modelValue).toEqual('Rick')

      wrapper.vm.modelValue = 'new value'
      if (wrapper.emitted('update:modelValue')) {
        expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('new value')
      }
    }
  })
})
