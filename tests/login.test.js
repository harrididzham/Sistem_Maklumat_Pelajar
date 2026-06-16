import { describe, it, expect } from 'vitest'
import { loginUser } from '../login.js'

describe('Login', () => {
  it('login berjaya jika lengkap', () => {
    expect(loginUser("test@mail.com", "1234")).toBe("Log masuk berjaya")
  })

  it('email/password kosong', () => {
    expect(loginUser("", "")).toBe("Sila isi email dan password")
  })
})