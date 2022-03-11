import React from 'react';

const Links = (props) => {
    const Link = [{link:"#",Label:"Appraisal History"}, {link:"#", Label:"Achhivements"}, 
    {link:"#", Label:"Leaves"}, {link:"#",Label:"HOD Comments"}]

    return(
        <>
        <div className={"container"}>
            <div className={"row"}>{
                Link.map((row,index) =>{
                    return(
                        <div className={"col col-md-3"}>
                            <div style={{'background': 'rgba(106 ,120, 104, 0.055)', 'marginTop':'5%', 'padding':'5%', 'width':'60%'}}>
                                <a href={Link[index].link}>{Link[index].Label}</a>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}
export default Links;