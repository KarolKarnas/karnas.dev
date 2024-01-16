'use client';

import { createPost } from "../lib/actions";


const BasicForm = () => {
  return (
    <form action={createPost}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
export default BasicForm