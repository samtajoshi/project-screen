import React from 'react';
//import logo from './logo.svg';
import './App.css';

class Car extends React.Component {
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
                <div class="col-2 d-flex align-items-center  my-4">
                <span class="stylePills" style={{ backgroundColor: this.props.colour }} >{this.props.brand.state}</span>
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
                 <div class="stylePills" style={{ backgroundColor: this.props.colour }} >
                     {this.props.brand.state}
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

class Apps extends React.Component {
  
render(){
    let data= [
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Revision Requested',
            timeLeft : '2h 13min left',
            canAttempt : 'Revise',
        },
          
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Editorial Review',
            timeLeft : 'waiting',
            canAttempt : 'View',
            
        },
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Completed',
            timeLeft : '4.5',
            canAttempt : 'View',
           
        },
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Deadline Missed',
            timeLeft : 'NA',
            canAttempt : 'View',
          
        },
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Completed',
            timeLeft : '4.5',
            canAttempt : 'View',
           
        },
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Completed',
            timeLeft : '4.5',
            canAttempt : 'View',
           
        },
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Completed',
            timeLeft : '4.5',
            canAttempt : 'View',
           
        },
        {
            header : 'How to build an e-commerce platform : A step by step tutorial to understand',
            price : 400,
            state : 'Completed',
            timeLeft : '4.5',
            canAttempt : 'View',
           
        }
        
    ];
    

    
    var namesList = data.map(function(name){
                        if(name.state==='Revision Requested'){var colour = 'blue';var classes='fas fa-stopwatch';}
                        else if(name.state==='Editorial Review'){ colour = 'orange'; classes='fa fa-stopwatch';}
                        else if(name.state==='Deadline Missed'){ colour = 'red'; classes='fa fa-star text-warning';}
                        else{ colour = 'cadetblue'; classes='fa fa-star text-warning';}
                        return <Car colour={colour} classIs={classes} brand={name} />;
                      })

        return  (
            
            <div>{ namesList }</div>
        )
}

  }

class App extends React.Component {
  
render(){
    return (
    <div class="container-fluid">
        <div class="row headerMargin">
        <div class="col-1 d-none d-lg-block alignColumn">
            <div class="row justify-content-end" style={{marginTop:'130px'}}>
                <div class="col-12 alignItemActive">
                <i class="fas fa-qrcode fontSize"></i>
                </div>
                <div class="col-12 alignItem">
                <i class="fa fa-search fontSize"></i>
                </div>
                <div class="col-12 alignItem">
                <i class='fas fa-briefcase fontSize'></i>
                </div>
            </div>
        </div> 
        <div class="col-12 col-lg-11">
         <div class="row justify-content-center">
            <div class="col-12 clearfix card-header styleHeader shadow-sm">
                <div class="float-left d-none d-lg-block mt-3 ml-2">Your Logo</div>
                <div class="float-left d-block d-lg-none mt-3 ml-2">YL</div>
                <div class="float-right mx-3 mt-2 circleBg">AB</div>
                <div class="float-right mx-2 mt-2 notification"><span><i class="far fa-bell"></i></span> <span class="badge">699</span></div>
            </div>
            <div class="col-12">
                <div class="container">
                    <div class="row">
                        <h1 class="col-12 align fontWeight">Your Jobs</h1>
                        <div class="col-12 col-lg-2 alignForm">
                            <select class="form-control form-control-lg styleForm">
                            <option>All Content Categories</option>
                            <option>Category_1</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-2 alignForm">
                            <select class="form-control form-control-lg styleForm">
                            <option>All Industries</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-2 alignForm" >
                            <select class="form-control form-control-lg styleForm">
                            <option>Status</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-1 alignClear d-flex align-items-center justify-content-start" >
                            clear
                        </div>
                        
                        <div class="col-12 col-lg-3 alignForm d-flex align-items-center justify-content-lg-end" >
                            Displaying 1-8 of 123 jobs
                        </div>
                        <div class="col-12 col-lg-2 alignForm " >
                            <select class="form-control form-control-lg styleForm ">
                            <option>Least time left first</option>
                            </select>
                        </div>
                        <div class="col-12 d-none d-lg-block">
                        <Apps />
                        </div>
                        <div class="d-block d-lg-none">
                        <Apps />
                        </div>
                        
                    </div>  
                    <div class="row justify-content-center mt-5" style={{marginBottom:'80px'}}>
                        <div class="mr-4 icon d-none d-lg-block">first</div>
                        <div class="icon"><i class="fas fa-caret-left"></i></div>
                        <div class="icon">10</div>
                        <div class="icon iconActive">11</div>
                        <div class="icon">12</div>
                        <div class="icon d-none d-lg-block">13</div>
                        <div class="icon d-none d-lg-block">14</div>
                        <div class="mx-3 d-flex align-items-end fontWeight">...</div>
                        <div class="icon">999</div>
                        <div class="icon"><i class="fas fa-caret-right"></i></div>
                        <div class="ml-4 icon d-none d-lg-block">last</div>
                    </div>
                </div>
            </div>
            <div class="col-12 d-block d-lg-none alignColumn" style={{backgroundColor:'white'}}>
            <div class="row justify-content-center">
            <div class="col-4 mb-3 alignItemActive"><i class="fas fa-qrcode fontSize"></i></div>
            <div class="col-4 mb-3 alignItem"><i class="fa fa-search fontSize"></i></div>
            <div class="col-4 mb-3 alignItem"><i class='fas fa-briefcase fontSize'></i></div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}
    
}


export default App;
