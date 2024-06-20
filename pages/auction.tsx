'use client'
import React, { useState } from 'react'

export default function Auction() {
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

  const [auctions, setAuctions] = useState([])
  const [newJob, setNewJob] = useState(defaultJob)
  const [editJob, setEditJob] = useState(null)
  const [editName, setEditName] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editCompensaton, setEditCompensation] = useState('')
  const [editRestricted, setEditRestricted] = useState(false)
  const [editLocation, setEditLocation] = useState([])
  const [editAddress, setEditAddress] = useState('')
  const [editImages, setEditImages] = useState([])
  const [date, setDate] = useState('')
  const [editDuration, setEditDuration] = useState(7)

  return <p> auction page </p>
}
