const Womencollection=(props)=>{
    const {title,img1,img2,img3,img4}=props.wf

    return (
<div className="womencollection">
    <div>Women Fashion</div>
    <div className="WFimage">
        <img src={img1} alt="image1"/>
        <img src={img2} alt="image2"/>
        <img src={img3} alt="image3"/>
        <img src={img4} alt="image4"/>
        </div>
    </div>
        )

    }
export default Womencollection;