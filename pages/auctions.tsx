'use client'
import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { JobData } from '@/models/job'

export default function Auctions() {
  const defaultUser = {
    name: 'Harry Styles',
    age: 33,
    email: 'harry@gmail.com',
    location: [-41.28666552, 174.772996908],
  }

  const defaultJob = {
    tag_id: 3,
    name: 'Jersey knitting',
    description: 'After a merino wool sweater to be knitted in navy-blue wool',
    compensatioin: '$150',
    restricted: false,
    location: [-41.28666552, 174.772996908],
    address: '88 Boulcott Street, Wellington',
    images: ['exapmpleJersey.jpeg'],
  }

  const [jobs, setJobs] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [compensaton, setCompensation] = useState('')
  const [restricted, setRestricted] = useState(false)
  const [location, setLocation] = useState([])
  const [address, setAddress] = useState('')
  const [images, setImages] = useState([])
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState(7)

  const queryClient = useQueryClient

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    switch (id) {
      case 'name':
        setName(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'compensation':
        setCompensation(value)
      case 'restricted':
        if (e.target instanceof HTMLInputElement) {
          setRestricted(e.target.checked)
        }
        break
      case 'address':
        setAddress(value)
        break
      case 'date':
        setDate(value)
        break
      case 'duration':
        setDuration(parseInt(value))
    }
  }

  return (
    <>
      <h1> Auctions </h1>
    </>
  )
}
