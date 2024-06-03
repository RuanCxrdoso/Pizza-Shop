import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { getManagedRestaurant } from '../api/get-managed-restaurant'
import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = zod.object({
  name: zod.string().min(1),
  description: zod.string(),
})

type StoreProfileProps = zod.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryFn: getManagedRestaurant,
    queryKey: ['managed-restaurant'],
  })

  const { register, handleSubmit } = useForm<StoreProfileProps>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  function handleFormSubmit(data: StoreProfileProps) {
    return data
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seus estabelecimento visíveis ao seu
          cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input
              className="col-span-3"
              id="name"
              value={managedRestaurant?.name}
              {...register('name')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea className="col-span-3" {...register('description')} />
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="ghost">
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
