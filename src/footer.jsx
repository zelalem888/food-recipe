import React from "react";

function footer(){
    const date = new Date()
    const currentDate = date.getFullYear()

    return(
        <div className="main">
            <div className="container text-white">
                <div className="row row-cols-2 pt-5">
                    <div className="col text-start">
                        <h6>
                            tiktok
                        </h6>
                        <h6>
                            facebook
                        </h6>
                        <h6>
                            instagram
                        </h6>
                    </div>
                    <div className="col text-center">
                        <h6>
                            Email: zlegesse9@gmail.com
                        </h6>
                        <h6>
                            phone: 0912345678
                        </h6>
                    </div>
                </div>
                <div className="text-center">
                
                    <h6>
                        Copyright {currentDate}
                    </h6>
                </div>
            </div>
        </div>
    );
}
export default footer

