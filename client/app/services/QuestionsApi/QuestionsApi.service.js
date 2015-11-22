'use strict';

(function() {
	function QuestionsApi(firebase, UserApi, $rootScope) {
		var questionsListRef = firebase.getRefTo('questions');
		var allQuestionsList = [];
		// whenever a question is added, notify whoever wants to know
		questionsListRef.on('child_added', function(childSnapshot) {
			allQuestionsList.push(childSnapshot.val());
			$rootScope.$broadcast('newQuestionAdded', allQuestionsList);
		});

		this.addQuestion = function(objectId, objectType, data) {
			// add the question to the questions list
			var questionRef = firebase.pushData(questionsListRef.toString(), data);

			// add the question id to the list of question ids in the object (story/tool)
			var questionId = questionRef.key();
			var questions = {};
			questions[questionId] = true;
			firebase.updateData(firebase.baseUrl + '/' + objectType + '/' + objectId, 'questions', questions);

			// add the question id to the list of questions the user asked
			var userPublicBaseUrl = UserApi.getUsersPublicBaseUrl(data.authorId, questions, 'questions');
			firebase.updateData(userPublicBaseUrl + '/' + data.authorId, 'questions', questions);
		};

		this.getAllQuestionsList = function() {
			return allQuestionsList;
		};

		this.getQuestionsListByObject = function(objectId) {
			return allQuestionsList.filter(function(question) {
				return question.objectId === objectId;
			});
		};
	}

	angular.module('civicMakersClientApp').service('QuestionsApi', QuestionsApi);
})();
