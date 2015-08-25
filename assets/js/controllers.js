var timelApp = angular.module('timelApp', []);

timelApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'company': 'Lloyds Banking Group',
     'project': 'Digital Banking Services',
     'file': 'work-lbg.png'},
    {'company': 'Ideaworks 3D',
     'project': 'Call of Duty: Elite',
     'file': 'work-cod.jpg'},
    {'company': 'Evi',
     'project': 'Artificial Intelligence',
     'file': 'work-evi.png'},
    {'company': 'Dubblevision London',
     'project': 'Digital Agency',
     'file': 'work-dvl.jpg'},
    {'company': 'BBC Worldwide',
     'project': 'BBC',
     'file': 'work-bbc.png'},
    {'company': 'Barclays',
     'project': 'Recruitment',
     'file': 'work-barclays.png'}
  ];
});