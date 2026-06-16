import { describe, it, expect } from 'vitest'
import { filterStudents } from '../search.js'

const dummyData = [
  { id: 1, name: "Ali Ahmad" },
  { id: 2, name: "Siti Nur" },
  { id: 3, name: "John Doe" }
]

describe('Search Student', () => {
  it('cari nama Ali', () => {
    const result = filterStudents(dummyData, "Ali")
    expect(result.length).toBe(1)
  })

  it('cari tak jumpa', () => {
    const result = filterStudents(dummyData, "XYZ")
    expect(result.length).toBe(0)
  })
})