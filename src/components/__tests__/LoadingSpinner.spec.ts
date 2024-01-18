/* eslint-disable import/no-extraneous-dependencies */

import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('LoadingSpinner', () => {
  it('renders correctly when loading state is true', () => {
    const wrapper = shallowMount(LoadingSpinner, {
      props: {
        isLoading: true,
      },
    })
    expect(wrapper.find('.spinner').exists()).toBe(true)
  })
  it('does not render correctly when loading state is false', () => {
    const wrapper = shallowMount(LoadingSpinner, {
      props: {
        isLoading: false,
      },
    })
    expect(wrapper.find('.spinner').exists()).toBe(false)
  })
})
