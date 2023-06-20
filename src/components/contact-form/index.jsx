import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import baseurls from "../../layouts/BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";

const ContactForm = () => {
    const { register, errors, handleSubmit, watch } = useForm({
        mode: 'onBlur',
      });
    const submitForm  = (data,e)=>{
        console.log(data,"data")
        // const formdata  = new FormData();
        // // const data = {
        // //     name: getValues('name'), // Get the value of the 'name' field
        // //     // Add more fields as needed
        // //   };

        axios.post(`${baseurls.baseurl}sent/email`,data).then(response=>{
            if(response.data.status === true){
                Swal.fire({
                    toast: true,
                    icon: "success",
                    title: response?.data?.message,
                    animation: true,
                    position: "top-right",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  e.target.reset();
            }
        }).catch(function(error){
            console.log(error,"error")
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            Swal.fire({
                toast: true,
                icon: "error",
                title: error?.response?.data?.message,
                animation: true,
                position: "top-right",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });
        })

    }

    return (
        <Fragment>
            <form  onSubmit={handleSubmit(submitForm)}
                id="contactForm"
                className="row"
                action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c"
                method="POST"
            >
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name*"
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email*"
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="phone_no"
                        placeholder="Your Phone Number*"
                        ref={register({
                            required: "Phone is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Intrest In*"
                        ref={register({
                            required: "Intrest  is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="col-12 mb-9">
                    <textarea
                        className="form-control massage-control"
                        name="message"
                        id="massage"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        ref={register({
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Well Done!"
                       
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
