<template>
    <div class="   d-flex justify-content-center align-items-center w-100 vh-100 cust-fontsize  text-capitalize " >
        <div class=" custom-padding login-form rounded login-form-color text-light cust-marg cust-width ">
            <div class="login-heading text-center ">
                <p class="content-bottom-margin">Welcome</p>
                <p class="content-bottom-margin">Login to welcome screen</p>
            </div>
            <div class="login-cred ">
                <form class="content-bottom-margin">
                    <div class=" text-white content-bottom-margin">
                        <label for="input-email" class="form-label">Email address</label>
                        <input type="email" class="form-control form-width login-form-color " placeholder="Enter Email (Required)" id="input-email"
                            aria-describedby="emailHelp">

                    </div>
                    <div class="content-bottom-margin position-relative">
                        <label for="inputpassword" class="form-label">Password</label>
                        <input type="password" class="form-control form-width login-form-color " placeholder="Enter Password (Required) "
                            id="input-password">
                            <img src="@/assets/ic_password.svg" alt="Password Icon" class="password-icon mb-">

                    </div>
                    <div class=" form-check content-bottom-margin d-flex justify-content-between">
                      <div class="check">  <input type="checkbox" class="form-check-input" id="Check">
                        <label class="form-check-label" for="Check">Remember Me</label> </div>
                       <div class="rememberme"> <router-link to="/ForgotPassword" class="text-light text-capitalize">forgot password</router-link>

                       </div>
                     </div>
                    <button type="submit" class="btn btn-color  ">Submit</button>
                </form>
                <span class="d-flex justify-content-center mt-0 content-bottom-margin">
                    <hr class="line me-3"><span>or</span>
                    <hr class="line ms-3">
                </span>
            </div>
            <div class="login-with-buttons content-bottom-margin height-btn col-12 d-flex justify-content-between">
                <button type="button" class="btn  rounded p-0 custom-width-btn "><img src="@/assets/goimage.svg"   ></button>
                <button type="button" class="btn rounded p-0 custom-width-btn custom-background-btn"><i
                        class="bi bi-apple text-white"></i></button>
                <button type="button" class="btn rounded p-0 custom-width-btn "><img src="@/assets/Microsoft.svg"> </button>
            </div>
            <div class="go-to-signup text-center">
                if you dont have an account  <router-link to="/SignupScreen" class="text-light ms-1">Signup</router-link>

            </div>
            
        </div>
    </div>
</template>
<style>

#app {
    background-color: #282F40;
}
.position-relative{
position: relative;
}
.password-icon{
position: absolute;
right: 10px;
pointer-events: none;
transform: translateY(-130%);
margin-bottom: 10px;
}
.cust-fontsize{
    font-size: 14px;
}
.custom-background-btn{
    background-color: #505564;
    border-color: grey;
}
.form-width{
    width:390px;
    height:45px;

}
.cust-width {
    width: 432px !important;
    max-width: 432px !important;
    box-sizing: border-box;
    height: auto;
}
.cust-width {
    width: 432px !important;
}


.btn-color{
   background-color: #29CB97;
max-width: 390px;
   width: 100%;
}

.custom-width-btn {
    width: 70px;
    height: 46px;
}

.login-form-color {
    background-color: #3D4353
}

.line {
    width: 100%
}

.height-btn {
    height: 46px;
    font-size: 8px;
}

.content-bottom-margin {
    margin-bottom: 20px;
}

.custom-padding {
    padding: 20px;
}
.formcontrol ::placeholder{
    font-size: 10px;
    font-weight: lighter;

}
/* Keep the background dark and text white on focus */
.form-control {
    background-color: #3D4353; 
    color: #ffffff;
    border: 1px solid #666;
}

.form-control:focus {
    background-color: #3D4353;
    color: #ffffff; 
    border-color: #888; 
    box-shadow: none; 
}

/* Optional: Customize placeholder text color */
.form-control::placeholder {
    color: #ccc; /* Light grey placeholder text */
}

</style>