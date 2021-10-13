import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        SEM VII
        <span className="ms-1">&copy; </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        SEM VII
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
