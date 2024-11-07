const ShoesSection = () => {
    return (
    <main className="Shoes container">
        <div className="Shoes-content">
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO <br></br>
                HELP YOU WITH OUR SHOES. YOUR FEET DESERVE <br></br>
                THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="Shoes-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="Shopping">
                <p>
                    Also Available On
                </p>
                <div className="brand-logo">
                    <img src="./image 4.png" alt="Flipkart-logo" />
                    <img src="./image 5.png" alt="Amazon-logo" />
                </div>
            </div>
        </div>
        <div className="Shoes-image">
            <img className="zoom-image" src="./image 6.png" alt="Shoes-logo"/>
        </div>
    </main>
    );
};

export default ShoesSection;