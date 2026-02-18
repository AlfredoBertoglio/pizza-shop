import InterfaceSound from './ButtonSound';
import MyImage0 from '../../public/introduce-me.png';
import MyImage1 from '../../public/skills.png';
import MyImage2 from '../../public/experience.png';
import MyImage3 from '../../public/Special-Thanks.png';
import MyImage4 from '../../public/lets-work-together.png';

import React from 'react';

export default class BigScreen extends React.Component {
    constructor() {
        super()
        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)

        const img0 = MyImage0
        const img1 = MyImage1
        const img2 = MyImage2
        const img3 = MyImage3
        const img4 = MyImage4
        

        this.state = {
            index: 0,
            imgList: [img0, img1, img2, img3, img4],
        }
    }
    onClickForward() {
        if (this.state.index + 1 == this.state.imgList.lenght) {
            this.setState({
                index:0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            }, InterfaceSound)
            document.getElementById("BtnBack").style.visibility = "visible"
        }
        if (this.state.index === 3){
            document.getElementById("BtnForward").style.visibility = "hidden";
        }
    }
    onClickBack(){
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.lenght - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            }, InterfaceSound)
            document.getElementById("BtnForward").style.visibility = "visible";
        }
        if (this.state.index === 1){
            document.getElementById("BtnBack").style.visibility = "hidden";
        }
    }

    
render(){
    return(
        <div>
        <img src={this.state.imgList[this.state.index]} width='300px' height='150px' alt="" /><br />
        <button className='back' id="BtnBack"onClick={this.onClickBack}>Back</button>
        <button className='forward' id='BtnForward' onClick={this.onClickForward}>Next</button>
        </div>
        )
    }
}

