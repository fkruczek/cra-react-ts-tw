import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
const About = (): ReactElement => {
  const { t, i18n } = useTranslation()

  const handleClick = () => i18n.changeLanguage('pl')

  return (
    <div>
      {t('test')}
      <div>
        <button onClick={handleClick}>pl</button>
      </div>
    </div>
  )
}

export default About
