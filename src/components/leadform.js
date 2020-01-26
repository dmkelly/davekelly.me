import React from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { rhythm } from "../utils/typography"

const BotsOnly = styled.div`
  position: absolute;
  left: -5000px;
`
const Label = styled.label`
  display: block;
  font-weight: bold;
`
const HorizontalLayout = styled.div`
  display: flex;
  flex-direction: row;
`
const EmailInput = styled.input`
  flex-grow: 1;
  margin-right: ${rhythm(0.25)};
  padding-left: ${rhythm(0.25)};
  border-radius: 3px;
  border: solid 1px #ddd;
`
const Submit = styled.button`
  position: relative;
  border-radius: 3px;
  border: solid 1px #ddd;
  background-color: #4078c0;
  color: #eee;
  cursor: pointer;
  text-align: center;
  width: ${rhythm(5)};

  &[disabled] {
    background-color: #7aa1d3;
    cursor: default;
  }
`

function ButtonText({ isLoading, isDone }) {
  const generateStyle = isVisible => {
    return {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      textAlign: "center",
      visibility: isVisible ? "visible" : "hidden",
    }
  }

  return (
    <React.Fragment>
      <span style={generateStyle(!isLoading && !isDone)}>Subscribe</span>
      <span style={generateStyle(isLoading)}>Submitting&hellip;</span>
      <span style={generateStyle(isDone)}>Submitted</span>
    </React.Fragment>
  )
}

export default class LeadForm extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      email: "",
      hasSubmitted: false,
      isSubmitting: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()

    this.setState({ isSubmitting: true })

    await addToMailchimp(this.state.email)

    this.setState({
      hasSubmitted: true,
      isSubmitting: false,
    })
  }

  render() {
    const { hasSubmitted, isSubmitting, email } = this.state

    return (
      <div>
        <form
          action="https://davekelly.us4.list-manage.com/subscribe/post?u=f29dc9ea3d2d850679ed744d2&amp;id=22ceeff94f"
          method="post"
          target="_blank"
          onSubmit={this.handleSubmit}
        >
          <div>
            <Label htmlFor="mce-EMAIL">Subscribe</Label>
            <HorizontalLayout>
              <EmailInput
                type="email"
                value={email}
                onChange={event => this.setState({ email: event.target.value })}
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="email address"
                required
                disabled={hasSubmitted}
              />
              <Submit
                type="submit"
                value="Subscribe"
                name="subscribe"
                disabled={hasSubmitted || !email}
              >
                <ButtonText isLoading={isSubmitting} isDone={hasSubmitted} />
              </Submit>
            </HorizontalLayout>
          </div>
          {hasSubmitted ? (
            <p>
              Thank you for subscribing! We&apos;ll be sure to send some great
              content your way.
            </p>
          ) : (
            <p>
              Subscribe to get new posts right to your inbox on Saturday
              mornings&hellip; sometimes
            </p>
          )}
          <BotsOnly aria-hidden="true">
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <input
              readOnly
              type="text"
              name="b_f29dc9ea3d2d850679ed744d2_22ceeff94f"
              tabIndex="-1"
              value=""
            />
          </BotsOnly>
        </form>
      </div>
    )
  }
}
