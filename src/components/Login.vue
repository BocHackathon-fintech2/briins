<template>
   
        <div class="container font-weight-bold; position: fixed">
            <div class="row">
                <div class="col">
               <div class="card shadow-lg mb-3" style="border-radius: 50px">
                    <div class="card-body">
                        <h1>Zero</h1>
                            <img style="width: 12%; height: 12%" src="https://lh3.googleusercontent.com/rrtMaVcnT6m8Sp9a9-41SttiJyR5r2lp2-wAC3aPqCZ1jhAaicdClQN35zh7NpHu9w" />
                            <img style="width: 30%; height: 30%" class="ml-5 pl-5"  src="https://pbs.twimg.com/profile_images/928963286518910976/KZD7wKh9_400x400.jpg" />
                            <img class="w-25 h-25" src="https://www.lloydsbankinggroup.com/globalassets/images/logos/brand-carousel/lloyds.png" />                            
                        <h5 class="card-title">Login</h5>
                        <form>
                            <div class="form-group text-center">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your Password">
                                 <small id="passwordHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>
                            </div>  
                            <div class="mt-5 mb-5" >                         
                            <a  style="background-color: blue; padding: 15px;margin-left: 400px; margin-right: 400px; color: white" href="https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/oauth2/authorize?response_type=code&redirect_uri=http://localhost&scope=UserOAuth2Security&client_id=48bc5241-c3b2-4065-825c-316faa72fdb6&subscriptionid=Subid000001-1540727285999">LOGIN</a>
                            </div>
                            </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("http://localhost:5000/getaccesstoken")
      //   .then(response => (this.data = response.data))
      .then(response => console.log(response))
      .then()

      //   .then((location.href = "http://localhost:8080/#/main"))

      .catch(e => {
        this.errors.push(e);
      });
    console.log(this.data);
  }
};
</script>

<style scoped>
</style>
