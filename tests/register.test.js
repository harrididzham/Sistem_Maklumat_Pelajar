import { describe, it, expect } from 'vitest'
import { registerUser } from '../register.js'

describe('Register', () => {
  it('password sama → berjaya', () => {
    expect(registerUser("1234", "1234")).toBe("Pendaftaran berjaya")
  })

  it('password tak sama → error', () => {
    expect(registerUser("1234", "9999")).toBe("Password tidak sepadan")
  })
})