import Link from "next/link"

const HorizontalNav = () => {

    const menus = [
        {id: 1, name: 'Home', path: '/'},
        {id: 2, name: 'Our Fleet', path: '/ourfleet'},
        {id: 3, name: 'Service Rates', path: '/servicerates'},
        {id: 4, name: 'Features', path: '/features'},
        {id: 5, name: 'About Us', path: '/aboutus'},
        {id: 5, name: 'Contact Us', path: '/contactus'},
    ]


  return (
    <header style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
    }}>
        <div 
        style={{
            textAlign: 'center',
            padding: '1rem 0',
            fontSize: '18px',
            fontWeight: 'bold'
        }}
        >Chauffeur</div>
        <nav 
        style={{
            height: '40px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap: '20px',
            borderTop: '1px solid black',
            marginTop: '20px',
            padding: '2rem 0'
        }}
        >
           {
            menus.map(menu => <Link key={menu.id} href={menu.path}>{menu.name}</Link>)
           }

        </nav>
    </header>
  )
}

export default HorizontalNav