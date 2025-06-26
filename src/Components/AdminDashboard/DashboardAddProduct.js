import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Input from '../utilities/Input'
import Loader from '../Loaders/Loader'
const DashboardAddProduct = () => {
  const token = useSelector(state => state.cart.token)

  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [isTrending, setIstrending] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const formHandler = async e => {
    setIsLoading(true)
    e.preventDefault()
    if (title && price && description && category && isTrending && subCategory) {
      const form = new FormData()
      form.append('name', title)
      form.append('price', price)
      form.append('description', description)
      form.append('kind', category)
      form.append('isTrending', isTrending)
      form.append('category', subCategory)
      form.append('images', image1)
      form.append('images', image2)
      await axios.post('https://e-commerce-hh3m.onrender.com/api/products', form, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      setIsLoading(false)
      toast.success('Adding Item Successfully')
      navigate('/admin/home')
    } else {
      toast.error('You must type all requirments')
    }
  }

  const image1Handler = e => {
    setImage1(e.target.files[0])
  }
  const image2Handler = e => {
    setImage2(e.target.files[0])
  }
  const titleHandler = e => {
    setTitle(e.target.value)
  }
  const priceHandler = e => {
    setPrice(e.target.value)
  }
  const descriptionHandler = e => {
    setDescription(e.target.value)
  }
  const categoryHandler = e => {
    setCategory(e.currentTarget.id)
  }
  const subCategoryHandler = e => {
    setSubCategory(e.currentTarget.id)
  }
  const isTrendingHandler = e => {
    setIstrending(e.currentTarget.id)
  }

  return (
    <>
      {isLoading && <Loader className="position-absolute" />}
      <div className="dash-add-product p-2">
        <h4>Add your product</h4>

        <form onSubmit={formHandler}>
          <div className="formInputs">
            <Input
              className="formInput"
              inputFun={titleHandler}
              inputPlaceHolder="Title"
              inputType="text"
              inputLabel="Title"
            />
            <Input
              className="formInput"
              inputFun={priceHandler}
              inputPlaceHolder="Title"
              inputType="number"
              inputLabel="Price"
            />
            <div className="d-flex justify-content-center align-items-start flex-column">
              <label className="mb-2">Description</label>
              <textarea
                onChange={descriptionHandler}
                className="p-2"
                cols="38"
                rows="5"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-start dash-cat">
            <div className="dashSubCategories d-flex justify-content-center align-items-center flex-column">
              <label className="mt-2 h6">sub_categories</label>
              <Input
                className="subCategoryInput"
                inputFun={subCategoryHandler}
                inputPlaceHolder="Title"
                id="dresses"
                inputType="radio"
                inputLabel="Dresses"
              />
              <Input
                className="subCategoryInput"
                inputFun={subCategoryHandler}
                inputPlaceHolder="Hoddies"
                id="hoddies"
                inputType="radio"
                inputLabel="Hoddies"
              />
              <Input
                className="subCategoryInput"
                inputFun={subCategoryHandler}
                inputPlaceHolder="Jackets"
                id="jackets"
                inputType="radio"
                inputLabel="Jackets"
              />
              <Input
                className="subCategoryInput"
                inputFun={subCategoryHandler}
                inputPlaceHolder="T-shirtses"
                id="t-shirt"
                inputType="radio"
                inputLabel="T-shirts"
              />
              <Input
                className="subCategoryInput"
                inputFun={subCategoryHandler}
                inputPlaceHolder="Track pants"
                id="running"
                inputType="radio"
                inputLabel="Track pants"
              />
            </div>
            <div>
              <label className="h6 mt-3">Category</label>
              <br />
              <input type="radio" onChange={categoryHandler} className="me-2 ms-2" name="cat" id="Men" />
              <label className=" mt-2" htmlFor="Men">
                Men
              </label>
              <br />
              <input type="radio" onChange={categoryHandler} className="me-2 ms-2" name="cat" id="Women" />
              <label className=" mt-2" htmlFor="Women">
                Women
              </label>
              <br />
              <input type="radio" onChange={categoryHandler} className="me-2 ms-2" name="cat" id="Kids" />
              <label className=" mt-2" htmlFor="Kids">
                Kids
              </label>
              <br />
            </div>
          </div>
          <label className=" mt-3 me-2 mb-2">Is Trending</label>
          <br />
          <input onChange={isTrendingHandler} type="radio" className="me-2 ms-2" name="trend" id="True" />
          <label className=" mt-2" htmlFor="True">
            True
          </label>
          <input onChange={isTrendingHandler} type="radio" className="me-2 ms-2" name="trend" id="False" />
          <label className=" mt-2" htmlFor="False">
            False
          </label>
          <br />

          <div className="images d-flex flex-column justify-content-center align-items-start">
            <div className="d-flex flex-column align-items-center ">
              {image1 ? (
                <img src={URL.createObjectURL(image1)} alt="img1" />
              ) : (
                <img src="https://pbs.twimg.com/media/FtsxswzaUAAZXJj?format=jpg&name=small" alt="img1" />
              )}
              <label className="btn  btn-danger mt-4" htmlFor="image-upload1">
                Add first Image
              </label>
            </div>
            <div className="d-flex flex-column align-items-center ">
              {image2 ? (
                <img src={URL.createObjectURL(image2)} alt="img2" />
              ) : (
                <img src="https://pbs.twimg.com/media/FtsxswzaUAAZXJj?format=jpg&name=small" alt="img2" />
              )}
              <label className="btn  btn-danger" htmlFor="image-upload2">
                Add second Image
              </label>
            </div>
          </div>

          <input
            className="d-none"
            type="file"
            onChange={image1Handler}
            id="image-upload1"
            accept="image/jpeg, image/png, image/jpg"
          />
          <input
            className="d-none"
            type="file"
            onChange={image2Handler}
            id="image-upload2"
            accept="image/jpeg, image/png, image/jpg"
          />

          <button className="btn btn-large btn-primary m-2 mt-4" type="submit">
            Send
          </button>
        </form>
        <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  )
}

export default DashboardAddProduct
