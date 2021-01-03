app.controller('SuggestionController', [
    '$scope',
    '$routeParams',
    'suggestions',

    function($scope, $routeParams, suggestions) {

        $scope.post = suggestions.posts[$routeParams.id];

        $scope.addComment = function() {

            // if input empty, don't submit
            if(!$scope.body || $scope.body === "") {
                return;
            }

            // push suggestion posts in suggestions.js
            $scope.post.comments.push({
                body: $scope.body,
                upvotes: 0,
            });

            // after submit, clear input
            $scope.body = '';

        }

        $scope.upVoteComment = function(comment) {
            comment.upvotes += 1;
        };
    }
]);