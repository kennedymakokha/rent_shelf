
import AdminLayout from '../../containers/layout/admin/adminLayout'
import Affiliates from './affiliates'
import AffiliateCharts from './charts/affiliatesCharts.jsx'

function index() {
    return (
        <AdminLayout>
            <div className='flex h-full w-full'>
                <div className="w-1/2">
                    <AffiliateCharts />
                </div>
            </div>
        </AdminLayout>
    )
}

export default index