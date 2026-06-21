import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentStep: 1,
  formData: {
    name: '',
    email: '',
    company: '',
    role: '',
    password: '',
  },
  isComplete: false,
}

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < 4) state.currentStep += 1
    },
    prevStep: (state) => {
      if (state.currentStep > 1) state.currentStep -= 1
    },
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload }
    },
    completeOnboarding: (state) => {
      state.isComplete = true
      state.currentStep = 4
    },
    resetOnboarding: () => initialState,
  },
})

export const { nextStep, prevStep, updateForm, completeOnboarding, resetOnboarding } = onboardingSlice.actions
export default onboardingSlice.reducer