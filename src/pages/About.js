export default function About(){
    return(
        <body>
            <header className="header">
                <h1>About Us</h1>
            </header>

            <section className="company-info">
                <h2>Company Information</h2>
                <div className="information">
                    This will provide info about this website
                </div>
            </section>

            <section className="team">
                <h2 className="our-team">Team</h2>
                <div className="member">
                    <img src="../images/prabal-li.jpg" alt="Member 1"/>
                    <h3>Member 1</h3>
                    <p>Details about Member 1</p>
                </div>
                <div className="member">
                    <h3>Member 2</h3>
                    <p>Details about Member 2</p>
                </div>
                <div className="member">
]                    <h3>Member 3</h3>
                    <p>Details about Member 3</p>
                </div>
                <div className="member">
                    <h3>Member 4</h3>
                    <p>Details about Member 4</p>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2023 OpinioNect</p>
            </footer>

            <script src="script.js"></script>
        </body>
    )
}