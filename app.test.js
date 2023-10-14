describe('#hasDuplicate', function() {
    it('returns true if array values contain duplicates', function() {
      expect(hasDuplicate([1,3,2,1])).toEqual(true);
      expect(hasDuplicate([1,5,-1,4])).toEqual(false);
    });
});


// ??? TypeError: Constructor Map requires 'new'
describe('#vowelCount', function() {
    it('returns a new map where the keys are the vowels and the value is the amount of each vowel in a given string', function() {
      expect(vowelCount('awesome')).toEqual(Map([ 'a', 1 ], [ 'e', 2 ], [ 'o', 1 ]));
      expect(vowelCount('Colt')).toEqual(Map( [ 'o', 1 ] ));
    });
});