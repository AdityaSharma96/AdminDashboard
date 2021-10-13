import React, { lazy } from 'react'

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">Past 1 Month</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButtonGroup className="float-end me-3">
                {['Month'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '30',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-dark'),
                  pointHoverBackgroundColor: getStyle('--cui-dark'),
                  borderWidth: 2,
                  borderDash: [8, 5],
                  data: [
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                    random(50, 1000),
                  ],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="text-center">
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Total</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={40} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress thin className="mt-2" precision={1} color="info" value={40} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Increase %</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress thin className="mt-2" precision={1} color="warning" value={40} />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
