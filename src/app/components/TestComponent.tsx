"use client"
import React from "react"
import { toast } from "react-toastify"

const TestComponent = () => {
  const onClick = () => {
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }
  return (
    <div data-testid="test-component">
      <h1>Lets use react-toastify</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}
export default TestComponent
