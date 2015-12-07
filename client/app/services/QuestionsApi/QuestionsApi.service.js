'use strict';

(function() {
	function QuestionsApi(firebase, UserApi, $rootScope) {
		var questionsListRef = firebase.getRefTo('questions');
		var allQuestionsList = [];
		// loads the questions on initialization (just the existing ones)
		questionsListRef.on('child_added', function(childSnapshot) {
			updateQuestionListOnChange(childSnapshot);
		});
		// adds a new question to the list only after it has a question id so answers can be posted immediatly
		questionsListRef.on('child_changed', function(childSnapshot) {
			updateQuestionListOnChange(childSnapshot);
		});

		this.addQuestion = function(objectId, objectType, data) {
			// add the question to the questions list
			var questionRef = firebase.pushData(questionsListRef.toString(), data);
			var questionId = questionRef.key();
			// add the just created question id to the fields of the question itself so the answers will have access to it
			questionsListRef.child(questionId).update({
				questionId: questionId
			});

			// add the question id to the list of question ids in the object (story/tool)
			var questions = {};
			questions[questionId] = true;
			firebase.updateData(firebase.baseUrl + '/' + objectType + '/' + objectId, 'questions', questions);

			// add the question id to the list of questions the user asked
			var userPublicBaseUrl = UserApi.getUsersPublicBaseUrl(data.authorId, questions, 'questions');
			firebase.updateData(userPublicBaseUrl + '/' + data.authorId, 'questions', questions);
		};

		this.addAnswerTo = function(questionId, answerData) {
			questionsListRef.child(questionId).child('answers').push(answerData);
		};

		this.getAllQuestionsList = function() {
			return allQuestionsList;
		};

		this.getQuestionsListByObject = function(objectId) {
			return allQuestionsList.filter(function(question) {
				return question.objectId === objectId;
			});
		};

		this.getRefToAnswers = function (questionId) {
			return firebase.getRefTo('questions/' + questionId + '/answers');
		};

		function updateQuestionListOnChange (childSnapshot) {
			var childData = childSnapshot.val();
			// make sure that the question already has an id in the db and that it doesn't exist in the local list yet
			if (childData && childData.questionId && !isQuestionAlreadyInList(childData.questionId)) {
				allQuestionsList.push(childData);
				$rootScope.$broadcast('newQuestionAdded', allQuestionsList);
			}
		}

		function isQuestionAlreadyInList (questionId) {
			return allQuestionsList.some(function(question) {
				return question.questionId === questionId;
			});
		}
	}

	angular.module('civicMakersClientApp').service('QuestionsApi', QuestionsApi);
})();
