<template v-cloak>
    <div>
        <nav class="navbar fixed-top shadow-lg  main-navbar font-weight-bold" style="color: white">
              <a class="navbar-brand" href="#">Zero</a>
            <!-- <img class="navbar-brand" width="10%" src="../assets/white.png" /> -->

            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Jeniffer Lopez <span class="badge badge-secondary" style="background-color: green">Active</span></a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="#">My Account</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#" :color="colorx" @click="popupActivo5=true" type="filled" ><i class="fas fa-bell" style="color: white"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-envelope" style="color: white"></i></a>
                </li>
                 <li class="nav-item">
                     <a href="#" class="nav-link"><i @click="active = !active" class="fas fa-align-right" style="color: white"></i></a>
                </li>

                 <li class="nav-item ml-5">
                     <a href="http://localhost:8080/#/" class="nav-link"><i class="fas fa-power-off" style="color: white"></i></a>
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

        <div class="container-fluid w3-container w3-center w3-animate-bottom">
            <div class="row">
                <div class="col mt-3">
                    <div class="jumbotron jumbotron-fluid shadow-lg bg-white">
                        <div class="container-fluid">
                            <h1 class="display-4">Jeniffer Lopez</h1>
                            <p class="lead">Welcome to your Zero Banking</p>
                            <p>Last Login: 27/10/2018</p>
                             <div class="w3-animate-opacity mt-1">
                <a class="nav-link disabled" href="#">V.0.3 <span class="badge badge-secondary">Beta</span></a>
                <p style="font-size: 9px" class="text-muted">For more information please visit our official release site: <a href="#" style="color: blue">release.zero.co</a></p>
            </div>
                            <img src="https://png2.kisspng.com/20180326/brw/kisspng-computer-icons-computer-software-random-icons-5ab9ab4ce2f414.1297504215221174529296.png" style="position:relative; z-index: 10; top: -200px; left: -550px; width: 10%;" />
                              <vs-divider color="success">Current Balance</vs-divider>
                            <h1><span class="badge badge-secondary p-3">$200000</span></h1>
                             <vs-divider color="dark">Actions</vs-divider>
                             <div class="row">
                             <div class="col-lg">
                            <button type="button" class="btn btn-outline-dark p-4" data-toggle="modal" data-target="#investModal">Invest on my Balance</button>
                            <button type="button" class="btn btn-outline-info p-4 ml-3" data-toggle="modal" data-target="#instantModal">Instant Loan</button>
                            <button type="button" class="btn btn-outline-primary p-4 ml-3" data-toggle="modal" data-target="#subscriptionModal">Subscription</button>
                            <button type="button" class="btn btn-outline-success p-4 ml-3" data-toggle="modal" data-target="#invoicingModal">e-Invoicing</button>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <vs-divider color="#ad289f">Account</vs-divider>

            <!-- Invest Modal -->
            <div class="modal p-5 fade" id="investModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

            <!-- Instant Loan Modal -->
            <div class="modal p-5 fade" id="instantModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Instant Loan</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary p-3" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-success p-3">Save</button>
                        </div>
                    </div>
                </div>
            </div>
                <!-- Subsrciption Modal -->
            <div class="modal p-5 fade" id="subscriptionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Subscription</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                               
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary p-3" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-success p-3">Save</button>
                        </div>
                    </div>
                </div>
            </div>

                <!-- e-invoicing Modal -->
            <div class="modal p-5 fade" id="invoicingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">e-Invoicing</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">                               
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary p-3" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-success p-3">Save</button>
                        </div>
                    </div>
                </div>
            </div>


                <vs-tabs vs-alignment="fixed" class="active">
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
              <p class="text-monospace"><i>We are using Advance Machine Learning so we can Provide accurate Spending Descriptions</i></p>
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
                         <bars :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0,2,4,10,4,5,6,7,1,5]" :gradient="['#679436', '#E55454']">
                        </bars>

                         <bars :data="[6, 1, 8, 7, 9, 9, 4, 2, 0, 10,]" :gradient="['#679436', '#E55454']">
                        </bars>

                         <bars :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0,2,4,10,4,5,6,7,1,5]" :gradient="['#679436', '#E55454']">
                        </bars>

                         <bars :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0,2,4,10,4,5,6,7,1,5]" :gradient="['#679436', '#E55454']">
                        </bars>

                    </div>
                     

                    <div class="col">
                                 <trend
                            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                            auto-draw
                            smooth>
                            </trend>
                                <trend
                            :data="[6, 1, 8, 7, 9, 9, 4, 2, 0, 10,]"
                            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                            auto-draw
                            smooth>
                            </trend>

                               <trend
                            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                            auto-draw
                            smooth>
                            </trend>

                               <trend
                            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                            auto-draw
                            smooth>
                            </trend>

                        </div>
                </div>
            </div>

  <vs-divider color="dark"> Latest History</vs-divider>


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
import Trend from "vuetrend";

Vue.use(Trend);

import VueFrappe from "vue2-frappe";
Vue.use(VueFrappe);

import VueCharts from "vue-chartjs";
import { Bar, Line } from "vue-chartjs";

Vue.use(VueRouter);
import "material-icons/iconfont/material-icons.css";
Vue.use(Vuesax);
Vue.use(Bars);

export default {
  data() {
    return {
      benedictsWeight2017: [
        480,
        485,
        491,
        489,
        485,
        490,
        497,
        510,
        512,
        521,
        530,
        545
      ],
      benedictsWeight2018: [
        540,
        575,
        570,
        555,
        572,
        580,
        585,
        587,
        588,
        590,
        592,
        590
      ],
      colorx: "#4a5153",
      data: "",
      popupActivo5: false,
      isSubmit: false,
      currentBalance: 2000,
      active: false,
      app: {},
      errors: [],
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
    const res = axios
      .get(`http://localhost:5000/token`)
      .then(response => console.log(response))
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
.main-navbar {
  border: 1px solid #edf2f4;
  background-color: #50514f;
}

.bet-links:hover {
  font-size: 20px;
  text-transform: uppercase !important;
  color: #247ba0 !important;
}
</style>

