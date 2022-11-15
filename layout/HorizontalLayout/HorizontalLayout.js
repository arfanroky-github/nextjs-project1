import HorizontalFooter from '../../components/shared/HorizontalLayout/HorizontalFooter'
import HorizontalNav from '../../components/shared/HorizontalLayout/HorizontalNav'

const HorizontalLayout = ({children}) => {
  return (
    <>
    <HorizontalNav />
    {children}
    <HorizontalFooter/>

    </>
  )
}

export default HorizontalLayout