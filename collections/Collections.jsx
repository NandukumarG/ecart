const Collections=(props)=>{
    const {title,img1,img2,img3,img4}=props.mf
    return (
        <div className="collection">
            <div>{title}</div>
            <div className="mens">
                <img src={img1} alt="img1"/>
                <img src={img2} alt="img2"/>
                <img src={img3} alt="img3"/>
                <img src={img4} alt="img4"/>

               </div>
            </div>
        )
    }
export default Collections;
