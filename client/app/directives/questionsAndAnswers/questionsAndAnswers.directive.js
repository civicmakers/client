'use strict';

(function() {
	function QuestionsAndAnswersDirective() {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/questionsAndAnswers/questionsAndAnswers.html',
			scope: {},
			controller: QuestionsAndAnswersController,
			controllerAs: 'questionsCtrl',
			bindToController: {
				objectId: '@',
				type: '@'
			}
		};
	}

	function QuestionsAndAnswersController($scope, QuestionsApi, AuthenticationService) {
		var self = this;
		this.isEditing = false;
		this.questions = QuestionsApi.getQuestionsListByObject(self.objectId);
		// get live update when a question is added to the object
		$scope.$on('newQuestionAdded', function() {
			$scope.$evalAsync(self.questions = QuestionsApi.getQuestionsListByObject(self.objectId));
		});
		$scope.$on('openQ&Aedit', function() {
			self.startEditingNewQuestion();
		});

		this.submitQuestion = function() {
			AuthenticationService.loginWithTwitter().then(function() {
				var userData = AuthenticationService.getAuthData();
				var data = {
					content: self.newQuestionContent,
					authorId: userData.uid,
					authorAvatarUrl: userData.avatar,
					authorDisplayName: userData.displayName,
					objectId: self.objectId,
					createdAt: Date.now(),
					answers: []
				};
				QuestionsApi.addQuestion(self.objectId, self.type, data);
				self.clearContent();	
			});
			
		};

		this.startEditingNewQuestion = function() {
			AuthenticationService.loginWithTwitter().then(function() {
				self.isEditing = true;
			});
		};

		this.clearContent = function() {
			this.isEditing = false;
			this.newQuestionContent = null;
			// clear all validations from the form
			$scope.submitQuestionForm.$setPristine();
			$scope.submitQuestionForm.$setValidity();
		    $scope.submitQuestionForm.$setUntouched();
		};
	}

	angular.module('civicMakersClientApp').directive('questionsAndAnswers', QuestionsAndAnswersDirective);
})();
