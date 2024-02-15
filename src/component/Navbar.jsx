const Navbar = () => {
    const navList = ['home', 'about', 'contact', 'help', 'login']
    return (
        <div>
            {
                navList.map(item => <li>{item}</li>)
            }
        </div>
    )
}
export default Navbar