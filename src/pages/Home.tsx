import React, { ReactElement } from 'react'
import tw from 'twin.macro'
import Button from '../components/Button'
import Logo from '../components/Logo'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-white to-black`,
  ],
}

const Home = (): ReactElement => {
  return (
    <div css={styles.container({ hasBackground: true })}>
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
      <Logo />
    </div>
  )
}

export default Home