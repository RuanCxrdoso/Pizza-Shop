import { api } from '../lib/axios'

interface UpdateProfileProps {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileProps) {
  api.put('/profile', {
    name,
    description,
  })
}
