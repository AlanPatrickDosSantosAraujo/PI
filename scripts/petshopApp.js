angular.module('petshopApp', ['ngRoute', 'templateDirectives'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/login', {
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginCtrl'
  })
  .when('/Agenda', {
    templateUrl: 'templates/agenda.tpl.html',
    controller: 'AgendaCtrl',
  })
   .when('/Cadastro_Cliente', {
    templateUrl: 'templates/cadastro_cliente.tpl.html',
    controller: 'CadastroClienteCtrl',
  })
   .when('/Consulta_Cliente', {
    templateUrl: 'templates/consulta_cliente.tpl.html',
    controller: 'ConsultaClienteCtrl',
  })
  .when('/Cadastro_Funcionario', {
    templateUrl: 'templates/cadastro_funcionario.tpl.html',
    controller: 'CadastroFuncionarioCtrl'
  })
  .when('/Consulta_Funcionario', {
    templateUrl: 'templates/consulta_funcionario.tpl.html',
    controller: 'ConsultaFuncionarioCtrl'
  })
  .when('/Cadastro_Pet', {
    templateUrl: 'templates/cadastro_pet.tpl.html',
    controller: 'CadastroPetCtrl'
  })
  .when('/Consulta_Pet', {
    templateUrl: 'templates/consulta_pet.tpl.html',
    controller: 'ConsultaPetCtrl'
  })
})

.controller('AppCtrl', [ '$scope', function ($scope) {

}])

.controller('CadastroClienteCtrl', [ '$scope', function ($scope) {
    $scope.petTabSelected = "myPets";
    $scope.mockedPetList = ["Selina", "Billy", "Rex", "Lopes", "Magnólia"];
}])

.controller('ConsultaClienteCtrl', ['$scope', 'MockedClients', function ($scope, MockedClients) {
    $scope.mockedClientList = MockedClients.clientes;
}])

.controller('CadastroFuncionarioCtrl', ['$scope', function ($scope) {

}])

.controller('ConsultaFuncionarioCtrl', ['$scope', function ($scope) {
    $scope.mockedFuncionarioList = ["Carlos Pereira", "Edmilson da Silva"]
}])

.controller('CadastroPetCtrl',['$scope', 'MockedClients', function($scope, MockedClients) {
    $scope.ownerTabSelected = "myOwners"
    $scope.mockedClientList = MockedClients.clientes;
}])

.controller('ConsultaPetCtrl',['$scope', 'MockedClients', function($scope, MockedClients) {
    $scope.mockedPetList = ["Selina", "Billy", "Rex", "Lopes", "Magnólia"];
}])

.controller('AgendaCtrl', ['$scope', function () {

}])

.factory('MockedClients', [function () {
    var factory = {};

    factory.clientes = ["Edson Harada", "Rafael Lucas", "Luan Santana", "João Rafael", "Sandro Favorato"];

    return factory;
}]);
