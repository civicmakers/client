'use strict';

(function() {
	function QuestionDirective () {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/questionsAndAnswers/question.html',
			scope: {},
			controller: QuestionController,
			controllerAs: 'questionCtrl',
			bindToController: {
				questionData: '=data',
                type: '@'
			}
		};
	}

	function QuestionController (QuestionsApi, AuthenticationService, $scope) {
		var self = this;
		this.answersList = [];

		// when a new answer is posted to the question, update it live - this is also what's populating the already existing answers on load
		QuestionsApi.getRefToAnswers(this.questionData.questionId).on('child_added', function(childSnapshot) {
			var answer = childSnapshot.val();
			$scope.$evalAsync(self.answersList.push(answer));
		});

		this.submitAnswer = function() {
			if (!this.newAnswerContent) {
				return;
			}
			// submit new answer
			AuthenticationService.loginWithTwitter().then(function() {
				var userData = AuthenticationService.getAuthData();
				var data = {
					content: self.newAnswerContent,
					authorId: userData.uid,
					authorAvatarUrl: userData.avatar,
					authorDisplayName: userData.displayName,
					createdAt: Date.now()				
				};
				QuestionsApi.addAnswerTo(self.questionData.questionId, data);
				self.clearContent();
			});
		};

		this.clearContent = function() {
			this.newAnswerContent = '';
			// clear all validations from the form
			$scope.answerForm.$setPristine();
			$scope.answerForm.$setValidity();
		    $scope.answerForm.$setUntouched();
		};
	}

	angular.module('civicMakersClientApp').directive('question', QuestionDirective);
})();
