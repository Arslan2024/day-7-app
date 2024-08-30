<template>
    <div class="   d-flex justify-content-center align-items-center w-100 vh-100 cust-fontsize  text-capitalize">
        <div class=" custom-padding signup-form rounded signup-form-color text-light cust-marg cust-width ">
            <div class="signup-heading text-center ">
                <p class=" create-font-size">Create Your Account</p>
                <p class="content-bottom-margin  ">Please Fill In The Required Information
                    To Complete Your Registration</p>
            </div>
            <div class="singup-cred">
                <form class="content-bottom-margin">
                    <div class=" text-white form-bottom-margin">
                        <label for="input-first-name" class="form-label label-font-size">First Name</label>
                        <input type="email" class="form-control form-width signupform-color "
                            placeholder="Enter First Name (Required)" id="input-first-name">

                    </div>
                    <div class=" text-white form-bottom-margin">
                        <label for="input-last-name" class="form-label label-font-size">Last Name</label>
                        <input type="email" class="form-control form-width signup-form-color "
                            placeholder="Enter Last name (Required)" id="input-last-name">

                    </div>
                    <div class=" text-white form-bottom-margin">
                        <label for="input-email" class="form-label label-font-size">Email address</label>
                        <input type="email" class="form-control form-width signup-form-color "
                            placeholder="Enter Email (Required)" id="input-email" aria-describedby="emailHelp">

                    </div>
                    <div class=" text-white form-bottom-margin ">

                        <label for="input-mobile" class="form-label label-font-size">Phone number</label>

                    </div>
                    <div class="row g-2">
                        <div class="col-sm-3 me-0">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown custom-background-btn" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false"> <span class="d-dlex flex-row">+92
                                        <img src="@/assets/ic_dropdown.svg"> </span></button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" type="button">+91</button></li>
                                    <li><button class="dropdown-item" type="button">+93</button></li>
                                    <li><button class="dropdown-item" type="button">+96</button></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <input type="phone" class="form-control form-width signup-form-color ms-0 "
                                placeholder="Enter Mobile Number (Required)" id="input-mobile">

                        </div>


                    </div>
                    <div class="form-bottom-margin position-relative">
                        <label for="inputpassword" class="form-label">Password</label>
                        <input type="password" class="form-control form-width login-form-color " placeholder="Enter Password (Required) "
                            id="input-password">
                            <img src="@/assets/ic_password.svg" alt="Password Icon" class="password-icon mb-">
                    </div>
                    <div class=" form-check form-bottom-margin d-flex justify-content-between">
                        <div class="check"> <input type="checkbox" class="form-check-input" id="Check">
                            <label class="form-check-label" for="Check">Remember Me</label>
                        </div>
                        <div class="rememberme"><router-link to="/ForgotPassword" class="text-light text-capitalize">forgot password</router-link>
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
                <button type="button" class="btn  rounded p-0 custom-width-btn "><img
                        src="@/assets/goimage.svg"></button>
                <button type="button" class="btn rounded p-0 custom-width-btn custom-background-btn"><i
                        class="bi bi-apple text-white"></i></button>
                <button type="button" class="btn rounded p-0 custom-width-btn "><img src="@/assets/Microsoft.svg">
                </button>
            </div>
            <div class=" form-check form-bottom-margin d-flex justify-content-between">
                            <div class="check"> <input type="checkbox" class="form-check-input" id="Check">
                                <label class="form-check-label" for="Check">Agree to Terms of Use. & Privacy
                                    Policy.</label>
                            </div>
                        </div>

 <div class="go-to-signup text-center">
    if you already have an account  <router-link to="/LoginScreen" class="text-light">Signin</router-link>

            </div>

        </div>




    </div>



</template>
<style>
.label-font-size{
    font-size: 13px;
}
.create-font-size{
    font-size: 18px;
}
.cust-fontsize {
    font-size: 14px;
}

.form-width {
    width: 100%;
    height: 45px;

}

.content-bottom-margin {
    margin-bottom: 20px;
}

.form-bottom-margin {
    margin-bottom: 17px;
}

.cust-width {
    width: 100%;
    max-width: 432px;
    box-sizing: border-box;
    height: auto;
}

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
    color: #ccc;
    /* Light grey placeholder text */
}
.signup-form-color {
    background-color: #3D4353
}
</style>