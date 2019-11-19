import React from 'react';
import './App.css';
import Info from './box.js';



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
                        return <Info colour={colour} classIs={classes} brand={name} />;
                      })

        return  (
            
            <div>{ namesList }</div>
        )
}

  }

function reset(){
document.getElementById("my_select_1").selectedIndex = 0; //0 = option 1
document.getElementById("my_select_2").selectedIndex = 0;
document.getElementById("my_select_3").selectedIndex = 0;

}




class App extends React.Component {
  
render(){
    
   var i=11;
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
                            <select class="form-control form-control-lg styleForm" id="my_select_1">
                            <option selected disabled hidden>All Content Categories</option>
                            <option>Category_1</option>
                            <option>Category_2</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-2 alignForm">
                            <select class="form-control form-control-lg styleForm" id="my_select_2">
                            <option selected disabled hidden>All Industries</option>
                            <option>Category_1</option>
                            <option>Category_2</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-2 alignForm">
                            <select class="form-control form-control-lg styleForm" id="my_select_3">
                            <option selected disabled hidden>Status</option>
                            <option>Category_1</option>
                            <option>Category_2</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-1 alignClear d-flex align-items-center justify-content-start" onClick={reset}>
                            clear
                        </div>
                        
                        <div class="col-12 col-lg-3 alignForm d-flex align-items-center justify-content-lg-end" >
                            Displaying 1-8 of 123 jobs
                        </div>
                        <div class="col-12 col-lg-2 gap" >
                            <select class="form-control form-control-lg styleForm">
                            <option>Least time left first</option>
                            <option>Category_1</option>
                            <option>Category_2</option>
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
                        <div class="icon"><i class="fas fa-caret-left" ></i></div>
                        <div class="icon">{i-1}</div>
                        <div class="icon iconActive" id="num">{i}</div>
                        <div class="icon">{i+1}</div>
                        <div class="icon d-none d-lg-block">{i+2}</div>
                        <div class="icon d-none d-lg-block">{i+3}</div>
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
