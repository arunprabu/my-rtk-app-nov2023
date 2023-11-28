import { useEffect } from "react"
import AddUser from "./AddUser"
import { fetchUsersAsync } from "./usersSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"

const Users = () => {
  const dispatch: any = useDispatch()

  // if the component wants the data from store - it must subscribe to store data
  const usersState = useSelector((state: RootState) => state.users)

  useEffect(() => {
    // in order to update the store, component must dispatch an action
    dispatch(fetchUsersAsync())
  }, [])

  return (
    <div className="row">
      <h1>User Management</h1>
      <div className="col-md-4">
        <AddUser />
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        {/* Showing the loader */}
        {usersState.isLoading && <div className="spinner spinner-border"></div>}

        {/* is error occurred */}
        {usersState.isError && (
          <div className="alert alert-danger">{usersState.status}</div>
        )}
        {/* is we get the usersList data */}
        <div className="row">
          {usersState.usersList.map((user: any) => {
            return (
              <div className="col-md-4" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      E-Mail: {user.email}
                    </h6>
                    <p className="card-text">Phone: {user.phone}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Users
