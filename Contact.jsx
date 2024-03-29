import React, { useState } from "react";
const Contact = () => {

  const [data, setData]= useState({
    fullname:'',
    phone: '',
    message:'',

  });

  const InputEvent = (event) =>{
    const { name , value} = event.target;

  setData((preVal) =>{
    return {
      ...preVal,
      [name]: value,
    };
    });
  };


  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      'My fullname is ${data.fullname}. my mobile number is ${data.phone}, my email is ${data.email}, Here is what I want to say ${data.msg}'
    );
  };
  return (
      <>
      <div className="my-5">
       <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">

              <form onSubmit={formSubmit}>
              <div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">
    Full Name
   </label>
  <input type="text" 
  class="form-control"
   id="exampleFormControlInput1"
    name="full name"
    value={data.name}
    onChange={InputEvent}
    placeholder="name@example.com"
/>
</div> 
<div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">
    Phone
   </label>
  <input type="number" 
  class="form-control"
   id="exampleFormControlInput1"
    name="Phone"
    value={data.Phone}
    onChange={InputEvent}
    placeholder="Enter Your Number" />
</div> 
<div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">
    Email address
   </label>
  <input type="email" 
  class="form-control"
   id="exampleFormControlInput1"
   name="Email"
    value={data.email}
    onChange={InputEvent}
    placeholder="name@example.com" />
</div> 
<div class="mb-3">
  <label for="exampleFormControlTextarea1"
   class="form-label">
    Message
    </label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1"
    rows="3"
    name="message"
    value={data.message}
    onChange={InputEvent}>
</textarea>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</div>
              </form>
            </div>

          </div>

           </div>
           </>
    );
  
};
  export default Contact;
  