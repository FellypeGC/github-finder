import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackBtn from '../components/BackBtn'
import classes from "./Repos.module.css"

const Respos = () => {
  const { username } = useParams()

  return (
    <div>
      <BackBtn />
      Respos {username}
    </div>
  )
}

export default Respos