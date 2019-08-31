import React from 'react';
import './s.css';
                                                                   
class File extends React.Component {
    
    render() {
      return (
 <div> 
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Bootstrap Website</title>
        <link rel="stylesheet" type="text/css" href="../s/style.css"/>
    {/* css cdn(content delivery nerwork) */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    {/* j-query,popper.js,javscript plugins cdn  */}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
     {/* responsive     */}
        
      <meta name="viewport" content="width=device-width, initial-scale=2, shrink-to-fit=no"></meta>
    

    
    <div  class="bgimg">
        <nav class="navbar navbar-expand-lg bg-light navbar-light">
            <div class="container">
                <a href="" class="navbar-brand text-success font-weight-bold">HITO MATHU MATHU</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsenavbar">
                <span class="navbar-toggler-icon"></span>    
            </button> 
    
            <div class="collapse navbar-collapse text-center "id="collapsenavbar">
     
                <ul class="navbar-nav ml-auto text-black ">
                    <li class="nav-item">
                        <a href="" class="nav-link text-black">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-black">Book/Cancel Tickets</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-black">Bus Pass</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-black">Tourist Spots</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-black">Contact us</a>
                    </li>
                </ul>
             </div>
            </div>
        </nav>
        <div class="container text-center headerset">
            <h2>Welcome To Uttarakhand!</h2>
            <h1>Happy to help you.</h1>
            <button class="btn btn-warning text-black btn-lg">SUBSCRIBE</button>
        </div>
    </div>

<section class="container ourservices text-center">
<h1>BUS SERVICES</h1>

<div class="row rowsetting">
    <div class="col-lg-3 col-md-3 col-sm-3 col-sm-3 col-10 d-block m-auto">
        <div class="imgsetting d-block m-auto bg-success"><i class="fa fa-bus fa-3x text-warning"></i></div>
        <h2>VOLVO</h2>
    <p> Volvo bus service</p>
    </div>

    <div class="col-lg-3 col-mid-3 col-sm-3 col-sm 3 col-10 d-block m-auto">
        <div class="imgsetting d-block m-auto bg-success"><i class="fa fa-bus fa-3x text-warning"></i></div>
        <h2>SEMI DELUX</h2>
        <p> Semi Delux bus service</p>
    </div>

    <div class="col-lg-3 col-mid-3 col-sm-3 col-sm 3 col-10 d-block m-auto">
        <div class="imgsetting d-block m-auto bg-success"><i class="fa fa-bus fa-3x text-warning"></i></div>
        <h2>AC</h2>
        <p> Delux bus service</p>
    </div>

    <div class="col-lg-3 col-mid-3 col-sm-3 col-sm 3 col-10 d-block m-auto">
        <div class="imgsetting d-block m-auto bg-success"><i class="fa fa-bus fa-3x text-warning"></i></div>
        <h2>ORDINARY</h2>
        <p> Ordinary bus service</p>
    </div>

</div>
</section>
</div>
      )
    }
  }
  export default File;