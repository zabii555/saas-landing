import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nextStep, prevStep, updateForm, completeOnboarding, resetOnboarding } from '../store/onboardingSlice'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const Onboarding = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentStep, formData, isComplete } = useSelector(state => state.onboarding)
  const [errors, setErrors] = useState({})

  const steps = [
    { title: 'Welcome', icon: '👋' },
    { title: 'Your Info', icon: '📝' },
    { title: 'Account', icon: '🔐' },
    { title: 'Complete', icon: '🎉' },
  ]

  const validateStep = () => {
    const newErrors = {}
    if (currentStep === 2) {
      if (!formData.name) newErrors.name = 'Name is required'
      if (!formData.email) newErrors.email = 'Email is required'
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
      if (!formData.company) newErrors.company = 'Company is required'
    }
    if (currentStep === 3) {
      if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (currentStep < 3 && !validateStep()) return
    if (currentStep === 3) {
      dispatch(completeOnboarding())
      setTimeout(() => navigate('/dashboard'), 1500)
    } else {
      dispatch(nextStep())
    }
  }

  const handlePrev = () => dispatch(prevStep())

  const handleChange = (e) => {
    dispatch(updateForm({ [e.target.name]: e.target.value }))
  }

  if (isComplete) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-2">Onboarding Complete!</h2>
          <p className="text-gray-600 dark:text-gray-400">Your account is ready. Redirecting to dashboard...</p>
          <button onClick={() => { dispatch(resetOnboarding()); navigate('/') }} className="btn-primary mt-6">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold mb-4">Welcome to SaaSPro!</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              Let's get you set up in just a few steps. You'll be up and running in no time.
            </p>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Information</h2>
            <div>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-800" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-800" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-800" />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>
            <div>
              <input type="text" name="role" placeholder="Your Role" value={formData.role} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-800" />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <div>
              <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-800" />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <p className="text-sm text-gray-500">Password must be at least 6 characters.</p>
          </div>
        )
      default: return null
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full card">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${i + 1 === currentStep ? 'bg-indigo-600 text-white' : i + 1 < currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  {i + 1 < currentStep ? <CheckCircle size={18} /> : s.icon}
                </div>
                <span className={`text-xs mt-1 ${i + 1 === currentStep ? 'text-indigo-600 font-bold' : 'text-gray-500'}`}>{s.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
            <div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(currentStep / steps.length) * 100}%` }} />
          </div>
        </div>

        {getStepContent()}

        <div className="flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button onClick={handlePrev} disabled={currentStep === 1} className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 disabled:opacity-50">
            <ChevronLeft size={18} /> Back
          </button>
          <button onClick={handleNext} className="btn-primary flex items-center gap-2">
            {currentStep === 3 ? 'Complete' : 'Next'} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding;