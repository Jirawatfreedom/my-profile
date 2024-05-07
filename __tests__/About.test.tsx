import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import AboutPage from "@/app/[locale]/page"

test("AboutPage renders correctly", async () => {
  // Mock locale
  const locale = "en"

  // Render the AboutPage component
  const { container } = render(<AboutPage params={{ locale }} />)

  // Verify that the page title is rendered
  expect(container.querySelector(".container")).not.toBeNull()

  // Verify that the TestComponent is rendered
  const testComponent = screen.getByText("Test Component")
  expect(testComponent).toBeInTheDocument()
})
