angular.module('BeMEAN', ['ngAnimate', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .when('/users/:email', {
        templateUrl: 'views/user-details.html',
        controller: 'UserDetailsController',
        controllerAs: 'UserDetails'
      })
      .otherwise({
        redirectTo: '/index'
      });
  })
  .controller('UserController', UserController)
  .controller('UserDetailsController', UserDetailsController);

function UserController($routeParams) {
  var vm = this;
  vm.form = {};
  vm.titulo = "BeMEAN - Usuários";
  vm.editing = false;
  vm.reverse = false;
  vm.tituloStyleClass = "h1";

  vm.modelOptions = {
    updateOn: 'blur default',
    debounce: {
      default: 1000,
      blur: 0
    }
  };

  vm.users = [
    {name: 'Gabriel Kalani', email: 'gabrielsilva1956@gmail.com', type: 'student', active: true},
    {name: 'Diego Ferreira', email: 'tuchedsf@gmail.com', type: 'student', active: false},
    {name: 'Franciele Pereira', email: 'fran@quimica.com', type: 'teacher', active: true},
    {name: 'Suissa', email: 'jnascimento@gmail.com', type: 'teacher', active: false},
  ];

  function getKeyLength() {
    return Object.keys(angular.copy(vm.users[0])).length;
  }
  vm.keysLength = getKeyLength();

  vm.orderByName = orderByName;
  function orderByName() {
    vm.predicate = 'name';
    vm.reverse = !vm.reverse;
  }

  vm.orderByEmail = orderByEmail;
  function orderByEmail() {
    vm.predicate = 'email';
    vm.reverse = !vm.reverse;
  }

  vm.add = add;
  function add(user) {
    vm.users.push(angular.copy(user));
    vm.form = {};
  }

  vm.remove = remove;
  function remove(users) {
    vm.users = users.filter(function(el){ return !el.selecionado });
  }

  vm.edit = edit;
  function edit(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index;
    vm.editing = true;
  }

  vm.save = save;
  function save(user) {
    var users = vm.users.map(function(el, i) {
      if(i === user.index) {
        delete user.index;
        return user;
      }
      return el;
    });
    vm.users = users;
    vm.editing = false;
  }
}

function UserDetailsController($routeParams) {
  var vm = this;
  vm.routeParams = $routeParams;
  vm.form = {};
  vm.titulo = "BeMEAN - Usuários";
  vm.editing = false;
  vm.reverse = false;
  vm.tituloStyleClass = "h1";

  vm.modelOptions = {
    updateOn: 'blur default',
    debounce: {
      default: 1000,
      blur: 0
    }
  };

  vm.users = [
    {name: 'Gabriel Kalani', email: 'gabrielsilva1956@gmail.com', type: 'student', active: true},
    {name: 'Diego Ferreira', email: 'tuchedsf@gmail.com', type: 'student', active: false},
    {name: 'Franciele Pereira', email: 'fran@quimica.com', type: 'teacher', active: true},
    {name: 'Suissa', email: 'jnascimento@gmail.com', type: 'teacher', active: false},
  ];

  function getKeyLength() {
    return Object.keys(angular.copy(vm.users[0])).length;
  }
  vm.keysLength = getKeyLength();

  vm.orderByName = orderByName;
  function orderByName() {
    vm.predicate = 'name';
    vm.reverse = !vm.reverse;
  }

  vm.orderByEmail = orderByEmail;
  function orderByEmail() {
    vm.predicate = 'email';
    vm.reverse = !vm.reverse;
  }

  vm.add = add;
  function add(user) {
    vm.users.push(angular.copy(user));
    vm.form = {};
  }

  vm.remove = remove;
  function remove(users) {
    vm.users = users.filter(function(el){ return !el.selecionado });
  }

  vm.edit = edit;
  function edit(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index;
    vm.editing = true;
  }

  vm.save = save;
  function save(user) {
    var users = vm.users.map(function(el, i) {
      if(i === user.index) {
        delete user.index;
        return user;
      }
      return el;
    });
    vm.users = users;
    vm.editing = false;
  }
}