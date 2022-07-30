angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      searchValue: '<',
    },
  });

angular
  .module('appModule')
  .filter('highlight', function ($sce) {
    return function (tabelText, searchValue) {
      if (!searchValue) {
        return $sce.trustAsHtml(tabelText);
      }
      const highlightedStr = new RegExp(searchValue, 'gi');
      return $sce.trustAsHtml(tabelText.replace(highlightedStr, `<mark class="highlighted-text"> ${searchValue}</mark>`));
    };
  });
function EmployeesListComponent() {}
