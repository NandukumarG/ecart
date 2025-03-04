const Kidscollection=(props)=>{

    const {title,img1,img2,img3,img4}=props.kf;
    return(
        <div className="Kcollection">
            <div>Kids collection</div>
            <div className="Kids">
            <img src={img1} alt="image1"/>
            <img src={img2} alt="image2"/>
            <img src={img3} alt="image3"/>
            <img src={img4} alt="image4"/>

            </div>

            </div>


        )
     }
 export default Kidscollection;