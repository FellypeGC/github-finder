import classes from "./BackBtn.module.css"
import { useNavigate } from 'react-router-dom'

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={classes.back_btn} onClick={() => navigate(-1)}>Get back</button>
    </>
  )
}

export default BackBtn