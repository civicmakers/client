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
				objectId: '=id',
				type: '@'
			}
		};

		function QuestionsAndAnswersController($scope, QuestionsApi, AuthenticationService) {
			var self = this;
			this.isEditing = false;
			this.questions = QuestionsApi.getQuestionsListByObject(self.objectId);
			// get live update when a question is added to the object
			$scope.$on('newQuestionAdded', function() {
				$scope.$evalAsync(self.questions = QuestionsApi.getQuestionsListByObject(self.objectId));
			});

			this.submitQuestion = function() {
				var userData = AuthenticationService.getAuthData();
				var data = {
					title: this.newQuestionTitle,
					content: this.newQuestionContent,
					authorId: userData.uid,
					authorAvatarUrl: userData.avatar,
					authorDisplayName: userData.displayName,
					objectId: this.objectId,
					createdAt: Date.now(),
					answers: []
				};
				QuestionsApi.addQuestion(this.objectId, this.type, data);
				this.clearContent();
			};

			this.startEditingNewQuestion = function() {
				this.isEditing = true;
			};

			this.clearContent = function() {
				this.isEditing = false;
				this.newQuestionTitle = null;
				this.newQuestionContent = null;
				// clear all validations from the form
				$scope.submitQuestionForm.$setPristine();
				$scope.submitQuestionForm.$setValidity();
			    $scope.submitQuestionForm.$setUntouched();
			};
		}
	}

	angular.module('civicMakersClientApp').directive('questionsAndAnswers', QuestionsAndAnswersDirective);
})();
