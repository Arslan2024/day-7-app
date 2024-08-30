

<template>
        <div class="   d-flex justify-content-center align-items-center w-100 vh-100 cust-fontsize  text-capitalize">
            <div class=" custom-padding login-form rounded login-form-color text-light cust-marg cust-width ">
                <div class="signup-heading text-center ">
                    <p class=" create-font-size">Create Your Account</p>
                <p class="content-bottom-margin  text-capitalize ">Enter the Email associated with your account and we'll send a Link with instructions to reset your password.</p>
                
                </div>
                <div class="forget-password-cred ">

                 <div class=" text-white content-bottom-margin position-relative">
                        <label for="inputpassword" class="form-label">Password</label>
                        <input type="password" class="form-control form-width login-form-color " placeholder="Enter Password (Required) "
                            id="input-password">
                            <img src="@/assets/ic_password.svg" alt="Password Icon" class="password-icon mb-">
                    </div>
                    <button type="submit" class="btn btn-color content-bottom-margin  text-white">NEXT</button>
                </div>


                <div class="go-to-signup text-center">
               if you already have an account  <router-link to="/LoginScreen" class="text-light">Signin</router-link>
            </div>
            </div>
        </div>
</template>
<style>
.btn-color{
   background-color: #29CB97;
max-width: 390px;
   width: 100%;
}
.form-width {
    width: 100%;
    height: 45px;

}
.login-form-color {
    background-color: #3D4353
}
.content-bottom-margin {
    margin-bottom: 20px;
}

.custom-padding {
    padding: 20px;
}
</style>