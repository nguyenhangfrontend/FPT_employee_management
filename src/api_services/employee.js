import employee from "../redux/reducers/employee.reducer";
import store from "../redux/store"
export const getListEmployees = () => {
  const items = JSON.parse(localStorage.getItem("employeeList"));
  if (items) {
    store.dispatch(employee.actions.setEmployeeList(items));
  }
};

export const createEmployee = (data) => {
  const oldItems = JSON.parse(localStorage.getItem("employeeList")) || [];
  const itemCreate = { ...data, id: oldItems.length + 1 };
  localStorage.setItem(
    "employeeList",
    JSON.stringify([...oldItems, itemCreate])
  );
  const result = JSON.parse(localStorage.getItem("employeeList"));
  if(result){
    store.dispatch(employee.actions.setCreateSuccess(true));
  }
  
};

export const UpdateEmployee = (id, values) => {
  
  const employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
  const employeeInfo =  employeeList.find((user) => user.id !== id);
  const index = employeeList.indexOf(employeeInfo)
  employeeList[index] = {
    ...values,
    id
  }
  localStorage.setItem(
    "employeeList",
    JSON.stringify(employeeList)
  );
  window.location.href = "/"

};

export const getDetailEmployee = (id) => {
    const employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
    const employeeInfo =  employeeList.find((user) => user.id === parseInt(id));
    if(employeeInfo){
      store.dispatch(employee.actions.setDetail(employeeInfo));
    }
    return employee
};

export const deleteEmployee = (item) => {
  const employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
  const listDeletes = employeeList.filter((user) => user.id !== item.id);
  localStorage.setItem("employeeList", JSON.stringify(listDeletes));
  const result = JSON.parse(localStorage.getItem("employeeList"));
  if(result){
    store.dispatch(employee.actions.setDeleteSuccess(true));
    window.location.href = "/"
  }
  
};
