export const getUser = async (userId) => {
  const url = `https://64dd6d6a825d19d9bfb1280b.mockapi.io/api/v1/users/${userId}`

  const response = await fetch(url)

  const data = await response.json()

  return data.budget
}

export const createExpense = async (name, amount) => {
  const url = `https://64dd6d6a825d19d9bfb1280b.mockapi.io/api/v1/expenses`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, amount })
  }

  const response = await fetch(url, options)

  const data = await response.json()

  return data.budget
} 