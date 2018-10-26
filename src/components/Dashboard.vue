<template>
    <div>
        <nav class="navbar fixed-top navbar-light main-navbar font-weight-bold">
            <a class="navbar-brand" href="#">Ebank</a>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Kyriakos Michael</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">V.0.1 <span class="badge badge-secondary">Beta</span></a>
                </li>
                </ul>
        </nav>

        <div class="container">

            <div class="row">
                <div class="col mt-3">
                            
                    <div class="jumbotron jumbotron-fluid shadow-lg bg-white">
                        <div class="container">
                            <h1 class="display-4">Kyriakos Michael</h1>
                            <p class="lead">Welcome to your Verry Personal Banking</p>
                             <img src="https://png2.kisspng.com/20180326/brw/kisspng-computer-icons-computer-software-random-icons-5ab9ab4ce2f414.1297504215221174529296.png" 
                                style="position:relative; z-index: 10; top: -30px; left: -550px; width: 15% " />
                                <p>Current Balance <span><h4 style="color: green">$2000</h4></span></p>
                                <button type="button" class="btn btn-outline-dark p-4"
                                 data-toggle="modal" data-target="#exampleModal">Bet on my Balance</button>
                        </div>
                        </div>
                </div>
            </div>



            <!-- Modal -->
<div class="modal p-5 fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Bet on my Balance</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="row">
            <div class="col text-left">
                 <h1>Current Balance <span class="badge badge-secondary p-3" style="border-radius: 50px;">$2000</span></h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Amount</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount in $$$">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your personal amount with anyone else.</small>
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
             </form>
            </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary p-3" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-success p-3">Save</button>
      </div>
    </div>
  </div>
</div>



<!-- Carousel  -->
            <div class="row mt-5">
                <div class="col font-weight-bold">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" style="border-radius: 50px">
                            <div class="carousel-item active">
                              <div class="card shadow-sm">
                                <div class="card-body p-5" style="background-color: #0764C1">
                                    <div class="row">
                                        <div class="col">
                                            <p>VISA</p>
                                            <p>Choose your next Card</p>
                                        </div>
                                    </div>
                                </div>
                                </div>         
                            </div>
                            <div class="carousel-item">
                               <div class="card shadow-sm">
                                 <div class="card shadow-sm">
                                <div class="card-body p-5" style="background-color: #ACCF5C">
                                    <div class="row">
                                        <div class="col">
                                            <p>MASTER CARD</p>
                                            <p>Our customers love this!</p>
                                        </div>
                                    </div>
                                </div>
                                </div>    
                                </div>
                            </div>
                            <div class="carousel-item">
                        <div class="card shadow-sm">
                               <div class="card-body p-5" style="background-color: #2A044A">
                                    <div class="row">
                                        <div class="col">
                                            <p>SOMETHING</p>
                                            <p>This is something else</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col mt-5">
                    <h1 class="display-4 text-center">Your Top Spendings</h1>
                </div>
            </div>

            <div class="row">
                <div class="card-group mt-5 shadow-lg text-center" style="border-radius: 50px">
                    <div class="card">
                        <img class="card-img-top w-100" src="https://jobapplications.net/wp-content/uploads/starbucks-logo-icon.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Starbucks</h5>
                            <p class="card-text">Mostly Coffee and Snacks.</p>

                            <h2 class="card-text">- $200</h2>
                            <div class="card-footer" style="background-color: transparent">
                                <p class="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="http://is4.mzstatic.com/image/thumb/Purple122/v4/df/ec/11/dfec1108-ae4e-4a01-3b91-816b8c59c780/mzl.jezyslfb.png/1024x1024bb.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Zara</h5>
                            <p class="card-text">Mostly shoes</p>

                            <h2 class="card-text">- $500</h2>
                            <div class="card-footer" style="background-color: transparent">
                                <p class="card-text"><small>Last updated 20 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://swappie.fi/wp-content/uploads/2016/06/Apple-logo-grey-880x625.png" alt="Card image cap">
                        <div class="card-body mt-5">
                            <h5 class="card-title">Apple</h5>
                            <p class="card-text">Congrats! You bought a macbook pro!</p>

                            <h2 class="card-text">- $1000</h2>
                            <div class="card-footer" style="background-color: transparent">
                                <p class="card-text"><small>Last updated 3 hrs ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-5 mt-5">
                <div class="col">
                    <div class="card" style="border-radius: 50px; border: 1px solid #F2BB30">
                        <div class="card-body">
                            <bars :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0]" :gradient="['#679436', '#E55454']">
                            </bars>

                            <div class="card-footer" style="background-color: transparent">
                                <p class="card-text"><small>An Overview of your Spending</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="row">
                <div class="col mb-5">
                <div class="card">
                        <div class="card-body mt-5">
                            <h2>Latest History</h2>
                            <div class="row">
                            <div class="col-4">
                                <div class="list-group" id="list-tab" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Today</a>
                                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">This Week</a>
                                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">This Month</a>
                                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">In 2018</a>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">No Spendings Today</div>
                                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">

                                </div>
                                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                                </div>
                            </div>
                                </div>

                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Bars from "vuebars";

Vue.use(Bars);

export default {
  mounted() {
    console.log("message");
  }
};
</script>

<style scoped>
.main-navbar {
  border: 1px solid #edf2f4;
  background-color: #ffffff;
}
</style>