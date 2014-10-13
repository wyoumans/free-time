describe('Free Time', function() {

  describe('day', function() {
    it('should calculate completion time for the day by default');
    it('should assume 0 hours have been worked when the `hours` flag is not present');
    it('should assume 0 minutes have been worked when the `minutes` flag is not present');
    it('should assume a total of 8 hours will be worked for the day when the `total` flag is not present');
  });

  describe('week', function() {
    it('should calculate completion time for the week when the `w` flag is present');
    it('should calculate completion time for the week when the `week` flag is present');
    it('should assume a total of 40 hours will be worked for the week when the `total` flag is not present');
  });

  describe('configuration', function(){
    it('should allow updating the default number of hours per week');
    it('should persist any changes to the default number of hours per week');
    it('should allow updating the default number of hours per day');
    it('should persist any changes to the default number of hours per day');
  });
});
