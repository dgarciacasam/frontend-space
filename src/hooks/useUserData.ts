import { useEffect, useState } from 'react'

export const useUserData = (userId) => {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userId) return

    const fetchUserData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/users/${userId}`)
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        setUserData(data)
      } catch (err) {
        setError(err.message || 'Error desconocido')
        setUserData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [userId])

  return { userData, error, loading }
}
