import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import Verticals from './dashHomeContent/Verticals'
import InfoBox from './dashHomeContent/InfoBox'
const DashboardHome = () => {
  const token = useSelector(state => state.cart.token)
  const { data, isLoading } = useFetch('orders', 'GET', null, token)
  let ProductNumber = 0
  let price = 0
  if (!isLoading) {
    data?.data?.orders?.forEach(ele => {
      ProductNumber += ele.order.length
      ele.order.forEach(elemnt => {
        price += elemnt?.price
      })
    })
  }
  return (
    <div className="dashboard-home p-2">
      <h2>Admin Home</h2>
      <div className="row dash-home-content mt-3">
        <div className="row flex-wrap gap-5">
          <InfoBox value={price} title="Earning" />
          <InfoBox value={ProductNumber} title="Products" />
          <InfoBox value={data?.data?.orders?.length} title="Orders" />
        </div>
      </div>
      <Verticals />
    </div>
  )
}

export default DashboardHome
