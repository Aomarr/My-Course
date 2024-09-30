import React from "react";
import Login from "../../pages/Login/Login";
import style from './style.module.css'
import Signup from "../../pages/Signup/Signup";
import { MdTimelapse } from "react-icons/md";

export default function LoginModal() {
  return (
    <div className="d-flex">
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className={`modal-dialog modal-dialog-centered ${style.modal}`}>
          <div className="modal-content border-0">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div> */}
            <Login
              change={
                <button
                  className={`btn btn-primary ${style.switch}`}
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Sign up
                </button>
              }
              close={<button
                type="button"
                className={`btn-close ${style.closing}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>}
            />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className={`modal-dialog modal-dialog-centered ${style.modal}`}>
          <div className="modal-content border-0">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div> */}
            <Signup 
            change={
              <button
                className={`btn btn-primary ${style.switch}`}
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Sign In
              </button>
            }
              close={<button
                type="button"
                className={`btn-close ${style.closing}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>} 
            />
          </div>
        </div>
      </div>
      <button
        className={`btn ${style.loginBtn}`}
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Login
      </button>
      <button
        className={`btn ${style.signupBtn}`}
        data-bs-target="#exampleModalToggle2"
        data-bs-toggle="modal"
      >
        <MdTimelapse /> Sign Up</button>
      
    </div>
  );
}
