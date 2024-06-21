/* eslint-disable @next/next/no-img-element */
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

  const jobs: JobData[] = [
    {
      tag_id: 1,
      name: 'Knit a Sweater',
      description:
        'Create a cozy sweater from scratch with provided materials and instructions.',
      compensation: '$50',
      restricted: false,
      location: [],
      address: '123 Yarn Street, Auckland, NZ 1010',
      images: [
        'https://5.imimg.com/data5/WS/LU/MY-39504911/mens-woolen-sweater.jpg',
      ],
      date: '2024-07-01',
      duration: 4,
    },
    {
      tag_id: 2,
      name: 'Paint a Fence',
      description:
        'Give your fence a fresh coat of paint with our DIY kit and easy-to-follow guide.',
      compensation: '$75',
      restricted: false,
      location: [],
      address: '456 Fence Road, Wellington, NZ 6011',
      images: [
        'https://www.herculesfence.com/wp-content/uploads/2018/04/ThinkstockPhotos-158228512.jpg',
      ],
      date: '2024-08-12',
      duration: 2,
    },
    {
      tag_id: 3,
      name: 'Build a Birdhouse',
      description:
        'Assemble and paint a birdhouse using our all-inclusive DIY kit.',
      compensation: '$30',
      restricted: false,
      location: [],
      address: '789 Bird Lane, Christchurch, NZ 8011',
      images: [
        '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVdWbjCWASjgkrzJVr7p5ncJT8TGvHYeEZw&s',
      ],
      date: '2024-09-05',
      duration: 1,
    },
    {
      tag_id: 4,
      name: 'Plant a Garden',
      description:
        'Start your own vegetable garden with our comprehensive DIY gardening kit.',
      compensation: '$60',
      restricted: false,
      location: [],
      address: '321 Garden Blvd, Hamilton, NZ 3204',
      images: ['garden1.jpg', 'garden2.jpg'],
      date: '2024-10-15',
      duration: 3,
    },
    {
      tag_id: 5,
      name: 'Make Homemade Soap',
      description:
        'Craft your own scented soap bars with our DIY soap-making kit.',
      compensation: '$40',
      restricted: false,
      location: [],
      address: '654 Soap Street, Dunedin, NZ 9016',
      images: ['soap1.jpg', 'soap2.jpg'],
      date: '2024-11-25',
      duration: 1,
    },
  ]

  return (
    <>
      <h1 className="text-center m-10 text-4xl font-bold tracking-tight text-black sm:text-6xl">
        Auctions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-10 mb-10">
        {jobs.slice(0, 3).map((job) => (
          <div key={job.name} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={job.images[0]} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{job.name}</h2>
              <p>{job.description}</p>
              <h3 className="card-title">Compensation: {job.compensation}</h3>
              <ul>
                <li>
                  <strong>Restricted Auction:</strong>{' '}
                  {job.restricted ? 'Yes' : 'No'}
                </li>
                <li>
                  <strong>Address:</strong> {job.address}
                </li>
                <li>
                  <strong>Start Date:</strong> {job.date}
                </li>
                <li>
                  <strong>Auction Length:</strong> {job.duration} days
                </li>
              </ul>
              <div className="card-actions">
                <button className="btn btn-primary">Place Bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-10 mb-10">
        {jobs.slice(3, 6).map((job) => (
          <div key={job.name} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={job.images[0]} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{job.name}</h2>
              <p>{job.description}</p>
              <h3 className="card-title">Compensation: {job.compensation}</h3>
              <ul>
                <li>
                  <strong>Restricted Auction:</strong>{' '}
                  {job.restricted ? 'Yes' : 'No'}
                </li>
                <li>
                  <strong>Address:</strong> {job.address}
                </li>
                <li>
                  <strong>Start Date:</strong> {job.date}
                </li>
                <li>
                  <strong>Auction Length:</strong> {job.duration} days
                </li>
              </ul>
              <div className="card-actions">
                <button className="btn btn-primary">Place Bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
