const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = 
    `
        <div class="nav">
        <img 
        class="brand-logo" 
        src="img/Berries.png" 
        alt="clothes"
        />
        <div class="nav-items">
        <div class="search">
            <input 
            type="text" 
            class="search-box"
            placeholder="search"
            />
            <button class="search-btn">
            search</button>
        </div>
        <a href="#">
            <img src="img/avatar.png" alt="clothes">
        </a>
        <a href="#">
            <img src="img/cart.png" alt="healthy nuts and berries">
        </a>
        </div>
        </div>
        <ul class="links-container">
        <li class="link-items">
        <a href="../pj04_Product/index.html" class="link">home</a>
        </li>
        <li class="link-items">
        <a href="./html/product.html" class="link">products</a>
        </li>
        <li class="link-items">
        <a href="./html/nuts.html" class="link">berries</a>
        </li>
        <li class="link-items">
        <a href="./html/berries.html" class="link">nuts</a>
        </li>
        <li class="link-items">
        <a href="./html/404.html" class="link">items</a>
        </li>
        </ul>
    `;
}

createNav();