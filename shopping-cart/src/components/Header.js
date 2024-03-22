import '../App.css';

function Header(props) {
    return (
        <>
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
          <nav>
    <input  type="search" placeholder="Search..." aria-label="Search"/>
    <button  type="submit">Search</button>
  
</nav>
            <div className='login'>LogIn/SignIn</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
        
        <div className="subMenu">
<ul>

    <li>Mobiles</li>
    <li>Laptops</li>
    <li>Watches</li>
    <li>Earbuds</li>
    <li>Shoes</li>
    <li>Sofas</li>
    <li>Tv's</li>
    <li>Cloths</li>
</ul>

        </div></>
    );
}

export default Header;