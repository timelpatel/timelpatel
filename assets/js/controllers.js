var timelApp = angular.module('timelApp', []);

timelApp.controller('WorkListCtrl', function ($scope) {
  $scope.companies = [
    {'name': 'Lloyds Banking Group',
     'project': 'Digital Banking Services',
     'file': 'work-lbg.png'},
    {'name': 'Ideaworks 3D',
     'project': 'Call of Duty: Elite',
     'file': 'work-cod.jpg'},
    {'name': 'Evi',
     'project': 'Artificial Intelligence',
     'file': 'work-evi.png'},
    {'name': 'Barclays',
     'project': 'Recruitment',
     'file': 'work-barclays.png'},
    {'name': 'BBC Worldwide',
     'project': 'BBC',
     'file': 'work-bbc.png'},
    {'name': 'Dubblevision London',
     'project': 'Digital Agency',
     'file': 'work-dvl.jpg'}
  ];
});