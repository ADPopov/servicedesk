export const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("user") as string)

  if (user && user.access_token) {

  }

}