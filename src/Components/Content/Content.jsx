import React from 'react';
// import './Contents.css';
import Style from "./Content.module.css";
import { useNavigate } from 'react-router-dom'; 

const Contents = () => {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [checkedFour, setCheckedFour] = React.useState(false);
  const [checkedFive, setCheckedFive] = React.useState(false);
  const [checkedSix, setCheckedSix] = React.useState(false);
  const [checkedSeven, setCheckedSeven] = React.useState(false);
  const [checkedEight, setCheckedEight] = React.useState(false);
  const [checkedNine, setCheckedNine] = React.useState(false);
  const [checkedTen, setCheckedTen] = React.useState(false);
  const navigate = useNavigate();




const goDashboard = ()=>{
  navigate("/dashboard");
}

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
  };
  const handleChangeFour = () => {
    setCheckedFour(!checkedFour);
  };
  const handleChangeFive = () => {
    setCheckedFive(!checkedFive);
  };
  const handleChangeSix = () => {
    setCheckedSix(!checkedSix);
  };
  const handleChangeSeven = () => {
    setCheckedSeven(!checkedSeven);
  };
  const handleChangeEight = () => {
    setCheckedEight(!checkedEight);
  };
  const handleChangeNine = () => {
    setCheckedNine(!checkedNine);
  };
  const handleChangeTen = () => {
    setCheckedTen(!checkedTen);
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label className={Style.label}>
        <input className={Style.checkboxstyle}  type="checkbox" checked={value} onChange={onChange} />
        {/* {label} */}
        {label}
      </label>
    );
  };
  return (
    <>
    <div style={{height:"70px"}}></div>
    <div className={Style.center_div}>
        <div className={Style.left_center_div}>
        <div className={Style.titlestep}>STEP 1</div>
        <div className={Style.titleheading}>What descibes your content?</div>
        <div className={Style.titlemainhead}>You can pick up two categories.</div>
        <div className={Style.rightimgcontent}>

        </div>
        <div className={Style.inputsonly}>
            <div className={Style.input1}>
            <Checkbox  label="Podcasts" value={checkedOne} onChange={handleChangeOne}/>
            <br /> 
            <Checkbox label="Illustrations &   Animations" value={checkedTwo} onChange={handleChangeTwo}/>
            <br />
            <Checkbox label="Music" value={checkedThree} onChange={handleChangeThree}/>
            <br />
            <Checkbox label="Communities" value={checkedTen} onChange={handleChangeTen}/>
            <br />
            <Checkbox label="Local Business (resturant, yoga studio, venue, etc.)" value={checkedFour} onChange={handleChangeFour}/>
            <br /> <br />
            <div className={Style.buttonlast} onClick={goDashboard}>Continue</div>




            </div>
            
            <div className={Style.input2}>
            <Checkbox label="Videos" value={checkedFive} onChange={handleChangeFive}/>
            <br />
            <Checkbox label="Writing & Journalism" value={checkedSix} onChange={handleChangeSix}/>
            <br />
            <Checkbox label="Games & Softwares" value={checkedSeven} onChange={handleChangeSeven}/>
            <br />
            <Checkbox label="Photography" value={checkedEight} onChange={handleChangeEight}/>
            <br />
            <Checkbox label="Other" value={checkedNine} onChange={handleChangeNine}/>
            <br />
            
           

            </div>
           
        </div>

        </div>

        <div className={Style.right_center_div}>
            <div className={Style.imgbox}>

            </div>

        </div>
       
    </div>
    </>
  )
}

export default Contents