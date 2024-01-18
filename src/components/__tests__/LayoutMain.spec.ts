/* eslint-disable import/no-extraneous-dependencies */

import LayoutMain from '@/components/layout/LayoutMain.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('LayoutMain', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(LayoutMain)
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('has a router link', () => {
    const wrapper = shallowMount(LayoutMain)
    expect(wrapper.html().includes('router-link')).toBe(true)
    expect(wrapper.html().includes('Characters')).toBe(true)
  })
})
