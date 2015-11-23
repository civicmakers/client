'use strict';

(function() {
	function QuestionDirective() {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/questionsAndAnswers/question.html',
			scope: {},
			controller: 'QuestionController',
			controllerAs: 'questionCtrl',
			bindToController: {
				objectId: '=',
				type: '@',
				data: '='
			}
		};
	}

	function QuestionController() {
	}

	angular.module('civicMakersClientApp').controller('QuestionController', QuestionController);
	angular.module('civicMakersClientApp').directive('question', QuestionDirective);
})();
