import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import SchoolInvoiceTable from './SchoolInvoiceTable'

const SchoolInvoice = () => {
  return (
    <DashboardLayout>
    <div>
    
      <SchoolInvoiceTable />
    </div>
    </DashboardLayout>
  )
}

export default SchoolInvoice