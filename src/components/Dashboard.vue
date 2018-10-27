<template v-cloak>
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
                    <a class="nav-link" href="#" :color="colorx" @click="popupActivo5=true" type="filled" ><i class="fas fa-bell" style="color: black"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-envelope" style="color: blue"></i></a>
                </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link"><i @click="active = !active" class="fas fa-align-right" style="color: black"></i></a>
                </li>

                 <li class="nav-item ml-5">
                     <a href="http://localhost:8081/#/" class="nav-link"><i class="fas fa-power-off" style="color: black"></i></a>
                </li>
            </ul>
        </nav>


                        <div class="centerx">
                    <vs-popup
                    style="color:rgb(255,255,255)"
                    background-color="rgba(255,255,255,.6)"
                    :background-color-popup="colorx" title="Alerts & Notifications" :active.sync="popupActivo5">
                        <vs-list>
                        <vs-list-header title="GDPR"></vs-list-header>
                        <vs-list-item subtitle="An Important notice"></vs-list-item>
                        <vs-list-header title="Terms & Conditions" color="success"></vs-list-header>
                        <vs-list-item subtitle="We are updating our Term & Condition coming this fall"></vs-list-item>
                        </vs-list>
                    </vs-popup>
                </div>


        <div class="container w3-container w3-center w3-animate-bottom">
            <div class="w3-animate-opacity">
                <a class="nav-link disabled" href="#">V.0.3 <span class="badge badge-secondary">Beta</span></a>
                <p style="font-size: 9px" class="text-muted">For more information please visit our official release site: <a href="#" style="color: blue">release.ebank.com</a></p>
            </div>
            <div class="row">
                <div class="col mt-3">
                    <div class="jumbotron jumbotron-fluid shadow-lg bg-white">
                        <div class="container">
                            <h1 class="display-4">Kyriakos Michael</h1>
                            <p class="lead">Welcome to your Verry Personal Banking</p>
                            <img src="https://png2.kisspng.com/20180326/brw/kisspng-computer-icons-computer-software-random-icons-5ab9ab4ce2f414.1297504215221174529296.png" style="position:relative; z-index: 10; top: -30px; left: -550px; width: 15% " />
                            <p><i class="fas fa-money-check-alt fa-2x mt-2"></i> Current Balance <span><h2 style="color: green">${{ currentBalance }}</h2></span></p>
                            <button type="button" class="btn btn-outline-dark p-4" data-toggle="modal" data-target="#exampleModal">Invest on my Balance</button>
                            <button type="button" class="btn btn-outline-info p-4 ml-3" data-toggle="modal" data-target="#exampleModal">Instant Loan</button>
                            <button type="button" class="btn btn-outline-primary p-4 ml-3" data-toggle="modal" data-target="#exampleModal">Subscription</button>
                            <button type="button" class="btn btn-outline-success p-4 ml-3" data-toggle="modal" data-target="#exampleModal">Something</button>

                        </div>
                    </div>
                </div>
            </div>

             <vs-divider color="#ad289f">Account</vs-divider>
                    <div class="centerx example-loading">
                        <div
                        class="fill-row-loading">
                        <div
                            :class="{'activeLoading':activeLoading}"
                            @click="openLoading(type)"
                            v-for="type in types" :key="type"
                            :id="[`loading-${type}`]"
                            class="vs-con-loading__container loading-example">
                            </div>
                        </div>
                    </div>

            <!-- Modal -->
            <div class="modal p-5 fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Invest on my Balance</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col text-left">
                                    <h1>Current Balance <span class="badge badge-secondary p-3" style="border-radius: 50px;">${{ currentBalance }}</span></h1>
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Amount</label>
                                            <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount in $$$">
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your personal amount with anyone else.</small>
                                        </div>

                                        <button type="submit" class="btn btn-primary" @click="isSubmit = !isSubmit; currentBalance = calculateBalance">Submit</button>
                                    </form>

                                    <div class="card w-100 mt-2" v-if="isSubmit">
                                        <div class="card-body shadow-lg">
                                            <p class="card-title">You have Succesfully bet on your Personal Account!</p>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>

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

                <vs-tabs vs-alignment="fixed">
                        <vs-tab vs-label="Active Bets">
                            <div>
                                 <vs-list>
                                    <vs-list-header icon="supervisor_account" title="Active"></vs-list-header>
                                    <vs-list-item icon="check" title="$1000" subtitle="An excellent Investment"></vs-list-item>
                                    <p>3 Days Ago</p>
                                    <vs-list-item icon="check" title="$2000" subtitle="This is for your Personal Car Loan"></vs-list-item>  
                                    <p>57 Days Ago</p>                              
                                </vs-list>
                            </div>
                        </vs-tab>
                        <vs-tab vs-label="History">
                            <div>

                            </div>
                        </vs-tab>
                        <vs-tab vs-label="Options">
                            <div>

                            </div>
                        </vs-tab>
                        
                </vs-tabs> 

           
            <div class="row">
                <div class="col mt-5">
                    <h1 class="display-4 text-center">Your Top Spendings</h1>
                </div>
            </div>

<vs-divider color="rgb(29, 222, 194)">Overview</vs-divider>

            <div class="row">
                <div class="card-group mt-5 shadow-lg text-center" style="border-radius: 50px">
                    <div class="card">
                        <img class="card-img-top w-100 rounded mx-auto d-block" src="https://jobapplications.net/wp-content/uploads/starbucks-logo-icon.png" alt="Card image cap">
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
                        <img class="card-img-top rounded mx-auto d-block" src="http://is4.mzstatic.com/image/thumb/Purple122/v4/df/ec/11/dfec1108-ae4e-4a01-3b91-816b8c59c780/mzl.jezyslfb.png/1024x1024bb.png" alt="Card image cap">
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
                        <img class="card-img-top rounded mx-auto d-block" src="https://swappie.fi/wp-content/uploads/2016/06/Apple-logo-grey-880x625.png" alt="Card image cap">
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

            <div class="container-fluid">
                <div class="row mb-5 mt-5">
                    <div class="col">
                        <div class="card" style="border-radius: 50px;">
                            <div class="card-body">
                                <bars :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0]" :gradient="['#679436', '#E55454']">
                                </bars>

                                <div class="card-footer" style="background-color: transparent">
                                    <p class="card-text"><small>An Overview of your Agresivness of spendings</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


  <vs-divider color="dark">History</vs-divider>


            <div class="row">
                <div class="col mb-5">
                    <div class="card">
                        <div class="card-body mt-5">
                            <h2>Latest History</h2>
                            <div class="row">
                                <div class="col">
                              <div>
                                    <vs-table stripe :data="users">
                                        <template slot="header">
                                        <h3>
                                            Users
                                        </h3>
                                        </template>
                                        <template slot="thead">
                                        <vs-th>
                                            Email
                                        </vs-th>
                                        <vs-th>
                                            Name
                                        </vs-th>
                                        <vs-th>
                                            Website
                                        </vs-th>
                                        <vs-th>
                                            Nro
                                        </vs-th>
                                        </template>

                                        <template slot-scope="{data}">
                                        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                                            <vs-td :data="data[indextr].email">
                                            {{data[indextr].email}}
                                            </vs-td>

                                            <vs-td :data="data[indextr].username">
                                            {{data[indextr].name}}
                                            </vs-td>

                                            <vs-td :data="data[indextr].id">
                                            {{data[indextr].website}}
                                            </vs-td>

                                            <vs-td :data="data[indextr].id">
                                            {{data[indextr].id}}
                                            </vs-td>
                                        </vs-tr>
                                        </template>
                                    </vs-table>
                              </div>
  </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


         <div id="parentx">
    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://png2.kisspng.com/20180326/brw/kisspng-computer-icons-computer-software-random-icons-5ab9ab4ce2f414.1297504215221174529296.png"/>

        <h4>
          Kyriakos Michael
        </h4>

      </div>

      <vs-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="gavel">
        History
      </vs-sidebar-item>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="3" icon="verified_user">
        Configurations
      </vs-sidebar-item>
      <vs-sidebar-item index="4" icon="account_box">
        Profile
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" class="text-center" type="flat">log out</vs-button>
      </div>
    </vs-sidebar>
  </div>
    </div>
</template>

<script>
import Vue from "vue";
import Bars from "vuebars";
import axios from "axios";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import "material-icons/iconfont/material-icons.css";
Vue.use(Vuesax);
Vue.use(Bars);

export default {
  data() {
    return {
      colorx: "#4a5153",
      data: "",
      popupActivo5: false,
      isSubmit: false,
      currentBalance: 2000,
      active: false,
      app: {},
      errors: [],
      types: [
        "default",
        "point",
        "radius",
        "corners",
        "border",
        "sound",
        "material"
      ],
      activeLoading: false,
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net"
        }
      ]
    };
  },
  mounted() {
    axios
      .get(`http://localhost:5000/token`)
      .then(response => this.data, console.log("data" + this.data))
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
.main-navbar {
  border: 1px solid #edf2f4;
  background-color: #ffffff;
}

.bet-links:hover {
  font-size: 20px;
  text-transform: uppercase !important;
  color: #247ba0 !important;
}
</style>

