import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import * as zod from 'zod'

import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select'

export const orderFiltersSchema = zod.object({
  orderId: zod.string().optional(),
  customerName: zod.string().optional(),
  status: zod.string().optional(),
})

export type orderFiltersSchema = zod.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId') ?? ''
  const customerName = searchParams.get('customerName') ?? ''
  const status = searchParams.get('status') ?? ''

  const { register, handleSubmit, control, reset } =
    useForm<orderFiltersSchema>({
      resolver: zodResolver(orderFiltersSchema),
      defaultValues: {
        orderId,
        customerName,
        status,
      },
    })

  function handleFilter({ orderId, customerName, status }: orderFiltersSchema) {
    setSearchParams((prev) => {
      if (orderId) {
        prev.set('orderId', orderId)
      } else {
        prev.delete('orderId')
      }

      if (customerName) {
        prev.set('customerName', customerName)
      } else {
        prev.delete('customerName')
      }

      if (status) {
        prev.set('status', status)
      } else {
        prev.delete('status')
      }

      prev.set('page', '1')

      return prev
    })
  }

  function handleClearFilters() {
    setSearchParams((prev) => {
      prev.delete('orderId')
      prev.delete('customerName')
      prev.delete('status')

      prev.set('page', '1')

      return prev
    })

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="Id do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />
      <Controller
        control={control}
        name="status"
        render={({ field: { name, onChange, value, disabled } }) => (
          <Select
            defaultValue="all"
            name={name}
            onValueChange={onChange}
            value={value}
            disabled={disabled}
          >
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Selecione um status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="cancel">Cancelado</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="delivery">Em entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button variant="secondary" type="submit">
        <Search className="mr-2 h-4 w-4" />
        Filtrar Resultados
      </Button>
      <Button onClick={handleClearFilters} variant="outline" type="button">
        <X className="mr-2 h-4 w-4" />
        Remover Filtros
      </Button>
    </form>
  )
}
