import React from 'react'
import './styles/breadcrumb.scss'

export const BreadCrumb = ({value}) => {
  return (
    <span className='breadcrumb'>{ value }</span>
  )
}
