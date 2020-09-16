import toastr from "toastr";

export function addTodoErrMsg() {
  toastr.options = {
    closeButton: false,
    debug: false,
    positionClass: "toast-top-center",
    newestOnTop: false,
    showDuration: 100,
    timeOut: 1500,
    progressBar: true,
    preventDuplicates: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
  };
  toastr.error("Please Add a To Do");
}

export function limitReachederrMsg() {
  toastr.options = {
    closeButton: false,
    debug: false,
    positionClass: "toast-top-center",
    newestOnTop: false,
    showDuration: 100,
    timeOut: 1500,
    progressBar: true,
    preventDuplicates: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
  };
  toastr.error("You reached the limit of 10 to do's");
}

export function addTodoSuccessMsg() {
  toastr.options = {
    closeButton: false,
    debug: false,
    positionClass: "toast-top-center",
    newestOnTop: false,
    showDuration: 100,
    timeOut: 1500,
    progressBar: true,
    preventDuplicates: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
  };
  toastr.success("To Do Added Successfully");
}

export function successEditMsg() {
  toastr.options = {
    closeButton: false,
    debug: false,
    positionClass: "toast-top-center",
    newestOnTop: false,
    showDuration: 100,
    timeOut: 1500,
    progressBar: true,
    preventDuplicates: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
  };
  toastr.success("To Do Edited Successfully");
}

export function warningEditMsg() {
  toastr.options = {
    closeButton: false,
    debug: false,
    positionClass: "toast-top-center",
    newestOnTop: false,
    showDuration: 100,
    timeOut: 1500,
    progressBar: true,
    preventDuplicates: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
  };
  toastr.warning("To Do Empty");
}
