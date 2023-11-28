import React, { useState } from "react"

const AddUser: React.FC = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
  })

  const handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneInput"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default AddUser