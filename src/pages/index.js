import { React, useEffect, useRef, useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Button, Container, Grid, Input, Spacer, User, Row, Loading } from "@nextui-org/react"

import GET_USERS from '@/graphql/queries/getUsers.gql'
import SEARCH_USERS from '@/graphql/queries/searchUsers.gql'
import HomePage from '@/components/Home'
import Header from '@/components/Header'

export default function Home() {
  
  return (
    <>
      <Header />
      <HomePage />
    </>
  )
}