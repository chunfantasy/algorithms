const insertion_sort = function(A) {
	for (var j = 1; j < A.length; j++) {
		var key = A[j];
		var i = j - 1;
		console.log(A[j]);
		while(i >= 0 && A[i] > key) {
			A[i+1] = A[i];
			i = i - 1;
		}
		A[i + 1] = key;
	}
	return A;
}

const merge_sort = function() {
	//TODO merge_sort
}

const heap_sort = function() {
	//TODO heap_sort
}

const quick_sort = function() {
	//TODO quick_sort
}

const counting_sort = function() {
	//TODO counting_sort
}

const radix_sort = function() {
	//TODO radix_sort
}

const bucket_sort = function() {
	//TODO bucket_sort
}


module.exports = {
	insertion_sort: insertion_sort,
	merge_sort: merge_sort,
	heap_sort: heap_sort,
	quick_sort: quick_sort,
	counting_sort: counting_sort,
	radix_sort: radix_sort,
	bucket_sort: bucket_sort,
}
