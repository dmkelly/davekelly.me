import React from "react"
import LeadForm from "./leadform"

export default function Footer() {
  return (
    <footer>
      <hr />
      <LeadForm />© {new Date().getFullYear()}, Dave Kelly
    </footer>
  )
}
