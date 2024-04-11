import React from 'react'
import './styles/breadcrumb.css'

export const BreadCrumb = ({value}) => {
  return (
    <span className='breadcrumb'>{ value }</span>
  )
}
