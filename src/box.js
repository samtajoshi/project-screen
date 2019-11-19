//component to create box element for every JSON data element
import React from 'react';
import './App.css';

class Info extends React.Component {
  render() {
    return (
       
        <span>
        <div class="col-12 d-none d-lg-block box"  style={{ borderLeftColor: this.props.colour}}>
           <div class="row">
                <div class="col-5 my-3 d-flex align-items-center">
                    <div class="row align-items-center">
                        <div class="col-12 align fontWeight cut-text">
                        {this.props.brand.header}
                        </div>
                        <div class="col-12 ">
                        <span>e-book</span> | <span>Travel and Tourism</span> | <span>400 words</span>
                        </div>
                    </div>               

                </div>
                <div class="col-1 d-flex align-items-center fontWeight my-3">
                <i class='fas fa-rupee-sign'></i> {this.props.brand.price}
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center  my-4"  style={{width:'100%'}}>
               <span style={{width:'100%'}}> <span class="stylePills" style={{ backgroundColor: this.props.colour}} >{this.props.brand.state}</span></span>
                </div>
                <div class="col-2 d-flex align-items-center my-3">
                <i className={this.props.classIs}></i> &nbsp;{this.props.brand.timeLeft}
                </div>
                <button class="col-1 btn-block d-flex align-items-center styleBox my-4" style={{ backgroundColor: (this.props.brand.canAttempt==='Revise')?'cadetblue':'white', color:(this.props.brand.canAttempt==='Revise')?'white':'cadetblue' }} >
                {this.props.brand.canAttempt}
                </button>
            </div>
        </div>        
        

   
        <div class="card col-12 d-block d-lg-none" style={{marginBottom:'30px',fontSize:'90%'}}>
           <div class="row">
               <div class="mt-3 mb-2" style={{width:'100%'}}>
                 <span class="stylePills " style={{ backgroundColor: this.props.colour }} >
                     {this.props.brand.state}
                 </span>
                </div>
                <div class="col-12">
                    <div class="row justify-content-between">
                        <div class="col-9 align fontWeight block-with-text " >{this.props.brand.header}</div>
                        <div class="col-3 alignPrice fontWeight"><i class='fas fa-rupee-sign'></i>{this.props.brand.price}</div>
                    </div>                
                </div>  
                <div class="col-12 align">
                    <span>e-book</span> &nbsp;| &nbsp; <span>Travel and Tourism</span>  &nbsp;| &nbsp; <span>400 words</span>
                </div>
                <div class="col-12  card-footer" style={{backgroundColor:'white'}}>
                    <div class="row justify-content-between">
                        <div class="col-7 d-flex align-items-center" >
                            <i className={this.props.classIs} ></i>&nbsp;{this.props.brand.timeLeft}
                        </div>
                        <button class="col-4  btn-block d-flex align-items-center styleBox" style={{ backgroundColor: (this.props.brand.canAttempt==='Revise')?'cadetblue':'white', color:(this.props.brand.canAttempt==='Revise')?'white':'cadetblue' }} >
                        {this.props.brand.canAttempt}
                        </button>
                    </div>                
                </div>
            </div>
        
        </div>  
</span>
    );
  }
}


export default Info;