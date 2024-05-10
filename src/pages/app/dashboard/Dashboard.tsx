import { Helmet } from 'react-helmet-async'

import { DayOrdersAmoutCard } from './components/day-orders-amount-card'
import { MonthCancelOrdersAmount } from './components/month-cancel-orders-amount-card'
import { MonthOrdersAmountCard } from './components/month-orders-amount-card'
import { MonthRevenueCard } from './components/month-revenue-card'
import { PopularProductChar } from './components/popular-products-chart'
import { RevenueChart } from './components/revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmoutCard />
          <MonthCancelOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductChar />
        </div>
      </div>
    </>
  )
}
