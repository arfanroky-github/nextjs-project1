import VerticalFooter from '../../components/shared/VerticalLayout/VerticalFooter'
import VerticalNav from '../../components/shared/VerticalLayout/VerticalNav'

const VerticalLayout = ({children}) => {
  return (
    <>
    <VerticalNav />
    {children}
    <VerticalFooter />
    </>
  )
}

export default VerticalLayout