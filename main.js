import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <main>
    <nav>
    <div class='navbar-logo'>
    <img src='./logo_w.png' alt='google logo'/>
    </div> 
    <div class='navbar-item'>
    <a href='#'><span>Work</span></a>
    <a href='#'><span>Team</span></a>
    <a href='#'><span>Connect</span></a>
  
    </div>
     <div class='navbar-icons'>
     <i class="fa-solid fa-envelope"></i>
     <i class="fa-solid fa-phone"></i>
     </div>

    </nav>
   <div class='main'>
    <section class='hero'>
    <div class = 'hero-content'>
    <div class='text-content'>
    <h1>Trust is earned through Experience<br>
    <span>let us earn yours</span></h1>
    <p>We are reimagining the endless posibilities<br> in building enterprise software!</p>
    <button>Learn More</button>
    </div>
    <div class='svg-cont'>
    <img src= "/hero.svg"/>
    </div>
    </div>
    
    </div>
    <div class='lines'>
    <p> 01/ <span class='five'>05</span></p>
    </div>
    </div>
    </section>
    <section class='features'>
    <div>
    <div class='details'>
    <p>Our sucess rests<br> in relationships <br>between people</p>
    <div class= 'product-head'>
    <h1>Human Connections <span class = 'human'>First</span> <br/> Code <span class='second'>Second </span></h1></div>
   
    </div>
    <section class='about'>
    <div class='about-img'>
    <img src="/texture.jpg" alt="about"/>
    </div>
    <div class='about-text'>
    <h1><span class="human">Constant evolution</span><br><span class='second'>Constant adaptation.</span></h1>
    <p>We have all the tools to take your business to the future <br>of digital transformations.<br>Here at Mugogo, we provide a conmprevensive suite of services<br> to make your business reach the digital age</p>
    </div>
    </section>
    </div>
   
    </section>
    
    </div>
    </main>
  </div>
`

// setupCounter(document.querySelector('#counter'))
