angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchResult = '';
  // UPDATE SEARCH
  homePageVm.searchupdate = (value) => {
    homePageVm.searchResult = value;
    updateUrl(value);
  };
  // UPDATE SEARCH
  // UPDATE URL ON SEARCH
  function updateUrl(filterValue) {
    const origin = window.location.origin;
    if (filterValue.trim() === '') {
      history.pushState({}, null, `${filterValue}`);
    } else {
      history.pushState({}, null, `${origin}?filter=${filterValue}`);
    }
  }
  // UPDATE URL ON SEARCH
  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
