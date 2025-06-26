import { BsPerson } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut } from '../../RTK/Slices/CartSlice'
import axios from 'axios'
import { AiFillCrown } from 'react-icons/ai'

const HeaderLinks = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.cart.isLogin)
  const isAdmin = useSelector(state => state.cart.isAdmin)
  const isBrandOwner = useSelector(state => state.cart.isBrandOwner)
  const token = useSelector(state => state.cart.token)
  const userData = useSelector(state => state.cart.userData)
  console.log(userData.brand)
  if (isLogin && isBrandOwner) {
    axios.get('https://e-commerce-hh3m.onrender.com/api/brand/Hope', {
      headers: {
        Authorization: token && `bearer ${token}`,
      },
    })
  }
  return (
    <>
      {isLogin ? (
        <>
          <div className="d-flex flex-row justify-content-start align-items-center ">
            <BsPerson className="text-white fs-1 fw-bold me-2" />
            <h3 className="text-white text-center mt-1">
              <Link to="/profile" className="text-white">
                Profile
              </Link>
            </h3>
          </div>
          {isLogin && isAdmin && (
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <BsPerson className="text-white fs-1 fw-bold me-2" />
              <h3 className="text-white text-center mt-1">
                <Link to="/admin/home" className="text-white">
                  Admin
                </Link>
              </h3>
            </div>
          )}
          {isLogin && !isAdmin && isBrandOwner && (
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <AiFillCrown className="text-white fs-1 fw-bold me-2" />
              <h3 className="text-white text-center mt-1">
                <Link to={`/brand/${userData?.brand}`} className="text-white">
                  {userData?.brand}
                </Link>
              </h3>
            </div>
          )}
          <div
            className="d-flex flex-row justify-content-start align-items-center "
            onClick={() => dispatch(LogOut())}
          >
            <BiLogOut className="text-white fs-1 fw-bold me-2" />
            <h3 className="text-white text-center mt-1">Logout</h3>
          </div>
        </>
      ) : (
        <div className="d-flex flex-row justify-content-start align-items-center ">
          <BsPerson className="text-white fs-1 fw-bold me-2" />

          <h5 className="text-white">
            <Link to="/login" className="text-white">
              Login
              <br />
              SignUp
            </Link>
          </h5>
        </div>
      )}
    </>
  )
}

export default HeaderLinks
